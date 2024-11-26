// ----- HERO - Typed JS -----
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-text', {
        strings: [
            "WELCOME TO GOLDEN PRIME",
            "UPVC WINDOWS",
            "UPVC DOORS",
            "PVC DOORS",
            "UPVC INTERIORS",
            "PVC INTERIORS",
            "MODULER KITCKEN",
            "CUSTOMIZED FURNITURES"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });
});


// ----- LOAD FANCYBOX -----
document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind('[data-fancybox="gallery"]', {});
});


// ----- BLOG - READ MORE -----
function toggleReadMore(button) {
    const moreText = button.parentElement.querySelector('.more-text');

    if (moreText.style.display === 'inline') {
        moreText.style.display = 'none';
        button.innerHTML = 'Read More...';
    } else {
        moreText.style.display = 'inline';
        button.innerHTML = 'Read Less <i class="ri-arrow-up-fill"></i>';
    }
}

document.querySelectorAll('.more-text').forEach(function (span) {
    span.style.display = 'none';
});

// ----- CONTACT FORM - FUNCTION -----
// --- CONTACT FORM VALIDATION ---
document.getElementById("full_name").addEventListener("input", validateContactName);
document.getElementById("mobile_no").addEventListener("input", validateContactPhoneNumber);
document.getElementById("email").addEventListener("input", validateContactEmail);
document.getElementById("subject").addEventListener("input", validateContactSubject);
document.getElementById("message").addEventListener("input", validateContactMessage);

var submitClicked = false;

function handleFormSubmit(event) {
    event.preventDefault();
    submitClicked = true;
    var isValid = validateContactForm();
    if (isValid) {
        sendToWhatsApp(
            document.getElementById('full_name').value.trim(),
            document.getElementById('mobile_no').value.trim(),
            document.getElementById('email').value.trim(),
            document.getElementById('subject').value.trim(),
            document.getElementById('message').value.trim()
        );
    } else {
        var toastElement = document.getElementById('infoToast');
        var bootstrapToast = new bootstrap.Toast(toastElement);
        bootstrapToast.show();
    }
}

function validateContactForm() {
    var isValidContactName = validateContactName();
    var isValidPhoneNumber = validateContactPhoneNumber();
    var isValidContactEmail = validateContactEmail();
    var isValidSubject = validateContactSubject();
    var isValidMessage = validateContactMessage();
    return isValidContactName && isValidContactEmail && isValidPhoneNumber && isValidSubject && isValidMessage
}


function validateContactName() {
    var name = document.getElementById('full_name').value.trim();
    if (name === "") {
        document.getElementById("full_name_error").innerHTML = '<i class="ri-error-warning-fill"></i> Full name is required.'
        return false
    } else {
        document.getElementById("full_name_error").innerHTML = ""
        return true
    }
}

function validateContactPhoneNumber() {
    var phoneNo = document.getElementById("mobile_no").value.trim();
    if (phoneNo === "" || !/^[0-9]{10}$/.test(phoneNo)) {
        document.getElementById("mobile_no_error").innerHTML = '<i class="ri-error-warning-fill"></i> Please enter a valid mobile number.'
        return false
    } else {
        document.getElementById("mobile_no_error").innerHTML = ""
        return true
    }
}

function validateContactEmail() {
    var email = document.getElementById("email").value.trim();
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("email_error").innerHTML = '<i class="ri-error-warning-fill"></i> Please enter a valid email address.'
        return false
    } else {
        document.getElementById("email_error").innerHTML = ""
        return true
    }
}

function validateContactSubject() {
    var message = document.getElementById("subject").value.trim();
    if (message === "") {
        document.getElementById("subject_error").innerHTML = '<i class="ri-error-warning-fill"></i> Subject is required.'
        return false
    } else {
        document.getElementById("subject_error").innerHTML = ""
        return true
    }
}

function validateContactMessage() {
    var message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("message_error").innerHTML = '<i class="ri-error-warning-fill"></i> Message is required.'
        return false
    } else {
        document.getElementById("message_error").innerHTML = ""
        return true
    }
}


// ----- SEND TO WHATSAPP -----
function sendToWhatsApp(fullName, mobileNo, email, subject, message) {
    const whatsappNumber = '9750138833';
    const whatsappMessage = `Name: ${encodeURIComponent(fullName)}\nMobile: ${encodeURIComponent(mobileNo)}\nEmail: ${encodeURIComponent(email)}\nSubject: ${encodeURIComponent(subject)}\nMessage: ${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
}
