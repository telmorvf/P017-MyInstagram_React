## 1st SERVER - Configuring the application backend - 184

$ npm init -y - to create backend manually

**packages**

- bcryptjs - user authentication
- cors - different requests in the same localhost
- dotenv - application environment variables (file config: .env)
- express - api backend framework
- express-validator - middlewareare
- jsonwebtoken - authentication tokens
- mongoose - non relational database
- multer - upload of images

$ npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose multer

$ npm i --save-dev nodemon - separate the development dependency

$ add server to pcckge.json in scripts: "server": "nodemon ./app.js"

$ npm run server ==> Response: "Telmo = App running on port: 5000"

## 2nd file dotenv, MVC-Architectur, POSTMAN test API with variables

$ file: .env - dotenv config: process.env.PORT

$ MVC Architecture - controllers, models, routes

$ Router.js - imports, exports,

$ API test with POSTMAN 1 - **Variable:** URL, **Initial value:** http://localhost:5000, **Current value**: http://localhost:5000

$ API test with POSTMAN 2 - **GET:** {{URL}}/ **Result:** "The API test is Working!"

## 3rd Middleware, Database creation, connection configuration /config/db.js

$ Import middleware 1 - solve cors, origin: http://localhost:3000

$ Import middleware 2 - upload folders: uploads/users, uploads/photos, config

$ Import middleware 3 - DB connection, /config/db.js

$ connectiong to mongose - CRETAE DATABASE https://www.mongodb.com/products/platform/atlas-database

$ config db.js with mongodb connection string - Message: "Ligado com suceeso à base de dados!" (server database)

## 4th connection database
