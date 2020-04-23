# Install and Run Instructions

1. Install Python and Node.js
2. With Python, use pip in the command prompt to install the following libaries:
- pip install django
- pip install djangorestframework django-cors-headers
- pip install django-allauth
- pip install django-rest-auth
3. For Node.js, open command prompt and go to the frontend folder directory. Run "npm install" to install dependencies
4. (Optional if changes are made to the database) Open a command prompt and go to the backend folder directory. Run "python manage.py makemigrations" then "python manage.py migrate"
5. Open a command prompt and go to the backend folder directory and run "python manage.py runserver" to start it
6. Open another command prompt, go to the frontend folder directory and run "npm start"
7. Go to http://localhost:3000 in your browser to see the project running
