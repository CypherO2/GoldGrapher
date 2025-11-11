"""
GoldGrapher Backend API
"""
from fastapi import FastAPI
import uvicorn
from core.config.settings import Settings
from core.config.logger import logger

app = FastAPI(title=Settings.APP_NAME, version=Settings.APP_VERSION, description=Settings.APP_DESCRIPTION)

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

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True) 
