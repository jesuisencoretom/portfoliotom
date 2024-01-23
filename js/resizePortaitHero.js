function resizeImage() {
    const container = document.querySelector('#hero .contents');
    const image = document.querySelector('#hero .contents img');

    let containerHeight = container.clientHeight;

    image.style.height = containerHeight + 'px';
}

window.addEventListener('resize', resizeImage);
window.addEventListener('load', resizeImage);