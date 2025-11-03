exports.getAnimationForAura = (aura) => {
  const animations = {
    Radiant: "pulse-glow",
    Dreamy: "float-fade",
    Bold: "zoom-flare",
    Warm: "ripple-soft",
    Mystic: "twist-glimmer"
  };
  return animations[aura] || "subtle-shimmer";
};
