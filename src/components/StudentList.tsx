import StudentCard from "./StudentCard";

function StudentList({ students, onDelete, onToggle }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default StudentList;
