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
    var _ref = (0,C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var userResponse;
      return C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('http://localhost:3000/api/user/verifyUser', {
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

    return function verifyUser() {
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
        onClick: verifyUser,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJoaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJBdXRoZW50aWNhdGlvbiIsInVzZVN0YXRlIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRVc2VyQ29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFBhc3N3cm9kQ29udGVudCIsInVzZXJUb1ZlcmlmeSIsIm5hbWUiLCJ2ZXJpZnlVc2VyIiwiYXhpb3MiLCJ1c2VyUmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE9BQU8sR0FBR0MsNkRBQW9CLEVBQWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0JBLElBQU1DLGNBQXVDLEdBQUcsU0FBMUNBLGNBQTBDLEdBQU07QUFBQTs7QUFBQSxrQkFDcEJDLCtDQUFRLENBQUMsRUFBRCxDQURZO0FBQUEsTUFDN0NDLFFBRDZDO0FBQUEsTUFDbkNDLFdBRG1DOztBQUFBLG1CQUVwQkYsK0NBQVEsQ0FBQyxFQUFELENBRlk7QUFBQSxNQUU3Q0csUUFGNkM7QUFBQSxNQUVuQ0MsV0FGbUM7O0FBS3BELE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzFCSixlQUFXLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUgsQ0FBQyxFQUFJO0FBQzlCRixlQUFXLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUZEOztBQVNBLE1BQUlFLFlBQXlCLEdBQUc7QUFDOUJDLFFBQUksRUFBRVYsUUFEd0I7QUFFOUJFLFlBQVEsRUFBRUE7QUFGb0IsR0FBaEM7O0FBS0EsTUFBTVMsVUFBVTtBQUFBLGlSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1VDLGlEQUFBLENBQVcsMkNBQVgsRUFBd0Q7QUFBQ0gsNEJBQVksRUFBWkE7QUFBRCxlQUF4RCxDQURWOztBQUFBO0FBQ1hJLDBCQURXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZGLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBSUEsc0JBQ0UsOERBQUMsd0VBQUQ7QUFBQSwyQkFDRSw4REFBQyxvRUFBRDtBQUFBLDhCQUNFO0FBQUcsY0FBTSxFQUFDLFFBQVY7QUFBbUIsWUFBSSxFQUFDLDJCQUF4QjtBQUFvRCxXQUFHLEVBQUMsWUFBeEQ7QUFBQSwrQkFDRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU9FLDhEQUFDLG9FQUFEO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsc0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFVRSw4REFBQyxnRUFBRDtBQUFBLGdDQUNFLDhEQUFDLGtFQUFEO0FBQUEsa0NBQ0UsOERBQUMsbURBQUQ7QUFBVSxnQkFBSSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsU0FEUDtBQUVFLHVCQUFXLEVBQUMsWUFGZDtBQUdFLGlCQUFLLEVBQUVYLFFBSFQ7QUFJRSxvQkFBUSxFQUFFSTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0UsOERBQUMsa0VBQUQ7QUFBQSxrQ0FDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSx1QkFBVyxFQUFDLE9BRmQ7QUFHRSxpQkFBSyxFQUFFRixRQUhUO0FBSUUsb0JBQVEsRUFBRU07QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQWdDRSw4REFBQyxzRUFBRDtBQUFjLGVBQU8sRUFBRUcsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0YsZUFrQ0UsOERBQUMsb0VBQUQ7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0FyRUQ7O0dBQU1iLGM7O0tBQUFBLGM7QUF1RU4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aGVudGljYXRpb24uZDNlYjdmZGVmNDMzNDRjZTYyOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5sZXQgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgTG9ja0ljb24sIE1haWxJY29uIH0gZnJvbSBcIi4uL3N0eWxlcy9pY29uc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQge1xyXG4gIEZpZWxkcyxcclxuICBGb3Jnb3RMaW5rLFxyXG4gIExvZ2luRnJhbWUsXHJcbiAgTG9nbyxcclxuICBQYXNzd29yZCxcclxuICBTaWduaW5CdXR0b24sXHJcbiAgVGl0bGUsXHJcbiAgVXNlcm5hbWUsXHJcbiAgVmlld0xvZ2luRnJhbWVcclxufSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0F1dGhlbnRpY2F0aW9uXCJcclxuXHJcbmludGVyZmFjZSBBdXRoZW50aWNhdGlvblByb3BzIHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5jb25zdCBBdXRoZW50aWNhdGlvbjogRkM8QXV0aGVudGljYXRpb25Qcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcclxuICBcclxuXHJcbiAgY29uc3Qgc2V0VXNlckNvbnRlbnQgPSBlID0+IHtcclxuICAgIHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0UGFzc3dyb2RDb250ZW50ID0gZSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHR5cGUgZGVmYXVsdFVzZXIgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBwYXNzd29yZDogc3RyaW5nXHJcbiAgfVxyXG5cclxuICBsZXQgdXNlclRvVmVyaWZ5OiBkZWZhdWx0VXNlciA9IHtcclxuICAgIG5hbWU6IHVzZXJOYW1lLFxyXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgfVxyXG5cclxuICBjb25zdCB2ZXJpZnlVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyL3ZlcmlmeVVzZXInLCB7dXNlclRvVmVyaWZ5fSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Vmlld0xvZ2luRnJhbWU+XHJcbiAgICAgIDxMb2dpbkZyYW1lPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vb2xob3Nkb2JlbS5vbmcuYnIvXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxUaXRsZT5PbGhvcyBkbyBCZW08L1RpdGxlPlxyXG4gICAgICAgIHsvKiA8U3ViVGl0bGU+PGEgaHJlZj1cIiNcIj5GYcOnYSBzZXUgY2FkYXN0cm8gQVFVSTwvYT48L1N1YlRpdGxlPiAqL31cclxuICAgICAgICA8Rm9yZ290TGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0cmF0aW9uT3B0aW9uc1wiPkZBw4dBIFNFVSBDQURBU1RSTyBBUVVJPC9MaW5rPlxyXG4gICAgICAgIDwvRm9yZ290TGluaz5cclxuICAgICAgICA8RmllbGRzPlxyXG4gICAgICAgICAgPFVzZXJuYW1lPlxyXG4gICAgICAgICAgICA8TWFpbEljb24gc2l6ZT17Mn0gLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXN1w6FyaW9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0VXNlckNvbnRlbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1VzZXJuYW1lPlxyXG5cclxuICAgICAgICAgIDxQYXNzd29yZD5cclxuICAgICAgICAgICAgPExvY2tJY29uIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZW5oYVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRQYXNzd3JvZENvbnRlbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Bhc3N3b3JkPlxyXG4gICAgICAgIDwvRmllbGRzPlxyXG5cclxuICAgICAgICA8U2lnbmluQnV0dG9uIG9uQ2xpY2s9e3ZlcmlmeVVzZXJ9PkxvZ2luPC9TaWduaW5CdXR0b24+XHJcblxyXG4gICAgICAgIDxGb3Jnb3RMaW5rPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9yZWN1cGVyYXRpb25cIj4gRXNxdWVjaSBtaW5oYSBzZW5oYTwvYT5cclxuICAgICAgICA8L0ZvcmdvdExpbms+XHJcbiAgICAgIDwvTG9naW5GcmFtZT5cclxuICAgIDwvVmlld0xvZ2luRnJhbWU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoZW50aWNhdGlvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9