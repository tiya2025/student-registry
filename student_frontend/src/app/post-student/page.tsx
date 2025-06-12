'use client';
import { useState } from 'react';

export default function PostStudent() {
  const [form, setForm] = useState({ name: '', email: '', course: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Student added!');
      setForm({ name: '', email: '', course: '' });
    } else {
      alert('Failed to add student.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}


