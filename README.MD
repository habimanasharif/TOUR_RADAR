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