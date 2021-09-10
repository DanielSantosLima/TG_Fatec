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
    descricao: descricao,
    ativo: true
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
                _context.next = 7;
                break;
              }

              console.log("Pedido já registrado no seu nome. Entraremos em contato em breve.");
              _context.next = 12;
              break;

            case 7:
              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/donation/orderRegistration', {
                donationRequestToCreate: donationRequestToCreate
              });

            case 9:
              registrationResponse = _context.sent;
              console.log(registrationResponse);

              if (registrationResponse.data.length > 0) {//  console.log("Pedido criado com sucesso!")
              } else {// console.log("Problemas na Criação");
                }

            case 12:
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
                lineNumber: 98,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Title, {
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.ForgotLink, {
            children: " \xC9 r\xE1pido e f\xE1cil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
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
                lineNumber: 107,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
                lineNumber: 119,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
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
                lineNumber: 129,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.ForgotLink, {
            children: "Fale um pouco sobre voc\xEA:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Fields3, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                onChange: function onChange(e) {
                  getDescricao(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_5__.SigninButton, {
            onClick: donationRequestToApi,
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbnNSZWNlaXZlLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25SZWNlaXZlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsInVzZVN0YXRlIiwibm9tZURvbmF0YXJpbyIsInNldE5vbWVEb25hdGFyaW8iLCJ0ZWxlZm9uZSIsInNldFRlbGVmb25lIiwiY2VsdWxhciIsInNldENlbHVsYXIiLCJkZXNjcmljYW8iLCJzZXREZXNjcmljYW8iLCJnZXROb21lRG9uYXRhcmlvIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VGVsZWZvbmUiLCJnZXRDZWx1bGFyIiwiZ2V0RGVzY3JpY2FvIiwiZG9uYXRpb25SZXF1ZXN0VG9DcmVhdGUiLCJub21lIiwiYXRpdm8iLCJkb25hdGlvblJlcXVlc3RUb0FwaSIsImF4aW9zIiwicmVzcG9uc2UiLCJkYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdHJhdGlvblJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTs7QUFNQSxJQUFNQSxtQkFBaUQsR0FBRyxTQUFwREEsbUJBQW9ELEdBQU07QUFBQTs7QUFDOUQsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxVQUFJLEVBQUU7QUFDSixpQkFBUztBQUNQQyxnQkFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsZUFBSyxFQUFFO0FBRkE7QUFETDtBQURLLEtBQUQsQ0FEZTtBQUFBLEdBQUQsQ0FBNUI7O0FBRDhELGtCQVlwQkMsK0NBQVEsQ0FBQyxFQUFELENBWlk7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LDhCQUFZLENBQUNMLENBQUQsQ0FBWjtBQUFpQjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0NGLGVBZ0RFLDhEQUFDLDRFQUFEO0FBQWMsbUJBQU8sRUFBRVMsb0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMERELENBOUhEOztHQUFNNUIsbUI7O0tBQUFBLG1CO0FBZ0lOLCtEQUFlQSxtQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3RyYXRpb25zUmVjZWl2ZS41ZGUyNDUyZDEwNDM3YjZkMjUxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5pbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lXCJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiXG5pbXBvcnQge1xuICBGaWVsZHMyLFxuICBGaWVsZHMzLFxuICBGb3Jnb3RMaW5rLFxuICBMb2dpbkZyYW1lLFxuICBTaWduaW5CdXR0b24sXG4gIFRpdGxlLFxuICBOYW1lLFxuICBWaWV3TG9naW5GcmFtZSxcbiAgQ2xvc2Vcbn0gZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9SZWdpc3RyYXRpb25zUmVjZWl2ZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmludGVyZmFjZSBSZWdpc3RyYXRpb25SZWNlaXZlUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBSZWdpc3RyYXRpb25SZWNlaXZlOiBGQzxSZWdpc3RyYXRpb25SZWNlaXZlUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gICAgY3JlYXRlU3R5bGVzKHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgXCImID4gKlwiOiB7XG4gICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgIHdpZHRoOiBcIjI1Y2hcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgKVxuXG4gIGNvbnN0IFtub21lRG9uYXRhcmlvLCBzZXROb21lRG9uYXRhcmlvXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFt0ZWxlZm9uZSwgc2V0VGVsZWZvbmVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2NlbHVsYXIsIHNldENlbHVsYXJdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Rlc2NyaWNhbywgc2V0RGVzY3JpY2FvXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgZ2V0Tm9tZURvbmF0YXJpbyA9IGUgPT4ge1xuICAgIHNldE5vbWVEb25hdGFyaW8oZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBnZXRUZWxlZm9uZSA9IGUgPT4ge1xuICAgIHNldFRlbGVmb25lKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgZ2V0Q2VsdWxhciA9IGUgPT4ge1xuICAgIHNldENlbHVsYXIoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBnZXREZXNjcmljYW8gPSBlID0+IHtcbiAgICBzZXREZXNjcmljYW8oZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICB0eXBlIGRvbmF0aW9uUmVxdWVzdCA9IHtcbiAgICBub21lOiBzdHJpbmcsXG4gICAgdGVsZWZvbmU6IHN0cmluZyxcbiAgICBjZWx1bGFyOiBzdHJpbmcsXG4gICAgZGVzY3JpY2FvOiBzdHJpbmcsXG4gICAgYXRpdm86IGJvb2xlYW5cbiAgfVxuXG4gIGNvbnN0IGRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlOiBkb25hdGlvblJlcXVlc3QgPSB7XG4gICAgbm9tZTogbm9tZURvbmF0YXJpbyxcbiAgICB0ZWxlZm9uZTogdGVsZWZvbmUsXG4gICAgY2VsdWxhcjogY2VsdWxhcixcbiAgICBkZXNjcmljYW86IGRlc2NyaWNhbyxcbiAgICBhdGl2bzogdHJ1ZVxuICB9XG5cbiAgY29uc3QgZG9uYXRpb25SZXF1ZXN0VG9BcGkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2RvbmF0aW9uL29yZGVyVmVyaWZpY2F0aW9uJywgeyBkb25hdGlvblJlcXVlc3RUb0NyZWF0ZSB9KVxuICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcblxuICAgICAgY29uc29sZS5sb2coXCJQZWRpZG8gasOhIHJlZ2lzdHJhZG8gbm8gc2V1IG5vbWUuIEVudHJhcmVtb3MgZW0gY29udGF0byBlbSBicmV2ZS5cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWdpc3RyYXRpb25SZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZG9uYXRpb24vb3JkZXJSZWdpc3RyYXRpb24nLCB7IGRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdHJhdGlvblJlc3BvbnNlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZWdpc3RyYXRpb25SZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiUGVkaWRvIGNyaWFkbyBjb20gc3VjZXNzbyFcIilcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHJvYmxlbWFzIG5hIENyaWHDp8Ojb1wiKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFZpZXdMb2dpbkZyYW1lPlxuICAgICAgICAgIDxMb2dpbkZyYW1lPlxuICAgICAgICAgICAgPENsb3NlPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdHJhdGlvbk9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwiYWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9DbG9zZT5cbiAgICAgICAgICAgIDxUaXRsZT5DYWRhc3RyZS1zZTwvVGl0bGU+XG4gICAgICAgICAgICB7LyogPFN1YlRpdGxlPjxhIGhyZWY9XCIjXCI+RmHDp2Egc2V1IGNhZGFzdHJvIEFRVUk8L2E+PC9TdWJUaXRsZT4gKi99XG5cbiAgICAgICAgICAgIDxGb3Jnb3RMaW5rPiDDiSByw6FwaWRvIGUgZsOhY2lsPC9Gb3Jnb3RMaW5rPlxuICAgICAgICAgICAgPEZpZWxkczI+XG4gICAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIENvbXBsZXRvXCJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnZXROb21lRG9uYXRhcmlvKGUpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDwvRmllbGRzMj5cbiAgICAgICAgICAgIDxGaWVsZHMyPlxuICAgICAgICAgICAgICA8TmFtZT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsZWZvbmVcIlxuICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGdldFRlbGVmb25lKGUpIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZpZWxkczI+XG4gICAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZWx1bGFyXCJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBnZXRDZWx1bGFyKGUpIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZvcmdvdExpbms+RmFsZSB1bSBwb3VjbyBzb2JyZSB2b2PDqjo8L0ZvcmdvdExpbms+XG4gICAgICAgICAgICA8RmllbGRzMz5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXtlID0+IHsgZ2V0RGVzY3JpY2FvKGUpIH19IC8+XG4gICAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDwvRmllbGRzMz5cbiAgICAgICAgICAgIDxTaWduaW5CdXR0b24gb25DbGljaz17ZG9uYXRpb25SZXF1ZXN0VG9BcGl9PkNhZGFzdHJlLXNlPC9TaWduaW5CdXR0b24+XG4gICAgICAgICAgPC9Mb2dpbkZyYW1lPlxuICAgICAgICA8L1ZpZXdMb2dpbkZyYW1lPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uUmVjZWl2ZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==