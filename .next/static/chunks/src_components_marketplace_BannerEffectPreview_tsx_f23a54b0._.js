(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_marketplace_BannerEffectPreview_tsx_f23a54b0._.js", {

"[project]/src/components/marketplace/BannerEffectPreview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const BannerEffectPreview = ({ effect })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-8 relative overflow-hidden rounded-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
        w-full h-full flex items-center justify-center text-xs text-white p-1
        ${effect === 'gradient' ? 'bg-gradient-to-r from-space-purple via-space-indigo to-space-cyan' : ''}
        ${effect === 'animated' ? 'bg-gradient-to-r from-space-purple via-space-indigo to-space-cyan bg-size-200 animate-gradient-x' : ''}
        ${effect === 'cosmic' ? 'bg-space-dark cosmic-stars' : ''}
        ${effect === 'sparkle' ? 'bg-space-dark' : ''}
        ${effect === 'neon-pulse' ? 'bg-black border border-neon-blue animate-neon-breathe text-neon-blue' : ''}
        ${effect === 'cyber-grid' ? 'bg-black relative' : ''}
        ${effect === 'flame-wave' ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-size-200 animate-gradient-x' : ''}
      `,
            children: [
                effect === 'cyber-grid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 grid grid-cols-8 grid-rows-2",
                            children: Array.from({
                                length: 16
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-[0.5px] border-neon-blue/20 animate-neon-pulse",
                                    style: {
                                        animationDelay: `${i * 100}ms`
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 font-mono tracking-wider text-neon-blue animate-neon-flicker",
                            children: "TEAM BANNER"
                        }, void 0, false, {
                            fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                effect !== 'cyber-grid' && 'TEAM BANNER',
                effect === 'sparkle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
                        }, void 0, false, {
                            fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-700"
                        }, void 0, false, {
                            fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this),
                effect === 'flame-wave' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-transparent to-black/50 animate-pulse-slow"
                }, void 0, false, {
                    fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                effect === 'neon-pulse' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 border border-neon-blue shadow-neon-blue animate-neon-breathe pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/marketplace/BannerEffectPreview.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = BannerEffectPreview;
const __TURBOPACK__default__export__ = BannerEffectPreview;
var _c;
__turbopack_context__.k.register(_c, "BannerEffectPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/marketplace/BannerEffectPreview.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/marketplace/BannerEffectPreview.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_marketplace_BannerEffectPreview_tsx_f23a54b0._.js.map