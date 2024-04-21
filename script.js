const { useState } = React;

// Array de tarefas
let tasks = [
    { name: "Trabalho de Matemática", deadline: "30/04/2024", description: "Resolver exercícios dos capítulos 1 e 2", completed: false },
    { name: "Redação sobre Machado de Assis", deadline: "25/04/2024", description: "Escrever um texto de no mínimo 1 página sobre a obra de Machado de Assis", completed: true },
    { name: "Estudar para prova de História", deadline: "28/04/2024", description: "Revisar os principais eventos da Segunda Guerra Mundial", completed: false }
];

// Componente de tarefa
function Task({ task, index }) {
    const [checked, setChecked] = useState(task.completed);

    const handleChange = () => {
        setChecked(!checked);
        toggleTask(index);
    };

    return (
        <div style={{ marginBottom: 10 }}>
            <MuiFormControlLabel
                control={<MuiCheckbox checked={checked} onChange={handleChange} />}
                label={task.name}
            />
            <div>
                <p><strong>Prazo:</strong> {task.deadline}</p>
                <p><strong>Descrição:</strong> {task.description}</p>
            </div>
        </div>
    );
}

// Função para exibir as tarefas
function displayTasks() {
    const tasksContainer = document.getElementById('root');

    ReactDOM.render(
        <div>
            {tasks.map((task, index) => (
                <Task key={index} task={task} index={index} />
            ))}
        </div>,
        tasksContainer
    );
}

// Função para marcar uma tarefa como concluída ou não
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Verifica se há tarefas no armazenamento local
let storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
    tasks = JSON.parse(storedTasks);
}

// Exibe as tarefas
displayTasks();
