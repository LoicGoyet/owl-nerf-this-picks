export const shapeColor = (theme, defaultColor) => {
  switch (theme) {
    case 'color':
    default:
      return defaultColor;

    case 'white':
      return '#ffffff';

    case 'disabled':
      return '#5342a3';
  }
};

export const shapeBackground = (theme, defaultColor) => {
  if (theme === 'color') return defaultColor;
  return 'rgb(20,10,67)';
};
