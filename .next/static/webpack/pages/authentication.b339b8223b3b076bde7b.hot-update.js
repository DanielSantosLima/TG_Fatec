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
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('/api/user/verfyUser', {
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


/***/ }),

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ r; },
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ I; },
/* harmony export */   "parsePath": function() { return /* binding */ J; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C= true?function(b){return Object.freeze(b)}:0;function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(k){}}}function E(b){b.preventDefault();b.returnValue=""}
function F(){var b=[];return{get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(k){return k!==h})}},call:function(h){b.forEach(function(k){return k&&k(h)})}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname,k=b.search;b=b.hash;return(void 0===h?"/":h)+(void 0===k?"":k)+(void 0===b?"":b)}
function J(b){var h={};if(b){var k=b.indexOf("#");0<=k&&(h.hash=b.substr(k),b=b.substr(0,k));k=b.indexOf("?");0<=k&&(h.search=b.substr(k),b=b.substr(0,k));b&&(h.pathname=b)}return h}
function createBrowserHistory(b){function h(){var c=p.location,a=m.state||{};return[a.idx,C({pathname:c.pathname,search:c.search,hash:c.hash,state:a.usr||null,key:a.key||"default"})]}function k(c){return"string"===typeof c?c:I(c)}function x(c,a){void 0===a&&(a=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},q,"string"===typeof c?J(c):c,{state:a,key:H()}))}function z(c){t=c;c=h();v=c[0];q=c[1];d.call({action:t,location:q})}function A(c,a){function e(){A(c,a)}var l=r.Push,g=x(c,a);if(!f.length||(f.call({action:l,
location:g,retry:e}),!1)){var n=[{usr:g.state,key:g.key,idx:v+1},k(g)];g=n[0];n=n[1];try{m.pushState(g,"",n)}catch(G){p.location.assign(n)}z(l)}}function y(c,a){function e(){y(c,a)}var l=r.Replace,g=x(c,a);f.length&&(f.call({action:l,location:g,retry:e}),1)||(g=[{usr:g.state,key:g.key,idx:v},k(g)],m.replaceState(g[0],"",g[1]),z(l))}function w(c){m.go(c)}void 0===b&&(b={});b=b.window;var p=void 0===b?document.defaultView:b,m=p.history,u=null;p.addEventListener("popstate",function(){if(u)f.call(u),
u=null;else{var c=r.Pop,a=h(),e=a[0];a=a[1];if(f.length)if(null!=e){var l=v-e;l&&(u={action:c,location:a,retry:function(){w(-1*l)}},w(l))}else true?D(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."):0;else z(c)}});var t=
r.Pop;b=h();var v=b[0],q=b[1],d=F(),f=F();null==v&&(v=0,m.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},m.state,{idx:v}),""));return{get action(){return t},get location(){return q},createHref:k,push:A,replace:y,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return d.push(c)},block:function(c){var a=f.push(c);1===f.length&&p.addEventListener("beforeunload",E);return function(){a();f.length||p.removeEventListener("beforeunload",E)}}}};
function createHashHistory(b){function h(){var a=J(m.location.hash.substr(1)),e=a.pathname,l=a.search;a=a.hash;var g=u.state||{};return[g.idx,C({pathname:void 0===e?"/":e,search:void 0===l?"":l,hash:void 0===a?"":a,state:g.usr||null,key:g.key||"default"})]}function k(){if(t)c.call(t),t=null;else{var a=r.Pop,e=h(),l=e[0];e=e[1];if(c.length)if(null!=l){var g=q-l;g&&(t={action:a,location:e,retry:function(){p(-1*g)}},p(g))}else true?D(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."):
0;else A(a)}}function x(a){var e=document.querySelector("base"),l="";e&&e.getAttribute("href")&&(e=m.location.href,l=e.indexOf("#"),l=-1===l?e:e.slice(0,l));return l+"#"+("string"===typeof a?a:I(a))}function z(a,e){void 0===e&&(e=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},d,"string"===typeof a?J(a):a,{state:e,key:H()}))}function A(a){v=a;a=h();q=a[0];d=a[1];f.call({action:v,location:d})}function y(a,e){function l(){y(a,e)}var g=r.Push,n=z(a,e); true?D("/"===n.pathname.charAt(0),
"Relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")"):0;if(!c.length||(c.call({action:g,location:n,retry:l}),!1)){var G=[{usr:n.state,key:n.key,idx:q+1},x(n)];n=G[0];G=G[1];try{u.pushState(n,"",G)}catch(K){m.location.assign(G)}A(g)}}function w(a,e){function l(){w(a,e)}var g=r.Replace,n=z(a,e); true?D("/"===n.pathname.charAt(0),"Relative pathnames are not supported in hash history.replace("+JSON.stringify(a)+")"):0;c.length&&(c.call({action:g,
location:n,retry:l}),1)||(n=[{usr:n.state,key:n.key,idx:q},x(n)],u.replaceState(n[0],"",n[1]),A(g))}function p(a){u.go(a)}void 0===b&&(b={});b=b.window;var m=void 0===b?document.defaultView:b,u=m.history,t=null;m.addEventListener("popstate",k);m.addEventListener("hashchange",function(){var a=h()[1];I(a)!==I(d)&&k()});var v=r.Pop;b=h();var q=b[0],d=b[1],f=F(),c=F();null==q&&(q=0,u.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},u.state,{idx:q}),""));return{get action(){return v},get location(){return d},createHref:x,push:y,
replace:w,go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(a){return f.push(a)},block:function(a){var e=c.push(a);1===c.length&&m.addEventListener("beforeunload",E);return function(){e();c.length||m.removeEventListener("beforeunload",E)}}}};
function createMemoryHistory(b){function h(d,f){void 0===f&&(f=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},t,"string"===typeof d?J(d):d,{state:f,key:H()}))}function k(d,f,c){return!q.length||(q.call({action:d,location:f,retry:c}),!1)}function x(d,f){u=d;t=f;v.call({action:u,location:t})}function z(d,f){var c=r.Push,a=h(d,f); true?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.push("+JSON.stringify(d)+")"):0;k(c,a,function(){z(d,f)})&&
(m+=1,p.splice(m,p.length,a),x(c,a))}function A(d,f){var c=r.Replace,a=h(d,f); true?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.replace("+JSON.stringify(d)+")"):0;k(c,a,function(){A(d,f)})&&(p[m]=a,x(c,a))}function y(d){var f=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[f];k(c,a,function(){y(d)})&&(m=f,x(c,a))}void 0===b&&(b={});var w=b;b=w.initialEntries;w=w.initialIndex;var p=(void 0===b?["/"]:b).map(function(d){var f=
C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({pathname:"/",search:"",hash:"",state:null,key:H()},"string"===typeof d?J(d):d)); true?D("/"===f.pathname.charAt(0),"Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: "+JSON.stringify(d)+")"):0;return f}),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return{get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return"string"===typeof d?
d:I(d)},push:z,replace:A,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}};
//# sourceMappingURL=index.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMiXSwibmFtZXMiOlsiaGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiQXV0aGVudGljYXRpb24iLCJ1c2VTdGF0ZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2V0VXNlckNvbnRlbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRQYXNzd3JvZENvbnRlbnQiLCJ1c2VyVG9WZXJpZnkiLCJuYW1lIiwidmVyaWZ5VXNlciIsInVzZXIiLCJheGlvcyIsInVzZXJSZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyw2REFBb0IsRUFBbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkEsSUFBTUMsY0FBdUMsR0FBRyxTQUExQ0EsY0FBMEMsR0FBTTtBQUFBOztBQUFBLGtCQUNwQkMsK0NBQVEsQ0FBQyxFQUFELENBRFk7QUFBQSxNQUM3Q0MsUUFENkM7QUFBQSxNQUNuQ0MsV0FEbUM7O0FBQUEsbUJBRXBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGWTtBQUFBLE1BRTdDRyxRQUY2QztBQUFBLE1BRW5DQyxXQUZtQzs7QUFLcEQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUk7QUFDMUJKLGVBQVcsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBSCxDQUFDLEVBQUk7QUFDOUJGLGVBQVcsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBRkQ7O0FB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QkFBZ0IsU0FBUyx3QkFBd0I7QUFDaGUsT0FBTyx1Q0FBdUMsTUFBTSxvQkFBb0IsS0FBSyxvQkFBb0IsaUJBQWlCLG1CQUFtQixvQkFBaUk7QUFDdFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aGVudGljYXRpb24uYjMzOWI4MjIzYjNiMDc2YmRlN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5sZXQgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgTG9ja0ljb24sIE1haWxJY29uIH0gZnJvbSBcIi4uL3N0eWxlcy9pY29uc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQge1xyXG4gIEZpZWxkcyxcclxuICBGb3Jnb3RMaW5rLFxyXG4gIExvZ2luRnJhbWUsXHJcbiAgTG9nbyxcclxuICBQYXNzd29yZCxcclxuICBTaWduaW5CdXR0b24sXHJcbiAgVGl0bGUsXHJcbiAgVXNlcm5hbWUsXHJcbiAgVmlld0xvZ2luRnJhbWVcclxufSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0F1dGhlbnRpY2F0aW9uXCJcclxuXHJcbmludGVyZmFjZSBBdXRoZW50aWNhdGlvblByb3BzIHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5jb25zdCBBdXRoZW50aWNhdGlvbjogRkM8QXV0aGVudGljYXRpb25Qcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcclxuICBcclxuXHJcbiAgY29uc3Qgc2V0VXNlckNvbnRlbnQgPSBlID0+IHtcclxuICAgIHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0UGFzc3dyb2RDb250ZW50ID0gZSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHR5cGUgZGVmYXVsdFVzZXIgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBwYXNzd29yZDogc3RyaW5nXHJcbiAgfVxyXG5cclxuICBsZXQgdXNlclRvVmVyaWZ5OiBkZWZhdWx0VXNlciA9IHtcclxuICAgIG5hbWU6IHVzZXJOYW1lLFxyXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgfVxyXG5cclxuICBjb25zdCB2ZXJpZnlVc2VyID0gYXN5bmMgKHVzZXI6IGRlZmF1bHRVc2VyKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VzZXIvdmVyZnlVc2VyJywge3VzZXJUb1ZlcmlmeX0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFZpZXdMb2dpbkZyYW1lPlxyXG4gICAgICA8TG9naW5GcmFtZT5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL29saG9zZG9iZW0ub25nLmJyL1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8VGl0bGU+T2xob3MgZG8gQmVtPC9UaXRsZT5cclxuICAgICAgICB7LyogPFN1YlRpdGxlPjxhIGhyZWY9XCIjXCI+RmHDp2Egc2V1IGNhZGFzdHJvIEFRVUk8L2E+PC9TdWJUaXRsZT4gKi99XHJcbiAgICAgICAgPEZvcmdvdExpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdHJhdGlvbk9wdGlvbnNcIj5GQcOHQSBTRVUgQ0FEQVNUUk8gQVFVSTwvTGluaz5cclxuICAgICAgICA8L0ZvcmdvdExpbms+XHJcbiAgICAgICAgPEZpZWxkcz5cclxuICAgICAgICAgIDxVc2VybmFtZT5cclxuICAgICAgICAgICAgPE1haWxJY29uIHNpemU9ezJ9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ1c2VuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzdcOhcmlvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFVzZXJDb250ZW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Vc2VybmFtZT5cclxuXHJcbiAgICAgICAgICA8UGFzc3dvcmQ+XHJcbiAgICAgICAgICAgIDxMb2NrSWNvbiAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VuaGFcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0UGFzc3dyb2RDb250ZW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9QYXNzd29yZD5cclxuICAgICAgICA8L0ZpZWxkcz5cclxuXHJcbiAgICAgICAgPFNpZ25pbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHZlcmlmeVVzZXJ9fT5Mb2dpbjwvU2lnbmluQnV0dG9uPlxyXG5cclxuICAgICAgICA8Rm9yZ290TGluaz5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvcmVjdXBlcmF0aW9uXCI+IEVzcXVlY2kgbWluaGEgc2VuaGE8L2E+XHJcbiAgICAgICAgPC9Gb3Jnb3RMaW5rPlxyXG4gICAgICA8L0xvZ2luRnJhbWU+XHJcbiAgICA8L1ZpZXdMb2dpbkZyYW1lPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRpb25cclxuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20nQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7dmFyIHIsQj1yfHwocj17fSk7Qi5Qb3A9XCJQT1BcIjtCLlB1c2g9XCJQVVNIXCI7Qi5SZXBsYWNlPVwiUkVQTEFDRVwiO3ZhciBDPVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ZnVuY3Rpb24oYil7cmV0dXJuIE9iamVjdC5mcmVlemUoYil9OmZ1bmN0aW9uKGIpe3JldHVybiBifTtmdW5jdGlvbiBEKGIsaCl7aWYoIWIpe1widW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmY29uc29sZS53YXJuKGgpO3RyeXt0aHJvdyBFcnJvcihoKTt9Y2F0Y2goayl7fX19ZnVuY3Rpb24gRShiKXtiLnByZXZlbnREZWZhdWx0KCk7Yi5yZXR1cm5WYWx1ZT1cIlwifVxuZnVuY3Rpb24gRigpe3ZhciBiPVtdO3JldHVybntnZXQgbGVuZ3RoKCl7cmV0dXJuIGIubGVuZ3RofSxwdXNoOmZ1bmN0aW9uKGgpe2IucHVzaChoKTtyZXR1cm4gZnVuY3Rpb24oKXtiPWIuZmlsdGVyKGZ1bmN0aW9uKGspe3JldHVybiBrIT09aH0pfX0sY2FsbDpmdW5jdGlvbihoKXtiLmZvckVhY2goZnVuY3Rpb24oayl7cmV0dXJuIGsmJmsoaCl9KX19fWZ1bmN0aW9uIEgoKXtyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsOCl9ZnVuY3Rpb24gSShiKXt2YXIgaD1iLnBhdGhuYW1lLGs9Yi5zZWFyY2g7Yj1iLmhhc2g7cmV0dXJuKHZvaWQgMD09PWg/XCIvXCI6aCkrKHZvaWQgMD09PWs/XCJcIjprKSsodm9pZCAwPT09Yj9cIlwiOmIpfVxuZnVuY3Rpb24gSihiKXt2YXIgaD17fTtpZihiKXt2YXIgaz1iLmluZGV4T2YoXCIjXCIpOzA8PWsmJihoLmhhc2g9Yi5zdWJzdHIoayksYj1iLnN1YnN0cigwLGspKTtrPWIuaW5kZXhPZihcIj9cIik7MDw9ayYmKGguc2VhcmNoPWIuc3Vic3RyKGspLGI9Yi5zdWJzdHIoMCxrKSk7YiYmKGgucGF0aG5hbWU9Yil9cmV0dXJuIGh9XG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShiKXtmdW5jdGlvbiBoKCl7dmFyIGM9cC5sb2NhdGlvbixhPW0uc3RhdGV8fHt9O3JldHVyblthLmlkeCxDKHtwYXRobmFtZTpjLnBhdGhuYW1lLHNlYXJjaDpjLnNlYXJjaCxoYXNoOmMuaGFzaCxzdGF0ZTphLnVzcnx8bnVsbCxrZXk6YS5rZXl8fFwiZGVmYXVsdFwifSldfWZ1bmN0aW9uIGsoYyl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBjP2M6SShjKX1mdW5jdGlvbiB4KGMsYSl7dm9pZCAwPT09YSYmKGE9bnVsbCk7cmV0dXJuIEMoX2V4dGVuZHMoe30scSxcInN0cmluZ1wiPT09dHlwZW9mIGM/SihjKTpjLHtzdGF0ZTphLGtleTpIKCl9KSl9ZnVuY3Rpb24geihjKXt0PWM7Yz1oKCk7dj1jWzBdO3E9Y1sxXTtkLmNhbGwoe2FjdGlvbjp0LGxvY2F0aW9uOnF9KX1mdW5jdGlvbiBBKGMsYSl7ZnVuY3Rpb24gZSgpe0EoYyxhKX12YXIgbD1yLlB1c2gsZz14KGMsYSk7aWYoIWYubGVuZ3RofHwoZi5jYWxsKHthY3Rpb246bCxcbmxvY2F0aW9uOmcscmV0cnk6ZX0pLCExKSl7dmFyIG49W3t1c3I6Zy5zdGF0ZSxrZXk6Zy5rZXksaWR4OnYrMX0sayhnKV07Zz1uWzBdO249blsxXTt0cnl7bS5wdXNoU3RhdGUoZyxcIlwiLG4pfWNhdGNoKEcpe3AubG9jYXRpb24uYXNzaWduKG4pfXoobCl9fWZ1bmN0aW9uIHkoYyxhKXtmdW5jdGlvbiBlKCl7eShjLGEpfXZhciBsPXIuUmVwbGFjZSxnPXgoYyxhKTtmLmxlbmd0aCYmKGYuY2FsbCh7YWN0aW9uOmwsbG9jYXRpb246ZyxyZXRyeTplfSksMSl8fChnPVt7dXNyOmcuc3RhdGUsa2V5Omcua2V5LGlkeDp2fSxrKGcpXSxtLnJlcGxhY2VTdGF0ZShnWzBdLFwiXCIsZ1sxXSkseihsKSl9ZnVuY3Rpb24gdyhjKXttLmdvKGMpfXZvaWQgMD09PWImJihiPXt9KTtiPWIud2luZG93O3ZhciBwPXZvaWQgMD09PWI/ZG9jdW1lbnQuZGVmYXVsdFZpZXc6YixtPXAuaGlzdG9yeSx1PW51bGw7cC5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixmdW5jdGlvbigpe2lmKHUpZi5jYWxsKHUpLFxudT1udWxsO2Vsc2V7dmFyIGM9ci5Qb3AsYT1oKCksZT1hWzBdO2E9YVsxXTtpZihmLmxlbmd0aClpZihudWxsIT1lKXt2YXIgbD12LWU7bCYmKHU9e2FjdGlvbjpjLGxvY2F0aW9uOmEscmV0cnk6ZnVuY3Rpb24oKXt3KC0xKmwpfX0sdyhsKSl9ZWxzZVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RCghMSxcIllvdSBhcmUgdHJ5aW5nIHRvIGJsb2NrIGEgUE9QIG5hdmlnYXRpb24gdG8gYSBsb2NhdGlvbiB0aGF0IHdhcyBub3QgY3JlYXRlZCBieSB0aGUgaGlzdG9yeSBsaWJyYXJ5LiBUaGUgYmxvY2sgd2lsbCBmYWlsIHNpbGVudGx5IGluIHByb2R1Y3Rpb24sIGJ1dCBpbiBnZW5lcmFsIHlvdSBzaG91bGQgZG8gYWxsIG5hdmlnYXRpb24gd2l0aCB0aGUgaGlzdG9yeSBsaWJyYXJ5IChpbnN0ZWFkIG9mIHVzaW5nIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSBkaXJlY3RseSkgdG8gYXZvaWQgdGhpcyBzaXR1YXRpb24uXCIpOnZvaWQgMDtlbHNlIHooYyl9fSk7dmFyIHQ9XG5yLlBvcDtiPWgoKTt2YXIgdj1iWzBdLHE9YlsxXSxkPUYoKSxmPUYoKTtudWxsPT12JiYodj0wLG0ucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LG0uc3RhdGUse2lkeDp2fSksXCJcIikpO3JldHVybntnZXQgYWN0aW9uKCl7cmV0dXJuIHR9LGdldCBsb2NhdGlvbigpe3JldHVybiBxfSxjcmVhdGVIcmVmOmsscHVzaDpBLHJlcGxhY2U6eSxnbzp3LGJhY2s6ZnVuY3Rpb24oKXt3KC0xKX0sZm9yd2FyZDpmdW5jdGlvbigpe3coMSl9LGxpc3RlbjpmdW5jdGlvbihjKXtyZXR1cm4gZC5wdXNoKGMpfSxibG9jazpmdW5jdGlvbihjKXt2YXIgYT1mLnB1c2goYyk7MT09PWYubGVuZ3RoJiZwLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIixFKTtyZXR1cm4gZnVuY3Rpb24oKXthKCk7Zi5sZW5ndGh8fHAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLEUpfX19fTtcbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoKXt2YXIgYT1KKG0ubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpLGU9YS5wYXRobmFtZSxsPWEuc2VhcmNoO2E9YS5oYXNoO3ZhciBnPXUuc3RhdGV8fHt9O3JldHVybltnLmlkeCxDKHtwYXRobmFtZTp2b2lkIDA9PT1lP1wiL1wiOmUsc2VhcmNoOnZvaWQgMD09PWw/XCJcIjpsLGhhc2g6dm9pZCAwPT09YT9cIlwiOmEsc3RhdGU6Zy51c3J8fG51bGwsa2V5Omcua2V5fHxcImRlZmF1bHRcIn0pXX1mdW5jdGlvbiBrKCl7aWYodCljLmNhbGwodCksdD1udWxsO2Vsc2V7dmFyIGE9ci5Qb3AsZT1oKCksbD1lWzBdO2U9ZVsxXTtpZihjLmxlbmd0aClpZihudWxsIT1sKXt2YXIgZz1xLWw7ZyYmKHQ9e2FjdGlvbjphLGxvY2F0aW9uOmUscmV0cnk6ZnVuY3Rpb24oKXtwKC0xKmcpfX0scChnKSl9ZWxzZVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RCghMSxcIllvdSBhcmUgdHJ5aW5nIHRvIGJsb2NrIGEgUE9QIG5hdmlnYXRpb24gdG8gYSBsb2NhdGlvbiB0aGF0IHdhcyBub3QgY3JlYXRlZCBieSB0aGUgaGlzdG9yeSBsaWJyYXJ5LiBUaGUgYmxvY2sgd2lsbCBmYWlsIHNpbGVudGx5IGluIHByb2R1Y3Rpb24sIGJ1dCBpbiBnZW5lcmFsIHlvdSBzaG91bGQgZG8gYWxsIG5hdmlnYXRpb24gd2l0aCB0aGUgaGlzdG9yeSBsaWJyYXJ5IChpbnN0ZWFkIG9mIHVzaW5nIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSBkaXJlY3RseSkgdG8gYXZvaWQgdGhpcyBzaXR1YXRpb24uXCIpOlxudm9pZCAwO2Vsc2UgQShhKX19ZnVuY3Rpb24geChhKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKSxsPVwiXCI7ZSYmZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpJiYoZT1tLmxvY2F0aW9uLmhyZWYsbD1lLmluZGV4T2YoXCIjXCIpLGw9LTE9PT1sP2U6ZS5zbGljZSgwLGwpKTtyZXR1cm4gbCtcIiNcIisoXCJzdHJpbmdcIj09PXR5cGVvZiBhP2E6SShhKSl9ZnVuY3Rpb24geihhLGUpe3ZvaWQgMD09PWUmJihlPW51bGwpO3JldHVybiBDKF9leHRlbmRzKHt9LGQsXCJzdHJpbmdcIj09PXR5cGVvZiBhP0ooYSk6YSx7c3RhdGU6ZSxrZXk6SCgpfSkpfWZ1bmN0aW9uIEEoYSl7dj1hO2E9aCgpO3E9YVswXTtkPWFbMV07Zi5jYWxsKHthY3Rpb246dixsb2NhdGlvbjpkfSl9ZnVuY3Rpb24geShhLGUpe2Z1bmN0aW9uIGwoKXt5KGEsZSl9dmFyIGc9ci5QdXNoLG49eihhLGUpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PW4ucGF0aG5hbWUuY2hhckF0KDApLFxuXCJSZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gaGFzaCBoaXN0b3J5LnB1c2goXCIrSlNPTi5zdHJpbmdpZnkoYSkrXCIpXCIpOnZvaWQgMDtpZighYy5sZW5ndGh8fChjLmNhbGwoe2FjdGlvbjpnLGxvY2F0aW9uOm4scmV0cnk6bH0pLCExKSl7dmFyIEc9W3t1c3I6bi5zdGF0ZSxrZXk6bi5rZXksaWR4OnErMX0seChuKV07bj1HWzBdO0c9R1sxXTt0cnl7dS5wdXNoU3RhdGUobixcIlwiLEcpfWNhdGNoKEspe20ubG9jYXRpb24uYXNzaWduKEcpfUEoZyl9fWZ1bmN0aW9uIHcoYSxlKXtmdW5jdGlvbiBsKCl7dyhhLGUpfXZhciBnPXIuUmVwbGFjZSxuPXooYSxlKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT1uLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBoYXNoIGhpc3RvcnkucmVwbGFjZShcIitKU09OLnN0cmluZ2lmeShhKStcIilcIik6dm9pZCAwO2MubGVuZ3RoJiYoYy5jYWxsKHthY3Rpb246ZyxcbmxvY2F0aW9uOm4scmV0cnk6bH0pLDEpfHwobj1be3VzcjpuLnN0YXRlLGtleTpuLmtleSxpZHg6cX0seChuKV0sdS5yZXBsYWNlU3RhdGUoblswXSxcIlwiLG5bMV0pLEEoZykpfWZ1bmN0aW9uIHAoYSl7dS5nbyhhKX12b2lkIDA9PT1iJiYoYj17fSk7Yj1iLndpbmRvdzt2YXIgbT12b2lkIDA9PT1iP2RvY3VtZW50LmRlZmF1bHRWaWV3OmIsdT1tLmhpc3RvcnksdD1udWxsO20uYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsayk7bS5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGE9aCgpWzFdO0koYSkhPT1JKGQpJiZrKCl9KTt2YXIgdj1yLlBvcDtiPWgoKTt2YXIgcT1iWzBdLGQ9YlsxXSxmPUYoKSxjPUYoKTtudWxsPT1xJiYocT0wLHUucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LHUuc3RhdGUse2lkeDpxfSksXCJcIikpO3JldHVybntnZXQgYWN0aW9uKCl7cmV0dXJuIHZ9LGdldCBsb2NhdGlvbigpe3JldHVybiBkfSxjcmVhdGVIcmVmOngscHVzaDp5LFxucmVwbGFjZTp3LGdvOnAsYmFjazpmdW5jdGlvbigpe3AoLTEpfSxmb3J3YXJkOmZ1bmN0aW9uKCl7cCgxKX0sbGlzdGVuOmZ1bmN0aW9uKGEpe3JldHVybiBmLnB1c2goYSl9LGJsb2NrOmZ1bmN0aW9uKGEpe3ZhciBlPWMucHVzaChhKTsxPT09Yy5sZW5ndGgmJm0uYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLEUpO3JldHVybiBmdW5jdGlvbigpe2UoKTtjLmxlbmd0aHx8bS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSl9fX19O1xuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShiKXtmdW5jdGlvbiBoKGQsZil7dm9pZCAwPT09ZiYmKGY9bnVsbCk7cmV0dXJuIEMoX2V4dGVuZHMoe30sdCxcInN0cmluZ1wiPT09dHlwZW9mIGQ/SihkKTpkLHtzdGF0ZTpmLGtleTpIKCl9KSl9ZnVuY3Rpb24gayhkLGYsYyl7cmV0dXJuIXEubGVuZ3RofHwocS5jYWxsKHthY3Rpb246ZCxsb2NhdGlvbjpmLHJldHJ5OmN9KSwhMSl9ZnVuY3Rpb24geChkLGYpe3U9ZDt0PWY7di5jYWxsKHthY3Rpb246dSxsb2NhdGlvbjp0fSl9ZnVuY3Rpb24geihkLGYpe3ZhciBjPXIuUHVzaCxhPWgoZCxmKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT10LnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBtZW1vcnkgaGlzdG9yeS5wdXNoKFwiK0pTT04uc3RyaW5naWZ5KGQpK1wiKVwiKTp2b2lkIDA7ayhjLGEsZnVuY3Rpb24oKXt6KGQsZil9KSYmXG4obSs9MSxwLnNwbGljZShtLHAubGVuZ3RoLGEpLHgoYyxhKSl9ZnVuY3Rpb24gQShkLGYpe3ZhciBjPXIuUmVwbGFjZSxhPWgoZCxmKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT10LnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBtZW1vcnkgaGlzdG9yeS5yZXBsYWNlKFwiK0pTT04uc3RyaW5naWZ5KGQpK1wiKVwiKTp2b2lkIDA7ayhjLGEsZnVuY3Rpb24oKXtBKGQsZil9KSYmKHBbbV09YSx4KGMsYSkpfWZ1bmN0aW9uIHkoZCl7dmFyIGY9TWF0aC5taW4oTWF0aC5tYXgobStkLDApLHAubGVuZ3RoLTEpLGM9ci5Qb3AsYT1wW2ZdO2soYyxhLGZ1bmN0aW9uKCl7eShkKX0pJiYobT1mLHgoYyxhKSl9dm9pZCAwPT09YiYmKGI9e30pO3ZhciB3PWI7Yj13LmluaXRpYWxFbnRyaWVzO3c9dy5pbml0aWFsSW5kZXg7dmFyIHA9KHZvaWQgMD09PWI/W1wiL1wiXTpiKS5tYXAoZnVuY3Rpb24oZCl7dmFyIGY9XG5DKF9leHRlbmRzKHtwYXRobmFtZTpcIi9cIixzZWFyY2g6XCJcIixoYXNoOlwiXCIsc3RhdGU6bnVsbCxrZXk6SCgpfSxcInN0cmluZ1wiPT09dHlwZW9mIGQ/SihkKTpkKSk7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKFwiL1wiPT09Zi5wYXRobmFtZS5jaGFyQXQoMCksXCJSZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gY3JlYXRlTWVtb3J5SGlzdG9yeSh7IGluaXRpYWxFbnRyaWVzIH0pIChpbnZhbGlkIGVudHJ5OiBcIitKU09OLnN0cmluZ2lmeShkKStcIilcIik6dm9pZCAwO3JldHVybiBmfSksbT1NYXRoLm1pbihNYXRoLm1heChudWxsPT13P3AubGVuZ3RoLTE6dywwKSxwLmxlbmd0aC0xKSx1PXIuUG9wLHQ9cFttXSx2PUYoKSxxPUYoKTtyZXR1cm57Z2V0IGluZGV4KCl7cmV0dXJuIG19LGdldCBhY3Rpb24oKXtyZXR1cm4gdX0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIHR9LGNyZWF0ZUhyZWY6ZnVuY3Rpb24oZCl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBkP1xuZDpJKGQpfSxwdXNoOnoscmVwbGFjZTpBLGdvOnksYmFjazpmdW5jdGlvbigpe3koLTEpfSxmb3J3YXJkOmZ1bmN0aW9uKCl7eSgxKX0sbGlzdGVuOmZ1bmN0aW9uKGQpe3JldHVybiB2LnB1c2goZCl9LGJsb2NrOmZ1bmN0aW9uKGQpe3JldHVybiBxLnB1c2goZCl9fX07ZXhwb3J0e3IgYXMgQWN0aW9uLGNyZWF0ZUJyb3dzZXJIaXN0b3J5LGNyZWF0ZUhhc2hIaXN0b3J5LGNyZWF0ZU1lbW9yeUhpc3RvcnksSSBhcyBjcmVhdGVQYXRoLEogYXMgcGFyc2VQYXRofVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9