import type { ISourceOptions } from "tsparticles-engine";

export const cosmicParticlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: [
        "#00d3bc",
        "#ffffff",
        "#9d4edd",
        "#4cc9f0",
        "#7209b7",
        "#b5179e",
      ],
    },
    number: {
      value: 150,
      density: {
        enable: true,
        area: 800,
      },
    },
    opacity: {
      value: { min: 0.1, max: 1 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
        minimumValue: 0.1,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.5, max: 3 },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: {
        value: "#00d3bc",
      },
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 0.3 },
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
      attract: {
        enable: false,
      },
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
};
