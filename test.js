// ========================
// "DATABASE"
// ========================

let data = {
    "users": [],
    "tasks": [],
    "tags": []
}

// =======================
// Tag Data
// =======================

createTag("Home", "#ef476f");
createTag("College", "#ffd166");
createTag("Work", "#06d6a0");
createTag("Social", "#118ab2");
createTag("Random", "#073b4c");

// =======================
// User Data
// =======================

createUser("José", "jose@gmail.com", "123456789");
createUser("María", "maria@gmail.com", "987654321");
createUser("Morelos", "morelos@gmail.com", "987654321");
createUser("Pavón", "pavon@gmail.com", "987654321");

// =======================
// Task Data
// =======================

// Para José [1]
createTask("Hola1", "2026-09-18", "", "1", "F", [1, 2]);
createTask("Hola2", "2026-09-25", "holaaa", "1", "A", [2]);

// Para María [2]
createTask("Adiós1", "2026-09-18", "adios", "2", "F", [3, 2]);
createTask("Adiós2", "2026-09-25", "", "2", "A", [2]);

// Para Morelos [3]
createTask("bye", "2026-09-30", "bye", "3", "C", [3]);