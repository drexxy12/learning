// Function to fetch data from an API
async function fetchData() {
    try {
      // Simulating fetching data from an API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
  
  // Function to display fetched data
  function displayData(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = `<h2>Fetched Data:</h2>
                              <p><strong>Title:</strong> ${data.title}</p>
                              <p><strong>Body:</strong> ${data.body}</p>`;
  }
  
  // Function to handle errors
  function handleError(error) {
    console.error('Error:', error.message);
  }
  
  // Async function to orchestrate the process
  async function main() {
    try {
      console.log('Fetching data...');
      const data = await fetchData();
      displayData(data);
      console.log('Data fetched');
    } catch (error) {
      handleError(error);
    }
  }
  
  // Call the main function when the button is clicked
  document.getElementById('fetchButton').addEventListener('click', main);