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
            // Rotate a minimum of 3x: each rotate 0.5s + pause 0.5s
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
                        duration: 0.3,
                        ease: "easeOut"
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
                background: "#1F1F1F"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AppLoader.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AppLoader.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__de0daf68._.js.map