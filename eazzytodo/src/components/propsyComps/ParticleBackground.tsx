import Particles from 'react-particles-js';


const ParticleBackground = () => { 
    

    return (
        <Particles style={{position: 'absolute'}}
        params={{
         "particles": {
             "number": {
                 "value": 60,
                 "density": {
                     "enable": false
                 }
             },
             "size": {
                 "value": 12,
                 "random": true,
                 "anim": {
                     "speed": 2,
                     "size_min": 0.3
                 }
             },
             "line_linked": {
                 "enable": false
             },
             "move": {
                 "random": true,
                 "speed": 1,
                 "direction": "top",
                 "out_mode": "out"
             }
         },
         "interactivity": {
             "events": {
                 "onhover": {
                     "enable": true,
                     "mode": "bubble"
                 },
                 "onclick": {
                     "enable": true,
                     "mode": "repulse"
                 }
             },
             "modes": {
                 "bubble": {
                     "distance": 250,
                     "duration": 2,
                     "size": 0,
                     "opacity": 0
                 },
                 "repulse": {
                     "distance": 400,
                     "duration": 4
                 }
             }
         }
     }} />
        )  
};

export default ParticleBackground;