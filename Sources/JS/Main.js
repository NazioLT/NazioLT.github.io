function Button() {
    var parag = document.getElementById("Note");
    parag.innerHTML = "Tu aimes fortnite = tu peux t'en aller du site.";
}

window.addEventListener('scroll', () => {
    let y = (1 + (window.scrollY || window.pageYOffset)) / 725
    document.getElementById('HEAD').style.backgroundColor = `rgba(${56}, ${56}, ${56}, ${y})`;
})