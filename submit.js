// 📁 /pages/submit.js
import { useState } from 'react';
import { supabase } from '../supabase';

export default function Submit() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    const { error } = await supabase.from('confessions').insert([{ message, approved: false, likes: 0 }]);
    if (!error) {
      setSubmitted(true);
      setMessage('');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Submit Anonymously</h1>
      {submitted ? (
        <p className="text-green-600 text-center">Thank you for your confession! 🙏</p>
      ) : (
        <>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            rows={5}
            placeholder="Write your confession here..."
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
