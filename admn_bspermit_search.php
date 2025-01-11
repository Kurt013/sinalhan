
<style>
form label {
         
         font-size: 1rem;
         color: #012049 !important;
         font-family: "PSemiBold";
         text-align: left;
     }

     .btn-primary {
        font-size: 0.9rem !important;
        margin-left: 4px;
     }
  

         
        form select  {
                font-family: "PMedium" !important;
                font-size: 1rem;
                border-radius: 5px;
                border: 2px solid #012049;
                padding: 0 5px;
                cursor: pointer;
                margin-left: 5px;
                text-align: center;
                margin-bottom: 10px;
                color: #012049;
                            
            }

            th:nth-child(5),  /* Issuance No. */
            td:nth-child(5),  /* Issuance No. */
            th:nth-child(7),  /* Business Name */
            td:nth-child(7),            
            th:nth-child(8),  /* Issuance No. */
            td:nth-child(8),  /* Issuance No. */
            th:nth-child(9),  /* Business Name */
            td:nth-child(9),            
            th:nth-child(10),  /* Issuance No. */
            td:nth-child(10),  /* Issuance No. */
            th:nth-child(11),  /* Business Name */
            td:nth-child(11) { /* Business Name */
             display: none; /* Hide the columns */
    }


            .form-control option:hover {
        background-color: #2c91c9; /* Light gray background on hover */
        color: #000; /* Darker text on hover */
}



        .form-control:focus {
    border-color: black; /* Highlight border on focus */
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3); /* Subtle shadow on focus */
  
    
}

.form-buttons {
    display: flex; /* Aligns forms in a row */
    gap: 10px; /* Adds space between the buttons */    align-items: center; /* Ensures buttons align vertically */
}

.form-buttons form {
    margin: 0; /* Removes default margins from forms */
}

.btnexpex, .btnexpdf {
    padding: 5px 20px; /* Adjusts button size */
    font-size: 16px; /* Adjusts font size */
    border: 2px solid #012049; /* Adds a border */
    border-radius: 5px; /* Rounds button corners */
    background-color: white; /* Light background color */
    font-family: "PSemiBold";
    cursor: pointer; /* Changes cursor to pointer */
    margin-bottom: 30px;
}
.btnexpex {
    color: #388E3C;
    border: 2px solid #388E3C; 
}

.btnexpdf {
    color: #D32F2F;
    border: 2px solid #D32F2F; 
}
.btnexpex i,.btnexpdf i {
    margin-right: 5px; /* Adds spacing between icon and text */

}

.btnexpex:hover {
    background-color: #388E3C; /* Darker background on hover */
    color: white; /* White text on hover */
}

.btnexpdf:hover {
    background-color: #D32F2F; /* Darker background on hover */
    color: white; /* White text on hover */
}

</style>
<?php

    include('popup-toast.php');

    $from = isset($_POST['from']) ? date('Y-m-d', strtotime($_POST['from'])) : date('Y-m-d');
    $to = isset($_POST['to']) ? date('Y-m-d', strtotime($_POST['to'])) : date('Y-m-d');

	if(isset($_POST['search_bspermit'])){
		$keyword = $_POST['keyword'];

?>
        <?php if (!empty($toast)): ?>
        <?= $toast; ?>
    <?php endif; ?>
    <div style="float: right; align-items:right; margin-bottom: -40px; position: relative; z-index: 10;">
    <form class="form-select" method="GET" action="">
        <label for="list">Select List: </label>
        <select name="list" id="list" onchange="this.form.submit()">
            <option value="active" <?= (isset($_GET['list']) && $_GET['list'] == 'active') ? 'selected' : ''; ?>>Active</option>
            <option value="archived" <?= (isset($_GET['list']) && $_GET['list'] == 'archived') ? 'selected' : ''; ?>>Archived</option>
        </select>
    </form>
</div>

 
<table class="table table-border table-striped custom-table datatable mb-0" id="myTable">
<thead class="alert-info">
    <tr>
        <th> </th>
        <th> Issuance No. </th>
        <th> Surname </th>
        <th> First Name </th>
        <th> Middle Initial</th>
        <th> Business Name </th>
        <th> House No. </th>
        <th> Street </th>
        <th> Barangay </th>
        <th> City </th>
        <th> Municipality </th>
        <th> Business Industry </th>
        <th> AoE </th>
    </tr>
</thead>


<tbody>     
    <?php
            $list === 'active' ?

            $stmt = $conn->prepare("
                SELECT *
                FROM
                    tbl_bspermit
                WHERE
                    (id_bspermit like ? OR
                        `lname` LIKE ? OR  
                        `mi` LIKE ? OR  
                        `fname` LIKE ? OR 
                        `bshouseno` LIKE ? OR
                        `bsstreet` LIKE ? OR 
                        `bsbrgy` LIKE ? OR 
                        `bscity` LIKE ? OR 
                        `bsmunicipality` LIKE ? OR 
                        `bsname` LIKE ? OR
                        bsindustry LIKE ? OR
                        aoe LIKE ? OR
                        created_by LIKE ? OR
                        created_on LIKE ?) 
                    AND `doc_status` = ?
                    AND (date(created_on) BETWEEN ? AND ?)
                    ") : 
            $stmt = $conn->prepare("
                SELECT *
                FROM
                    tbl_bspermit_archive
                WHERE
                    (id_bspermit LIKE ? OR
                    `lname` LIKE ? OR  
                    `mi` LIKE ? OR  
                    `fname` LIKE ? OR 
                    `bshouseno` LIKE ? OR
                    `bsstreet` LIKE ? OR 
                    `bsbrgy` LIKE ? OR 
                    `bscity` LIKE ? OR 
                    `bsmunicipality` LIKE ? OR 
                    `bsname` LIKE ? OR
                    bsindustry LIKE ? OR
                    aoe LIKE ? OR
                    archived_on LIKE ? OR
                    archived_by LIKE ?)
                        AND (date(archived_on) BETWEEN ? AND ?)
                ");

        $keywordLike = "%$keyword%";
        $pendingStatus = 'accepted';
        
        $list === 'active' ?
            $stmt->execute([
                $keywordLike, $keywordLike, $keywordLike, $keywordLike, 
                $keywordLike, $keywordLike, $keywordLike, $keywordLike, 
                $keywordLike, $keywordLike, $keywordLike, $keywordLike,
                $keywordLike, $keywordLike, $pendingStatus, $from, $to
            ]):
            $stmt->execute([
                $keywordLike, $keywordLike, $keywordLike, $keywordLike, 
                $keywordLike, $keywordLike, $keywordLike, $keywordLike, 
                $keywordLike, $keywordLike, $keywordLike, $keywordLike,
                $keywordLike, $keywordLike, $from, $to
            ]);
        
        $views = $stmt->fetchAll();
        if ($stmt->rowCount() > 0) {
            foreach ($views as $view) {
    ?>
        <tr>
            <td>    
                    
            <form action="" method="post">
                <a class="btn btn-success" target="_blank" style="width: 70px; font-size: 17px; border-radius:30px; margin-bottom: 2px;" href="bspermit_form.php?id_bspermit=<?= $view['id_bspermit'];?><?php if ($list === 'archived') echo '&status=archived';?>"> <i class="fas fa-cogs"></i></a> 
                            <input type="hidden" name="id" value="<?= $userdetails['id'];?>">
                            <input type="hidden" name="id_bspermit" value="<?= $view['id_bspermit'];?>">
                            <?php 
echo $list === 'active' ? 
// Display both buttons if the status is active
'<button class="btn btn-danger archive-btn" type="button" style="width: 70px; font-size: 17px; border-radius:30px;" name="archive_brgyid">  <i class="fas fa-archive"></i> </button>' .
'<a class="btn btn-primary" href="view_bspermit.php?id_bspermit=' . urlencode($view['id_bspermit']) . '" style="width: 70px; font-size: 17px; border-radius:30px;"><i class="fa fa-eye"></i></a>' :

// Display only the unarchive button if the status is not active
'<button class="btn btn-danger" type="submit" style="width: 70px; font-size: 17px; border-radius:30px;" name="unarchive_bspermit">  <i class="fas fa-undo"></i> </button>';
?>  
            </form>
            </td>
            <td> <?= $view['id_bspermit'];?> </td> 
            <td> <?= $view['lname'];?> </td>
            <td> <?= $view['fname'];?> </td>
            <td> <?= $view['mi'];?> </td>
            <td> <?= $view['bsname'];?> </td>
            <td> <?= $view['bshouseno'];?> </td>
            <td> <?= $view['bsstreet'];?> </td>
            <td> <?= $view['bsbrgy'];?> </td>
            <td> <?= $view['bscity'];?> </td>
            <td> <?= $view['bsmunicipality'];?> </td>
            <td> <?= $view['bsindustry'];?> </td>
            <td> <?= $view['aoe'];?> </td>
        </tr>
    <?php
    }
}

    ?>
</tbody>


</table>

<?php		
	}else{

?>
 <div style="float: right; align-items:right; margin-bottom: -40px; position: relative; z-index: 10;">
    <form class="form-select" method="GET" action="">
        <label for="list">Select List: </label>
        <select name="list" id="list" onchange="this.form.submit()">
            <option value="active" <?= (isset($_GET['list']) && $_GET['list'] == 'active') ? 'selected' : ''; ?>>Active</option>
            <option value="archived" <?= (isset($_GET['list']) && $_GET['list'] == 'archived') ? 'selected' : ''; ?>>Archived</option>
        </select>
    </form>
</div>
<table class="table table-border table-striped custom-table datatable mb-0" id="myTable">


<thead class="alert-info">
    <tr>
        <th> </th>
        <th> Issuance No.</th>
        <th> Surname </th>
        <th> First Name </th>
        <th> Middle Initial </th> <!-- hide -->
        <th> Business Name </th> 
        <th> House No. </th> <!-- hide -->
        <th> Street </th> <!-- hide -->
        <th> Barangay </th> <!-- hide -->
        <th> City </th> <!-- hide -->
        <th> Municipality </th> <!-- hide -->
        <th> Business Industry </th>
        <th> AoE</th>
    </tr>
</thead>

<tbody>     
    <?php
        $pendingStatus = 'accepted';

        if ($list === 'active') {
            $stmt = $conn->prepare("SELECT * FROM tbl_bspermit WHERE doc_status = ? AND date(created_on) BETWEEN ? AND ?");
            $stmt->execute([$pendingStatus, $from, $to]);
        } else {
            $stmt = $conn->prepare("SELECT * FROM tbl_bspermit_archive WHERE date(archived_on) BETWEEN ? AND ?");
            $stmt->execute([$from, $to]);
        }
        $views = $stmt->fetchAll();
        if ($stmt->rowCount() > 0) {
            foreach ($views as $view){
                
    ?>
        <tr>
            <td>    
            <form id="archiveForm" action="" method="post">
                <a class="btn btn-success" target="_blank" style="width: 70px; font-size: 17px; border-radius:30px; margin-bottom: 2px;" href="bspermit_form.php?id_bspermit=<?= $view['id_bspermit'];?><?php if ($list === 'archived') echo '&status=archived';?>"> <i class="fas fa-cogs"></i></a> 
                <input type="hidden" name="id" value="<?= $userdetails['id'];?>">
                <input type="hidden" name="id_bspermit" value="<?= $view['id_bspermit'];?>">
                <button type="submit" id="hiddenSubmitBtn" style="display:none;" name="archive_bspermit">Submit</button>
                <?php
echo $list === 'active' ? 
    // Display both buttons if the status is active
    '<button class="btn btn-danger archive-btn" type="button" style="width: 70px; font-size: 17px; border-radius:30px;" name="archive_brgyid">  <i class="fas fa-archive"></i> </button>' .
    '<a class="btn btn-primary" href="view_bspermit.php?id_bspermit=' . urlencode($view['id_bspermit']) . '" style="width: 70px; font-size: 17px; border-radius:30px;"><i class="fa fa-eye"></i></a>' :
    
    // Display only the unarchive button if the status is not active
    '<button class="btn btn-danger" type="submit" style="width: 70px; font-size: 17px; border-radius:30px;" name="unarchive_bspermit">  <i class="fas fa-undo"></i> </button>';
?>
   
         
            </form>
            <?php include('popup-confirm.php'); ?>
            </td>
            <td> <?= $view['id_bspermit'];?> </td> 
            <td> <?= $view['lname'];?> </td>
            <td> <?= $view['fname'];?> </td>
            <td> <?= $view['mi'];?> </td>
            <td> <?= $view['bsname'];?> </td>
            <td> <?= $view['bshouseno'];?> </td>
            <td> <?= $view['bsstreet'];?> </td>
            <td> <?= $view['bsbrgy'];?> </td>
            <td> <?= $view['bscity'];?> </td>
            <td> <?= $view['bsmunicipality'];?> </td>
            <td> <?= $view['bsindustry'];?> </td>
            <td> <?= $view['aoe'];?> </td>
        </tr>
    <?php
        }
    }

    ?>
</tbody>

</table>


<?php
	}

    $viewsJson = json_encode($views);
    $list === 'archived' ?
        $tableName = 'tbl_bspermit_archive' :
        $tableName = 'tbl_bspermit';
?>
    <script src="assets/js/jquery-3.2.1.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    <script src="assets/js/select2.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <script src="assets/js/moment.min.js"></script>
    <script src="assets/js/bootstrap-datetimepicker.min.js"></script>
    <script src="assets/js/app.js"></script>
<script>
document.addEventListener("DOMContentLoaded", () => {
    // Get all archive buttons
    const openPopupBtns = document.querySelectorAll('.archive-btn');
    
    // Get popup and other necessary elements
    const popup = document.getElementById('popup');
    const confirmBtn = document.getElementById('confirm-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const archiveForm = document.getElementById('archiveForm');
    const hiddenSubmitBtn = document.getElementById('hiddenSubmitBtn');  // Hidden submit button

    // Loop through all archive buttons and add event listeners
    openPopupBtns.forEach((openPopupBtn) => {
        openPopupBtn.addEventListener('click', function () {
            const dataId = this.closest('form').querySelector('input[name="id_bspermit"]').value;
            // Store the ID in the form's data-id (or set a hidden input value if necessary)
            archiveForm.querySelector('input[name="id_bspermit"]').value = dataId; // Set the correct id_indigency
            
            // Show the popup
            popup.classList.remove('hidden'); 
        });
    });

    // Close popup when Cancel is clicked
    cancelBtn.addEventListener('click', () => {
        popup.classList.add('hidden'); // Hide the popup when cancel is clicked
    });

    // Confirm action and submit form when Confirm is clicked
    confirmBtn.addEventListener('click', () => {
        // Programmatically trigger the hidden submit button
        hiddenSubmitBtn.click();  // Click the hidden submit button
        
        // Hide the popup after submission
        popup.classList.add('hidden');
        

    });
});


</script>

<?php if ($list === 'archived') { ?>
    <div class="form-buttons">
        <form action="./export_to_pdf.php" method="POST" target="_blank">
            <button name="export_pdf" class="btnexpdf" ><i class="fas fa-file-pdf"></i>Export to PDF</button>
            <input type="hidden" name="views_data" value="<?php echo htmlspecialchars($viewsJson, ENT_QUOTES, 'UTF-8'); ?>">
            <input type="hidden" name="table_name" value="<?= $tableName ?>">
        </form>
        <form action="./export_to_excel.php" method="POST" target="_blank">
            <button name="export_excel" class="btnexpex"><i class="fas fa-file-excel"></i>Export to Excel</button>
            <input type="hidden" name="views_data" value="<?php echo htmlspecialchars($viewsJson, ENT_QUOTES, 'UTF-8'); ?>">
            <input type="hidden" name="table_name" value="<?= $tableName ?>">
        </form>
    </div>
<?php } ?>