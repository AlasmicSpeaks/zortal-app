exports.generateOnboardingSteps = (userType) => {
  const steps = [
    "Welcome to ZorTal",
    "Choose your Style Aura",
    "Complete your Sorology",
    "Join a Style Guild",
    "Begin your first Quest"
  ];

  if (userType === "influencer") {
    steps.splice(3, 0, "Register your platform");
  }

  return steps;
};
