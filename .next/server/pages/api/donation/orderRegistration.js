(function() {
var exports = {};
exports.id = "pages/api/donation/orderRegistration";
exports.ids = ["pages/api/donation/orderRegistration"];
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

/***/ "./src/pages/api/donation/orderRegistration.ts":
/*!*****************************************************!*\
  !*** ./src/pages/api/donation/orderRegistration.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../prismaClientConfig */ "./prismaClientConfig.js");


const orderRegistration = async (req, res) => {
  const {
    body
  } = req;
  const {
    nome,
    telefone,
    celular,
    descricao,
    ativo
  } = body.donationRequestToCreate;

  try {
    if (!nome) {
      throw new Error("Campo nome não pode estar vazio.");
    }

    if (!celular && !telefone) {
      throw new Error("Um dos campos telefone/celular precisa ser informado.");
    }

    if (!descricao) {
      throw new Error("Campo descrição não pode estar vazio.");
    }

    const dbReturn = await _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__.default.pedidosDoacaoEmAberto.create({
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
    return res.status(200).send({
      success: true,
      message: 'Pedido criado com sucesso.',
      data: dbReturn
    });
  } catch (error) {
    res.status(200).send({
      success: false,
      message: error.message
    });
  } finally {
    await _prismaClientConfig__WEBPACK_IMPORTED_MODULE_0__.default.$disconnect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvLi9wcmlzbWFDbGllbnRDb25maWcuanMiLCJ3ZWJwYWNrOi8vcXVlc3QtaGVscGVyLy4vc3JjL3BhZ2VzL2FwaS9kb25hdGlvbi9vcmRlclJlZ2lzdHJhdGlvbi50cyIsIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIl0sIm5hbWVzIjpbImRlZmF1bHRQcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJvcmRlclJlZ2lzdHJhdGlvbiIsInJlcSIsInJlcyIsImJvZHkiLCJub21lIiwidGVsZWZvbmUiLCJjZWx1bGFyIiwiZGVzY3JpY2FvIiwiYXRpdm8iLCJkb25hdGlvblJlcXVlc3RUb0NyZWF0ZSIsIkVycm9yIiwiZGJSZXR1cm4iLCJkYXRhIiwic2VsZWN0IiwiaWQiLCJzdGF0dXMiLCJzZW5kIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUMsTUFBTUEsYUFBYSxHQUFHLElBQUlDLHdEQUFKLEVBQXRCO0FBRUEsK0RBQWVELGFBQWYsRTs7Ozs7Ozs7Ozs7OztBQ0hEOztBQUdBLE1BQU1FLGlCQUFpQixHQUFHLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQzNFLFFBQU07QUFBRUM7QUFBRixNQUFXRixHQUFqQjtBQUNBLFFBQU07QUFBRUcsUUFBRjtBQUFRQyxZQUFSO0FBQWtCQyxXQUFsQjtBQUEyQkMsYUFBM0I7QUFBc0NDO0FBQXRDLE1BQWdETCxJQUFJLENBQUNNLHVCQUEzRDs7QUFFQSxNQUFJO0FBQ0EsUUFBRyxDQUFDTCxJQUFKLEVBQVM7QUFDTCxZQUFNLElBQUlNLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0g7O0FBQ0QsUUFBRyxDQUFDSixPQUFELElBQVksQ0FBQ0QsUUFBaEIsRUFBeUI7QUFDckIsWUFBTSxJQUFJSyxLQUFKLENBQVUsdURBQVYsQ0FBTjtBQUNIOztBQUNELFFBQUcsQ0FBQ0gsU0FBSixFQUFjO0FBQ1YsWUFBTSxJQUFJRyxLQUFKLENBQVUsdUNBQVYsQ0FBTjtBQUNIOztBQUVELFVBQU1DLFFBQVEsR0FBRyxNQUFNYixxRkFBQSxDQUEyQztBQUM5RGMsVUFBSSxFQUFFO0FBQ0ZSLFlBQUksRUFBRUEsSUFESjtBQUVGQyxnQkFBUSxFQUFFQSxRQUZSO0FBR0ZDLGVBQU8sRUFBRUEsT0FIUDtBQUlGQyxpQkFBUyxFQUFFQSxTQUpUO0FBS0ZDLGFBQUssRUFBRUE7QUFMTCxPQUR3RDtBQVE5REssWUFBTSxFQUFFO0FBQ0pDLFVBQUUsRUFBRTtBQURBO0FBUnNELEtBQTNDLENBQXZCO0FBWUEsV0FBT1osR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJDLGFBQU8sRUFBRSxJQURlO0FBRXhCQyxhQUFPLEVBQUUsNEJBRmU7QUFHeEJOLFVBQUksRUFBRUQ7QUFIa0IsS0FBckIsQ0FBUDtBQUtILEdBNUJELENBNEJFLE9BQU9RLEtBQVAsRUFBYztBQUNaakIsT0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDakJDLGFBQU8sRUFBRSxLQURRO0FBRWpCQyxhQUFPLEVBQUVDLEtBQUssQ0FBQ0Q7QUFGRSxLQUFyQjtBQUlILEdBakNELFNBaUNVO0FBQ04sVUFBTXBCLG9FQUFBLEVBQU47QUFDSDtBQUNKLENBeENEOztBQTBDQSwrREFBZUUsaUJBQWYsRTs7Ozs7Ozs7Ozs7QUM5Q0EsNEMiLCJmaWxlIjoicGFnZXMvYXBpL2RvbmF0aW9uL29yZGVyUmVnaXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50fSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbiBjb25zdCBkZWZhdWx0UHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGRlZmF1bHRQcmlzbWE7IiwiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBkZWZhdWx0UHJpc21hIGZyb20gJy4uLy4uLy4uLy4uL3ByaXNtYUNsaWVudENvbmZpZyc7XHJcblxyXG5cclxuY29uc3Qgb3JkZXJSZWdpc3RyYXRpb24gPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgYm9keSB9ID0gcmVxXHJcbiAgICBjb25zdCB7IG5vbWUsIHRlbGVmb25lLCBjZWx1bGFyLCBkZXNjcmljYW8sIGF0aXZvIH0gPSBib2R5LmRvbmF0aW9uUmVxdWVzdFRvQ3JlYXRlXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZighbm9tZSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbXBvIG5vbWUgbsOjbyBwb2RlIGVzdGFyIHZhemlvLlwiKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWNlbHVsYXIgJiYgIXRlbGVmb25lKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW0gZG9zIGNhbXBvcyB0ZWxlZm9uZS9jZWx1bGFyIHByZWNpc2Egc2VyIGluZm9ybWFkby5cIikgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFkZXNjcmljYW8pe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW1wbyBkZXNjcmnDp8OjbyBuw6NvIHBvZGUgZXN0YXIgdmF6aW8uXCIpIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGJSZXR1cm4gPSBhd2FpdCBkZWZhdWx0UHJpc21hLnBlZGlkb3NEb2FjYW9FbUFiZXJ0by5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBub21lOiBub21lLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IHRlbGVmb25lLFxyXG4gICAgICAgICAgICAgICAgY2VsdWxhcjogY2VsdWxhcixcclxuICAgICAgICAgICAgICAgIGRlc2NyaWNhbzogZGVzY3JpY2FvLFxyXG4gICAgICAgICAgICAgICAgYXRpdm86IGF0aXZvXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1BlZGlkbyBjcmlhZG8gY29tIHN1Y2Vzc28uJyxcclxuICAgICAgICAgICAgZGF0YTogZGJSZXR1cm5cclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgfSlcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgYXdhaXQgZGVmYXVsdFByaXNtYS4kZGlzY29ubmVjdCgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yZGVyUmVnaXN0cmF0aW9uIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=