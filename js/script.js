function rand() {
    let button = document.querySelector('.nao');
    if (button) {
        button.style.position = 'absolute'; 
        button.style.left = `${Math.random() * 1800}px`;
        button.style.top = `${Math.random() * 600}px`;
    }
}
