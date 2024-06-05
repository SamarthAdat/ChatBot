// // // React Component
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Chatbot() {
// //   const [selectedCategory, setSelectedCategory] = useState('');
// //   const [question, setQuestion] = useState('');
// //   const [response, setResponse] = useState('');
// //   const [error, setError] = useState('');

// //   const handleCategoryChange = (category) => {
// //     setSelectedCategory(category);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     try {
// //       if (!selectedCategory) {
// //         setError('Please select a category');
// //         return;
// //       }

// //       const formData = new FormData();
// //       formData.append('category', selectedCategory);
// //       formData.append('question', question);

// //       const response = await axios.post('http://localhost:5002/process_question', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       setResponse(response.data.response);
// //     } catch (error) {
// //       setError('Error processing request');
// //       console.error('Error processing request:', error);
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: '500px', margin: '0 auto' }}>
// //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Chatbot</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div style={{ marginBottom: '10px' }}>
// //           <input type="radio" id="clubs" name="category" value="Clubs" onChange={() => handleCategoryChange('Clubs')} />
// //           <label htmlFor="clubs">Clubs</label>
// //         </div>
// //         <div style={{ marginBottom: '10px' }}>
// //           <input type="radio" id="events" name="category" value="Events" onChange={() => handleCategoryChange('Events')} />
// //           <label htmlFor="events">Events</label>
// //         </div>
// //         <div style={{ marginBottom: '10px' }}>
// //           <input type="radio" id="companies" name="category" value="Companies" onChange={() => handleCategoryChange('Companies')} />
// //           <label htmlFor="companies">Companies</label>
// //         </div>
// //         <br />
// //         <label style={{ marginBottom: '10px', display: 'block' }}>
// //           Enter your question:
// //           <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} style={{ marginLeft: '10px' }} />
// //         </label>
// //         <br />
// //         <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer' }}>Submit</button>
// //       </form>
// //       {error && <p style={{ color: '#ff0000', marginTop: '10px' }}>{error}</p>}
// //       <div style={{ marginTop: '20px' }}>
// //         <h2 style={{ fontSize: '1.2em' }}>Response:</h2>
// //         <p style={{ marginTop: '5px' }}>{response}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chatbot;


// // React Component
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Chatbot.css';

// function Chatbot() {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');
//   const [error, setError] = useState('');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       if (!selectedCategory) {
//         setError('Please select a category');
//         return;
//       }

//       const formData = new FormData();
//       formData.append('category', selectedCategory);
//       formData.append('question', question);

//       const response = await axios.post('http://localhost:5002/process_question', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setResponse(response.data.response);
//     } catch (error) {
//       setError('Error processing request');
//       console.error('Error processing request:', error);
//     }
//   };

//   return (
//     <div className="container" style={{ maxWidth: '500px', margin: '0 auto' }}>
//       <h1 className="heading" style={{ textAlign: 'center', marginBottom: '20px' }}>Chatbot</h1>
//       <form className="form" onSubmit={handleSubmit}>
//         <select className="select" onChange={(e) => handleCategoryChange(e.target.value)}>
//           <option>Select Category</option>
//           <option value="Clubs">Clubs</option>
//           <option value="Events">Events</option>
//           <option value="Companies">Companies</option>
//         </select>

        
//         <div className="response">
//           <h2>Response:</h2>
//           <p>{response}
//           {error && <p className="error">{error}</p>}
//           </p>
//         </div>
//         <div className="input" style={{ marginBottom: '10px', display: 'block' }}>
//           <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
//         </div>

//         <button type="submit" className="submit-btn" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer' }}>Submit</button>

        
//       </form>
//     </div>
//   );
// }

// export default Chatbot;

import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (!selectedCategory) {
        setError('Please select a category');
        return;
      }

      const formData = new FormData();
      formData.append('category', selectedCategory);
      formData.append('question', question);

      const response = await axios.post('http://localhost:5002/process_question', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResponse(response.data.response);
    } catch (error) {
      setError('Error processing request');
      console.error('Error processing request:', error);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        {isOpen ? 'Close Chatbot' : 'Open Chatbot'}
      </button>
      {isOpen && (
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h1 className="heading" style={{ textAlign: 'center', marginBottom: '20px' }}>Chatbot</h1>
          <form className="form" onSubmit={handleSubmit}>
            <select className="select" onChange={(e) => handleCategoryChange(e.target.value)}>
              <option>Select Category</option>
              <option value="Clubs">Clubs</option>
              <option value="Events">Events</option>
              <option value="Companies">Companies</option>
            </select>
            <div className="response">
              <h2>Response:</h2>
              <p>{response}
              {error && <p className="error">{error}</p>}
              </p>
            </div>
            <div className="input" style={{ marginBottom: '10px', display: 'block' }}>
              <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <button type="submit" className="submit-btn" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer' }}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
