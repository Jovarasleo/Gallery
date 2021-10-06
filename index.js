let imageContainer = [
  {
    src: "https://images.unsplash.com/photo-1615195627275-48660e9cd84f",
    alt: "nebula cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
    alt: "mountains reflection on water",
  },
  {
    src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
    alt: "strong waves",
  },
  {
    src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
    alt: "blue wavy water",
  },
  {
    src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
    alt: "brown and black galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
    alt: "person on clif in canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
    alt: "whale tale above water surface",
  },
];
// Load images from an array of objects to the DOM
const appSelector = document.querySelector("#app");
function getImages() {
  imageContainer.forEach((imgObject) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("image-container");
    appSelector.appendChild(createDiv);
    let createImg = document.createElement("img");
    createDiv.appendChild(createImg);
    createImg.src = imgObject.src;
    createImg.alt = imgObject.alt;
  });
}
//load images on DOM load
document.addEventListener("DOMContentLoaded", getImages());
//clicking on image makes it popout and take an entire page
let imgSelector = document.querySelectorAll("#app .image-container");
imgSelector.forEach((selectedImg) => {
  selectedImg.addEventListener("click", () => {
    let createDiv = document.createElement("div");
    createDiv = selectedImg.cloneNode(true);
    createDiv.classList.add("big-div");
    appSelector.appendChild(createDiv);
    let bigImage = document.querySelector("#app .big-div img");
    bigImage.classList.add("big-image");
    let arrowRight = document.createElement("div");
    let arrowLeft = document.createElement("div");
    //creating arrows for changing an image
    arrowRight.classList.add("arrowRight", "arrow");
    arrowLeft.classList.add("arrowLeft", "arrow");
    createDiv.appendChild(arrowRight);
    createDiv.appendChild(arrowLeft);
    //clicking on the image removes created elements (removes effect)
    document
      .querySelector("#app .big-div img")
      .addEventListener("click", () => {
        document.querySelector("#app .big-div").remove();
      });
    //keyboard escape removes popout
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (document.querySelector("#app .big-div") != null) {
          document.querySelector("#app .big-div").remove();
        }
      }
    });
    const images = document.querySelectorAll("#app .image-container img");
    const imgArray = Array.from(images);

    //Clicking arrows switches to the next or previous image in DOM

    function nextImage() {
      let index = imgArray.findIndex((element) => {
        if (element.src === bigImage.src) {
          return true;
        }
      });
      if (index < imgArray.length) {
        bigImage.src = imgArray[index + 1].src;
        bigImage.alt = imgArray[index + 1].alt;
      }
      if (index == imgArray.length - 2) {
        bigImage.src = imgArray[0].src;
        bigImage.alt = imgArray[0].alt;
      }
    }
    function previousImage() {
      let index = imgArray.findIndex((element) => {
        if (element.src === bigImage.src) {
          return true;
        }
      });
      if (index < imgArray.length && index > 0) {
        bigImage.src = imgArray[index - 1].src;
        bigImage.alt = imgArray[index - 1].alt;
      }
      if (index == 0) {
        bigImage.src = imgArray[imgArray.length - 2].src;
        bigImage.alt = imgArray[imgArray.length - 2].alt;
      }
    }
    arrowRight.addEventListener("click", () => {
      nextImage();
    });
    arrowLeft.addEventListener("click", () => {
      previousImage();
    });
    //keyboard left and right arrows switches to the next or previous image in DOM
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        previousImage(bigImage);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        nextImage(bigImage);
      }
    });
  });
});
