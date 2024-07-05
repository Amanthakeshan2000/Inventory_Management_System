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

# Microservices
The project is divided into six microservices:

1. User Service: Manages user registration, authentication, and authorization.
2. Inventory Service: Handles inventory items, including adding, updating, and deleting items.
3. Request Service: Manages requests for items and places, including approval workflows.
4. Supplier Service: Handles interactions with suppliers for inventory requests.
5. Warehouse Service: Manages the storage and tracking of inventory items within university warehouses.
6. Notification Service: Sends alerts and notifications for requests, approvals, and inventory status updates.

# Technologies Used

  - Frontend: React
  - Backend: Spring Boot
  - Database: Microsoft SQL Server
  - Version Control: GitHub
  - Architecture: Microservices

# Getting Started
To get started with the project, follow these steps:

01. Clone the Repository:
  - git clone https://github.com/your-username/nsbm-inventory-management.git
  - cd nsbm-inventory-management

02. Setup Environment:

  - Ensure you have Java, Node.js, and SQL Server installed.
  - Create a .env file for environment variables.

03. Run Backend Services:
  - cd backend
  - ./mvnw spring-boot:run

04. Run Frontend:

  - cd frontend
  - npm install
  - npm start

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

# Contact

  - For any questions or support, please contact us at support@nsbm-university.com.