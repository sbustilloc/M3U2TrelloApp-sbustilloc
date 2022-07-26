const ApiURL = "https://my-json-server.typicode.com/sbustilloc/M3U2TrelloApp-sbustilloc";

axios
    .get(`${ApiURL}/task`)
    .then((res) => showAllTask(res.data))
    .catch((err) => console.error(err))

const showAllTask = (data) => {
    data.map((task) => createTask(task));
};

const createTask = (task) => {

    let newTask = document.createElement("article");
    newTask.classList.add("card");

    let taskTitle = document.createElement("h3");
    taskTitle.classList.add("card-title");
    taskTitle.innerText = task.title;

    let taskResponsible = document.createElement("p");
    taskResponsible.classList.add("card-responsible");
    taskResponsible.innerHTML = '<span class="card-responsible">Responsable:</span> ${task.person}';

    let taskDetails = document.createElement("p");
    taskDetails.classList.add("card-details");
    taskDetails.innerHTML = '<span class="card-details">Descripción: </span>  ${task.details}';

    let taskDate = document.createElement("p");
    taskDate.classList.add("card-date");
    taskDate.innerHTML = '<span class="card-date">Plazo: </span>  ${dateFormat(task.deadline)}';
}
