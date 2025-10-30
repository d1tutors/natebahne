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
"[project]/src/components/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CustomCursor() {
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        samples: 0,
        valid: 0,
        avgLum: 0
    });
    const cssBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("#ffffff");
    const frameCounter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    function parseCssColorToRgba(color) {
        const ctx = document.createElement("canvas").getContext("2d");
        if (!ctx) return null;
        ctx.fillStyle = "#000";
        ctx.fillStyle = color.trim();
        const computed = ctx.fillStyle;
        const m = computed.match(/rgba?\(([^)]+)\)/i);
        if (!m) return null;
        const parts = m[1].split(",").map((p)=>p.trim());
        const r = Number(parts[0]);
        const g = Number(parts[1]);
        const b = Number(parts[2]);
        const a = parts[3] !== undefined ? Number(parts[3]) : 1;
        if ([
            r,
            g,
            b
        ].some((v)=>Number.isNaN(v)) || Number.isNaN(a)) return null;
        return {
            r,
            g,
            b,
            a
        };
    }
    function relativeLuminance({ r, g, b }) {
        const srgb = [
            r,
            g,
            b
        ].map((v)=>v / 255).map((c)=>c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
        return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
    }
    function resolveEffectiveColorAtPoint(x, y) {
        // Use elementsFromPoint to get stack; skip the cursor via pointer-events: none
        const elements = document.elementsFromPoint(x, y);
        // Try text color first where meaningful
        for (const el of elements){
            const style = getComputedStyle(el);
            const col = style.color;
            const parsedCol = parseCssColorToRgba(col);
            if (parsedCol && el.innerText && el.innerText.trim().length > 0) {
                return parsedCol;
            }
        }
        // Then find first non-transparent background walking up each element's chain
        const seen = new Set();
        for (const el of elements){
            let cur = el;
            while(cur && !seen.has(cur)){
                seen.add(cur);
                const style = getComputedStyle(cur);
                const bg = style.backgroundColor;
                const parsedBg = parseCssColorToRgba(bg);
                if (parsedBg && parsedBg.a > 0) return parsedBg;
                cur = cur.parentElement;
            }
        }
        // Fallback to CSS variable --background, then body/html
        return parseCssColorToRgba(cssBg.current) || parseCssColorToRgba(getComputedStyle(document.body).backgroundColor) || parseCssColorToRgba(getComputedStyle(document.documentElement).backgroundColor);
    }
    function sampleAverageLuminance(x, y, radius) {
        // Temporarily hide the cursor so hit-testing can "see" underneath
        const cursorEl = cursorRef.current;
        const prevVisibility = cursorEl ? cursorEl.style.visibility : "";
        if (cursorEl) cursorEl.style.visibility = "hidden";
        // Fixed multi-ring pattern: center + inner 8 + outer 8
        const offsets = [
            [
                0,
                0
            ]
        ];
        const ringR1 = Math.max(2, Math.floor(radius * 0.5));
        const ringR2 = Math.max(ringR1 + 1, Math.floor(radius * 0.9));
        const dirs = 8;
        for(let i = 0; i < dirs; i++){
            const ang = i * 2 * Math.PI / dirs;
            offsets.push([
                Math.round(Math.cos(ang) * ringR1),
                Math.round(Math.sin(ang) * ringR1)
            ]);
            offsets.push([
                Math.round(Math.cos(ang) * ringR2),
                Math.round(Math.sin(ang) * ringR2)
            ]);
        }
        let totalLum = 0;
        let count = 0;
        let attempted = 0;
        try {
            for (const [dx, dy] of offsets){
                const px = Math.max(0, Math.min(window.innerWidth - 1, x + dx));
                const py = Math.max(0, Math.min(window.innerHeight - 1, y + dy));
                attempted += 1;
                const rgba = resolveEffectiveColorAtPoint(px, py);
                if (!rgba) continue;
                totalLum += relativeLuminance(rgba);
                count += 1;
                // Detailed per-sample logging on every 10th frame to avoid spam
                if (("TURBOPACK compile-time value", "development") !== "production" && frameCounter.current % 10 === 0) {
                    const els = document.elementsFromPoint(px, py);
                    const top = els[0];
                    const style = top ? getComputedStyle(top) : null;
                    // eslint-disable-next-line no-console
                    console.debug("[CustomCursor] sample", {
                        px,
                        py,
                        tag: top?.tagName,
                        class: top?.className,
                        bg: style?.backgroundColor,
                        color: style?.color,
                        pickedLum: relativeLuminance(rgba).toFixed(3)
                    });
                }
            }
        } finally{
            if (cursorEl) cursorEl.style.visibility = prevVisibility;
        }
        const avg = count === 0 ? 1 : totalLum / count;
        debugRef.current = {
            samples: attempted,
            valid: count,
            avgLum: avg
        };
        return avg;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Resolve CSS variable --background once; this is the app's tan background
        const rootStyle = getComputedStyle(document.documentElement);
        const bgVar = rootStyle.getPropertyValue("--background").trim();
        if (bgVar) cssBg.current = bgVar;
        const handleMove = (e)=>{
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
            if (cursorRef.current && cursorRef.current.style.opacity !== "1") {
                cursorRef.current.style.opacity = "1";
            }
            if (rafId.current == null) {
                rafId.current = requestAnimationFrame(()=>{
                    if (cursorRef.current) {
                        cursorRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;
                        const diameter = cursorRef.current.offsetWidth || 28;
                        const radius = Math.round(diameter / 2);
                        frameCounter.current += 1;
                        const avgLum = sampleAverageLuminance(mouseX.current, mouseY.current, radius);
                        const useBlack = avgLum > 0.5; // light background → black cursor
                        cursorRef.current.style.background = useBlack ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)";
                        cursorRef.current.style.boxShadow = useBlack ? "0 0 0 1px rgba(0,0,0,0.2) inset" : "0 0 0 1px rgba(255,255,255,0.4) inset";
                        // Debug output to help verify sampling and decision
                        if ("TURBOPACK compile-time truthy", 1) {
                            const dbg = debugRef.current;
                            // Log once per frame; concise payload
                            // eslint-disable-next-line no-console
                            console.log("[CustomCursor] avgLum:", dbg.avgLum.toFixed(3), "samples:", dbg.samples, "valid:", dbg.valid, "choice:", useBlack ? "black" : "white");
                        }
                    }
                    rafId.current = null;
                });
            }
        };
        document.addEventListener("pointermove", handleMove, {
            passive: true
        });
        return ()=>{
            document.removeEventListener("pointermove", handleMove);
            if (rafId.current != null) cancelAnimationFrame(rafId.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        "aria-hidden": true,
        className: "custom-cursor"
    }, void 0, false, {
        fileName: "[project]/src/components/CustomCursor.tsx",
        lineNumber: 167,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__39653a8e._.js.map