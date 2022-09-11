const shorten = (title) => {
  const shortenTitle = title.split(" ");
  const newTitle = `${shortenTitle[0]} ${shortenTitle[1]}`;
  return newTitle;
};
const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};
const quantitycount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export { shorten, isInCart, quantitycount };
