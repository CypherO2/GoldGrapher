"""
GoldGrapher Backend API
"""
from fastapi import FastAPI
import uvicorn
from core.config.settings import settings
from core.config.logger import logger
from fastapi.middleware.cors import CORSMiddleware
from core.routes import users_router

app = FastAPI()

app.include_router(users_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    """
    Startup event for the application.
    """
    logger.info("startup event | GoldGrapher Backend is starting (url: %s, version: %s)", settings.FRONTEND_URL, settings.APP_VERSION)

@app.on_event("shutdown")
async def shutdown_event():
    """
    Shutdown event for the application.
    """
    logger.info("shutdown event | GoldGrapher Backend is shutting down (version: %s)", settings.APP_VERSION)