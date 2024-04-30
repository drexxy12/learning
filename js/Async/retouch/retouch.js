// fetch('http://jsonplaceholder.typicode.com/posts/')
// .then(response => response.json())
// .then(data => {
//     const fetchlist = document.getElementById('fetch-data');
//     data.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = `ID: ${item.id}- title: ${item.title}`;
//     });
// })
// .catch(err => console.log('Error fetching data using fetch', err));
// window.onload = function() {
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(response =>{
//     const axioslist = document.getElementById('axios-data');
//     response.data.forEach(item => {
//       const li = document.createElement('li');
//       li.textContent = `ID: ${item.id}- title: ${item.title}`;
//       axioslist.appendChild(li);  
//     });
// })
// .catch(err => console.log('Error fetching data using Axios:', err));
// }

window.onload = function() {
    reload.get('https://restcountries.com/v3.1/name')
    .then(response =>{
        const axioslist = document.getElementById('reload-data');
        response.data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `ID: ${item.id}- title: ${item.title}`;
          reloadlist.appendChild(li);  
        });
    })
    .catch(err => console.log('Error fetching data using reload:', err));
    }