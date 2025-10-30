module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
function resolveEffectiveBackgroundAtPoint(x, y) {
    let el = document.elementFromPoint(x, y);
    // start with fully transparent, and blend upward until we reach an opaque color or root
    let effective = {
        r: 0,
        g: 0,
        b: 0,
        a: 0
    };
    while(el && el instanceof HTMLElement){
        const style = getComputedStyle(el);
        const bg = style.backgroundColor;
        const parsed = parseCssColorToRgba(bg);
        if (parsed) {
            effective = blendRgba(parsed, effective);
            if (effective.a >= 0.999) {
                break;
            }
        }
        el = el.parentElement;
    }
    if (effective.a === 0) {
        // Default canvas is white
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eefa2558._.js.map