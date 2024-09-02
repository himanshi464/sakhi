document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Save login data and proceed to contacts section
    document.getElementById('login').style.display = 'none';
    document.getElementById('contacts').style.display = 'block';
});

document.getElementById('contactsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Save emergency contacts and proceed to SOS section
    document.getElementById('contacts').style.display = 'none';
    document.getElementById('sos').style.display = 'block';
    // Request location access
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Location allowed:", position.coords.latitude, position.coords.longitude);
        }, function(error) {
            console.error("Location access denied:", error);
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});

document.getElementById('sosButton').addEventListener('click', function() {
    if (confirm('Are you in a suspicious location?')) {
        if (confirm('Do you want to send an alert to your contacts?')) {
            sendSOS();
            // Add functionality to allow canceling SOS within 2 minutes
            setTimeout(() => {
                if (confirm('Do you want to cancel the SOS message?')) {
                    cancelSOS();
                }
            }, 120000); // 2 minutes
        }
    }
});

function sendSOS() {
    alert('SOS Alert Sent!');
    // Functionality to send location and alert contacts
}

function cancelSOS() {
    alert('SOS Alert Canceled!');
    // Functionality to cancel the SOS alert
}
