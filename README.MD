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
- [User Request IsGuider Verification](#5-user-request-isguider-verification-mutation)
### Admin
- [Admin Login](#4-admin-login-mutation)
- [Admin Fetch ALL IsGuider Verification Request](#7-admin-fetch-verification-request-query)
- [Admin VERIFY USER ](#8-admin-verify-user-mutation)
### Posts
- [User Create Post](#9-user-create-post-mutation)

### 1. User SignUp: MUTATION

Body

```gql
mutation Example {
  signUp(
    input:{ firstname:"Habimana",
      lastname:"sharif"  ,
      username:"sharif" ,
      password:"test123",
      email:"wizzysharifivk@gmail.com"

}
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
```


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
### 5. User Request IsGuider Verification: MUTATION
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
### 7. Admin Fetch Verification Request: Query
 Body
 ```gql
 query ex {
    verifications{
        cirtificate,
        email,
        username,
    }
}
```
Response
```json
{
    "data": {
        "verifications": [
            {
                "cirtificate": "https://res.cloudinary.com/trio-code/image/upload/v1639554589/f1ktspfks8qwytm3bpjd.jpg",
                "email": "wizzysharifivk@gmail.com",
                "username": "josue"
            },
            {
                "cirtificate": "https://res.cloudinary.com/trio-code/image/upload/v1639437711/jy0yghkwk4mxu6cek36d.jpg",
                "email": "wizzysharifivk@gmail.com",
                "username": "josue"
            },
            {
                "cirtificate": "https://res.cloudinary.com/trio-code/image/upload/v1639317929/hrul2pnjiajjrwtw8urw.jpg",
                "email": "wizzysharifivk@gmail.com",
                "username": "josue"
            },
            {
                "cirtificate": "https://res.cloudinary.com/trio-code/image/upload/v1639317303/b2bpvcxk4iiedomuw19k.jpg",
                "email": "wizzysharifivk@gmail.com",
                "username": "josue"
            },
            {
                "cirtificate": "https://res.cloudinary.com/trio-code/image/upload/v1639316082/ucoawsw80irlauvqe7ga.jpg",
                "email": "wizzysharifivk@gmail.com",
                "username": "josue"
            },
            {
                "cirtificate": "https://res.cloudinary.com/trio-code/image/upload/v1639309047/ycmeodsnqamcpc80xykz.jpg",
                "email": "wizzysharifivk@gmail.com",
                "username": "josue"
            },
            
        ]
    }
}
```
### 8. Admin Verify User: Mutation
Body
```gql
mutation ex{
    adminverify(
    email:"wizzysharifivk@gmail.com"
    ){
     username,
     email,
     isGuider,
     firstname,
     lastname,
     isVerified
    }
}
```
Response
```json
{
    "data": {
        "adminverify": {
            "username": "josue",
            "email": "wizzysharifivk@gmail.com",
            "isGuider": "true",
            "firstname": "Igiraneza",
            "lastname": "Josue",
            "isVerified": "true"
        }
    }
}
```
### 9. User-Create-Post-mutation
body
```gql
mutation ex{
    createPost(
        input:{
     caption:"To night was lit"
      location:"Kigali,Rwanda"
      content:["/home/ty-flex/Downloads/m8c20gchf7231.jpg","/home/ty-flex/Downloads/m8c20gchf7231.jpg","/home/ty-flex/Downloads/m8c20gchf7231.jpg"]
        }
    ){
    content
    location
    }
}
```
Response
``` json
{
    "data": {
        "createPost": {
            "content": [
                "https://res.cloudinary.com/trio-code/image/upload/v1639757067/p6muxrurlher5pb2ryak.jpg",
                "https://res.cloudinary.com/trio-code/image/upload/v1639757077/urqyb3upmgurlz64baou.jpg",
                "https://res.cloudinary.com/trio-code/image/upload/v1639757082/wfrpe94lfimca37poiup.jpg"
            ],
            "location": "Kigali,Rwanda"
        }
    }
}
```
