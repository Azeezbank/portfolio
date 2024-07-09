document.body.addEventListener("copy", (e) => {e.preventDefault();
alert("Sorry, you cant copy from this site, contact the developr!")})

  // Rotating image
  let images = ['https://farmsquare.ng/wp-content/uploads/2021/07/Maize-Farming-Farmsquare.jpg',
               'http://www.iita.org/wp-content/uploads/2022/05/Harvesting-honey-from-a-bee-hive-at-the-IITA-Forest-Center.jpg',
               'https://www.researchgate.net/profile/Gabriel-Akunna/publication/315063882/figure/fig1/AS:472175124717570@1489586730755/Fig-no-1-Animal-treatment-with-alloxan-through-the-penial-vein-while-lying-on-its-back.png'];
  let currentIndex = 0;
  function changeImage() {
    let rotate = document.getElementById('rotate')
    rotate.src = images[currentIndex]
  currentIndex = (currentIndex + 1) % images.length;
  }
setInterval(changeImage, 5000)
