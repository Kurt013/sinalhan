<?php
    include('dashboard_sidebar_start.php');
    include('table_design.php');
    include('popup-confirm.php');
    include('popup.php'); 

   $staffbmis->create_announcement();
   $staffbmis->delete_announcement();
   $view = $staffbmis->view_announcement();
   $announcementcount = $staffbmis->count_announcement();
   $conn = $staffbmis->openConn();

   $dt = new DateTime("now", new DateTimeZone('Asia/Manila'));
   $tm = new DateTime("now", new DateTimeZone('Asia/Manila'));
   $cdate = $dt->format('Y/m/d');   
   $ctime = $tm->format('H');

?>
<?php
$toastdelete = '';
if (isset($_SESSION['toast'])) {
    $toastdelete = $_SESSION['toast'];
    unset($_SESSION['toast']); // Clear the session after displaying
}

// Check for the toast message in the session
$toast = '';
if (isset($_SESSION['toast'])) {
    $toast = $_SESSION['toast'];
    unset($_SESSION['toast']); // Clear the session after displaying
}
?>
<style>
input.is-invalid,
textarea.is-invalid,
select.is-invalid,
input[type="file"].is-invalid {
  border-left: 4px solid #ff0000 !important;
  border-color: #ff0000 !important;
}

.feedback-error {
    font-family: "PMedium";
    color: red;
    font-size: 0.8rem;
    width: 80%;
    margin-top: 1px;
}


.container {
    padding: 0 70px !important;
}

.card-header, .card-header2 {
    background: linear-gradient(to top, #014bae, #2c91c9);
    font-family: "PBold";
    text-align: center;
    font-size: 1.3rem;
    color: white;
    padding: 20px !important;
    border-top-left-radius: 10px !important; /* Adjust the radius as needed */
    border-top-right-radius: 10px !important; /* Adjust the radius as needed */

}

.btn-primary {
    margin: 0 !important;
}
    
    th, td {
    padding: 10px; /* Add some space around content */
    text-align: center; /* Center text horizontally */
    vertical-align: middle; /* Center text vertically */
    border: 1px solid #ddd; /* Add borders for clarity */

}

.h6 {
    font-size: 1rem;
}

td {
    border: 2px solid white !important; /* Thicker border with custom color */
}

.btn-danger {
    font-family: "PSemiBold";
    padding: 5px 10px !important;
}

th {
    background-color: #2c91c9;
    color: white;
    text-align: center; /* Horizontal alignment */
    vertical-align: middle !important; /* Vertical alignment */
    border: 2px solid white !important; /* Thicker border with custom color */
    padding: 15px;
    font-size: 1rem;
    font-family: "PSemiBold" !important;
    height: 60px; /* Adjust as needed to make the header row taller */
}

/* Table Rows */
td {
    text-align: center;
    padding: 20px;
    font-family: "PRegular" !important;
    font-size: 0.9rem;
    color: #333;
    border-bottom: 1px solid #ddd;
}



.col-md-12 h1 {
    color: white;
            font-family: 'PExBold' !important;
            font-size: 2.2rem;
            text-shadow: 5px 5px 10px rgba(1, 60, 139, 0.9);
        
            letter-spacing: 3px;
            margin-top: 20px;

            line-height: 42px;
            -webkit-text-stroke: 7px #012049;
            paint-order: stroke fill;
  }

.btn-primary {
    font-family: "PSemiBold";
    background-color: #2c91c9 !important;
}

.border-info {
    border: none !important;
    border-bottom: 10px solid #014bae !important;

}

.card {
    margin-bottom: 50px;
    border-top-left-radius: 10px !important; /* Adjust the radius as needed */
    border-top-right-radius: 10px !important; /* Adjust the radius as needed */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Subtle shadow */   
    background: linear-gradient(to top, #E0F7FF, #FFFFFF) !important;
    border-bottom: 10px solid #014bae;
    border-bottom-left-radius: 10px !important; /* Adjust the radius as needed */
    border-bottom-right-radius: 10px !important; /* Adjust the radius as needed */
 
   
}

.post-ann {
    padding: 10px !important;
    font-size: 1rem !important;
    border-radius: 100px !important;
}

.anninfo{
    font-size: 1.1rem !important;
    font-family: "PSemiBold" !important;
    background-color: #014bae !important;
    background:  #014bae !important;
}

.card-body {
    padding : 20px 50px !important;
}



.row h6 {
    font-family: "PSemiBold";
    color: #014bae;
}

.annmsg {
    font-family: "PRegular" !important;
    color: black !important;
}

.form-control {
    font-family: "PMedium";
    color: #014bae !important;
    color:#939393;

    background-color:#fffbf8;
    -webkit-box-shadow:
        0 -2px 2px 0 rgba(199, 199, 199, 0.55),
        0 1px 1px 0 #fff,
        0 2px 2px 1px #fafafa,
        0 2px 4px 0 #b2b2b2 inset,
        0 -1px 1px 0 #f2f2f2 inset,
        0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
    -moz-box-shadow: 
        0 -2px 2px 0 rgba(199, 199, 199, 0.55),
        0 1px 1px 0 #fff,
        0 2px 2px 1px #fafafa,
        0 2px 4px 0 #b2b2b2 inset,
        0 -1px 1px 0 #f2f2f2 inset,
        0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
    box-shadow:
        0 -2px 2px 0 rgba(199, 199, 199, 0.55),
        0 1px 1px 0 #fff,
        0 2px 2px 1px #fafafa,
        0 2px 4px 0 #b2b2b2 inset,
        0 -1px 1px 0 #f2f2f2 inset,
        0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
    padding: 20px !important;

}
</style>


<?php 
?>



<div class="container">

    <!-- Page Heading -->

    <div class="row"> 
        <div class="col-md-12"> 
            <h1 class="mb-4 text-center">Event Announcement Page</h1>
        </div>
    </div>

    <hr>

    <br>
      
    <div class="row"> 
        <div class="col-sm-12"> 
            <div class="card">
                <div class="card-header"> Event Announcement Form </div>
                <div class="card-body">
                    <form method="post">
                        <div class="row"> 
                            <div class="col">
                                <h6>
                                    <i class="fas fa-bullhorn"></i>
                                    Announcement Message
                                </h6>
                                <br>
                                <textarea name="event" class="form-control" rows="6" placeholder="Enter Message Here" id = "announcement" data-tr-rules = "required|between:2,250|endWith:." required></textarea>
                                <div class= "feedback-error" data-tr-feedback="event"></div>
                            </div>
                        </div>

                        <br>
                        <hr>

                        <div class="rows" style = "justify-content: center; display: flex;"> 
                            <div class="col-button" style = "justify-content: center;"> 
                                <input name="created_by"  type="hidden" value="<?= $userdetails['id'] ?>" >
                                <button type="button" name="create_announce" class="btn btn-primary post-ann post-announcement-btn" 
        style=" border-radius: 15px; width: 250px; font-size: 1rem; justify-content: center !important;">
    <i class="fas fa-paper-plane"></i> Post Announcement
</button>
<button type="submit" name="create_announce" id = "hiddenPostAnn" class="btn btn-primary post-ann" 
        style="display: none !important;">
    <i class="fas fa-paper-plane"></i> Post Announcement
</button>
<?php include('validation_script.php'); ?>
                            </div>
                        </div>       
                    </form>
                </div>
            </div>
        </div>



        <?php if (!empty($toast)): ?>
        <?= $toast; ?>
    <?php endif; ?>

    <?php if (!empty($toastdelete)): ?>
        <?= $toastdelete; ?>
    <?php endif; ?>


        <div class="col-sm-12"> 
        <div class="rows  justify-content-center align-items-center" style = "display: block !important"> 
        <div class="col-md-12 "> 
            <h1 class="mb-4 text-center">Announcement Posted</h1>
        </div>
    </div>

    <hr>

    <br>
    <?php
// SQL query to check for rows in tbl_announcement
$sql = "SELECT * FROM tbl_announcement";
$stmt = $conn->prepare($sql);

// Execute the statement
$stmt->execute();

// Fetch all rows
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Check if there are no announcements
if (count($result) == 0) {
    echo '
    <div style="text-align: center; padding: 20px !important; margin-top: 20px; margin-bottom: 50px">
        <img src="assets/noann2.png" alt="No Data Available" style="max-width: 600px; display: block; padding: 0 !important; margin: 0 auto;">
        <p class="norec">Oops! No announcements available at the moment.</p>
        <p class="norec2">This list is currently empty. You can add new announcements or check back later.</p>
        <!-- Button added below the text -->
        <button class="btnqr" onclick="goback()" >
            <i class="fas fa-plus-circle" style="margin-right: 8px;"></i> Add Announcement
        </button>
    </div> </div> </div>';


    include('dashboard_sidebar_end.php');     // Exit early to prevent further processing
    return;
}
?>
        <div class="container">
    <form action="" method="post" id = "removeannform">
        <div class="row">
            <?php if (is_array($view)) { ?>
                <?php foreach ($view as $viewItem) { ?>
                    <div class="col-md-12 mb-2">
                        <div class="card border-info">
                            <div class="card-header anninfo text-white">
                                <div class="d-flex justify-content-between align-items-center" class = "anninfo">
                                <span>
                                        <i class="fas fa-user me-2"></i>
                                        <strong>Posted by:</strong> 
                                        <?= ucfirst($viewItem['fname']); ?> <?= $viewItem['mi']; ?>. <?= ucfirst($viewItem['lname']); ?>
                                    </span>
                                    <span>
                                        <i class="fas fa-calendar-alt me-2"></i>
                                        <?= date('F j, Y', strtotime($viewItem['created_date'])); ?>
                                    </span>

                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text annmsg"><?= $viewItem['event']; ?></p>
                            </div>
                            <div class="card-footer text-end">
                                <form action="" method="post" class="d-inline" >
                                    <input type="hidden" name="id_announcement" value="<?= $viewItem['id_announcement']; ?>">
                                    <button class="btn btn-danger remove-ann-btn" type="button" name="delete_announcement">
                                        Remove
                                    </button>

                                    <button class="btn btn-danger" type="submit" style = "display: none" id = "hiddenSubmitBtn" name="delete_announcement">
                                        Remove
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            <?php } ?>
        </div>
    </form>
</div>

                    </table>
                </div>

    <br><br>


</div>

<!-- End of Main Content -->
<script>
document.addEventListener("DOMContentLoaded", () => {
    // Get all archive buttons (assuming they have the same class 'remove-staff-btn')
    const archiveBtns = document.querySelectorAll('.remove-ann-btn');
    
    // Get popup and other necessary elements
    const popup = document.getElementById('popup-remove-announcement');
    const confirmBtn = document.getElementById('confirm-btn-remann');
    const cancelBtn = document.getElementById('cancel-btn-remann');
    const hiddenSubmitBtn = document.getElementById('hiddenSubmitBtn'); // Hidden submit button
    const removeann = document.getElementById('removeannform'); // Hidden submit button

    // Add event listeners to each archive button
    archiveBtns.forEach(archiveBtn => {
        archiveBtn.addEventListener('click', function () {
            const dataId = this.closest('form').querySelector('input[name="id_announcement"]').value;

           removeann.querySelector('input[name="id_announcement"]').value = dataId;
            // Open the popup when a button is clicked
            popup.classList.remove('hidden');
        });
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
<?php 
    include('dashboard_sidebar_end.php');
    include('table_script.php');
?>




