import datetime
import json
from typing import Annotated

from core.config import Settings, logger
from core.config.firestore import db
from google.cloud.firestore import FieldFilter  # type: ignore
from pydantic import BaseModel


def get_user_by_email(email: str):
    """
    Fetch Users from firestore by their emails
    """
    try:
        logger.info(" [services/auth.py] | Fetching Users")
        users = (
            db.collection("users").where(filter=FieldFilter("email", "==", email)).get()
        )
    except Exception as e:
        logger.error(f" [services/auth.py] | Error Fetching Users: {e}")
