const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
  if (event.target.files && event.target.files.length > 0) {
    //  File selected, enable button or display message
    console.log("File selected!");
  } else {
    // No file selected
    console.log("No file selected.");
  }
});