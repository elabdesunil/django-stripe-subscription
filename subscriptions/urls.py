from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="subscriptions-home"),
    path("create-checkout-session/", views.create_checkout_session),
    path("config/", views.stripe_config),
    path("success/", views.success),
    path("cancel/", views.cancel),
    path("webhook/", views.stripe_webhook),

]