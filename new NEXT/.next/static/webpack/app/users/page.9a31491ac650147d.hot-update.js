"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/page",{

/***/ "(app-client)/./src/components/Crud/Crud.jsx":
/*!**************************************!*\
  !*** ./src/components/Crud/Crud.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-client)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_define_property */ \"(app-client)/./node_modules/@swc/helpers/esm/_define_property.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-client)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-client)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-client)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Crud = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        age: \"\"\n    }), 2), user = _useState[0], setUser = _useState[1];\n    var changeHandler = function(e) {\n        setUser((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, user), (0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_5__._)({}, e.target.name, e.target.value)));\n    };\n    // Create New User\n    var submitForm = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function(e) {\n            var res;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        return [\n                            4,\n                            fetch(\"/api/user\", {\n                                body: JSON.stringify(user),\n                                method: \"POST\",\n                                headers: {\n                                    \"content-Type\": \"application/json\"\n                                }\n                            })\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            4,\n                            res.json()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        if (res.success) {\n                            alert(\"User Saved in DB Successfully!\");\n                            setUser({\n                                name: \"\",\n                                age: \"\"\n                            });\n                        } else {\n                            alert(\"Something went wrong!\");\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function submitForm(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Get Students\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), users = _useState1[0], setUsers = _useState1[1];\n    var getStudents = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n            var data;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/user\")\n                        ];\n                    case 1:\n                        data = _state.sent();\n                        return [\n                            4,\n                            data.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        setUsers(data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getStudents() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getStudents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: submitForm,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: user.name,\n                    name: \"name\",\n                    onChange: function(e) {\n                        return changeHandler(e);\n                    },\n                    type: \"text\",\n                    placeholder: \"Name\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 114\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: user.age,\n                    name: \"age\",\n                    onChange: function(e) {\n                        return changeHandler(e);\n                    },\n                    type: \"number\",\n                    placeholder: \"Age\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 113\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Crud, \"OnBBnHjtiNAFGGmb1Pyozx+OEGg=\");\n_c = Crud;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crud);\nvar _c;\n$RefreshReg$(_c, \"Crud\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ3J1ZC9DcnVkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTBDO0FBRzFDLElBQU1FLE9BQU87O0lBRVgsSUFBd0JGLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQztRQUMvQkcsTUFBTTtRQUNOQyxLQUFLO0lBQ1AsUUFIT0MsT0FBaUJMLGNBQVhNLFVBQVdOO0lBSXhCLElBQU1PLGdCQUFnQixTQUFDQztRQUNyQkYsUUFBUSxzSUFBS0QsT0FBTSxvRUFBQ0csRUFBRUMsTUFBTSxDQUFDTixJQUFJLEVBQUdLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUNwRDtJQUVBLGtCQUFrQjtJQUNsQixJQUFNQzttQkFBYSw0RUFBT0g7Z0JBRXBCSTs7Ozt3QkFESkosRUFBRUssY0FBYzt3QkFDTjs7NEJBQU1DLE1BQU0sYUFBYTtnQ0FDakNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1o7Z0NBQ3JCYSxRQUFRO2dDQUNSQyxTQUFTO29DQUFFLGdCQUFnQjtnQ0FBbUI7NEJBQ2hEOzs7d0JBSklQLE1BQU07d0JBS0o7OzRCQUFNQSxJQUFJUSxJQUFJOzs7d0JBQXBCUixNQUFNO3dCQUNOLElBQUlBLElBQUlTLE9BQU8sRUFBRTs0QkFHZkMsTUFBTTs0QkFDTmhCLFFBQVE7Z0NBQ05ILE1BQU07Z0NBQ05DLEtBQUs7NEJBQ1A7d0JBR0YsT0FBTzs0QkFDTGtCLE1BQU07d0JBQ1I7Ozs7OztRQUVGO3dCQXRCTVgsV0FBb0JIOzs7O0lBMEIxQixlQUFlO0lBQ2YsSUFBeUJSLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTdCdUIsUUFBa0J2QixlQUFad0IsV0FBWXhCO0lBQ3pCLElBQU15QjttQkFBYTtnQkFDYkM7Ozs7d0JBQU87OzRCQUFNWixNQUFNOzs7d0JBQW5CWSxPQUFPO3dCQUNKOzs0QkFBTUEsS0FBS04sSUFBSTs7O3dCQUF0Qk0sT0FBTzt3QkFDUEYsU0FBU0U7Ozs7OztRQUNYO3dCQUpNRDs7OztJQU1OeEIsZ0RBQVNBLENBQUM7UUFDUndCO0lBQ0YsR0FBRSxFQUFFO0lBSUoscUJBQ0UsOERBQUNFO2tCQUNDLDRFQUFDQztZQUFLQyxVQUFVbEI7OzhCQUNkLDhEQUFDbUI7b0JBQU1wQixPQUFPTCxLQUFLRixJQUFJO29CQUFFQSxNQUFLO29CQUFPNEIsVUFBVSxTQUFDdkI7K0JBQU1ELGNBQWNDOztvQkFBSXdCLE1BQUs7b0JBQU9DLGFBQVk7Ozs7Ozs4QkFBUyw4REFBQ0M7Ozs7OzhCQUMxRyw4REFBQ0o7b0JBQU1wQixPQUFPTCxLQUFLRCxHQUFHO29CQUFFRCxNQUFLO29CQUFNNEIsVUFBVSxTQUFDdkI7K0JBQU1ELGNBQWNDOztvQkFBSXdCLE1BQUs7b0JBQVNDLGFBQVk7Ozs7Ozs4QkFBUSw4REFBQ0M7Ozs7OzhCQUN6Ryw4REFBQ0M7OEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0dBNURNakM7S0FBQUE7QUE4RE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J1ZC9DcnVkLmpzeD81NTU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmNvbnN0IENydWQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBhZ2U6IFwiXCJcclxuICB9KVxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0VXNlcih7IC4uLnVzZXIsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBOZXcgVXNlclxyXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcicsIHtcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxyXG4gICAgfSlcclxuICAgIHJlcyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG5cclxuXHJcbiAgICAgIGFsZXJ0KFwiVXNlciBTYXZlZCBpbiBEQiBTdWNjZXNzZnVsbHkhXCIpXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgYWdlOiBcIlwiXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyBHZXQgU3R1ZGVudHNcclxuICBjb25zdCBbdXNlcnMsc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgZ2V0U3R1ZGVudHMgPWFzeW5jICgpID0+IHtcclxuICAgIHZhciBkYXRhID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJcIilcclxuICAgIGRhdGEgPSBhd2FpdCBkYXRhLmpzb24oKVxyXG4gICAgc2V0VXNlcnMoZGF0YSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZ2V0U3R1ZGVudHMoKVxyXG4gIH0sW10pXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfSA+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VyLm5hbWV9IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdOYW1lJyAvPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlci5hZ2V9IG5hbWU9XCJhZ2VcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUhhbmRsZXIoZSl9IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj0nQWdlJyAvPjxiciAvPlxyXG4gICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3J1ZCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNydWQiLCJuYW1lIiwiYWdlIiwidXNlciIsInNldFVzZXIiLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3VibWl0Rm9ybSIsInJlcyIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwic3VjY2VzcyIsImFsZXJ0IiwidXNlcnMiLCJzZXRVc2VycyIsImdldFN0dWRlbnRzIiwiZGF0YSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Crud/Crud.jsx\n"));

/***/ })

});