
import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// GET /api/todos - get all todos
router.get("/", async (req, res) => {
  try {
    // all records in todo in descending order
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/todos - create todo
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    // creating a new todo using the schema and saving it in db
    const todo = await Todo.create({ title: title.trim() });
    res.status(201).json(todo);

  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/todos/:id - update todo (e.g., toggle completed or update title)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    // behaves like findOne({ _id: id }) that is Looks up a single document whose _id matches the given id.
    //The matching document, or null if no document with that _id exists.
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (typeof title === "string") {
      todo.title = title.trim();
    }
    if (typeof completed === "boolean") {
      todo.completed = completed;
    }

    // .save()
    // Checks what fields have changed on this document.
    // // Runs validation and middleware (if defined in the schema).
    // // Sends an update (or insert if new) to MongoDB.
    // // Returns the updated document from MongoDB.
    const updated = await todo.save();
    res.json(updated);

  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/todos/:id - delete todo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Shortcut for: find a document by _id and delete it in a single operation.
    // Equivalent to findOneAndDelete({ _id: id }).
    const deleted = await Todo.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted" });
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;