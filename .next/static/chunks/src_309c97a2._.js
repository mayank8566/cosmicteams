(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_309c97a2._.js", {

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
"[project]/src/components/NeonAvatarFrame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const NeonAvatarFrame = ({ type, size = 64, className = '', children })=>{
    // Frame configurations with colors and animations
    const frameConfig = {
        inferno: {
            primaryColor: 'text-neon-red',
            shadowClass: 'shadow-neon-red',
            animationClass: 'animate-neon-breathe'
        },
        vortex: {
            primaryColor: 'text-neon-blue',
            shadowClass: 'shadow-neon-blue',
            animationClass: 'animate-neon-rotate'
        },
        shadow: {
            primaryColor: 'text-neon-purple',
            shadowClass: 'shadow-neon-purple',
            animationClass: 'animate-neon-flicker'
        },
        toxic: {
            primaryColor: 'text-neon-green',
            shadowClass: 'shadow-neon-green',
            animationClass: 'animate-neon-color-shift'
        },
        cyber: {
            primaryColor: 'text-neon-yellow',
            shadowClass: 'shadow-neon-yellow',
            animationClass: 'animate-neon-pulse-fast'
        }
    };
    const config = frameConfig[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        style: {
            width: `${size}px`,
            height: `${size}px`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-2 rounded-full overflow-hidden z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 rounded-full ${config.primaryColor} ${config.shadowClass} ${config.animationClass}`,
                children: [
                    type === 'inferno' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "48",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 0 L55 10 L45 10 Z",
                                fill: "currentColor",
                                transform: "rotate(0 50 50)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 0 L55 10 L45 10 Z",
                                fill: "currentColor",
                                transform: "rotate(90 50 50)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 0 L55 10 L45 10 Z",
                                fill: "currentColor",
                                transform: "rotate(180 50 50)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 0 L55 10 L45 10 Z",
                                fill: "currentColor",
                                transform: "rotate(270 50 50)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    type === 'vortex' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "47",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "45",
                                stroke: "currentColor",
                                strokeWidth: "1",
                                strokeDasharray: "5 3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 5 Q80 50 50 95 Q20 50 50 5 Z",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    type === 'shadow' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "48",
                                stroke: "currentColor",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20 20 L80 80",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M80 20 L20 80",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 10 L50 90",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 50 L90 50",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    type === 'toxic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "48",
                                stroke: "currentColor",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M25 25 L35 35 M65 65 L75 75 M25 75 L35 65 M65 35 L75 25",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    type === 'cyber' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "48",
                                stroke: "currentColor",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20 30 H80 M20 50 H80 M20 70 H80",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeDasharray: "5 5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M30 20 V80 M50 20 V80 M70 20 V80",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeDasharray: "5 5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NeonAvatarFrame.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NeonAvatarFrame.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
_c = NeonAvatarFrame;
const __TURBOPACK__default__export__ = NeonAvatarFrame;
var _c;
__turbopack_context__.k.register(_c, "NeonAvatarFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/marketplace/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarketplacePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeaderWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NeonAvatarFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NeonAvatarFrame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function MarketplacePage() {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { profile, updateProfileData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [purchasing, setPurchasing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [purchaseMessage, setPurchaseMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userItems, setUserItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Premium logo effects with enhanced animations
    const LogoEffectPreview = ({ effect })=>{
        _s1();
        const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "MarketplacePage.LogoEffectPreview.useEffect": ()=>{
                if (effect === 'rotating') {
                    const interval = setInterval({
                        "MarketplacePage.LogoEffectPreview.useEffect.interval": ()=>{
                            setRotation({
                                "MarketplacePage.LogoEffectPreview.useEffect.interval": (prev)=>(prev + 1) % 360
                            }["MarketplacePage.LogoEffectPreview.useEffect.interval"]);
                        }
                    }["MarketplacePage.LogoEffectPreview.useEffect.interval"], 50);
                    return ({
                        "MarketplacePage.LogoEffectPreview.useEffect": ()=>clearInterval(interval)
                    })["MarketplacePage.LogoEffectPreview.useEffect"];
                }
            }
        }["MarketplacePage.LogoEffectPreview.useEffect"], [
            effect
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-16 h-16 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
            w-full h-full rounded-full overflow-hidden border-2 
            ${effect === 'glowing' ? 'animate-pulse-slow border-space-gold' : ''}
            ${effect === 'plasma-ring' ? 'border-space-indigo' : ''}
            ${effect === 'neon-burst' ? 'border-none' : ''}
            ${effect === 'hologram' ? 'border-none' : ''}
            ${effect === 'fire-aura' ? 'border-none' : ''}
            ${![
                        'glowing',
                        'plasma-ring',
                        'neon-burst',
                        'hologram',
                        'fire-aura'
                    ].includes(effect) ? 'border-white' : ''}
          `,
                    style: effect === 'rotating' ? {
                        transform: `rotate(${rotation}deg)`
                    } : {},
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
            w-full h-full flex items-center justify-center text-white font-bold
            ${effect === 'hologram' ? 'bg-transparent' : 'bg-gradient-to-br from-space-indigo to-space-purple'}
          `,
                        children: "CT"
                    }, void 0, false, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/marketplace/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                effect === 'particles' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: [
                        ...Array(8)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute w-1 h-1 rounded-full animate-float-up`,
                            style: {
                                backgroundColor: i % 3 === 0 ? '#F7B928' : i % 3 === 1 ? '#16BDE4' : '#614B8F',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.4}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }
                        }, i, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/marketplace/page.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this),
                effect === 'plasma-ring' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-[-8px] rounded-full overflow-hidden pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-neon-rotate rounded-full opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-[3px] bg-black rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/marketplace/page.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this),
                effect === 'neon-burst' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-[-4px] rounded-full border-2 border-neon-blue shadow-neon-blue animate-neon-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-[-8px] rounded-full border border-neon-blue opacity-40 animate-neon-breathe"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-[-12px] rounded-full border border-neon-blue opacity-20 animate-neon-breathe",
                            style: {
                                animationDelay: '0.5s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                effect === 'hologram' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full border border-cyan-400 opacity-80 animate-pulse-slow"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 grid grid-cols-10 grid-rows-10",
                            children: [
                                ...Array(10)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-cyan-400/20",
                                    style: {
                                        height: '10%',
                                        transform: `translateY(${i * 10}%)`
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/app/marketplace/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cyan-400 font-bold animate-pulse-slow",
                                children: "CT"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-[-2px] rounded-full border border-cyan-400/50 animate-neon-breathe"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                effect === 'fire-aura' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-[-5px] rounded-full overflow-hidden pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 animate-neon-breathe"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/marketplace/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-[5px] rounded-full bg-gradient-to-br from-space-indigo to-space-purple flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold",
                                        children: "CT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/marketplace/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-1 h-2 bg-yellow-400 rounded-full animate-float-up",
                                style: {
                                    left: `${30 + Math.random() * 40}%`,
                                    top: `${70 + Math.random() * 20}%`,
                                    animationDelay: `${i * 0.3}s`,
                                    animationDuration: `${1 + Math.random()}s`,
                                    opacity: 0.7
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    };
    _s1(LogoEffectPreview, "WYh/K2yNA26b4nfEdMn4vBVp/HY=");
    // Banner effects with improved animations
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
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 font-mono tracking-wider text-neon-blue animate-neon-flicker",
                                children: "TEAM BANNER"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 173,
                                columnNumber: 15
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
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-700"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 178,
                        columnNumber: 13
                    }, this),
                    effect === 'flame-wave' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-transparent to-black/50 animate-pulse-slow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this),
                    effect === 'neon-pulse' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 border border-neon-blue shadow-neon-blue animate-neon-breathe pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this);
    };
    // Background effects
    const BackgroundEffectPreview = ({ effect })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-12 relative overflow-hidden rounded-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          w-full h-full flex items-center justify-center text-xs text-white p-1
          ${effect === 'nebula' ? 'bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 opacity-80' : ''}
          ${effect === 'aurora' ? 'bg-gradient-to-r from-green-400 to-blue-500 animate-pulse-slow opacity-70' : ''}
          ${effect === 'space' ? 'bg-black cosmic-stars' : ''}
          ${effect === 'galaxy' ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-size-200 animate-gradient-x opacity-70' : ''}
        `,
                children: "BACKGROUND"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this);
    };
    // Profile effects component
    const ProfileEffectPreview = ({ effect })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-16 relative overflow-hidden rounded-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          w-full h-full flex items-center justify-center text-xs text-white p-1 relative
          ${effect === 'cosmic-stars' ? 'bg-space-dark' : ''}
          ${effect === 'aurora-waves' ? 'bg-indigo-900' : ''}
          ${effect === 'plasma-field' ? 'bg-space-dark' : ''}
          ${effect === 'neon-grid' ? 'bg-black' : ''}
          ${effect === 'galaxy-swirl' ? 'bg-space-dark' : ''}
        `,
                children: [
                    effect === 'cosmic-stars' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none cosmic-stars-bg",
                                children: Array.from({
                                    length: 12
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bg-white rounded-full animate-twinkle",
                                        style: {
                                            width: `${Math.random() * 2 + 1}px`,
                                            height: `${Math.random() * 2 + 1}px`,
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random() * 3}s`
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: "COSMIC STARS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    effect === 'aurora-waves' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[200%] h-[10px] top-[20%] bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 animate-aurora-shift"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[200%] h-[10px] top-[50%] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 animate-aurora-shift-delay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[200%] h-[10px] top-[80%] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 animate-aurora-shift-delay-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: "AURORA WAVES"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    effect === 'plasma-field' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[40px] h-[40px] rounded-full bg-red-500/50 filter blur-xl animate-plasma-float"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[30px] h-[30px] rounded-full bg-blue-500/50 filter blur-xl animate-plasma-float-delay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[35px] h-[35px] rounded-full bg-purple-500/50 filter blur-xl animate-plasma-float-delay-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: "PLASMA FIELD"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    effect === 'neon-grid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none",
                                children: [
                                    Array.from({
                                        length: 4
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute h-[1px] w-full bg-space-indigo shadow-glow animate-neon-pulse",
                                            style: {
                                                top: `${i * 33}%`,
                                                animationDelay: `${i * 0.2}s`
                                            }
                                        }, `h${i}`, false, {
                                            fileName: "[project]/src/app/marketplace/page.tsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this)),
                                    Array.from({
                                        length: 4
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute w-[1px] h-full bg-space-indigo shadow-glow animate-neon-pulse",
                                            style: {
                                                left: `${i * 33}%`,
                                                animationDelay: `${i * 0.2 + 0.1}s`
                                            }
                                        }, `v${i}`, false, {
                                            fileName: "[project]/src/app/marketplace/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: "NEON GRID"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    effect === 'galaxy-swirl' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-[-50%] bg-conic-galaxy animate-slow-spin opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-radial-fade"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: "GALAXY SWIRL"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 304,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this);
    };
    // Avatar decorations preview
    const AvatarEffectPreview = ({ effect })=>{
        // For neon frame effects
        if (effect.includes('neon-')) {
            const frameType = effect.replace('neon-', '');
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NeonAvatarFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: frameType,
                size: 64
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 317,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-16 h-16 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-space-indigo to-space-purple",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold",
                        children: "CT"
                    }, void 0, false, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/marketplace/page.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                effect === 'crown' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-3 left-1/2 transform -translate-x-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "16",
                        viewBox: "0 0 24 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 0L16 6L24 4L20 16H4L0 4L8 6L12 0Z",
                            fill: "#F7B928"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 330,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 329,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/marketplace/page.tsx",
                    lineNumber: 328,
                    columnNumber: 11
                }, this),
                effect === 'cosmic-aura' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -inset-2 rounded-full bg-gradient-to-r from-space-indigo via-space-purple to-space-cyan opacity-40 animate-pulse-slow cosmic-glow"
                }, void 0, false, {
                    fileName: "[project]/src/app/marketplace/page.tsx",
                    lineNumber: 337,
                    columnNumber: 11
                }, this),
                effect === 'stars' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1 -right-1 text-space-gold animate-twinkle",
                            children: "★"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1 -left-2 text-space-gold animate-twinkle-delay-1",
                            children: "★"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-1 right-0 text-space-gold animate-twinkle-delay-2",
                            children: "★"
                        }, void 0, false, {
                            fileName: "[project]/src/app/marketplace/page.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                effect === 'halo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-full border-2 border-space-gold bg-space-gold/20"
                }, void 0, false, {
                    fileName: "[project]/src/app/marketplace/page.tsx",
                    lineNumber: 351,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/marketplace/page.tsx",
            lineNumber: 321,
            columnNumber: 7
        }, this);
    };
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-inferno"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 368,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-vortex"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 378,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-shadow"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 388,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-toxic"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 398,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "neon-cyber"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 408,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "gradient"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 418,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "animated"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 428,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "cosmic"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 438,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEffectPreview, {
                effect: "sparkle"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 448,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "rotating"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 458,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "glowing"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 468,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "particles"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 478,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "plasma-ring"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 488,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "neon-burst"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 498,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "hologram"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 508,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoEffectPreview, {
                effect: "fire-aura"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 518,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "nebula"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 528,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "aurora"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 538,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "space"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 548,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundEffectPreview, {
                effect: "galaxy"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 558,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "gold-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 584,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "cosmic-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 594,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "silver-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 604,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "diamond-frame"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 614,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "crown"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 624,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "cosmic-aura"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 634,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "stars"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 644,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarEffectPreview, {
                effect: "halo"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 654,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "cosmic-stars"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 664,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "aurora-waves"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 674,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "plasma-field"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 684,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "neon-grid"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 694,
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
            preview: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEffectPreview, {
                effect: "galaxy-swirl"
            }, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 704,
                columnNumber: 16
            }, this)
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplacePage.useEffect": ()=>{
            if (!user) {
                router.push('/login');
                return;
            }
            const fetchUserItems = {
                "MarketplacePage.useEffect.fetchUserItems": async ()=>{
                    try {
                        setIsLoading(true);
                        if (user.email) {
                            const userDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.email);
                            const userSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userDoc);
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
                }
            }["MarketplacePage.useEffect.fetchUserItems"];
            fetchUserItems();
        }
    }["MarketplacePage.useEffect"], [
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
            const userDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'userProfiles', user.uid);
            // Create update object
            const updateData = {
                cosmicTokens: userTokens - item.price,
                purchasedItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id)
            };
            // Also add to the appropriate category array based on item type
            if (item.category === 'background') {
                updateData.backgrounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            } else if (item.category === 'banner') {
                updateData.teamBanners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            } else if (item.category === 'avatar') {
                updateData.avatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            } else if (item.category === 'profile') {
                updateData.profileDecorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(item.id);
            }
            // Update Firestore
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userDoc, updateData);
            // Update local profile state
            const profileUpdate = {
                cosmicTokens: userTokens - item.price
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 818,
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
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-80 h-80 rounded-full bg-space-indigo/20 blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 824,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-64 h-64 rounded-full bg-space-cyan/10 blur-3xl top-1/3 left-1/3 animate-pulse-slow delay-2000"
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 825,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto max-w-6xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-bold font-space mb-2 animate-fade-in-up",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "gradient-text cosmic-gradient",
                                                    children: "Marketplace"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/marketplace/page.tsx",
                                                    lineNumber: 832,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-cosmic-text-secondary animate-fade-in-up",
                                                style: {
                                                    animationDelay: '100ms'
                                                },
                                                children: "Upgrade your team with exclusive items and features"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 830,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 p-3 bg-space-blue/30 rounded-lg border border-space-blue/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-space-gold font-bold",
                                                children: profile?.cosmicTokens || 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-cosmic-text-secondary",
                                                children: "Cosmic Tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 843,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/spinner",
                                                className: "btn-gradient-secondary text-sm py-1 px-3 ml-2",
                                                children: "Get More"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 844,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 829,
                                columnNumber: 11
                            }, this),
                            purchaseMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mb-6 p-4 rounded-lg border ${purchaseMessage.type === 'success' ? 'bg-green-900/30 border-green-500/50 text-green-300' : 'bg-red-900/30 border-red-500/50 text-red-300'} animate-fade-in`,
                                children: purchaseMessage.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 852,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-x-auto space-x-4 mb-8 pb-2 animate-fade-in-up",
                                style: {
                                    animationDelay: '150ms'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('all'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "All Items"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 859,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('banner'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'banner' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Team Banners"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 865,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('logo'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'logo' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Logo Effects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 871,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('background'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'background' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Backgrounds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 877,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('boost'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'boost' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Boosts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 883,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('feature'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'feature' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Premium Features"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 889,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory('avatar'),
                                        className: `px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === 'avatar' ? 'bg-space-indigo text-white cosmic-shadow-sm' : 'bg-space-blue/30 text-cosmic-text-secondary hover:bg-space-blue/50'}`,
                                        children: "Avatars"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 895,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 858,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up",
                                style: {
                                    animationDelay: '200ms'
                                },
                                children: filteredItems.map((item)=>{
                                    const isOwned = userItems.includes(item.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cosmic-card border border-space-purple/30 cosmic-shadow-sm hover:cosmic-shadow-md transition-all group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-48 bg-space-blue/30 relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-space-indigo/10 to-space-purple/30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: item.preview ? item.preview : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-6xl opacity-70",
                                                            children: "🚀"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/marketplace/page.tsx",
                                                            lineNumber: 913,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 21
                                                    }, this),
                                                    isOwned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 right-2 bg-space-gold text-space-dark text-xs font-bold px-2 py-1 rounded-full",
                                                        children: "OWNED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 909,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold mb-1 group-hover:text-space-cyan transition-colors",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 926,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cosmic-text-secondary text-sm mb-4",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-semibold text-space-gold",
                                                                children: [
                                                                    item.price,
                                                                    " tokens"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                                lineNumber: 929,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>!isOwned && handlePurchase(item),
                                                                disabled: isOwned || purchasing,
                                                                className: `px-3 py-1 rounded-md font-medium text-sm transition ${isOwned ? 'bg-space-blue/30 text-cosmic-text-secondary cursor-default' : 'btn-gradient-secondary'}`,
                                                                children: isOwned ? 'Owned' : purchasing ? 'Processing...' : 'Purchase'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                                lineNumber: 930,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 925,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 908,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 904,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 cosmic-card border border-space-cyan/30 p-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-space-cyan mb-2",
                                        children: "More Items Coming Soon!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 946,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cosmic-text-secondary",
                                        children: [
                                            "The Cosmic Teams marketplace is being expanded with new items regularly. Earn Cosmic Tokens with the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/spinner",
                                                className: "text-space-cyan hover:underline",
                                                children: "Cosmic Spinner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/marketplace/page.tsx",
                                                lineNumber: 949,
                                                columnNumber: 43
                                            }, this),
                                            " to purchase these items!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/marketplace/page.tsx",
                                        lineNumber: 947,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/marketplace/page.tsx",
                                lineNumber: 945,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/marketplace/page.tsx",
                        lineNumber: 828,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/marketplace/page.tsx",
                lineNumber: 820,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/marketplace/page.tsx",
        lineNumber: 817,
        columnNumber: 5
    }, this);
}
_s(MarketplacePage, "/QGB/dPPZ49U6WwdFv/o8wzC5jQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"]
    ];
});
_c = MarketplacePage;
var _c;
__turbopack_context__.k.register(_c, "MarketplacePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_309c97a2._.js.map