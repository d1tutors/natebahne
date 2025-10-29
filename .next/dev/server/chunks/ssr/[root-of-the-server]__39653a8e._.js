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
            // Final 45° rotation + scale to hero rectangle size simultaneously
            await controls.start({
                rotate: 360,
                top: 96,
                left: 96,
                width: "calc(100vw - 192px)",
                height: "calc(100vh - 192px)",
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
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AppLoader.tsx",
        lineNumber: 66,
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
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [cursorColor, setCursorColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#F5F1E6"); // Default to light
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateCursor = (e)=>{
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
            setIsVisible(true);
        };
        const handleMouseLeave = ()=>setIsVisible(false);
        const handleMouseEnter = ()=>setIsVisible(true);
        // Hide default cursor
        document.body.style.cursor = "none";
        document.addEventListener("mousemove", updateCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);
        // Detect if cursor is over light or dark elements
        const checkColor = (e)=>{
            const element = document.elementFromPoint(e.clientX, e.clientY);
            if (element) {
                // Walk up the DOM tree to find a non-transparent background
                let currentElement = element;
                let foundLuminance = 200; // Default to light background
                while(currentElement){
                    const style = window.getComputedStyle(currentElement);
                    const bgColor = style.backgroundColor;
                    // Parse rgb/rgba values - handle both formats
                    const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                    if (rgbMatch && rgbMatch.length >= 4) {
                        const r = parseInt(rgbMatch[1]);
                        const g = parseInt(rgbMatch[2]);
                        const b = parseInt(rgbMatch[3]);
                        const luminance = r * 0.299 + g * 0.587 + b * 0.114;
                        // If we find a background with good opacity, use it
                        const alpha = bgColor.includes('rgba') ? parseFloat(bgColor.match(/rgba?\([\d.]+,\s*[\d.]+,\s*[\d.]+,\s*([\d.]+)/)?.[1] || '1') : 1;
                        if (alpha > 0.5) {
                            foundLuminance = luminance;
                            break;
                        }
                    }
                    currentElement = currentElement.parentElement;
                    // Safety: don't go beyond body
                    if (currentElement === document.body) break;
                }
                // If background is dark (low luminance), cursor should be light (tan)
                // If background is light (high luminance), cursor should be dark (green)
                setCursorColor(foundLuminance < 128 ? "#F5F1E6" : "#06402A");
            }
        };
        const handleMouseMoveWithColor = (e)=>{
            updateCursor(e);
            checkColor(e);
        };
        document.addEventListener("mousemove", handleMouseMoveWithColor);
        return ()=>{
            document.body.style.cursor = "";
            document.removeEventListener("mousemove", updateCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mousemove", handleMouseMoveWithColor);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed pointer-events-none z-[9999] transition-all duration-75 ease-linear",
        style: {
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: isVisible ? 1 : 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full border-2 border-solid",
            style: {
                backgroundColor: cursorColor,
                borderColor: cursorColor,
                opacity: 0.8
            }
        }, void 0, false, {
            fileName: "[project]/src/components/CustomCursor.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CustomCursor.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__39653a8e._.js.map