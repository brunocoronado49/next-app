"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_brunocoronado_Developer_Web_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_brunocoronado_Developer_Web_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_brunocoronado_Developer_Web_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/container */ \"./components/container.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar User = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var id = router.query.id;\n    console.log(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-header text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: props.user.avatar,\n                                alt: props.user.first_name,\n                                style: {\n                                    borderRadius: \"25%\",\n                                    width: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        props.user.first_name,\n                                        \" \",\n                                        props.user.last_name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: props.user.email\n                                }, void 0, false, {\n                                    fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/brunocoronado/Developer/Web/next-app/pages/user/[id].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = User;\nUser.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_brunocoronado_Developer_Web_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, resJSON;\n        return _Users_brunocoronado_Developer_Web_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://reqres.in/api/user/\".concat(ctx.query.id));\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    resJSON = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        user: resJSON.data\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBb0M7QUFDRztBQUNXO0FBRWxELElBQU1HLElBQUksR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3RCLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUksR0FBS0ksTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBQ1ZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxFQUFFLENBQUM7SUFFZixxQkFDRSw4REFBQ0osNkRBQVM7a0JBQ1IsNEVBQUNRLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEtBQUs7c0JBQ2xCLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzBCQUNuQyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE1BQU07O3NDQUNuQiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHlCQUF5QjtzQ0FDdEMsNEVBQUNDLEtBQUc7Z0NBQ0ZDLEdBQUcsRUFBRVQsS0FBSyxDQUFDVSxJQUFJLENBQUNDLE1BQU07Z0NBQ3RCQyxHQUFHLEVBQUVaLEtBQUssQ0FBQ1UsSUFBSSxDQUFDRyxVQUFVO2dDQUMxQkMsS0FBSyxFQUFFO29DQUFFQyxZQUFZLEVBQUUsS0FBSztvQ0FBRUMsS0FBSyxFQUFFLEtBQUs7aUNBQUU7Ozs7O3FDQUM1Qzs7Ozs7aUNBQ0U7c0NBQ04sOERBQUNWLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxXQUFXOzs4Q0FDeEIsOERBQUNVLElBQUU7O3dDQUFFakIsS0FBSyxDQUFDVSxJQUFJLENBQUNHLFVBQVU7d0NBQUMsR0FBQzt3Q0FBQ2IsS0FBSyxDQUFDVSxJQUFJLENBQUNRLFNBQVM7Ozs7Ozt5Q0FBTTs4Q0FDdkQsOERBQUNDLEdBQUM7OENBQUVuQixLQUFLLENBQUNVLElBQUksQ0FBQ1UsS0FBSzs7Ozs7eUNBQUs7Ozs7OztpQ0FDckI7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNJLENBQ1o7Q0FDSDtHQTFCS3JCLElBQUk7O1FBQ09GLGtEQUFTOzs7QUFEcEJFLEtBQUFBLElBQUk7QUE0QlZBLElBQUksQ0FBQ3NCLGVBQWU7ZUFBRyw0UEFBTUMsR0FBRyxFQUFJO1lBQzVCQyxHQUFHLEVBQ0hDLE9BQU87Ozs7OzJCQURLNUIsdURBQUssQ0FBQyw2QkFBNEIsQ0FBZSxPQUFiMEIsR0FBRyxDQUFDbkIsS0FBSyxDQUFDRCxFQUFFLENBQUUsQ0FBQzs7b0JBQS9EcUIsR0FBRyxZQUE0RDs7MkJBQy9DQSxHQUFHLENBQUNFLElBQUksRUFBRTs7b0JBQTFCRCxPQUFPLFlBQW1CO2lEQUN6Qjt3QkFDTGQsSUFBSSxFQUFFYyxPQUFPLENBQUNFLElBQUk7cUJBQ25COzs7Ozs7S0FDRjtvQkFONEJKLEdBQUc7OztHQU0vQjtBQUVELCtEQUFldkIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL1tpZF0uanM/YzJhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc29sZS5sb2coaWQpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9wcy51c2VyLmF2YXRhcn1cbiAgICAgICAgICAgICAgICBhbHQ9e3Byb3BzLnVzZXIuZmlyc3RfbmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMjUlXCIsIHdpZHRoOiBcIjUwJVwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxoMz57cHJvcHMudXNlci5maXJzdF9uYW1lfSB7cHJvcHMudXNlci5sYXN0X25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3Byb3BzLnVzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2VyLyR7Y3R4LnF1ZXJ5LmlkfWApXG4gIGNvbnN0IHJlc0pTT04gPSBhd2FpdCByZXMuanNvbigpXG4gIHJldHVybiB7XG4gICAgdXNlcjogcmVzSlNPTi5kYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJmZXRjaCIsInVzZVJvdXRlciIsIkNvbnRhaW5lciIsIlVzZXIiLCJwcm9wcyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwidXNlciIsImF2YXRhciIsImFsdCIsImZpcnN0X25hbWUiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaDMiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJyZXNKU09OIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[id].js\n"));

/***/ })

});