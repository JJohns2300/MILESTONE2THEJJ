const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// CONNECTS TO DATABASE//
mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to the database!"))
  .catch(error => console.error("Error connecting to the database:", error));

const Todo = require('./models/todo');

// RETRIEVE TO-DO/TASK//
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// CREATE A NEW TODO//
app.post('/todo/new', async (req, res) => {
  try {
    const todo = new Todo({
      Text: req.body.text
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// FUNCTION ALLOWS US TO DELETE TODOS//
app.delete('/todo/delete/:id', async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// CHECKBOX FOR COMPLETED TASKS//
app.put('/todo/complete/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.complete = !todo.complete;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server opened on port ${PORT}!`));
