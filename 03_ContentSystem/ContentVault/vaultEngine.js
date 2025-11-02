const vault = [];

exports.archivePost = (post) => {
  vault.push({ ...post, archivedAt: Date.now() });
  return vault;
};
