(function() {
var exports = {};
exports.id = "pages/api/user/verifyUser";
exports.ids = ["pages/api/user/verifyUser"];
exports.modules = {

/***/ "./prismaClientConfig.js":
/*!*******************************!*\
  !*** ./prismaClientConfig.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const defaultPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (defaultPrisma);

/***/ }),

/***/ "./src/pages/api/user/verifyUser.ts":
/*!******************************************!*\
  !*** ./src/pages/api/user/verifyUser.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../prismaClientConfig */ "./prismaClientConfig.js");


const verifyUser = async (req, res) => {
  const {
    method,
    body
  } = req;
  const {
    name,
    password
  } = body.userToVerify;

  if (method === 'POST') {
    try {
      return console.log(body.userToVerify);
    } catch (error) {
      return res.status(200).send({
        success: false,
        message: error.message
      });
    } finally {
      await _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__.default.$disconnect();
    }
  } else {
    return res.status(200).send({
      success: false,
      message: "Esse tipo de requisição aceita apenas o método GET"
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (verifyUser);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/user/verifyUser.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvLi9wcmlzbWFDbGllbnRDb25maWcuanMiLCJ3ZWJwYWNrOi8vcXVlc3QtaGVscGVyLy4vc3JjL3BhZ2VzL2FwaS91c2VyL3ZlcmlmeVVzZXIudHMiLCJ3ZWJwYWNrOi8vcXVlc3QtaGVscGVyL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJuYW1lcyI6WyJkZWZhdWx0UHJpc21hIiwiUHJpc21hQ2xpZW50IiwidmVyaWZ5VXNlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyVG9WZXJpZnkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGF0dXMiLCJzZW5kIiwic3VjY2VzcyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVDLE1BQU1BLGFBQWEsR0FBRyxJQUFJQyx3REFBSixFQUF0QjtBQUVBLCtEQUFlRCxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNIRDs7QUFFQSxNQUFNRSxVQUFVLEdBQUcsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDcEUsUUFBTTtBQUFDQyxVQUFEO0FBQVNDO0FBQVQsTUFBaUJILEdBQXZCO0FBQ0EsUUFBTTtBQUFFSSxRQUFGO0FBQVFDO0FBQVIsTUFBcUJGLElBQUksQ0FBQ0csWUFBaEM7O0FBQ0EsTUFBR0osTUFBTSxLQUFLLE1BQWQsRUFBcUI7QUFDakIsUUFBSTtBQUNBLGFBQU9LLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNHLFlBQWpCLENBQVA7QUFFSCxLQUhELENBR0UsT0FBT0csS0FBUCxFQUFjO0FBQ1osYUFBT1IsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJDLGVBQU8sRUFBRSxLQURlO0FBRXhCQyxlQUFPLEVBQUVKLEtBQUssQ0FBQ0k7QUFGUyxPQUFyQixDQUFQO0FBSUgsS0FSRCxTQVFTO0FBQ0wsWUFBTWhCLG9FQUFBLEVBQU47QUFDSDtBQUNKLEdBWkQsTUFZTTtBQUNGLFdBQU9JLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3hCQyxhQUFPLEVBQUUsS0FEZTtBQUV4QkMsYUFBTyxFQUFFO0FBRmUsS0FBckIsQ0FBUDtBQUlIO0FBQ0osQ0FyQkQ7O0FBdUJBLCtEQUFlZCxVQUFmLEU7Ozs7Ozs7Ozs7O0FDMUJBLDRDIiwiZmlsZSI6InBhZ2VzL2FwaS91c2VyL3ZlcmlmeVVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnR9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuIGNvbnN0IGRlZmF1bHRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFByaXNtYTsiLCJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IGRlZmF1bHRQcmlzbWEgZnJvbSAnLi4vLi4vLi4vLi4vcHJpc21hQ2xpZW50Q29uZmlnJztcclxuXHJcbmNvbnN0IHZlcmlmeVVzZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHttZXRob2QsIGJvZHl9ID0gcmVxXHJcbiAgICBjb25zdCB7IG5hbWUsIHBhc3N3b3JkIH0gPSBib2R5LnVzZXJUb1ZlcmlmeVxyXG4gICAgaWYobWV0aG9kID09PSAnUE9TVCcpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhib2R5LnVzZXJUb1ZlcmlmeSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRlZmF1bHRQcmlzbWEuJGRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFc3NlIHRpcG8gZGUgcmVxdWlzacOnw6NvIGFjZWl0YSBhcGVuYXMgbyBtw6l0b2RvIEdFVFwiXHJcbiAgICAgICAgfSlcclxuICAgIH0gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVVzZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==