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

              if (!response) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", console.log("Pedido já registrado no seu nome. Entraremos em contato em breve."));

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/donation/orderRegistration', {
                donationRequestToCreate: donationRequestToCreate
              });

            case 10:
              registrationResponse = _context.sent;

              if (!registrationResponse) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", console.log("Pedido criado com sucesso!"));

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](7);
              throw _context.t0;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 15]]);
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
                lineNumber: 93,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Title, {
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.ForgotLink, {
            children: " \xC9 r\xE1pido e f\xE1cil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
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
                lineNumber: 102,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
                lineNumber: 114,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
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
                lineNumber: 124,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.ForgotLink, {
            children: "Fale um pouco sobre voc\xEA:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Fields3, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                onChange: function onChange(e) {
                  getDescricao(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.SigninButton, {
            onClick: donationRequestToApi,
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbnNSZWNlaXZlLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25SZWNlaXZlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsInVzZVN0YXRlIiwibm9tZURvbmF0YXJpbyIsInNldE5vbWVEb25hdGFyaW8iLCJ0ZWxlZm9uZSIsInNldFRlbGVmb25lIiwiY2VsdWxhciIsInNldENlbHVsYXIiLCJkZXNjcmljYW8iLCJzZXREZXNjcmljYW8iLCJnZXROb21lRG9uYXRhcmlvIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VGVsZWZvbmUiLCJnZXRDZWx1bGFyIiwiZ2V0RGVzY3JpY2FvIiwiZG9uYXRpb25SZXF1ZXN0VG9DcmVhdGUiLCJub21lIiwiZG9uYXRpb25SZXF1ZXN0VG9BcGkiLCJheGlvcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdHJhdGlvblJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTs7QUFNQSxJQUFNQSxtQkFBaUQsR0FBRyxTQUFwREEsbUJBQW9ELEdBQU07QUFBQTs7QUFDOUQsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxVQUFJLEVBQUU7QUFDSixpQkFBUztBQUNQQyxnQkFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsZUFBSyxFQUFFO0FBRkE7QUFETDtBQURLLEtBQUQsQ0FEZTtBQUFBLEdBQUQsQ0FBNUI7O0FBRDhELGtCQVlwQkMsK0NBQVEsQ0FBQyxFQUFELENBWlk7QUFBQSxNQVl2REMsYUFadUQ7QUFBQSxN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QTtBQUFBO0FBQUE7QUFBQSxtQkEzQ0YsZUFnREUsOERBQUMsNEVBQUQ7QUFBYyxtQkFBTyxFQUFFUSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEwREQsQ0F6SEQ7O0dBQU0zQixtQjs7S0FBQUEsbUI7QUEySE4sK0RBQWVBLG1CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdHJhdGlvbnNSZWNlaXZlLmFlMjFmMDk0N2U0MTViOGUwZWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbmltcG9ydCBSZWFjdCwgeyBGQywgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWVcIlxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCJcbmltcG9ydCB7XG4gIEZpZWxkczIsXG4gIEZpZWxkczMsXG4gIEZvcmdvdExpbmssXG4gIExvZ2luRnJhbWUsXG4gIFNpZ25pbkJ1dHRvbixcbiAgVGl0bGUsXG4gIE5hbWUsXG4gIFZpZXdMb2dpbkZyYW1lLFxuICBDbG9zZVxufSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL1JlZ2lzdHJhdGlvbnNSZWNlaXZlXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW50ZXJmYWNlIFJlZ2lzdHJhdGlvblJlY2VpdmVQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG59XG5cbmNvbnN0IFJlZ2lzdHJhdGlvblJlY2VpdmU6IEZDPFJlZ2lzdHJhdGlvblJlY2VpdmVQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgICBjcmVhdGVTdHlsZXMoe1xuICAgICAgcm9vdDoge1xuICAgICAgICBcIiYgPiAqXCI6IHtcbiAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgd2lkdGg6IFwiMjVjaFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICApXG5cbiAgY29uc3QgW25vbWVEb25hdGFyaW8sIHNldE5vbWVEb25hdGFyaW9dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3RlbGVmb25lLCBzZXRUZWxlZm9uZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY2VsdWxhciwgc2V0Q2VsdWxhcl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZGVzY3JpY2FvLCBzZXREZXNjcmljYW9dID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBnZXROb21lRG9uYXRhcmlvID0gZSA9PiB7XG4gICAgc2V0Tm9tZURvbmF0YXJpbyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGdldFRlbGVmb25lID0gZSA9PiB7XG4gICAgc2V0VGVsZWZvbmUoZS50YXJnZXQudmFsdWUpXG4gIH0gIFxuXG4gIGNvbnN0IGdldENlbHVsYXIgPSBlID0+IHtcbiAgICBzZXRDZWx1bGFyKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgZ2V0RGVzY3JpY2FvID0gZSA9PiB7XG4gICAgc2V0RGVzY3JpY2FvKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIFxuICB0eXBlIGRvbmF0aW9uUmVxdWVzdCA9IHtcbiAgICBub21lOiBzdHJpbmcsXG4gICAgdGVsZWZvbmU6IHN0cmluZyxcbiAgICBjZWx1bGFyOiBzdHJpbmcsXG4gICAgZGVzY3JpY2FvOiBzdHJpbmdcbiAgfVxuXG4gIGNvbnN0IGRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlOiBkb25hdGlvblJlcXVlc3QgPSB7XG4gICAgbm9tZTogbm9tZURvbmF0YXJpbyxcbiAgICB0ZWxlZm9uZTogdGVsZWZvbmUsXG4gICAgY2VsdWxhcjogY2VsdWxhcixcbiAgICBkZXNjcmljYW86IGRlc2NyaWNhb1xuICB9XG5cbiAgY29uc3QgZG9uYXRpb25SZXF1ZXN0VG9BcGkgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZG9uYXRpb24vb3JkZXJWZXJpZmljYXRpb24nLCB7ZG9uYXRpb25SZXF1ZXN0VG9DcmVhdGV9KVxuICAgIGlmKHJlc3BvbnNlKXtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlBlZGlkbyBqw6EgcmVnaXN0cmFkbyBubyBzZXUgbm9tZS4gRW50cmFyZW1vcyBlbSBjb250YXRvIGVtIGJyZXZlLlwiKVxuICAgIH1lbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvblJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9kb25hdGlvbi9vcmRlclJlZ2lzdHJhdGlvbicsIHtkb25hdGlvblJlcXVlc3RUb0NyZWF0ZX0pXG4gICAgICAgIGlmKHJlZ2lzdHJhdGlvblJlc3BvbnNlKXtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJQZWRpZG8gY3JpYWRvIGNvbSBzdWNlc3NvIVwiKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxWaWV3TG9naW5GcmFtZT5cbiAgICAgICAgICA8TG9naW5GcmFtZT5cbiAgICAgICAgICAgIDxDbG9zZT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RyYXRpb25PcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cImFjdGlvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQ2xvc2U+XG4gICAgICAgICAgICA8VGl0bGU+Q2FkYXN0cmUtc2U8L1RpdGxlPlxuICAgICAgICAgICAgey8qIDxTdWJUaXRsZT48YSBocmVmPVwiI1wiPkZhw6dhIHNldSBjYWRhc3RybyBBUVVJPC9hPjwvU3ViVGl0bGU+ICovfVxuXG4gICAgICAgICAgICA8Rm9yZ290TGluaz4gw4kgcsOhcGlkbyBlIGbDoWNpbDwvRm9yZ290TGluaz5cbiAgICAgICAgICAgIDxGaWVsZHMyPlxuICAgICAgICAgICAgICA8TmFtZT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBDb21wbGV0b1wiXG4gICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17dXNlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Tm9tZURvbmF0YXJpbyhlKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgICA8L0ZpZWxkczI+XG4gICAgICAgICAgICA8RmllbGRzMj5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidXNlbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGVmb25lXCJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge2dldFRlbGVmb25lKGUpfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgICA8L0ZpZWxkczI+XG4gICAgICAgICAgICA8RmllbGRzMj5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidXNlbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlbHVsYXJcIlxuICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7Z2V0Q2VsdWxhcihlKX19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZvcmdvdExpbms+RmFsZSB1bSBwb3VjbyBzb2JyZSB2b2PDqjo8L0ZvcmdvdExpbms+XG4gICAgICAgICAgICA8RmllbGRzMz5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXtlID0+IHtnZXREZXNjcmljYW8oZSl9fS8+XG4gICAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDwvRmllbGRzMz5cbiAgICAgICAgICAgIDxTaWduaW5CdXR0b24gb25DbGljaz17ZG9uYXRpb25SZXF1ZXN0VG9BcGl9PkNhZGFzdHJlLXNlPC9TaWduaW5CdXR0b24+XG4gICAgICAgICAgPC9Mb2dpbkZyYW1lPlxuICAgICAgICA8L1ZpZXdMb2dpbkZyYW1lPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uUmVjZWl2ZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==