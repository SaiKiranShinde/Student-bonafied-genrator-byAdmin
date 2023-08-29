# Student-bonafied-genrator-byAdmin
## Getting Started
**Clone the Project**
```
git clone https://github.com/SaiKiranShinde/Student-bonafied-genrator-byAdmin.git
```
**Go to the Project directory**

Install Dependences
```
npm install
```
**Go to the sql folder**

Enter the following commands in `cmd`
```
cd sql
mysql -u User-Name -p student < Student_db.sql
Enter password: Your-Password
```
**Go to the Config folder**

Open `db_config` file and change it as per Your database
```js
{
  "user": " User-Name",
  "host": "localhost",
  "password": "Your-Password",
  "database": "student"
}
```
**Start the Server**
```
npm start
```
---
## Website 
+ You can check the project by [Clicking Here](http://localhost:5000)
+ The link will take you to the `login page`
**Login Credentials**
```
Admin login
username: Admin; password:Admin
Student login
username: 123456789; password:123456789
```
+ After successful login it will redirect to the `dashboard`
+ Student Login:
  + In dashboard you can check the functionalities like `Profile`,`Attendance`,`Bonafide`,`Logout`
  + In `Profile` page you can check the student profile.
  + In `Attendance` page you can check the student attendance for one year in percentage
  + In `Bonafide` page you can send the bonafide request to `Admin` if Admin apporve the request the a downloadable Bonafied certificate is visiable on the bonafide page 
+ Note:Only one request per day can be send to Admin.
+ Admin Login:
  + In dashboard you can check the functionalities like `Profile`,`Student Attendance`,`Bonafide Request`,`Logout`
  + `Profile`,`Student Attendance` Not Implemented yet
  + In `Bonafide Request` the admin the approve or reject the request send by the student
    + And server will generates a new Bonafide certificate and send back to the student in downloadable formate.

  ## Website Demo Video
  By [Clicking Here](https://www.loom.com/share/3251a9b271b34d2c9abc1cb4d0681422?sid=79656285-aac7-4f8e-b139-b31869eeb5e8) you can check the Website demo video

