function changePic(openTab) {
// Define the dimensions of the popup window
 var width = 500;
 var height = 400;

 // Calculate the position to place the window at the rightmost side
 var left = window.screen.width - width;
 var top = (window.screen.height - height) / 2;

 // Open the popup window at the rightmost side with defined features
 var mywindow = window.open(
    openTab,
    'Take a pic',
    `width=${width},height=${height},top=0,left=0,scrollbars=no,resizable=no`
 );

 // Ensure the popup is focused
 if (mywindow) {
      mywindow.focus();
 } else {
      alert("Popup blocked! Please allow popups for this website.");
 }

 return true;
}
