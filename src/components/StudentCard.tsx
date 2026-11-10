function StudentCard({ student, onDelete, onToggle }) {
  return (
    <div>
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>

      <p>Status: {student.active ? "Active" : "Inactive"}</p>

      <button onClick={() => onDelete(student.id)}>Delete</button>

      <button onClick={() => onToggle(student.id)}>Toggle Status</button>
    </div>
  );
}

export default StudentCard;
