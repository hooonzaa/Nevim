const students = [];

function InputŽáci() {
    const userInput = document.getElementById("userInput").value.trim();

    if (userInput) {
        students.push(userInput);
        displayStudents();
        document.getElementById("userInput").value = "";
    }
}

function Delete() {
    if (students.length === 0) {
        alert("Seznam žáků je prázdný.");
        return;
    }

    students.length = 0; 
    displayStudents(); 
}

function displayStudents() {
    const studentElement = document.getElementById("ListofStudents");
    studentElement.textContent = "Žáci: " +  students.join(",");
}