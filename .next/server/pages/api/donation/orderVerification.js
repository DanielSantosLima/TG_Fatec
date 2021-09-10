(function() {
var exports = {};
exports.id = "pages/api/donation/orderVerification";
exports.ids = ["pages/api/donation/orderVerification"];
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

/***/ "./src/pages/api/donation/orderVerification.ts":
/*!*****************************************************!*\
  !*** ./src/pages/api/donation/orderVerification.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../prismaClientConfig */ "./prismaClientConfig.js");


const orderVerification = async (req, res) => {
  const {
    body
  } = req;
  const {
    nome,
    telefone,
    celular
  } = body.donationRequestToCreate;

  try {
    const dbReturn = await _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__.default.$queryRaw(`select * from public."PedidosDoacaoEmAberto" pdea 
        where (nome = '${nome}' and telefone = '${telefone}') 
      or 
        (nome = '${nome}' and celular = '${celular}')`);
    return res.send(dbReturn);
  } catch (error) {
    throw error;
  } finally {
    await _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__.default.$disconnect();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (orderVerification);

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/donation/orderVerification.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvLi9wcmlzbWFDbGllbnRDb25maWcuanMiLCJ3ZWJwYWNrOi8vcXVlc3QtaGVscGVyLy4vc3JjL3BhZ2VzL2FwaS9kb25hdGlvbi9vcmRlclZlcmlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIl0sIm5hbWVzIjpbImRlZmF1bHRQcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJvcmRlclZlcmlmaWNhdGlvbiIsInJlcSIsInJlcyIsImJvZHkiLCJub21lIiwidGVsZWZvbmUiLCJjZWx1bGFyIiwiZG9uYXRpb25SZXF1ZXN0VG9DcmVhdGUiLCJkYlJldHVybiIsInNlbmQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUMsTUFBTUEsYUFBYSxHQUFHLElBQUlDLHdEQUFKLEVBQXRCO0FBRUEsK0RBQWVELGFBQWYsRTs7Ozs7Ozs7Ozs7OztBQ0pEOztBQUdBLE1BQU9FLGlCQUFpQixHQUFHLE9BQVFDLEdBQVIsRUFBNEJDLEdBQTVCLEtBQW9EO0FBQzdFLFFBQU07QUFBRUM7QUFBRixNQUFXRixHQUFqQjtBQUVBLFFBQU07QUFBRUcsUUFBRjtBQUFRQyxZQUFSO0FBQWtCQztBQUFsQixNQUE4QkgsSUFBSSxDQUFDSSx1QkFBekM7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNVixrRUFBQSxDQUNwQjtBQUNQLHlCQUF5Qk0sSUFBSyxxQkFBb0JDLFFBQVM7QUFDM0Q7QUFDQSxtQkFBbUJELElBQUssb0JBQW1CRSxPQUFRLElBSnhCLENBQXZCO0FBTUEsV0FBT0osR0FBRyxDQUFDTyxJQUFKLENBQVNELFFBQVQsQ0FBUDtBQUNELEdBUkQsQ0FRRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxVQUFNQSxLQUFOO0FBQ0QsR0FWRCxTQVVTO0FBQ1AsVUFBTVosb0VBQUEsRUFBTjtBQUNEO0FBQ0YsQ0FqQkQ7O0FBbUJBLCtEQUFlRSxpQkFBZixFOzs7Ozs7Ozs7OztBQ3RCQSw0QyIsImZpbGUiOiJwYWdlcy9hcGkvZG9uYXRpb24vb3JkZXJWZXJpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnR9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuIGNvbnN0IGRlZmF1bHRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFByaXNtYTsiLCJpbXBvcnQgZGVmYXVsdFByaXNtYSBmcm9tICcuLi8uLi8uLi8uLi9wcmlzbWFDbGllbnRDb25maWcnO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbmNvbnN0ICBvcmRlclZlcmlmaWNhdGlvbiA9IGFzeW5jICggcmVxOk5leHRBcGlSZXF1ZXN0LCByZXM6TmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gcmVxXG4gIFxuICBjb25zdCB7IG5vbWUsIHRlbGVmb25lLCBjZWx1bGFyIH0gPSBib2R5LmRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlXG4gIHRyeSB7XG4gICAgY29uc3QgZGJSZXR1cm4gPSBhd2FpdCBkZWZhdWx0UHJpc21hLiRxdWVyeVJhdyhcbiAgICAgIGBzZWxlY3QgKiBmcm9tIHB1YmxpYy5cIlBlZGlkb3NEb2FjYW9FbUFiZXJ0b1wiIHBkZWEgXG4gICAgICAgIHdoZXJlIChub21lID0gJyR7bm9tZX0nIGFuZCB0ZWxlZm9uZSA9ICcke3RlbGVmb25lfScpIFxuICAgICAgb3IgXG4gICAgICAgIChub21lID0gJyR7bm9tZX0nIGFuZCBjZWx1bGFyID0gJyR7Y2VsdWxhcn0nKWBcbiAgICAgIClcbiAgICByZXR1cm4gcmVzLnNlbmQoZGJSZXR1cm4pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfWZpbmFsbHkge1xuICAgIGF3YWl0IGRlZmF1bHRQcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9yZGVyVmVyaWZpY2F0aW9uXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9