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
          verifyUser;
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
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJoaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJBdXRoZW50aWNhdGlvbiIsInVzZVN0YXRlIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRVc2VyQ29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFBhc3N3cm9kQ29udGVudCIsInVzZXJUb1ZlcmlmeSIsIm5hbWUiLCJ2ZXJpZnlVc2VyIiwidXNlciIsImF4aW9zIiwidXNlclJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLDZEQUFvQixFQUFsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWdCQSxJQUFNQyxjQUF1QyxHQUFHLFNBQTFDQSxjQUEwQyxHQUFNO0FBQUE7O0FBQUEsa0JBQ3BCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEWTtBQUFBLE1BQzdDQyxRQUQ2QztBQUFBLE1BQ25DQyxXQURtQzs7QUFBQSxtQkFFcEJGLCtDQUFRLENBQUMsRUFBRCxDQUZZO0FBQUEsTUFFN0NHLFFBRjZDO0FBQUEsTUFFbkNDLFdBRm1DOztBQUtwRCxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLENBQUMsRUFBSTtBQUMxQkosZUFBVyxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFILENBQUMsRUFBSTtBQUM5QkYsZUFBVyxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0QsR0FGRDs7QUFTQSxNQUFJRSxZQUF5QixHQUFHO0FBQzlCQyxRQUFJLEVBQUVWLFFBRHdCO0FBRTlCRSxZQUFRLEVBQUVBO0FBRm9CLEdBQWhDOztBQUtBLE1BQU1TLFVBQVU7QUFBQSxpUkFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNVQyxpREFBQSxDQUFXLDBDQUFYLEVBQXVEO0FBQUNKLDRCQUFZLEVBQVpBO0FBQUQsZUFBdkQsQ0FEVjs7QUFBQTtBQUNYSywwQkFEVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWSCxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUlBLHNCQUNFLDhEQUFDLHdFQUFEO0FBQUEsMkJBQ0UsOERBQUMsb0VBQUQ7QUFBQSw4QkFDRTtBQUFHLGNBQU0sRUFBQyxRQUFWO0FBQW1CLFlBQUksRUFBQywyQkFBeEI7QUFBb0QsV0FBRyxFQUFDLFlBQXhEO0FBQUEsK0JBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFPRSw4REFBQyxvRUFBRDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBVUUsOERBQUMsZ0VBQUQ7QUFBQSxnQ0FDRSw4REFBQyxrRUFBRDtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQVUsZ0JBQUksRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxnQkFBSSxFQUFDLFNBRFA7QUFFRSx1QkFBVyxFQUFDLFlBRmQ7QUFHRSxpQkFBSyxFQUFFWCxRQUhUO0FBSUUsb0JBQVEsRUFBRUk7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVdFLDhEQUFDLGtFQUFEO0FBQUEsa0NBQ0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUsdUJBQVcsRUFBQyxPQUZkO0FBR0UsaUJBQUssRUFBRUYsUUFIVDtBQUlFLG9CQUFRLEVBQUVNO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFnQ0UsOERBQUMsc0VBQUQ7QUFBYyxlQUFPLEVBQUUsbUJBQU07QUFBRUcsb0JBQVU7QUFBQyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhDRixlQWtDRSw4REFBQyxvRUFBRDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLGVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQXJFRDs7R0FBTWIsYzs7S0FBQUEsYztBQXVFTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoZW50aWNhdGlvbi5kMTY0MTAxY2FjNTFkYjE1ZDdlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmxldCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBMb2NrSWNvbiwgTWFpbEljb24gfSBmcm9tIFwiLi4vc3R5bGVzL2ljb25zXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7XHJcbiAgRmllbGRzLFxyXG4gIEZvcmdvdExpbmssXHJcbiAgTG9naW5GcmFtZSxcclxuICBMb2dvLFxyXG4gIFBhc3N3b3JkLFxyXG4gIFNpZ25pbkJ1dHRvbixcclxuICBUaXRsZSxcclxuICBVc2VybmFtZSxcclxuICBWaWV3TG9naW5GcmFtZVxyXG59IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvQXV0aGVudGljYXRpb25cIlxyXG5cclxuaW50ZXJmYWNlIEF1dGhlbnRpY2F0aW9uUHJvcHMge1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IEF1dGhlbnRpY2F0aW9uOiBGQzxBdXRoZW50aWNhdGlvblByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIFxyXG5cclxuICBjb25zdCBzZXRVc2VyQ29udGVudCA9IGUgPT4ge1xyXG4gICAgc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRQYXNzd3JvZENvbnRlbnQgPSBlID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgdHlwZSBkZWZhdWx0VXNlciA9IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBzdHJpbmdcclxuICB9XHJcblxyXG4gIGxldCB1c2VyVG9WZXJpZnk6IGRlZmF1bHRVc2VyID0ge1xyXG4gICAgbmFtZTogdXNlck5hbWUsXHJcbiAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICB9XHJcblxyXG4gIGNvbnN0IHZlcmlmeVVzZXIgPSBhc3luYyAodXNlcjogZGVmYXVsdFVzZXIpID0+IHtcclxuICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci92ZXJmeVVzZXInLCB7dXNlclRvVmVyaWZ5fSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Vmlld0xvZ2luRnJhbWU+XHJcbiAgICAgIDxMb2dpbkZyYW1lPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vb2xob3Nkb2JlbS5vbmcuYnIvXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxUaXRsZT5PbGhvcyBkbyBCZW08L1RpdGxlPlxyXG4gICAgICAgIHsvKiA8U3ViVGl0bGU+PGEgaHJlZj1cIiNcIj5GYcOnYSBzZXUgY2FkYXN0cm8gQVFVSTwvYT48L1N1YlRpdGxlPiAqL31cclxuICAgICAgICA8Rm9yZ290TGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0cmF0aW9uT3B0aW9uc1wiPkZBw4dBIFNFVSBDQURBU1RSTyBBUVVJPC9MaW5rPlxyXG4gICAgICAgIDwvRm9yZ290TGluaz5cclxuICAgICAgICA8RmllbGRzPlxyXG4gICAgICAgICAgPFVzZXJuYW1lPlxyXG4gICAgICAgICAgICA8TWFpbEljb24gc2l6ZT17Mn0gLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXN1w6FyaW9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0VXNlckNvbnRlbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1VzZXJuYW1lPlxyXG5cclxuICAgICAgICAgIDxQYXNzd29yZD5cclxuICAgICAgICAgICAgPExvY2tJY29uIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZW5oYVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRQYXNzd3JvZENvbnRlbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Bhc3N3b3JkPlxyXG4gICAgICAgIDwvRmllbGRzPlxyXG5cclxuICAgICAgICA8U2lnbmluQnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdmVyaWZ5VXNlcn19PkxvZ2luPC9TaWduaW5CdXR0b24+XHJcblxyXG4gICAgICAgIDxGb3Jnb3RMaW5rPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9yZWN1cGVyYXRpb25cIj4gRXNxdWVjaSBtaW5oYSBzZW5oYTwvYT5cclxuICAgICAgICA8L0ZvcmdvdExpbms+XHJcbiAgICAgIDwvTG9naW5GcmFtZT5cclxuICAgIDwvVmlld0xvZ2luRnJhbWU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoZW50aWNhdGlvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9