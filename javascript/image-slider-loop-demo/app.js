
const nextImageButton = document.getElementById('nextImage');
const prevImageButton = document.getElementById('prevImage');
const images = document.querySelectorAll('.slider-image');

nextImageButton.addEventListener('click', function (e) {
    e.preventDefault();
    let currentImageIndex = getCurrentImageIndex();

    if (currentImageIndex === (images.length - 1)) {
        currentImageIndex = -1;
    }

    for (let i = 0; i < images.length; i++) {
        if (thisImageIsShowing(i)) {
            hideCurrentImage(i);
        }
    }

    showNextImage(currentImageIndex + 1);
});

prevImageButton.addEventListener('click', function (e) {
    e.preventDefault();
    let currentImageIndex = getCurrentImageIndex();

    if (currentImageIndex === 0) {
        currentImageIndex = images.length;
    }

    for (let i = 0; i < images.length; i++) {
        if (thisImageIsShowing(i)) {
            hideCurrentImage(i)
        }
    }

    showNextImage(currentImageIndex - 1);
});


// functions

function getCurrentImageIndex () {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('show')) {

            return i;
        }
    }
}

function thisImageIsShowing(i) {
    return images[i].classList.contains('show');
}

function hideCurrentImage(index) {
    images[index].classList.remove('show');
    images[index].classList.add('hide');
}

function showNextImage(index) {
    images[index].classList.remove('hide');
    images[index].classList.add('show');
}
