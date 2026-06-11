# To-do App

A simple RESTful to-do application built with Node.js and Express.

## Tech Used

- Node.js
- Express 5
- Nodemon (development)

## Project Overview

This project provides a small backend API for managing a to-do list. It includes routes to:

- list all to-dos
- create a new to-do
- fetch a single to-do by ID
- update a to-do by ID
- delete a to-do by ID

## How It Works

The server listens on port `5000` and exposes two main route groups:

- `/` - a simple homepage route
- `/todo` - RESTful to-do API routes

The app uses Express JSON middleware to parse request bodies for POST and PUT requests.

## Routes

### Homepage

- `GET /`
  - Returns a small welcome page with a link to `/todo`

### To-do API

- `GET /todo`
  - Returns the full list of to-dos

- `POST /todo`
  - Creates a new to-do
  - Request body example:
    ```json
    {
      "title": "Learn Express"
    }
    ```

- `GET /todo/:id`
  - Gets a specific to-do by its ID

- `PUT /todo/:id`
  - Updates a to-do by its ID
  - Request body example:
    ```json
    {
      "title": "Updated title",
      "completed": true
    }
    ```
  - Note: `PUT /todo/` without an `id` will not work because the route requires an `id` parameter.

- `DELETE /todo/:id`
  - Removes the specified to-do from the list

## Example Data

The app starts with a simple in-memory list of to-dos stored in `data.js`.

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open `http://localhost:5000` in your browser or use an API client.

## Example Requests

Create a new to-do:

```bash
curl -X POST http://localhost:5000/todo \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy groceries"}'
```

Update an existing to-do:

```bash
curl -X PUT http://localhost:5000/todo/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated title","completed":true}'
```

Delete a to-do:

```bash
curl -X DELETE http://localhost:5000/todo/1
```

## Notes

- The API uses in-memory storage (`data.js`) so data resets when the server restarts.
- Use `http://localhost:5000/todo/:id` for update and delete operations.
- If you want HTML form support for PUT/DELETE, add `method-override` middleware.

