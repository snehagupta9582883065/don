from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("",views.index, name="home"),
    path("contact/",views.contact, name="contact"),
    path("aboutus/",views.aboutus, name="aboutus"),
    path("save/",views.save, name="save"),
    path("login/",views.handlelogin,name="login"),


    path("register",views.register_info, name="register"),
    path("login_info",views.login_info, name="login_info"),   
    path("logout", views.logout, name="logout"), 
    path("cart",views.cart,name="cart"),
    path("checkout",views.checkout,name="checkout"),
    path("order",views.order_dtl,name="order"),

]