"""
File for handling the firestore logic
"""
from core.config import Settings, logger
from firebase_admin import credentials, initialize_app  # type: ignore
from google.cloud import firestore  # type: ignore


def init_firebase_app():
    """
    Initialise the Firebase app.
    """
    cred = credentials.ApplicationDefault()
    return initialize_app(cred)


# Initialise Firebase app and Firestore
firebase_app = init_firebase_app()
logger.info("FIREBASE | Firebase app initialised")
db = firestore.Client()
logger.info("FIREBASE | Firestore client initialised")