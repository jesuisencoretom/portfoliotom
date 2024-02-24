const PATH_PARTICLES_CONFIG = '/particlesjs-config.json';

function createParticles(jsonData) {
    particlesJS('particles-js-hero', jsonData);
    particlesJS('particles-js-about', jsonData);
    particlesJS('particles-js-photos', jsonData);
    particlesJS('particles-js-projects', jsonData);
    particlesJS('particles-js-contact', jsonData);
}

fetch(PATH_PARTICLES_CONFIG)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network or file not found error');
        }
        return response.json();
    })
    .then(jsonData => {
        createParticles(jsonData);
    })
    .catch(error => {
        console.error('JSON file retrieval error :', error);
    });