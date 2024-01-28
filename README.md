# Task Manager API

La **Task Manager API** es una aplicación que proporciona una interfaz de programación de aplicaciones (API) para gestionar tareas pendientes de manera eficiente. Esta API es ideal para desarrolladores que desean implementar una funcionalidad de gestión de tareas en sus aplicaciones web o móviles.

## Características

- Crear, editar, eliminar y visualizar tareas pendientes.
- Cambiar el estatus de las tareas entre "pendiente" y "completada".
- Filtrar tareas por estatus.
- No se requiere autenticación.

# Configuración del Proyecto

## Clonar el Repositorio

Para empezar, clona este repositorio en tu máquina local:

```shell
git clone https://github.com/saulfranco14/task-manager-api
```

Configura la base de datos MongoDB en `db.js`:

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tareaapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

```

## Rutas de la API

### POST /tasks

- **Descripción**: Crea una nueva tarea.
- **Detalles**: Esta ruta permite crear una nueva tarea. Debes proporcionar los datos de la tarea en el cuerpo de la solicitud en formato JSON.

### GET /tasks

- **Descripción**: Obtiene todas las tareas.
- **Detalles**: Esta ruta devuelve una lista de todas las tareas pendientes en la base de datos.

### GET /tasks/:id

- **Descripción**: Obtiene una tarea específica por ID.
- **Detalles**: Proporciona el ID de la tarea como parte de la URL para obtener los detalles de esa tarea específica.

### PUT /tasks/:id

- **Descripción**: Actualiza una tarea existente.
- **Detalles**: Utiliza esta ruta para actualizar una tarea existente. Debes proporcionar el ID de la tarea que deseas actualizar y los nuevos datos en formato JSON.

### DELETE /tasks/:id

- **Descripción**: Elimina una tarea existente.
- **Detalles**: Esta ruta permite eliminar una tarea específica según su ID. Una vez eliminada, la tarea ya no estará disponible en la lista de tareas.

## Uso

La API ya está desplegada y disponible en línea en [](). 

Puedes acceder a la API utilizando un navegador web o realizar solicitudes HTTP desde tu aplicación.