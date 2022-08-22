export const getPositionInfo = (property) => {
  const { address, description } = property;
  if (address && address !== "") {
    const positionInfo = {
      popupText: description,
      address: address,
    };
    return positionInfo;
  }
  return null;
};
