'use client';
import { useState } from 'react';

export default function UpdateStudent() {
  const [id, setId] = useState('');
  const [form, setForm] = useState({ name: '', email: '', course: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/student/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Student updated!');
      setId('');
      setForm({ name: '', email: '', course: '' });
    } else {
      alert('Update failed.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        /><br /><br />
        <input
          name="name"
          placeholder="New Name"
          value={form.name}
          onChange={handleChange}
        /><br /><br />
        <input
          name="email"
          placeholder="New Email"
          value={form.email}
          onChange={handleChange}
        /><br /><br />
        <input
          name="course"
          placeholder="New Course"
          value={form.course}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}
