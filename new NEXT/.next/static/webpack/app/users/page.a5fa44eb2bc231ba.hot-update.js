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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-client)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_define_property */ \"(app-client)/./node_modules/@swc/helpers/esm/_define_property.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-client)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-client)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-client)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Crud = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        age: \"\"\n    }), 2), user = _useState[0], setUser = _useState[1];\n    var changeHandler = function(e) {\n        setUser((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, user), (0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_5__._)({}, e.target.name, e.target.value)));\n    };\n    // Create New User\n    var submitForm = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function(e) {\n            var res;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        return [\n                            4,\n                            fetch(\"/api/user\", {\n                                body: JSON.stringify(user),\n                                method: \"POST\",\n                                headers: {\n                                    \"content-Type\": \"application/json\"\n                                }\n                            })\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            4,\n                            res.json()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        if (res.success) {\n                            alert(\"User Saved in DB Successfully!\");\n                            setUser({\n                                name: \"\",\n                                age: \"\"\n                            });\n                        } else {\n                            alert(\"Something went wrong!\");\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function submitForm(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Get Students\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), users = _useState1[0], setUsers = _useState1[1];\n    var getStudents = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n            var data;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"/api/user\")\n                        ];\n                    case 1:\n                        data = _state.sent();\n                        return [\n                            4,\n                            data.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        console.log(data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getStudents() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getStudents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: submitForm,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: user.name,\n                    name: \"name\",\n                    onChange: function(e) {\n                        return changeHandler(e);\n                    },\n                    type: \"text\",\n                    placeholder: \"Name\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 114\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: user.age,\n                    name: \"age\",\n                    onChange: function(e) {\n                        return changeHandler(e);\n                    },\n                    type: \"number\",\n                    placeholder: \"Age\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 113\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Crud, \"OnBBnHjtiNAFGGmb1Pyozx+OEGg=\");\n_c = Crud;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crud);\nvar _c;\n$RefreshReg$(_c, \"Crud\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ3J1ZC9DcnVkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTBDO0FBRzFDLElBQU1FLE9BQU87O0lBRVgsSUFBd0JGLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQztRQUMvQkcsTUFBTTtRQUNOQyxLQUFLO0lBQ1AsUUFIT0MsT0FBaUJMLGNBQVhNLFVBQVdOO0lBSXhCLElBQU1PLGdCQUFnQixTQUFDQztRQUNyQkYsUUFBUSxzSUFBS0QsT0FBTSxvRUFBQ0csRUFBRUMsTUFBTSxDQUFDTixJQUFJLEVBQUdLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUNwRDtJQUVBLGtCQUFrQjtJQUNsQixJQUFNQzttQkFBYSw0RUFBT0g7Z0JBRXBCSTs7Ozt3QkFESkosRUFBRUssY0FBYzt3QkFDTjs7NEJBQU1DLE1BQU0sYUFBYTtnQ0FDakNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1o7Z0NBQ3JCYSxRQUFRO2dDQUNSQyxTQUFTO29DQUFFLGdCQUFnQjtnQ0FBbUI7NEJBQ2hEOzs7d0JBSklQLE1BQU07d0JBS0o7OzRCQUFNQSxJQUFJUSxJQUFJOzs7d0JBQXBCUixNQUFNO3dCQUNOLElBQUlBLElBQUlTLE9BQU8sRUFBRTs0QkFHZkMsTUFBTTs0QkFDTmhCLFFBQVE7Z0NBQ05ILE1BQU07Z0NBQ05DLEtBQUs7NEJBQ1A7d0JBR0YsT0FBTzs0QkFDTGtCLE1BQU07d0JBQ1I7Ozs7OztRQUVGO3dCQXRCTVgsV0FBb0JIOzs7O0lBMEIxQixlQUFlO0lBQ2YsSUFBeUJSLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTdCdUIsUUFBa0J2QixlQUFad0IsV0FBWXhCO0lBQ3pCLElBQU15QjttQkFBYTtnQkFDYkM7Ozs7d0JBQU87OzRCQUFNWixNQUFNOzs7d0JBQW5CWSxPQUFPO3dCQUNKOzs0QkFBTUEsS0FBS04sSUFBSTs7O3dCQUF0Qk0sT0FBTzt3QkFDUEMsUUFBUUMsR0FBRyxDQUFDRjs7Ozs7O1FBQ2Q7d0JBSk1EOzs7O0lBTU54QixnREFBU0EsQ0FBQztRQUNSd0I7SUFDRixHQUFFLEVBQUU7SUFJSixxQkFDRSw4REFBQ0k7a0JBQ0MsNEVBQUNDO1lBQUtDLFVBQVVwQjs7OEJBQ2QsOERBQUNxQjtvQkFBTXRCLE9BQU9MLEtBQUtGLElBQUk7b0JBQUVBLE1BQUs7b0JBQU84QixVQUFVLFNBQUN6QjsrQkFBTUQsY0FBY0M7O29CQUFJMEIsTUFBSztvQkFBT0MsYUFBWTs7Ozs7OzhCQUFTLDhEQUFDQzs7Ozs7OEJBQzFHLDhEQUFDSjtvQkFBTXRCLE9BQU9MLEtBQUtELEdBQUc7b0JBQUVELE1BQUs7b0JBQU04QixVQUFVLFNBQUN6QjsrQkFBTUQsY0FBY0M7O29CQUFJMEIsTUFBSztvQkFBU0MsYUFBWTs7Ozs7OzhCQUFRLDhEQUFDQzs7Ozs7OEJBQ3pHLDhEQUFDQzs4QkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0E1RE1uQztLQUFBQTtBQThETiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DcnVkL0NydWQuanN4PzU1NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuY29uc3QgQ3J1ZCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGFnZTogXCJcIlxyXG4gIH0pXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRVc2VyKHsgLi4udXNlciwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIE5ldyBVc2VyXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2VyJywge1xyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcImNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICB9KVxyXG4gICAgcmVzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcblxyXG5cclxuICAgICAgYWxlcnQoXCJVc2VyIFNhdmVkIGluIERCIFN1Y2Nlc3NmdWxseSFcIilcclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBhZ2U6IFwiXCJcclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vIEdldCBTdHVkZW50c1xyXG4gIGNvbnN0IFt1c2VycyxzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBnZXRTdHVkZW50cyA9YXN5bmMgKCkgPT4ge1xyXG4gICAgdmFyIGRhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlclwiKVxyXG4gICAgZGF0YSA9IGF3YWl0IGRhdGEuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBnZXRTdHVkZW50cygpXHJcbiAgfSxbXSlcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19ID5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXIubmFtZX0gbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUhhbmRsZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J05hbWUnIC8+PGJyIC8+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VyLmFnZX0gbmFtZT1cImFnZVwiIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlSGFuZGxlcihlKX0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPSdBZ2UnIC8+PGJyIC8+XHJcbiAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcnVkIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ3J1ZCIsIm5hbWUiLCJhZ2UiLCJ1c2VyIiwic2V0VXNlciIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRGb3JtIiwicmVzIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiaGVhZGVycyIsImpzb24iLCJzdWNjZXNzIiwiYWxlcnQiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0U3R1ZGVudHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Crud/Crud.jsx\n"));

/***/ })

});