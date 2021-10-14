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
function createEl (type, className) {
  let element = document.createElement(type);
  element.classList = className;
  return element;
} 
// Load images from an array of objects to the DOM
const appSelector = document.querySelector("#app");
function getImages() {
  imageContainer.forEach((imgObject) => {
    let createDiv = createEl ("div", "image-container")
    let createImg = createEl("img", "image")
    appSelector.appendChild(createDiv);
    createDiv.appendChild(createImg);
    createImg.src = imgObject.src;
    createImg.alt = imgObject.alt;
  });
}
//load images on DOM load
document.addEventListener("DOMContentLoaded", getImages());
//clicking on image makes it popout and take an entire page
let imgSelector = document.querySelectorAll("#app .image-container");
imgSelector.forEach((selectedImg,index) => {
  selectedImg.addEventListener("click", () => {
    let createDiv = createEl("div", "big-div");
    let bigImage = createEl("img", "big-image");
    bigImage.src = imageContainer[index].src;
    bigImage.alt = imageContainer[index].alt;
    createDiv.appendChild(bigImage);
    appSelector.appendChild(createDiv);;
    //creating arrows for changing an image
    let arrowRight = createEl ("div", "arrowRight");
    let arrowLeft = createEl ("div", "arrowLeft");
    createDiv.append(arrowRight, arrowLeft);
    //clicking on the image removes created elements (removes effect)
    bigImage.addEventListener("click", () => {
        createDiv.remove();
      });
    //keyboard escape removes popout
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (document.querySelector("#app .big-div") != null) {
          createDiv.remove();
        }
      }
    });
    // functions which allows to switch photos
    let newindex = index;
    function nextImage() {
      if (newindex < imageContainer.length-1) {
        newindex ++;
        bigImage.src = imageContainer[newindex].src;
        bigImage.alt = imageContainer[newindex].alt;
      }
      else if (newindex == imageContainer.length-1) {
        bigImage.src = imageContainer[0].src;
        bigImage.alt = imageContainer[0].alt;
        newindex = 0;
      };
    };
    function previousImage() {
      if (newindex < imageContainer.length && newindex > 0) {
        newindex --;
        bigImage.src = imageContainer[newindex].src;
        bigImage.alt = imageContainer[newindex].alt;
      }
      else if (newindex == 0) {
        bigImage.src = imageContainer[imageContainer.length-1].src;
        bigImage.alt = imageContainer[imageContainer.length-1].alt;
        newindex = imageContainer.length -1
      };
    };
    //Clicking arrows switches to the next or previous image in DOM
    arrowRight.addEventListener("click", () => {
      nextImage();
    });
    arrowLeft.addEventListener("click", () => {
      previousImage();
    });
    //Keyboard left and right arrows switches to the next or previous image in DOM
    document.addEventListener("keydown", (event) => {
      if (event.key == "ArrowLeft") {
        previousImage();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        nextImage();
      }
    });
  });
;});
