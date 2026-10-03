
from core.config import logger
from core.config.firestore import db
from google.cloud.firestore import FieldFilter  # type: ignore


def get_user_by_email(email: str):
    """Return Firestore user documents with this email."""
    try:
        logger.info(" [services/auth.py] | Fetching Users")
        return (
            db.collection("users")
            .where(filter=FieldFilter("email", "==", email))
            .get()
        )
    except Exception as e:
        logger.error(f" [services/auth.py] | Error Fetching Users: {e}")
        return None
