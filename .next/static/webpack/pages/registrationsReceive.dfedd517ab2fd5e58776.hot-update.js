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

  var getNomeDonatario = function getNomeDonatario(e) {
    setNomeDonatario(e.target.value);
  };

  var getTelefone = function getTelefone(e) {
    setTelefone(e.target.value);
  };

  var getCelular = function getCelular(e) {
    setCelular(e.target.value);
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
                lineNumber: 59,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Title, {
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.ForgotLink, {
            children: " \xC9 r\xE1pido e f\xE1cil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
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
                lineNumber: 68,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
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
                lineNumber: 80,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
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
                lineNumber: 90,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.ForgotLink, {
            children: "Fale um pouco sobre voc\xEA:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Fields3, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.Name, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {}, void 0, false, {
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
          }, _this), JSON.stringify(telefone), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_RegistrationsReceive__WEBPACK_IMPORTED_MODULE_3__.SigninButton, {
            children: "Cadastre-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(RegistrationReceive, "zf+7OdzsWJ3hSCrvYnntze/XUCQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbnNSZWNlaXZlLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25SZWNlaXZlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsInVzZVN0YXRlIiwibm9tZURvbmF0YXJpbyIsInNldE5vbWVEb25hdGFyaW8iLCJ0ZWxlZm9uZSIsInNldFRlbGVmb25lIiwiY2VsdWxhciIsInNldENlbHVsYXIiLCJnZXROb21lRG9uYXRhcmlvIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VGVsZWZvbmUiLCJnZXRDZWx1bGFyIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBZ0JBLElBQU1BLG1CQUFpRCxHQUFHLFNBQXBEQSxtQkFBb0QsR0FBTTtBQUFBOztBQUM5RCxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFVBQUksRUFBRTtBQUNKLGlCQUFTO0FBQ1BDLGdCQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxlQUFLLEVBQUU7QUFGQTtBQURMO0FBREssS0FBRCxDQURlO0FBQUEsR0FBRCxDQUE1Qjs7QUFEOEQsa0JBWXBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FaWTtBQUFBLE1BWXZEQyxhQVp1RDtBQUFBLE1BWXhDQyxnQkFad0M7O0FBQUEsbUJBYTlCRiwrQ0FBUSxDQUFDLEVBQUQsQ0Fic0I7QUFBQSxNQWF2REcsUUFidUQ7QUFBQSxNQWE3Q0MsV0FiNkM7O0FBQUEsbUJBY2hDSiwrQ0FBUSxDQUFDLEVBQUQsQ0Fkd0I7QUFBQSxNQWN2REssT0FkdUQ7QUFBQSxNQWM5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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEyREQsQ0F2RkQ7O0dBQU1aLG1COztLQUFBQSxtQjtBQXlGTiwrREFBZUEsbUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmF0aW9uc1JlY2VpdmUuZGZlZGQ1MTdhYjJmZDVlNTg3NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvSG9tZVwiXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiXG5cbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiXG5cbmltcG9ydCB7XG4gIEZpZWxkczIsXG4gIEZpZWxkczMsXG4gIEZvcmdvdExpbmssXG4gIExvZ2luRnJhbWUsXG4gIFNpZ25pbkJ1dHRvbixcbiAgVGl0bGUsXG4gIE5hbWUsXG4gIFZpZXdMb2dpbkZyYW1lLFxuICBDbG9zZVxufSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL1JlZ2lzdHJhdGlvbnNSZWNlaXZlXCJcblxuaW50ZXJmYWNlIFJlZ2lzdHJhdGlvblJlY2VpdmVQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG59XG5cbmNvbnN0IFJlZ2lzdHJhdGlvblJlY2VpdmU6IEZDPFJlZ2lzdHJhdGlvblJlY2VpdmVQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgICBjcmVhdGVTdHlsZXMoe1xuICAgICAgcm9vdDoge1xuICAgICAgICBcIiYgPiAqXCI6IHtcbiAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgd2lkdGg6IFwiMjVjaFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICApXG5cbiAgY29uc3QgW25vbWVEb25hdGFyaW8sIHNldE5vbWVEb25hdGFyaW9dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3RlbGVmb25lLCBzZXRUZWxlZm9uZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY2VsdWxhciwgc2V0Q2VsdWxhcl0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IGdldE5vbWVEb25hdGFyaW8gPSBlID0+IHtcbiAgICBzZXROb21lRG9uYXRhcmlvKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgZ2V0VGVsZWZvbmUgPSBlID0+IHtcbiAgICBzZXRUZWxlZm9uZShlLnRhcmdldC52YWx1ZSlcbiAgfSAgXG5cbiAgY29uc3QgZ2V0Q2VsdWxhciA9IGUgPT4ge1xuICAgIHNldENlbHVsYXIoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Vmlld0xvZ2luRnJhbWU+XG4gICAgICAgICAgPExvZ2luRnJhbWU+XG4gICAgICAgICAgICA8Q2xvc2U+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVnaXN0cmF0aW9uT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxDbG9zZUljb24gY29sb3I9XCJhY3Rpb25cIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0Nsb3NlPlxuICAgICAgICAgICAgPFRpdGxlPkNhZGFzdHJlLXNlPC9UaXRsZT5cbiAgICAgICAgICAgIHsvKiA8U3ViVGl0bGU+PGEgaHJlZj1cIiNcIj5GYcOnYSBzZXUgY2FkYXN0cm8gQVFVSTwvYT48L1N1YlRpdGxlPiAqL31cblxuICAgICAgICAgICAgPEZvcmdvdExpbms+IMOJIHLDoXBpZG8gZSBmw6FjaWw8L0ZvcmdvdExpbms+XG4gICAgICAgICAgICA8RmllbGRzMj5cbiAgICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidXNlbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgQ29tcGxldG9cIlxuICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdldE5vbWVEb25hdGFyaW8oZSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZpZWxkczI+XG4gICAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxlZm9uZVwiXG4gICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17dXNlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtnZXRUZWxlZm9uZShlKX19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPC9GaWVsZHMyPlxuICAgICAgICAgICAgPEZpZWxkczI+XG4gICAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZWx1bGFyXCJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge2dldENlbHVsYXIoZSl9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDwvRmllbGRzMj5cbiAgICAgICAgICAgIDxGb3Jnb3RMaW5rPkZhbGUgdW0gcG91Y28gc29icmUgdm9jw6o6PC9Gb3Jnb3RMaW5rPlxuICAgICAgICAgICAgPEZpZWxkczM+XG4gICAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSAvPlxuICAgICAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgICA8L0ZpZWxkczM+XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkodGVsZWZvbmUpfVxuICAgICAgICAgICAgPFNpZ25pbkJ1dHRvbj5DYWRhc3RyZS1zZTwvU2lnbmluQnV0dG9uPlxuICAgICAgICAgIDwvTG9naW5GcmFtZT5cbiAgICAgICAgPC9WaWV3TG9naW5GcmFtZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblJlY2VpdmVcbiJdLCJzb3VyY2VSb290IjoiIn0=