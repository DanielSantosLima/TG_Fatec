(function() {
var exports = {};
exports.id = "pages/api/donation/orderRegistration";
exports.ids = ["pages/api/donation/orderRegistration"];
exports.modules = {

/***/ "./src/pages/api/donation/orderRegistration.ts":
/*!*****************************************************!*\
  !*** ./src/pages/api/donation/orderRegistration.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();

const orderRegistration = async (req, res) => {
  const {
    body
  } = req;
  console.log(body.donationRequestToCreate);
  const {
    nome,
    telefone,
    celular,
    descricao,
    ativo
  } = body.donationRequestToCreate;

  try {
    const dbReturn = await prisma.pedidosDoacaoEmAberto.create({
      data: {
        nome: nome,
        telefone: telefone,
        celular: celular,
        descricao: descricao,
        ativo: ativo
      },
      select: {
        id: true
      }
    });
    return res.send(dbReturn);
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (orderRegistration);

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/donation/orderRegistration.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvLi9zcmMvcGFnZXMvYXBpL2RvbmF0aW9uL29yZGVyUmVnaXN0cmF0aW9uLnRzIiwid2VicGFjazovL3F1ZXN0LWhlbHBlci9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50Iiwib3JkZXJSZWdpc3RyYXRpb24iLCJyZXEiLCJyZXMiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlIiwibm9tZSIsInRlbGVmb25lIiwiY2VsdWxhciIsImRlc2NyaWNhbyIsImF0aXZvIiwiZGJSZXR1cm4iLCJwZWRpZG9zRG9hY2FvRW1BYmVydG8iLCJjcmVhdGUiLCJkYXRhIiwic2VsZWN0IiwiaWQiLCJzZW5kIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDM0UsUUFBTTtBQUFFQztBQUFGLE1BQVdGLEdBQWpCO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLHVCQUFqQjtBQUVBLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxZQUFSO0FBQWtCQyxXQUFsQjtBQUEyQkMsYUFBM0I7QUFBc0NDO0FBQXRDLE1BQWdEUixJQUFJLENBQUNHLHVCQUEzRDs7QUFDQSxNQUFJO0FBQ0EsVUFBTU0sUUFBUSxHQUFHLE1BQU1kLE1BQU0sQ0FBQ2UscUJBQVAsQ0FBNkJDLE1BQTdCLENBQW9DO0FBQ3ZEQyxVQUFJLEVBQUU7QUFDRlIsWUFBSSxFQUFFQSxJQURKO0FBRUZDLGdCQUFRLEVBQUVBLFFBRlI7QUFHRkMsZUFBTyxFQUFFQSxPQUhQO0FBSUZDLGlCQUFTLEVBQUVBLFNBSlQ7QUFLRkMsYUFBSyxFQUFFQTtBQUxMLE9BRGlEO0FBUXZESyxZQUFNLEVBQUU7QUFDSkMsVUFBRSxFQUFFO0FBREE7QUFSK0MsS0FBcEMsQ0FBdkI7QUFZQSxXQUFPZixHQUFHLENBQUNnQixJQUFKLENBQVNOLFFBQVQsQ0FBUDtBQUNILEdBZEQsQ0FjRSxPQUFPTyxLQUFQLEVBQWM7QUFDWixVQUFNQSxLQUFOO0FBQ0gsR0FoQkQsU0FnQlU7QUFDTixVQUFNckIsTUFBTSxDQUFDc0IsV0FBUCxFQUFOO0FBQ0g7QUFJSixDQTNCRDs7QUE2QkEsK0RBQWVwQixpQkFBZixFOzs7Ozs7Ozs7OztBQ2xDQSw0QyIsImZpbGUiOiJwYWdlcy9hcGkvZG9uYXRpb24vb3JkZXJSZWdpc3RyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEsIFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuY29uc3Qgb3JkZXJSZWdpc3RyYXRpb24gPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgYm9keSB9ID0gcmVxXHJcbiAgICBjb25zb2xlLmxvZyhib2R5LmRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlKTtcclxuICAgIFxyXG4gICAgY29uc3QgeyBub21lLCB0ZWxlZm9uZSwgY2VsdWxhciwgZGVzY3JpY2FvLCBhdGl2byB9ID0gYm9keS5kb25hdGlvblJlcXVlc3RUb0NyZWF0ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYlJldHVybiA9IGF3YWl0IHByaXNtYS5wZWRpZG9zRG9hY2FvRW1BYmVydG8uY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbm9tZTogbm9tZSxcclxuICAgICAgICAgICAgICAgIHRlbGVmb25lOiB0ZWxlZm9uZSxcclxuICAgICAgICAgICAgICAgIGNlbHVsYXI6IGNlbHVsYXIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmljYW86IGRlc2NyaWNhbyxcclxuICAgICAgICAgICAgICAgIGF0aXZvOiBhdGl2b1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXMuc2VuZChkYlJldHVybilcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yZGVyUmVnaXN0cmF0aW9uIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=