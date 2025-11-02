exports.propagateRipple = (post, network) => {
  const ripple = {
    postId: post.id,
    reach: network.length * post.resonanceScore,
    auraSpread: post.aura
  };
  return ripple;
};
