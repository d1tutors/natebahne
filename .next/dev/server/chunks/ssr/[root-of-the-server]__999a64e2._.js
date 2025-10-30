module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/AppLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function AppLoader() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        const run = async ()=>{
            // Compute dynamic bezel: 10% of the smaller viewport dimension
            const minDimension = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0;
            const inset = minDimension * 0.10;
            const targetTop = inset;
            const targetLeft = inset;
            const targetWidth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "calc(100vw - 192px)";
            const targetHeight = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "calc(100vh - 192px)";
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
                await new Promise((r)=>setTimeout(r, 500));
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
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if (typeof document !== "undefined") {
                    document.dispatchEvent(new CustomEvent("app-loader-complete"));
                }
                // We'll let the Hero component handle the fade-in of content
                // The loader will be covered by the fading-in hero content
                setVisible(false);
            }
        };
        run();
        return ()=>{
            mounted = false;
        };
    }, [
        controls
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60]",
        style: {
            background: "#F5F1E6"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
}),
"[project]/src/components/LoaderGate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoaderGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppLoader.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function LoaderGate() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname !== "/") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/LoaderGate.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ScrollToTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function ScrollToTop() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleBeforeUnload = undefined;
    }, []);
    return null;
}
}),
"[project]/src/components/ColorUnderCursorLogger.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ColorUnderCursorLogger,
    "resolveEffectiveBackgroundAtPoint",
    ()=>resolveEffectiveBackgroundAtPoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const lastHexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onMove(e) {
            mousePosRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        }
        window.addEventListener("mousemove", onMove, {
            passive: true
        });
        const interval = window.setInterval(()=>{
            const { x, y } = mousePosRef.current;
            const hex = resolveEffectiveBackgroundAtPoint(x, y);
            if (hex && hex !== lastHexRef.current) {
                lastHexRef.current = hex;
                // eslint-disable-next-line no-console
                console.log("Cursor background hex:", hex);
            }
        }, 300);
        return ()=>{
            window.removeEventListener("mousemove", onMove);
            window.clearInterval(interval);
        };
    }, []);
    return null;
}
}),
"[project]/src/components/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ColorUnderCursorLogger.tsx [app-ssr] (ecmascript)");
"use client";
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
function CustomCursor() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isLightBg, setIsLightBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dot");
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const needsEvalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // On route change, reset back to dot mode to avoid being stuck in pill
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMode("dot");
    }, [
        pathname
    ]);
    // On route change, immediately recompute background brightness at current pointer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEffectiveBackgroundAtPoint"])(pos.x, pos.y);
        if (hex) setIsLightBg(isCloserToWhite(hex));
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onMove = (e)=>{
            setPos({
                x: e.clientX,
                y: e.clientY
            });
            needsEvalRef.current = true;
            if (rafRef.current == null) {
                rafRef.current = requestAnimationFrame(()=>{
                    rafRef.current = null;
                    if (!needsEvalRef.current) return;
                    needsEvalRef.current = false;
                    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorUnderCursorLogger$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEffectiveBackgroundAtPoint"])(e.clientX, e.clientY);
                    if (hex) setIsLightBg(isCloserToWhite(hex));
                });
            }
        };
        window.addEventListener("mousemove", onMove, {
            passive: true
        });
        // Attach hover listeners to elements that should trigger the "View" pill
        const targets = Array.from(document.querySelectorAll('[data-cursor-view]'));
        const enter = ()=>setMode("view");
        const leave = ()=>setMode("dot");
        targets.forEach((t)=>{
            t.addEventListener("mouseenter", enter);
            t.addEventListener("mouseleave", leave);
        });
        return ()=>{
            window.removeEventListener("mousemove", onMove);
            if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
            targets.forEach((t)=>{
                t.removeEventListener("mouseenter", enter);
                t.removeEventListener("mouseleave", leave);
            });
        };
    }, [
        pathname
    ]);
    const size = 16; // base dot side length (we'll keep it a rounded square)
    const radius = size / 2;
    const isView = mode === "view";
    // Use green on light backgrounds, tan on dark backgrounds for contrast when in dot mode
    const dotFill = isLightBg ? "#06402A" : "#F5F1E6";
    const pillBg = "#F5F1E6";
    const pillText = "#06402A";
    const pillWidth = 70;
    const pillHeight = 40;
    const duration = 500; // ms
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        style: {
            position: "fixed",
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            // Center the element on the pointer so size changes expand evenly around the cursor
            transform: "translate(-50%, -50%)",
            width: isView ? `${pillWidth}px` : `${size}px`,
            height: isView ? `${pillHeight}px` : `${size}px`,
            // A square with fully rounded corners looks like a circle at small size
            borderRadius: "9999px",
            background: isView ? pillBg : dotFill,
            color: pillText,
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
            transition: `background ${duration}ms linear, width ${duration}ms cubic-bezier(0.2,0.8,0.2,1), height ${duration}ms cubic-bezier(0.2,0.8,0.2,1), border-radius ${duration}ms cubic-bezier(0.2,0.8,0.2,1)`,
            boxShadow: "none",
            mixBlendMode: "normal"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                opacity: isView ? 1 : 0,
                transition: `opacity ${Math.max(200, duration - 200)}ms ease ${isView ? 200 : 0}ms`,
                willChange: "opacity"
            },
            children: "View"
        }, void 0, false, {
            fileName: "[project]/src/components/CustomCursor.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CustomCursor.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__999a64e2._.js.map