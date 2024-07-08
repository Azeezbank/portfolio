document.body.addEventListener("copy", (e) => {e.preventDefault();
alert("Sorry, you cant copy from this site, contact the developr!")})

document.addEventListener("DOMContentLoaded", function() {
  let rotate = document.getElementById('rotate');
  let images = ["url('https://tunstelecom.com.ng/wp-content/uploads/2024/06/20240611_091935_0_io_thread_1718092033461.png')",
               "url('https://tunstelecom.com.ng/wp-content/uploads/2024/06/images-7.jpeg')",
               "url('https://tunstelecom.com.ng/wp-content/uploads/2024/06/images-2.jpeg')"];
  images.alt = "rotating"
  let currentIndex = 0;
  function changeImage() {
  rotate.src = images[currentIndex]
  currentIndex = (currentIndex + 1) % images.length;
  }
  setInterval(changeImage, 5000);
  changeImage();
});
