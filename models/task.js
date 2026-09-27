function getNextTaskID() {
    
}

class TaskException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Task {
    // Attributes
    #id;
    #title;
    #due_date;
    #owner;
    #status;
    #tags;

    // Constructor
    constructor(name, color) {
        this.#id = getNextTaskID();
        this.name = name;
        this.color = color;
    }

    // Setters
    set id(value) {
        throw new TagException("IDs are auto-generated.")
    }

    // Getters
}