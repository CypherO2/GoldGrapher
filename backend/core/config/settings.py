from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    APP_NAME: str = "GoldGrapher"
    APP_VERSION: str = "0.1.0prerelease"
    APP_DESCRIPTION: str = "GoldGrapher, Your all in one money management dashboard. Track your income, design budget and log your progress."
    APP_AUTHOR: str = "Charles J Presley"
    FRONTEND_URL: str = "http://localhost:3000"
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")