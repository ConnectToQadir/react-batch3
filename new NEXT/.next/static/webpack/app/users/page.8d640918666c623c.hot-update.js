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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-client)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_define_property */ \"(app-client)/./node_modules/@swc/helpers/esm/_define_property.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-client)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-client)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-client)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Crud = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        age: \"\"\n    }), 2), user = _useState[0], setUser = _useState[1];\n    var changeHandler = function(e) {\n        setUser((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, user), (0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_5__._)({}, e.target.name, e.target.value)));\n    };\n    // Create New User\n    var submitForm = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function(e) {\n            var res;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        return [\n                            4,\n                            fetch(\"/api/user\", {\n                                body: JSON.stringify(user),\n                                method: \"POST\",\n                                headers: {\n                                    \"content-Type\": \"application/json\"\n                                }\n                            })\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function submitForm(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: submitForm,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"name\",\n                    onChange: function(e) {\n                        return changeHandler(e);\n                    },\n                    type: \"text\",\n                    placeholder: \"Name\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 97\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"age\",\n                    onChange: function(e) {\n                        return changeHandler(e);\n                    },\n                    type: \"number\",\n                    placeholder: \"Age\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 96\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\web\\\\next\\\\src\\\\components\\\\Crud\\\\Crud.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(Crud, \"BgRygau2FzrqzakwkzorFMs6YVE=\");\n_c = Crud;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crud);\nvar _c;\n$RefreshReg$(_c, \"Crud\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ3J1ZC9DcnVkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBR2hDLElBQU1DLE9BQU87O0lBRVgsSUFBdUJELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQztRQUM5QkUsTUFBSztRQUNMQyxLQUFJO0lBQ04sUUFIT0MsT0FBZ0JKLGNBQVhLLFVBQVdMO0lBSXZCLElBQU1NLGdCQUFnQixTQUFDQztRQUNyQkYsUUFBUSxzSUFBSUQsT0FBSyxvRUFBQ0csRUFBRUMsTUFBTSxDQUFDTixJQUFJLEVBQUVLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUNqRDtJQUVBLGtCQUFrQjtJQUNsQixJQUFNQzttQkFBYSw0RUFBT0g7Z0JBRWxCSTs7Ozt3QkFETkosRUFBRUssY0FBYzt3QkFDSjs7NEJBQU1DLE1BQU0sYUFBWTtnQ0FDbENDLE1BQUtDLEtBQUtDLFNBQVMsQ0FBQ1o7Z0NBQ3BCYSxRQUFPO2dDQUNQQyxTQUFRO29DQUFDLGdCQUFlO2dDQUFrQjs0QkFDNUM7Ozt3QkFKTVAsTUFBTTs7Ozs7O1FBT2Q7d0JBVE1ELFdBQW9CSDs7OztJQWExQixxQkFDRSw4REFBQ1k7a0JBQ0MsNEVBQUNDO1lBQUtDLFVBQVVYOzs4QkFDZCw4REFBQ1k7b0JBQU1wQixNQUFLO29CQUFPcUIsVUFBVSxTQUFDaEI7K0JBQUlELGNBQWNDOztvQkFBSWlCLE1BQUs7b0JBQVVDLGFBQVk7Ozs7Ozs4QkFBUyw4REFBQ0M7Ozs7OzhCQUN6Riw4REFBQ0o7b0JBQU1wQixNQUFLO29CQUFPcUIsVUFBVSxTQUFDaEI7K0JBQUlELGNBQWNDOztvQkFBSWlCLE1BQUs7b0JBQVVDLGFBQVk7Ozs7Ozs4QkFBUSw4REFBQ0M7Ozs7OzhCQUN4Riw4REFBQ0M7OEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0dBakNNMUI7S0FBQUE7QUFtQ04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J1ZC9DcnVkLmpzeD81NTU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuY29uc3QgQ3J1ZCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOlwiXCIsXHJcbiAgICBhZ2U6XCJcIlxyXG4gIH0pXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PntcclxuICAgIHNldFVzZXIoey4uLnVzZXIsW2UudGFyZ2V0Lm5hbWVdOmUudGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBOZXcgVXNlclxyXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZSkgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXInLHtcclxuICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOntcImNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifVxyXG4gICAgfSlcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19ID5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17KGUpPT5jaGFuZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiICAgIHBsYWNlaG9sZGVyPSdOYW1lJyAvPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwiYWdlXCIgIG9uQ2hhbmdlPXsoZSk9PmNoYW5nZUhhbmRsZXIoZSl9IHR5cGU9XCJudW1iZXJcIiAgcGxhY2Vob2xkZXI9J0FnZScgLz48YnIgLz5cclxuICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENydWQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDcnVkIiwibmFtZSIsImFnZSIsInVzZXIiLCJzZXRVc2VyIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1Ym1pdEZvcm0iLCJyZXMiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Crud/Crud.jsx\n"));

/***/ })

});