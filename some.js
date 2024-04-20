// Function to handle user registration and save data to CSV
function registerUser(name, email, password) {
    // Create a new user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Convert user data to CSV format
    const userDataCSV = convertToCSV([user]);

    // Write CSV data to a file
    writeCSVToFile(userDataCSV, 'user_data.csv');
}

// Function to convert user data to CSV format
function convertToCSV(data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const user of data) {
        const values = headers.map(header => {
            const escaped = ('' + user[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
}

// Function to write CSV data to a file
function writeCSVToFile(csvData, filename) {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Example usage:
const userName = 'John Doe';
const userEmail = 'john@example.com';
const userPassword = 'password123';

registerUser(userName, userEmail, userPassword);
