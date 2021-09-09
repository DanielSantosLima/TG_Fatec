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
/* harmony import */ var C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ "./src/styles/pages/Home.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/RegistrationsReceive */ "./src/styles/pages/RegistrationsReceive.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\TG_Fatec\\src\\pages\\registrationsReceive.tsx",
    _this = undefined,
    _s = $RefreshSig$();

// eslint-disable-next-line no-use-before-define







var RegistrationReceive = function RegistrationReceive() {
  _s();

  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
    return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.createStyles)({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch"
        }
      }
    });
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      nomeDonatario = _useState[0],
      setNomeDonatario = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      telefone = _useState2[0],
      setTelefone = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      celular = _useState3[0],
      setCelular = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
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
    telefone: telefone,
    celular: celular,
    descricao: descricao
  };

  var donationRequestToApi = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, registrationResponse;
      return C_Users_Daniel_Desktop_TG_Fatec_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/donation/orderVerification', {
                donationRequestToCreate: donationRequestToCreate
              });

            case 2:
              response = _context.sent;

              if (!(response.data.length > 0)) {
                _context.next = 8;
                break;
              }

              console.log(response);
              console.log("Pedido já registrado no seu nome. Entraremos em contato em breve.");
              _context.next = 13;
              break;

            case 8:
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/donation/orderRegistration', {
                donationRequestToCreate: donationRequestToCreate
              });

            case 10:
              registrationResponse = _context.sent;

              if (!(registrationResponse.data.length > 0)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", console.log("Pedido criado com sucesso!"));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function donationRequestToApi() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.ViewLoginFrame, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.LoginFrame, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Close, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/registrationOptions",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__.default, {
                color: "action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Title, {
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.ForgotLink, {
            children: " \xC9 r\xE1pido e f\xE1cil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Fields2, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "usename",
                placeholder: "Nome Completo" // value={user}
                ,
                onChange: function onChange(e) {
                  getNomeDonatario(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Fields2, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "usename",
                placeholder: "Telefone" // value={user}
                ,
                onChange: function onChange(e) {
                  getTelefone(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Fields2, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "usename",
                placeholder: "Celular" // value={user}
                ,
                onChange: function onChange(e) {
                  getCelular(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.ForgotLink, {
            children: "Fale um pouco sobre voc\xEA:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Fields3, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                onChange: function onChange(e) {
                  getDescricao(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.SigninButton, {
            onClick: donationRequestToApi,
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbnNSZWNlaXZlLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25SZWNlaXZlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsInVzZVN0YXRlIiwibm9tZURvbmF0YXJpbyIsInNldE5vbWVEb25hdGFyaW8iLCJ0ZWxlZm9uZSIsInNldFRlbGVmb25lIiwiY2VsdWxhciIsInNldENlbHVsYXIiLCJkZXNjcmljYW8iLCJzZXREZXNjcmljYW8iLCJnZXROb21lRG9uYXRhcmlvIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VGVsZWZvbmUiLCJnZXRDZWx1bGFyIiwiZ2V0RGVzY3JpY2FvIiwiZG9uYXRpb25SZXF1ZXN0VG9DcmVhdGUiLCJub21lIiwiZG9uYXRpb25SZXF1ZXN0VG9BcGkiLCJheGlvcyIsInJlc3BvbnNlIiwiZGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RyYXRpb25SZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7O0FBTUEsSUFBTUEsbUJBQWlELEdBQUcsU0FBcERBLG1CQUFvRCxHQUFNO0FBQUE7O0FBQzlELE1BQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FDM0JDLHNFQUFZLENBQUM7QUFDWEMsVUFBSSxFQUFFO0FBQ0osaUJBQVM7QUFDUEMsZ0JBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBDLGVBQUssRUFBRTtBQUZBO0FBREw7QUFESyxLQUFELENBRGU7QUFBQSxHQUFELENBQTVCOztBQUQ4RCxrQkFZcEJDLCtDQUFRLENBQUMsRUFBRCxDQVpZO0FBQUEsTUFZ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TCxDQUFELENBQVo7QUFBaUI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNDRixlQWdERSw4REFBQyw0RUFBRDtBQUFjLG1CQUFPLEVBQUVRLG9CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTBERCxDQXhIRDs7R0FBTTNCLG1COztLQUFBQSxtQjtBQTBITiwrREFBZUEsbUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmF0aW9uc1JlY2VpdmUuYzZmNWZmOTM2YTEwZDlhNTI1NWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvSG9tZVwiXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIlxuaW1wb3J0IHtcbiAgRmllbGRzMixcbiAgRmllbGRzMyxcbiAgRm9yZ290TGluayxcbiAgTG9naW5GcmFtZSxcbiAgU2lnbmluQnV0dG9uLFxuICBUaXRsZSxcbiAgTmFtZSxcbiAgVmlld0xvZ2luRnJhbWUsXG4gIENsb3NlXG59IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvUmVnaXN0cmF0aW9uc1JlY2VpdmVcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbnRlcmZhY2UgUmVnaXN0cmF0aW9uUmVjZWl2ZVByb3BzIHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbn1cblxuY29uc3QgUmVnaXN0cmF0aW9uUmVjZWl2ZTogRkM8UmVnaXN0cmF0aW9uUmVjZWl2ZVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICAgIGNyZWF0ZVN0eWxlcyh7XG4gICAgICByb290OiB7XG4gICAgICAgIFwiJiA+ICpcIjoge1xuICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICB3aWR0aDogXCIyNWNoXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIClcblxuICBjb25zdCBbbm9tZURvbmF0YXJpbywgc2V0Tm9tZURvbmF0YXJpb10gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbdGVsZWZvbmUsIHNldFRlbGVmb25lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjZWx1bGFyLCBzZXRDZWx1bGFyXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkZXNjcmljYW8sIHNldERlc2NyaWNhb10gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IGdldE5vbWVEb25hdGFyaW8gPSBlID0+IHtcbiAgICBzZXROb21lRG9uYXRhcmlvKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgZ2V0VGVsZWZvbmUgPSBlID0+IHtcbiAgICBzZXRUZWxlZm9uZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGdldENlbHVsYXIgPSBlID0+IHtcbiAgICBzZXRDZWx1bGFyKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgZ2V0RGVzY3JpY2FvID0gZSA9PiB7XG4gICAgc2V0RGVzY3JpY2FvKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgdHlwZSBkb25hdGlvblJlcXVlc3QgPSB7XG4gICAgbm9tZTogc3RyaW5nLFxuICAgIHRlbGVmb25lOiBzdHJpbmcsXG4gICAgY2VsdWxhcjogc3RyaW5nLFxuICAgIGRlc2NyaWNhbzogc3RyaW5nXG4gIH1cblxuICBjb25zdCBkb25hdGlvblJlcXVlc3RUb0NyZWF0ZTogZG9uYXRpb25SZXF1ZXN0ID0ge1xuICAgIG5vbWU6IG5vbWVEb25hdGFyaW8sXG4gICAgdGVsZWZvbmU6IHRlbGVmb25lLFxuICAgIGNlbHVsYXI6IGNlbHVsYXIsXG4gICAgZGVzY3JpY2FvOiBkZXNjcmljYW9cbiAgfVxuXG4gIGNvbnN0IGRvbmF0aW9uUmVxdWVzdFRvQXBpID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9kb25hdGlvbi9vcmRlclZlcmlmaWNhdGlvbicsIHsgZG9uYXRpb25SZXF1ZXN0VG9DcmVhdGUgfSlcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUGVkaWRvIGrDoSByZWdpc3RyYWRvIG5vIHNldSBub21lLiBFbnRyYXJlbW9zIGVtIGNvbnRhdG8gZW0gYnJldmUuXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2RvbmF0aW9uL29yZGVyUmVnaXN0cmF0aW9uJywgeyBkb25hdGlvblJlcXVlc3RUb0NyZWF0ZSB9KVxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uUmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiUGVkaWRvIGNyaWFkbyBjb20gc3VjZXNzbyFcIilcbiAgICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFZpZXdMb2dpbkZyYW1lPlxuICAgICAgICAgIDxMb2dpbkZyYW1lPlxuICAgICAgICAgICAgPENsb3NlPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdHJhdGlvbk9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwiYWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9DbG9zZT5cbiAgICAgICAgICAgIDxUaXRsZT5DYWRhc3RyZS1zZTwvVGl0bGU+XG4gICAgICAgICAgICB7LyogPFN1YlRpdGxlPjxhIGhyZWY9XCIjXCI+RmHDp2Egc2V1IGNhZGFzdHJvIEFRVUk8L2E+PC9TdWJUaXRsZT4gKi99XG5cbiAgICAgICAgICAgIDxGb3Jnb3RMaW5rPiDDiSByw6FwaWRvIGUgZsOhY2lsPC9Gb3Jnb3RMaW5rPlxuICAgICAgICAgICAgPEZpZWxkczI+XG4gICAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIENvbXBsZXRvXCJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnZXROb21lRG9uYXRhcmlvKGUpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDwvRmllbGRzMj5cbiAgICAgICAgICAgIDxGaWVsZHMyPlxuICAgICAgICAgICAgICA8TmFtZT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsZWZvbmVcIlxuICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGdldFRlbGVmb25lKGUpIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZpZWxkczI+XG4gICAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZWx1bGFyXCJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBnZXRDZWx1bGFyKGUpIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZvcmdvdExpbms+RmFsZSB1bSBwb3VjbyBzb2JyZSB2b2PDqjo8L0ZvcmdvdExpbms+XG4gICAgICAgICAgICA8RmllbGRzMz5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXtlID0+IHsgZ2V0RGVzY3JpY2FvKGUpIH19IC8+XG4gICAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDwvRmllbGRzMz5cbiAgICAgICAgICAgIDxTaWduaW5CdXR0b24gb25DbGljaz17ZG9uYXRpb25SZXF1ZXN0VG9BcGl9PkNhZGFzdHJlLXNlPC9TaWduaW5CdXR0b24+XG4gICAgICAgICAgPC9Mb2dpbkZyYW1lPlxuICAgICAgICA8L1ZpZXdMb2dpbkZyYW1lPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uUmVjZWl2ZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==