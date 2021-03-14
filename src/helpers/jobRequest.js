export const checkIsLastPage = (pageNumber, length) => {
  return pageNumber == length;
};

export const calculateWidthOfProgress = (pageNumber, length) => {
  return Math.floor((Number(pageNumber) / length) * 100);
};
