import React, { useState } from 'react';

const initialApplications = [
  { id: 1, university: 'University A', program: 'Computer Science', status: 'Pending' },
  { id: 2, university: 'University B', program: 'Business Administration', status: 'Approved' },
  { id: 3, university: 'University C', program: 'Engineering', status: 'Rejected' },
];

function Applications() {
  const [applications, setApplications] = useState(initialApplications);
  const [newApplication, setNewApplication] = useState({ university: '', program: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = applications.length + 1;
    setApplications([...applications, { ...newApplication, id, status: 'Pending' }]);
    setNewApplication({ university: '', program: '' });
  };

  const handleChange = (e) => {
    setNewApplication({ ...newApplication, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Applications</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">New Application</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">University</label>
            <input
              type="text"
              name="university"
              value={newApplication.university}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Program</label>
            <input
              type="text"
              name="program"
              value={newApplication.program}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Application
          </button>
        </form>
      </div>
      <h2 className="text-xl font-semibold mb-2">Your Applications</h2>
      <div className="space-y-4">
        {applications.map((app) => (
          <div key={app.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">{app.university}</h3>
            <p>Program: {app.program}</p>
            <p>Status: <span className={`font-semibold ${app.status === 'Approved' ? 'text-green-600' : app.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>{app.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;

