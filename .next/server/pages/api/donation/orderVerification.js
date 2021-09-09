(function() {
var exports = {};
exports.id = "pages/api/donation/orderVerification";
exports.ids = ["pages/api/donation/orderVerification"];
exports.modules = {

/***/ "./src/pages/api/donation/orderVerification.ts":
/*!*****************************************************!*\
  !*** ./src/pages/api/donation/orderVerification.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();

const orderVerification = async (req, res) => {
  const {
    body
  } = req;
  console.log(body);
  const {
    nome,
    telefone,
    celular
  } = body.donationRequestToCreate;

  try {
    const dbReturn = await prisma.pedidosDoacaoEmAberto.findMany({
      where: {
        OR: [{
          nome: nome,
          telefone: telefone
        }, {
          nome: nome,
          celular: celular
        }]
      }
    });
    return res.send(dbReturn);
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvLi9zcmMvcGFnZXMvYXBpL2RvbmF0aW9uL29yZGVyVmVyaWZpY2F0aW9uLnRzIiwid2VicGFjazovL3F1ZXN0LWhlbHBlci9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50Iiwib3JkZXJWZXJpZmljYXRpb24iLCJyZXEiLCJyZXMiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIm5vbWUiLCJ0ZWxlZm9uZSIsImNlbHVsYXIiLCJkb25hdGlvblJlcXVlc3RUb0NyZWF0ZSIsImRiUmV0dXJuIiwicGVkaWRvc0RvYWNhb0VtQWJlcnRvIiwiZmluZE1hbnkiLCJ3aGVyZSIsIk9SIiwic2VuZCIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmOztBQUVBLE1BQU9DLGlCQUFpQixHQUFHLE9BQVFDLEdBQVIsRUFBNEJDLEdBQTVCLEtBQW9EO0FBQzdFLFFBQU07QUFBRUM7QUFBRixNQUFXRixHQUFqQjtBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUVBLFFBQU07QUFBRUcsUUFBRjtBQUFRQyxZQUFSO0FBQWtCQztBQUFsQixNQUE4QkwsSUFBSSxDQUFDTSx1QkFBekM7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNWixNQUFNLENBQUNhLHFCQUFQLENBQTZCQyxRQUE3QixDQUFzQztBQUMzREMsV0FBSyxFQUFFO0FBQ0xDLFVBQUUsRUFBQyxDQUNEO0FBQ0VSLGNBQUksRUFBRUEsSUFEUjtBQUVFQyxrQkFBUSxFQUFFQTtBQUZaLFNBREMsRUFLRDtBQUNFRCxjQUFJLEVBQUVBLElBRFI7QUFFRUUsaUJBQU8sRUFBRUE7QUFGWCxTQUxDO0FBREU7QUFEb0QsS0FBdEMsQ0FBdkI7QUFjQSxXQUFPTixHQUFHLENBQUNhLElBQUosQ0FBU0wsUUFBVCxDQUFQO0FBQ0QsR0FoQkQsQ0FnQkUsT0FBT00sS0FBUCxFQUFjO0FBQ2QsVUFBTUEsS0FBTjtBQUNELEdBbEJELFNBa0JTO0FBQ1AsVUFBTWxCLE1BQU0sQ0FBQ21CLFdBQVAsRUFBTjtBQUNEO0FBRUYsQ0EzQkQ7O0FBNkJBLCtEQUFlakIsaUJBQWYsRTs7Ozs7Ozs7Ozs7QUNsQ0EsNEMiLCJmaWxlIjoicGFnZXMvYXBpL2RvbmF0aW9uL29yZGVyVmVyaWZpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hLCBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgIG9yZGVyVmVyaWZpY2F0aW9uID0gYXN5bmMgKCByZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBib2R5IH0gPSByZXFcbiAgY29uc29sZS5sb2coYm9keSk7XG4gIFxuICBjb25zdCB7IG5vbWUsIHRlbGVmb25lLCBjZWx1bGFyIH0gPSBib2R5LmRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlXG4gIHRyeSB7XG4gICAgY29uc3QgZGJSZXR1cm4gPSBhd2FpdCBwcmlzbWEucGVkaWRvc0RvYWNhb0VtQWJlcnRvLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIE9SOltcbiAgICAgICAgICB7XG4gICAgICAgICAgICBub21lOiBub21lLFxuICAgICAgICAgICAgdGVsZWZvbmU6IHRlbGVmb25lXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBub21lOiBub21lLFxuICAgICAgICAgICAgY2VsdWxhcjogY2VsdWxhclxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlcy5zZW5kKGRiUmV0dXJuKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yXG4gIH1maW5hbGx5IHtcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBvcmRlclZlcmlmaWNhdGlvbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9