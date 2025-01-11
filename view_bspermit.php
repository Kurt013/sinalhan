<?php
    include('dashboard_sidebar_start.php');
    include('popup-confirm.php');
    include('popup.php');

    require 'phpqrcode/qrlib.php';
    require 'vendor/autoload.php';

    $conn = $staffbmis->openConn();
    $staffbmis->validate_admin();
    $staffbmis->unarchive_bspermit();
    $staffbmis->archive_bspermit();

?>

<style> 
    .form-group label {
        font-family: "PBold";
        color: #012049;
    }
    .form-control {
        font-family: "PMedium";
        color: #012049;
        background-color: transparent !important;
        border: 2px solid #012049;
        
      
    }
    h5 {
        font-family : "PBold";
        text-align: center;
        color: white;
        background-color: #012049;
        padding: 10px;
        margin-bottom: 20px;
    }
    

    .container {
        padding: 20px 20px;
        border: 3px solid #012049;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .biglabel {
        font-size: 1.7rem;
    }

    .issueno {
        font-size: 1.3rem;
        background-color: #012049 !important;
        font-family: "PBold";
        color: white;
    }
</style>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                    <?php
// Ensure the database connection is initialized properly
// Assuming $db is your PDO connection

if (isset($_GET['id_bspermit'])) {
    $id_bspermit = $_GET['id_bspermit']; // Get the 'report_id' parameter from the URL

    // Prepare SQL query to fetch data based on the 'report_id'
    $stmt = $conn->prepare("SELECT * FROM tbl_bspermit WHERE id_bspermit = :id_bspermit");
    $stmt->bindParam(':id_bspermit', $id_bspermit, PDO::PARAM_STR); // Bind the 'report_id' as a string
    $stmt->execute();

    // Fetch the specific row (no loop)
    $row = $stmt->fetch();

    if ($row) { // Check if the row exists
?>
    
    <div class="container">
    <!-- Issuance Information -->
    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label class = "biglabel">Issuance No.</label>
                <input class="form-control issueno" type="text" value="<?php echo htmlspecialchars($row['id_bspermit']); ?>" readonly>
            </div>
        </div>

    </div>

    <div class="row mb-3">

        <div class="col-md-4">
            <div class="form-group">
                <label>First Name</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['fname']); ?>" readonly>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Last Name</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['lname']); ?>" readonly>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Middle Initial</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['mi']); ?>" readonly>
            </div>
        </div>
    </div>

    
    <h5>Address</h5>
    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label>House Number</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['bshouseno']); ?>" readonly>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Street</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['bsstreet']); ?>" readonly>
            </div>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label>Barangay</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['bsbrgy']); ?>" readonly>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>City</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['bscity']); ?>" readonly>
            </div>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label>Municipality</label>
                <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['bsmunicipality']); ?>" readonly>
            </div>
        </div>
    </div>

    <!-- Business Information -->
    <h5>Business Information</h5>
<div class="row mb-3">
    <div class="col-md-6">
        <div class="form-group">
            <label>Business Name</label>
            <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['bsname']); ?>" readonly>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label>Business Industry</label>
            <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['bsindustry']); ?>" readonly>
        </div>
    </div>
</div>

<div class="row mb-3">
    <div class="col-md-6">
        <div class="form-group">
            <label>Area of Establishment</label>
            <input class="form-control" type="text" value="<?php echo htmlspecialchars($row['aoe']); ?>" readonly>
        </div>
    </div>
</div>





            <br>
            <form id="archiveForm" action="" method="post">
            <div class="m-t-20 text-center">

            <a class="btn btn-success" target="_blank" style="width: 70px; font-size: 17px; border-radius:30px; margin-bottom: 2px;" href="bspermit_form.php?id_bspermit=<?= $row['id_bspermit']; ?>">
    <i class="fas fa-cogs"></i>
</a>
                <input type="hidden" name="id" value="<?= $userdetails['id'];?>">
                <input type="hidden" name="id_bspermit" value="<?= $row['id_bspermit'];?>">
                <button type="submit" id="hiddenSubmitBtn" style="display:none;" name="archive_bspermit">Submit</button>
                
         
    <!-- Back Button -->
    <a href="admn_bspermit.php?list=active" class="btn btn-secondary">
        <i class="fa fa-arrow-left"></i> Back
    </a>
    <a>
    <button class="btn btn-danger archive-btn" type="button" style="width: 70px; font-size: 17px; border-radius:30px;" name="archive_bspermit">  <i class="fas fa-archive"></i> </button>
    
            </div>
        </form>
        
        <?php
    } else {
        // If no data found for the given ID
        echo "No data found for the given ID.";
    }
} else {
    // If the 'id' parameter is missing from the URL
    echo "ID parameter is missing.";
}
?>

                    </div>
                </div>
            </div>


    <div class="sidebar-overlay" data-reff=""></div>
    <script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    <script src="assets/js/select2.min.js"></script>
	<script src="assets/js/moment.min.js"></script>
	<script src="assets/js/bootstrap-datetimepicker.min.js"></script>
    <script src="assets/js/app.js"></script>
	<script>
            $(function () {
                $('#datetimepicker3').datetimepicker({
                    format: 'LT'

                });
            });
     </script>
     <script>
document.addEventListener("DOMContentLoaded", () => {
    // Get the single archive button
    const archiveBtn = document.querySelector('.archive-btn');
    
    // Get popup and other necessary elements
    const popup = document.getElementById('popup');
    const confirmBtn = document.getElementById('confirm-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const archiveForm = document.getElementById('archiveForm');
    const hiddenSubmitBtn = document.getElementById('hiddenSubmitBtn'); // Hidden submit button

    // Add event listener to the archive button
    archiveBtn.addEventListener('click', function () {
        // Get the data ID from the input field inside the form
        const dataId = document.querySelector('input[name="id_bspermit"]').value;
        // Set the ID in the form
        archiveForm.querySelector('input[name="id_bspermit"]').value = dataId;

        // Show the popup
        popup.classList.remove('hidden');
    });

    // Close popup when Cancel is clicked
    cancelBtn.addEventListener('click', () => {
        popup.classList.add('hidden'); // Hide the popup when cancel is clicked
    });

    // Confirm action and submit form when Confirm is clicked
    confirmBtn.addEventListener('click', () => {
        // Trigger the hidden submit button
        hiddenSubmitBtn.click(); // Programmatically click the hidden submit button
        
        // Hide the popup after submission
        popup.classList.add('hidden');
    });
});


</script>
</body>


<!-- add-appointment24:07-->
</html>