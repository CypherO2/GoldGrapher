"""
File for handling the firestore logic
"""
import firebase_admin
from firebase_admin import firestore
from backend.core.config.logger import logger

# Application Default credentials are automatically created.
try:
    app = firebase_admin.initialize_app()
    logger.info("[firestore.py] | Firestore Initialisation | App Initialised")
    db = firestore.client()
    logger.info("[firestore.py] | Firestore Initialisation | `db` Variable Initalised")
except Exception as e:
    logger.error(f"[firestore.py] | Firestore Initialisation | {e} ")
