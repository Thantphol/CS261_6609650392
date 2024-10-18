function submitLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Input validation
    if (!username || !password) {
        document.getElementById('message').innerText = 'Please enter both username and password.';
        return;
    }

    // Show loading message
    document.getElementById('message').innerText = 'Logging in...';

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU8f7ef334dead1289891160cc12d65c7a434766e2e4e478e10d4fc1d5fadab4608951b6d69b4888b66d25e0ba29a315fe' // Consider securing this
        },
        body: JSON.stringify({ UserName: username, PassWord: password })
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Update UI with response data
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('status').innerText = 'Status: ' + data.status; 
        document.getElementById('type').innerText = 'Type: ' + data.type;
        document.getElementById('username').innerText = 'Username: ' + data.username;
        document.getElementById('tu_status').innerText = 'TU Status: ' + data.tu_status;
        document.getElementById('statusid').innerText = 'Status ID: ' + data.statusid;
        document.getElementById('displayname_th').innerText = 'Display Name (TH): ' + data.displayname_th;
        document.getElementById('displayname_en').innerText = 'Display Name (EN): ' + data.displayname_en;
        document.getElementById('email').innerText = 'Email: ' + data.email;
        document.getElementById('department').innerText = 'Department: ' + data.department;
        document.getElementById('faculty').innerText = 'Faculty: ' + data.faculty;

        // Optionally clear input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'Login failed. Please try again.';
    });
}
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleBtn = document.getElementById('togglePasswordBtn');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // แสดงรหัสผ่าน
        toggleBtn.textContent = 'Hide'; // เปลี่ยนข้อความเป็น "Hide"
    } else {
        passwordField.type = 'password'; // ซ่อนรหัสผ่าน
        toggleBtn.textContent = 'Show'; // เปลี่ยนข้อความเป็น "Show"
    }
}
const roleSelect = document.getElementById('role');

roleSelect.addEventListener('change', () => {
  const selectedRole = roleSelect.value;
  console.log(`Selected role: ${selectedRole}`);
});