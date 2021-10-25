function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_application_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common/application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common/models */
    "./src/app/common/models.ts");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chartjs-plugin-annotation */
    "./node_modules/chartjs-plugin-annotation/src/index.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    function AppComponent_table_13_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.pair);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.currency1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", a_r3.rate1, " (", a_r3.qty1, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.currency2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", a_r3.rate2, " (", a_r3.qty2, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.rate3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.finalAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.roi);
      }
    }

    function AppComponent_table_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pair");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Currency1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rate (Qty) 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Currency2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rate (Qty) 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rate 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Final Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ROI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_table_13_tr_20_Template, 17, 10, "tr", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arbitrage);
      }
    }

    function AppComponent_div_14_ng_container_24_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r9.i1ChartData)("labels", ctx_r9.i1ChartLabels)("options", ctx_r9.i1ChartOptions)("colors", ctx_r9.i1ChartColors)("legend", ctx_r9.i1ChartLegend)("chartType", ctx_r9.i1ChartType)("plugins", ctx_r9.i1ChartPlugins);
      }
    }

    function AppComponent_div_14_ng_container_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_14_ng_container_24_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var a_r7 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.loadChart(a_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Chart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_14_ng_container_24_tr_15_Template, 4, 7, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var a_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r7.pair);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r7.currency1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r7.currency2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r7.numAboveO);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r7.avgAbove0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedKey === a_r7.key);
      }
    }

    function AppComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_14_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.loadChartTable();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Load table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_14_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.exportToCSV();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Export");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_14_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          return _r5.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Import");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_14_Template_input_change_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.importFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pair");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Currency1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Currency2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Num Above 0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Avg above 0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_div_14_ng_container_24_Template, 16, 6, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.chart_table);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(route, appService) {
        _classCallCheck(this, AppComponent);

        /* this.route.queryParams.subscribe(params => {
          console.log('params', params);
          if (params && params.access_token) {
            this.access_token = params.access_token;
            // console.log('access_token', this.access_token);
            this.getFunds();
            this.getPositions();
            this.getOrders();
            // this.getPayoff();
            this.appService.getMastersContract();
          }
          if (params && params.user_id) {
            this.user_id = params.user_id;
          }
        });
             this.websocketService.websocketEvent$.subscribe(res => {
          console.log('app websocketEvent: ', res);
          if (res === 'connected') {
            this.subscribePositionsFeed();
          }
        }); */
        this.route = route;
        this.appService = appService;
        this.arbitrage = [];
        this.chart_table = [];
        this.auto_refresh = false;
        this.view_type = 'arbitrage';
        this.selectedKey = '';
        this.importedData = new Map();
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartOptions = {};
        this.lineChartColors = [{
          borderColor: '#35A4EB',
          borderWidth: 2,
          pointRadius: 0
        }, {
          borderColor: 'black',
          borderWidth: 1,
          pointRadius: 0
        }];
        this.lineChartLegend = false; // true

        this.lineChartType = 'line';
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__];
        this.i1ChartData = [];
        this.i1ChartLabels = [];
        this.i1ChartOptions = {
          responsive: true,
          scales: {
            xAxes: [{}],
            yAxes: [{}]
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          animation: {
            duration: 0
          },
          elements: {
            line: {
              fill: false
            }
          }
        };
        this.i1ChartColors = [{
          borderColor: '#35A4EB',
          borderWidth: 2,
          pointRadius: 0
        }, {
          borderColor: 'black',
          borderWidth: 1,
          pointRadius: 0
        }];
        this.i1ChartLegend = false; // true

        this.i1ChartType = 'line';
        this.i1ChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_3__];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          /* let refresh_interval = setInterval(() => {
            this.updateSpotStrike();
          }, 5000);*/
          var refresh_interval = setInterval(function () {
            if (_this.auto_refresh) {
              _this.getData1();
            }
          }, 10000);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          setTimeout(function () {});
          /* this.cdr.detectChanges(); */
        }
      }, {
        key: "getData1",
        value: function getData1() {
          var _this2 = this;

          console.log('app getting data1');
          this.appService.get(_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxTicker).subscribe(function (res) {
            console.log('app data1', res);

            if (res) {
              _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesInr = [];
              _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesBtc = [];
              _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesUsdt = [];
              _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesWrx = [];

              for (var key in res) {
                // console.log(res[key]);
                var value = res[key];
                var e = new _common_models__WEBPACK_IMPORTED_MODULE_2__["QuoteData"]();
                e.currency = value.base_unit;
                e.buy = value.buy;
                e.sell = value.sell;

                if (value.quote_unit === 'inr') {
                  _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesInr.push(e);
                }

                if (value.quote_unit === 'btc') {
                  _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesBtc.push(e);
                }

                if (value.quote_unit === 'usdt') {
                  _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesUsdt.push(e);
                }

                if (value.quote_unit === 'wrx') {
                  _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesWrx.push(e);
                }
              }

              console.log('wazirx inr pairs', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesInr);
              console.log('wazirx btc pairs', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesBtc);
              console.log('wazirx usdt pairs', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesUsdt);
              console.log('wazirx wrx pairs', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesWrx);

              _this2.triangle();

              _this2.saveToLocalStorage();
            }
          }, function (error) {
            console.log('app data1 error', error);

            _this2.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
          });
        }
      }, {
        key: "triangle",
        value: function triangle() {
          var initialAmount = 100000;
          this.arbitrage = [];
          var a1 = this.doTriangle(initialAmount, 'inr', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesInr, 'usdt', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesUsdt);
          this.arbitrage = this.arbitrage.concat(a1);
          var a2 = this.doTriangle(initialAmount, 'inr', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesInr, 'btc', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesBtc);
          this.arbitrage = this.arbitrage.concat(a2);
          var a3 = this.doTriangle(initialAmount, 'inr', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesInr, 'wrx', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesWrx);
          this.arbitrage = this.arbitrage.concat(a3);
          var a4 = this.doTriangle(initialAmount, 'usdt', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesUsdt, 'btc', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesBtc);
          this.arbitrage = this.arbitrage.concat(a4);
          var a5 = this.doTriangle(initialAmount, 'usdt', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesUsdt, 'wrx', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesWrx);
          this.arbitrage = this.arbitrage.concat(a5);
          var a6 = this.doTriangle(initialAmount, 'btc', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesBtc, 'wrx', _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesWrx);
          this.arbitrage = this.arbitrage.concat(a6);
          this.arbitrage = this.arbitrage.filter(function (e) {
            return !isNaN(e.roi) && e.roi !== Infinity;
          });
          this.arbitrage.sort(function (a, b) {
            if (a.roi > b.roi) {
              return -1;
            } else {
              return 1;
            }
            /* if (Math.abs(a.roi) > Math.abs(b.roi)) {
              return -1;
            } else {
              return 1;
            }  */

          });
          this.arbitrage = this.arbitrage.filter(function (thing, index, self) {
            return index === self.findIndex(function (t) {
              return t.pair === thing.pair && t.currency1 === thing.currency1 && t.currency2 === thing.currency2;
            });
          }); //this.arbitrage = this.arbitrage.filter((v,i,a)=>a.findIndex(t=>(t.currency1 === v.currency2 && t.pair===v.pair))===i);

          console.log(this.arbitrage);
        }
      }, {
        key: "doTriangle",
        value: function doTriangle(initialAmount, firstCurr, firstQuotes, secondCurr, secondQuotes) {
          var _this3 = this;

          var arbitrageLocal = [];
          firstQuotes.forEach(function (q) {
            var curr = q.currency;
            /* if (curr !== 'btc') {
              return;
            } */

            var firstBuyRate = q.sell;
            var buyQty1 = initialAmount / firstBuyRate;
            console.log('curr', curr);

            if (curr === 'usdt') {
              arbitrageLocal = _this3.getNextIteration(_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesUsdt, curr, initialAmount, firstQuotes, buyQty1, firstCurr, firstBuyRate, arbitrageLocal);
            } else if (curr === 'btc') {
              arbitrageLocal = _this3.getNextIteration(_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesBtc, curr, initialAmount, firstQuotes, buyQty1, firstCurr, firstBuyRate, arbitrageLocal);
            } else if (curr === 'wrx') {
              arbitrageLocal = _this3.getNextIteration(_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].wazirxQuotesWrx, curr, initialAmount, firstQuotes, buyQty1, firstCurr, firstBuyRate, arbitrageLocal);
            }

            var secondQuotesCurr = secondQuotes.find(function (x) {
              return x.currency === curr;
            });
            console.log('secondQuotesCurr', secondQuotesCurr);

            if (!secondQuotesCurr) {
              return;
            }

            var buyQty2 = secondQuotesCurr.buy * buyQty1;
            var secondCurrQuoteFirst = firstQuotes.find(function (x) {
              return x.currency === secondCurr;
            });
            console.log('secondCurrQuoteFirst', secondCurrQuoteFirst);

            if (!secondCurrQuoteFirst) {
              return;
            }

            var sellFinal = secondCurrQuoteFirst.buy * buyQty2;
            var roi = (sellFinal - initialAmount) / initialAmount * 100;
            console.log(sellFinal, roi);
            var a = new _common_models__WEBPACK_IMPORTED_MODULE_2__["ArbitrageData"]();
            a.pair = firstCurr;
            a.currency1 = curr;
            a.rate1 = firstBuyRate;
            a.qty1 = Math.round((buyQty1 + 0.00001) * 10000) / 10000;
            a.currency2 = secondCurr;
            a.rate2 = secondQuotesCurr.buy;
            a.qty2 = Math.round((buyQty2 + 0.00001) * 10000) / 10000;
            a.rate3 = secondCurrQuoteFirst.buy;
            a.finalAmount = Math.round((sellFinal + 0.00001) * 100) / 100;
            a.roi = Math.round((roi + 0.00001) * 100) / 100;
            arbitrageLocal.push(a);
          });
          return arbitrageLocal;
        }
      }, {
        key: "getNextIteration",
        value: function getNextIteration(arr, curr, initialAmount, firstQuotes, buyQty1, firstCurr, firstBuyRate, arbitrageLocal) {
          arr.forEach(function (q1) {
            var buyQty2 = buyQty1 / q1.sell;
            var secondCurrQuoteFirst = firstQuotes.find(function (x) {
              return x.currency === q1.currency;
            });
            console.log('secondCurrQuoteFirst', secondCurrQuoteFirst, buyQty1, buyQty2);

            if (!secondCurrQuoteFirst) {
              return;
            }

            var sellFinal = secondCurrQuoteFirst.buy * buyQty2;
            var roi = (sellFinal - initialAmount) / initialAmount * 100;
            console.log(sellFinal, roi);
            var a = new _common_models__WEBPACK_IMPORTED_MODULE_2__["ArbitrageData"]();
            a.pair = firstCurr;
            a.currency1 = curr;
            a.rate1 = firstBuyRate;
            a.qty1 = Math.round((buyQty1 + 0.00001) * 10000) / 10000;
            a.currency2 = q1.currency;
            a.rate2 = q1.sell;
            a.qty2 = Math.round((buyQty2 + 0.00001) * 10000) / 10000;
            a.rate3 = secondCurrQuoteFirst.buy;
            a.finalAmount = Math.round((sellFinal + 0.00001) * 100) / 100;
            a.roi = Math.round((roi + 0.00001) * 100) / 100;
            arbitrageLocal.push(a);
          });
          return arbitrageLocal;
        }
      }, {
        key: "saveToLocalStorage",
        value: function saveToLocalStorage() {
          var nowDate = new Date().toLocaleString();
          console.log('nowDate', nowDate);
          this.arbitrage.forEach(function (e) {
            var key = e.pair + '-' + e.currency1 + '-' + e.currency2;
            var val = [nowDate, e.roi];
            var existing = JSON.parse(localStorage.getItem(key));

            if (!existing) {
              existing = [];
            }

            existing.push(val);
            localStorage.setItem(key, JSON.stringify(existing));
          });
        }
      }, {
        key: "loadChartTable",
        value: function loadChartTable() {
          var _this4 = this;

          // for (let [key, value] of Object.entries(localStorage)) {
          // for (let key of Object.keys(localStorage)) {
          console.log(this.importedData);

          var _iterator = _createForOfIteratorHelper(this.importedData),
              _step;

          try {
            var _loop = function _loop() {
              var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  value = _step$value[1];

              // console.log(`${key}`);
              var c = new _common_models__WEBPACK_IMPORTED_MODULE_2__["ChartData"]();
              c.key = key;
              var keysplit = key.split('-');
              c.pair = keysplit[0];
              c.currency1 = keysplit[1];
              c.currency2 = keysplit[2];
              var rois = []; // console.log('value:', value);

              var values = value;

              if (!Array.isArray(value)) {
                values = JSON.parse(value);
              }

              values.forEach(function (e) {
                if (e[1] > 0) {
                  rois.push(e[1]);
                }
              });
              var sum = 0;
              rois.forEach(function (e) {
                sum += e;
              });
              var avg = sum / rois.length;
              avg = Math.round((avg + 0.00001) * 100) / 100;

              if (isNaN(avg)) {
                c.avgAbove0 = '-';
              } else {
                c.avgAbove0 = avg.toString();
              }

              if (isNaN(avg)) {
                c.numAboveO = '-';
              } else {
                c.numAboveO = rois.length.toString();
              }

              _this4.chart_table.push(c);

              _this4.chart_table.sort(function (a, b) {
                /* if (a.pair === 'inr') {
                  return -1;
                } */
                if (a.pair > b.pair) {
                  return -1;
                } else {
                  return 1;
                }
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "loadChart",
        value: function loadChart(a) {
          // let values = JSON.parse(localStorage.getItem(a.key));
          if (this.selectedKey === a.key) {
            this.selectedKey = '';
          } else {
            var values = this.importedData.get(a.key);
            console.log('values', values);
            var labels = [];
            var rois = [];
            values.forEach(function (e) {
              labels.push(e[0]); // date

              rois.push(e[1]); // roi 
            });
            this.i1ChartLabels = labels; // dates

            this.i1ChartData = [{
              data: rois,
              label: 'ROI'
            }];
            this.selectedKey = a.key;
          }
        }
      }, {
        key: "getDateInFormat",
        value: function getDateInFormat() {
          var date = new Date();
          var d = date.getDate();
          var m = date.getMonth() + 1; //Month from 0 to 11

          var y = date.getFullYear();
          var h = date.getHours();
          var mins = date.getMinutes();
          var s = date.getSeconds();
          var format = '' + (d <= 9 ? '0' + d : d) + (m <= 9 ? '0' + m : m) + y + '_' + (h <= 9 ? '0' + h : h) + (mins <= 9 ? '0' + mins : mins) + (s <= 9 ? '0' + s : s);
          return format;
        }
      }, {
        key: "exportToCSV",
        value: function exportToCSV() {
          var export_file_name = 'Arbitrage_' + this.getDateInFormat() + '.txt';
          console.log('exporting: ', export_file_name);
          var str = '';

          for (var _i2 = 0, _Object$entries = Object.entries(localStorage); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            str += key + '|' + JSON.stringify(value) + '\r\n';
          }

          var downloadFile = new Blob([str], {
            type: 'application/x-msdownload'
          });

          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // for IE
            window.navigator.msSaveOrOpenBlob(downloadFile, export_file_name);
          } else {
            var fileURL = URL.createObjectURL(downloadFile);
            var link = document.createElement('a');
            link.href = fileURL;
            link.target = '_blank';
            document.body.appendChild(link);
            link.download = export_file_name;
            link.click();
            link.parentNode.removeChild(link);
          }
        }
      }, {
        key: "importFile",
        value: function importFile(fileInput) {
          var _this5 = this;

          var fileReaded = fileInput.target.files[0];
          var reader = new FileReader();
          reader.readAsText(fileReaded);

          reader.onload = function (e) {
            var text = String(reader.result); // console.log('text:', text);

            _this5.loadImportedData(text);
          };
        }
      }, {
        key: "loadImportedData",
        value: function loadImportedData(importData) {
          var allTextLines_all_data = importData.split(/\r|\n|\r/);
          var allTextLines = allTextLines_all_data.filter(function (elem) {
            return elem !== '';
          }); // console.log('allTextLines: ', allTextLines);

          this.importedData.clear();

          for (var index = 0; index < allTextLines.length; index++) {
            var line = allTextLines[index].split('|'); //trades.push({ qty: Number(line[0]), scrip: line[1], expiry: line[2], entry: Number(line[3]), exit: Number(line[4]) });

            console.log(line[0], JSON.parse(line[1]));
            this.importedData.set(line[0], JSON.parse(line[1]));
            /* localStorage.setItem(
              line[0],
              JSON.parse(line[1])
            ); */
          }

          this.loadChartTable();
          /* let firstLine = allTextLines[0].split(',');
          let key = firstLine[0];
          let value = firstLine[1]; */
        }
      }, {
        key: "playAudio",
        value: function playAudio(type) {
          var audio = new Audio();

          if (type === 'success') {
            audio.src = "../assets/audio/beep-25-success.mp3";
          } else if (type === 'error') {
            audio.src = "../assets/audio/beep-02.mp3";
          } else if (type === 'warn') {
            audio.src = "../assets/audio/beep-05.mp3";
          }

          audio.load();
          audio.play();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 16,
      vars: 5,
      consts: [[1, "main-content"], [1, "form-check-inline", "mb-3"], ["type", "checkbox", "value", "", "id", "auto-refresh", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "auto-refresh", 1, "form-check-label"], [1, "form-check-inline"], ["type", "radio", "value", "arbitrage", "id", "table-arbitrage", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "table-arbitrage", 1, "form-check-label"], ["type", "radio", "value", "chart", "id", "table-chart", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "table-chart", 1, "form-check-label"], ["class", "table table-sm table-bordered shadow mb-0 text-center", 4, "ngIf"], [4, "ngIf"], [1, "table", "table-sm", "table-bordered", "shadow", "mb-0", "text-center"], [1, "thead-light"], ["scope", "col", 1, "table-col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-2", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-2", 3, "click"], ["type", "file", "name", "File Upload 1", "accept", "*", 2, "display", "none", 3, "change"], ["fileImportInput1", ""], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["colspan", "10"], [1, "chart-chart"], ["baseChart", "", "width", "2", "height", "1", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.auto_refresh = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Auto refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.view_type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Arbitrage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.view_type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_table_13_Template, 21, 1, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_14_Template, 25, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.auto_refresh);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.view_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.view_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_type === "arbitrage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_type === "chart");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["BaseChartDirective"]],
      styles: ["[_nghost-%COMP%], input[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.algo-suggestions-main[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n\n.suggest-positions[_ngcontent-%COMP%] {\n  border: 1px solid #b5b5b5;\n  padding: 5px;\n  border-radius: 5px;\n  margin-right: 15px;\n  font-weight: bold;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 2px solid #dee2e6;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.posCheckbox[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.ocStrategyStrikeQty[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: black;\n}\n\n.oc-strike[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  width: 60px;\n}\n\n.oc-strike-spot[_ngcontent-%COMP%] {\n  width: 60px;\n  margin: 0 auto;\n}\n\n.oc-col-actions[_ngcontent-%COMP%] {\n  width: 19rem;\n}\n\n.oc-col[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\n.lastRequestStatus[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #f8f9fa;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n}\n\n.positions_div[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.orderbook_div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.pos-input[_ngcontent-%COMP%] {\n  width: 60px;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.positions-row-actions[_ngcontent-%COMP%] {\n  \n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  \n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.table-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.new-input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 120px;\n  display: inline-block;\n}\n\n.new-input-prepend[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 150px;\n  display: inline-flex;\n}\n\n.new-input-prepend-expiry[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 100px;\n  display: inline-flex;\n}\n\n.new-input-prepend-oc[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 130px;\n  display: inline-flex;\n}\n\n.new-input-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.confirmation-check[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.new-order-div[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ocStrikeStrategyCE[_ngcontent-%COMP%] {\n  background-color: #ccffc9 !important;\n}\n\n.ocStrikeStrategyPE[_ngcontent-%COMP%] {\n  background-color: #ffdede !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrZXQvRGVza3RvcC9nZW5lcmFsL2FyYml0cmFnZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxPQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBQUE7QUNKRjs7QURPQTtFQUNFLG9DQUFBO0FDSkY7O0FET0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0LCBpbnB1dCwgLmlucHV0LWdyb3VwLXRleHQsIHNlbGVjdCwgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4uYWxnby1zdWdnZXN0aW9ucy1tYWlue1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7IFxyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5zdWdnZXN0LXBvc2l0aW9ucyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I1YjViNTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5wb3NDaGVja2JveCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vY1N0cmF0ZWd5U3RyaWtlUXR5IHtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5vYy1zdHJpa2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5vYy1zdHJpa2Utc3BvdCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5vYy1jb2wtYWN0aW9ucyB7XHJcbiAgd2lkdGg6IDE5cmVtO1xyXG59XHJcblxyXG4ub2MtY29sIHtcclxuICB3aWR0aDogNXJlbTtcclxufVxyXG5cclxuLmxhc3RSZXF1ZXN0U3RhdHVzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucG9zaXRpb25zX2RpdiB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5vcmRlcmJvb2tfZGl2IHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucG9zLWlucHV0IHtcclxuICB3aWR0aDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbnMtcm93LWFjdGlvbnMge1xyXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxufVxyXG5cclxuLnJlZnJlc2gtYnRuIHtcclxuICAvKiBtYXJnaW4tbGVmdDogMTVweDsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50YWJsZS10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubmV3LWlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm5ldy1pbnB1dC1wcmVwZW5kIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ubmV3LWlucHV0LXByZXBlbmQtZXhwaXJ5IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBcclxufVxyXG5cclxuLm5ldy1pbnB1dC1wcmVwZW5kLW9jIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ubmV3LWlucHV0LWJ0biB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWNoZWNrIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucG9zaXRpb25zLXN1bSB7XHJcbiAgXHJcbn1cclxuXHJcbi5uZXctb3JkZXItZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub2NTdHJpa2VTdHJhdGVneUNFIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmM5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vY1N0cmlrZVN0cmF0ZWd5UEUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRlZGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBjb2xvcjogI2MyYzNjNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgICBjb2xvcjogIzI0MjkyZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9ICovIiwiOmhvc3QsIGlucHV0LCAuaW5wdXQtZ3JvdXAtdGV4dCwgc2VsZWN0LCBidXR0b24ge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbn1cblxuLmFsZ28tc3VnZ2VzdGlvbnMtbWFpbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uc3VnZ2VzdC1wb3NpdGlvbnMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjViNWI1O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZTJlNjtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4ucG9zQ2hlY2tib3gge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLm9jU3RyYXRlZ3lTdHJpa2VRdHkge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub2Mtc3RyaWtlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5vYy1zdHJpa2Utc3BvdCB7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm9jLWNvbC1hY3Rpb25zIHtcbiAgd2lkdGg6IDE5cmVtO1xufVxuXG4ub2MtY29sIHtcbiAgd2lkdGg6IDVyZW07XG59XG5cbi5sYXN0UmVxdWVzdFN0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucG9zaXRpb25zX2RpdiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm9yZGVyYm9va19kaXYge1xuICBmbGV4OiAxO1xufVxuXG4ucG9zLWlucHV0IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wb3NpdGlvbnMtcm93LWFjdGlvbnMge1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG59XG5cbi5yZWZyZXNoLWJ0biB7XG4gIC8qIG1hcmdpbi1sZWZ0OiAxNXB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGFibGUtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5uZXctaW5wdXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5ldy1pbnB1dC1wcmVwZW5kIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5ldy1pbnB1dC1wcmVwZW5kLWV4cGlyeSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXctaW5wdXQtcHJlcGVuZC1vYyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXctaW5wdXQtYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNvbmZpcm1hdGlvbi1jaGVjayB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5uZXctb3JkZXItZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm9jU3RyaWtlU3RyYXRlZ3lDRSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ZmYzkgIWltcG9ydGFudDtcbn1cblxuLm9jU3RyaWtlU3RyYXRlZ3lQRSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRlZGUgIWltcG9ydGFudDtcbn1cblxuLyogOmhvc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5zcGFjZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAudG9vbGJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cblxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cblxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6ICM4ODg7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCA4cHggMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIC5jYXJkLmNhcmQtc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTY4cHg7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xuICB9XG5cbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIH1cblxuICBzdmcjcm9ja2V0IHtcbiAgICB3aWR0aDogODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgdG9wOiAtMjRweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDE4MHB4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgfVxuXG4gIGEsXG4gIGE6dmlzaXRlZCxcbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxMjU2OTk7XG4gIH1cblxuICAudGVybWluYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcbiAgfVxuXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcbiAgICBjb2xvcjogI2MyYzNjNDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTRweCAwO1xuICAgIHRleHQtaW5kZW50OiA0cHg7XG4gIH1cblxuICAudGVybWluYWwgcHJlIHtcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmNpcmNsZS1saW5rIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xuICB9XG5cbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICBmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cblxuICBmb290ZXIgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgICBjb2xvcjogIzI0MjkyZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cblxuICBzdmcjY2xvdWRzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAtMTYwcHg7XG4gICAgbGVmdDogLTIzMHB4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICB3aWR0aDogMTkyMHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9ICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]],

          /* exports: [
            ChartsModule
          ], */
          providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppService = /*#__PURE__*/function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.requestStatusEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.payOffEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AppService, [{
        key: "get",
        value: function get(urlToFetch) {
          var httpOptions = {};
          var url = urlToFetch;
          return this.http.get(url, httpOptions);
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/application.constant.ts":
  /*!************************************************!*\
    !*** ./src/app/common/application.constant.ts ***!
    \************************************************/

  /*! exports provided: AppConstants */

  /***/
  function srcAppCommonApplicationConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
      return AppConstants;
    });

    var AppConstants = function AppConstants() {
      _classCallCheck(this, AppConstants);
    };

    AppConstants.wazirxTicker = 'https://api.wazirx.com/api/v2/tickers';
    AppConstants.wazirxQuotesInr = [];
    AppConstants.wazirxQuotesBtc = [];
    AppConstants.wazirxQuotesUsdt = [];
    AppConstants.wazirxQuotesWrx = [];
    AppConstants.SocketMode = 'aliceblue';
    AppConstants.RestMode = 'fyers';
    AppConstants.fyersAppId = 'FUU5Z8ICUH';
    AppConstants.fyersSecretId = 'IYF3LPXJ0X';
    AppConstants.year = '21'; // TODO: make year 21 when 2021 year starts

    AppConstants.INTEREST_RATE = 6; // https://in.investing.com/rates-bonds/india-10-year-bond-yield-historical-data

    AppConstants.curr_positions_trades = [];
    /* static USDINRFUTCodes = {
      'SEP': 1985,
      'OCT': 2698,
      'NOV': 3050,
      'DEC': 1487,
    }; */

    AppConstants.USDINRFUTCodes = {
      'JAN': 1814,
      'FEB': 1277,
      'MAR': 10288,
      'APR': 1168,
      'MAY': 1255,
      'JUN': 1612,
      'JUL': 2771,
      'AUG': 7395,
      'SEP': 1354,
      'OCT': 1629,
      'NOV': 3244,
      'DEC': 1421
    };
    AppConstants.USDINR_FUT_MONTH = 'APR';
    AppConstants.abMastersContract = new Map();
    AppConstants.monthsMapping = {
      1: 'JAN',
      2: 'FEB',
      3: 'MAR',
      4: 'APR',
      5: 'MAY',
      6: 'JUN',
      7: 'JUL',
      8: 'AUG',
      9: 'SEP',
      10: 'OCT',
      11: 'NOV',
      12: 'DEC'
    };
    /*   static monthlyExpiryDates = {
        '20JUN': new Date(2020, 5, 25),
        '20JUL': new Date(2020, 6, 30),
        '20AUG': new Date(2020, 7, 27),
        '20SEP': new Date(2020, 8, 24),
        '20OCT': new Date(2020, 9, 29),
        '20NOV': new Date(2020, 10, 26),
        '20DEC': new Date(2020, 11, 31),
      };
    
      static monthlyExpiryDatesUSDINR = {
        '20JUN': new Date(2020, 5, 26),
        '20JUL': new Date(2020, 6, 29),
        '20AUG': new Date(2020, 7, 27),
        '20SEP': new Date(2020, 8, 28),
        '20OCT': new Date(2020, 9, 27),
        '20NOV': new Date(2020, 10, 25),
        '20DEC': new Date(2020, 11, 29),
      }; */

    AppConstants.monthlyExpiryDates = {
      '21JAN': new Date(2021, 0, 27),
      '21FEB': new Date(2021, 1, 24),
      '21MAR': new Date(2021, 2, 26),
      '21APR': new Date(2021, 3, 29),
      '21MAY': new Date(2021, 4, 27),
      '21JUN': new Date(2021, 5, 24),
      '21JUL': new Date(2021, 6, 29),
      '21AUG': new Date(2021, 7, 27),
      '21SEP': new Date(2021, 8, 30),
      '21OCT': new Date(2021, 9, 26),
      '21NOV': new Date(2021, 10, 28),
      '21DEC': new Date(2021, 11, 30)
    };
    AppConstants.monthlyExpiryDatesUSDINR = {
      '21JAN': new Date(2021, 0, 27),
      '21FEB': new Date(2021, 1, 24),
      '21MAR': new Date(2021, 2, 26),
      '21APR': new Date(2021, 3, 28),
      '21MAY': new Date(2021, 4, 27),
      '21JUN': new Date(2021, 5, 25),
      '21JUL': new Date(2021, 6, 29),
      '21AUG': new Date(2021, 7, 27),
      '21SEP': new Date(2021, 8, 24),
      '21OCT': new Date(2021, 9, 26),
      '21NOV': new Date(2021, 10, 28),
      '21DEC': new Date(2021, 11, 27)
    };
    AppConstants.dummyResPos = '{"s":"ok","netPositions":[{"crossCurrency":"N","qty":16,"realized_profit":0,"id":"NSE:JPASSOCIAT-EQ-CNC","unrealized_profit":0.32,"buyQty":16,"sellAvg":0,"sellQty":0,"buyAvg":4.78,"symbol":"NSE:JPASSOCIAT-EQ","fyToken":"101000000011460","slNo":0,"avgPrice":4.78,"segment":"E","dummy":" ","rbiRefRate":1,"side":1,"netQty":16,"pl":0.32,"productType":"CNC","netAvg":4.78,"qtyMulti_com":1},{"crossCurrency":"N","qty":16,"realized_profit":0,"id":"NSE:JPASSOCIAT-EQ-CNC","unrealized_profit":0.32,"buyQty":16,"sellAvg":0,"sellQty":0,"buyAvg":4.78,"symbol":"NSE:JPASSOCIAT-EQ","fyToken":"101000000011460","slNo":0,"avgPrice":4.78,"segment":"E","dummy":" ","rbiRefRate":1,"side":1,"netQty":16,"pl":0.32,"productType":"CNC","netAvg":4.78,"qtyMulti_com":1}],"message":""}';
    AppConstants.dummyResOrd = '{"s":"ok","message":"","orderBook":[{"status":5,"symbol":"NSE:TCSEQ","qty":1,"orderNumStatus":"119050790482:5","dqQtyRem":5,"orderDateTime":"07-May-2019 15:18:04","orderValidity":"IOC","fyToken":"101000000011536","slNo":1,"message":"RMS:119050790482:Not allowed to trade in NSE EQ","segment":"E","id":"119050790482","stopPrice":0,"exchOrdId":0,"remainingQuantity":1,"filledQty":0,"limitPrice":2155,"offlineOrder":"false","instrument":"EQUITY","productType":"CNC","type":1,"side":1,"discloseQty":5,"tradedPrice":0}]}';
    /***/
  },

  /***/
  "./src/app/common/models.ts":
  /*!**********************************!*\
    !*** ./src/app/common/models.ts ***!
    \**********************************/

  /*! exports provided: QuoteData, ArbitrageData, ChartData, IntradayData, Position, Order, PlaceOrder, AliceblueInstrument, Instrument, AliceMarketData, AliceBlueLiveFeedType, AliceBlueWsFrameMode, PositionTypeForPayOff */

  /***/
  function srcAppCommonModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteData", function () {
      return QuoteData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArbitrageData", function () {
      return ArbitrageData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartData", function () {
      return ChartData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntradayData", function () {
      return IntradayData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Position", function () {
      return Position;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceOrder", function () {
      return PlaceOrder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AliceblueInstrument", function () {
      return AliceblueInstrument;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Instrument", function () {
      return Instrument;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AliceMarketData", function () {
      return AliceMarketData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AliceBlueLiveFeedType", function () {
      return AliceBlueLiveFeedType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AliceBlueWsFrameMode", function () {
      return AliceBlueWsFrameMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionTypeForPayOff", function () {
      return PositionTypeForPayOff;
    });

    var QuoteData = function QuoteData() {
      _classCallCheck(this, QuoteData);
    };

    var ArbitrageData = function ArbitrageData() {
      _classCallCheck(this, ArbitrageData);
    };

    var ChartData = function ChartData() {
      _classCallCheck(this, ChartData);
    };

    var IntradayData = function IntradayData() {
      _classCallCheck(this, IntradayData);
    };

    var Position = function Position() {
      _classCallCheck(this, Position);

      this.includeInSum1 = false;
      this.includeInSum2 = false;
      this.includeInSum3 = false;
      this.includeInSum4 = false;
    };

    var Order = function Order() {
      _classCallCheck(this, Order);
    };

    var PlaceOrder = function PlaceOrder() {
      _classCallCheck(this, PlaceOrder);
    };

    var AliceblueInstrument = function AliceblueInstrument() {
      _classCallCheck(this, AliceblueInstrument);
    };

    var Instrument = function Instrument() {
      _classCallCheck(this, Instrument);
    };

    var AliceMarketData = function AliceMarketData() {
      _classCallCheck(this, AliceMarketData);
    };

    var AliceBlueLiveFeedType;

    (function (AliceBlueLiveFeedType) {
      AliceBlueLiveFeedType["MARKET_DATA"] = "marketdata";
      AliceBlueLiveFeedType["COMPACT"] = "compact_marketdata";
      AliceBlueLiveFeedType["SNAPQUOTE"] = "snapquote";
      AliceBlueLiveFeedType["FULL_SNAPQUOTE"] = "full_snapquote";
    })(AliceBlueLiveFeedType || (AliceBlueLiveFeedType = {}));

    var AliceBlueWsFrameMode;

    (function (AliceBlueWsFrameMode) {
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["MARKETDATA"] = 1] = "MARKETDATA";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["COMPACT_MARKETDATA"] = 2] = "COMPACT_MARKETDATA";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["SNAPQUOTE"] = 3] = "SNAPQUOTE";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["FULL_SNAPQUOTE"] = 4] = "FULL_SNAPQUOTE";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["SPREADDATA"] = 5] = "SPREADDATA";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["SPREAD_SNAPQUOTE"] = 6] = "SPREAD_SNAPQUOTE";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["DPR"] = 7] = "DPR";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["OI"] = 8] = "OI";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["MARKET_STATUS"] = 9] = "MARKET_STATUS";
      AliceBlueWsFrameMode[AliceBlueWsFrameMode["EXCHANGE_MESSAGES"] = 10] = "EXCHANGE_MESSAGES";
    })(AliceBlueWsFrameMode || (AliceBlueWsFrameMode = {}));

    var PositionTypeForPayOff;

    (function (PositionTypeForPayOff) {
      PositionTypeForPayOff["CEsell"] = "cesell";
      PositionTypeForPayOff["PEsell"] = "pesell";
      PositionTypeForPayOff["CEbuy"] = "cebuy";
      PositionTypeForPayOff["PEbuy"] = "pebuy";
      PositionTypeForPayOff["CE"] = "ce";
      PositionTypeForPayOff["PE"] = "pe";
    })(PositionTypeForPayOff || (PositionTypeForPayOff = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/aniket/Desktop/general/arbitrage/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map