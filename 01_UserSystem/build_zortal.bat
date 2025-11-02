@echo off
setlocal enabledelayedexpansion

:: Set base path
set "base=C:\Users\alasm\Desktop\ZorTal Project Folder\ZorTal\01_UserSystem"

:: Create subfolders
mkdir "%base%\UserManagement"
mkdir "%base%\PremiumGlyphwalkers"
mkdir "%base%\StyleAura"
mkdir "%base%\FeedMergeLogic"
mkdir "%base%\ExploreMap"

:: === UserManagement Files ===
set "folder=%base%\UserManagement"
(
echo const mongoose = require("mongoose");
echo const UserSchema = new mongoose.Schema({
echo   username: String,
echo   email: String,
echo   glyphScore: Number,
echo   zorCoinBalance: Number,
echo   aura: String,
echo   referrals: [String]
echo });
echo module.exports = mongoose.model("User", UserSchema);
) > "%folder%\userModel.js"

(
echo const express = require("express");
echo const router = express.Router();
echo const userController = require("./userController");
echo router.post("/register", userController.register);
echo router.post("/login", userController.login);
echo router.get("/profile/:id", userController.getProfile);
echo module.exports = router;
) > "%folder%\userRoutes.js"

(
echo const User = require("./userModel");
echo exports.register = async (req, res) => {
echo   // Registration logic here
echo };
echo exports.login = async (req, res) => {
echo   // Login logic here
echo };
echo exports.getProfile = async (req, res) => {
echo   // Fetch user profile
echo };
) > "%folder%\userController.js"

(
echo const jwt = require("jsonwebtoken");
echo exports.verifyToken = (req, res, next) => {
echo   // Token verification logic
echo };
) > "%folder%\userAuth.js"

(
echo exports.calculateStats = (user) => {
echo   // Engagement metrics and referral tree logic
echo };
) > "%folder%\userStats.js"

(
echo exports.updateGlyphScore = (user, action) => {
echo   // Emotional tag multipliers and glyph logic
echo };
) > "%folder%\userGlyphEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>User Dashboard^</title^>^</head^>
echo ^<body^>
echo ^<h1^>Welcome, Glyphwalker!^</h1^>
echo ^<p^>Your ZorCoin balance and aura will appear here.^</p^>
echo ^</body^>
echo ^</html^>
) > "%folder%\userDashboard.html"

(
echo ^<html^>
echo ^<head^>^<title^>User Profile^</title^>^</head^>
echo ^<body^>
echo ^<h2^>Edit your style aura and preferences^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\userProfile.html"

(
echo ^<html^>
echo ^<head^>^<title^>Login^</title^>^</head^>
echo ^<body^>
echo ^<form^>
echo Username: ^<input type="text" /^>^<br /^>
echo Password: ^<input type="password" /^>^<br /^>
echo ^<button^>Login^</button^>
echo ^</form^>
echo ^</body^>
echo ^</html^>
) > "%folder%\userLogin.html"

echo # User Management System > "%folder%\README.md"
echo ## Purpose: Track users, glyph scores, ZorCoin, engagement. > "%folder%\index.md"

:: === PremiumGlyphwalkers Files ===
set "folder=%base%\PremiumGlyphwalkers"
(
echo const mongoose = require("mongoose");
echo const PremiumSchema = new mongoose.Schema({
echo   userId: String,
echo   dailyZorPCap: Number,
echo   bonusMultiplier: Number
echo });
echo module.exports = mongoose.model("PremiumUser", PremiumSchema);
) > "%folder%\premiumModel.js"

(
echo exports.calculateBonus = (user) => {
echo   // Bonus logic for premium glyphwalkers
echo };
) > "%folder%\premiumLogic.js"

(
echo ^<html^>
echo ^<head^>^<title^>Premium Dashboard^</title^>^</head^>
echo ^<body^>
echo ^<h2^>Your Premium Perks^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\premiumDashboard.html"

echo # Premium Glyphwalker System > "%folder%\README.md"
echo ## Purpose: Manage elite users with ZorP caps and perks. > "%folder%\index.md"

:: === StyleAura Files ===
set "folder=%base%\StyleAura"
(
echo exports.evolveAura = (user, tags) => {
echo   // Logic to evolve aura based on emotional tags
echo };
) > "%folder%\auraEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Aura Visualizer^</title^>^</head^>
echo ^<body^>
echo ^<div^>Your current aura: Cozy^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\auraVisualizer.html"

echo # Style Aura Engine > "%folder%\README.md"
echo ## Purpose: Track emotional style aura and evolution. > "%folder%\index.md"

:: === FeedMergeLogic Files ===
set "folder=%base%\FeedMergeLogic"
(
echo exports.mergeFeeds = (userA, userB) => {
echo   // Logic to merge feeds and boost glyphs
echo };
) > "%folder%\mergeEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Feed Merge^</title^>^</head^>
echo ^<body^>
echo ^<h2^>Merge with a friend^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\mergeUI.html"

echo # Feed Merge Logic > "%folder%\README.md"
echo ## Purpose: Merge feeds between glyphwalkers to amplify influence. > "%folder%\index.md"

:: === ExploreMap Files ===
set "folder=%base%\ExploreMap"
(
echo exports.getNearbyGlyphs = (location) => {
echo   // Geo logic to find nearby glyphwalkers and stores
echo };
) > "%folder%\mapEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Explore Map^</title^>^</head^>
echo ^<body^>
echo ^<div^>Map showing style hotspots^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\mapUI.html"

echo # Explore Map Engine > "%folder%\README.md"
echo ## Purpose: Display glyphwalkers and style hotspots on map. > "%folder%\index.md"

:: === 02_BrandSystem ===
set "base=C:\Users\alasm\Desktop\ZorTal Project Folder\ZorTal\02_BrandSystem"
mkdir "%base%\BrandOnboarding"
mkdir "%base%\BrandResonance"
mkdir "%base%\BrandDashboard"
mkdir "%base%\BrandProposalEngine"

:: === BrandOnboarding ===
set "folder=%base%\BrandOnboarding"
(
echo const brands = [];
echo exports.registerBrand = (data) => {
echo   brands.push(data);
echo };
) > "%folder%\brandRegister.js"

(
echo ^<html^>
echo ^<head^>^<title^>Brand Onboarding^</title^>^</head^>
echo ^<body^>
echo ^<h2^>Welcome, Brand!^</h2^>
echo ^<p^>Submit your style, mission, and resonance goals.^</p^>
echo ^</body^>
echo ^</html^>
) > "%folder%\brandOnboarding.html"

echo # Brand Onboarding > "%folder%\README.md"
echo ## Purpose: Register brands and collect resonance data. > "%folder%\index.md"

:: === BrandResonance ===
set "folder=%base%\BrandResonance"
(
echo exports.calculateResonance = (brand, user) => {
echo   // Match brand style tags to user aura
echo };
) > "%folder%\resonanceEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Resonance Map^</title^>^</head^>
echo ^<body^>
echo ^<div^>Visualize brand-user resonance^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\resonanceMap.html"

echo # Brand Resonance Engine > "%folder%\README.md"
echo ## Purpose: Match brands to users based on emotional style tags. > "%folder%\index.md"

:: === BrandDashboard ===
set "folder=%base%\BrandDashboard"
(
echo exports.getBrandStats = (brandId) => {
echo   // Return ZorCoin flow, user engagement, resonance score
echo };
) > "%folder%\brandStats.js"

(
echo ^<html^>
echo ^<head^>^<title^>Brand Dashboard^</title^>^</head^>
echo ^<body^>
echo ^<h2^>Your Brand Metrics^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\brandDashboard.html"

echo # Brand Dashboard > "%folder%\README.md"
echo ## Purpose: Show brand performance, ZorCoin flow, and resonance. > "%folder%\index.md"

:: === BrandProposalEngine ===
set "folder=%base%\BrandProposalEngine"
(
echo exports.generateProposal = (brand) => {
echo   // Create custom onboarding pitch for ZorTal
echo };
) > "%folder%\proposalBuilder.js"

(
echo ^<html^>
echo ^<head^>^<title^>Proposal Generator^</title^>^</head^>
echo ^<body^>
echo ^<form^>
echo ^<input type="text" placeholder="Brand Name" /^>
echo ^<button^>Generate Proposal^</button^>
echo ^</form^>
echo ^</body^>
echo ^</html^>
) > "%folder%\proposalForm.html"

echo # Brand Proposal Engine > "%folder%\README.md"
echo ## Purpose: Generate onboarding proposals for new brands. > "%folder%\index.md"

:: === 03_ContentSystem ===
set "base=C:\Users\alasm\Desktop\ZorTal Project Folder\ZorTal\03_ContentSystem"
mkdir "%base%\ContentCreation"
mkdir "%base%\EmotionalTagging"
mkdir "%base%\ContentModeration"
mkdir "%base%\FeedRippleEngine"
mkdir "%base%\ContentVault"

:: === ContentCreation ===
set "folder=%base%\ContentCreation"
(
echo exports.createPost = (user, content) => {
echo   // Save post with timestamp and aura
echo };
) > "%folder%\postEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Create Post^</title^>^</head^>
echo ^<body^>
echo ^<textarea^>Share your glyph...^</textarea^>
echo ^<button^>Post^</button^>
echo ^</body^>
echo ^</html^>
) > "%folder%\postForm.html"

echo # Content Creation > "%folder%\README.md"
echo ## Purpose: Let users create glyphs, posts, and emotional content. > "%folder%\index.md"

:: === EmotionalTagging ===
set "folder=%base%\EmotionalTagging"
(
echo exports.tagEmotion = (content) => {
echo   // Analyze and assign emotional tags
echo };
) > "%folder%\emotionEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Tag Emotion^</title^>^</head^>
echo ^<body^>
echo ^<div^>Select emotion: Joy, Cozy, Bold, etc.^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\emotionTagger.html"

echo # Emotional Tagging > "%folder%\README.md"
echo ## Purpose: Assign emotional tags to content for resonance scoring. > "%folder%\index.md"

:: === ContentModeration ===
set "folder=%base%\ContentModeration"
(
echo exports.flagContent = (postId) => {
echo   // Flag inappropriate or off-tone content
echo };
) > "%folder%\moderationEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Moderation Panel^</title^>^</head^>
echo ^<body^>
echo ^<h2^>Flagged Posts^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\moderationPanel.html"

echo # Content Moderation > "%folder%\README.md"
echo ## Purpose: Review and flag content that violates tone or safety. > "%folder%\index.md"

:: === FeedRippleEngine ===
set "folder=%base%\FeedRippleEngine"
(
echo exports.propagateRipple = (post, network) => {
echo   // Spread content based on resonance and glyph score
echo };
) > "%folder%\rippleEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Ripple Feed^</title^>^</head^>
echo ^<body^>
echo ^<div^>Your feed is alive with glyphs...^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\rippleFeed.html"

echo # Feed Ripple Engine > "%folder%\README.md"
echo ## Purpose: Spread content through the glyphwalker network based on resonance. > "%folder%\index.md"

:: === ContentVault ===
set "folder=%base%\ContentVault"
(
echo const vault = [];
echo exports.archivePost = (post) => {
echo   vault.push(post);
echo };
) > "%folder%\vaultEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Content Vault^</title^>^</head^>
echo ^<body^>
echo ^<h2^>Archived Glyphs^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\vaultUI.html"

echo # Content Vault > "%folder%\README.md"
echo ## Purpose: Archive meaningful content for legacy and retrieval. > "%folder%\index.md"

:: === 04_EconomySystem ===
set "base=C:\Users\alasm\Desktop\ZorTal Project Folder\ZorTal\04_EconomySystem"
mkdir "%base%\ZorCoinEngine"
mkdir "%base%\InfluenceMining"
mkdir "%base%\TransactionLedger"
mkdir "%base%\Sorology"
mkdir "%base%\EconomyDashboard"

:: === ZorCoinEngine ===
set "folder=%base%\ZorCoinEngine"
(
echo exports.mintZorCoin = (user, action) => {
echo   // Mint ZorCoin based on glyph score and aura
echo };
) > "%folder%\zorCoinMint.js"

(
echo ^<html^>
echo ^<head^>^<title^>ZorCoin Wallet^</title^>^</head^>
echo ^<body^>
echo ^<div^>Your ZorCoin balance: 0.00^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\zorCoinWallet.html"

echo # ZorCoin Engine > "%folder%\README.md"
echo ## Purpose: Mint and track ZorCoin based on user actions and resonance. > "%folder%\index.md"

:: === InfluenceMining ===
set "folder=%base%\InfluenceMining"
(
echo exports.mineInfluence = (user) => {
echo   // Calculate influence score from engagement and aura
echo };
) > "%folder%\influenceEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Influence Mining^</title^>^</head^>
echo ^<body^>
echo ^<div^>Your influence score: 0.00^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\influenceUI.html"

echo # Influence Mining > "%folder%\README.md"
echo ## Purpose: Convert emotional engagement into influence and ZorCoin. > "%folder%\index.md"

:: === TransactionLedger ===
set "folder=%base%\TransactionLedger"
(
echo const ledger = [];
echo exports.recordTransaction = (from, to, amount, reason) => {
echo   ledger.push({ from, to, amount, reason, timestamp: Date.now() });
echo };
) > "%folder%\ledgerEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Transaction Ledger^</title^>^</head^>
echo ^<body^>
echo ^<h2^>ZorCoin Transactions^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\ledgerUI.html"

echo # Transaction Ledger > "%folder%\README.md"
echo ## Purpose: Record and display all ZorCoin transactions. > "%folder%\index.md"

:: === Sorology ===
set "folder=%base%\Sorology"
(
echo exports.analyzeSorology = (user) => {
echo   // Interpret emotional patterns and spending behavior
echo };
) > "%folder%\sorologyEngine.js"

(
echo ^<html^>
echo ^<head^>^<title^>Sorology Chart^</title^>^</head^>
echo ^<body^>
echo ^<div^>Your emotional commerce pattern: TBD^</div^>
echo ^</body^>
echo ^</html^>
) > "%folder%\sorologyUI.html"

echo # Sorology Engine > "%folder%\README.md"
echo ## Purpose: Analyze emotional spending patterns and resonance loops. > "%folder%\index.md"

:: === EconomyDashboard ===
set "folder=%base%\EconomyDashboard"
(
echo exports.getEconomyStats = () => {
echo   // Return total ZorCoin in circulation, top earners, etc.
echo };
) > "%folder%\economyStats.js"

(
echo ^<html^>
echo ^<head^>^<title^>Economy Dashboard^</title^>^</head^>
echo ^<body^>
echo ^<h2^>ZorTal Economic Overview^</h2^>
echo ^</body^>
echo ^</html^>
) > "%folder%\economyDashboard.html"

echo # Economy Dashboard > "%folder%\README.md"
echo ## Purpose: Visualize ZorTal’s economic health and ZorCoin flow. > "%folder%\index.md"



echo.
echo ✅ ZorTal UserSystem scaffolded successfully!
pause
