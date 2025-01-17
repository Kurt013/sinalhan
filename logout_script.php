<script>
document.addEventListener("DOMContentLoaded", () => {
    // Get the single archive button
    const logoutBtn = document.querySelector('.logout-btn');
    
    // Get popup and other necessary elements
    const popup = document.getElementById('popup-logout');
    const confirmBtn = document.getElementById('confirm-btn-logout');
    const cancelBtn = document.getElementById('cancel-btn-logout');

    // Add event listener to the archive button
    logoutBtn.addEventListener('click', function () {


        // Show the popup
        popup.classList.remove('hidden');
    });

    // Close popup when Cancel is clicked
    cancelBtn.addEventListener('click', () => {
        popup.classList.add('hidden'); // Hide the popup when cancel is clicked
    });

    // Confirm action and submit form when Confirm is clicked
    confirmBtn.addEventListener('click', () => {
        // Redirect directly to logout.php
        window.location.href = 'logout.php';

        // Hide the popup after redirection
        popup.classList.add('hidden');
    });
});
</script>