document.body.addEventListener("copy", (e) => {e.preventDefault();
alert("Sorry, you cant copy from this site, contact the developr!")})

  //let rotate = document.getElementById('rotate');
  let images = ["url('https://tunstelecom.com.ng/wp-content/uploads/2024/06/20240611_091935_0_io_thread_1718092033461.png')",
               "url('https://tunstelecom.com.ng/wp-content/uploads/2024/06/images-7.jpeg')",
               "url('https://tunstelecom.com.ng/wp-content/uploads/2024/06/images-2.jpeg')"];
  let currentIndex = 0;
let rotate = document.createElement('img')
  function changeImage() {
    rotate.src = images[currentIndex]
    rotate.alt = "image";
    rotate.width = 100%;
  currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('Agriculture').appendChild('rotate')
  }
document.getElementById('Agriculture').appendChild('rotate')
  setInterval(changeImage, 5000);
