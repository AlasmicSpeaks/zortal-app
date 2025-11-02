const brands = [];

exports.registerBrand = (data) => {
  const newBrand = {
    name: data.name,
    styleTags: data.styleTags,
    mission: data.mission,
    resonanceGoals: data.resonanceGoals
  };
  brands.push(newBrand);
  return newBrand;
};
