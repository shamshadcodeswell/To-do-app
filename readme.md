# To-Do App

A weekly task management application built with **Node.js**, **Express.js**, and **MongoDB**. Organize and track your todos by day of the week with support for priority levels and completion status.

## Features

- 📅 **Weekly Organization**: Manage todos for each day of the week (Monday - Sunday)
- ✅ **CRUD Operations**: Create, read, update, and delete todos
- 🎯 **Priority Tracking**: Assign high or normal priority to tasks
- 📊 **Status Tracking**: Mark todos as completed or pending
- 🔔 **Timestamps**: Automatic creation and modification timestamps for all todos

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose (v9.7.1)
- **Environment Management**: dotenv
- **Development**: Nodemon (auto-reload on file changes)

## Project Structure

```
├── app.js                 # Main application entry point
├── package.json           # Project dependencies and metadata
├── constants.js           # Database name and constants
├── data.js                # Initial/static data
├── .env                   # Environment variables (MongoDB URI)
├── controllers/
│   └── todo.js           # Business logic for todo operations
├── models/
│   ├── todo.model.js     # Todo schema
│   └── day.model.js      # Day schema
├── routes/
│   ├── auth.js           # Homepage route
│   └── todo.js           # Todo CRUD routes
└── readme.md             # This file
```

## API Endpoints

### Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Homepage with navigation link |
| `GET` | `/todo` | Display all todos for the week |
| `GET` | `/todo/:day` | Get todos for a specific day |
| `POST` | `/todo/:day` | Create a new todo for a day |
| `PUT` | `/todo/:day/query` | Update a specific todo |
| `DELETE` | `/todo/:day/query` | Delete a specific todo |

### Request/Response Examples

#### Get todos for a specific day
```
GET /todo/monday
Response: [
  {
    _id: "...",
    title: "Complete project",
    day: "monday",
    completed: false,
    priority: "high",
    createdAt: "2026-06-18T...",
    updatedAt: "2026-06-18T..."
  }
]
```

#### Create a new todo
```
POST /todo/wednesday
Body: { "title": "Finish linked list questions" }
Response: [todos for wednesday]
```

#### Update a todo
```
PUT /todo/thursday/query?title=make%20todo%20project
Body: { 
  "title": "updated title",
  "day": "thursday",
  "completed": true,
  "priority": "high"
}
Response: [todos for thursday]
```

#### Delete a todo
```
DELETE /todo/friday/query?title=task%20to%20delete
Response: [remaining todos for friday]
```

## Data Model

### Todo Schema

```javascript
{
  title: String (required),
  day: String (enum: monday-sunday, required),
  completed: Boolean (default: false),
  priority: String (enum: high/normal, default: normal),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

### Day Schema

```javascript
{
  day: String (enum: monday-sunday, required),
  todos: ObjectId (ref: Todo),
  timestamps: true
}
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shamshadcodeswell/To-do-app.git
   cd To-do-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create or update `.env` file with your MongoDB connection URI:
   ```
   DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?ssl=true&replicaSet=...&authSource=admin&appName=Cluster0
   ```

4. **Start the application**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:5000`

## Usage

1. Navigate to `http://localhost:5000` in your browser
2. Click the link to access the todo interface
3. Use the API endpoints to create, read, update, and delete todos

## Troubleshooting

### Database Connection Issues

If you encounter `Database connected Successfully !` not appearing:

1. **Ensure `.env` is loaded** - Add to top of `app.js`:
   ```javascript
   require('dotenv').config();
   ```

2. **Verify MongoDB URI** - Check that your `DB_URI` in `.env` contains the database name (e.g., `/tasks?ssl=true...`)

3. **Check credentials** - Ensure username and password are URL-encoded if they contain special characters

4. **Test connection** - Run `node app.js` and check console output for connection status

## Future Enhancements

- User authentication and authorization
- Due dates and reminders
- Recurring todos
- Categories/Tags for todos
- Web UI interface
- API documentation with Swagger

## License

ISC

## Repository

https://github.com/shamshadcodeswell/To-do-app
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