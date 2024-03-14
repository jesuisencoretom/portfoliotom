const iframes = document.querySelectorAll('.videoProject');

iframes.forEach(iframe => {
    iframe.height = (iframe.clientWidth * 9 / 16) + "px";
});