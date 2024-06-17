Requirements:
- [x] 1. HTTP Client (browser) allows user enter URL and send request to HTTP Server. HTTP Server will send to<br />
HTTP Client the file requested. The file can be a simple file (txt file) (4 points)
- [x] 2. If the requested file is not found, Server response status code 404. (1 points) 
- [x] 3. HTTP Client must have a simple GUI to show the content of file (2 points)
- [x] 4. Your grade is added +1/10 if your server program supports many clients simultaneously.
- [x] 5. Your HTTP system supports POST method, +1/10 will be added into your grade.
- [x] 6. Your HTTP system supports DELETE method, +1/10 will be added into your grade.<br />
Total points: 10/10

# HTTP Project

## Overview

This project is a basic web application that uses PostgreSQL for the database, Spring Boot for the backend, and a JavaScript framework for the frontend. Follow the steps below to set up and run the project on your local machine.

## Prerequisites

- PostgreSQL
- Java (JDK 8 or later)
- Node.js and npm

## Setup Instructions

### 1. Set Up PostgreSQL Database

1. Install PostgreSQL if you haven't already.
2. Open PostgreSQL and create a new database named `data_jpa`.

### 2. Clone the Project

```
git clone <repository-url>
cd <repository-directory>
```

### 3. Configure the Application

1. Open the application.yaml file located in the src/main/resources directory.
2. Update the database configuration section with your PostgreSQL credentials.
3. Update address to your ipv4
```
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/data_jpa
    username: postgres
    password: change_your_password_here
  jpa:
    hibernate:
      ddl-auto: create-drop
    database: postgresql
    show-sql: true
server:
  error:
    include-message: always
  address: 'change_your_ipv4_here'
```

### 4. Run the Backend Server

1. Navigate to the backend directory and install mvn:
```
cd backend
mvn clean install
```
2. Run the backend:
```
java -jar target/jpa-0.0.1-SNAPSHOT.jar
```

### 5. Change frontend ipv4

  To allow multiple client to connect to the server, you have to adjust the ipv4 address according to your server

1. FileDeleter.jsx
  ```
axios.delete(`http://localhost:8080/files/delete/${fileName}`) // change your ipv4 here
  ```
2. FileSearch.jsx
  ```
axios.get(`http://localhost:8080/files/search/${fileName}`) //change your ipv4 here
  ```
3. FileUploader.jsx
  ```
axios.post('http://localhost:8080/files/upload', formData, { // change your ipv4 here
  ```
4. vite.config.js
 ```
  server: {
    host: 'change_your_ipv4_here',
    port: 3000
  }
 ```
### 6. Run the Frontend Server

1. Open a new terminal window.
2. Navigate to the frontend directory and install npm:   
```
cd frontend
npm install
```
3. Start the frontend development server:
```
npm run dev
```
