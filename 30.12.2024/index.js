document.addEventListener("DOMContentLoaded", () => {
    const taskTable = document.querySelector("#taskTable tbody");
    const searchTask = document.getElementById("searchTask");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const sortTasksBtn = document.getElementById("sortTasksBtn");

    let tasks = [
        { title: "Meeting Place updated to cafe", description: "Meeting at swiss cafe" },
        { title: "Task Manager App Backend issue", description: "Complete a backend API point" },
        { title: "Take a break of 5 mins", description: "Take a break at 3 o'clock" },
        { title: "Meeting with client", description: "Create a google meet link for meeting" },
        { title: "After Deployment", description: "Successfully deployed the app and tested through frontend" },
    ];
    let sortAscending = true;

    // Render tasks
    const renderTasks = () => {
        taskTable.innerHTML = "";
        tasks.forEach((task, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>
                    <button class="action-btn view-btn">View</button>
                    <button class="action-btn edit-btn">Edit</button>
                    <button class="action-btn delete-btn" data-index="${index}">Delete</button>
                </td>
            `;

            // Delete button functionality
            row.querySelector(".delete-btn").addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                tasks.splice(index, 1);
                renderTasks();
            });

            taskTable.appendChild(row);
        });
    };

    // Add a new task
    addTaskBtn.addEventListener("click", () => {
        const title = prompt("Enter task title:");
        const description = prompt("Enter task description:");

        if (title && description) {
            tasks.push({ title, description });
            renderTasks();
        } else {
            alert("Task title and description cannot be empty!");
        }
    });

    // Sort tasks
    sortTasksBtn.addEventListener("click", () => {
        tasks.sort((a, b) => {
            if (sortAscending) return a.title.localeCompare(b.title);
            return b.title.localeCompare(a.title);
        });
        sortAscending = !sortAscending;
        renderTasks();
    });

    // Search tasks
    searchTask.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll("#taskTable tbody tr").forEach((row) => {
            const title = row.children[0].textContent.toLowerCase();
            const description = row.children[1].textContent.toLowerCase();
            row.style.display =
                title.includes(query) || description.includes(query) ? "" : "none";
        });
    });

    renderTasks();
});
