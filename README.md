# Front-End (Angular)

This repository contains Login and SignUp Components along with routing.

## Build and Run

* Install [Node.js](https://nodejs.org/en/)
* Clone repository
* Run `npm install` to install dependencies
* Run `npm run build` to build presentation into `dist` folder. You can put this `dist` folder on a webserver to publish the material.
* Run `npm start` during content creation to build in case of changes and serve using a local dev server
## TODO: Need to integrate with backend module with complete implementation.

# Backend (.NET8)

* Implemented RoleBasedAccessControl Web API Using SQL Database.
* Implemented Auth Controller and Employee Controller

## Added JWT Token Authentication and Role Based Authorization.

## Build and Run

* Install [Microsoft.AspNetCore.Authentication.JwtBearer](8.0.19)
* Install [Microsoft.EntityFrameworkCore](9.0.8)
* Install [Microsoft.EntityFrameworkCore.SqlServer](9.0.8)
* Install [Microsoft.EntityFrameworkCore.Tools](9.0.8)

* Open Package Manager Console and run below commands
    1. Add-Migration Initial
    2. Update-Database

* Tested with postman and handled all validations and exceptions.
* Can be extended further with module level implementations.



