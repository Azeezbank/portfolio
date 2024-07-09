document.body.addEventListener("copy", (e) => {e.preventDefault();
alert("Sorry, you cant copy from this site, contact the developr!")})

  // Rotating image
  let images = ['https://tunstelecom.com.ng/wp-content/uploads/2024/07/Maize-Farming-Farmsquare.jpg',
               'https://tunstelecom.com.ng/wp-content/uploads/2024/07/Harvesting-honey-from-a-bee-hive-at-the-IITA-Forest-Center.jpg',
               'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-5.jpeg'];
  let currentIndex = 0;
  function changeImage() {
    let rotate = document.getElementById('rotate')
    rotate.src = images[currentIndex]
  currentIndex = (currentIndex + 1) % images.length;
  }
setInterval(changeImage, 5000)
