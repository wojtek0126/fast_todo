import Particles from 'react-particles-js';


const ParticleBackground = () => { 
    

    return (
        <Particles style={{position: 'absolute'}}
        params={particleOptions} />
        )  
};

export default ParticleBackground;

export const particleOptions: any = {
        "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#b6b2b2"
      }
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 12.181158184520175,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#c8c8c8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        // "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
      
const particles2: any= {
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
     }