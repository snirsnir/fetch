var canvas = document.getElementById('signature-pad');
var signaturePad = new SignaturePad(canvas);

// Function to get the signature as a data URL
function getSignatureDataUrl() {
    return signaturePad.toDataURL();
}

// Add this function to your form submission logic


document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var numParticipants = document.getElementById("numParticipants").value;
    var eventDate = document.getElementById("eventDate").value;
    var signature = getSignatureDataUrl();

    var data = {
        fullName: fullName,
        numParticipants: numParticipants,
        eventDate: eventDate,
        signature: signature
    };

    fetch('https://script.google.com/macros/s/AKfycbw4DVFICz2Tt7zu9sTIxsrqWhFwPP5jkMaN070uuzgh5Llh6LOa7lulDeYBhAeU85Tn8A/exec', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
