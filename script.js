function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateClock, 1000);

function loadSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showProfile() {
    var profileSection = document.querySelector('.image-container');
    var btnContainer = document.getElementById('btn-container');
    if (profileSection.style.display === 'none') {
        profileSection.style.display = 'block';
        btnContainer.style.display = 'none'; 
    }
}

function playMusic() {
    var audio = document.querySelector('audio');
    audio.play();
}

window.addEventListener('DOMContentLoaded', function() {
    playMusic();
});
