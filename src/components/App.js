// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);  // State to hold the dog image URL
  const [loading, setLoading] = useState(true);    // State to manage loading state

  useEffect(() => {
    // Fetch the dog image when the component mounts
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())           // Parse the JSON from the response
      .then(data => {
        setDogImage(data.message);                 // Set the dog image URL from the API response
        setLoading(false);                         // Set loading to false once the image is fetched
      })
      .catch(error => {
        console.error('Error fetching the dog image:', error);
        setLoading(false);                         // Set loading to false in case of error
      });
  }, []);                                          // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>                          // Show "Loading..." while the image is being fetched
      ) : (
        <img src={dogImage} alt="A Random Dog" />  // Display the dog image once fetched
      )}
    </div>
  );
}

export default App;
