(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_02ccb269._.js", {

"[project]/src/components/HeaderWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeaderWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
;
// Dynamically import the Header component with no SSR to avoid hydration issues
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/Header.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Header.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Header;
function HeaderWrapper() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
        fileName: "[project]/src/components/HeaderWrapper.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c1 = HeaderWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "HeaderWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/spinner/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SpinnerPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeaderWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Define possible prizes for the spinner
const PRIZES = [
    {
        id: 1,
        tokens: 10,
        probability: 0.30,
        label: '10 Tokens',
        color: 'from-blue-500 to-blue-700'
    },
    {
        id: 2,
        tokens: 25,
        probability: 0.25,
        label: '25 Tokens',
        color: 'from-green-500 to-green-700'
    },
    {
        id: 3,
        tokens: 50,
        probability: 0.20,
        label: '50 Tokens',
        color: 'from-yellow-500 to-yellow-700'
    },
    {
        id: 4,
        tokens: 100,
        probability: 0.15,
        label: '100 Tokens',
        color: 'from-orange-500 to-orange-700'
    },
    {
        id: 5,
        tokens: 200,
        probability: 0.07,
        label: '200 Tokens',
        color: 'from-red-500 to-red-700'
    },
    {
        id: 6,
        tokens: 500,
        probability: 0.03,
        label: '500 Tokens',
        color: 'from-purple-500 to-purple-700'
    }
];
// Broke Crate prizes (normal rewards)
const BROKE_CRATE_PRIZES = [
    {
        id: 1,
        tokens: 20,
        probability: 0.35,
        label: '20 Tokens',
        color: 'from-blue-500 to-blue-700'
    },
    {
        id: 2,
        tokens: 35,
        probability: 0.30,
        label: '35 Tokens',
        color: 'from-green-500 to-green-700'
    },
    {
        id: 3,
        tokens: 75,
        probability: 0.20,
        label: '75 Tokens',
        color: 'from-yellow-500 to-yellow-700'
    },
    {
        id: 4,
        tokens: 150,
        probability: 0.10,
        label: '150 Tokens',
        color: 'from-orange-500 to-orange-700'
    },
    {
        id: 5,
        tokens: 250,
        probability: 0.05,
        label: '250 Tokens',
        color: 'from-red-500 to-red-700'
    }
];
// Legend Crate prizes (premium rewards)
const LEGEND_CRATE_PRIZES = [
    {
        id: 1,
        tokens: 100,
        probability: 0.30,
        label: '100 Tokens',
        color: 'from-blue-500 to-blue-700'
    },
    {
        id: 2,
        tokens: 250,
        probability: 0.25,
        label: '250 Tokens',
        color: 'from-green-500 to-green-700'
    },
    {
        id: 3,
        tokens: 500,
        probability: 0.20,
        label: '500 Tokens',
        color: 'from-yellow-500 to-yellow-700'
    },
    {
        id: 4,
        tokens: 1000,
        probability: 0.15,
        label: '1000 Tokens',
        color: 'from-orange-500 to-orange-700'
    },
    {
        id: 5,
        reward: 'avatar',
        probability: 0.05,
        label: 'Rare Avatar',
        color: 'from-pink-500 to-pink-700'
    },
    {
        id: 6,
        reward: 'banner',
        probability: 0.03,
        label: 'Team Banner',
        color: 'from-purple-500 to-purple-700'
    },
    {
        id: 7,
        reward: 'decoration',
        probability: 0.02,
        label: 'Profile Decoration',
        color: 'from-indigo-500 to-indigo-700'
    }
];
// A max of 5 spins per day
const MAX_DAILY_SPINS = 5;
// A max of 5 broke crate opens per day
const MAX_DAILY_BROKE_CRATE = 5;
// A max of 2 legend crate opens per day
const MAX_DAILY_LEGEND_CRATE = 2;
// Cooldown period in ms (24 hours)
const COOLDOWN_PERIOD = 24 * 60 * 60 * 1000;
// Crate types enum
const CRATE_TYPES = {
    SPINNER: 'spinner',
    BROKE: 'broke',
    LEGEND: 'legend'
};
function SpinnerPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { profile, updateProfileData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"])();
    const [spinning, setSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prize, setPrize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [spinAngle, setSpinAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [spinsRemaining, setSpinsRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cooldownTime, setCooldownTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [spinHistory, setSpinHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // New state for crates
    const [activeCrateType, setActiveCrateType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CRATE_TYPES.SPINNER);
    const [brokeCrateRemaining, setBrokeCrateRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [legendCrateRemaining, setLegendCrateRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [brokeCrateCooldown, setBrokeCrateCooldown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [legendCrateCooldown, setLegendCrateCooldown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openingCrate, setOpeningCrate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cratePrize, setCratePrize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpinnerPage.useEffect": ()=>{
            if (!user) {
                router.push('/login');
                return;
            }
            if (profile) {
                const currentTime = Date.now();
                const currentDate = new Date(currentTime).setHours(0, 0, 0, 0);
                // Get spinner usage
                const spinnerUsed = profile.spinnerUsed || 0;
                const lastSpinTime = profile.lastSpinTime || 0;
                const lastSpinDate = new Date(lastSpinTime).setHours(0, 0, 0, 0);
                // Get broke crate usage
                const brokeCrateUsed = profile.brokeCrateUsed || 0;
                const lastBrokeCrateTime = profile.lastBrokeCrateTime || 0;
                const lastBrokeCrateDate = new Date(lastBrokeCrateTime).setHours(0, 0, 0, 0);
                // Get legend crate usage
                const legendCrateUsed = profile.legendCrateUsed || 0;
                const lastLegendCrateTime = profile.lastLegendCrateTime || 0;
                const lastLegendCrateDate = new Date(lastLegendCrateTime).setHours(0, 0, 0, 0);
                // Load spin history
                const history = profile.spinHistory || [];
                setSpinHistory(history);
                // Check if we need to reset spinner (new day)
                if (currentDate > lastSpinDate) {
                    // It's a new day, reset spins
                    setSpinsRemaining(MAX_DAILY_SPINS);
                    setCooldownTime(null);
                    // Reset spinner usage if it's a new day
                    if (spinnerUsed > 0) {
                        updateProfileData({
                            spinnerUsed: 0,
                            lastSpinTime: currentTime
                        }).catch({
                            "SpinnerPage.useEffect": (err)=>console.error('Error resetting spinner usage:', err)
                        }["SpinnerPage.useEffect"]);
                    }
                } else {
                    setSpinsRemaining(MAX_DAILY_SPINS - spinnerUsed);
                    if (spinnerUsed >= MAX_DAILY_SPINS) {
                        // Set cooldown to end at midnight tonight
                        const tomorrow = new Date(currentDate);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        setCooldownTime(tomorrow.getTime());
                    }
                }
                // Check if we need to reset broke crate (new day)
                if (currentDate > lastBrokeCrateDate) {
                    // It's a new day, reset broke crate
                    setBrokeCrateRemaining(MAX_DAILY_BROKE_CRATE);
                    setBrokeCrateCooldown(null);
                    // Reset broke crate usage if it's a new day
                    if (brokeCrateUsed > 0) {
                        updateProfileData({
                            brokeCrateUsed: 0,
                            lastBrokeCrateTime: currentTime
                        }).catch({
                            "SpinnerPage.useEffect": (err)=>console.error('Error resetting broke crate usage:', err)
                        }["SpinnerPage.useEffect"]);
                    }
                } else {
                    setBrokeCrateRemaining(MAX_DAILY_BROKE_CRATE - brokeCrateUsed);
                    if (brokeCrateUsed >= MAX_DAILY_BROKE_CRATE) {
                        // Set cooldown to end at midnight tonight
                        const tomorrow = new Date(currentDate);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        setBrokeCrateCooldown(tomorrow.getTime());
                    }
                }
                // Check if we need to reset legend crate (new day)
                if (currentDate > lastLegendCrateDate) {
                    // It's a new day, reset legend crate
                    setLegendCrateRemaining(MAX_DAILY_LEGEND_CRATE);
                    setLegendCrateCooldown(null);
                    // Reset legend crate usage if it's a new day
                    if (legendCrateUsed > 0) {
                        updateProfileData({
                            legendCrateUsed: 0,
                            lastLegendCrateTime: currentTime
                        }).catch({
                            "SpinnerPage.useEffect": (err)=>console.error('Error resetting legend crate usage:', err)
                        }["SpinnerPage.useEffect"]);
                    }
                } else {
                    setLegendCrateRemaining(MAX_DAILY_LEGEND_CRATE - legendCrateUsed);
                    if (legendCrateUsed >= MAX_DAILY_LEGEND_CRATE) {
                        // Set cooldown to end at midnight tonight
                        const tomorrow = new Date(currentDate);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        setLegendCrateCooldown(tomorrow.getTime());
                    }
                }
            }
        }
    }["SpinnerPage.useEffect"], [
        user,
        profile,
        router,
        updateProfileData
    ]);
    const formatTimeRemaining = (targetTime)=>{
        const remaining = Math.max(0, targetTime - Date.now());
        const hours = Math.floor(remaining / (60 * 60 * 1000));
        const minutes = Math.floor(remaining % (60 * 60 * 1000) / (60 * 1000));
        return `${hours}h ${minutes}m`;
    };
    const spinWheel = async ()=>{
        if (spinning || !profile || spinsRemaining <= 0) return;
        setSpinning(true);
        setMessage(null);
        setPrize(null);
        // Generate a random number between 0 and 1
        const random = Math.random();
        // Determine prize based on probability
        let cumulativeProbability = 0;
        let selectedPrize = PRIZES[0];
        for (const prize of PRIZES){
            cumulativeProbability += prize.probability;
            if (random <= cumulativeProbability) {
                selectedPrize = prize;
                break;
            }
        }
        // Calculate rotation angle (between 720 and 1080 degrees + offset for the prize)
        const baseRotation = 2 * 360 + Math.random() * 360; // 2-3 full rotations
        const segmentAngle = 360 / PRIZES.length;
        const prizeIndex = PRIZES.findIndex((p)=>p.id === selectedPrize.id);
        const prizeAngle = prizeIndex * segmentAngle;
        const finalAngle = baseRotation + prizeAngle;
        setSpinAngle(finalAngle);
        // Wait for spinning animation to complete
        setTimeout(async ()=>{
            setPrize(selectedPrize);
            try {
                // Calculate new values first
                const newUsed = (profile.spinnerUsed || 0) + 1;
                const currentTokens = profile.cosmicTokens || 0;
                const newTokens = currentTokens + selectedPrize.tokens;
                const currentTime = Date.now();
                const newHistory = [
                    ...profile.spinHistory || [],
                    {
                        time: currentTime,
                        prize: selectedPrize,
                        type: CRATE_TYPES.SPINNER
                    }
                ];
                // Limit history to last 10 spins
                if (newHistory.length > 10) {
                    newHistory.shift(); // Remove oldest entry
                }
                // First update local state immediately
                setMessage(`Congratulations! You won ${selectedPrize.tokens} Cosmic Tokens! Your new balance: ${newTokens} Tokens.`);
                setSpinsRemaining(MAX_DAILY_SPINS - newUsed);
                setSpinHistory(newHistory);
                // Then update database - wrap in try/catch with specific error handling
                try {
                    await updateProfileData({
                        cosmicTokens: newTokens,
                        spinnerUsed: newUsed,
                        lastSpinTime: currentTime,
                        spinHistory: newHistory
                    });
                    if (newUsed >= MAX_DAILY_SPINS) {
                        // Set cooldown to end at midnight tonight
                        const currentDate = new Date().setHours(0, 0, 0, 0);
                        const tomorrow = new Date(currentDate);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        setCooldownTime(tomorrow.getTime());
                    }
                } catch (dbError) {
                    console.error('Database update error:', dbError);
                    // Even if the database update fails, we keep the UI updated
                    // This prevents the "Error updating your tokens. Please try again. Your new balance: 0 Tokens." error message
                    // We'll just show a more informative message
                    setMessage(`You won ${selectedPrize.tokens} tokens! Balance: ${newTokens} Tokens. (Changes will sync on next refresh)`);
                }
            } catch (error) {
                console.error('Error in token update process:', error);
                setMessage(`Error processing your spin. Please refresh the page. Your current balance: ${profile.cosmicTokens || 0} Tokens.`);
            } finally{
                setSpinning(false);
            }
        }, 3000);
    };
    const openCrate = async (crateType)=>{
        if (openingCrate || !profile) return;
        // Check if user has remaining crate opens
        if (crateType === CRATE_TYPES.BROKE && brokeCrateRemaining <= 0) return;
        if (crateType === CRATE_TYPES.LEGEND && legendCrateRemaining <= 0) return;
        setOpeningCrate(true);
        setMessage(null);
        setCratePrize(null);
        // Select prize list based on crate type
        const prizeList = crateType === CRATE_TYPES.BROKE ? BROKE_CRATE_PRIZES : LEGEND_CRATE_PRIZES;
        // Generate a random number between 0 and 1
        const random = Math.random();
        // Determine prize based on probability
        let cumulativeProbability = 0;
        let selectedPrize = prizeList[0];
        for (const prize of prizeList){
            cumulativeProbability += prize.probability;
            if (random <= cumulativeProbability) {
                selectedPrize = prize;
                break;
            }
        }
        // Wait for the crate opening animation
        setTimeout(async ()=>{
            setCratePrize(selectedPrize);
            try {
                const currentTime = Date.now();
                const currentTokens = profile.cosmicTokens || 0;
                let newTokens = currentTokens;
                let rewardMessage = '';
                // Update values based on crate type
                const updateData = {
                    lastSpinTime: currentTime
                };
                // Handle different reward types
                if ('tokens' in selectedPrize && selectedPrize.tokens !== undefined) {
                    newTokens = currentTokens + selectedPrize.tokens;
                    updateData.cosmicTokens = newTokens;
                    rewardMessage = `${selectedPrize.tokens} Cosmic Tokens`;
                } else if ('reward' in selectedPrize) {
                    // Handle special rewards (avatar, banner, decoration)
                    const rewardType = selectedPrize.reward;
                    if (rewardType === 'avatar') {
                        // Give a random rare avatar
                        const avatarId = `rare_avatar_${Math.floor(Math.random() * 10) + 1}`;
                        const avatars = [
                            ...profile.avatars || []
                        ];
                        if (!avatars.includes(avatarId)) {
                            avatars.push(avatarId);
                            updateData.avatars = avatars;
                        }
                        rewardMessage = 'a Rare Avatar';
                    } else if (rewardType === 'banner') {
                        // Give a random team banner
                        const bannerId = `team_banner_${Math.floor(Math.random() * 5) + 1}`;
                        const banners = [
                            ...profile.teamBanners || []
                        ];
                        if (!banners.includes(bannerId)) {
                            banners.push(bannerId);
                            updateData.teamBanners = banners;
                        }
                        rewardMessage = 'a Team Banner';
                    } else if (rewardType === 'decoration') {
                        // Give a random profile decoration
                        const decorationId = `profile_decoration_${Math.floor(Math.random() * 7) + 1}`;
                        const decorations = [
                            ...profile.profileDecorations || []
                        ];
                        if (!decorations.includes(decorationId)) {
                            decorations.push(decorationId);
                            updateData.profileDecorations = decorations;
                        }
                        rewardMessage = 'a Profile Decoration';
                    }
                }
                // Update crate usage based on type
                if (crateType === CRATE_TYPES.BROKE) {
                    const newUsed = (profile.brokeCrateUsed || 0) + 1;
                    updateData.brokeCrateUsed = newUsed;
                    updateData.lastBrokeCrateTime = currentTime;
                    setBrokeCrateRemaining(MAX_DAILY_BROKE_CRATE - newUsed);
                    if (newUsed >= MAX_DAILY_BROKE_CRATE) {
                        const currentDate = new Date().setHours(0, 0, 0, 0);
                        const tomorrow = new Date(currentDate);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        setBrokeCrateCooldown(tomorrow.getTime());
                    }
                } else if (crateType === CRATE_TYPES.LEGEND) {
                    const newUsed = (profile.legendCrateUsed || 0) + 1;
                    updateData.legendCrateUsed = newUsed;
                    updateData.lastLegendCrateTime = currentTime;
                    setLegendCrateRemaining(MAX_DAILY_LEGEND_CRATE - newUsed);
                    if (newUsed >= MAX_DAILY_LEGEND_CRATE) {
                        const currentDate = new Date().setHours(0, 0, 0, 0);
                        const tomorrow = new Date(currentDate);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        setLegendCrateCooldown(tomorrow.getTime());
                    }
                }
                // Add to spin history
                const newHistory = [
                    ...profile.spinHistory || [],
                    {
                        time: currentTime,
                        prize: selectedPrize,
                        type: crateType
                    }
                ];
                // Limit history to last 10 spins
                if (newHistory.length > 10) {
                    newHistory.shift(); // Remove oldest entry
                }
                updateData.spinHistory = newHistory;
                setSpinHistory(newHistory);
                // Set success message
                if ('tokens' in selectedPrize) {
                    setMessage(`Congratulations! You found ${rewardMessage} in the crate! Your new balance: ${newTokens} Tokens.`);
                } else {
                    setMessage(`Congratulations! You found ${rewardMessage} in the crate!`);
                }
                // Update database
                try {
                    await updateProfileData(updateData);
                } catch (dbError) {
                    console.error('Database update error:', dbError);
                    setMessage(`You found ${rewardMessage}! (Changes will sync on next refresh)`);
                }
            } catch (error) {
                console.error('Error in crate opening process:', error);
                setMessage('Error opening the crate. Please refresh the page and try again.');
            } finally{
                setOpeningCrate(false);
            }
        }, 2000);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/spinner/page.tsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin w-12 h-12 border-4 border-space-cyan border-t-transparent rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/spinner/page.tsx",
                        lineNumber: 430,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/spinner/page.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/spinner/page.tsx",
            lineNumber: 427,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/spinner/page.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-6 py-12 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-96 h-96 rounded-full bg-space-purple/20 blur-3xl -top-48 -left-48 animate-pulse-slow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-80 h-80 rounded-full bg-space-indigo/20 blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-64 h-64 rounded-full bg-space-cyan/10 blur-3xl top-1/3 left-1/3 animate-pulse-slow delay-2000"
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/spinner/page.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold font-space mb-2 animate-fade-in-up",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text cosmic-gradient",
                                    children: "Cosmic Rewards"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/spinner/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cosmic-text-secondary mb-8 animate-fade-in-up",
                                style: {
                                    animationDelay: '100ms'
                                },
                                children: "Spin the wheel or open crates to earn tokens and rare collectibles!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex mb-8 justify-center space-x-2 md:space-x-4 animate-fade-in-up",
                                style: {
                                    animationDelay: '150ms'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCrateType(CRATE_TYPES.SPINNER),
                                        className: `px-4 py-3 font-bold transition-all duration-300 relative ${activeCrateType === CRATE_TYPES.SPINNER ? 'text-space-cyan bg-space-dark/80 border-b-2 border-space-cyan cosmic-shadow-sm' : 'text-cosmic-text-secondary hover:text-white'}`,
                                        children: [
                                            "Daily Spinner",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 py-0.5 px-1.5 text-xs bg-space-purple/30 rounded-full",
                                                children: spinsRemaining
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCrateType(CRATE_TYPES.BROKE),
                                        className: `px-4 py-3 font-bold transition-all duration-300 relative ${activeCrateType === CRATE_TYPES.BROKE ? 'text-space-cyan bg-space-dark/80 border-b-2 border-space-cyan cosmic-shadow-sm' : 'text-cosmic-text-secondary hover:text-white'}`,
                                        children: [
                                            "Broke Crate",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 py-0.5 px-1.5 text-xs bg-space-purple/30 rounded-full",
                                                children: brokeCrateRemaining
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 479,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCrateType(CRATE_TYPES.LEGEND),
                                        className: `px-4 py-3 font-bold transition-all duration-300 relative ${activeCrateType === CRATE_TYPES.LEGEND ? 'text-space-cyan bg-space-dark/80 border-b-2 border-space-cyan cosmic-shadow-sm' : 'text-cosmic-text-secondary hover:text-white'}`,
                                        children: [
                                            "Legend Crate",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 py-0.5 px-1.5 text-xs bg-space-purple/30 rounded-full",
                                                children: legendCrateRemaining
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            activeCrateType === CRATE_TYPES.SPINNER && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-purple/30 p-8 mb-8 animate-fade-in-up",
                                style: {
                                    animationDelay: '150ms'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-72 h-72 mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full border-4 border-space-indigo cosmic-shadow-lg overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full relative transition-transform duration-3000 ease-out",
                                                            style: {
                                                                transform: `rotate(${spinAngle}deg)`
                                                            },
                                                            children: PRIZES.map((prize, index)=>{
                                                                const angle = 360 / PRIZES.length;
                                                                const rotation = index * angle;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `absolute w-1/2 h-1/2 top-0 left-1/2 origin-bottom-left bg-gradient-to-r ${prize.color}`,
                                                                    style: {
                                                                        transform: `rotate(${rotation}deg) skew(${90 - angle}deg)`
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-6 left-1/2 -translate-x-1/2 transform -rotate-90 text-white font-bold text-sm whitespace-nowrap",
                                                                        style: {
                                                                            transform: `rotate(${-rotation - angle / 2}deg) translateX(-50%) translateY(-20px)`
                                                                        },
                                                                        children: prize.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                                        lineNumber: 516,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, prize.id, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-full bg-space-dark border-2 border-space-gold z-10 shadow-glow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 529,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-b-space-gold z-20 animate-pulse-slow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/spinner/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 space-y-6 text-center md:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold mb-2 text-space-cyan",
                                                            children: "Daily Spins"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-bold",
                                                                    children: spinsRemaining
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cosmic-text-secondary",
                                                                    children: [
                                                                        " / ",
                                                                        MAX_DAILY_SPINS,
                                                                        " remaining"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 21
                                                        }, this),
                                                        cooldownTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-cosmic-text-secondary",
                                                            children: [
                                                                "Resets in: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-space-gold",
                                                                    children: formatTimeRemaining(cooldownTime)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 36
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold mb-2 text-space-cyan",
                                                            children: "Your Balance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-3xl font-bold text-space-gold",
                                                            children: [
                                                                profile?.cosmicTokens || 0,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg",
                                                                    children: "Tokens"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: spinWheel,
                                                    disabled: spinning || spinsRemaining <= 0,
                                                    className: `btn-gradient py-3 px-8 text-lg w-full md:w-auto ${spinning || spinsRemaining <= 0 ? 'opacity-50 cursor-not-allowed' : 'cosmic-shadow-sm hover:cosmic-shadow-md'}`,
                                                    children: spinning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Spinning..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 23
                                                    }, this) : spinsRemaining <= 0 ? 'No Spins Left Today' : 'Spin the Wheel!'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/marketplace",
                                                        className: "text-space-cyan hover:text-space-pink transition-colors duration-200",
                                                        children: "Visit the Marketplace →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/spinner/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/spinner/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            activeCrateType === CRATE_TYPES.BROKE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-purple/30 p-8 mb-8 animate-fade-in-up",
                                style: {
                                    animationDelay: '150ms'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-64 h-64 mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ${openingCrate ? 'scale-110 opacity-80' : ''}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-48 h-48 border-4 border-space-cyan/80 bg-gradient-to-b from-space-dark to-space-darker rounded-lg cosmic-shadow-lg overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-space-cyan/30 to-space-indigo/20 border-b-2 border-space-cyan/50 transition-all duration-1000 origin-bottom ${openingCrate ? '-translate-y-full rotate-45' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-full h-full bg-space-indigo/10 transition-all duration-1000 ${openingCrate ? 'animate-pulse-fast' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 596,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg font-bold text-space-cyan mb-1",
                                                                    children: "BROKE CRATE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-cosmic-text-secondary",
                                                                    children: "Normal Rewards"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/spinner/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 space-y-6 text-center md:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold mb-2 text-space-cyan",
                                                            children: "Broke Crate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-cosmic-text-secondary mb-4",
                                                            children: "Standard crate with token rewards for players on a budget."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-bold",
                                                                    children: brokeCrateRemaining
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 616,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cosmic-text-secondary",
                                                                    children: [
                                                                        " / ",
                                                                        MAX_DAILY_BROKE_CRATE,
                                                                        " remaining"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 617,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 21
                                                        }, this),
                                                        brokeCrateCooldown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-cosmic-text-secondary",
                                                            children: [
                                                                "Resets in: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-space-gold",
                                                                    children: formatTimeRemaining(brokeCrateCooldown)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 36
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 621,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold mb-2 text-space-cyan",
                                                            children: "Your Balance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-3xl font-bold text-space-gold",
                                                            children: [
                                                                profile?.cosmicTokens || 0,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg",
                                                                    children: "Tokens"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 630,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 629,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openCrate(CRATE_TYPES.BROKE),
                                                    disabled: openingCrate || brokeCrateRemaining <= 0,
                                                    className: `btn-gradient py-3 px-8 text-lg w-full md:w-auto ${openingCrate || brokeCrateRemaining <= 0 ? 'opacity-50 cursor-not-allowed' : 'cosmic-shadow-sm hover:cosmic-shadow-md'}`,
                                                    children: openingCrate && activeCrateType === CRATE_TYPES.BROKE ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Opening..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 23
                                                    }, this) : brokeCrateRemaining <= 0 ? 'No Crates Left Today' : 'Open Broke Crate'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/spinner/page.tsx",
                                            lineNumber: 609,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/spinner/page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 585,
                                columnNumber: 13
                            }, this),
                            activeCrateType === CRATE_TYPES.LEGEND && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-purple/30 p-8 mb-8 animate-fade-in-up",
                                style: {
                                    animationDelay: '150ms'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-64 h-64 mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ${openingCrate ? 'scale-110 opacity-80' : ''}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-48 h-48 border-4 border-space-gold/80 bg-gradient-to-b from-space-dark to-space-darker rounded-lg cosmic-shadow-lg overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-space-gold/30 to-space-pink/20 border-b-2 border-space-gold/50 transition-all duration-1000 origin-bottom ${openingCrate ? '-translate-y-full rotate-45' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-full h-full bg-space-gold/10 transition-all duration-1000 ${openingCrate ? 'animate-pulse-fast' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg font-bold text-space-gold mb-1",
                                                                    children: "LEGEND CRATE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-cosmic-text-secondary",
                                                                    children: "Premium Rewards"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 668,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/spinner/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 space-y-6 text-center md:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold mb-2 text-space-gold",
                                                            children: "Legend Crate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-cosmic-text-secondary mb-4",
                                                            children: "Premium crate with rare rewards like avatars, team banners, and decorations."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-bold",
                                                                    children: legendCrateRemaining
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cosmic-text-secondary",
                                                                    children: [
                                                                        " / ",
                                                                        MAX_DAILY_LEGEND_CRATE,
                                                                        " remaining"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 21
                                                        }, this),
                                                        legendCrateCooldown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-cosmic-text-secondary",
                                                            children: [
                                                                "Resets in: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-space-gold",
                                                                    children: formatTimeRemaining(legendCrateCooldown)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 36
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold mb-2 text-space-gold",
                                                            children: "Your Balance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 696,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-3xl font-bold text-space-gold",
                                                            children: [
                                                                profile?.cosmicTokens || 0,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg",
                                                                    children: "Tokens"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 698,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openCrate(CRATE_TYPES.LEGEND),
                                                    disabled: openingCrate || legendCrateRemaining <= 0,
                                                    className: `btn-gradient py-3 px-8 text-lg w-full md:w-auto ${openingCrate || legendCrateRemaining <= 0 ? 'opacity-50 cursor-not-allowed' : 'cosmic-shadow-sm hover:cosmic-shadow-md'}`,
                                                    children: openingCrate && activeCrateType === CRATE_TYPES.LEGEND ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Opening..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 23
                                                    }, this) : legendCrateRemaining <= 0 ? 'No Crates Left Today' : 'Open Legend Crate'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/spinner/page.tsx",
                                            lineNumber: 677,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/spinner/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 653,
                                columnNumber: 13
                            }, this),
                            (prize || cratePrize) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-gold/50 p-6 text-center animate-bounce-in mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-space-gold mb-2",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Your new balance: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    profile?.cosmicTokens || 0,
                                                    " Tokens"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 723,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 723,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, this),
                            spinHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-purple/30 p-6 mb-8 animate-fade-in-up",
                                style: {
                                    animationDelay: '200ms'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-4 text-center",
                                        children: "Recent Rewards History"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 730,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: spinHistory.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 border border-space-indigo/30 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                'tokens' in item.prize ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg font-bold text-space-gold",
                                                                    children: [
                                                                        "+",
                                                                        item.prize.tokens,
                                                                        " Tokens"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 27
                                                                }, this) : 'reward' in item.prize ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg font-bold text-space-gold",
                                                                    children: item.prize.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg font-bold text-space-gold",
                                                                    children: "Unknown Reward"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 741,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-cosmic-text-secondary",
                                                                    children: new Date(item.time).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 743,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 735,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r ${item.prize.color}`,
                                                                    children: item.prize.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 746,
                                                                    columnNumber: 25
                                                                }, this),
                                                                item.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-2 py-0.5 rounded-full text-xs bg-space-dark",
                                                                    children: item.type === CRATE_TYPES.SPINNER ? 'Spinner' : item.type === CRATE_TYPES.BROKE ? 'Broke' : 'Legend'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/spinner/page.tsx",
                                                            lineNumber: 745,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/spinner/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 733,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 731,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this),
                            activeCrateType === CRATE_TYPES.SPINNER && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-cyan/30 p-6 animate-fade-in-up",
                                style: {
                                    animationDelay: '250ms'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-4 text-center",
                                        children: "Spinner Prizes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 766,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                        children: PRIZES.map((prize)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-3 rounded-lg bg-gradient-to-r ${prize.color} text-white text-center`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xl font-bold",
                                                        children: prize.tokens
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        children: "Cosmic Tokens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs mt-1",
                                                        children: [
                                                            Math.round(prize.probability * 100),
                                                            "% chance"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, prize.id, true, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 769,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 765,
                                columnNumber: 13
                            }, this),
                            activeCrateType === CRATE_TYPES.BROKE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-cyan/30 p-6 animate-fade-in-up",
                                style: {
                                    animationDelay: '250ms'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-4 text-center",
                                        children: "Broke Crate Prizes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                        children: BROKE_CRATE_PRIZES.map((prize)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-3 rounded-lg bg-gradient-to-r ${prize.color} text-white text-center`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xl font-bold",
                                                        children: prize.tokens
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        children: "Cosmic Tokens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 786,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs mt-1",
                                                        children: [
                                                            Math.round(prize.probability * 100),
                                                            "% chance"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, prize.id, true, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 784,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 782,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 780,
                                columnNumber: 13
                            }, this),
                            activeCrateType === CRATE_TYPES.LEGEND && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cosmic-card border border-space-cyan/30 p-6 animate-fade-in-up",
                                style: {
                                    animationDelay: '250ms'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-4 text-center",
                                        children: "Legend Crate Prizes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 796,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                                        children: LEGEND_CRATE_PRIZES.map((prize)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-3 rounded-lg bg-gradient-to-r ${prize.color} text-white text-center`,
                                                children: [
                                                    'tokens' in prize ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold",
                                                                children: prize.tokens
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm",
                                                                children: "Cosmic Tokens"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : 'reward' in prize ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold",
                                                                children: prize.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm",
                                                                children: "Special Item"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs mt-1",
                                                        children: [
                                                            Math.round(prize.probability * 100),
                                                            "% chance"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/spinner/page.tsx",
                                                        lineNumber: 811,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, prize.id, true, {
                                                fileName: "[project]/src/app/spinner/page.tsx",
                                                lineNumber: 799,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/spinner/page.tsx",
                                        lineNumber: 797,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/spinner/page.tsx",
                                lineNumber: 795,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/spinner/page.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/spinner/page.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/spinner/page.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
}
_s(SpinnerPage, "nazmyTFZ/Kl6Xs8yD5sxcn7DmlI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"]
    ];
});
_c = SpinnerPage;
var _c;
__turbopack_context__.k.register(_c, "SpinnerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_02ccb269._.js.map