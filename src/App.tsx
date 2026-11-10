import { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ahmed", age: 22, active: true },
    { id: 2, name: "Sara", age: 20, active: false },
    { id: 3, name: "Omar", age: 24, active: true },
  ]);

  const addStudent = (name, age) => {
    const newStudent = {
      id: Date.now(),
      name,
      age,
      active: true,
    };

    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const toggleStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, active: !student.active } : student,
      ),
    );
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <AddStudent onAdd={addStudent} />

      <StudentList
        students={students}
        onDelete={deleteStudent}
        onToggle={toggleStatus}
      />
    </div>
  );
}

export default App;
