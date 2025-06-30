from django.urls import path
from .views import PasswordChangeView, RegisterView, ProfileView, LogoutView, ProfileUpdateView, ActivateView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/update/', ProfileUpdateView.as_view(), name='profile-update'),
    path('profile/password/', PasswordChangeView.as_view(), name='password-change'),
    path('activate/<str:token>/', ActivateView.as_view(), name='activate'),
]