document.body.addEventListener("copy", (e) => {e.preventDefault();
alert("Sorry, you cant copy from this site, contact the developr!")})

  // Rotating image
  let images = ['https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-7.jpeg',
               'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-8.jpeg',
               'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-5.jpeg',
               'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-10.jpeg',
                'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-6.jpeg',
                'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-13.jpeg',
                'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-12.jpeg',
                'https://tunstelecom.com.ng/wp-content/uploads/2024/07/images-2.jpeg',
    ];
  let currentIndex = 0;
  function changeImage() {
    let rotate = document.getElementById('rotate');
    rotate.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
  };
setInterval(changeImage, 2000);
