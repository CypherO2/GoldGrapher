"""
Centralised logging configuration for Pippin Backend.

This module provides a unified logger instance with consistent formatting
across all backend modules.
"""

import logging

# Configure logging format and level for the application
logging.basicConfig(level=logging.INFO, format="%(name)s | %(levelname)s | %(message)s")

# Create the main application logger
logger = logging.getLogger("GoldGrapher Backend")

# Reduce noise from uvicorn's error logger
logging.getLogger("uvicorn.error").setLevel(logging.ERROR)
