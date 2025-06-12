'use client';
import { useState } from 'react';

export default function DeleteStudent() {
  const [id, setId] = useState('');

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    const confirmed = confirm(`Are you sure you want to delete student ID ${id}?`);
    if (!confirmed) return;

    const res = await fetch(`http://localhost:3000/student/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert(`Student with ID ${id} deleted!`);
      setId('');
    } else {
      alert('Failed to delete student.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Delete Student</h2>
      <form onSubmit={handleDelete}>
        <input
          type="number"
          placeholder="Enter Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
