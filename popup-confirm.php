<div id="popup-archive" class="popup hidden">
    <div class="popup-content">
    <div class="popup-header" style="background-image: url('assets/popuphdr.png');">
       
    <div class="popup-icon">
            
        </div>
</div>
        <h2 style = "color: #d32f2f;">Are you sure you want to archive this record?</h2>
        <p>Once archived, it will no longer be accessible in the active records list but can still be retrieved from the archived records section.</p>

        <div class="popup-buttons">
            <button id="confirm-btn-arc" class="confirm-arc">Confirm</button>
            <button id="cancel-btn-arc" class="cancel-btn-arc">Cancel</button>
        </div>
    </div>
</div>

<div id="popup-archive-slt" class="popup hidden">
    <div class="popup-content">
    <div class="popup-header" style="background-image: url('assets/popuphdr.png');">
       
    <div class="popup-icon">
            
        </div>
</div>
        <h2 style = "color: #d32f2f;">Are you sure you want to archive the selected record(s)?</h2>
        <p>Once archived, they will no longer be accessible in the active records list but can still be retrieved from the archived records section.</p>

        <div class="popup-buttons">
            <button id="confirm-btn-arc-slt" class="confirm-arc">Confirm</button>
            <button id="cancel-btn-arc-slt" class="cancel-btn-arc">Cancel</button>
        </div>
    </div>
</div>

<div id="popup-retrieve" class="popup hidden">
    <div class="popup-content">
    <div class="popup-header" style="background-image: url('assets/popupret.png');">
       
    <div class="popup-icon">
            
        </div>
</div>
        <h2 style = "color: #1e79ac;">Are you sure you want to retrieve this record?</h2>
        <p>Once retrieved, this record will be moved back to the active records list, making it accessible again.</p>

        <div class="popup-buttons">
            <button id="confirm-btn-ret" class="confirm-ret">Confirm</button>
            <button id="cancel-btn-ret" class="cancel-btn-ret">Cancel</button>
        </div>
    </div>
</div>

<div id="popup-retrieve-slt" class="popup hidden">
    <div class="popup-content">
    <div class="popup-header" style="background-image: url('assets/popupret.png');">
       
    <div class="popup-icon">
            
        </div>
</div>
        <h2 style = "color: #1e79ac;">Are you sure you want to retrieve the selected record(s)?</h2>
        <p>Once retrieved, they will be moved back to the active records list, making them accessible again.</p>

        <div class="popup-buttons">
            <button id="confirm-btn-ret-slt" class="confirm-ret">Confirm</button>
            <button id="cancel-btn-ret-slt" class="cancel-btn-ret">Cancel</button>
        </div>
    </div>
</div>

<div id="popup-logout" class="popup hidden">
    <div class="popup-content">
    <div class="popup-header" style="background-image: url('assets/popuplgt.png');">
       
    <div class="popup-icon">
            
        </div>
</div>
        <h2 style = "color: #d32f2f;">Are you sure you want to log out?</h2>
        <p>Once you log out, you will be signed out of your account.</p>

        <div class="popup-buttons">
            <button id="confirm-btn-logout" class="confirm-arc">Confirm</button>
            <button id="cancel-btn-logout" class="cancel-btn-arc">Cancel</button>
        </div>
    </div>
</div>



<style> 

button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.popup-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
    width: 85px;
    height: 94px;
    border-radius: 50%;
    margin: 0 auto 15px auto;
    font-size: 40px;

}



.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    box-sizing: content-box;
    z-index: 1000000;

}

.popup-header {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin: -30px -30px 20px -30px; /* Offset the popup's padding */
    background-size: cover; /* Make sure the image covers the entire element */
    background-position: center; /* Center the image */

}

.popup-content {
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    width: 500px;
    white-space:initial;
}

.popup-content h2 {
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-family: "PBold";
    line-height: 27px;
}

.popup-content p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
    font-family: "PMedium";
    margin-bottom: 10px;
    
}

.popup-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px ;
}

.confirm-arc {
    background-color: #D32F2F;
    color: white;
    font-family: "PSemiBold";
    font-weight: normal !important;

}

.cancel-btn-arc, .cancel-btn-arc:hover {
    background-color: white;
    color: #d32f2f;
    border: 2px solid #d32f2f;
    font-family: "PSemiBold";
    text-transform: none !important;
}

.cancel-btn-arc, .confirm-arc, .cancel-btn-ret, .confirm-ret {
    padding: 10px 30px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

.confirm-ret {
    background-color: #1e79ac;
    color: white;
    font-family: "PSemiBold";
    font-weight: normal !important;

}

.cancel-btn-ret, .cancel-btn-ret:hover {
    background-color: white;
    color: #1e79ac;
    border: 2px solid #1e79ac;
    font-family: "PSemiBold";
    text-transform: none !important;
}

.hidden {
    display: none;
}



    </style>

