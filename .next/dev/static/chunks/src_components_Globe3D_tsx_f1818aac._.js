(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Globe3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Globe3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Globe3D() {
    _s();
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe3D.useEffect": ()=>{
            // Get container dimensions
            const updateDimensions = {
                "Globe3D.useEffect.updateDimensions": ()=>{
                    if (containerRef.current) {
                        setDimensions({
                            width: containerRef.current.offsetWidth,
                            height: containerRef.current.offsetHeight
                        });
                    }
                }
            }["Globe3D.useEffect.updateDimensions"];
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
            return ({
                "Globe3D.useEffect": ()=>window.removeEventListener('resize', updateDimensions)
            })["Globe3D.useEffect"];
        }
    }["Globe3D.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe3D.useEffect": ()=>{
            if (globeRef.current) {
                // Auto-rotate the globe
                const controls = globeRef.current.controls();
                controls.autoRotate = true;
                controls.autoRotateSpeed = 0.8;
                controls.enableZoom = false;
                controls.enablePan = false;
                // Set initial camera position for better view
                globeRef.current.pointOfView({
                    lat: 20,
                    lng: 0,
                    altitude: 2.5
                });
            }
        }
    }["Globe3D.useEffect"], [
        dimensions
    ]);
    // Data center locations
    const dataCenters = [
        {
            lat: -33.8688,
            lng: 151.2093,
            name: 'Avustralya',
            size: 0.8
        },
        {
            lat: -23.5505,
            lng: -46.6333,
            name: 'Brezilya',
            size: 0.8
        },
        {
            lat: 48.8566,
            lng: 2.3522,
            name: 'Fransa',
            size: 1
        },
        {
            lat: 52.5200,
            lng: 13.4050,
            name: 'Almanya',
            size: 1
        },
        {
            lat: 19.0760,
            lng: 72.8777,
            name: 'Hindistan',
            size: 0.9
        },
        {
            lat: 35.6762,
            lng: 139.6503,
            name: 'Japonya',
            size: 1
        },
        {
            lat: 51.5074,
            lng: -0.1278,
            name: 'İngiltere',
            size: 1
        },
        {
            lat: 40.7128,
            lng: -74.0060,
            name: 'ABD Doğu',
            size: 1.2
        },
        {
            lat: 37.7749,
            lng: -122.4194,
            name: 'ABD Batı',
            size: 1.2
        },
        {
            lat: 1.3521,
            lng: 103.8198,
            name: 'Singapur',
            size: 0.9
        },
        {
            lat: 25.2048,
            lng: 55.2708,
            name: 'BAE',
            size: 0.8
        },
        {
            lat: 41.0082,
            lng: 28.9784,
            name: 'Türkiye',
            size: 1
        }
    ];
    const pointsData = dataCenters.map((dc)=>({
            lat: dc.lat,
            lng: dc.lng,
            size: dc.size,
            color: '#06b6d4',
            name: dc.name
        }));
    // Arc data for connections
    const arcsData = [
        {
            startLat: 41.0082,
            startLng: 28.9784,
            endLat: 52.5200,
            endLng: 13.4050
        },
        {
            startLat: 41.0082,
            startLng: 28.9784,
            endLat: 40.7128,
            endLng: -74.0060
        },
        {
            startLat: 52.5200,
            startLng: 13.4050,
            endLat: 40.7128,
            endLng: -74.0060
        },
        {
            startLat: 40.7128,
            startLng: -74.0060,
            endLat: 37.7749,
            endLng: -122.4194
        },
        {
            startLat: 37.7749,
            startLng: -122.4194,
            endLat: 35.6762,
            endLng: 139.6503
        },
        {
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 1.3521,
            endLng: 103.8198
        },
        {
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -33.8688,
            endLng: 151.2093
        }
    ];
    if (dimensions.width === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/Globe3D.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Globe3D.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: globeRef,
            width: dimensions.width,
            height: dimensions.height,
            globeImageUrl: "//unpkg.com/three-globe/example/img/earth-dark.jpg",
            backgroundColor: "rgba(0,0,0,0)",
            showAtmosphere: true,
            atmosphereColor: "#06b6d4",
            atmosphereAltitude: 0.2,
            // Points (data centers)
            pointsData: pointsData,
            pointColor: "color",
            pointRadius: "size",
            pointAltitude: 0.01,
            pointResolution: 12,
            pointLabel: "name",
            // Rings animation
            ringsData: pointsData,
            ringColor: ()=>'rgba(6, 182, 212, 0.6)',
            ringMaxRadius: 3,
            ringPropagationSpeed: 2,
            ringRepeatPeriod: 1500,
            // Arcs (connections)
            arcsData: arcsData,
            arcColor: ()=>[
                    'rgba(6, 182, 212, 0.3)',
                    'rgba(20, 184, 166, 0.3)'
                ],
            arcDashLength: 0.4,
            arcDashGap: 0.2,
            arcDashAnimateTime: 2000,
            arcStroke: 0.5,
            // Renderer config
            rendererConfig: {
                antialias: true,
                alpha: true
            }
        }, void 0, false, {
            fileName: "[project]/src/components/Globe3D.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Globe3D.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(Globe3D, "0qGTw/nIppUKMw2lK5jbMUzcILo=");
_c = Globe3D;
var _c;
__turbopack_context__.k.register(_c, "Globe3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Globe3D.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Globe3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_Globe3D_tsx_f1818aac._.js.map