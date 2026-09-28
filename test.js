// ================================
// "DATABASE"
// ================================
let data = {
    "users": [],
    "tasks": [],
    "tags": []
}

// ================================
// PUNTO 1: Datos Vacíos
// ================================

console.log("<============= PUNTO 1 =============>");
console.log("Users: ");
console.table(getAllUsers());
console.log("Tasks: ");
console.table(getAllTasks());
console.log("Tags: ");
console.table(getAllTags());

// ================================
// PUNTO 2: Crear 3 Usuarios
// ================================

console.log("<============= PUNTO 2 =============>");
console.log("Creating User 1...");
createUser("José", "jose@gmail.com", "123456789");
console.log("Creating User 2...");
createUser("María", "maria@gmail.com", "987654321");
console.log("Creating User 3...");
createUser("Morelos", "morelos@gmail.com", "987654321");
console.log("All users correctly created!");
console.table(getAllUsers())

// ================================
// PUNTO 3: Buscar usuario por ID
// ================================

console.log("<============= PUNTO 3 =============>");
console.log("Información del Usuario con ID = 2:");
console.table(getUserById(2))

// ================================
// PUNTO 4: Buscar usuario por filtro
// ================================

console.log("<============= PUNTO 4 =============>");
console.log("Información del Usuario con nombre Morelos:");
console.table(searchUsers("name", "Morelos"))

// ================================
// PUNTO 5: Modificar usuario
// ================================

console.log("<============= PUNTO 5 =============>");
console.log("Modificar el nombre de usuario con ID 3:");
console.log("Actualización realizada:", updateUser(3, {name: "ACTUALIZADORX"}))
console.table(getAllUsers())

// ================================
// PUNTO 6: Eliminar usuario
// ================================

console.log("<============= PUNTO 6 =============>");
console.log("Eliminar usuario con ID 1:");
console.log(deleteUser(1))
console.table(getAllUsers())

// ================================
// PUNTO 7: Crear 5 etiquetas
// ================================

console.log("<============= PUNTO 7 =============>");
console.log("Creando 5 etiquetas...");
createTag("Home", "#ef476f");
createTag("College", "#ffd166");
createTag("Work", "#06d6a0");
createTag("Social", "#118ab2");
createTag("Random", "#073b4c");
console.table(getAllTags())

// ================================
// PUNTO 8: Modificar Etiqueta
// ================================

console.log("<============= PUNTO 8 =============>");
console.log("Modificar etiqueta con ID 4:");
updateTag(4, {name: "ETIQUETADORX", color: "#fcba03"});
console.table(getAllTags());

// ================================
// PUNTO 9: Eliminar etiqueta
// ================================

console.log("<============= PUNTO 9 =============>");
console.log("Eliminar etiqueta con ID 2:");
deleteTag(2)
console.table(getAllTags());

// ================================
// PUNTO 10: Crear 7 tareas
// ================================

console.log("<============= PUNTO 10 =============>");
console.log("Creando 7 tareas...");
// Para usuario [2]
createTask("Hola1", "2026-09-18", "", "2", "F", [1, 3]);
createTask("Hola2", "2026-09-25", "holaaa", "2", "A", [1, 4]);
createTask("Hola3", "2026-09-08", "holaaa", "2", "C", [1, 5]);
createTask("Hola4", "2026-09-16", "", "2", "F", [3, 1]);
// Para usuario [3]
createTask("Adiós1", "2026-09-18", "adios", "3", "F", [3, 4]);
createTask("Adiós2", "2026-09-07", "", "3", "A", [3, 5]);
createTask("Adiós3", "2026-09-28", "", "3", "A", [4, 5]);
console.table(getAllTasks());

// ================================
// PUNTO 11: Modificar tarea
// ================================

console.log("<============= PUNTO 11 =============>");
console.log("Modificar tarea con ID 5:");
updateTask(5, {tags: ""});
console.table(getAllTasks());

// ================================
// PUNTO 12: Modificar tareas
// ================================

console.log("<============= PUNTO 12 =============>");
console.log("Modificar tarea con ID 1 y 4:");
updateTask(1, {description: "Dorx Task"});
updateTask(4, {description: "Dorx Task"});
console.table(getAllTasks());

// ================================
// PUNTO 13: Filtrar tareas
// ================================

console.log("<============= PUNTO 13 =============>");
console.log("Tareas con Dorx en la descripción:");
console.table(searchTasks("description", "Dorx"));

// ================================
// PUNTO 14: Filtrar tareas
// ================================

console.log("<============= PUNTO 14 =============>");
console.log("Tareas con etiqueta 5:");
console.table(searchTasks("tags", 5));

// ================================
// PUNTO 15: Eliminar tareas
// ================================

console.log("<============= PUNTO 15 =============>");
console.log("Eliminar tarea con ID 3:");
deleteTask(3);
console.table(getAllTasks());