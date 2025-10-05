async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const users = await response.json();

        // Clear any loading message
        dataContainer.innerHTML = '';

        // Create a list of users
        const userList = document.createElement('ul');
        users.forEach((user) => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Error fetching user data:', error);

        // Show error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData
document.addEventListener('DOMContentLoaded', fetchUserData);