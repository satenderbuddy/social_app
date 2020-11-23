# social_app
social_network app django api 

create virtual environment (example name 'venv') and install packages written in requirements.txt
activate virtual environment

ubuntu
"source venv/bin/activate" 

Windows
"work on venv"
or 
".\venv\Scripts\activate"

mac os
"./venv/activate"

create localsettings.py file in social folder at location "Backend/project/" and add below content with your prefered settings
----------------------------------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'practice',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '',
        'PORT': '',
    }
}

------------------------------------------------------

for Backend setup please follow "social_app/Backend/backend_readme.txt"

