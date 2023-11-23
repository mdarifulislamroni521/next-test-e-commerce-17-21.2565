// my-animation-plugin.js
module.exports = {
  // Define a function that generates dynamic keyframes
  generateKeyframes: (duration) => {
    // Calculate the dynamic animation duration
    const animationDuration = `${duration}s`;
    console.log("duration is:", duration);

    return {
      [`animate-tb-${duration}`]: {
        animation: `customAnimation ${animationDuration} ease-in-out infinite`,
        "@keyframes customAnimation": {
          "0%": {
            transform: "translateY(-10px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    };
  },
};
