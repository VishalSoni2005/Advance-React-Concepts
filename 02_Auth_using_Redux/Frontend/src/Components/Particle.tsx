import React from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine'; // Import types for better TypeScript support
import { loadFull } from 'tsparticles'; // Load the full tsparticles library

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    // Initialize the tsParticles instance (engine)
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#0d47a1', // Background color
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push', // Add particles on click
            },
            onHover: {
              enable: true,
              mode: 'repulse', // Repulse particles on hover
            },
          },
          modes: {
            push: {
              quantity: 4, // Number of particles to add on click
            },
            repulse: {
              distance: 200, // Distance of repulsion
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff', // Particle color
          },
          links: {
            color: '#ffffff', // Link color between particles
            distance: 150, // Maximum distance for links
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce', // Particles bounce at the edges
            },
            random: false,
            speed: 2, // Particle movement speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, // Area in which particles are distributed
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5, // Particle opacity
          },
          shape: {
            type: 'circle', // Particle shape
          },
          size: {
            value: { min: 1, max: 5 }, // Particle size range
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
