"""
GoldGrapher Backend API
"""
from fastapi import FastAPI
import uvicorn
from core.config.settings import Settings
from core.config.logger import logger
from routes import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title=Settings.APP_NAME, version=Settings.APP_VERSION, description=Settings.APP_DESCRIPTION)

app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[Settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    """
    Startup event for the application.
    """
    logger.info("startup event | GoldGrapher Backend is starting (url: %s, version: %s)", Settings.FRONTEND_URL, Settings.APP_VERSION)

@app.on_event("shutdown")
async def shutdown_event():
    """
    Shutdown event for the application.
    """
    logger.info("shutdown event | GoldGrapher Backend is shutting down (version: %s)", Settings.APP_VERSION)