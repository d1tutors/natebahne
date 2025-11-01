(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AppLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AppLoader() {
    _s();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppLoader.useEffect": ()=>{
            let mounted = true;
            const run = {
                "AppLoader.useEffect.run": async ()=>{
                    // Check if we should skip the loader animation
                    const shouldSkip = ("TURBOPACK compile-time value", "object") !== "undefined" && sessionStorage.getItem("skip-loader") === "true";
                    if (shouldSkip) {
                        // Clear the flag
                        sessionStorage.removeItem("skip-loader");
                        // Immediately trigger completion without animation
                        if (mounted) {
                            if ("TURBOPACK compile-time truthy", 1) {
                                window.__APP_LOADER_DONE__ = true;
                            }
                            if (typeof document !== "undefined") {
                                document.dispatchEvent(new CustomEvent("app-loader-complete"));
                            }
                            setVisible(false);
                        }
                        return;
                    }
                    // Compute dynamic bezel: 10% of the smaller viewport dimension
                    const minDimension = ("TURBOPACK compile-time truthy", 1) ? Math.min(window.innerWidth, window.innerHeight) : "TURBOPACK unreachable";
                    const inset = minDimension * 0.10;
                    const targetTop = inset;
                    const targetLeft = inset;
                    const targetWidth = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth - inset * 2 : "TURBOPACK unreachable";
                    const targetHeight = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight - inset * 2 : "TURBOPACK unreachable";
                    // Rotate a minimum of 2x: each rotate 0.5s + pause 0.5s
                    let angle = 45;
                    for(let i = 0; i < 2; i++){
                        angle += 90;
                        await controls.start({
                            rotate: angle,
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut"
                            }
                        });
                        await new Promise({
                            "AppLoader.useEffect.run": (r)=>setTimeout(r, 500)
                        }["AppLoader.useEffect.run"]);
                    }
                    // Final 45° rotation + scale to hero rectangle size simultaneously (dynamic inset)
                    await controls.start({
                        rotate: 360,
                        top: targetTop,
                        left: targetLeft,
                        width: targetWidth,
                        height: targetHeight,
                        borderRadius: 40,
                        transition: {
                            duration: 0.6,
                            ease: "easeInOut",
                            rotate: {
                                duration: 0.6,
                                ease: [
                                    0.1,
                                    0.2,
                                    0.3,
                                    1
                                ]
                            },
                            width: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            height: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            top: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            left: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            // Delay corner rounding until after size expansion to reduce artifacts
                            borderRadius: {
                                duration: 0.6,
                                ease: "easeInOut"
                            }
                        }
                    });
                    // Keep the loader visible but make it non-interactive
                    if (mounted) {
                        // Notify the app that the loader sequence has completed
                        if ("TURBOPACK compile-time truthy", 1) {
                            // Mark a global flag so late listeners can detect completion
                            window.__APP_LOADER_DONE__ = true;
                        }
                        if (typeof document !== "undefined") {
                            document.dispatchEvent(new CustomEvent("app-loader-complete"));
                        }
                        // We'll let the Hero component handle the fade-in of content
                        // The loader will be covered by the fading-in hero content
                        setVisible(false);
                    }
                }
            }["AppLoader.useEffect.run"];
            run();
            return ({
                "AppLoader.useEffect": ()=>{
                    mounted = false;
                }
            })["AppLoader.useEffect"];
        }
    }["AppLoader.useEffect"], [
        controls
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60]",
        style: {
            background: "var(--tan)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: controls,
            initial: {
                rotate: 45,
                top: "calc(50vh - 48px)",
                left: "calc(50vw - 48px)",
                width: 96,
                height: 96,
                borderRadius: 16,
                opacity: 1
            },
            style: {
                position: "fixed",
                background: 'var(--dark-bg)',
                willChange: "transform, width, height, top, left, border-radius",
                backfaceVisibility: "hidden",
                transform: "translate3d(0,0,0)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AppLoader.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AppLoader.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(AppLoader, "Af/oLnIc31QfaTbSlA+0wN7LVzA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = AppLoader;
var _c;
__turbopack_context__.k.register(_c, "AppLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LoaderGate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoaderGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppLoader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LoaderGate() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname !== "/") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/LoaderGate.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_s(LoaderGate, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LoaderGate;
var _c;
__turbopack_context__.k.register(_c, "LoaderGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Force scroll to top with multiple attempts to ensure it works
    // Also triggers scroll events so components that listen to scroll will update
    const forceScrollToTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollToTop.useCallback[forceScrollToTop]": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || typeof document === "undefined") return;
            // Use multiple methods to ensure scroll happens AND trigger scroll events
            const scroll = {
                "ScrollToTop.useCallback[forceScrollToTop].scroll": ()=>{
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "auto"
                    });
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    // CRITICAL: Trigger a scroll event so components that listen to scroll updates will re-render
                    // This is needed because components read scroll position on mount, then we scroll,
                    // but they don't know to re-check unless we fire the event
                    const scrollEvent = new Event("scroll", {
                        bubbles: true
                    });
                    window.dispatchEvent(scrollEvent);
                    document.dispatchEvent(scrollEvent);
                }
            }["ScrollToTop.useCallback[forceScrollToTop].scroll"];
            // Immediate attempt
            scroll();
            // Second attempt after browser paints
            requestAnimationFrame({
                "ScrollToTop.useCallback[forceScrollToTop]": ()=>{
                    scroll();
                    // Third attempt after a short delay to catch any late updates
                    setTimeout({
                        "ScrollToTop.useCallback[forceScrollToTop]": ()=>{
                            scroll();
                            // Fourth attempt after components have measured (for complex layouts)
                            requestAnimationFrame({
                                "ScrollToTop.useCallback[forceScrollToTop]": ()=>{
                                    scroll();
                                    // Final attempt after a longer delay for components that measure on mount
                                    setTimeout({
                                        "ScrollToTop.useCallback[forceScrollToTop]": ()=>{
                                            scroll();
                                        }
                                    }["ScrollToTop.useCallback[forceScrollToTop]"], 100);
                                    // One more attempt after all async operations
                                    setTimeout({
                                        "ScrollToTop.useCallback[forceScrollToTop]": ()=>{
                                            scroll();
                                        }
                                    }["ScrollToTop.useCallback[forceScrollToTop]"], 200);
                                }
                            }["ScrollToTop.useCallback[forceScrollToTop]"]);
                        }
                    }["ScrollToTop.useCallback[forceScrollToTop]"], 50);
                }
            }["ScrollToTop.useCallback[forceScrollToTop]"]);
        }
    }["ScrollToTop.useCallback[forceScrollToTop]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Disable browser scroll restoration
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
            const handleBeforeUnload = {
                "ScrollToTop.useEffect.handleBeforeUnload": ()=>{
                    window.scrollTo(0, 0);
                }
            }["ScrollToTop.useEffect.handleBeforeUnload"];
            // Handle pages loaded from back/forward cache
            const handlePageShow = {
                "ScrollToTop.useEffect.handlePageShow": (e)=>{
                    // If page was loaded from bfcache, force scroll to top
                    if (e.persisted) {
                        forceScrollToTop();
                    }
                }
            }["ScrollToTop.useEffect.handlePageShow"];
            window.addEventListener("beforeunload", handleBeforeUnload);
            window.addEventListener("pageshow", handlePageShow);
            // Scroll to top on initial mount
            forceScrollToTop();
            return ({
                "ScrollToTop.useEffect": ()=>{
                    window.removeEventListener("beforeunload", handleBeforeUnload);
                    window.removeEventListener("pageshow", handlePageShow);
                }
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], [
        forceScrollToTop
    ]);
    // Scroll to top whenever the pathname changes (including back/forward navigation)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Force scroll to top on navigation
            forceScrollToTop();
            // Also handle popstate events (back/forward button)
            const handlePopState = {
                "ScrollToTop.useEffect.handlePopState": ()=>{
                    // Delay slightly to let the browser finish restoring
                    setTimeout({
                        "ScrollToTop.useEffect.handlePopState": ()=>{
                            forceScrollToTop();
                        }
                    }["ScrollToTop.useEffect.handlePopState"], 0);
                }
            }["ScrollToTop.useEffect.handlePopState"];
            window.addEventListener("popstate", handlePopState);
            return ({
                "ScrollToTop.useEffect": ()=>{
                    window.removeEventListener("popstate", handlePopState);
                }
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], [
        pathname,
        forceScrollToTop
    ]);
    return null;
}
_s(ScrollToTop, "M1hLPgg7p+WFr8D+UrDYVQ0BhVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ColorUnderCursorLogger.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ColorUnderCursorLogger,
    "resolveEffectiveBackgroundAtPoint",
    ()=>resolveEffectiveBackgroundAtPoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function clamp01(value) {
    if (value < 0) return 0;
    if (value > 1) return 1;
    return value;
}
function parseCssColorToRgba(cssColor) {
    if (!cssColor) return null;
    const color = cssColor.trim().toLowerCase();
    // rgb(a)
    const rgbaMatch = color.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/);
    if (rgbaMatch) {
        const r = Math.round(Number(rgbaMatch[1]));
        const g = Math.round(Number(rgbaMatch[2]));
        const b = Math.round(Number(rgbaMatch[3]));
        const a = rgbaMatch[4] !== undefined ? clamp01(Number(rgbaMatch[4])) : 1;
        return {
            r,
            g,
            b,
            a
        };
    }
    // hex #rgb, #rgba, #rrggbb, #rrggbbaa
    if (color.startsWith("#")) {
        const hex = color.slice(1);
        if (hex.length === 3 || hex.length === 4) {
            const r = parseInt(hex[0] + hex[0], 16);
            const g = parseInt(hex[1] + hex[1], 16);
            const b = parseInt(hex[2] + hex[2], 16);
            const a = hex.length === 4 ? parseInt(hex[3] + hex[3], 16) / 255 : 1;
            return {
                r,
                g,
                b,
                a
            };
        }
        if (hex.length === 6 || hex.length === 8) {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
            return {
                r,
                g,
                b,
                a
            };
        }
    }
    // fallback: common color names via computed style already resolve to rgb/rgba, so reach here rarely
    return null;
}
function blendRgba(over, under) {
    const a = over.a + under.a * (1 - over.a);
    if (a === 0) return {
        r: 0,
        g: 0,
        b: 0,
        a: 0
    };
    const r = Math.round((over.r * over.a + under.r * under.a * (1 - over.a)) / a);
    const g = Math.round((over.g * over.a + under.g * under.a * (1 - over.a)) / a);
    const b = Math.round((over.b * over.a + under.b * under.a * (1 - over.a)) / a);
    return {
        r,
        g,
        b,
        a
    };
}
function rgbaToHex(color) {
    const toHex = (v)=>v.toString(16).padStart(2, "0");
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
}
function getPixelFromCanvasAtPoint(canvas, x, y) {
    try {
        const rect = canvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return null;
        const sx = Math.min(canvas.width - 1, Math.max(0, Math.round((x - rect.left) * (canvas.width / rect.width))));
        const sy = Math.min(canvas.height - 1, Math.max(0, Math.round((y - rect.top) * (canvas.height / rect.height))));
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;
        const data = ctx.getImageData(sx, sy, 1, 1).data;
        return {
            r: data[0],
            g: data[1],
            b: data[2],
            a: data[3] / 255
        };
    } catch  {
        return null;
    }
}
function getPixelFromImageLikeAtPoint(el, x, y) {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const naturalWidth = el.naturalWidth ?? el.videoWidth;
    const naturalHeight = el.naturalHeight ?? el.videoHeight;
    if (!naturalWidth || !naturalHeight) return null;
    const sx = Math.min(naturalWidth - 1, Math.max(0, Math.round((x - rect.left) * (naturalWidth / rect.width))));
    const sy = Math.min(naturalHeight - 1, Math.max(0, Math.round((y - rect.top) * (naturalHeight / rect.height))));
    try {
        const off = document.createElement("canvas");
        off.width = 1;
        off.height = 1;
        const ctx = off.getContext("2d");
        if (!ctx) return null;
        ctx.drawImage(el, sx, sy, 1, 1, 0, 0, 1, 1);
        const data = ctx.getImageData(0, 0, 1, 1).data;
        return {
            r: data[0],
            g: data[1],
            b: data[2],
            a: data[3] / 255
        };
    } catch  {
        // Likely cross-origin taint; fall back to computed/background approach
        return null;
    }
}
function resolveEffectiveBackgroundAtPoint(x, y) {
    let el = document.elementFromPoint(x, y);
    // 1) If directly over a canvas, sample from it
    if (el instanceof HTMLCanvasElement) {
        const px = getPixelFromCanvasAtPoint(el, x, y);
        if (px) return rgbaToHex(px);
    }
    // 2) If over an image or video element, sample that pixel
    if (el instanceof HTMLImageElement || el instanceof HTMLVideoElement) {
        const px = getPixelFromImageLikeAtPoint(el, x, y);
        if (px) return rgbaToHex(px);
    }
    // 3) Fallback: blend backgrounds up the tree
    let current = el;
    let effective = {
        r: 0,
        g: 0,
        b: 0,
        a: 0
    };
    while(current && current instanceof HTMLElement){
        const style = getComputedStyle(current);
        const bg = style.backgroundColor;
        const parsed = parseCssColorToRgba(bg);
        if (parsed) {
            effective = blendRgba(parsed, effective);
            if (effective.a >= 0.999) break;
        }
        current = current.parentElement;
    }
    if (effective.a === 0) {
        effective = {
            r: 255,
            g: 255,
            b: 255,
            a: 1
        };
    }
    return rgbaToHex(effective);
}
function ColorUnderCursorLogger() {
    _s();
    const lastHexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorUnderCursorLogger.useEffect": ()=>{
            function onMove(e) {
                mousePosRef.current = {
                    x: e.clientX,
                    y: e.clientY
                };
            }
            window.addEventListener("mousemove", onMove, {
                passive: true
            });
            const interval = window.setInterval({
                "ColorUnderCursorLogger.useEffect.interval": ()=>{
                    const { x, y } = mousePosRef.current;
                    const hex = resolveEffectiveBackgroundAtPoint(x, y);
                    if (hex && hex !== lastHexRef.current) {
                        lastHexRef.current = hex;
                        // eslint-disable-next-line no-console
                        console.log("Cursor background hex:", hex);
                    }
                }
            }["ColorUnderCursorLogger.useEffect.interval"], 300);
            return ({
                "ColorUnderCursorLogger.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMove);
                    window.clearInterval(interval);
                }
            })["ColorUnderCursorLogger.useEffect"];
        }
    }["ColorUnderCursorLogger.useEffect"], []);
    return null;
}
_s(ColorUnderCursorLogger, "LqqL7gB6rHP3M6ngeg96E7uvfZA=");
_c = ColorUnderCursorLogger;
var _c;
__turbopack_context__.k.register(_c, "ColorUnderCursorLogger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ColorUnderCursorLogger.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function hexToRgb(hex) {
    const h = hex.replace(/^#/, "");
    if (h.length === 3) {
        const r = parseInt(h[0] + h[0], 16);
        const g = parseInt(h[1] + h[1], 16);
        const b = parseInt(h[2] + h[2], 16);
        return {
            r,
            g,
            b
        };
    }
    if (h.length === 6) {
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        return {
            r,
            g,
            b
        };
    }
    return null;
}
function isCloserToWhite(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return false;
    const { r, g, b } = rgb;
    // Perceived luminance approximation
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b; // 0..255
    // If brighter than mid-point, it's closer to white
    return luminance >= 128;
}
function CustomCursor() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isLightBg, setIsLightBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dot");
    const [pillText, setPillText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("View");
    const [isClicked, setIsClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Default to true to prevent flash on mobile
    const [hasMoved, setHasMoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Track if mouse has moved to hide cursor at (0,0)
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const needsEvalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Detect if device is mobile/touch-only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Check if device supports touch and doesn't have a fine pointer (mouse)
            const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
            const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
            const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
            // Only show cursor if device has fine pointer (mouse) and is not primarily touch
            setIsMobile(hasCoarsePointer || hasTouch && !hasFinePointer);
        }
    }["CustomCursor.useEffect"], []);
    // On route change, reset back to dot mode to avoid being stuck in pill
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            setMode("dot");
            setPillText("View");
        }
    }["CustomCursor.useEffect"], [
        pathname
    ]);
    // On route change, immediately recompute background brightness at current pointer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (isMobile) return;
            // Check if cursor is over navbar - if so, skip color update
            if (typeof document !== "undefined") {
                const elementAtPoint = document.elementFromPoint(pos.x, pos.y);
                const isOverNavbar = elementAtPoint?.closest('nav') !== null;
                if (!isOverNavbar) {
                    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEffectiveBackgroundAtPoint"])(pos.x, pos.y);
                    if (hex) setIsLightBg(isCloserToWhite(hex));
                }
            }
        }
    }["CustomCursor.useEffect"], [
        pathname,
        isMobile,
        pos.x,
        pos.y
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Don't attach mouse listeners on mobile devices
            if (isMobile) return;
            const onMove = {
                "CustomCursor.useEffect.onMove": (e)=>{
                    setHasMoved(true); // Mark that mouse has moved at least once
                    setPos({
                        x: e.clientX,
                        y: e.clientY
                    });
                    // Check if cursor is over navbar - if so, don't update color
                    const elementAtPoint = document.elementFromPoint(e.clientX, e.clientY);
                    const isOverNavbar = elementAtPoint?.closest('nav') !== null;
                    if (!isOverNavbar) {
                        needsEvalRef.current = true;
                        if (rafRef.current == null) {
                            rafRef.current = requestAnimationFrame({
                                "CustomCursor.useEffect.onMove": ()=>{
                                    rafRef.current = null;
                                    if (!needsEvalRef.current) return;
                                    needsEvalRef.current = false;
                                    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEffectiveBackgroundAtPoint"])(e.clientX, e.clientY);
                                    if (hex) setIsLightBg(isCloserToWhite(hex));
                                }
                            }["CustomCursor.useEffect.onMove"]);
                        }
                    }
                }
            }["CustomCursor.useEffect.onMove"];
            const onMouseDown = {
                "CustomCursor.useEffect.onMouseDown": ()=>setIsClicked(true)
            }["CustomCursor.useEffect.onMouseDown"];
            const onMouseUp = {
                "CustomCursor.useEffect.onMouseUp": ()=>setIsClicked(false)
            }["CustomCursor.useEffect.onMouseUp"];
            window.addEventListener("mousemove", onMove, {
                passive: true
            });
            window.addEventListener("mousedown", onMouseDown);
            window.addEventListener("mouseup", onMouseUp);
            // Poll background color under cursor every 250ms
            const poll = setInterval({
                "CustomCursor.useEffect.poll": ()=>{
                    // Use most recent position
                    const { x, y } = pos;
                    // Check if cursor is over navbar - if so, skip color update
                    const elementAtPoint = document.elementFromPoint(x, y);
                    const isOverNavbar = elementAtPoint?.closest('nav') !== null;
                    if (!isOverNavbar) {
                        const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEffectiveBackgroundAtPoint"])(x, y);
                        if (hex) setIsLightBg(isCloserToWhite(hex));
                    }
                }
            }["CustomCursor.useEffect.poll"], 250);
            // Attach hover listeners to elements that should trigger the pill
            const viewTargets = Array.from(document.querySelectorAll('[data-cursor-view]'));
            const contactTargets = Array.from(document.querySelectorAll('[data-cursor-contact]'));
            // Handle "View" elements
            const viewEnter = {
                "CustomCursor.useEffect.viewEnter": ()=>{
                    setMode("view");
                    setPillText("View");
                }
            }["CustomCursor.useEffect.viewEnter"];
            const viewLeave = {
                "CustomCursor.useEffect.viewLeave": ()=>{
                    setMode("dot");
                    setPillText("View");
                }
            }["CustomCursor.useEffect.viewLeave"];
            // Handle "Contact" elements
            const contactEnter = {
                "CustomCursor.useEffect.contactEnter": ()=>{
                    setMode("contact");
                    setPillText(" Contact ");
                }
            }["CustomCursor.useEffect.contactEnter"];
            const contactLeave = {
                "CustomCursor.useEffect.contactLeave": ()=>{
                    setMode("dot");
                    setPillText("View");
                }
            }["CustomCursor.useEffect.contactLeave"];
            viewTargets.forEach({
                "CustomCursor.useEffect": (t)=>{
                    t.addEventListener("mouseenter", viewEnter);
                    t.addEventListener("mouseleave", viewLeave);
                }
            }["CustomCursor.useEffect"]);
            contactTargets.forEach({
                "CustomCursor.useEffect": (t)=>{
                    t.addEventListener("mouseenter", contactEnter);
                    t.addEventListener("mouseleave", contactLeave);
                }
            }["CustomCursor.useEffect"]);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("mousedown", onMouseDown);
                    window.removeEventListener("mouseup", onMouseUp);
                    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
                    clearInterval(poll);
                    viewTargets.forEach({
                        "CustomCursor.useEffect": (t)=>{
                            t.removeEventListener("mouseenter", viewEnter);
                            t.removeEventListener("mouseleave", viewLeave);
                        }
                    }["CustomCursor.useEffect"]);
                    contactTargets.forEach({
                        "CustomCursor.useEffect": (t)=>{
                            t.removeEventListener("mouseenter", contactEnter);
                            t.removeEventListener("mouseleave", contactLeave);
                        }
                    }["CustomCursor.useEffect"]);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        pathname,
        pos,
        isMobile
    ]);
    const size = 16; // base dot side length (we'll keep it a rounded square)
    const clickedSize = 22; // size when clicked
    const radius = size / 2;
    const isView = mode === "view" || mode === "contact";
    // Use green on light backgrounds, tan on dark backgrounds for contrast when in dot mode
    const dotFill = isLightBg ? "var(--dark-green)" : "var(--tan)";
    // Pill colors match dot colors: if dot is green (light bg), pill is green with tan text; if dot is tan (dark bg), pill is tan with green text
    const pillBg = isLightBg ? "var(--dark-green)" : "var(--tan)";
    const pillTextColor = isLightBg ? "var(--tan)" : "var(--dark-green)";
    const basePillWidth = mode === "contact" ? 95 : 70; // Width for " Contact " (with spaces) or "View"
    const basePillHeight = 40;
    // When clicked, pill grows by ~15% similar to dot growth
    const clickedPillWidth = basePillWidth * 1.15;
    const clickedPillHeight = basePillHeight * 1.15;
    const pillWidth = isClicked && isView ? clickedPillWidth : basePillWidth;
    const pillHeight = isClicked && isView ? clickedPillHeight : basePillHeight;
    const duration = 500; // ms
    const currentDotSize = isClicked && !isView ? clickedSize : size;
    // Don't render cursor on mobile devices
    if (isMobile) {
        return null;
    }
    // Don't show cursor until mouse has moved (prevents showing at top-left corner)
    if (!hasMoved) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        style: {
            position: "fixed",
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            // Center the element on the pointer so size changes expand evenly around the cursor
            transform: "translate(-50%, -50%)",
            width: isView ? `${pillWidth}px` : `${currentDotSize}px`,
            height: isView ? `${pillHeight}px` : `${currentDotSize}px`,
            // A square with fully rounded corners looks like a circle at small size
            borderRadius: "9999px",
            background: isView ? pillBg : dotFill,
            color: isView ? pillTextColor : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            // Keep font-size constant; fade it with opacity to avoid layout jumps
            fontSize: "14px",
            letterSpacing: "0.2px",
            pointerEvents: "none",
            zIndex: 2147483647,
            willChange: "transform, background, width, height, border-radius",
            transition: `background ${duration}ms linear, color ${duration}ms linear, width ${duration}ms cubic-bezier(0.2,0.8,0.2,1), height ${duration}ms cubic-bezier(0.2,0.8,0.2,1), border-radius ${duration}ms cubic-bezier(0.2,0.8,0.2,1)`,
            boxShadow: "none",
            mixBlendMode: "normal"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                opacity: isView ? 1 : 0,
                transform: isView ? isClicked ? "scale(1.15)" : "scale(1)" : "scale(0.5)",
                transition: `opacity 200ms ease ${isView ? 200 : 0}ms, transform ${duration}ms cubic-bezier(0.2,0.8,0.2,1), color ${duration}ms linear`,
                willChange: "opacity, transform, color",
                color: pillTextColor
            },
            children: pillText
        }, void 0, false, {
            fileName: "[project]/src/components/CustomCursor.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CustomCursor.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(CustomCursor, "k/t9Xj0tq+1b4d6eeVlQEDcUbX4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ColorUnderCursorLogger.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function hexToRgb(hex) {
    const h = hex.replace(/^#/, "");
    if (h.length === 3) {
        const r = parseInt(h[0] + h[0], 16);
        const g = parseInt(h[1] + h[1], 16);
        const b = parseInt(h[2] + h[2], 16);
        return {
            r,
            g,
            b
        };
    }
    if (h.length === 6) {
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        return {
            r,
            g,
            b
        };
    }
    return null;
}
function isCloserToWhite(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return false;
    const { r, g, b } = rgb;
    // Perceived luminance approximation
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b; // 0..255
    // If brighter than mid-point, it's closer to white
    return luminance >= 128;
}
function NavBar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [navVisible, setNavVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLightBg, setIsLightBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topOffset, setTopOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [transitionDuration, setTransitionDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.3);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const needsEvalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastUpdateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const handleScrollToTop = (e)=>{
        e.preventDefault();
        if (pathname === "/") {
            // Already on home page, just scroll to top
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        } else {
            // Set flag to skip loader animation when navigating from another page
            if ("TURBOPACK compile-time truthy", 1) {
                sessionStorage.setItem("skip-loader", "true");
            }
            // Navigate to home page (ScrollToTop component will handle scrolling)
            router.push("/");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            const startFade = {
                "NavBar.useEffect.startFade": ()=>{
                    if (!navVisible) {
                        setNavVisible(true);
                        // Fade in with the same timing as the hero text
                        fadeIn.start({
                            opacity: 1,
                            transition: {
                                duration: 1.2,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            }
                        });
                    }
                }
            }["NavBar.useEffect.startFade"];
            // If the loader finished before this mounted, start immediately
            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.__APP_LOADER_DONE__) {
                startFade();
            }
            const handleComplete = {
                "NavBar.useEffect.handleComplete": ()=>startFade()
            }["NavBar.useEffect.handleComplete"];
            if (typeof document !== "undefined") {
                document.addEventListener("app-loader-complete", handleComplete);
            }
            return ({
                "NavBar.useEffect": ()=>{
                    if (typeof document !== "undefined") {
                        document.removeEventListener("app-loader-complete", handleComplete);
                    }
                }
            })["NavBar.useEffect"];
        }
    }["NavBar.useEffect"], [
        fadeIn,
        navVisible
    ]);
    // Calculate bezel and position navbar centered between top and bezels
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            let rafId = null;
            const updatePosition = {
                "NavBar.useEffect.updatePosition": ()=>{
                    if (("TURBOPACK compile-time value", "object") === "undefined" || !navRef.current) return;
                    const minDimension = Math.min(window.innerWidth, window.innerHeight);
                    const baseInset = minDimension * 0.10; // Same as Hero component
                    // Get navbar height
                    const navbarHeight = navRef.current.getBoundingClientRect().height;
                    // Get scroll position
                    const scrollY = window.scrollY || window.pageYOffset;
                    const now = Date.now();
                    // Track scroll history for velocity calculation
                    scrollHistory.current.push({
                        time: now,
                        y: scrollY
                    });
                    // Keep only last 150ms of scroll history
                    const historyWindow = 150; // milliseconds
                    scrollHistory.current = scrollHistory.current.filter({
                        "NavBar.useEffect.updatePosition": (entry)=>now - entry.time <= historyWindow
                    }["NavBar.useEffect.updatePosition"]);
                    // Calculate average scroll velocity over the history window
                    let scrollVelocity = 0;
                    if (scrollHistory.current.length >= 2) {
                        const oldest = scrollHistory.current[0];
                        const newest = scrollHistory.current[scrollHistory.current.length - 1];
                        const totalTime = newest.time - oldest.time;
                        const totalDistance = Math.abs(newest.y - oldest.y);
                        if (totalTime > 0) {
                            scrollVelocity = totalDistance / totalTime; // pixels per millisecond
                        }
                    }
                    // Only update transition duration if enough time has passed (throttle)
                    const timeSinceLastUpdate = now - lastUpdateTime.current;
                    if (timeSinceLastUpdate >= 16) {
                        // Calculate transition duration based on scroll speed
                        // Faster scroll (higher velocity) = shorter duration
                        // Scale: 0.1 px/ms = slow, 2+ px/ms = very fast
                        const maxVelocity = 3; // pixels per ms - adjust this threshold as needed
                        const minDuration = 0.01; // seconds - very fast scroll
                        const maxDuration = 0.5; // seconds - slow scroll
                        // Invert: higher velocity = lower duration
                        const normalizedVelocity = Math.min(scrollVelocity / maxVelocity, 1);
                        const dynamicDuration = maxDuration - normalizedVelocity * (maxDuration - minDuration);
                        setTransitionDuration(dynamicDuration);
                        lastUpdateTime.current = now;
                    }
                    // When at the top (scroll < 100px), center navbar in bezel space
                    // The midpoint between screen top (0) and bezel (baseInset) is baseInset / 2
                    // To center the navbar, position its center at that point: top = midpoint - navbarHeight/2
                    if (scrollY < 100) {
                        const bezelProgress = 1 - scrollY / 100;
                        const midpoint = baseInset / 2;
                        const centerOffset = (midpoint - navbarHeight / 2) * bezelProgress;
                        setTopOffset(centerOffset);
                    } else {
                        setTopOffset(0);
                    }
                }
            }["NavBar.useEffect.updatePosition"];
            const handleScroll = {
                "NavBar.useEffect.handleScroll": ()=>{
                    if (rafId === null) {
                        rafId = requestAnimationFrame({
                            "NavBar.useEffect.handleScroll": ()=>{
                                updatePosition();
                                rafId = null;
                            }
                        }["NavBar.useEffect.handleScroll"]);
                    }
                }
            }["NavBar.useEffect.handleScroll"];
            updatePosition();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", updatePosition, {
                passive: true
            });
            return ({
                "NavBar.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", updatePosition);
                    if (rafId !== null) {
                        cancelAnimationFrame(rafId);
                    }
                }
            })["NavBar.useEffect"];
        }
    }["NavBar.useEffect"], []);
    // Check background color at navbar position and update text color
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            const getActualBackgroundColorAtPoint = {
                "NavBar.useEffect.getActualBackgroundColorAtPoint": (x, y)=>{
                    // Get all elements at this point (not just the top one)
                    const elements = document.elementsFromPoint(x, y);
                    // Filter out the navbar and other UI overlays
                    const contentElements = elements.filter({
                        "NavBar.useEffect.getActualBackgroundColorAtPoint.contentElements": (el)=>{
                            // Skip the navbar itself
                            if (el.closest('nav')) return false;
                            // Skip fixed/sticky positioning elements that might be overlays
                            const style = getComputedStyle(el);
                            const zIndex = parseInt(style.zIndex || '0', 10);
                            // Skip very high z-index elements (likely overlays like navbar, cursor, etc)
                            if (zIndex > 40) return false;
                            // Skip elements that are transparent or have no background
                            const bg = style.backgroundColor;
                            if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') {
                                // Still include it if it might have visible content, but prefer elements with backgrounds
                                return true;
                            }
                            return true;
                        }
                    }["NavBar.useEffect.getActualBackgroundColorAtPoint.contentElements"]);
                    // Check backgrounds of content elements, starting from the topmost content element
                    // Look for solid, opaque backgrounds first
                    for (const el of contentElements){
                        if (el instanceof HTMLElement) {
                            const style = getComputedStyle(el);
                            const bg = style.backgroundColor;
                            // Parse the background color
                            const rgbMatch = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
                            if (rgbMatch) {
                                const r = parseInt(rgbMatch[1], 10);
                                const g = parseInt(rgbMatch[2], 10);
                                const b = parseInt(rgbMatch[3], 10);
                                const toHex = {
                                    "NavBar.useEffect.getActualBackgroundColorAtPoint.toHex": (n)=>n.toString(16).padStart(2, '0')
                                }["NavBar.useEffect.getActualBackgroundColorAtPoint.toHex"];
                                const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
                                // If we found a non-transparent background, use it
                                const alphaMatch = bg.match(/rgba?\([^)]+,\s*([\d.]+)\)/);
                                const alpha = alphaMatch ? parseFloat(alphaMatch[1]) : 1;
                                // Prioritize more opaque backgrounds, but accept anything above 10% opacity
                                if (alpha > 0.1) {
                                    // If it's very opaque, return immediately (this is likely the actual background)
                                    if (alpha > 0.9) {
                                        return hex;
                                    }
                                }
                            }
                            // Also check for CSS variable colors (like var(--dark-bg))
                            // Handle var(--dark-bg) which uses --dark-green (returns computed hex value)
                            if (bg.includes('var(--dark-bg)') || bg.includes('var(--dark-green)')) {
                                if ("TURBOPACK compile-time truthy", 1) {
                                    const computed = getComputedStyle(document.documentElement).getPropertyValue('--dark-green').trim();
                                    return computed || '#06402A'; // Fallback to hex if variable not found
                                }
                                //TURBOPACK unreachable
                                ;
                            }
                        }
                    }
                    // If no solid background found in filtered elements, try the original method
                    // but exclude the navbar element first
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEffectiveBackgroundAtPoint"])(x, y);
                }
            }["NavBar.useEffect.getActualBackgroundColorAtPoint"];
            const updateColor = {
                "NavBar.useEffect.updateColor": ()=>{
                    if (("TURBOPACK compile-time value", "object") === "undefined" || !navRef.current) return;
                    needsEvalRef.current = true;
                    if (rafRef.current == null) {
                        rafRef.current = requestAnimationFrame({
                            "NavBar.useEffect.updateColor": ()=>{
                                rafRef.current = null;
                                if (!needsEvalRef.current || !navRef.current) return;
                                needsEvalRef.current = false;
                                // Check background at multiple points across the navbar
                                // Check at a fixed position near the top of viewport where Hero dark green section is visible
                                const width = window.innerWidth;
                                const y = 30; // Check lower down to better detect background color
                                const points = [
                                    {
                                        x: width * 0.1,
                                        y
                                    },
                                    {
                                        x: width * 0.5,
                                        y
                                    },
                                    {
                                        x: width * 0.9,
                                        y
                                    }
                                ];
                                // Sample multiple points
                                const samples = [];
                                for (const point of points){
                                    try {
                                        const hex = getActualBackgroundColorAtPoint(point.x, point.y);
                                        if (hex) {
                                            samples.push(hex);
                                        }
                                    } catch (e) {
                                    // Ignore errors
                                    }
                                }
                                if (samples.length > 0) {
                                    // Log all samples for debugging
                                    console.log("NavBar background hex colors:", samples);
                                    // Use the center point's color as primary
                                    const primaryHex = samples.length >= 2 ? samples[1] : samples[0];
                                    console.log("NavBar using hex color:", primaryHex);
                                    setIsLightBg(isCloserToWhite(primaryHex));
                                }
                            }
                        }["NavBar.useEffect.updateColor"]);
                    }
                }
            }["NavBar.useEffect.updateColor"];
            // Update on scroll and resize
            window.addEventListener("scroll", updateColor, {
                passive: true
            });
            window.addEventListener("resize", updateColor, {
                passive: true
            });
            // Initial check
            updateColor();
            // Poll periodically to catch dynamic content changes
            const poll = setInterval(updateColor, 250);
            return ({
                "NavBar.useEffect": ()=>{
                    window.removeEventListener("scroll", updateColor);
                    window.removeEventListener("resize", updateColor);
                    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
                    clearInterval(poll);
                }
            })["NavBar.useEffect"];
        }
    }["NavBar.useEffect"], []); // Color detection uses fixed position, doesn't depend on navbar position
    const textColor = isLightBg ? "var(--dark-green)" : "var(--tan)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        ref: navRef,
        initial: {
            opacity: 0
        },
        animate: fadeIn,
        className: "fixed left-0 right-0 z-50 py-4 md:py-5",
        style: {
            pointerEvents: navVisible ? "auto" : "none",
            background: "transparent",
            top: `${topOffset}px`,
            transition: `top ${transitionDuration}s ease-out`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    onClick: handleScrollToTop,
                    className: "pl-6 md:pl-8 hover:opacity-70 transition-opacity duration-200",
                    style: {
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 500,
                        color: textColor,
                        transition: "color 300ms ease, opacity 200ms ease"
                    },
                    children: "Nate Bahne"
                }, void 0, false, {
                    fileName: "[project]/src/components/NavBar.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-8 md:gap-10 pr-6 md:pr-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/my-projects",
                            className: "hover:opacity-70 transition-opacity duration-200",
                            style: {
                                fontFamily: "var(--font-poppins)",
                                fontWeight: 500,
                                color: textColor,
                                transition: "color 300ms ease, opacity 200ms ease"
                            },
                            children: "My Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/cool-stuff",
                            className: "hover:opacity-70 transition-opacity duration-200",
                            style: {
                                fontFamily: "var(--font-poppins)",
                                fontWeight: 500,
                                color: textColor,
                                transition: "color 300ms ease, opacity 200ms ease"
                            },
                            children: "Cool Stuff"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavBar.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NavBar.tsx",
            lineNumber: 331,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NavBar.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_s(NavBar, "jV+6IDitlYSMZiZdxcPy/huaRzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_11e37ac0._.js.map