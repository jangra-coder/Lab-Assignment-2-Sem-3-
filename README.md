# Lab Assignment 2 - Student Management REST API

Rahul (2501350043)

Web Dev III (Node.js & Express Backend) - Unit 2

## About

A simple REST API built with Node.js and Express to manage student records
using CRUD operations. No database is used - the data is stored in an array.

## Technology Used

- Node.js
- Express.js
- Postman (for testing)

## Project Structure

```
app.js                    -> main server file
routes/studentRoutes.js   -> all student routes (modular routing)
middleware/logger.js      -> custom logger middleware
data/students.js          -> student data stored in an array
```

## How to Run

```
npm install
node app.js
```

Server runs on http://localhost:3000

## APIs

| Method | URL             | Description         |
| ------ | --------------- | ------------------- |
| GET    | /students       | Get all students    |
| GET    | /students/:id   | Get student by id   |
| POST   | /students       | Add a new student   |
| PUT    | /students/:id   | Update a student    |
| DELETE | /students/:id   | Delete a student    |

### Sample JSON body for POST and PUT

```json
{
  "name": "Neha",
  "age": 20,
  "course": "BCA"
}
```

## Status Codes Used

- 200 - Success
- 201 - Created
- 400 - Bad Request (when required data is missing)
- 404 - Not Found (when student or route does not exist)
