export const capitalizeFirstLettr = (str) => {
  if (str && str.length > 0) {
    const changed = str.charAt(0).toUpperCase() + str.slice(1);
    return changed;
  }
  return str;
};
