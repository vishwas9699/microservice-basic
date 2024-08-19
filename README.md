# Microservices Project

This project consists of two microservices: **UserService** and **OrderService**. These services are built using Node.js, containerized using Docker, and orchestrated using Docker Compose. This README provides detailed instructions on setting up, running, and testing the services locally.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setting Up the Project](#setting-up-the-project)
  - [1. Clone the Repositories](#1-clone-the-repositories)
  - [2. Install Dependencies](#2-install-dependencies)
- [Developing Microservices](#developing-microservices)
- [Containerizing with Docker](#containerizing-with-docker)
- [Running the Microservices](#running-the-microservices)
- [Testing the Microservices](#testing-the-microservices)
- [Pushing to GitHub](#pushing-to-github)

## Project Structure

The project has the following structure:

```plaintext
microservices/
  ├── user-service/
  │   ├── src/
  │   │   └── index.js
  │   ├── Dockerfile
  │   └── package.json
  └── order-service/
      ├── src/
      │   └── index.js
      ├── Dockerfile
      └── package.json
```

- user-service/: Manages user-related operations.
- order-service/: Manages order-related operations, interacts with user-service.
