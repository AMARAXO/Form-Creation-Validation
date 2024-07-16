function fetchUserData (){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data')
    async function fetchData (apiUrl) {
        try{
            dataContainer.innerHTML = '';
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const users = await response.json();
              const userList = document.createElement('ul');
              users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
              });
              dataContainer.appendChild(userList);
    return users;
  } catch (error) {
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('There was a problem with the fetch operation:', error);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.example.com/users';
    fetchData(apiUrl);
  });