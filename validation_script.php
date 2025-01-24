<script src="assets/index.umd.js"></script>
<script>
  const tr = new Trivule();
  tr.init();
</script>
<script>
try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LLWL5N9CSM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LLWL5N9CSM');
</script>
<script>
    function capitalizeName(inputElement) {
        inputElement.addEventListener('input', function () {
            // Allow spaces between words, but remove leading and trailing spaces
            let value = this.value;

            // Remove the leading space if it exists
            if (this.value.startsWith(' ')) {
                this.value = this.value.substring(1);
            }

            

            // Capitalize the first letter of each word and make the rest lowercase
            this.value = this.value
                .replace(/\s+/g, ' ') // Replace multiple spaces in between with a single space
                .split(' ') // Split the input by spaces
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
                .join(' '); // Join the words back with a single space

                
            return;
        });
    }

    function capitalizeNameNoSpace(inputElement) {
        inputElement.addEventListener('input', function () {
            // Allow spaces between words, but remove leading and trailing spaces
            let value = this.value;

            // Remove the leading space if it exists


            

            // Capitalize the first letter of each word and make the rest lowercase
            this.value = this.value
                .trim()
                .split(' ') // Split the input by spaces
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
                .join(' '); // Join the words back with a single space

                return;
        });
    }

    function trimStart(inputElement) {
        inputElement.addEventListener('textarea', function () {
            // Allow spaces between words, but remove leading and trailing spaces
            let value = this.value;

            

            // Capitalize the first letter of each word and make the rest lowercase
            this.value = this.value.trimStart()

                return;
        });
    }


    function noSpace(inputElement) {
        inputElement.addEventListener('input', function () {
            // Allow spaces between words, but remove leading and trailing spaces
            let value = this.value;

            // Remove the leading space if it exists
            if (this.value.startsWith(' ')) {
                this.value = this.value.substring(1);
            }

            

            // Capitalize the first letter of each word and make the rest lowercase
            this.value = this.value
                .trim()
                .split(' ') // Split the input by spaces
                .join(' '); // Join the words back with a single space

                return;
        });
    }

    // Apply the capitalize function to both first name and last name
    capitalizeName(document.getElementById('fname'));
    capitalizeName(document.getElementById('lname'));
    capitalizeName(document.getElementById('mi'));
    capitalizeNameNoSpace(document.getElementById('contact'));
    noSpace(document.getElementById('username'));
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById('announcement');

    // Add event listener for input
    textarea.addEventListener('input', function() {
        let value = this.value;
        
        // Trim leading spaces only
        this.value = value.trimStart();  // Using trimStart to remove leading spaces
    });
});
</script>


    <script>
document.addEventListener("DOMContentLoaded", () => {
    const archiveBtn = document.querySelector('.add-staff-btn');
    const popup = document.getElementById('popup-add-staff');
    const confirmBtn = document.getElementById('confirm-btn-ads');
    const cancelBtn = document.getElementById('cancel-btn-ads');
    const hiddenSubmitBtn = document.getElementById('hiddenAddStaff');
    const requiredFields = document.querySelectorAll('.form-input[required], .form-control[required]');
    const errorMessage = document.getElementById("error-message");
    const contactno = document.getElementById('contact');

    // Function to validate the form and focus on the first field with feedback-error
    function validateForm() {
        let isValid = true;
        let firstInvalidField = null;

        const feedbackErrors = document.querySelectorAll(".feedback-error");
        for (const error of feedbackErrors) {
            if (error.textContent.trim() !== "") {
                isValid = false;
                const relatedField = error.previousElementSibling; // Assuming the input is right before the feedback-error
                if (relatedField && !firstInvalidField) {
                    firstInvalidField = relatedField;
                }
            }
        }

        for (const field of requiredFields) {
            if (!field.value.trim()) {
                isValid = false;
                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
                field.style.borderColor = ""; // Optional: Highlight the field with a red border
            } else {
                field.style.borderColor = ""; // Reset border color if not empty
            }
        }

        // Focus on the first invalid or empty field
        if (firstInvalidField) {
            firstInvalidField.focus();
            contactno.focus();
            
        }
        return isValid;
    }




    // Event listener for the archive button to validate form and trigger focus
    archiveBtn.addEventListener('click', function () {
        if (validateForm()) {
            popup.classList.remove('hidden');
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        } else {
            if (errorMessage) {
                errorMessage.innerText = "Please resolve all errors before proceeding.";
                errorMessage.style.display = 'block';
            }
        }
    });

    // Real-time validation while the user is typing
    requiredFields.forEach(field => {
        field.addEventListener('input', () => {
            const feedbackError = field.nextElementSibling; // Assuming .feedback-error is right after the input
            if (feedbackError) {
                if (field.value.trim()) {
                    field.style.borderColor = ''; // Reset border color
                } else {
                    feedbackError.textContent = "This field is required.";
                    field.style.borderColor = 'red'; // Highlight border
                }
            }

            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        });
    });

    // Close popup when Cancel is clicked
    cancelBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Confirm action and submit form when Confirm is clicked
    confirmBtn.addEventListener('click', () => {
        hiddenSubmitBtn.click();
        popup.classList.add('hidden');
    });
});
</script>

<script>
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
    
    // Wait until the popup is shown, then focus on all fields
}

    </script>



<script>
document.addEventListener("DOMContentLoaded", () => {
    const postBtn = document.querySelector('.post-announcement-btn');
    const popup = document.getElementById('popup-post-ann');
    const confirmBtn = document.getElementById('confirm-btn-ann');
    const cancelBtn = document.getElementById('cancel-btn-ann');
    const hiddenSubmitBtn = document.getElementById('hiddenPostAnn');
    const requiredFields = document.querySelectorAll('.form-input[required], .form-control[required]');
    const errorMessage = document.getElementById("error-message");

    // Function to validate the form and focus on the first field with feedback-error
    function validateAnnouncement() {
        let isAnnValid = true;
        let InvalidField = null;

        const feedbackErrors = document.querySelectorAll(".feedback-error");
        for (const error of feedbackErrors) {
            if (error.textContent.trim() !== "") {
                isAnnValid = false;
                const relatedField = error.previousElementSibling; // Assuming the input is right before the feedback-error
                if (relatedField && !InvalidField) {
                    InvalidField = relatedField;
                }
            }
        }


            // Check for required fields that are empty
            for (const field of requiredFields) {
            if (!field.value.trim()) {
                isAnnValid = false;
                if (!InvalidField) {
                    InvalidField = field;
                }
                field.style.borderColor = "red"; // Optional: Highlight the field with a red border
            } else {
                field.style.borderColor = ""; // Reset border color if not empty
            }
        }

        // Focus on the first invalid or empty field
        if (InvalidField) {
            InvalidField.focus();
        }

        return isAnnValid;
    }


    
    function focusAllFields() {
    // Get all required fields that are invalid

    // Focus all invalid fields at once
    requiredFields.forEach(field => {
        field.focus();

    });
}

    // Event listener for the archive button to validate form and trigger focus
    postBtn.addEventListener('click', function () {
        if (validateAnnouncement()) {
            popup.classList.remove('hidden');
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        } else {
            if (errorMessage) {
                errorMessage.innerText = "Please resolve all errors before proceeding.";
                errorMessage.style.display = 'block';
            }
        }
    });

    // Real-time validation while the user is typing
    
    requiredFields.forEach(field => {
        field.addEventListener('input', () => {
            const feedbackError = field.nextElementSibling; // Assuming .feedback-error is right after the input
            if (feedbackError) {
                if (field.value.trim()) {
                    field.style.borderColor = ''; // Reset border color
                } else {
                    feedbackError.textContent = "This field is required.";
                    field.style.borderColor = 'red'; // Highlight border
                }
            }

            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        });
    });
    

    // Close popup when Cancel is clicked
    cancelBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Confirm action and submit form when Confirm is clicked
    confirmBtn.addEventListener('click', () => {
        hiddenSubmitBtn.click();
        popup.classList.add('hidden');
    });
});
</script>
<script>
function goback() {
    const announcement = document.getElementById('announcement');

    announcement.focus();
    
}
</script>

</script>


    <script>
document.addEventListener("DOMContentLoaded", () => {
    const archiveBtn = document.querySelector('.update-profile-btn');
    const popup = document.getElementById('popup-update-profile');
    const confirmBtn = document.getElementById('confirm-btn-updprof');
    const cancelBtn = document.getElementById('cancel-btn-updprof');
    const hiddenSubmitBtn = document.getElementById('hiddenUpdProf');
    const requiredFields = document.querySelectorAll('.form-input[required], .form-control[required]');
    const errorMessage = document.getElementById("error-message");
    

    // Function to validate the form and focus on the first field with feedback-error
    function validateForm() {
        let isValid = true;
        let firstInvalidField = null;

        const feedbackErrors = document.querySelectorAll(".feedback-error");
        for (const error of feedbackErrors) {
            if (error.textContent.trim() !== "") {
                isValid = false;
                const relatedField = error.previousElementSibling; // Assuming the input is right before the feedback-error
                if (relatedField && !firstInvalidField) {
                    firstInvalidField = relatedField;
                }
            }
        }

        for (const field of requiredFields) {
            if (!field.value.trim()) {
                isValid = false;
                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
                field.style.borderColor = ""; // Optional: Highlight the field with a red border
            } else {
                field.style.borderColor = ""; // Reset border color if not empty
            }
        }

        // Focus on the first invalid or empty field
        if (firstInvalidField) {
            firstInvalidField.focus();
            
            
        }
        return isValid;
    }




    // Event listener for the archive button to validate form and trigger focus
    archiveBtn.addEventListener('click', function () {
        if (validateForm()) {
            popup.classList.remove('hidden');
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        } else {
            if (errorMessage) {
                errorMessage.innerText = "Please resolve all errors before proceeding.";
                errorMessage.style.display = 'block';
            }
        }
    });

    // Real-time validation while the user is typing
    requiredFields.forEach(field => {
        field.addEventListener('input', () => {
            const feedbackError = field.nextElementSibling; // Assuming .feedback-error is right after the input
            if (feedbackError) {
                if (field.value.trim()) {
                    field.style.borderColor = ''; // Reset border color
                } else {
                    feedbackError.textContent = "This field is required.";
                    field.style.borderColor = 'red'; // Highlight border
                }
            }

            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        });
    });

    // Close popup when Cancel is clicked
    cancelBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Confirm action and submit form when Confirm is clicked
    confirmBtn.addEventListener('click', () => {
        hiddenSubmitBtn.click();
        popup.classList.add('hidden');
    });
});
</script>

