const input = document.getElementById('input');
const submitBtn = document.getElementById('submitBtn');
const tasklist = document.getElementById('tasklist');


const tasks = [];

console.log(tasks);



// Function For Adding a Task
function handleAdd(){
    const taskValue = input.value;

    if (!taskValue) {
        alert('Please enter the task')
        return;
    }
    tasks.push(taskValue)
    input.value = "";
}
submitBtn.addEventListener("click", handleAdd)
