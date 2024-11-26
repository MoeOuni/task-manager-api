# Project Management API Documentation

## Endpoints Summary 

### 1. Get All Projects
- **URL:** `/projects`
- **Method:** `GET`
- **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
    - **Status:** `200 OK`
    - **Body:**
      ```json
      {
        "status": "success",
        "results": <number_of_projects>,
        "data": {
          "projects": [
            {
              "_id": "<project_id>",
              "name": "<project_name>",
              "description": "<project_description>",
              "status": "active",
              "startDate": "<start_date>",
              "endDate": "<end_date>",
              "members": ["<user_id1>", "<user_id2>"],
              "createdAt": "<timestamp>",
              "updatedAt": "<timestamp>"
            },
            ...
          ]
        }
      }
      ```

### 2. Get Project by ID
- **URL:** `/projects/one/:id`
- **Method:** `GET`
- **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
    - **Status:** `200 OK`
    - **Body:**
      ```json
      {
        "status": "success",
        "data": {
          "project": {
            "_id": "<project_id>",
            "name": "<project_name>",
            "description": "<project_description>",
            "status": "active",
            "startDate": "<start_date>",
            "endDate": "<end_date>",
            "members": ["<user_id1>", "<user_id2>"],
            "createdAt": "<timestamp>",
            "updatedAt": "<timestamp>"
          }
        }
      }
      ```

### 3. Get My Projects
- **URL:** `/projects/me`
- **Method:** `GET`
- **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
    - **Status:** `200 OK`
    - **Body:**
      ```json
      {
        "status": "success",
        "results": <number_of_projects>,
        "data": {
          "projects": [
            {
              "_id": "<project_id>",
              "name": "<project_name>",
              "description": "<project_description>",
              "status": "active",
              "startDate": "<start_date>",
              "endDate": "<end_date>",
              "members": ["<user_id1>", "<user_id2>"],
              "createdAt": "<timestamp>",
              "updatedAt": "<timestamp>"
            },
            ...
          ]
        }
      }
      ```

### 4. Create a Project
- **URL:** `/projects`
- **Method:** `POST`
- **Headers:**
    - `Authorization: Bearer <token>`
    - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "<project_name>",
    "description": "<project_description>",
    "status": "active",
    "startDate": "<start_date>",
    "endDate": "<end_date>",
    "members": ["<user_id1>", "<user_id2>"]
  }
    ```

- **Response:**
  - **Status:** `201 Created`
  - **Body:**
    ```json
    {
      "status": "success",
      "message": "Project '<project_name>' created successfully ✅",
      "data": {
        "project": {
          "_id": "<project_id>",
          "name": "<project_name>",
          "description": "<project_description>",
          "status": "active",
          "startDate": "<start_date>",
          "endDate": "<end_date>",
          "members": ["<user_id1>", "<user_id2>"],
          "createdAt": "<timestamp>",
          "updatedAt": "<timestamp>"
        }
      }
    }
    ```

### 5. Update a Project
- **URL:** `/projects/:id`
- **Method:** `PUT`
- **Headers:**
    - `Authorization: Bearer <token>`
    - `Content-Type: application/json`
- **Body:**
    ```json
    {
      "name": "<project_name>",
      "description": "<project_description>",
      "status": "active",
      "startDate": "<start_date>",
      "endDate": "<end_date>",
      "members": ["<user_id1>", "<user_id2>"]
    }
    ```
- **Response:**
    - **Status:** `201 Created`
    - **Body:**
      ```json
      {
        "status": "success",
        "message": "Project '<project_name>' updated successfully ✅",
        "data": {
          "project": {
            "_id": "<project_id>",
            "name": "<project_name>",
            "description": "<project_description>",
            "status": "active",
            "startDate": "<start_date>",
            "endDate": "<end_date>",
            "members": ["<user_id1>", "<user_id2>"],
            "createdAt": "<timestamp>",
            "updatedAt": "<timestamp>"
          }
        }
      }
      ```

### 6. Delete a Project
- **URL:** `/projects/:id`
- **Method:** `DELETE`
- **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
    - **Status:** `204 No Content`
    - **Body:**
      ```json
      {
        "status": "success",
        "message": "Project '<project_name>' deleted successfully ✅",
        "data": null
      }
      ```

### 7. Get All Tasks for a Project
- **URL:** `/tasks/project/:id`
- **Method:** `GET`
- **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
    - **Status:** `200 OK`
    - **Body:**
      ```json
      {
        "status": "success",
        "results": <number_of_tasks>,
        "data": {
          "tasks": [
            {
              "_id": "<task_id>",
              "name": "<task_name>",
              "description": "<task_description>",
              "code": "T-0001",
              "status": "backlog",
              "priority": "low",
              "dueDate": "<due_date>",
              "projectID": "<project_id>",
              "assignee": "<user_id>",
              "createdBy": "<user_id>",
              "createdAt": "<timestamp>",
              "updatedAt": "<timestamp>"
            },
            ...
          ]
        }
      }
      ```

### 8. Get My Tasks
- **URL:** `/tasks/me`
- **Method:** `GET`
- **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
    - **Status:** `201 Created`
    - **Body:**
      ```json
      {
        "status": "success",
        "results": <number_of_tasks>,
        "data": {
          "tasks": [
            {
              "_id": "<task_id>",
              "name": "<task_name>",
              "description": "<task_description>",
              "code": "T-0001",
              "status": "backlog",
              "priority": "low",
              "dueDate": "<due_date>",
              "projectID": "<project_id>",
              "assignee": "<user_id>",
              "createdBy": "<user_id>",
              "createdAt": "<timestamp>",
              "updatedAt": "<timestamp>"
            },
            ...
          ]
        }
      }
      ```

### 9. Get Task by ID
- **URL:** `/tasks/one/:id`
- **Method:** `GET`
- **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
    - **Status:** `200 OK`
    - **Body:**
      ```json
      {
        "status": "success",
        "data": {
          "task": {
            "_id": "<task_id>",
            "name": "<task_name>",
            "description": "<task_description>",
            "code": "T-0001",
            "status": "backlog",
            "priority": "low",
            "dueDate": "<due_date>",
            "projectID": "<project_id>",
            "assignee": "<user_id>",
            "createdBy": "<user_id>",
            "createdAt": "<timestamp>",
            "updatedAt": "<timestamp>"
          }
        }
      }
      ```

### 10. Create a Task
- **URL:** `/tasks`
- **Method:** `POST`
- **Headers:**
    - `Authorization: Bearer <token>`
    - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "<task_name>",
    "description": "<task_description>",
    "status": "backlog",
    "priority": "low",
    "dueDate": "<due_date>",
    "projectID": "<project_id>",
    "assignee": "<user_id>"
  }
    ```
- **Response:**
  - **Status:** `201 Created`
  - **Body:**
    ```json
    {
      "status": "success",
      "message": "Task 'T-0001' created successfully ✅",
      "data": {
        "task": {
          "_id": "<task_id>",
          "name": "<task_name>",
          "description": "<task_description>",
          "code": "T-0001",
          "status": "backlog",
          "priority": "low",
          "dueDate": "<due_date>",
          "projectID": "<project_id>",
          "assignee": "<user_id>",
          "createdBy": "<user_id>",
          "createdAt": "<timestamp>",
          "updatedAt": "<timestamp>"
        }
      }
    }
    ``` 

### 11. Update a Task
- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Headers:**
    - `Authorization: Bearer <token>`
    - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "<task_name>",
    "description": "<task_description>",
    "status": "backlog",
    "priority": "low",
    "dueDate": "<due_date>",
    "projectID": "<project_id>",
    "assignee": "<user_id>"
  }
    ```
- **Response:**
  - **Status:** `201 Created`
  - **Body:**
    ```json
    {
      "status": "success",
      "message": "Task 'T-0001' updated successfully ✅",
      "data": {
        "task": {
          "_id": "<task_id>",
          "name": "<task_name>",
          "description": "<task_description>",
          "code": "T-0001",
          "status": "backlog",
          "priority": "low",
          "dueDate": "<due_date>",
          "projectID": "<project_id>",
          "assignee": "<user_id>",
          "createdBy": "<user_id>",
          "createdAt": "<timestamp>",
          "updatedAt": "<timestamp>"
        }
      }
    }
    ```
    
### 12. Delete a Task
- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Headers:**
    - `Authorization: Bearer <token>
    - `Content-Type: application/json`
- **Response:**
    - **Status:** `204 No Content`
    - **Body:**
      ```json
      {
        "status": "success",
        "message": "Task 'T-0001' deleted successfully ✅",
        "data": null
      }
      ``` 
