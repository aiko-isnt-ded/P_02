// =======================
// Functions
// =======================

function createTask(title, due_date, description, owner, status, tags = []) {
    let obj = new Task(title, due_date, description, owner, status, tags);
    data.tasks.push(obj);
}

function getTaskById(id) {
    let task = data.tasks.find(task => task.id == id);
    return task || "404 - Task not found.";
}

function searchTasks(attribute, value) {
    if (!Task.prototype.hasOwnProperty(attribute)) {
        throw new TaskException(`Attribute ${attribute} does NOT exist.`)
    }

    return data.tasks.filter(task => {
        // Handle dates
        if (attribute == "due_date") {
            return task.due_date.includes(value);
        }

        // Return filtered value
        return String(task[attribute]).includes(String(value))
    });
}

function getAllTasks() {
    return data.tasks;
}

function updateTask(id, obj_new_info) {
    let updated = false;
    // Search Task
    let task = data.tasks.find(task => task.id == id);

    // Check if task exists
    if (!task) {
        throw new TaskException(`Task with ID ${id} does NOT exist.`);
    }

    // Iterate through attributes until we find the correct one
    for (let attr in obj_new_info) {
        // Check if attribute exists and is not id nor due_date
        if (Task.prototype.hasOwnProperty(attr) && attr != "id") {
            task[attr] = obj_new_info[attr];
            updated = true;
        }
    }

    // Exception if there was no update
    if (!updated) {
        throw new TaskException("Invalid attribute.");
    }

    return updated;
}

function deleteTask(id) {
    let index = data.tasks.findIndex(task => task.id == id);

    if (index == -1) {
        throw new TaskException(`Task with ID ${id} does NOT exist.`);
    }
    return data.tasks.splice(index, 1);
}

function findTasksByTag(tags) {
    if (!Array.isArray(tags)) {
        throw new TaskException("Tags MUST be an array.");
    }

    return data.tasks.filter(task =>
        tags.every(tagID => task.tags.includes(tagID))
    );
}

// =======================
// Fill Data
// =======================

// Para José [1]
createTask("Hola1", "2026-09-18", "", "1", "F", [1, 2]);
createTask("Hola2", "2026-09-25", "holaaa", "1", "A", [2]);

// Para María [2]
createTask("Adiós1", "2026-09-18", "adios", "2", "F", [3, 2]);
createTask("Adiós2", "2026-09-25", "", "2", "A", [2]);

// Para Morelos [3]
createTask("bye", "2026-09-30", "bye", "3", "C", [3]);