// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });

// if('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if(item.isIntersecting) {
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     imagesToLoad.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//       loadImages(img);
//     });
// }
  
const images = document.querySelectorAll("[data-src]");

const preloadImage = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
        img.removeAttribute("data-src");
    };
};

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);
  
images.forEach(image => {
    imgObserver.observe(image);
})