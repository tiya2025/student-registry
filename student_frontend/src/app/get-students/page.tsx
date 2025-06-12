'use client';
import { useEffect, useState } from 'react';

export default function GetStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/student')
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error('Error fetching students:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>All Students</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: any) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
