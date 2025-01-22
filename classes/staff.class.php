<?php 

    require_once('main.class.php');

    class StaffClass extends BMISClass {

        /*
        //authentication method for residents to enter
        public function residentlogin() {
        if(isset($_POST['residentlogin'])) {

            $username = $_POST['email'];
            $password = $_POST['password']; 
        
            $connection = $this->openConn();
            $stmt = $connection->prepare("SELECT * FROM tbl_residents WHERE email = ? AND password = ?");
            $stmt->Execute([$username, $password]);
            $user = $stmt->fetch();
            $total = $stmt->rowCount();
            
                //calls the set_userdata function 
                if($total > 0) {
                    $this->set_userdata($user);
                    header('Location: resident_homepage.php');
                }
                
                else {
                    echo '<script>alert("Email or Password is Invalid")</script>';
                }
            }
        }
        */

    
    //------------------------------------- CRUD FUNCTIONS FOR STAFF -----------------------------------------------

    public function create_staff() {

        if (isset($_POST['add_staff'])) {
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $lname = $_POST['lname'];
            $fname = $_POST['fname'];
            $mi = $_POST['mi'];
            $sex = $_POST['sex'];
            $contact = $_POST['contact'];
            $position = $_POST['position'];
    
            $connection = $this->openConn();
    
            // Check if username or email already exists
            $stmt = $connection->prepare("SELECT COUNT(*) FROM tbl_user WHERE username = ? OR email = ?");
            $stmt->execute([$username, $email]);
            $exists = $stmt->fetchColumn();
    
            if ($exists > 0) {
                echo "<script type='text/javascript'>alert('Username or email already exists');</script>";
                return;
            }
    
            // Insert new staff member
            $stmt = $connection->prepare(
                "INSERT INTO tbl_user (`username`, `email`, `password`, `lname`, `fname`, `mi`, `sex`, `contact`, `position`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
            );
    
            $stmt->execute([$username, $email, $password, $lname, $fname, $mi, $sex, $contact, $position]);
    
            $toast = '
            <body>
                <div class="toast">
                    <div class="toast-content">
                        <i class="fas fa-solid fa-check check"></i>
                        <div class="message">
                            <span class="text text-1">Staff Added</span>
                            <span class="text text-2">The staff member has been added to the system.</span>
                        </div>
                    </div>
                    <i class="fa-solid fa-xmark close" onclick="closeToast()"></i>
                    <div class="progress"></div>
                </div>
            </body>';
    
            $_SESSION['toast'] = $toast;
    
            // Refresh the page to clear form resubmission
            header("Location: admn_staff_crud.php");
            exit();
        }
    }
    


        public function view_staff(){

            $connection = $this->openConn();

            $stmt = $connection->prepare("SELECT * from tbl_user WHERE `role` = 'staff'");
            $stmt->execute();
            $view = $stmt->fetchAll();
            return $view;
           
        }

        public function view_single_staff(){

            $id_staff = $_GET['id_staff'];
            
            $connection = $this->openConn();
            $stmt = $connection->prepare("SELECT * FROM tbl_user where id_user = '$id_staff'");
            $stmt->execute();
            $view = $stmt->fetch(); 
            $total = $stmt->rowCount();
 
            //eto yung condition na i ch check kung may laman si products at i re return niya kapag meron
            if($total > 0 )  {
                return $view;
            }
            else{
                return false;
            }
        }

        public function update_staff() {
            if (isset($_POST['update_staff'])) {
                $id_user = $_GET['id_user'];
                $password = isset($_POST['password']) ? $_POST['password'] : null;
                $lname = $_POST['lname'];
                $fname = $_POST['fname'];
                $mi = $_POST['mi'];
                $sex = $_POST['sex'];
                $contact = $_POST['contact'];
                $position = $_POST['position'];
                
                    $connection = $this->openConn();
                    if ($password) {
                        $stmt = $connection->prepare("UPDATE tbl_user SET `password` =?, lname =?, 
                        fname = ?, mi =?, sex =?, contact =?, position =?
                            WHERE id_user = ?");
                        $stmt->execute([ $password, $lname, $fname, $mi, $sex,
                        $contact, $position, $id_user]);
                    }
                    else {
                        $stmt = $connection->prepare("UPDATE tbl_user SET lname =?, 
                        fname = ?, mi =?, sex =?, contact =?, position =?
                            WHERE id_user = ?");
                        $stmt->execute([ $lname, $fname, $mi, $sex,
                        $contact, $position, $id_user]);
                    }
                   
                    $toast = '
                    <body>
                        <div class="toast">
                            <div class="toast-content">
                                <i class="fas fa-solid fa-check check"></i>
                                <div class="message">
                                    <span class="text text-1">Staff Updated</span>
                                    <span class="text text-2">The staff information has been successfully updated.</span>
                                </div>
                            </div>
                            <i class="fa-solid fa-xmark close" onclick="closeToast()"></i>
                            <div class="progress"></div>
                        </div>
                    </body>';
                
                    $_SESSION['toast'] = $toast;
        
                    // Refresh the page to clear form resubmission
                    echo '
                    <script>
                        window.opener.location.href = window.opener.location.href;                
                        window.close();
                    </script>
                ';

            }
        }

        public function delete_staff(){
            if(isset($_POST['delete_staff'])) {
                $id_user = $_POST['id_user'];

                $connection = $this->openConn();
                $stmt = $connection->prepare("DELETE FROM tbl_user where id_user = ?");
                $stmt->execute([$id_user]);
                
                $toast = '
                <body>
                    <div class="toast">
                        <div class="toast-content">
                            <i class="fas fa-solid fa-check check"></i>
                            <div class="message">
                                <span class="text text-1">Staff Removed</span>
                                <span class="text text-2">The selected staff member has been removed from the system.</span>
                            </div>
                        </div>
                        <i class="fa-solid fa-xmark close" onclick="closeToast()"></i>
                        <div class="progress"></div>
                    </div>
                </body>';
            
                $_SESSION['toast'] = $toast;
    
                // Refresh the page to clear form resubmission
                header("Location: admn_staff_crud.php");
                exit();
            }
        }

        public function delete_view_staff(){
            if(isset($_POST['delete_staff'])) {
                $id_user = $_POST['id_user'];

                $connection = $this->openConn();
                $stmt = $connection->prepare("DELETE FROM tbl_user where id_user = ?");
                $stmt->execute([$id_user]);
                
                $toast = '
                <body>
                    <div class="toast">
                        <div class="toast-content">
                            <i class="fas fa-solid fa-check check"></i>
                            <div class="message">
                                <span class="text text-1">Staff Removed</span>
                                <span class="text text-2">The selected staff member has been removed from the system.</span>
                            </div>
                        </div>
                        <i class="fa-solid fa-xmark close" onclick="closeToast()"></i>
                        <div class="progress"></div>
                    </div>
                </body>';
            
                $_SESSION['toast'] = $toast;
    
                // Refresh the page to clear form resubmission
                echo '
                <script>
                    window.opener.location.href = window.opener.location.href;                
                    window.close();
                </script>
            ';

            }
        }

    //--------------------------------------------- EXTRA FUNCTIONS FOR STAFF -------------------------------------------------

            public function get_single_staff($id_staff){    
                $connection = $this->openConn();
                $stmt = $connection->prepare("SELECT * FROM tbl_user where id_user = ?");
                $stmt->execute([$id_staff]);
                $user = $stmt->fetch();
                $total = $stmt->rowCount();

                if($total > 0 )  {
                    return $user;
                }
                else{
                    return false;
                }
            }


        public function check_staff($fname, $mi, $lname) {

            $connection = $this->openConn();
            
            // Prepare the SQL statement to check for existing records with the same first, middle, and last names
            $stmt = $connection->prepare("SELECT * FROM tbl_user WHERE fname = ? AND mi = ? AND lname = ?");
            $stmt->execute([$fname, $mi, $lname]);
            
            // Count the number of rows found
            $total = $stmt->rowCount(); 
        
            // Return true if a duplicate is found, otherwise false
            return $total > 0;
        }

        public function count_staff() {
            $connection = $this->openConn();

            $stmt = $connection->prepare("SELECT COUNT(*) from tbl_user WHERE `role` = 'staff'");
            $stmt->execute();
            $staffcount = $stmt->fetchColumn();

            return $staffcount;
        }

        public function count_mstaff() {
            $connection = $this->openConn();

            $stmt = $connection->prepare("SELECT COUNT(*) from tbl_user where sex = 'male'");
            $stmt->execute();
            $staffcount = $stmt->fetchColumn();

            return $staffcount;
        }

        public function count_fstaff() {
            $connection = $this->openConn();

            $stmt = $connection->prepare("SELECT COUNT(*) from tbl_user where sex = 'female'");
            $stmt->execute();
            $staffcount = $stmt->fetchColumn();

            return $staffcount;
        }


        //===================================== SCOPE CHANGED FEATURES =======================================

        public function view_staff_male(){
            $connection = $this->openConn();
            $stmt = $connection->prepare("SELECT * from tbl_user WHERE `sex` = 'Male'");
            $stmt->execute();   
            $view = $stmt->fetchAll();
            return $view;
        }
    
        public function view_staff_female(){
            $connection = $this->openConn();
            $stmt = $connection->prepare("SELECT * from tbl_user WHERE `sex` = 'Female'");
            $stmt->execute();
            $view = $stmt->fetchAll();
            return $view;
        }
    }
    $staffbmis = new StaffClass();
?>