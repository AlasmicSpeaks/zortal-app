exports.interpretInput = (text) => {
  const layers = {
    ritual: text.includes("reset") || text.includes("milestone"),
    emotion: text.includes("joy") || text.includes("grief"),
    logic: text.includes("if") || text.includes("function")
  };
  return layers;
};
