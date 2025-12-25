// sidenavbar
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// booking-form validation

function toggleUploadSection() {
    const uploadSection = document.getElementById("uploadSection");
    const customOption = document.getElementById("customOption");
    uploadSection.style.display = customOption.checked ? "block" : "none";
}

function validateForm() {
    const errorMessage = document.getElementById("error-message");
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const place = document.getElementById("place").value;
    const location = document.getElementById("location").value;
    const message = document.getElementById("message").value;
    const services = document.querySelectorAll('input[name="services"]:checked');
    const customFile = document.getElementById("customFile");

    errorMessage.innerHTML = "";

    if (!name || !phone || !email || !date || !time || !place || !location) {
        errorMessage.innerHTML = "All fields are required.";
        return false;
    }

    if (services.length === 0) {
        errorMessage.innerHTML = "Please select at least one service.";
        return false;
    }

    if (document.getElementById("customOption").checked && customFile.files.length === 0) {
        errorMessage.innerHTML = "Please upload a file for custom service.";
        return false;
    }

    document.getElementById("confirmationModal").style.display = "flex";
    document.getElementById("uploadMessage").innerHTML = "File uploaded successfully!";
    return false;
}

function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
    document.getElementById("bookingForm").reset();
    toggleUploadSection();

    // Redirect to Home page
    window.location.href = "SMC.html";
}
