const { floatAnimation } = require("./src/utils/animations");

module.exports = {
  theme: {
    extend: {
      animation: {
        ...floatAnimation.styles,
      },
      keyframes: {
        ...floatAnimation.keyframes,
      },
    },
  },
};
