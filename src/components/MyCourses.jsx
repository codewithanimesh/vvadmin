import React from 'react';

const courses = [
  { id: 1, name: 'Introduction to Immigration Law', progress: 60 },
  { id: 2, name: 'English Language Proficiency', progress: 80 },
  { id: 3, name: 'Cultural Adaptation', progress: 40 },
];

function MyCourses() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{course.name}</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="mt-2">{course.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;

