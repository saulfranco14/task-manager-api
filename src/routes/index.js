import express from "express";

const router = express.Router();

// Ruta GET para obtener todas las tareas
router.get("/tasks", (req, res) => {
  res.json({ message: "Obtener todas las tareas" });
});

// Ruta GET para obtener una tarea por ID
router.get("/tasks/:id", (req, res) => {
  res.json({ message: "Obtener una tarea por ID" });
});

// Ruta POST para crear una nueva tarea
router.post("/tasks", (req, res) => {
  res.json({ message: "Crear una nueva tarea" });
});

// Ruta PUT para actualizar una tarea existente por ID
router.put("/tasks/:id", (req, res) => {
  res.json({ message: "Actualizar una tarea existente por ID" });
});

// Ruta DELETE para eliminar una tarea existente por ID
router.delete("/tasks/:id", (req, res) => {
  res.json({ message: "Eliminar una tarea existente por ID" });
});

export default router;
