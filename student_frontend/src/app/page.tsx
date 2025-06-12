import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎓 Student Registry System</h1>
      <p>Welcome! Choose an action:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <Link href="/post-student"><button>Add New Student</button></Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link href="/get-students"><button>View All Students</button></Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link href="/update-students"><button>Update Student Info</button></Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link href="/delete-students"><button>Delete a Student</button></Link>
        </li>
      </ul>
    </div>
  );
}


