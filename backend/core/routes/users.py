from fastapi import APIRouter

router = APIRouter(prefix="/users")


@router.get("")
def get_users_endpoint():
    """
    Get all users.
    """
    return None


@router.post("/verify")
async def verify_domain_endpoint():
    """
    Verify the domain of the user.
    """
    return None
    # return create_user(user_create)