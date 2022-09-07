const shorten = (title) => {
  const shortenTitle = title.split(" ");
  const newTitle = `${shortenTitle[0]} ${shortenTitle[1]}`;
  return newTitle;
};
export {shorten}
