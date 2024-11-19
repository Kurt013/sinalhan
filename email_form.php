<html>
    <head>
        <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font: 14px / 1.2 "Montserrat", "Helvetica", sans-serif;
            }

            a {
            color: #4EB1CB;
            word-break: break-all;
            }

            .card-container  {
            width: 100%;
            max-width: 700px;
            margin: auto;
            background-color: #ffffff;
            }

            .header-card {
            text-align: center;
            height: 90px;
            background-image: url("https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/449048471_452239437525588_272269953370891782_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHTy-oQj3Uj41iB2J4xK9LgOvJNqU_Wwy068k2pT9bDLXXgweOat34wwr2glrhynQZyblrvet-tbppoUf5Yy2Jm&_nc_ohc=gtjpG9gbncsQ7kNvgGUC6IX&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1QF7hSpPEgBw3S-qbjlXY6Sk4qwW0X60UhFM6b327mzD8g&oe=66A6D4CE");
            }

            .logo {
            width: 150px;
            }

            .body-card {
            padding: 30px 0 15px;
            margin: auto;
            width: 90%;
            }

            .body-card h1 {
            font-size: 18px;
            font-weight: bold;
            color: #226060;
            }

            .body-card p{
            font-weight: 600;
            margin-top: 20px;
            }

            .verification__code {
            letter-spacing: 5px;
            font-size: 30px;
            font-weight: bold;
            margin: 40px auto;
            width: 100%;
            text-align: center;
            max-width: 300px;
            padding: 20px;
            border-radius: 20px;
            background-color: #DBDEDA;  
            color: #226060;
            }

            .body-card .last-p {
            color: #AFADAD;
            font-style: italic;
            }

            .footer-card {
            padding: 15px;
            margin: auto;
            width: 90%;
            color: #A6A6A6;
            text-align: center;
            }

            .footer-card .first-p {
            font-weight: 600;
            }

            .footer-card .second-p {
            max-width: 300px;
            margin: 15px auto;
            }

            .icon {
            width: 50px;
            padding: 5px;
            margin-top: 20px;
            border-radius: 50%;
            }

            .icon-redirect {
            text-align: center;
            }

            hr {
            margin: 0 auto;
            width: 90%;
            }
        </style>
    </head>
    <body>
        <div class="card-container">
            <div class="header-card">
            <img class="logo" src="" alt="Villa Gilda Logo">
            </div>
            <div class="body-card">
            <h1>Hi <?= $staff['fname'] ?>, <?= $staff['fname'] ?></h1>
            <p>We&apos;d been told that you&apos;d like to reset the password for your account.</p>
            <p>If you made such request, go back to the website and enter the verification code below.</p>
            <div class="verification__code">'.$verification_code.'</div>
            <p class="last-p">If you believe you have received this email in error, please disregard this email or <a class="notif-link" href="https://mail.google.com/mail/?view=cm&to=almodovarkurt64@gmail.com&su=Notify%20the%20Brgy">notify us.</a></p>
            <div class="icon-redirect">
                <a href="https://www.facebook.com/profile.php?id=100092186237360"><img class="icon" src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/448805439_1033824851691076_1924524101978291005_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE9aPRH_OGP0V0aJCnFpQkPEDWtl9pklFYQNa2X2mSUVomkxi-0lupO9jucL73DWWrv9hh_LvmB2yLwLuIjefU9&_nc_ohc=TsTB9zB4jLgQ7kNvgGSQWqG&_nc_ht=scontent.fmnl9-3.fna&oh=03_Q7cD1QE_069nPaOOI8Rzn--Jybq7xY8MU05G2WRV1G3WVrgd-w&oe=66A7C320"/></a>
                <a href="mailto:almodovarkurt64@gmail.com"><img class="icon" src="./assets/logo.jpg"/></a>
            </div>
            </div>
            <hr>
            <div class="footer-card">
            <p class="first-p">@ Gilda Private Resort, Purok 2, Brgy. Caingin, Santa Rosa, Laguna</p>
            <p class="second-p">This message was sent to <a href="mailto:'.<?= $resident ?>.'">'.$email_reg.'</a></p>
            <p>To help keep your account secure, please don&apos;t forward this email.</p>
            </div>
        </div>
    </body>
</html>