webpackHotUpdate("static/development/pages/library.js",{

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
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/global */ "./styles/global.js");

var _jsxFileName = "/Users/chanaru/Documents/Projects/library-front-end/pages/library/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  display: -webkit-inline-flex;\n  justify-content: space-between;\n  margin-top: 35px;\n\n  > h1 {\n    margin: 0;\n  }\n\n  @media ", " {\n    flex-wrap: wrap;\n    margin: 14px 0 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

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
      lineNumber: 17
    },
    __self: this
  }) : __jsx(_layouts_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(Sidebar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(RightContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_layouts_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(PageHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Library")))));
};

var RightContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), _styles_global__WEBPACK_IMPORTED_MODULE_7__["Device"].mini_desktop_below);
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=library.js.aba2f401d39b7021caf3.hot-update.js.map