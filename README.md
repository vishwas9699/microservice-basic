# Microservices Project

This project consists of two microservices: **UserService** and **OrderService**. These services are built using Node.js, containerized using Docker, and orchestrated using Docker Compose. This README provides detailed instructions on setting up, running, and testing the services locally.

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
