import json
import datetime
from typing import Annotated
from pydantic import BaseModel
from core.config import logger, Settings
from google.cloud.firestore import FieldFilter  # type: ignore
from core.config.firestore import db

def get_user_by_email(email: str):
    """
    Fetch Users from firestore by their emails
    """
    try:
        logger.info(" [services/auth.py] | Fetching Users")
        users = (db.collection("users").where(filter=FieldFilter("email","==",email)).get())
    except Exception as e:
        logger.error(f" [services/auth.py] | Error Fetching Users: {e}")
