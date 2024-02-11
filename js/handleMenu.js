const menu = document.getElementById("menu")


function blockScrolling() {
    const scrollPosition = window.scrollY;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
}


function enableScrolling() {
    const scrollPosition = parseInt(document.body.style.top || '0');

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';

    window.scrollTo(0, Math.abs(scrollPosition));
}


function handleMenu() {
    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        blockScrolling();
    } else {
        enableScrolling();
    }
}