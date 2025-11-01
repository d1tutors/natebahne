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
            background: "#F5F1E6"
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
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AppLoader.tsx",
        lineNumber: 73,
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
"[project]/src/components/OverscrollGradientBG.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverscrollGradientBG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Utility to lerp between two hex colors (no alpha)
function lerpColor(a, b, t) {
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, "");
        if (hex.length === 3) hex = hex.split("").map((x)=>x + x).join("");
        const num = parseInt(hex, 16);
        return [
            num >> 16 & 0xff,
            num >> 8 & 0xff,
            num & 0xff
        ];
    }
    function rgbToHex(rgb) {
        return "#" + rgb.map((v)=>v.toString(16).padStart(2, "0")).join("");
    }
    const rgbA = hexToRgb(a);
    const rgbB = hexToRgb(b);
    const mix = [
        0,
        1,
        2
    ].map((i)=>Math.round(rgbA[i] + (rgbB[i] - rgbA[i]) * t));
    return rgbToHex(mix);
}
const TAN = "#F5F1E6";
const GREEN = "#06402A";
function OverscrollGradientBG() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OverscrollGradientBG.useEffect": ()=>{
            let ticking = false;
            const handle = {
                "OverscrollGradientBG.useEffect.handle": ()=>{
                    const scrollY = window.scrollY || window.pageYOffset;
                    const h = document.documentElement.scrollHeight - window.innerHeight;
                    let t = h > 0 ? Math.max(0, Math.min(1, scrollY / h)) : 0;
                    // Smooth out with ease-in-out
                    t = 0.5 - 0.5 * Math.cos(Math.PI * t);
                    const col = lerpColor(TAN, GREEN, t);
                    document.documentElement.style.background = col;
                }
            }["OverscrollGradientBG.useEffect.handle"];
            const onScroll = {
                "OverscrollGradientBG.useEffect.onScroll": ()=>{
                    if (!ticking) {
                        ticking = true;
                        requestAnimationFrame({
                            "OverscrollGradientBG.useEffect.onScroll": ()=>{
                                handle();
                                ticking = false;
                            }
                        }["OverscrollGradientBG.useEffect.onScroll"]);
                    }
                }
            }["OverscrollGradientBG.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            // Initial update - but delay slightly to ensure scroll position is correct
            requestAnimationFrame({
                "OverscrollGradientBG.useEffect": ()=>{
                    handle();
                    // Also update after a short delay to catch any late scroll corrections
                    setTimeout({
                        "OverscrollGradientBG.useEffect": ()=>{
                            handle();
                        }
                    }["OverscrollGradientBG.useEffect"], 100);
                    // One more update after longer delay
                    setTimeout({
                        "OverscrollGradientBG.useEffect": ()=>{
                            handle();
                        }
                    }["OverscrollGradientBG.useEffect"], 250);
                }
            }["OverscrollGradientBG.useEffect"]);
            return ({
                "OverscrollGradientBG.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    document.documentElement.style.background = TAN;
                }
            })["OverscrollGradientBG.useEffect"];
        }
    }["OverscrollGradientBG.useEffect"], [
        pathname
    ]);
    return null;
}
_s(OverscrollGradientBG, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = OverscrollGradientBG;
var _c;
__turbopack_context__.k.register(_c, "OverscrollGradientBG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_cc519b99._.js.map