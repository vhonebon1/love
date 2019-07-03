const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const size = sizes[label];
  accumulator[label] = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;
