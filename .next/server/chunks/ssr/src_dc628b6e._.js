module.exports = {

"[project]/src/components/HeaderWrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeaderWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
// Dynamically import the Header component with no SSR to avoid hydration issues
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/Header.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Header.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function HeaderWrapper() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
        fileName: "[project]/src/components/HeaderWrapper.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/app/marketplace/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarketplacePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ProfileContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeaderWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
// Import Firebase functions
// @ts-ignore - TypeScript doesn't correctly recognize Firebase imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
'use client';
;
;
;
;
;
;
;
;
;
;
// Lazy-load preview components for better performance
const LogoEffectPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/marketplace/LogoEffectPreview.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/marketplace/LogoEffectPreview.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 mx-auto bg-space-blue/30 rounded-full animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 18,
            columnNumber: 18
        }, this),
    ssr: false
});
const BannerEffectPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/marketplace/BannerEffectPreview.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/marketplace/BannerEffectPreview.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-8 bg-space-blue/30 rounded-md animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 23,
            columnNumber: 18
        }, this),
    ssr: false
});
const BackgroundEffectPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/marketplace/BackgroundEffectPreview.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/marketplace/BackgroundEffectPreview.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-12 bg-space-blue/30 rounded-md animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 28,
            columnNumber: 18
        }, this),
    ssr: false
});
const ProfileEffectPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/marketplace/ProfileEffectPreview.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/marketplace/ProfileEffectPreview.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-16 bg-space-blue/30 rounded-md animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 33,
            columnNumber: 18
        }, this),
    ssr: false
});
const AvatarEffectPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/marketplace/AvatarEffectPreview.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/marketplace/AvatarEffectPreview.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 mx-auto bg-space-blue/30 rounded-full animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 38,
            columnNumber: 18
        }, this),
    ssr: false
});
function MarketplacePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { profile, updateProfileData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProfile"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [purchasing, setPurchasing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [purchaseMessage, setPurchaseMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userItems, setUserItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Import NeonAvatarFrame component for use in the lazy-loaded AvatarEffectPreview 
    // The import has been moved to the separate component file
    // Marketplace items
    const marketplaceItems = [
        // New deadly-looking neon avatar frames
        {
            id: 'avatar-neon-inferno',
            name: 'Inferno Frame',
            description: 'A deadly-looking frame with blood-red neon flames that pulse and glow.',
            price: 2000,
            category: 'avatar',
            image: '/marketplace/avatar-neon-inferno.png',
            effect: 'neon-inferno',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-inferno"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 79,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-neon-vortex',
            name: 'Vortex Frame',
            description: 'A deadly-looking electric blue neon frame that constantly rotates around your avatar.',
            price: 2200,
            category: 'avatar',
            image: '/marketplace/avatar-neon-vortex.png',
            effect: 'neon-vortex',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-vortex"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 89,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-neon-shadow',
            name: 'Shadow Frame',
            description: 'A deadly-looking dark purple neon frame that flickers ominously like a shadow.',
            price: 2500,
            category: 'avatar',
            image: '/marketplace/avatar-neon-shadow.png',
            effect: 'neon-shadow',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-shadow"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 99,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-neon-toxic',
            name: 'Toxic Frame',
            description: 'A deadly-looking radioactive green neon frame that shifts colors like toxic waste.',
            price: 2800,
            category: 'avatar',
            image: '/marketplace/avatar-neon-toxic.png',
            effect: 'neon-toxic',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-toxic"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 109,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-neon-cyber',
            name: 'Cyber Frame',
            description: 'A deadly-looking cyberpunk yellow neon frame with circuit patterns that pulse rapidly.',
            price: 3000,
            category: 'avatar',
            image: '/marketplace/avatar-neon-cyber.png',
            effect: 'neon-cyber',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-cyber"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 119,
                columnNumber: 16
            }, this)
        },
        {
            id: 'banner-gradient',
            name: 'Gradient Team Banner',
            description: 'A smooth gradient banner for your team profile.',
            price: 300,
            category: 'banner',
            image: '/marketplace/banner-gradient.png',
            effect: 'gradient',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "gradient"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 129,
                columnNumber: 16
            }, this)
        },
        {
            id: 'banner-animated',
            name: 'Animated Team Banner',
            description: 'A flowing animated gradient banner that catches attention.',
            price: 500,
            category: 'banner',
            image: '/marketplace/banner-animated.png',
            effect: 'animated',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "animated"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 139,
                columnNumber: 16
            }, this)
        },
        {
            id: 'banner-cosmic',
            name: 'Cosmic Team Banner',
            description: 'A deep space banner with subtle star effects.',
            price: 700,
            category: 'banner',
            image: '/marketplace/banner-cosmic.png',
            effect: 'cosmic',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "cosmic"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 149,
                columnNumber: 16
            }, this)
        },
        {
            id: 'banner-sparkle',
            name: 'Sparkle Team Banner',
            description: 'A banner with twinkling star effects.',
            price: 800,
            category: 'banner',
            image: '/marketplace/banner-sparkle.png',
            effect: 'sparkle',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "sparkle"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 159,
                columnNumber: 16
            }, this)
        },
        {
            id: 'logo-rotating',
            name: 'Rotating Logo Effect',
            description: 'Make your team logo slowly rotate for a dynamic look.',
            price: 1000,
            category: 'logo',
            image: '/marketplace/logo-rotating.png',
            effect: 'rotating',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "rotating"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 169,
                columnNumber: 16
            }, this)
        },
        {
            id: 'logo-glowing',
            name: 'Glowing Logo Effect',
            description: 'Add a pulsing glow effect to your team logo.',
            price: 1200,
            category: 'logo',
            image: '/marketplace/logo-glowing.png',
            effect: 'glowing',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "glowing"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 179,
                columnNumber: 16
            }, this)
        },
        {
            id: 'logo-particles',
            name: 'Particle Logo Effect',
            description: 'Small particles float up around your team logo.',
            price: 1500,
            category: 'logo',
            image: '/marketplace/logo-particles.png',
            effect: 'particles',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "particles"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 189,
                columnNumber: 16
            }, this)
        },
        {
            id: 'logo-plasma-ring',
            name: 'Plasma Ring Logo Effect',
            description: 'A plasma ring effect that surrounds your team logo.',
            price: 1800,
            category: 'logo',
            image: '/marketplace/logo-plasma-ring.png',
            effect: 'plasma-ring',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "plasma-ring"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 199,
                columnNumber: 16
            }, this)
        },
        {
            id: 'logo-neon-burst',
            name: 'Neon Burst Logo Effect',
            description: 'A neon burst effect that surrounds your team logo.',
            price: 2000,
            category: 'logo',
            image: '/marketplace/logo-neon-burst.png',
            effect: 'neon-burst',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "neon-burst"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 209,
                columnNumber: 16
            }, this)
        },
        {
            id: 'logo-hologram',
            name: 'Hologram Logo Effect',
            description: 'A hologram effect that makes your team logo look futuristic.',
            price: 2200,
            category: 'logo',
            image: '/marketplace/logo-hologram.png',
            effect: 'hologram',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "hologram"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 219,
                columnNumber: 16
            }, this)
        },
        {
            id: 'logo-fire-aura',
            name: 'Fire Aura Logo Effect',
            description: 'A fire aura effect that surrounds your team logo.',
            price: 2500,
            category: 'logo',
            image: '/marketplace/logo-fire-aura.png',
            effect: 'fire-aura',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "fire-aura"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 229,
                columnNumber: 16
            }, this)
        },
        {
            id: 'bg-nebula',
            name: 'Nebula Background',
            description: 'A cosmic nebula background for your team page.',
            price: 800,
            category: 'background',
            image: '/marketplace/bg-nebula.png',
            effect: 'nebula',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "nebula"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 239,
                columnNumber: 16
            }, this)
        },
        {
            id: 'bg-aurora',
            name: 'Aurora Background',
            description: 'Northern lights inspired animated background.',
            price: 1000,
            category: 'background',
            image: '/marketplace/bg-aurora.png',
            effect: 'aurora',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "aurora"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 249,
                columnNumber: 16
            }, this)
        },
        {
            id: 'bg-space',
            name: 'Deep Space Background',
            description: 'A dark space background with subtle stars.',
            price: 1200,
            category: 'background',
            image: '/marketplace/bg-space.png',
            effect: 'space',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "space"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 259,
                columnNumber: 16
            }, this)
        },
        {
            id: 'bg-galaxy',
            name: 'Galaxy Background',
            description: 'A colorful galaxy background with animation.',
            price: 1500,
            category: 'background',
            image: '/marketplace/bg-galaxy.png',
            effect: 'galaxy',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "galaxy"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 269,
                columnNumber: 16
            }, this)
        },
        {
            id: 'boost-daily',
            name: 'Daily Points Boost (7 days)',
            description: 'Earn 10% more team points for 7 days.',
            price: 1000,
            category: 'boost',
            image: '/marketplace/boost-daily.png'
        },
        {
            id: 'feature-analytics',
            name: 'Team Analytics Pro',
            description: 'Unlock advanced team performance analytics.',
            price: 2000,
            category: 'feature',
            image: '/marketplace/feature-analytics.png'
        },
        {
            id: 'avatar-gold-frame',
            name: 'Gold Frame Avatar Decoration',
            description: 'A luxurious gold frame for your team avatar.',
            price: 800,
            category: 'avatar',
            image: '/marketplace/avatar-gold-frame.png',
            effect: 'gold-frame',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "gold-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 295,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-cosmic-frame',
            name: 'Cosmic Spinner Frame',
            description: 'A rotating cosmic frame for your avatar that draws attention.',
            price: 1500,
            category: 'avatar',
            image: '/marketplace/avatar-cosmic-frame.png',
            effect: 'cosmic-frame',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "cosmic-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 305,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-silver-frame',
            name: 'Silver Elite Frame',
            description: 'A sleek silver frame for your team avatar.',
            price: 1000,
            category: 'avatar',
            image: '/marketplace/avatar-silver-frame.png',
            effect: 'silver-frame',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "silver-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 315,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-diamond-frame',
            name: 'Rainbow Diamond Frame',
            description: 'A premium diamond frame with color-shifting effects.',
            price: 2000,
            category: 'avatar',
            image: '/marketplace/avatar-diamond-frame.png',
            effect: 'diamond-frame',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "diamond-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 325,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-crown',
            name: 'Crown Avatar Decoration',
            description: 'A royal crown for your team avatar.',
            price: 1000,
            category: 'avatar',
            image: '/marketplace/avatar-crown.png',
            effect: 'crown',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "crown"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 335,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-cosmic-aura',
            name: 'Cosmic Aura Avatar Decoration',
            description: 'A cosmic aura effect for your team avatar.',
            price: 1200,
            category: 'avatar',
            image: '/marketplace/avatar-cosmic-aura.png',
            effect: 'cosmic-aura',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "cosmic-aura"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 345,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-stars',
            name: 'Stars Avatar Decoration',
            description: 'Twinkling stars around your team avatar.',
            price: 1500,
            category: 'avatar',
            image: '/marketplace/avatar-stars.png',
            effect: 'stars',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "stars"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 355,
                columnNumber: 16
            }, this)
        },
        {
            id: 'avatar-halo',
            name: 'Halo Avatar Decoration',
            description: 'A shining halo for your team avatar.',
            price: 1800,
            category: 'avatar',
            image: '/marketplace/avatar-halo.png',
            effect: 'halo',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "halo"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 365,
                columnNumber: 16
            }, this)
        },
        {
            id: 'profile-cosmic-stars',
            name: 'Cosmic Stars Background',
            description: 'Adds a beautiful starry cosmic background to your profile page.',
            price: 1200,
            category: 'background',
            image: '/marketplace/profile-cosmic-stars.png',
            effect: 'cosmic-stars',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "cosmic-stars"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 375,
                columnNumber: 16
            }, this)
        },
        {
            id: 'profile-aurora-waves',
            name: 'Aurora Waves Background',
            description: 'Adds flowing aurora wave effects to your profile page background.',
            price: 1500,
            category: 'background',
            image: '/marketplace/profile-aurora-waves.png',
            effect: 'aurora-waves',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "aurora-waves"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 385,
                columnNumber: 16
            }, this)
        },
        {
            id: 'profile-plasma-field',
            name: 'Plasma Field Background',
            description: 'Adds a dynamic plasma field effect to your profile page.',
            price: 1800,
            category: 'background',
            image: '/marketplace/profile-plasma-field.png',
            effect: 'plasma-field',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "plasma-field"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 395,
                columnNumber: 16
            }, this)
        },
        {
            id: 'profile-neon-grid',
            name: 'Neon Grid Background',
            description: 'Adds a cyberpunk-inspired neon grid effect to your profile.',
            price: 2000,
            category: 'background',
            image: '/marketplace/profile-neon-grid.png',
            effect: 'neon-grid',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "neon-grid"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 405,
                columnNumber: 16
            }, this)
        },
        {
            id: 'profile-galaxy-swirl',
            name: 'Galaxy Swirl Background',
            description: 'Adds a mesmerizing galaxy swirl effect to your profile background.',
            price: 2200,
            category: 'background',
            image: '/marketplace/profile-galaxy-swirl.png',
            effect: 'galaxy-swirl',
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "galaxy-swirl"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 415,
                columnNumber: 16
            }, this)
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) {
            router.push('/login');
            return;
        }
        const fetchUserItems = async ()=>{
            try {
                setIsLoading(true);
                if (user.email) {
                    const userDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', user.email);
                    const userSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(userDoc);
                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        setUserItems(userData.purchasedItems || []);
                    }
                }
            } catch (error) {
                console.error('Error fetching user items:', error);
            } finally{
                setIsLoading(false);
            }
        };
        fetchUserItems();
    }, [
        user,
        router
    ]);
    const filteredItems = activeCategory === 'all' ? marketplaceItems : marketplaceItems.filter((item)=>item.category === activeCategory);
    const handlePurchase = async (item)=>{
        if (!user || !profile) {
            setPurchaseMessage({
                type: 'error',
                text: 'You must be logged in to make purchases.'
            });
            return;
        }
        if (userItems.includes(item.id)) {
            setPurchaseMessage({
                type: 'error',
                text: 'You already own this item.'
            });
            return;
        }
        const userTokens = profile.cosmicTokens || 0;
        if (userTokens < item.price) {
            setPurchaseMessage({
                type: 'error',
                text: `Not enough tokens. You need ${item.price - userTokens} more tokens.`
            });
            return;
        }
        try {
            setPurchasing(true);
            setPurchaseMessage(null);
            // Update user's token balance and purchased items
            const userDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'userProfiles', user.uid);
            // Create update object
            const updateData = {
                cosmicTokens: userTokens - item.price,
                purchasedItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id)
            };
            // Also add to the appropriate category array based on item type
            if (item.category === 'background') {
                updateData.backgrounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            } else if (item.category === 'banner') {
                updateData.teamBanners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            } else if (item.category === 'avatar') {
                updateData.avatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            } else if (item.category === 'profile') {
                updateData.profileDecorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            }
            // Update Firestore
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(userDoc, updateData);
            // Update local profile state
            const profileUpdate = {
                cosmicTokens: userTokens - item.price,
                purchasedItems: [
                    ...profile.purchasedItems || [],
                    item.id
                ]
            };
            // Update local arrays in profile state
            if (item.category === 'background') {
                profileUpdate.backgrounds = [
                    ...profile.backgrounds || [],
                    item.id
                ];
            } else if (item.category === 'banner') {
                profileUpdate.teamBanners = [
                    ...profile.teamBanners || [],
                    item.id
                ];
            } else if (item.category === 'avatar') {
                profileUpdate.avatars = [
                    ...profile.avatars || [],
                    item.id
                ];
            } else if (item.category === 'profile') {
                profileUpdate.profileDecorations = [
                    ...profile.profileDecorations || [],
                    item.id
                ];
            }
            // Update profile context
            await updateProfileData(profileUpdate);
            // Update local items list
            setUserItems((prev)=>[
                    ...prev,
                    item.id
                ]);
            setPurchaseMessage({
                type: 'success',
                text: `Successfully purchased ${item.name}!`
            });
        } catch (error) {
            console.error('Error purchasing item:', error);
            setPurchaseMessage({
                type: 'error',
                text: 'Error processing your purchase. Please try again.'
            });
        } finally{
            setPurchasing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-6 py-12 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-96 h-96 rounded-full bg-space-purple/20 blur-3xl -top-48 -left-48 animate-pulse-slow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-80 h-80 rounded-full bg-space-indigo/20 blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-64 h-64 rounded-full bg-space-cyan/10 blur-3xl top-1/3 left-1/3 animate-pulse-slow delay-2000"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 537,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto max-w-6xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-bold font-space mb-2 animate-fade-in-up",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "gradient-text cosmic-gradient",
                                                    children: "Marketplace"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/marketplace/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-cosmic-text-secondary animate-fade-in-up",
                                                style: {
                                                    animationDelay: '100ms'
                                                },
                                                children: "Upgrade your team with exclusive items and features"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 p-3 bg-space-blue/30 rounded-lg border border-space-blue/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-space-gold font-bold",
                                                children: profile?.cosmicTokens || 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-cosmic-text-secondary",
                                                children: "Cosmic Tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/spinner",
                                                className: "btn-gradient-secondary text-sm py-1 px-3 ml-2",
                                                children: "Get More"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 541,
                                columnNumber: 11
                            }, this),
                            purchaseMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mb-6 p-4 rounded-lg border ${purchaseMessage.type === 'success' ? 'bg-green-900/30 border-green-500/50 text-green-300' : 'bg-red-900/30 border-red-500/50 text-red-300'} animate-fade-in`,
                                children: purchaseMessage.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 564,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-x-auto space-x-4 mb-8 pb-2 animate-fade-in-up",
                                style: {
                                    animationDelay: '150ms'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('all'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "All Items"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('banner'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'banner' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Team Banners"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('logo'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'logo' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Logo Effects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('background'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'background' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Backgrounds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('boost'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'boost' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Boosts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 595,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('feature'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'feature' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Premium Features"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('avatar'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'avatar' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Avatars"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up",
                                style: {
                                    animationDelay: '200ms'
                                },
                                children: filteredItems.map((item)=>{
                                    const isOwned = userItems.includes(item.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cosmic-card border border-space-purple/30 cosmic-shadow-sm hover:cosmic-shadow-md transition-all group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-48 bg-space-blue/30 relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-space-indigo/10 to-space-purple/30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: item.preview ? item.preview : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-6xl opacity-70",
                                                            children: "🚀"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/marketplace/page.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 21
                                                    }, this),
                                                    isOwned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 right-2 bg-space-gold text-space-dark text-xs font-bold px-2 py-1 rounded-full",
                                                        children: "OWNED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold mb-1 group-hover:text-space-cyan transition-colors",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cosmic-text-secondary text-sm mb-4",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-semibold text-space-gold",
                                                                children: [
                                                                    item.price,
                                                                    " tokens"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>!isOwned && handlePurchase(item),
                                                                disabled: isOwned || purchasing,
                                                                className: `px-3 py-1 rounded-md font-medium text-sm transition ${isOwned ? 'bg-space-blue/30 text-cosmic-text-secondary cursor-default' : 'btn-gradient-secondary'}`,
                                                                children: isOwned ? 'Owned' : purchasing ? 'Processing...' : 'Purchase'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                                lineNumber: 642,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 637,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 cosmic-card border border-space-cyan/30 p-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-space-cyan mb-2",
                                        children: "More Items Coming Soon!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 658,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cosmic-text-secondary",
                                        children: [
                                            "The Cosmic Teams marketplace is being expanded with new items regularly. Earn Cosmic Tokens with the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/spinner",
                                                className: "text-space-cyan hover:underline",
                                                children: "Cosmic Spinner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 661,
                                                columnNumber: 43
                                            }, this),
                                            " to purchase these items!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 659,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/marketplace/page.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_dc628b6e._.js.map