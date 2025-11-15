from pydantic import BaseModel, EmailStr, Field
# from enum import Enum
from datetime import datetime

class User(BaseModel):
    """
    User model
    """
    id: str | None = Field(default=None)
    username: str
    email: EmailStr
    is_admin: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)

class UserCreate(BaseModel):
    """
    User Creation Model
    """
    username: str
    email: EmailStr
    is_admin: bool = Field(default=False)
