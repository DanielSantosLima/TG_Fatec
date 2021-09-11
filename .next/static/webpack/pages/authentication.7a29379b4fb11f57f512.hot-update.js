self["webpackHotUpdate_N_E"]("pages/authentication",{

/***/ "./src/pages/authentication.tsx":
/*!**************************************!*\
  !*** ./src/pages/authentication.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/icons */ "./src/styles/icons/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/pages/Authentication */ "./src/styles/pages/Authentication.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\TG_Fatec\\src\\pages\\authentication.tsx",
    _this = undefined,
    _s = $RefreshSig$();

// eslint-disable-next-line no-use-before-define


var history = (0,history__WEBPACK_IMPORTED_MODULE_4__.createBrowserHistory)();





var Authentication = function Authentication() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      userName = _useState[0],
      setUserName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var setUserContent = function setUserContent(e) {
    setUserName(e.target.value);
  };

  var setPasswrodContent = function setPasswrodContent(e) {
    setPassword(e.target.value);
  };

  var userToVerify = {
    name: userName,
    password: password
  };

  var verifyUser = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(user) {
      var userResponse;
      return C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('http://localhost:3000/api/user/verfyUser', {
                userToVerify: userToVerify
              });

            case 2:
              userResponse = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function verifyUser(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.ViewLoginFrame, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.LoginFrame, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        href: "http://olhosdobem.ong.br/",
        rel: "noreferrer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.Title, {
        children: "Olhos do Bem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.ForgotLink, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
          href: "/registrationOptions",
          children: "FA\xC7A SEU CADASTRO AQUI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.Fields, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.Username, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_icons__WEBPACK_IMPORTED_MODULE_6__.MailIcon, {
            size: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "usename",
            placeholder: "usu\xE1rio",
            value: userName,
            onChange: setUserContent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.Password, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_icons__WEBPACK_IMPORTED_MODULE_6__.LockIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "password",
            placeholder: "senha",
            value: password,
            onChange: setPasswrodContent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.SigninButton, {
        onClick: function onClick() {
          console.log("Hello");
        },
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Authentication__WEBPACK_IMPORTED_MODULE_8__.ForgotLink, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/recuperation",
          children: " Esqueci minha senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, _this);
};

_s(Authentication, "QMPl3tchD3a+CakFWkbNfxVuEUY=");

_c = Authentication;
/* harmony default export */ __webpack_exports__["default"] = (Authentication);

var _c;

$RefreshReg$(_c, "Authentication");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJoaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJBdXRoZW50aWNhdGlvbiIsInVzZVN0YXRlIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRVc2VyQ29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFBhc3N3cm9kQ29udGVudCIsInVzZXJUb1ZlcmlmeSIsIm5hbWUiLCJ2ZXJpZnlVc2VyIiwidXNlciIsImF4aW9zIiwidXNlclJlc3BvbnNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyw2REFBb0IsRUFBbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkEsSUFBTUMsY0FBdUMsR0FBRyxTQUExQ0EsY0FBMEMsR0FBTTtBQUFBOztBQUFBLGtCQUNwQkMsK0NBQVEsQ0FBQyxFQUFELENBRFk7QUFBQSxNQUM3Q0MsUUFENkM7QUFBQSxNQUNuQ0MsV0FEbUM7O0FBQUEsbUJBRXBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGWTtBQUFBLE1BRTdDRyxRQUY2QztBQUFBLE1BRW5DQyxXQUZtQzs7QUFLcEQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUk7QUFDMUJKLGVBQVcsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBSCxDQUFDLEVBQUk7QUFDOUJGLGVBQVcsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBRkQ7O0FBU0EsTUFBSUUsWUFBeUIsR0FBRztBQUM5QkMsUUFBSSxFQUFFVixRQUR3QjtBQUU5QkUsWUFBUSxFQUFFQTtBQUZvQixHQUFoQzs7QUFLQSxNQUFNUyxVQUFVO0FBQUEsaVJBQUcsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDVUMsaURBQUEsQ0FBVywwQ0FBWCxFQUF1RDtBQUFDSiw0QkFBWSxFQUFaQTtBQUFELGVBQXZELENBRFY7O0FBQUE7QUFDWEssMEJBRFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkgsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFJQSxzQkFDRSw4REFBQyx3RUFBRDtBQUFBLDJCQUNFLDhEQUFDLG9FQUFEO0FBQUEsOEJBQ0U7QUFBRyxjQUFNLEVBQUMsUUFBVjtBQUFtQixZQUFJLEVBQUMsMkJBQXhCO0FBQW9ELFdBQUcsRUFBQyxZQUF4RDtBQUFBLCtCQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBT0UsOERBQUMsb0VBQUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVVFLDhEQUFDLGdFQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0VBQUQ7QUFBQSxrQ0FDRSw4REFBQyxtREFBRDtBQUFVLGdCQUFJLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxTQURQO0FBRUUsdUJBQVcsRUFBQyxZQUZkO0FBR0UsaUJBQUssRUFBRVgsUUFIVDtBQUlFLG9CQUFRLEVBQUVJO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFXRSw4REFBQyxrRUFBRDtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHVCQUFXLEVBQUMsT0FGZDtBQUdFLGlCQUFLLEVBQUVGLFFBSFQ7QUFJRSxvQkFBUSxFQUFFTTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBZ0NFLDhEQUFDLHNFQUFEO0FBQWMsZUFBTyxFQUFFLG1CQUFNO0FBQUNPLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQzdCLFNBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0YsZUFtQ0UsOERBQUMsb0VBQUQ7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQ0QsQ0F0RUQ7O0dBQU1sQixjOztLQUFBQSxjO0FBd0VOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLjdhMjkzNzliNGZiMTFmNTdmNTEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxubGV0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IExvY2tJY29uLCBNYWlsSWNvbiB9IGZyb20gXCIuLi9zdHlsZXMvaWNvbnNcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHtcclxuICBGaWVsZHMsXHJcbiAgRm9yZ290TGluayxcclxuICBMb2dpbkZyYW1lLFxyXG4gIExvZ28sXHJcbiAgUGFzc3dvcmQsXHJcbiAgU2lnbmluQnV0dG9uLFxyXG4gIFRpdGxlLFxyXG4gIFVzZXJuYW1lLFxyXG4gIFZpZXdMb2dpbkZyYW1lXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9BdXRoZW50aWNhdGlvblwiXHJcblxyXG5pbnRlcmZhY2UgQXV0aGVudGljYXRpb25Qcm9wcyB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxufVxyXG5cclxuY29uc3QgQXV0aGVudGljYXRpb246IEZDPEF1dGhlbnRpY2F0aW9uUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgXHJcblxyXG4gIGNvbnN0IHNldFVzZXJDb250ZW50ID0gZSA9PiB7XHJcbiAgICBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldFBhc3N3cm9kQ29udGVudCA9IGUgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICB0eXBlIGRlZmF1bHRVc2VyID0ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xyXG4gIH1cclxuXHJcbiAgbGV0IHVzZXJUb1ZlcmlmeTogZGVmYXVsdFVzZXIgPSB7XHJcbiAgICBuYW1lOiB1c2VyTmFtZSxcclxuICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgdmVyaWZ5VXNlciA9IGFzeW5jICh1c2VyOiBkZWZhdWx0VXNlcikgPT4ge1xyXG4gICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyL3ZlcmZ5VXNlcicsIHt1c2VyVG9WZXJpZnl9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWaWV3TG9naW5GcmFtZT5cclxuICAgICAgPExvZ2luRnJhbWU+XHJcbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9vbGhvc2RvYmVtLm9uZy5ici9cIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPFRpdGxlPk9saG9zIGRvIEJlbTwvVGl0bGU+XHJcbiAgICAgICAgey8qIDxTdWJUaXRsZT48YSBocmVmPVwiI1wiPkZhw6dhIHNldSBjYWRhc3RybyBBUVVJPC9hPjwvU3ViVGl0bGU+ICovfVxyXG4gICAgICAgIDxGb3Jnb3RMaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RyYXRpb25PcHRpb25zXCI+RkHDh0EgU0VVIENBREFTVFJPIEFRVUk8L0xpbms+XHJcbiAgICAgICAgPC9Gb3Jnb3RMaW5rPlxyXG4gICAgICAgIDxGaWVsZHM+XHJcbiAgICAgICAgICA8VXNlcm5hbWU+XHJcbiAgICAgICAgICAgIDxNYWlsSWNvbiBzaXplPXsyfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidXNlbmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c3XDoXJpb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJOYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRVc2VyQ29udGVudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVXNlcm5hbWU+XHJcblxyXG4gICAgICAgICAgPFBhc3N3b3JkPlxyXG4gICAgICAgICAgICA8TG9ja0ljb24gLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlbmhhXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFBhc3N3cm9kQ29udGVudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUGFzc3dvcmQ+XHJcbiAgICAgICAgPC9GaWVsZHM+XHJcblxyXG4gICAgICAgIDxTaWduaW5CdXR0b24gb25DbGljaz17KCkgPT4ge2NvbnNvbGUubG9nKFwiSGVsbG9cIik7XHJcbiAgICAgICAgfX0+TG9naW48L1NpZ25pbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgPEZvcmdvdExpbms+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL3JlY3VwZXJhdGlvblwiPiBFc3F1ZWNpIG1pbmhhIHNlbmhhPC9hPlxyXG4gICAgICAgIDwvRm9yZ290TGluaz5cclxuICAgICAgPC9Mb2dpbkZyYW1lPlxyXG4gICAgPC9WaWV3TG9naW5GcmFtZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhlbnRpY2F0aW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=