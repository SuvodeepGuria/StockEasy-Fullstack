// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    });
});

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateRequired(value) {
    return value.trim() !== '';
}

function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const form = document.querySelector('form');
    if (form) {
        form.insertBefore(alertDiv, form.firstChild);
        
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}

// Login form handler
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Clear previous alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Validation
    if (!validateRequired(email)) {
        showAlert('Email is required', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (!validateRequired(password)) {
        showAlert('Password is required', 'error');
        return;
    }
    
    if (!validatePassword(password)) {
        showAlert('Password must be at least 6 characters long', 'error');
        return;
    }
    
    // Simulate login process
    const submitBtn = document.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Signing In...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showAlert('Login successful! Redirecting to dashboard...', 'success');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    }, 1000);
}

// Registration form handler
function handleRegister(event) {
    event.preventDefault();
    
    const formData = {
        shopName: document.getElementById('shopName').value,
        ownerName: document.getElementById('ownerName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        aadharNumber: document.getElementById('aadharNumber').value,
        certificateNumber: document.getElementById('certificateNumber').value,
        address: document.getElementById('address').value
    };
    
    // Clear previous alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Validation
    for (const [key, value] of Object.entries(formData)) {
        if (!validateRequired(value)) {
            showAlert(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`, 'error');
            return;
        }
    }
    
    if (!validateEmail(formData.email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (!validatePassword(formData.password)) {
        showAlert('Password must be at least 6 characters long', 'error');
        return;
    }
    
    if (formData.password !== formData.confirmPassword) {
        showAlert('Passwords do not match', 'error');
        return;
    }
    
    if (formData.aadharNumber.length !== 12) {
        showAlert('Aadhar number must be 12 digits', 'error');
        return;
    }
    
    // Simulate registration process
    const submitBtn = document.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Creating Account...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showAlert('Account created successfully! Pending verification by admin.', 'success');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }, 1500);
}

// Dashboard functions
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
        window.location.href = 'index.html';
    }
}

function addRecord() {
    alert('Add Record functionality will be implemented here');
}

function viewRecord() {
    alert('View Record functionality will be implemented here');
}

function sellMedicine() {
    alert('Sell Medicine functionality will be implemented here');
}

function generateReport() {
    alert('Generate Report functionality will be implemented here');
}

function viewCustomers() {
    alert('View Customers functionality will be implemented here');
}

function upgradePlan() {
    alert('Upgrade Plan functionality will be implemented here');
}

// Sales page functions
function searchMedicine() {
    const medicineName = document.getElementById('medicineSearch').value;
    const suggestionsDiv = document.getElementById('medicineSuggestions');
    
    if (medicineName.length > 0) {
        // Mock FEFO suggestions
        const suggestions = [
            { name: 'Paracetamol 500mg', batch: 'B001', expiry: '2024-06-15', price: 120 },
            { name: 'Paracetamol 650mg', batch: 'B002', expiry: '2024-07-20', price: 150 },
            { name: 'Paracetamol Syrup', batch: 'B003', expiry: '2024-05-10', price: 80 }
        ];
        
        let suggestionsHTML = '<div class="suggestions-list">';
        suggestions.forEach(item => {
            suggestionsHTML += `
                <div class="suggestion-item" onclick="selectMedicine('${item.name}', '${item.batch}', ${item.price})">
                    <strong>${item.name}</strong> - Batch: ${item.batch} - Expiry: ${item.expiry} - ₹${item.price}
                </div>
            `;
        });
        suggestionsHTML += '</div>';
        
        suggestionsDiv.innerHTML = suggestionsHTML;
        suggestionsDiv.style.display = 'block';
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

function selectMedicine(name, batch, price) {
    document.getElementById('medicineSearch').value = name;
    document.getElementById('selectedBatch').textContent = batch;
    document.getElementById('unitPrice').textContent = price;
    document.getElementById('medicineSuggestions').style.display = 'none';
    
    calculateTotal();
}

function calculateTotal() {
    const quantity = document.getElementById('quantity').value || 0;
    const unitPrice = document.getElementById('unitPrice').textContent || 0;
    const discount = document.getElementById('discount').value || 0;
    
    const subtotal = quantity * unitPrice;
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount;
    
    document.getElementById('totalAmount').textContent = total.toFixed(2);
}

function generateBill() {
    const medicineName = document.getElementById('medicineSearch').value;
    const quantity = document.getElementById('quantity').value;
    const customerName = document.getElementById('customerName').value;
    
    if (!medicineName || !quantity || !customerName) {
        alert('Please fill all required fields');
        return;
    }
    
    // Generate bill receipt
    const billWindow = window.open('', '_blank');
    const billContent = `
        <html>
            <head>
                <title>Bill Receipt</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    .header { text-align: center; margin-bottom: 20px; }
                    .bill-details { margin: 20px 0; }
                    .total { font-weight: bold; font-size: 18px; margin-top: 20px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>StockEasy Pharmacy</h2>
                    <p>Bill Receipt</p>
                    <p>Date: ${new Date().toLocaleDateString()}</p>
                </div>
                <div class="bill-details">
                    <p><strong>Customer:</strong> ${customerName}</p>
                    <p><strong>Medicine:</strong> ${medicineName}</p>
                    <p><strong>Batch:</strong> ${document.getElementById('selectedBatch').textContent}</p>
                    <p><strong>Quantity:</strong> ${quantity}</p>
                    <p><strong>Unit Price:</strong> ₹${document.getElementById('unitPrice').textContent}</p>
                    <p><strong>Discount:</strong> ${document.getElementById('discount').value}%</p>
                </div>
                <div class="total">
                    <p>Total Amount: ₹${document.getElementById('totalAmount').textContent}</p>
                </div>
                <div style="margin-top: 40px; text-align: center;">
                    <p>Thank you for your business!</p>
                </div>
            </body>
        </html>
    `;
    
    billWindow.document.write(billContent);
    billWindow.document.close();
    billWindow.print();
}

// Initialize page-specific functions
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'login.html':
            const loginForm = document.querySelector('form');
            if (loginForm) {
                loginForm.addEventListener('submit', handleLogin);
            }
            break;
            
        case 'register.html':
            const registerForm = document.querySelector('form');
            if (registerForm) {
                registerForm.addEventListener('submit', handleRegister);
            }
            break;
            
        case 'sales.html':
            const medicineSearch = document.getElementById('medicineSearch');
            if (medicineSearch) {
                medicineSearch.addEventListener('input', searchMedicine);
            }
            
            const quantityInput = document.getElementById('quantity');
            const discountInput = document.getElementById('discount');
            if (quantityInput) quantityInput.addEventListener('input', calculateTotal);
            if (discountInput) discountInput.addEventListener('input', calculateTotal);
            break;
    }
});