import Todo from "../models/todoModel.js";

export const addTodo = async (req, res) => {
  const { title, time } = req.body;

  try {
    if (!title && !time) {
      return res.status(402).json({ data: "all fileds are required" });
    }
    const addTodo = new Todo({
      title,
      time,
    });
    await addTodo.save();
    res.status(201).json({ data: "todo Added" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "internal sever erro" });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({createdAt: -1});
    res.status(201).json({data:todos});
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "internal sever erro" });
  }
};

export const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const get = await Todo.findById(id);
    res.status(201).json(get);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "internal sever erro" });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const updated = req.body;

  try {
    await Todo.findByIdAndUpdate(id, updated);
    res.status(201).json({ data: "updated" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "internal sever erro" });
  }
};
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(201).json({ data: "updated" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "internal sever erro" });
  }
};
