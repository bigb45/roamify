"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-client)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Login = ()=>{\n    _s();\n    const handleLoginSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/login\", {\n                email,\n                password\n            });\n            console.log(res.data);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"submit\",\n            onSubmit: handleLoginSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4 p-10  bg-slate-100 rounded-sm items-center shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"LOGIN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"p-1 rounded-sm border border-slate-500\",\n                        type: \"email\",\n                        placeholder: \"Email\",\n                        onChange: (e)=>{\n                            setEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"p-1 rounded-sm border border-slate-500\",\n                                type: \"password\",\n                                placeholder: \"Password\",\n                                onChange: (e)=>{\n                                    setPassword(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"forgor\",\n                                className: \"text-sm text-blue-500\",\n                                children: \"Forgot password?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"border bg-sky-500 text-white w-[100px] rounded-md px-3 py-2\",\n                        children: \"Sign up!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bgd45\\\\Desktop\\\\react\\\\Roamify app\\\\front\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"3B3pqDcVnkT+z/sPK6Z9zQsLP+s=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ2Q7QUFDMUIsTUFBTUcsUUFBUTs7SUFDWixNQUFNQyxvQkFBb0IsT0FBT0M7UUFDL0JBLEVBQUVDO1FBRUYsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTUwsNkNBQUtBLENBQUNNLEtBQUssK0JBQStCO2dCQUMxREM7Z0JBQ0FDO1lBQ0Y7WUFDQUMsUUFBUUMsSUFBSUwsSUFBSU07UUFDbEIsRUFBRSxPQUFPUixHQUFHO1lBQ1ZNLFFBQVFDLElBQUlQO1FBQ2Q7SUFDRjtJQUNBLE1BQU0sQ0FBQ0ksT0FBT0ssU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFVBQVVLLFlBQVksR0FBR2QsK0NBQVFBLENBQUM7SUFDekMscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBRWIsNEVBQUNDO1lBQUtDLFFBQU87WUFBU0MsVUFBVWhCO3NCQUU5Qiw0RUFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBVzs7Ozs7O2tDQUN2Qiw4REFBQ0s7d0JBQ0NMLFdBQVU7d0JBQ1ZNLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ3BCOzRCQUNUUyxTQUFTVCxFQUFFcUIsT0FBT0M7d0JBQ3BCOzs7Ozs7a0NBRUgsOERBQUNYO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0s7Z0NBQ0VMLFdBQVU7Z0NBQ1ZNLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLFVBQVUsQ0FBQ3BCO29DQUNUVSxZQUFZVixFQUFFcUIsT0FBT0M7Z0NBQ3ZCOzs7Ozs7MENBRUYsOERBQUNDO2dDQUFFQyxNQUFLO2dDQUFTWixXQUFVOzBDQUF3Qjs7Ozs7Ozs7Ozs7O2tDQUVuRCw4REFBQ2E7d0JBQ0NQLE1BQUs7d0JBQ0xOLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXBETWQ7S0FBQUE7QUFxRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeD9mYzYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luXCIsIHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMjRcIj5cclxuICAgICAgXHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVMb2dpblN1Ym1pdH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNCBwLTEwICBiZy1zbGF0ZS0xMDAgcm91bmRlZC1zbSBpdGVtcy1jZW50ZXIgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+TE9HSU48L2gxPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLXNtIGJvcmRlciBib3JkZXItc2xhdGUtNTAwXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cclxuICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLXNtIGJvcmRlciBib3JkZXItc2xhdGUtNTAwXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YSBocmVmPVwiZm9yZ29yXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNTAwXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYmctc2t5LTUwMCB0ZXh0LXdoaXRlIHctWzEwMHB4XSByb3VuZGVkLW1kIHB4LTMgcHktMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gdXAhXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMb2dpbiIsImhhbmRsZUxvZ2luU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwicG9zdCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldEVtYWlsIiwic2V0UGFzc3dvcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwib25TdWJtaXQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImEiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/login/page.tsx\n"));

/***/ })

});