webpackHotUpdate("static/development/pages/library.js",{

/***/ "./layouts/PageWrapper.js":
/*!********************************!*\
  !*** ./layouts/PageWrapper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global */ "./styles/global.js");
var _jsxFileName = "/Users/chanaru/Documents/Projects/library-front-end/layouts/PageWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PageWrapper = function PageWrapper(_ref) {
  var children = _ref.children;
  return __jsx(PageWrapperContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " ", children, " ");
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);
var PageWrapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PageWrapper__PageWrapperContainer",
  componentId: "rkwjld-0"
})(["display:flex;flex-direction:column;padding:0 90px 40px;height:calc(100vh - 66px);width:100%;overflow:hidden;overflow-y:scroll;@media ", "{padding:0 30px 30px;overflow:scroll;> span{display:block;width:100%;min-width:calc(100% - 136px);}}"], _styles_global__WEBPACK_IMPORTED_MODULE_2__["DesktopBelow"]);

/***/ }),

/***/ "./pages/library/index.js":
/*!********************************!*\
  !*** ./pages/library/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loader */ "./components/Loader.js");
/* harmony import */ var _layouts_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/Page */ "./layouts/Page.js");
/* harmony import */ var _layouts_PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/PageWrapper */ "./layouts/PageWrapper.js");

var _jsxFileName = "/Users/chanaru/Documents/Projects/library-front-end/pages/library/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Sidebar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../layouts/Sidebar */ "./layouts/Sidebar.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../layouts/Sidebar */ "./layouts/Sidebar.js")];
    },
    modules: ["../../layouts/Sidebar"]
  }
});

var index = function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  return loading ? __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }) : __jsx(_layouts_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(Sidebar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(RightContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_layouts_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "hi")));
};

var RightContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=library.js.2c7c9004c2aced27e20e.hot-update.js.map