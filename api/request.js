const ApiURL = "https://my-json-server.typicode.com/sbustilloc/M3U2TrelloApp-sbustilloc";

//Hacemos una petición get a la API Fake utlizando los templates strings
axios
  .get(`${ApiURL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

// Filtramos toda la información que recibimos de la API y la mapeamos
function showAllTasks(data) {
    data.map((task) => createTask(task));
}

const createTask = (task) => {
  // Creamos la estructura de las tarjetas desde el JS
  let newTask = document.createElement("article");
  //Creamos un elemento article y le pasamos una clase card-task
  newTask.classList.add("card");

  // Creamos un H3 para el titulo de las tarjetas
  let taskTitle = document.createElement("h3");
  // le añadimos una clase card-task__title
  taskTitle.classList.add("card-title");
  // y le añadimos el title de nuestra API "task.title"
  taskTitle.innerText = task.title;

  //creamos una etiqueta parrafo
  let taskResponsible = document.createElement("p");
  //le añadimos una clase card-task__responsible
  taskResponsible.classList.add("text-danger");
  // le pasamos los datos del responsable de la tarea desde la API
  taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator">Responsable:</span> ${task.person}`;

  // Creamos una etiqueta parrafo
  let taskDetails = document.createElement("p");
  //le añadimos una clase card-task__details
  taskDetails.classList.add("text");
  // Le pasamos los datos desde la API y los imprimimos en las tarjetas
  taskDetails.innerHTML = `<span class="card-task__details--task-details">Descripción:</span> ${task.details} `;

  //Creamos una etiqueta parrafo para crear la fecha
  let taskDate = document.createElement("p");
  //le pasamos la clase card-task__date
  taskDate.classList.add("text-info");
  // Le añadimos la fecha que traemos desde la API utilizando los template string
  taskDate.innerHTML = `<span class="card-task__date--tag-date">Plazo:</span> ${dateFormat(
    task.deadline
  )}`;

  let taskCreate = document.createElement("p");
  taskCreate.classList.add("text-info");
  taskCreate.innerHTML = `<span class="card-task__date--tag-date">Creación:</span> ${dateFormat(
    task.created
  )}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreate);

  // Referenciamos por medio del ID las columnas
  let columnToDo = document.querySelector("#todoTasks");
  let columnInProgress = document.querySelector("#progressTasks");
  let columnDone = document.querySelector("#doneTasks");

  // Preguntamos dependiendo el state que trae nuestra API es igual a to-do lo ubique en esa columna
  if (task.state === "pending") {
    columnToDo.appendChild(newTask);
  }
  if (task.state === "progress") {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === "done") {
    columnDone.appendChild(newTask);
  }
};