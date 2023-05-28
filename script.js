window.onload = function() {
    var uploadForm = document.getElementById('uploadForm');
    var videoFileInput = document.getElementById('videoFile');
  
    uploadForm.onsubmit = function(event) {
      event.preventDefault();
      var videoFile = videoFileInput.files[0];
  
      // Perform necessary actions with the uploaded video file
      // such as sending it to a server or processing it locally.
  
      // Reset the form after upload
      uploadForm.reset();
    };
  };