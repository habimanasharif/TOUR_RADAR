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
- [User Update Profile](#13-user-update-profile-mutation)
- [User fetch User Profile](#16-user-fetch-user-profile-query)
- [User Update Profile Picture](#17-user-updtae-profile-picture-mutation)

### Admin
- [Admin Login](#4-admin-login-mutation)
- [Admin Fetch ALL IsGuider Verification Request](#7-admin-fetch-verification-request-query)
- [Admin VERIFY USER ](#8-admin-verify-user-mutation)
### Posts
- [User Create Post](#9-user-create-post-mutation)
- [User Fetch All Posts](#10-user-fetch-posts-query)
- [User Delete Own Post](#11-user-delete-own-posts-mutation)
### Likes
- [User Like Post](#12-user-like-post-mutation)

### Follow
- [User Follow Other User](#14-user-follow-other-user-mutation)
- [User UnFollow Other User](#15-user-follow-other-user-mutation)

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

### 10. User Fetch Posts-Query
Body
```gql
query ex{
    posts{
        _id
        owner{
            _id
            username
            profilePicture
        }
        likes{
                username
                profilePicture
          
        }
        isLiked
        likesNo
        content
        location
        createdAt
    }
}
```
Response
```json
{
    "data": {
        "posts": [
            {
                "_id": "61c325c31b0cf98eda97b771",
                "owner": {
                    "_id": "61bbb4a966cdd3c3a93e4bee",
                    "username": "sharif",
                    "profilePicture": "none"
                },
                "likes": [
                    {
                        "username": "sharif",
                        "profilePicture": "none"
                    },
                    {
                        "username": "keleva",
                        "profilePicture": "none"
                    },
                    {
                        "username": "keleva",
                        "profilePicture": "none"
                    }
                ],
                "isLiked": true,
                "likesNo": 3,
                "content": [
                    "https://res.cloudinary.com/trio-code/image/upload/v1640179116/wok5mebmxzw9t5nrhfhi.jpg",
                    "https://res.cloudinary.com/trio-code/image/upload/v1640179129/r1hf2hw17mfymhk8caud.jpg",
                    "https://res.cloudinary.com/trio-code/image/upload/v1640179138/fq4jc71gwsfruv813cu6.jpg"
                ],
                "location": "Kigali,Rwanda",
                "createdAt": 1640179139997
            }
        ]
    }
}
```
### 11. User Delete Own Posts-mutation
Body
```gql
mutation ex{
    deletePost(id:"61bcbe59c3cc2b437cfcbb26")
    {
        message
    }
}
```
Response
```json
{
    "data": {
        "deletePost": {
            "message": " Post Deleted Successfully"
        }
    }
}
```
### 12 User Like Post-Mutation
Body
```gql
mutation ex{
    likePost(postId:"61c325c31b0cf98eda97b771"){
message
}
}
```
Response
```json
{
    "data": {
        "likePost": {
            "message": " Post liked Successfully"
        }
    }
}
```
### 13 User Update Profile-Mutation
Body
```gql
mutation ex{
    updateUser(
        input:{
            firstname:"Tyflex"
            lastname:"umuhuza"
            bio:"tyflex is cool"
        }
        ){
        bio
        firstname
        lastname
    }
}
```
Response
```json
{
    "data": {
        "updateUser": {
            "bio": "tyflex is cool",
            "firstname": "Tyflex",
            "lastname": "umuhuza"
        }
    }
}
```
### 14 User Follow Other User-mutation
Body
```gql
mutation ex{
    followUser(userId:"61c5d14e7971b5c9a44d78a8")
    {
    message
    }
}
```
Response
```json
{
    "data": {
        "likePost": {
            "message": " User Followed Successfully"
        }
    }
}
```
### 15 User Follow Other User-mutation
Body
```gql
mutation ex{
    unfollowUser(userId:"61c5d14e7971b5c9a44d78a8")
    {
    message
    }
}
```
Response
```json
{
    "data": {
        "likePost": {
            "message": " User UnFollowed Successfully"
        }
    }
}
```
### 16 User Fetch User Profile Query
Body
```gql
query ex {
    userProfile(
       userId:"61c5ccf3a197b25038a11bad"
    ){
      username
      firstname
      lastname
      bio
      isGuider
      isFollowing
      isUser
      posts{
          _id
          location
          content
          caption
          isLiked
          likesNo
          createdAt
          caption
          likes{
              username
              profilePicture
          }
      }
      followers
      following
      allFollowers{
          username
          profilePicture
      }
      allFollowing{
          username
          profilePicture
      }
    }
}
```
Response
```json
{
    "data": {
        "userProfile": {
            "username": "kelevaj",
            "firstname": "Umuhuza",
            "lastname": "Clever",
            "bio": "**No Biography**",
            "isGuider": "true",
            "isFollowing": false,
            "isUser": true,
            "posts": [
                {
                    "_id": "61cab12e91f1cd2ef9a16f26",
                    "location": "Kigali,Rwanda",
                    "content": [
                        "https://res.cloudinary.com/trio-code/image/upload/v1640673556/bsj5cgor6tybtjynb6go.jpg",
                        "https://res.cloudinary.com/trio-code/image/upload/v1640673570/wkqwlhhorynijfmad0lr.jpg",
                        "https://res.cloudinary.com/trio-code/image/upload/v1640673581/ylj4yhjauuxzxw71ovug.jpg"
                    ],
                    "caption": "To night was lit",
                    "isLiked": true,
                    "likesNo": 1,
                    "createdAt": 1640673582673,
                    "likes": [
                        {
                            "username": "kelevaj",
                            "profilePicture": "none"
                        }
                    ]
                }
            ],
            "followers": 0,
            "following": 1,
            "allFollowers": [],
            "allFollowing": [
                {
                    "username": "sheezy",
                    "profilePicture": "none"
                }
            ]
        }
    }
}
```
### 17 User Updtae Profile Picture-Mutation
Body
```gql
mutation ex {
   updateProfilePicture(picture:"/media/ty-flex/files/greencard/CROPPED-_DSC3111.JPG"){
        message
    }
}
```
Response
```json
{
    "data": {
        "updateProfilePicture": {
            "message": "Profile Picture Update successfully"
        }
    }
}
```