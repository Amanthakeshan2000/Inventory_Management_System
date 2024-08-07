# NSBM Green University Inventory Management System

Welcome to the NSBM Green University Inventory Management System project. This system is designed to efficiently manage inventory across various departments, including registration, inventory requests, approvals, and tracking of items within the university.

# Project Overview

This system facilitates the management of inventory through a microservices architecture using React for the frontend, Spring Boot for the backend, Microsoft SQL Server for the database, and GitHub for version control. The primary users of the system include students, staff members, store keepers, store keeper head persons, suppliers, and persons in charge of lecture halls and other places.

# Features

1. User Registration:All users (students, staff members, store keepers, etc.) must register in the system.
2. Inventory Management:Store keepers handle the NSBM store inventory, including item requests, approvals, and logging inventory details.
3. Request and Approval Workflow:Store keepers request inventory items, which are approved or rejected by the store keeper head person.
4. Approved items are requested from suppliers and then logged into the system upon receipt.
5. Item and Place Availability:Users can check the availability of items and places, request them, and see their usage details.
6. Return and Maintenance:Users can request item repairs or returns, with approvals and updates managed by store keepers.

# Microservices Structure
The project is divided into more microservices:

##### User Service - User registration, authentication, and authorization. 
###### Endpoints:  
- 	POST /register - Register new users. 
- 	POST /login - User login and token generation. 
- 	GET /users/{id} - Fetch user details. 
- 	PUT /users/{id} - Update user details. 
- 	DELETE /users/{id} - Delete users.

##### Item Service - Manage item details, requests, and categories. 
###### Endpoints: 
- POST /items - Create Items and Update Item (Add Item).
- GET /items - Fetch item list.  
- GET /items/{id} - Fetch item details. 
- POST /categories - Create Categories. 
- GET /categories - Fetch item categories. 
- PUT /categories/{id} - Update item categories. 
- PUT /items/{id} - Update item. 
- DELETE /items/{id} - Delete item.

##### Endpoints: Request Service - Handle item requests, location requests, repair requests, and return.
###### Endpoints: 
- POST /requests - Create a new request (item, location, repair, return). 
- GET /requests - Fetch all requests. 
- GET /requests/{id} - Fetch request details. 
- PUT /requests/{id} - Update a request. 
- DELETE /requests/{id} - Delete a request. 
- PUT /requests/{id}/approve - Approve or reject requests.

##### Approval Service - Manage approvals from supervisors, storekeepers, and head person.
###### Endpoints: 
- GET /approvals - Fetch pending approvals. 
- PUT /approvals/{id} - Approve or reject items or requests.

##### Store Keeper Service - Manage store keeper-specific actions such as item procurement and supplier management. 
###### Endpoints: 
- POST /procurements - Create procurement requests. 
- GET /procurements - Fetch procurement requests. 
- PUT /procurements/{id} - Update procurement requests. 
- DELETE /procurements/{id} - Delete procurement requests. 
- PUT /procurements/{id}/approve - Approve procurement requests. 
- POST /suppliers - Add or update supplier details. 
- GET /suppliers - Fetch suppliers. 
- PUT /suppliers/{id}/select - Select supplier for procurement.

##### Supplier Service - Manage supplier details and pricing. 
###### Endpoints: 
- POST /suppliers/{id}/pricing - Add or update pricing for items. 
- GET /suppliers/{id}/pricing - Fetch supplier pricing details. 
- PUT /suppliers/{id}/pricing - Update pricing for items. 
- DELETE /suppliers/{id}/pricing - Delete pricing for items.

##### Notification Service - Send notifications (e.g., request statuses, approvals). 
###### Endpoints: 
- POST /notifications - Send a notification. 
- GET /notifications - Fetch notifications.


# Technologies Used

  - Frontend: React
  - Backend: Spring Boot
  - Database: Microsoft SQL Server
  - Version Control: GitHub
  - Architecture: Microservices

# Getting Started
To get started with the project, follow these steps:

01. Clone the Repository:
   ```
   git clone https://github.com/Amanthakeshan2000/Inventory_Management_System.git
   ```
   ```
   cd Inventory_Management_System
  ```
02. Setup Environment:

  - Ensure you have Java, Node.js, and SQL Server installed.
  - Create a .env file for environment variables.

03. Run Backend Services:
  ```
   cd backend
   ```
  ```
   ./mvnw spring-boot:run
  ```
04. Run Frontend:
  ```
   cd frontend
  ```
  ```   
   npm install
  ```
  ```
   npm start
  ```
# New Features of Product Version 1.0.1
We are constantly working on improving the system. Here are some new features we plan to implement:

  - Enhanced Reporting: Generate detailed reports on inventory usage, requests, and approvals.
  - Mobile App: Develop a mobile application for easier access and management.
  - AI Integration: Implement AI to predict inventory needs and automate requests.
  - Real-Time Tracking: Real-time tracking of items using RFID or IoT devices.
  - Role-Based Access Control: Fine-grained control over user permissions and roles. 

# Contributing
We welcome contributions from the community! To contribute, follow these steps:

  - Fork the repository.
  - Create a new branch (git checkout -b feature-branch).
  - Make your changes and commit them (git commit -m 'Add new feature').
  - Push to the branch (git push origin feature-branch).
  - Open a Pull Request.

