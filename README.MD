# TOUR_RADAR API

## INSTALLATION

### Installing Dependencies
Run
`yarn install -g typescript` or `npm install -g typescript`
`yarn install` or `npm i`

### .env

Create a .env file in the root directory and paste in this

```
MONGO_URI=
JWT_SECRET=
```
## Menu

### User
- [User Signup](#1-user-signup-mutation)
- [User LogIn](#2-user-LogIn-mutation)
- [User Verify Email](#3-user-verify-email-mutation)
<<<<<<< HEAD
### Admin
- [Admin Login](#4-admin-login)
=======
- [User Request IsGuider Verification](#4-user-request-isguider-verification-mutation)
>>>>>>> finishes verify guider

### 1. User SignUp: MUTATION

Body

```gql
mutation Example {
  signUp(
      firstname:"Habimana",
      lastname:"sharif"  ,
      username:"ty_flex" ,
      password:"shithole",
      email:"hdidiersharif@gmail.com"


  ){
     firstname
    lastname
    username
    password
    email
    profilePicture
    isVerified
    role
    bio
    website
  createdAt
  }
}


Response
```json
{
    "data": {
        "signUp": {
            "firstname": "Habimana",
            "lastname": "sharif",
            "username": "ty_flex",
            "password": "$2b$10$LoiQg9wiSL4jMcLUNVcAIudrl5k34WKyivvy2ZmEX1uc173kTbqTS",
            "email": "hdidiersharif@gmail.com",
            "profilePicture": "none",
            "isVerified": "false",
            "role": null,
            "bio": "**No Biography**",
            "website": null,
            "createdAt": "1635290132898"
        }
    }
}
```

### 2. User LogIn: MUTATION
Body
```gql
mutation ex{
    logIn(
    account:"wizzysharifivk@gmail.com"
    password:"drop."
    ){
     username,
     email,
     token
    }
}
```
Response
```json
{
    "data": {
        "logIn": {
            "username": "keleva96",
            "email": "wizzysharifivk@gmail.com",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Indpenp5c2hhcmlmaXZrQGdtYWlsLmNvbSIsImlkIjoiNjE5ZTZjNzRkYjdiMjc3NTU3MGQyODM4Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mzc3NzMwMjJ9.CTJmnqpG7TWYSDg8t2QzOkpdRg3rLgZo8n7lfI6t6Is"
        }
    }
}
```
### 3. User Verify Email: MUTATION
Body
```gql
mutation exp{
    verifyEmail(
        token:"eyJhbGciOiJIUzI1NiJ9.d2l6enlzaGFyaWZpdmtAZ21haWwuY29t.eJG2votBkpx957dAHHhfAoLiJLnVxb6CVU8WyX0jD7E"
    )
    { 
        email
    }
}
```
Response
```json
{
    "data": {
        "verifyEmail": {
            "email": "wizzysharifivk@gmail.com"
        }
    }
}
```
### 4. Admin Login
Body
```gql
mutation ex{
    AdminLogin(
        username:"admin",
        password:"admin"
    ){
        role
        token
    }
```
Response
```json
{
    "data": {
        "AdminLogin": {
            "role": "admin",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Mzg4NzY0NjZ9.eUzAxkb3LkpOxNKXUgNAQdgTKR9oDNV8N7kr33IQv-4"
        }
    }
}
```
### 4. User Request IsGuider Verification: MUTATION
Body
```gql
mutation ex{
    verifyGuider(
        cirtificate:"/home/ty-flex/Downloads/m8c20gchf7231.jpg"
    ){
        message
    }
}
```

```json
  {
    "data": {
        "verifyGuider": {
            "message": "verification successfully requested"
        }
    }
}
```
