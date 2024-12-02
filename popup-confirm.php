<div id="popup" class="popup hidden">
    <div class="popup-content">
        <h2>Are you sure to proceed?</h2>
        <p>This will modify your current view and may impact navigation within the system.</p>

        <div class="popup-buttons">
            <button id="confirm-btn" class="confirm">Confirm</button>
            <button id="cancel-btn" class="cancel-btn">Cancel</button>
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
}

.popup-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    width: 400px;
    white-space:initial;
}

.popup-content h2 {
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-family: "PBold";
}

.popup-content p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
}

.popup-buttons {
    display: flex;
    justify-content: space-around;
}

.confirm {
    background-color: #D32F2F;
    color: white;
}

.cancel-btn, .cancel-btn:hover {
    background-color: white;
    color: #d32f2f;
    border: 2px solid #d32f2f;
}



.hidden {
    display: none;
}

button.confirm, button.cancel {
    padding: 10px 30px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

    </style>

