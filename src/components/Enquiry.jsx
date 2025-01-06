import React, { useState } from 'react';

const initialEnquiries = [
  { id: 1, question: 'What are the admission requirements?', answer: 'Admission requirements vary by program. Please check our website for specific details.' },
  { id: 2, question: 'How can I apply for a student visa?', answer: 'We have a dedicated team to assist you with the visa application process. Please contact our international student office.' },
];

function Enquiry() {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [newQuestion, setNewQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = enquiries.length + 1;
    setEnquiries([...enquiries, { id, question: newQuestion, answer: 'Pending response from admin.' }]);
    setNewQuestion('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Enquiry</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ask a Question</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Your Question</label>
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="w-full p-2 border rounded"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Question
          </button>
        </form>
      </div>
      <h2 className="text-xl font-semibold mb-2">Your Enquiries</h2>
      <div className="space-y-4">
        {enquiries.map((enquiry) => (
          <div key={enquiry.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Q: {enquiry.question}</h3>
            <p className="mt-2">A: {enquiry.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Enquiry;

