export const processData = (data, filters = {}) => {
  return data.filter(item => {
    for (let key in filters) {
      if (filters[key] && item[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });
};
