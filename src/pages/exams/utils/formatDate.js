const formatDate = (date) => {
  const changedDate = date.slice(0, 10).split("-");
  return `${changedDate[0]}-${changedDate[1]}-${changedDate[2]}`;
};

export default formatDate;
