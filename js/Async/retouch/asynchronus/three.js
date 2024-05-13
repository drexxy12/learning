async function awaitCall() {
    try {
      // Simulating fetching data from an API
      const response = await fetch('https://api.example.com/data');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example usage:
  awaitCall();

  
//   Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('First async function');
  }
  
  async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Second async function');
  }
  
  async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Third async function');
  }
  
  async function chainedAsyncFunctions() {
    console.log('Calling first async function...');
    await firstAsyncFunction();
  
    console.log('Calling second async function...');
    await secondAsyncFunction();
  
    console.log('Calling third async function...');
    await thirdAsyncFunction();
  }
  
  // Example usage:
  chainedAsyncFunctions();
  