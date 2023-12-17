This is an MERN app for a monthly yoga class form.

Routes : 

"/" :
the form start with these route rendering login page.
Old users can directly login.
New users can go to register page for registration using button


"/register" :
Registers new users.
Performs basic validation for eligiblity for classes.
redirects to login page on successfull registration

"/enroll" :
Allows user to select time slot can enroll in current month by giving payment options.
user will only be allowed to enroll if haven't already done so in current month

Database: 
![image](https://github.com/yrk12/assignment/assets/86778498/612f4195-298c-4d19-b2dd-e7f64b799269)

Users - stores user information

                username : unique identifier

                password : password for the user

                name : name of the user

                age : age of the user




Slot - slot information for enrollments

                username : username of the user

                time : time slot of the day

                monthYear : stores string specifying month and year of enrollment
