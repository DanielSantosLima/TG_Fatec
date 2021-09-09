self["webpackHotUpdate_N_E"]("pages/registrationsReceive",{

/***/ "./src/pages/registrationsReceive.tsx":
/*!********************************************!*\
  !*** ./src/pages/registrationsReceive.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/Home */ "./src/styles/pages/Home.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/RegistrationsReceive */ "./src/styles/pages/RegistrationsReceive.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\TG_Fatec\\src\\pages\\registrationsReceive.tsx",
    _this = undefined,
    _s = $RefreshSig$();

// eslint-disable-next-line no-use-before-define






var RegistrationReceive = function RegistrationReceive() {
  _s();

  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createStyles)({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch"
        }
      }
    });
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      nomeDonatario = _useState[0],
      setNomeDonatario = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      telefone = _useState2[0],
      setTelefone = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      celular = _useState3[0],
      setCelular = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      descricao = _useState4[0],
      setDescricao = _useState4[1];

  var getNomeDonatario = function getNomeDonatario(e) {
    setNomeDonatario(e.target.value);
  };

  var getTelefone = function getTelefone(e) {
    setTelefone(e.target.value);
  };

  var getCelular = function getCelular(e) {
    setCelular(e.target.value);
  };

  var getDescricao = function getDescricao(e) {
    setDescricao(e.target.value);
  };

  var donationRequestToCreate = {
    nome: nomeDonatario,
    telefone: parseInt(telefone),
    celular: parseInt(celular),
    descricao: descricao
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.ViewLoginFrame, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.LoginFrame, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Close, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/registrationOptions",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__.default, {
                color: "action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Title, {
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.ForgotLink, {
            children: " \xC9 r\xE1pido e f\xE1cil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Fields2, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "usename",
                placeholder: "Nome Completo" // value={user}
                ,
                onChange: function onChange(e) {
                  getNomeDonatario(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Fields2, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "usename",
                placeholder: "Telefone" // value={user}
                ,
                onChange: function onChange(e) {
                  getTelefone(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Fields2, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "usename",
                placeholder: "Celular" // value={user}
                ,
                onChange: function onChange(e) {
                  getCelular(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.ForgotLink, {
            children: "Fale um pouco sobre voc\xEA:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Fields3, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                onChange: function onChange(e) {
                  getDescricao(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.SigninButton, {
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(RegistrationReceive, "ZDCjJxAhJzNRbKVa7rocUCar+5Y=");

_c = RegistrationReceive;
/* harmony default export */ __webpack_exports__["default"] = (RegistrationReceive);

var _c;

$RefreshReg$(_c, "RegistrationReceive");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbnNSZWNlaXZlLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25SZWNlaXZlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsInVzZVN0YXRlIiwibm9tZURvbmF0YXJpbyIsInNldE5vbWVEb25hdGFyaW8iLCJ0ZWxlZm9uZSIsInNldFRlbGVmb25lIiwiY2VsdWxhciIsInNldENlbHVsYXIiLCJkZXNjcmljYW8iLCJzZXREZXNjcmljYW8iLCJnZXROb21lRG9uYXRhcmlvIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VGVsZWZvbmUiLCJnZXRDZWx1bGFyIiwiZ2V0RGVzY3JpY2FvIiwiZG9uYXRpb25SZXF1ZXN0VG9DcmVhdGUiLCJub21lIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQWdCQSxJQUFNQSxtQkFBaUQsR0FBRyxTQUFwREEsbUJBQW9ELEdBQU07QUFBQTs7QUFDOUQsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxVQUFJLEVBQUU7QUFDSixpQkFBUztBQUNQQyxnQkFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsZUFBSyxFQUFFO0FBRkE7QUFETDtBQURLLEtBQUQsQ0FEZTtBQUFBLEdBQUQsQ0FBNUI7O0FBRDhELGtCQVlwQkMsK0NBQVEsQ0FBQyxFQUFELENBWlk7QUFBQSxNQVl2REMsYUFadUQ7QUFBQSxNQVl4Q0MsZ0JBWndDOztBQUFBLG1CQWE5QkYsK0NBQVEsQ0FBQyxFQUFELENBYnNCO0FBQUEsTUFhdkRHLFFBYnVEO0FBQUEsTUFhN0NDLFdBYjZDOztBQUFBLG1CQWNoQ0osK0NBQVEsQ0FBQyxFQUFELENBZHdCO0FBQUEsTUFjdkRLLE9BZHVEO0FBQUEsTUFjOUNDLFVBZDhDOztBQUFBLG1CQWU1Qk4sK0NBQVEsQ0FBQyxFQUFELENBZm9CO0FBQUEsTUFldkRPLFNBZnVEO0FBQUEsTUFlNUNDLFlBZjRDOztBQWlCOUQsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxDQUFDLEVBQUk7QUFDNUJSLG9CQUFnQixDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUgsQ0FBQyxFQUFJO0FBQ3ZCTixlQUFXLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFKLENBQUMsRUFBSTtBQUN0QkosY0FBVSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBTCxDQUFDLEVBQUk7QUFDeEJGLGdCQUFZLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDRCxHQUZEOztBQVdBLE1BQU1JLHVCQUF1QyxHQUFHO0FBQzlDQyxRQUFJLEVBQUVoQixhQUR3QztBQUU5Q0UsWUFBUSxFQUFFZSxRQUFRLENBQUNmLFFBQUQsQ0FGNEI7QUFHOUNFLFdBQU8sRUFBRWEsUUFBUSxDQUFDYixPQUFELENBSDZCO0FBSTlDRSxhQUFTLEVBQUVBO0FBSm1DLEdBQWhEO0FBT0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLDhFQUFEO0FBQUEsK0JBQ0UsOERBQUMsMEVBQUQ7QUFBQSxrQ0FDRSw4REFBQyxxRUFBRDtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxzQkFBUjtBQUFBLHFDQUNFLDhEQUFDLDZEQUFEO0FBQVcscUJBQUssRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQVNFLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBVUUsOERBQUMsdUVBQUQ7QUFBQSxtQ0FDRSw4REFBQyxvRUFBRDtBQUFBLHFDQUNFO0FBQ0Usb0JBQUksRUFBQyxTQURQO0FBRUUsMkJBQVcsRUFBQyxlQUZkLENBR0U7QUFIRjtBQUlFLHdCQUFRLEVBQUUsa0JBQUFHLENBQUMsRUFBSTtBQUNiRCxrQ0FBZ0IsQ0FBQ0MsQ0FBRCxDQUFoQjtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBc0JFLDhEQUFDLHVFQUFEO0FBQUEsbUNBQ0UsOERBQUMsb0VBQUQ7QUFBQSxxQ0FDRTtBQUNFLG9CQUFJLEVBQUMsU0FEUDtBQUVFLDJCQUFXLEVBQUMsVUFGZCxDQUdFO0FBSEY7QUFJRSx3QkFBUSxFQUFFLGtCQUFBQSxDQUFDLEVBQUk7QUFBQ0csNkJBQVcsQ0FBQ0gsQ0FBRCxDQUFYO0FBQWU7QUFKakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCRixlQWdDRSw4REFBQyx1RUFBRDtBQUFBLG1DQUNFLDhEQUFDLG9FQUFEO0FBQUEscUNBQ0U7QUFDRSxvQkFBSSxFQUFDLFNBRFA7QUFFRSwyQkFBVyxFQUFDLFNBRmQsQ0FHRTtBQUhGO0FBSUUsd0JBQVEsRUFBRSxrQkFBQUEsQ0FBQyxFQUFJO0FBQUNJLDRCQUFVLENBQUNKLENBQUQsQ0FBVjtBQUFjO0FBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQ0YsZUEwQ0UsOERBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUNGLGVBMkNFLDhEQUFDLHVFQUFEO0FBQUEsbUNBQ0UsOERBQUMsb0VBQUQ7QUFBQSxxQ0FDRTtBQUFVLHdCQUFRLEVBQUUsa0JBQUFBLENBQUMsRUFBSTtBQUFDSyw4QkFBWSxDQUFDTCxDQUFELENBQVo7QUFBZ0I7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNDRixlQWdERSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTBERCxDQXpHRDs7R0FBTW5CLG1COztLQUFBQSxtQjtBQTJHTiwrREFBZUEsbUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmF0aW9uc1JlY2VpdmUuODk0N2NmNWI3N2UxMmU2NzM2Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvSG9tZVwiXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXG5cbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiXG5cbmltcG9ydCB7XG4gIEZpZWxkczIsXG4gIEZpZWxkczMsXG4gIEZvcmdvdExpbmssXG4gIExvZ2luRnJhbWUsXG4gIFNpZ25pbkJ1dHRvbixcbiAgVGl0bGUsXG4gIE5hbWUsXG4gIFZpZXdMb2dpbkZyYW1lLFxuICBDbG9zZVxufSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL1JlZ2lzdHJhdGlvbnNSZWNlaXZlXCJcblxuaW50ZXJmYWNlIFJlZ2lzdHJhdGlvblJlY2VpdmVQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG59XG5cbmNvbnN0IFJlZ2lzdHJhdGlvblJlY2VpdmU6IEZDPFJlZ2lzdHJhdGlvblJlY2VpdmVQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgICBjcmVhdGVTdHlsZXMoe1xuICAgICAgcm9vdDoge1xuICAgICAgICBcIiYgPiAqXCI6IHtcbiAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgd2lkdGg6IFwiMjVjaFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICApXG5cbiAgY29uc3QgW25vbWVEb25hdGFyaW8sIHNldE5vbWVEb25hdGFyaW9dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3RlbGVmb25lLCBzZXRUZWxlZm9uZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY2VsdWxhciwgc2V0Q2VsdWxhcl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZGVzY3JpY2FvLCBzZXREZXNjcmljYW9dID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBnZXROb21lRG9uYXRhcmlvID0gZSA9PiB7XG4gICAgc2V0Tm9tZURvbmF0YXJpbyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGdldFRlbGVmb25lID0gZSA9PiB7XG4gICAgc2V0VGVsZWZvbmUoZS50YXJnZXQudmFsdWUpXG4gIH0gIFxuXG4gIGNvbnN0IGdldENlbHVsYXIgPSBlID0+IHtcbiAgICBzZXRDZWx1bGFyKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgZ2V0RGVzY3JpY2FvID0gZSA9PiB7XG4gICAgc2V0RGVzY3JpY2FvKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIFxuICB0eXBlIGRvbmF0aW9uUmVxdWVzdCA9IHtcbiAgICBub21lOiBzdHJpbmcsXG4gICAgdGVsZWZvbmU6IG51bWJlcixcbiAgICBjZWx1bGFyOiBudW1iZXIsXG4gICAgZGVzY3JpY2FvOiBzdHJpbmdcbiAgfVxuXG4gIGNvbnN0IGRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlOmRvbmF0aW9uUmVxdWVzdCA9IHtcbiAgICBub21lOiBub21lRG9uYXRhcmlvLFxuICAgIHRlbGVmb25lOiBwYXJzZUludCh0ZWxlZm9uZSksXG4gICAgY2VsdWxhcjogcGFyc2VJbnQoY2VsdWxhciksXG4gICAgZGVzY3JpY2FvOiBkZXNjcmljYW9cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxWaWV3TG9naW5GcmFtZT5cbiAgICAgICAgICA8TG9naW5GcmFtZT5cbiAgICAgICAgICAgIDxDbG9zZT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RyYXRpb25PcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cImFjdGlvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQ2xvc2U+XG4gICAgICAgICAgICA8VGl0bGU+Q2FkYXN0cmUtc2U8L1RpdGxlPlxuICAgICAgICAgICAgey8qIDxTdWJUaXRsZT48YSBocmVmPVwiI1wiPkZhw6dhIHNldSBjYWRhc3RybyBBUVVJPC9hPjwvU3ViVGl0bGU+ICovfVxuXG4gICAgICAgICAgICA8Rm9yZ290TGluaz4gw4kgcsOhcGlkbyBlIGbDoWNpbDwvRm9yZ290TGluaz5cbiAgICAgICAgICAgIDxGaWVsZHMyPlxuICAgICAgICAgICAgICA8TmFtZT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBDb21wbGV0b1wiXG4gICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17dXNlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Tm9tZURvbmF0YXJpbyhlKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgICA8L0ZpZWxkczI+XG4gICAgICAgICAgICA8RmllbGRzMj5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidXNlbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGVmb25lXCJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge2dldFRlbGVmb25lKGUpfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgICA8L0ZpZWxkczI+XG4gICAgICAgICAgICA8RmllbGRzMj5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidXNlbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlbHVsYXJcIlxuICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7Z2V0Q2VsdWxhcihlKX19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZvcmdvdExpbms+RmFsZSB1bSBwb3VjbyBzb2JyZSB2b2PDqjo8L0ZvcmdvdExpbms+XG4gICAgICAgICAgICA8RmllbGRzMz5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXtlID0+IHtnZXREZXNjcmljYW8oZSl9fS8+XG4gICAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDwvRmllbGRzMz5cbiAgICAgICAgICAgIDxTaWduaW5CdXR0b24+Q2FkYXN0cmUtc2U8L1NpZ25pbkJ1dHRvbj5cbiAgICAgICAgICA8L0xvZ2luRnJhbWU+XG4gICAgICAgIDwvVmlld0xvZ2luRnJhbWU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25SZWNlaXZlXG4iXSwic291cmNlUm9vdCI6IiJ9