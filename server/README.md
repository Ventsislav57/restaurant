
# Server 

## 🛠 Libraries and tools used

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors)
- [Nodemon](https://github.com/remy/nodemon)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://bcrypt.online/)


## Base URL
The Base URL for the API is: `http://localhost:3030`

### Create user 

Send `POST` to `/api/users/register`  service return JSON object with stored data in mnogoDb 
Content look like : { email: String ,firstName:String, phoneNumber: Number, password: String , rePassword: String }
  
### Login 

Send `POST` to `/api/users/login` service return JSON object { email: String ,firstName:String, phoneNumber: Number token:jsonwebtoken ,userId: ObjectId(String)}
Content look like : { email: String , password: String}

###  User profil 

Send `GET` to `/api/users/:userId` service return JSON object { email: String ,firstName:String, phoneNumber: Number token:jsonwebtoken ,userId: ObjectId(String), reservation: [] , orders: []}
  
###  Logout 

Send `GET` to `/api/users/logout` service response with status 204 (no content )

###  Get all users

Send `GET` to `/api/users/` service return JSON object

### Edit user information

Send `PUT` to `/api/users/:userId` service return JSON object