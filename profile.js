  // Placeholder for loading and editing profile info
  document.addEventListener('DOMContentLoaded', () => {
    // Load profile info on page load
    loadProfile();
    
    // Handle form submission
    document.getElementById('profileForm').addEventListener('submit', (event) => {
      event.preventDefault();
      updateProfile();
    });
    
    // Event listener to update mobile number
    document.getElementById('updateMobile').addEventListener('click', () => {
      updateMobileNumber();
    });
    
    // Event listener to verify email
    document.getElementById('verifyEmail').addEventListener('click', () => {
      verifyEmail();
    });
    
    // Edit Address Section
    document.getElementById('editAddressBtn').addEventListener('click', () => {
      editAddress();
    });
    
    // Deactivate account button
    document.getElementById('deactivateAccount').addEventListener('click', () => {
      deactivateAccount();
    });
    
    // Delete account button
    document.getElementById('deleteAccount').addEventListener('click', () => {
      deleteAccount();
    });
    });
     
    // Function to load profile data
    function loadProfile(req) {
    // Fetch the user's profile data
    
    
    
    const userProfile = {
      firstName: 'Sahil',
      lastName: 'Meshram',
      mobileNumber: '+917741056974',
      email: 'sahilmeshram222@gmail.com',
      address: '123 Main Street, City, Country'
    };
    
    // Populate the form fields and info
    document.getElementById('firstName').value = userProfile.firstName;
    document.getElementById('lastName').value = userProfile.lastName;
    document.getElementById('address').textContent = userProfile.address;
    }
    
    // Function to handle profile update
    function updateProfile() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    
    console.log('Profile updated:', { firstName, lastName });
    
    // Simulate backend update (in a real app, send this data to your server)
    }
    
    // Function to update mobile number
    function updateMobileNumber() {
    const newMobile = prompt('Enter your new mobile number:');
    console.log('Mobile number updated to:', newMobile);
    // Update the mobile number display (in a real app, send this data to your server)
    }
    
    // Function to verify email
    function verifyEmail() {
    console.log('Email verification sent to:', document.getElementById('email').textContent);
    alert('A verification email has been sent.');
    }
    
    // Function to edit address
    function editAddress() {
    const newAddress = prompt('Enter your new address:');
    document.getElementById('address').textContent = newAddress;
    console.log('Address updated to:', newAddress);
    }
    
    // Function to deactivate account
    function deactivateAccount() {
    if (confirm('Are you sure you want to deactivate your account?')) {
      console.log('Account deactivated')
    }}