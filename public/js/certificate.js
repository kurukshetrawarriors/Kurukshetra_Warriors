function generateCertificate() {
    var name = document.getElementById('nameInput').value;
    var courseName = "C Programming"; // Replace with the actual course name
    var date = new Date().toLocaleDateString();
    var userId = "<%= userId %>"; // Pass logged-in user's ID from the server
  
    if (!name) {
      alert("Please enter your name.");
      return;
    }
  
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    var img = new Image();
    img.src = '/images/C-cert.png'; // Replace with the path to your certificate template
    img.onload = function () {
      doc.addImage(img, 'PNG', 0, 0, 210, 297);
  
      doc.setFontSize(30);
      doc.text(name, 105, 145, null, null, 'center');
      doc.setFontSize(12);
      doc.text(`Date: ${date}`, 105, 180, null, null, 'center');
  
      fetch('/saveCertificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, name, courseName, date }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            alert("Certificate saved successfully!");
            doc.save("certificate.pdf");
            window.location.href = "/profile";
          }
        })
        .catch((error) => {
          console.error("Error saving certificate:", error);
          alert("Failed to save certificate. Please try again.");
        });
    };
  }
  