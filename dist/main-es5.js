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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _common_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/map.service */
    "./src/app/common/map.service.ts");
    /* harmony import */


    var _common_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./common/websocket.service */
    "./src/app/common/websocket.service.ts");
    /* harmony import */


    var _chart_chart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chart/chart.service */
    "./src/app/chart/chart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chart/chart.component */
    "./src/app/chart/chart.component.ts");

    function AppComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Websocket is connected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Websocket is not connected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.connectWS();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Connect WS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "text-danger": a0,
        "text-success": a1
      };
    };

    function AppComponent_tbody_97_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_97_tr_1_Template_input_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var pos_r14 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.includePosPnLInSum1(pos_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_97_tr_1_Template_input_change_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var pos_r14 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.includePosPnLInSum2(pos_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_97_tr_1_Template_input_change_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var pos_r14 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.includePosPnLInSum3(pos_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_97_tr_1_Template_input_change_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var pos_r14 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.includePosPnLInSum4(pos_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tbody_97_tr_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var pos_r14 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.exitPosition(pos_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pos_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r14.scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r14.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r14.netQty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r14.buyAvg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r14.sellAvg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.getPosLTP(pos_r14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, pos_r14.pnl < 0, pos_r14.pnl > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.getPosPnL(pos_r14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "pos-qty-", pos_r14.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.disable_order_buttons);
      }
    }

    function AppComponent_tbody_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tbody_97_tr_1_Template, 29, 13, "tr", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.positions);
      }
    }

    function AppComponent_tbody_130_tr_1_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ord_r23 = ctx.$implicit;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.getOrderStatus(ord_r23.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.side === 1 ? "B" : "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.qty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.getOrderType(ord_r23.type));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.limit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.stop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.tradedPrice);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.orderDateTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r23.message);
      }
    }

    function AppComponent_tbody_130_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tbody_130_tr_1_Template, 21, 10, "tr", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.orders);
      }
    }

    function AppComponent_span_142_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sug_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", sug_r25.strikeCE, "CE ", sug_r25.ltpCE, " , ", sug_r25.strikePE, "PE ", sug_r25.ltpPE, " ");
      }
    }

    function AppComponent_span_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sug_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", sug_r27.action, ": ", sug_r27.strike, " ", sug_r27.ltp, " ");
      }
    }

    function AppComponent_tr_228_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oc_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r31.getQtyOfStrikeInStrategy(oc_r29.strike + "CE"), " (", ctx_r31.getCostOfStrikeInStrategy(oc_r29.strike + "CE"), ") ");
      }
    }

    function AppComponent_tr_228_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.getSpotValue(), " ");
      }
    }

    function AppComponent_tr_228_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oc_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r33.getQtyOfStrikeInStrategy(oc_r29.strike + "PE"), " (", ctx_r33.getCostOfStrikeInStrategy(oc_r29.strike + "PE"), ") ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "ocStrikeStrategyCE": a0
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        "table-warning": a0,
        "oc-strike": a1
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "ocStrikeStrategyPE": a0
      };
    };

    function AppComponent_tr_228_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_228_Template_input_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var oc_r29 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.includeInStrangleFn(oc_r29.symbol + "CE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_228_Template_input_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var oc_r29 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.includeInDebitSpreadFn(oc_r29.symbol + "CE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_228_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var oc_r29 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.addToStrategyBuilder(oc_r29, "CE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_tr_228_div_15_Template, 2, 2, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_tr_228_div_18_Template, 2, 1, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_tr_228_div_21_Template, 2, 2, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_228_Template_input_change_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var oc_r29 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.includeInStrangleFn(oc_r29.symbol + "PE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_228_Template_input_change_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var oc_r29 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.includeInDebitSpreadFn(oc_r29.symbol + "PE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_228_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var oc_r29 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.addToStrategyBuilder(oc_r29, "PE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oc_r29 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getVolume(oc_r29.symbol + "CE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getDelta(oc_r29.symbol, oc_r29.strike, "CE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.getLtp(oc_r29.symbol + "CE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "CE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, ctx_r8.isSpotStrike(oc_r29.strike), !ctx_r8.isSpotStrike(oc_r29.strike)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", oc_r29.strike, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isSpotStrike(oc_r29.strike));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c3, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "PE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.getLtp(oc_r29.symbol + "PE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "PE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c3, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "PE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getDelta(oc_r29.symbol, oc_r29.strike, "PE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c3, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "PE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getVolume(oc_r29.symbol + "PE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c3, ctx_r8.isStrikeInCurrStrategy(oc_r29.strike + "PE")));
      }
    }
    /*
    abMastersContract map is maintained for each "code"
    to send subscription over websocket, code for the symbol is required, that is found from masters. symbol is searched in masters based on expiry, instrument, strike, type.
    data from websocket is received for this code whose information is then fetched from masters
    
    received from fyers:
    NSE:NIFTY209115555CE
    NSE:NIFTY20SEP5555CE
    NSE:NIFTY20N015555CE
    
    symbol:
    USDINR 19 JUN20 77.0 CE
    NIFTY 13 AUG20 9000.0 PE
    NIFTY JUN FUT
    NIFTY JUN 9000 PE
    
    Maps:
    NIFTY2061810000CE NIFTY20JUN10000CE NIFTY20N1810000CE
    
    Future Position will not get realtime data. Will have to update findStrikeInMasters when sending subscription. And also update updateMaps.
    For usdinr future, update its month in constants
    */


    var AppComponent = /*#__PURE__*/function () {
      /* monthsMapping = {
        'JAN' : '1',
        'FEB' : '2',
        'MAR' : '3',
        'APR' : '4',
        'MAY' : '5',
        'JUN' : '6',
        'JUL' : '7',
        'AUG' : '8',
        'SEP' : '9',
        'OCT' : '10',
        'NOV' : '11',
        'DEC' : '12'
      }; */
      function AppComponent(route, appService, mapService, websocketService, chartService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.route = route;
        this.appService = appService;
        this.mapService = mapService;
        this.websocketService = websocketService;
        this.chartService = chartService;
        this.title = 'Trades';
        this.access_token = null;
        this.user_id = null;
        this.auth_code = null;
        this.lastRequestStatus = null;
        this.positions = [];
        this.orders = [];
        this.hide_positions = true;
        this.hide_orders = true;
        this.disable_order_buttons = true;
        this.lastPositionsUpdateTime = '';
        this.lastOrdersUpdateTime = '';
        this.positionsPnL = 0;
        this.stranglePositions = [];
        this.debitSpreadPositions = [];
        this.newexpiry = 'NIFTY20618';
        this.newstrike = 10000;
        this.newoption = 'CE';
        this.newqty = 50;
        this.newblock = 0;
        this.newlimit = 0;
        this.newstop = 0;
        this.newProductType = 'INTRADAY';
        this.newOrderType = 2;
        this.nifty_oc_check = true;
        this.usdinr_oc_check = false;
        this.oc_instru = 'NIFTY';
        this.oc_year = 2021;
        this.oc_month = 6;
        this.oc_date = 3;
        this.is_monthly_expiry = false;
        this.checked_instrument = 'USDINR';
        this.oc_range_higher = 16000; // 24200

        this.oc_range_lower = 14000; // 21000

        this.oc_range_multiple = 50;
        this.oc_strikes = [];
        this.oc_product_type = 'MARGIN';
        this.mean = 0;
        this.variance = 1;
        this.ws_access_token = 'A8E8eGyqMug7VOXnvx2dPjf9pWbf8KKgfn9RQy9EVyA.KqVXmuGCRCQ2wEf95iFEtVjQxs0_LoL9FyZ86bPJlFg';
        this.strategyPnL = 0;
        this.strategyPointsProfit = 0;
        this.suggestions = [];
        this.adjust_sugg = [];
        this.combined_SL = 0;
        this.combined_premium = 0;
        this.qty_default = 50;
        this.route.queryParams.subscribe(function (params) {
          console.log('params', params);

          if (params && params.access_token) {
            _this.access_token = params.access_token; // console.log('access_token', this.access_token);

            _this.getFunds();

            _this.getPositions();

            _this.getOrders(); // this.getPayoff();


            _this.appService.getMastersContract();
          }

          if (params && params.user_id) {
            _this.user_id = params.user_id;
          }
        });
        this.appService.requestStatusEvent$.subscribe(function (res) {
          console.log('app requestStatusEvent: ', res);
          _this.lastRequestStatus = res;
        });
        this.websocketService.websocketEvent$.subscribe(function (res) {
          console.log('app websocketEvent: ', res);

          if (res === 'connected') {
            _this.subscribePositionsFeed();
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var refresh_interval = setInterval(function () {
            _this2.updateSpotStrike();
          }, 5000);
          var autoSuggest_interval = setInterval(function () {
            _this2.autoSuggest();
          }, 2000);
          this.chartService.strategyPnLEvent$.subscribe(function (res) {
            // console.log('received:', res);
            _this2.strategyPnL = res[0];
            _this2.strategyPointsProfit = res[1];
          });
          this.chartService.optionChainEvent$.subscribe(function (res) {
            console.log('received oc:', res);
            var instru = res[0];
            var expiryDate = res[1];

            _this2.processOCRequest(instru, expiryDate);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          setTimeout(function () {});
          /* this.cdr.detectChanges(); */
        }
      }, {
        key: "processOCRequest",
        value: function processOCRequest(instru, expiryDate) {
          this.oc_instru = instru;
          var expiry = new Date(expiryDate);
          this.oc_year = expiry.getFullYear();
          this.oc_month = expiry.getMonth() + 1;
          this.oc_date = expiry.getDate();

          if (this.oc_instru === 'NIFTY') {
            this.oc_range_multiple = 50;
            var spot = this.getLtp('NIFTY50');
            var spotStrike = Math.round(spot / this.oc_range_multiple) * this.oc_range_multiple;
            this.oc_range_higher = spotStrike + 400;
            this.oc_range_lower = spotStrike - 400;
          } else if (this.oc_instru === 'BANKNIFTY') {
            this.oc_range_multiple = 100;

            var _spot = this.getLtp('BANKNIFTY');

            var _spotStrike = Math.round(_spot / this.oc_range_multiple) * this.oc_range_multiple;

            this.oc_range_higher = _spotStrike + 1200;
            this.oc_range_lower = _spotStrike - 1200;
          } else if (this.oc_instru === 'USDINR') {
            this.oc_range_multiple = 0.25;

            var _spot2 = this.getLtp('USDINR_FUT');

            var _spotStrike2 = Math.round(_spot2 / this.oc_range_multiple) * this.oc_range_multiple;

            this.oc_range_higher = _spotStrike2 + 2;
            this.oc_range_lower = _spotStrike2 - 2;
          }

          this.updateOCRange();
        }
      }, {
        key: "getStrategyPnL",
        value: function getStrategyPnL() {
          return this.strategyPnL;
        }
      }, {
        key: "getIV",
        value: function getIV(symbol, strike, type) {
          var date_expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date);

          if (this.oc_instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
          } else {
            date_expiry.setHours(15, 30, 0);
          }

          var underlying = 'NIFTY50';

          if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
          } else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
          }

          var spot = this.getLtp(underlying);
          var mkt_price = this.getLtp(symbol + type);
          var typet0 = null;

          if (type === 'CE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_2__["PositionTypeForPayOff"].CE;
          }

          if (type === 'PE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_2__["PositionTypeForPayOff"].PE;
          }

          var iv = this.calculateIV(spot, strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].INTEREST_RATE, date_expiry, typet0, mkt_price);
          return iv;
        }
      }, {
        key: "getDelta",
        value: function getDelta(symbol, strike, type) {
          //let expiry_date = new Date(this.oc_year, this.oc_month - 1, this.oc_date).toDateString();
          var date_expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date);

          if (this.oc_instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
          } else {
            date_expiry.setHours(15, 30, 0);
          }

          var date_now = new Date(); // date_now.setDate(date_now.getDate() + 0);

          var seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var delta_t = Math.floor(hours / 24) / 365.0; // time

          var underlying = 'NIFTY50';

          if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
          } else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
          }

          var spot = this.getLtp(underlying);
          var mkt_price = this.getLtp(symbol + type);
          var typet0 = null;

          if (type === 'CE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_2__["PositionTypeForPayOff"].CE;
          }

          if (type === 'PE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_2__["PositionTypeForPayOff"].PE;
          }

          var iv = this.calculateIV(spot, strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].INTEREST_RATE, date_expiry, typet0, mkt_price);
          var volt = iv / 100;
          var int_rate = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].INTEREST_RATE / 100; // console.log(spot, date_expiry, mkt_price, iv);

          var d1 = (Math.log(spot / strike) + (int_rate + Math.pow(volt, 2) / 2) * delta_t) / (volt * Math.sqrt(delta_t));
          var delta = 0;

          if (type === 'CE') {
            delta = this.getCDF(d1);
          } else if (type === 'PE') {
            delta = this.getCDF(d1) - 1;
          }

          delta = Math.round((delta + 0.00001) * 100) / 100;
          return delta;
        }
      }, {
        key: "calculateIV",
        value: function calculateIV(spot, strike, int_rate, expiry_date, type, mkt_price) {
          var high = 80;
          var low = 0;
          var iv = 0;
          var date_expiry = new Date(expiry_date);
          var date_now = new Date();
          var seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var delta_t = Math.floor(hours / 24) / 365.0;

          if (hours < 24) {
            return 0;
          }

          while (high - low > 0.0001) {
            if (this.calculateT0AtPoint(spot, strike, int_rate, expiry_date, (high + low) / 2, type) > mkt_price) {
              high = (high + low) / 2;
            } else {
              low = (high + low) / 2;
            }
          }

          iv = (high + low) / 2;
          return iv;
        }
      }, {
        key: "calculateT0AtPoint",
        value: function calculateT0AtPoint(spot, strike, int_rate, expiry_date, volatility, type, add_days) {
          var t0 = 0;
          var date_expiry = new Date(expiry_date);

          if (this.oc_instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
          } else {
            date_expiry.setHours(15, 30, 0);
          }

          if (!add_days) {
            add_days = 0;
          }

          var date_now = new Date();
          date_now.setDate(date_now.getDate() + add_days);
          var seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var delta_t = Math.floor(hours / 24) / 365.0; // time

          if (hours < 12) {
            return 0;
          } else {
            var volt = volatility / 100;
            int_rate = int_rate / 100;
            var d1 = (Math.log(spot / strike) + (int_rate + Math.pow(volt, 2) / 2) * delta_t) / (volt * Math.sqrt(delta_t)); // let d2 = (Math.log(spot / strike) + (int_rate - (Math.pow(volt, 2) / 2)) * delta_t) / (volt * Math.sqrt(delta_t));

            var d2 = d1 - volt * Math.sqrt(delta_t);
            var fv_strike = strike * Math.exp(-1 * int_rate * delta_t);

            if (type === _common_models__WEBPACK_IMPORTED_MODULE_2__["PositionTypeForPayOff"].CE) {
              t0 = spot * this.getCDF(d1) - fv_strike * this.getCDF(d2);
            }

            if (type === _common_models__WEBPACK_IMPORTED_MODULE_2__["PositionTypeForPayOff"].PE) {
              t0 = fv_strike * this.getCDF(-1 * d2) - spot * this.getCDF(-1 * d1);
            }
          }

          return t0;
        }
      }, {
        key: "getCDF",
        value: function getCDF(x) {
          var standardDeviation = Math.sqrt(this.variance);
          return 0.5 * this.erfc(-(x - this.mean) / (standardDeviation * Math.sqrt(2)));
        } // Complementary error function
        // From Numerical Recipes in C 2e p221

      }, {
        key: "erfc",
        value: function erfc(x) {
          var z = Math.abs(x);
          var t = 1 / (1 + z / 2);
          var r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
          return x >= 0 ? r : 2 - r;
        }
      }, {
        key: "getUSDINRMonth",
        value: function getUSDINRMonth() {
          return _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].USDINR_FUT_MONTH;
        }
      }, {
        key: "checkNifty",
        value: function checkNifty() {
          if (this.nifty_oc_check) {
            this.usdinr_oc_check = false;
            this.checked_instrument = 'NIFTY';
          } else {
            this.usdinr_oc_check = true;
            this.checked_instrument = 'USDINR';
          }
        }
      }, {
        key: "checkUSDINR",
        value: function checkUSDINR() {
          if (this.usdinr_oc_check) {
            this.nifty_oc_check = false;
            this.checked_instrument = 'USDINR';
          } else {
            this.nifty_oc_check = true;
            this.checked_instrument = 'NIFTY';
          }
        }
      }, {
        key: "login",
        value: function login() {
          this.auth();
        }
      }, {
        key: "auth",
        value: function auth() {
          var _this3 = this;

          this.appService.auth().subscribe(function (res) {
            console.log('app auth', res);

            if (res) {
              _this3.appService.requestStatusEvent$.next(res);

              if (res.authorization_code) {
                _this3.auth_code = res.authorization_code;

                _this3.generateAccessToken();
              }
            }
          }, function (error) {
            console.log('app auth error', error);

            _this3.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
          });
        }
      }, {
        key: "generateAccessToken",
        value: function generateAccessToken() {
          if (this.auth_code) {
            var tokenUrl = this.appService.getTokenUrl(this.auth_code, _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].fyersAppId);
            console.log('tokenUrl', tokenUrl); // window.location.href = tokenUrl;

            var wnd = window.open(tokenUrl
            /* , '_self' */
            );
          }
        }
      }, {
        key: "getFunds",
        value: function getFunds() {
          var _this4 = this;

          console.log('app getting Funds');
          this.appService.getFunds(this.access_token).subscribe(function (res) {
            console.log('app getFunds', res);

            if (res) {
              _this4.totalBalance = res.fund_limit[8].equityAmount.toLocaleString();
              _this4.availableBalance = res.fund_limit[9].equityAmount.toLocaleString();
              _this4.utilizedBalance = res.fund_limit[6].equityAmount.toLocaleString();
            }
          }, function (error) {
            console.log('app getPositions error', error);

            _this4.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
          });
        }
      }, {
        key: "getPositions",
        value: function getPositions() {
          var _this5 = this;

          console.log('app getting Positions');
          this.appService.getPositions(this.access_token).subscribe(function (res) {
            console.log('app getPositions', res);

            if (res) {
              _this5.lastPositionsUpdateTime = new Date().toLocaleTimeString();

              _this5.appService.requestStatusEvent$.next(res);

              _this5.mapPositions(res);
            }
          }, function (error) {
            console.log('app getPositions error', error);

            _this5.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
          });
        }
      }, {
        key: "includePosPnLInSum1",
        value: function includePosPnLInSum1(pos) {
          pos.includeInSum1 = !pos.includeInSum1;
        }
      }, {
        key: "includePosPnLInSum2",
        value: function includePosPnLInSum2(pos) {
          pos.includeInSum2 = !pos.includeInSum2;
        }
      }, {
        key: "includePosPnLInSum3",
        value: function includePosPnLInSum3(pos) {
          pos.includeInSum3 = !pos.includeInSum3;
        }
      }, {
        key: "includePosPnLInSum4",
        value: function includePosPnLInSum4(pos) {
          pos.includeInSum4 = !pos.includeInSum4;
        }
      }, {
        key: "getPositionsPnLSum",
        value: function getPositionsPnLSum(num) {
          var sum = 0;

          if (this.positions) {
            this.positions.forEach(function (pos) {
              if (num === 1 && pos.includeInSum1) {
                sum += pos.pnl;
              }

              if (num === 2 && pos.includeInSum2) {
                sum += pos.pnl;
              }

              if (num === 3 && pos.includeInSum3) {
                sum += pos.pnl;
              }

              if (num === 4 && pos.includeInSum4) {
                sum += pos.pnl;
              }
            });
            sum = Math.round((sum + 0.00001) * 100) / 100; // round to 2 decimal places

            this.positionsPnL = sum;
          }

          return sum;
        }
      }, {
        key: "mapPositions",
        value: function mapPositions(res) {
          var _this6 = this;

          this.positions = [];

          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].RestMode === 'fyers') {
            if (res.netPositions instanceof Array) {
              res.netPositions.forEach(function (pos) {
                var p = new _common_models__WEBPACK_IMPORTED_MODULE_2__["Position"]();
                p.id = pos.id;
                p.scrip = pos.symbol;
                p.netQty = pos.netQty;
                p.buyAvg = pos.buyAvg;
                p.sellAvg = pos.sellAvg;
                p.type = pos.productType;
                p.realizedProfit = pos.realizedProfit;
                p.pnl = pos.pl;

                _this6.positions.push(p);
              });
              this.subscribePositionsFeed();
            }
          }
        }
      }, {
        key: "subscribePositionsFeed",
        value: function subscribePositionsFeed() {
          var sub = [];
          this.positions.forEach(function (pos) {
            var symbol = pos.scrip;
            symbol = symbol.replace('NSE:', '');
            var instru = '';

            if (symbol.startsWith('NIFTY')) {
              instru = 'NIFTY';
              symbol = symbol.replace('NIFTY', '');
            }

            if (symbol.startsWith('BANKNIFTY')) {
              instru = 'BANKNIFTY';
              symbol = symbol.replace('BANKNIFTY', '');
            }

            if (symbol.startsWith('USDINR')) {
              instru = 'USDINR';
              symbol = symbol.replace('USDINR', '');
            }

            var type = '';

            if (symbol.includes('CE')) {
              type = 'CE';
            }

            if (symbol.includes('PE')) {
              type = 'PE';
            }

            console.log('subscribePositionsFeed symbol: ' + symbol);
            symbol = symbol.slice(0, -2); // remove CE PE at end

            var strike = symbol.substring(5);
            var expiry = symbol.substring(0, 5); // 20N08 20JUN 20911
            // 20O0812000CE 2091012000CE

            var expiryDate = '';

            if (isNaN(expiry)) {
              // 20N08 20JUN
              if (isNaN(parseInt(expiry[4]))) {
                // 20JUN // checking whether last character is number or not - 20N08 20JUN
                if (instru === 'NIFTY' || instru === 'BANKNIFTY') {
                  expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].monthlyExpiryDates[expiry].toDateString();
                }

                if (instru === 'USDINR') {
                  expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].monthlyExpiryDatesUSDINR[expiry].toDateString();
                }
              } else {
                // 20N08
                var year = Number(expiry.substring(0, 2)) + 2000;
                var month = null;

                if (expiry[2] === 'O') {
                  month = 9;
                } else if (expiry[2] === 'N') {
                  month = 10;
                } else if (expiry[2] === 'D') {
                  month = 11;
                }

                var date = Number(expiry.substring(3, 5));
                console.log('subscribePositionsFeed oct nov dec: ', year, month, date);
                expiryDate = new Date(year, month, date).toDateString();
              } // console.log('expiryDate', expiryDate);

            } else {
              // 20618
              var _year = Number(expiry.substring(0, 2)) + 2000;

              var _month = Number(expiry.substring(2, 3)) - 1;

              var _date = Number(expiry.substring(3, 5));

              console.log('subscribePositionsFeed: ', _year, _month, _date);
              expiryDate = new Date(_year, _month, _date).toDateString();
            }

            var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_2__["Instrument"]();
            e1.expiry = expiryDate;
            e1.instru = instru;
            e1.strike = Number(strike);
            e1.type = type;
            sub.push(e1);
            /*
            let e2 = new Instrument();
            e2.expiry = expiryDate;
            e2.instru = instru;
            e2.strike = Number(strike);
            e2.type = 'PE';
            sub.push(e2); */
          });
          console.log('positions feed', sub);
          this.appService.sendSubscriptions(sub);
          /* let symbol = pos.scrip;
          symbol = symbol.replace('NSE:', '');
          let instru = '';
          if (symbol.includes('NIFTY')) {
            instru = 'NIFTY';
            symbol = symbol.replace('NIFTY', '');
          }
          if (symbol.includes('USDINR')) {
            instru = 'USDINR';
            symbol = symbol.replace('USDINR', '');
          }
          let type = '';
          if (symbol.includes('CE')) {
            type = 'CE';
          }
          if (symbol.includes('PE')) {
            type = 'PE';
          }
          symbol = symbol.slice(0, -2);
          let strike = symbol.substring(5);
          let expiry = symbol.substring(0, 5); */
          // let alice_symbol = instru + expiry + symbol + type;
        }
      }, {
        key: "getMastersStatus",
        value: function getMastersStatus() {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.size) {
            return 'Masters Contract is available';
          }

          return 'Masters Contract not available yet';
        }
      }, {
        key: "isSocketConnected",
        value: function isSocketConnected() {
          return this.websocketService.isSocketConnected();
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this7 = this;

          console.log('app getting Orders');
          this.appService.getOrders(this.access_token).subscribe(function (res) {
            console.log('app getOrders', res);

            if (res) {
              _this7.lastOrdersUpdateTime = new Date().toLocaleTimeString();

              _this7.appService.requestStatusEvent$.next(res);

              _this7.mapOrders(res);
            }
          }, function (error) {
            console.log('app getOrders error', error);

            _this7.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
          });
        }
      }, {
        key: "mapOrders",
        value: function mapOrders(res) {
          var _this8 = this;

          this.orders = [];

          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].RestMode === 'fyers') {
            if (res.orderBook instanceof Array) {
              res.orderBook.forEach(function (order) {
                var o = new _common_models__WEBPACK_IMPORTED_MODULE_2__["Order"]();
                o.id = order.id;
                o.scrip = order.symbol;
                o.qty = order.qty;
                o.status = order.status;
                o.message = order.message;
                o.type = order.type;
                o.limit = order.limitPrice;
                o.stop = order.stopPrice;
                o.tradedPrice = order.tradedPrice;
                o.side = order.side;
                o.orderDateTime = order.orderDateTime;

                _this8.orders.push(o);
              });
            }
          }
        }
      }, {
        key: "getCMP",
        value: function getCMP() {
          return 0.0;
        }
      }, {
        key: "getOrderStatus",
        value: function getOrderStatus(status) {
          if (status === 1) {
            return 'Cancelled';
          } else if (status === 2) {
            return 'Filled';
          } else if (status === 3) {
            return 'Unknown';
          } else if (status === 4) {
            return 'Transit';
          } else if (status === 5) {
            return 'Rejected';
          } else if (status === 6) {
            return 'Pending';
          }
        }
      }, {
        key: "getOrderType",
        value: function getOrderType(type) {
          if (type === 1) {
            return 'Limit';
          } else if (type === 2) {
            return 'Market';
          } else if (type === 3) {
            return 'SL-M';
          } else if (type === 4) {
            return 'SL';
          }
        }
      }, {
        key: "newOrder",
        value: function newOrder(side) {
          var _this9 = this;

          var symbol = 'NSE:' + this.newexpiry + this.newstrike + this.newoption;
          this.appService.placeOrder(this.access_token, symbol, this.newqty, this.newOrderType, side, this.newProductType, this.newlimit, this.newstop).subscribe(function (res) {
            console.log('app newOrder', res);

            _this9.refreshAll();

            if (res) {
              _this9.appService.requestStatusEvent$.next(res);
            }
          }, function (error) {
            console.log('app newOrder error', error);

            _this9.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);

            _this9.refreshAll();
          });
        }
      }, {
        key: "resetNewOrder",
        value: function resetNewOrder() {
          this.newexpiry = 'NIFTY20618';
          this.newstrike = 10000;
          this.newoption = 'CE';
          this.newqty = 50;
          this.newblock = 0;
          this.newOrderType = 2;
          this.newProductType = 'INTRADAY';
          this.newlimit = 0;
          this.newstop = 0;
        }
      }, {
        key: "exitSelected",
        value: function exitSelected() {
          var _this10 = this;

          if (this.positions) {
            if (confirm('Exit Selected?')) {
              this.positions.forEach(function (pos) {
                if (pos.includeInSum1 || pos.includeInSum2 || pos.includeInSum3 || pos.includeInSum4) {
                  _this10.exitPosition(pos, true);
                }
              });
            }
          }
        }
      }, {
        key: "exitPosition",
        value: function exitPosition(pos) {
          var _this11 = this;

          var isExitSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var qty = Number(document.getElementById('pos-qty-' + pos.id).value);
          /* let limit = ((document.getElementById('pos-limit-' + pos.id)) as HTMLInputElement).value; */

          if (!qty) {
            qty = Math.abs(pos.netQty);
          }

          var buysell = 0;

          if (pos.netQty > 0) {
            buysell = -1;
          } else if (pos.netQty < 0) {
            buysell = 1;
          }

          var orderType = 2; // MARKET

          console.log('placing order: ', pos.scrip, qty, orderType, buysell, pos.type, 0);
          var user_confirm = isExitSelected;

          if (isExitSelected === false) {
            user_confirm = confirm('Exit ' + qty + ' Qty with ' + (buysell === -1 ? 'Sell order' : 'Buy order') + ' Sure?');
          }

          if (user_confirm) {
            this.appService.placeOrder(this.access_token, pos.scrip, qty, orderType, buysell, pos.type, 0, 0).subscribe(function (res) {
              console.log('app exitPosition', res);

              _this11.refreshAll();

              if (res) {
                _this11.appService.requestStatusEvent$.next(res);

                _this11.playAudio('success');
              }
            }, function (error) {
              console.log('app exitPosition error', error);

              _this11.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);

              _this11.refreshAll();

              _this11.playAudio('error');
            });
          }
        }
      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.getFunds();
          this.getPositions();
          this.getOrders();
        }
      }, {
        key: "addToStrategyBuilder",
        value: function addToStrategyBuilder(oc, type) {
          this.appService.payOffEvent$.next({
            symbol: oc.symbol + type,
            ltp: this.getLtp(oc.symbol + type),
            qty: this.qty_default
          });
        }
      }, {
        key: "getQtyOfStrikeInStrategy",
        value: function getQtyOfStrikeInStrategy(strike) {
          var curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].curr_positions_trades;

          if (curr_positions_trades) {
            for (var i = 0; i < curr_positions_trades.length; i++) {
              var element = curr_positions_trades[i];
              /* {
                qty: 50,
                scrip: '11150CE',
                expiry: '01OCT2020',
                entry: 50,
                exit: 0,
              }, */

              var ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
              var strikeExpiry = new Date(element.expiry);

              if (ocDate.getDate() === strikeExpiry.getDate() && element.scrip === strike && element.exit === 0) {
                return element.qty;
              }
            }

            return null;
          }
        }
      }, {
        key: "getCostOfStrikeInStrategy",
        value: function getCostOfStrikeInStrategy(strike) {
          var curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].curr_positions_trades;

          if (curr_positions_trades) {
            for (var i = 0; i < curr_positions_trades.length; i++) {
              var element = curr_positions_trades[i];
              /* {
                qty: 50,
                scrip: '11150CE',
                expiry: '01OCT2020',
                entry: 50,
                exit: 0,
              }, */

              var ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
              var strikeExpiry = new Date(element.expiry);

              if (ocDate.getDate() === strikeExpiry.getDate() && element.scrip === strike && element.exit === 0) {
                return element.entry;
              }
            }

            return null;
          }
        }
      }, {
        key: "isStrikeInCurrStrategy",
        value: function isStrikeInCurrStrategy(strike) {
          var curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].curr_positions_trades;

          if (curr_positions_trades) {
            for (var i = 0; i < curr_positions_trades.length; i++) {
              var element = curr_positions_trades[i];
              /* {
                qty: 50,
                scrip: '11150CE',
                expiry: '01OCT2020',
                entry: 50,
                exit: 0,
              }, */

              var ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
              var strikeExpiry = new Date(element.expiry);

              if (element.exit === 0 && ocDate.getDate() === strikeExpiry.getDate() && element.scrip === strike) {
                return true;
              }
            }

            return false;
          }
        }
      }, {
        key: "ocOrder",
        value: function ocOrder(buysell, optionType, oc) {
          var _this12 = this;

          var symbol = 'NSE:' + oc.symbol + optionType;
          var strike = oc.strike;
          var productType = this.oc_product_type;
          var limit;
          console.log('ocOrder qty: ' + 'oc-qty-' + optionType + '-' + oc.symbol);
          var qty = Number(document.getElementById('oc-qty-' + optionType + '-' + oc.symbol).value);
          limit = document.getElementById('oc-limit-' + optionType + '-' + oc.symbol).value;
          /* let block = (document.getElementById('oc-block-' + optionType + '-' + oc.symbol) as HTMLInputElement).value; */

          var orderType = 2; // MARKET

          if (limit) {
            orderType = 1; // LIMIT
          } else {
            limit = 0;
          }

          console.log('placing order: ', symbol, qty, orderType === 2 ? 'Market' : 'Limit', buysell, productType, limit);

          if (true
          /* confirm(qty + ' Qty, ' + limit + ' Limit, ' + (orderType === 2 ? 'Market' : 'Limit') + ' order ' + 'Sure?') */
          ) {
              this.appService.placeOrder(this.access_token, symbol, qty, orderType, buysell, productType, limit, 0).subscribe(function (res) {
                console.log('app ocOrder', res);

                _this12.refreshAll();

                if (res) {
                  _this12.appService.requestStatusEvent$.next(symbol + ' ' + qty + ' ' + (orderType === 2 ? 'Market' : 'Limit') + ' ' + res); // Order submitted successfully. Your Order Ref. No.220091778602


                  _this12.playAudio('success');
                }
              }, function (error) {
                console.log('app ocOrder error', error);

                _this12.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);

                _this12.refreshAll();

                _this12.playAudio('error');
              });
            }
        }
      }, {
        key: "isAnyOpenPosition",
        value: function isAnyOpenPosition() {
          var curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].curr_positions_trades;

          if (curr_positions_trades) {
            for (var i = 0; i < curr_positions_trades.length; i++) {
              var element = curr_positions_trades[i];
              /* {
                qty: 50,
                scrip: '11150CE',
                expiry: '01OCT2020',
                entry: 50,
                exit: 0,
              }, */

              if (element.exit === 0) {
                return true;
              }
            }
          }

          return false;
        }
      }, {
        key: "autoSuggest",
        value: function autoSuggest() {
          this.findInitialPositions();
          this.checkAdjustments();
        }
      }, {
        key: "findInitialPositions",
        value: function findInitialPositions() {
          this.suggestions = [];

          if (!this.isAnyOpenPosition()) {
            for (var index = this.oc_range_lower; index <= this.oc_range_higher; index += this.oc_range_multiple) {
              //this.oc_strikes.push({symbol: this.oc_instru + this.getExpiry() + index, strike: index, ltp: 0, delta: 0 }); // symbol: NIFTY2061810000 NIFTY20JUN10000
              var symbol = this.oc_instru + this.getExpiry() + index;
              var ltp = this.getLtp(symbol + 'CE');

              if (ltp >= 16 && ltp <= 28) {
                var delta = this.getDelta(symbol, index, 'CE');

                if (delta > 0 && Math.abs(delta) < 1) {
                  // on 0DTE, delta is not calculated correctly
                  //console.log(index, ltp, delta);
                  for (var index1 = this.oc_range_lower; index1 <= this.oc_range_higher; index1 += this.oc_range_multiple) {
                    var symbol1 = this.oc_instru + this.getExpiry() + index1;
                    var delta1 = this.getDelta(symbol1, index1, 'PE');

                    if (Math.abs(delta + delta1) <= 0.025) {
                      var ltp1 = this.getLtp(symbol1 + 'PE');

                      if (ltp1) {
                        this.suggestions.push({
                          strikeCE: index,
                          deltaCE: delta,
                          ltpCE: ltp,
                          strikePE: index1,
                          deltaPE: delta1,
                          ltpPE: ltp1
                        });
                      }
                    }
                  }
                }
              }
            } // console.log(this.suggestions);

          }
        }
      }, {
        key: "checkAdjustments",
        value: function checkAdjustments() {
          var curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].curr_positions_trades;
          var ceDelta = 0;
          var cePremium = 0;
          var ceQty = 0;
          var peDelta = 0;
          var pePremium = 0;
          var peQty = 0;
          this.adjust_sugg = [];
          this.combined_premium = 0;

          if (curr_positions_trades) {
            for (var i = 0; i < curr_positions_trades.length; i++) {
              var element = curr_positions_trades[i];
              /* {
                qty: 50,
                scrip: '11150CE',
                expiry: '01OCT2020',
                entry: 50,
                exit: 0,
              }, */

              var ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
              var strikeExpiry = new Date(element.expiry);

              if (element.exit === 0 && element.qty < 0) {
                // calculating delta and premiums of only sold positions
                var type = '';

                if (element.scrip.includes('CE')) {
                  type = 'CE';
                }

                if (element.scrip.includes('PE')) {
                  type = 'PE';
                }

                var index = element.scrip.slice(0, -2);
                var symbol = this.oc_instru + this.getExpiry() + index;
                var delta = this.getDelta(symbol, index, type) * element.qty;
                var ltp = this.getLtp(symbol + type) * element.qty;

                if (type === 'CE') {
                  cePremium += ltp;
                  ceDelta += delta;
                  ceQty += element.qty;
                } else if (type === 'PE') {
                  pePremium += ltp;
                  peDelta += delta;
                  peQty += element.qty;
                }
              }
            }

            if (cePremium !== 0 && pePremium !== 0) {
              cePremium = cePremium / ceQty;
              pePremium = pePremium / peQty;
              this.combined_premium = cePremium + pePremium;
              this.combined_premium = Math.round((this.combined_premium + 0.00001) * 100) / 100;

              if (this.combined_SL && this.combined_premium >= this.combined_SL) {
                this.playAudio('warn');
              }
            }

            if (ceDelta !== 0 && peDelta !== 0 && cePremium && pePremium) {
              ceDelta = ceDelta / ceQty;
              peDelta = peDelta / peQty;

              if (Math.abs(ceDelta + peDelta) > 0.04) {
                // console.log('mismatch');
                this.roll('CE', peDelta);
                this.roll('PE', ceDelta);
              } // console.log(ceDelta, peDelta, cePremium, pePremium);

            }
          }
        }
      }, {
        key: "roll",
        value: function roll(type, delta) {
          for (var index1 = this.oc_range_lower; index1 <= this.oc_range_higher; index1 += this.oc_range_multiple) {
            var symbol1 = this.oc_instru + this.getExpiry() + index1;
            var delta1 = this.getDelta(symbol1, index1, type);

            if (Math.abs(delta + delta1) <= 0.025) {
              var ltp1 = this.getLtp(symbol1 + type);

              if (ltp1) {
                this.adjust_sugg.push({
                  action: 'Adjust ' + type,
                  strike: index1 + type,
                  ltp: ltp1
                });
              }
            }
          }
        }
      }, {
        key: "updateOCRange",
        value: function updateOCRange() {
          var _this13 = this;

          this.is_monthly_expiry = false;
          var enteredDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
          var tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].monthlyExpiryDates;

          if (this.oc_instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].monthlyExpiryDatesUSDINR;
          }

          for (var key in tempmonthlyExpiryDates) {
            if (tempmonthlyExpiryDates.hasOwnProperty(key)) {
              // console.log(key + " -> " + this.tempmonthlyExpiryDates[key] + ' ' + enteredDate);
              if (enteredDate.getTime() === tempmonthlyExpiryDates[key].getTime()) {
                console.log('monthly expiry matched');
                this.is_monthly_expiry = true;
                break;
              }
            }
          }

          this.oc_strikes = [];

          for (var index = this.oc_range_lower; index <= this.oc_range_higher; index += this.oc_range_multiple) {
            this.oc_strikes.push({
              symbol: this.oc_instru + this.getExpiry() + index,
              strike: index,
              ltp: 0,
              delta: 0
            }); // symbol: NIFTY2061810000 NIFTY20JUN10000
          }

          var sub = [];
          this.oc_strikes.forEach(function (oc) {
            var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_2__["Instrument"]();
            e1.expiry = new Date(_this13.oc_year, _this13.oc_month - 1, _this13.oc_date).toDateString();
            e1.instru = _this13.oc_instru;
            e1.strike = Number(oc.strike);
            e1.type = 'CE';
            sub.push(e1);
            var e2 = new _common_models__WEBPACK_IMPORTED_MODULE_2__["Instrument"]();
            e2.expiry = new Date(_this13.oc_year, _this13.oc_month - 1, _this13.oc_date).toDateString();
            e2.instru = _this13.oc_instru;
            e2.strike = Number(oc.strike);
            e2.type = 'PE';
            sub.push(e2);
          });
          console.log('updateOCRange Subscriptions: ' + sub);
          this.appService.sendSubscriptions(sub);
        }
      }, {
        key: "clearOC",
        value: function clearOC() {
          this.oc_strikes = [];
        }
      }, {
        key: "getSpotValue",
        value: function getSpotValue() {
          var underlying = '';

          if (this.oc_instru === 'NIFTY') {
            underlying = 'NIFTY50';
          } else if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
          } else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
          }

          var e = this.getLtp(underlying);
          return e;
        }
      }, {
        key: "updateSpotStrike",
        value: function updateSpotStrike() {
          var underlying = '';

          if (this.oc_instru === 'NIFTY') {
            underlying = 'NIFTY50';
          } else if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
          } else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
          }

          var e = this.getLtp(underlying);
          var spotStrike = Math.round(e / this.oc_range_multiple) * this.oc_range_multiple;
          /* let symbol = this.oc_instru + this.getExpiry() + spotStrike;
               let ce_premium = this.getLtp(symbol + 'CE');
          let pe_premium = this.getLtp(symbol + 'PE');
          let targetStrike = ce_premium - pe_premium + spotStrike;
          targetStrike = (Math.round(targetStrike / this.oc_range_multiple) * this.oc_range_multiple); */
          // targetStrike:72.75 74.25 0.0975 0.15 74.25
          // console.log('oc targetStrike:' + symbol + ' ' + targetStrike + ' ' + ce_premium + ' ' + pe_premium + ' ' + spotStrike);

          this.ocSpotStrike = spotStrike; // targetStrike;
        }
      }, {
        key: "isSpotStrike",
        value: function isSpotStrike(strike) {
          /* let underlying = '';
          if (this.oc_instru === 'NIFTY') {
            underlying = 'NIFTY50';
          } else if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
          } else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
          }
          let e = this.getLtp(underlying);
          if ((Math.round(e / this.oc_range_multiple) * this.oc_range_multiple) === strike) {
            return true;
          }
          return false; */
          if (strike === this.ocSpotStrike) {
            return true;
          }

          return false;
        }
      }, {
        key: "getPosLTP",
        value: function getPosLTP(position) {
          var symbol = position.scrip;
          symbol = symbol.replace('NSE:', '');
          /* let instru = '';
          if (symbol.includes('NIFTY')) {
            instru = 'NIFTY';
            symbol = symbol.replace('NIFTY', '');
          }
          if (symbol.includes('USDINR')) {
            instru = 'USDINR';
            symbol = symbol.replace('USDINR', '');
          }
          let type = '';
          if (symbol.includes('CE')) {
            type = 'CE';
          }
          if (symbol.includes('PE')) {
            type = 'PE';
          }
          symbol = symbol.slice(0, -2);
          // if positions contains another expiry?
          symbol = symbol.substring(5); // remove the expiry string
          let alice_symbol = instru + symbol + type; */

          position.cmp = this.getLtp(symbol);
          return position.cmp;
        }
      }, {
        key: "getPosPnL",
        value: function getPosPnL(position) {
          // return position.realizedProfit;
          if (position.cmp) {
            var pnl = null;
            var realizedProfit = 0;

            if (position.realizedProfit) {
              realizedProfit = position.realizedProfit;
            }

            if (position.netQty === 0) {
              return position.pnl;
            }

            if (position.netQty > 0) {
              var p = (position.cmp - position.buyAvg) * position.netQty;
              pnl = realizedProfit + p;
            } else if (position.netQty < 0) {
              var _p = (position.sellAvg - position.cmp) * -position.netQty;

              pnl = realizedProfit + _p;
            }

            if (position.scrip.includes('USDINR')) {
              pnl *= 1000;
            }

            position.pnl = Math.round((pnl + 0.00001) * 100) / 100;
            return position.pnl;
          } else {
            return position.pnl;
          }
        } // strike in map is NIFTY2061810000CE or NIFTY20JUN10000CE

      }, {
        key: "getExpiry",
        value: function getExpiry() {
          if (this.is_monthly_expiry) {
            return '' + (this.oc_year - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].monthsMapping[this.oc_month];
          }

          var expiryMonth = null;

          if (this.oc_month === 10) {
            expiryMonth = 'O';
          } else if (this.oc_month === 11) {
            expiryMonth = 'N';
          } else if (this.oc_month === 12) {
            expiryMonth = 'D';
          } else {
            expiryMonth = this.oc_month;
          }

          return '' + (this.oc_year - 2000) + expiryMonth + ('0' + this.oc_date).slice(-2); //this.oc_date;
        }
      }, {
        key: "getLtp",
        value: function getLtp(strike) {
          var oc_strike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          // console.log('strike', strike);
          if (strike === 'USDINR_FUT') {
            var expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].year + _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].USDINR_FUT_MONTH];
            var expiryMonth = null;

            if (expiryDate.getMonth() + 1 === 10) {
              expiryMonth = 'O';
            } else if (expiryDate.getMonth() + 1 === 11) {
              expiryMonth = 'N';
            } else if (expiryDate.getMonth() + 1 === 12) {
              expiryMonth = 'D';
            } else {
              expiryMonth = expiryDate.getMonth() + 1;
            }

            var expiry = '' + (expiryDate.getFullYear() - 2000) + expiryMonth + ('0' + expiryDate.getDate()).slice(-2);
            strike = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].USDINR_FUT_MONTH + 'FUT'; // console.log('getLtp strike: ' + strike);
          }

          var ltp = this.mapService.getLtp(strike);

          if (oc_strike) {
            oc_strike.ltp = ltp;
          }

          return ltp;
        }
      }, {
        key: "getAtp",
        value: function getAtp(strike) {
          return this.mapService.getAtp(strike);
        }
      }, {
        key: "getVolume",
        value: function getVolume(strike) {
          var volume = this.mapService.getVolume(strike);

          if (volume) {
            return volume.toLocaleString();
          }

          return volume;
        }
      }, {
        key: "getOI",
        value: function getOI(strike) {
          this.mapService.getOI(strike);
        }
      }, {
        key: "getChgOI",
        value: function getChgOI(strike) {
          this.mapService.getChgOI(strike);
        }
      }, {
        key: "connectWS",
        value: function connectWS() {
          this.appService.connectWebsocket(this.ws_access_token);
        }
      }, {
        key: "includeInStrangleFn",
        value: function includeInStrangleFn(symbol) {
          if (this.stranglePositions.includes(symbol)) {
            this.stranglePositions = this.stranglePositions.filter(function (e) {
              return e !== symbol;
            });
          } else {
            this.stranglePositions.push(symbol);
          }
        }
      }, {
        key: "includeInDebitSpreadFn",
        value: function includeInDebitSpreadFn(symbol) {
          if (this.debitSpreadPositions.includes(symbol)) {
            this.debitSpreadPositions = this.debitSpreadPositions.filter(function (e) {
              return e !== symbol;
            });
          } else {
            this.debitSpreadPositions.push(symbol);
          }
        }
      }, {
        key: "getProfitForStrangle",
        value: function getProfitForStrangle() {
          var _this14 = this;

          var pnl = 0.0;
          var lotsize = 0;

          if (this.oc_instru === 'NIFTY') {
            lotsize = 50;
          } else if (this.oc_instru === 'BANKNIFTY') {
            lotsize = 25;
          } else if (this.oc_instru === 'USDINR') {
            lotsize = 1000;
          }

          var credit = 0;
          this.stranglePositions.forEach(function (symbol) {
            var ltp = _this14.getLtp(symbol);

            credit += ltp; // console.log(symbol + ', ltp: ' + ltp);

            pnl += ltp * lotsize;
          });
          credit = Math.round((credit + 0.00001) * 100) / 100; // round to 2 decimal places

          return credit + ' , ' + pnl;
        }
      }, {
        key: "getPnLForDebitSpread",
        value: function getPnLForDebitSpread() {
          var _this15 = this;

          var profit = 0.0;
          var loss = 0.0;
          var lotsize = 0;
          var spread = 0;

          if (this.oc_instru === 'NIFTY') {
            lotsize = 50;
            spread = 50;
          } else if (this.oc_instru === 'BANKNIFTY') {
            lotsize = 25;
            spread = 100;
          } else if (this.oc_instru === 'USDINR') {
            lotsize = 1000;
            spread = 0.25;
          }

          var pos = [];
          this.debitSpreadPositions.forEach(function (symbol) {
            var ltp = _this15.getLtp(symbol); // console.log(symbol + ', ltp: ' + ltp);


            pos.push(ltp);
          });

          if (pos.length === 2) {
            var s1 = pos[0];
            var s2 = pos[1];
            var debit = Math.abs(s1 - s2);
            loss = debit * lotsize;
            profit = (spread - debit) * lotsize;
            /*
            Net Debit = Premium Paid for lower strike – Premium Received for higher strike
            Bull Call Spread Max loss = Net Debit of the Strategy
            Bull Call Spread Max Profit = Spread – Net Debit
            */
          }

          return [profit, loss];
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
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chart_chart_service__WEBPACK_IMPORTED_MODULE_7__["ChartService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 244,
      vars: 66,
      consts: [[1, "main-content"], [1, "top-content", "d-flex"], [1, "mr-auto"], ["type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "btn btn-link mt-0", 3, "click", 4, "ngIf"], [1, "mr-4", "mt-2"], [1, ""], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "width", "200px"], [2, "width", "50%"], [1, "ml-1"], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "width", "220px"], [2, "margin-top", "0.5rem"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "refresh-btn", 3, "click"], [1, "flex-container"], [1, "positions_div"], [1, "table-title"], [1, "font-weight-bold"], [1, "pl-4", "pr-4"], [1, "positions-sum", "font-weight-bold"], [3, "ngClass"], [1, "pl-2", "pr-2"], [1, "ml-auto", "float-right"], [1, "form-check-inline"], ["for", "hide-positions", 1, "form-check-label", "mr-1"], ["type", "checkbox", "value", "", "id", "hide-positions", 1, "form-check-input", "mr-2", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "refresh-btn", 3, "disabled", "click"], [1, "table", "table-sm", "table-bordered", "shadow", "text-center"], [1, "thead-light"], ["scope", "col"], [1, "orderbook_div"], [1, "d-flex"], [1, "form-check-inline", "ml-auto"], ["for", "hide-orders", 1, "form-check-label", "mr-1"], ["type", "checkbox", "value", "", "id", "hide-orders", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check", "text-center", 2, "font-size", "18px"], ["type", "checkbox", "value", "", "id", "disable-order-buttons", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "disable-order-buttons", 1, "form-check-label"], [1, "algo-suggestions-main", "shadow-sm", "p-3", "mb-5", "bg-white"], [1, "mr-2"], [1, "font-weight-bold", 3, "ngClass"], ["class", "suggest-positions", 4, "ngFor", "ngForOf"], [1, "ml-4", "mr-3"], ["type", "number", "placeholder", "Combined SL", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "70px", "display", "inline", 3, "ngModel", "ngModelChange"], [1, "option-chain"], [1, "new-input", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["value", "NIFTY"], ["value", "BANKNIFTY"], ["value", "USDINR"], ["id", "strategy-qty", "type", "number", "placeholder", "Qty Default", 1, "ml-2", "form-control", "form-control-sm", 2, "display", "inline", "width", "70px", 3, "ngModel", "ngModelChange"], [2, "display", "inline-block", "margin-left", "20px", "margin-right", "10px"], [1, "input-group", "input-group-sm", "new-input-prepend-expiry"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "confirmation-check", "form-check-inline"], ["type", "checkbox", "value", "", "id", "is-monthly-expiry", 1, "form-check-input", 3, "ngModel", "disabled", "ngModelChange"], ["for", "is-monthly-expiry", 1, "form-check-label"], [2, "display", "inline-block", "margin-left", "20px", "margin-right", "10px", "margin-bottom", "20px"], [1, "input-group", "input-group-sm", "new-input-prepend-oc"], ["type", "number", "min", "0", "step", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "50", "step", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "ml-1", 3, "click"], [1, "table", "table-sm", "table-bordered", "shadow", "mb-0", "text-center"], [1, "text-center"], ["colspan", "4", "scope", "col"], ["scope", "col", 1, "oc-col-actions"], ["scope", "col", 1, "oc-col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["type", "radio", "value", "INTRADAY", "id", "oc-order-type-intraday", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "oc-order-type-intraday", 1, "form-check-label"], ["type", "radio", "value", "MARGIN", "id", "oc-order-type-margin", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "oc-order-type-margin", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-link", "mt-0", 3, "click"], [1, "form-check-inline", "posCheckbox"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "change"], [1, "positions-row-actions"], ["type", "number", "placeholder", "Qty", 1, "pos-input", "form-control", "form-control-sm", 3, "id"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "suggest-positions"], [1, "text-info", "font-weight-bold", 3, "ngClass"], ["class", "ocStrategyStrikeQty", 4, "ngIf"], [1, "font-weight-bold", "text-center", 3, "ngClass"], ["class", "ocStrategyStrikeQty oc-strike-spot", 4, "ngIf"], [1, "ocStrategyStrikeQty"], [1, "ocStrategyStrikeQty", "oc-strike-spot"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_button_6_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_span_8_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_span_9_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_button_10_Template, 2, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nifty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BNF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_38_listener() {
            return ctx.refreshAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Refresh All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Positions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " P&L1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " P&L2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " P&L3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " P&L4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_75_listener($event) {
            return ctx.hide_positions = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_76_listener() {
            return ctx.exitSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Exit selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "table", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "thead", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "NetQty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "BuyAvg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "SellAvg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "CMP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "PnL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AppComponent_tbody_97_Template, 2, 1, "tbody", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_106_listener($event) {
            return ctx.hide_orders = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "table", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "thead", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "B/S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Qty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, AppComponent_tbody_130_Template, 2, 1, "tbody", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_133_listener($event) {
            return ctx.disable_order_buttons = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Disable order buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Strategy PnL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, AppComponent_span_142_Template, 2, 4, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, AppComponent_span_143_Template, 2, 3, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Combined SL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_148_listener($event) {
            return ctx.combined_SL = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "app-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_152_listener($event) {
            return ctx.oc_instru = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "NIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "BANKNIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "USDINR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_159_listener($event) {
            return ctx.qty_default = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Expiry: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_166_listener($event) {
            return ctx.oc_year = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_171_listener($event) {
            return ctx.oc_month = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_176_listener($event) {
            return ctx.oc_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_178_listener($event) {
            return ctx.is_monthly_expiry = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Is Monthly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Strike range: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Higher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_187_listener($event) {
            return ctx.oc_range_higher = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Lower");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_192_listener($event) {
            return ctx.oc_range_lower = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Multiple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_197_listener($event) {
            return ctx.oc_range_multiple = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_198_listener() {
            return ctx.updateOCRange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_200_listener() {
            return ctx.clearOC();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "table", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "thead", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tr", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Calls");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Puts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "th", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Delta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "LTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Strike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "LTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Delta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "th", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](228, AppComponent_tr_228_Template, 34, 38, "tr", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_230_listener($event) {
            return ctx.oc_product_type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Intraday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_234_listener($event) {
            return ctx.oc_product_type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMastersStatus());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.access_token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSocketConnected());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSocketConnected());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSocketConnected());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Funds: Total: ", ctx.totalBalance, ", Available: ", ctx.availableBalance, ", Utilized: ", ctx.utilizedBalance, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getLtp("NIFTY50"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getLtp("BANKNIFTY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("USDINR ", ctx.getUSDINRMonth(), " FUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getLtp("USDINR_FUT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Positions last update: ", ctx.lastPositionsUpdateTime, " | Orders last update: ", ctx.lastOrdersUpdateTime, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](51, _c0, ctx.getPositionsPnLSum(1) < 0, ctx.getPositionsPnLSum(1) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(1), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](54, _c0, ctx.getPositionsPnLSum(2) < 0, ctx.getPositionsPnLSum(2) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(2), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](57, _c0, ctx.getPositionsPnLSum(3) < 0, ctx.getPositionsPnLSum(3) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(3), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](60, _c0, ctx.getPositionsPnLSum(4) < 0, ctx.getPositionsPnLSum(4) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(4), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hide_positions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disable_order_buttons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hide_positions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hide_orders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hide_orders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disable_order_buttons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](63, _c0, ctx.getStrategyPnL() < 0, ctx.getStrategyPnL() > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.getStrategyPnL(), " , ", ctx.strategyPointsProfit, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suggestions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adjust_sugg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Premium: ", ctx.combined_premium, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.combined_SL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_instru);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.qty_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_month);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.is_monthly_expiry)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_range_higher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_range_lower);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_range_multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.oc_strikes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_product_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oc_product_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Strangle max profit per lot: ", ctx.getProfitForStrangle(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Debit spread per lot Profit: ", ctx.getPnLForDebitSpread()[0], ", Loss: ", ctx.getPnLForDebitSpread()[1], "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%], input[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.algo-suggestions-main[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n\n.suggest-positions[_ngcontent-%COMP%] {\n  border: 1px solid #b5b5b5;\n  padding: 5px;\n  border-radius: 5px;\n  margin-right: 15px;\n  font-weight: bold;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 2px solid #dee2e6;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.posCheckbox[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.ocStrategyStrikeQty[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: black;\n}\n\n.oc-strike[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  width: 60px;\n}\n\n.oc-strike-spot[_ngcontent-%COMP%] {\n  width: 60px;\n  margin: 0 auto;\n}\n\n.oc-col-actions[_ngcontent-%COMP%] {\n  width: 19rem;\n}\n\n.oc-col[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\n.lastRequestStatus[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #f8f9fa;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n}\n\n.positions_div[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.orderbook_div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.pos-input[_ngcontent-%COMP%] {\n  width: 60px;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.positions-row-actions[_ngcontent-%COMP%] {\n  \n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  \n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.table-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.new-input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 120px;\n  display: inline-block;\n}\n\n.new-input-prepend[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 150px;\n  display: inline-flex;\n}\n\n.new-input-prepend-expiry[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 100px;\n  display: inline-flex;\n}\n\n.new-input-prepend-oc[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 130px;\n  display: inline-flex;\n}\n\n.new-input-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.confirmation-check[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.new-order-div[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ocStrikeStrategyCE[_ngcontent-%COMP%] {\n  background-color: #ccffc9 !important;\n}\n\n.ocStrikeStrategyPE[_ngcontent-%COMP%] {\n  background-color: #ffdede !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrZXQvRGVza3RvcC9nZW5lcmFsL3RyYWRlcy1hLTE5c2VwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLE9BQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FET0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSkY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBQUE7QUNKRjs7QURPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3QsIGlucHV0LCAuaW5wdXQtZ3JvdXAtdGV4dCwgc2VsZWN0LCBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi5hbGdvLXN1Z2dlc3Rpb25zLW1haW57XHJcbiAgcG9zaXRpb246IHN0aWNreTsgXHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnN1Z2dlc3QtcG9zaXRpb25zIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxufVxyXG5cclxuLnBvc0NoZWNrYm94IHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9jU3RyYXRlZ3lTdHJpa2VRdHkge1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9jLXN0cmlrZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLm9jLXN0cmlrZS1zcG90IHtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm9jLWNvbC1hY3Rpb25zIHtcclxuICB3aWR0aDogMTlyZW07XHJcbn1cclxuXHJcbi5vYy1jb2wge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4ubGFzdFJlcXVlc3RTdGF0dXMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbnNfZGl2IHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm9yZGVyYm9va19kaXYge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wb3MtaW5wdXQge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnBvc2l0aW9ucy1yb3ctYWN0aW9ucyB7XHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG59XHJcblxyXG4ucmVmcmVzaC1idG4ge1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxNXB4OyAqL1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRhYmxlLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5uZXctaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubmV3LWlucHV0LXByZXBlbmQge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5uZXctaW5wdXQtcHJlcGVuZC1leHBpcnkge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IFxyXG59XHJcblxyXG4ubmV3LWlucHV0LXByZXBlbmQtb2Mge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5uZXctaW5wdXQtYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tY2hlY2sge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbnMtc3VtIHtcclxuICBcclxufVxyXG5cclxuLm5ldy1vcmRlci1kaXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vY1N0cmlrZVN0cmF0ZWd5Q0Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ZmYzkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9jU3RyaWtlU3RyYXRlZ3lQRSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGVkZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfVxyXG5cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQtc21hbGwge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2OHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtMjRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgfVxyXG5cclxuICBhLFxyXG4gIGE6dmlzaXRlZCxcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgIGNvbG9yOiAjYzJjM2M0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgIHRleHQtaW5kZW50OiA0cHg7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbmsge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjMjQyOTJlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0xNjBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIHdpZHRoOiAxOTIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0gKi8iLCI6aG9zdCwgaW5wdXQsIC5pbnB1dC1ncm91cC10ZXh0LCBzZWxlY3QsIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG4uYWxnby1zdWdnZXN0aW9ucy1tYWluIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5zdWdnZXN0LXBvc2l0aW9ucyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNWI1YjU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGVlMmU2O1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5wb3NDaGVja2JveCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ub2NTdHJhdGVneVN0cmlrZVF0eSB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vYy1zdHJpa2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICB3aWR0aDogNjBweDtcbn1cblxuLm9jLXN0cmlrZS1zcG90IHtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ub2MtY29sLWFjdGlvbnMge1xuICB3aWR0aDogMTlyZW07XG59XG5cbi5vYy1jb2wge1xuICB3aWR0aDogNXJlbTtcbn1cblxuLmxhc3RSZXF1ZXN0U3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wb3NpdGlvbnNfZGl2IHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ub3JkZXJib29rX2RpdiB7XG4gIGZsZXg6IDE7XG59XG5cbi5wb3MtaW5wdXQge1xuICB3aWR0aDogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBvc2l0aW9ucy1yb3ctYWN0aW9ucyB7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbn1cblxuLnJlZnJlc2gtYnRuIHtcbiAgLyogbWFyZ2luLWxlZnQ6IDE1cHg7ICovXG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50YWJsZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm5ldy1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmV3LWlucHV0LXByZXBlbmQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubmV3LWlucHV0LXByZXBlbmQtZXhwaXJ5IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5ldy1pbnB1dC1wcmVwZW5kLW9jIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5ldy1pbnB1dC1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY29uZmlybWF0aW9uLWNoZWNrIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm5ldy1vcmRlci1kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ub2NTdHJpa2VTdHJhdGVneUNFIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZjOSAhaW1wb3J0YW50O1xufVxuXG4ub2NTdHJpa2VTdHJhdGVneVBFIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGVkZSAhaW1wb3J0YW50O1xufVxuXG4vKiA6aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnNwYWNlciB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC50b29sYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnRvb2xiYXIgaW1nIHtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgfVxuXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgfVxuXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cblxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogIzg4ODtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmNhcmQuY2FyZC1zbWFsbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNjhweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB0b3A6IC0yNHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTgwcHg7XG4gICAgei1pbmRleDogLTEwO1xuICB9XG5cbiAgYSxcbiAgYTp2aXNpdGVkLFxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzE5NzZkMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzEyNTY5OTtcbiAgfVxuXG4gIC50ZXJtaW5hbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xuICB9XG5cbiAgLnRlcm1pbmFsOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xuICAgIGNvbG9yOiAjYzJjM2M0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwYWRkaW5nOiAxNHB4IDA7XG4gICAgdGV4dC1pbmRlbnQ6IDRweDtcbiAgfVxuXG4gIC50ZXJtaW5hbCBwcmUge1xuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuY2lyY2xlLWxpbmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG4gIH1cblxuICAuY2lyY2xlLWxpbms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIGZvb3RlciBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2Uge1xuICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxuXG4gIHN2ZyNjbG91ZHMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IC0xNjBweDtcbiAgICBsZWZ0OiAtMjMwcHg7XG4gICAgei1pbmRleDogLTEwO1xuICAgIHdpZHRoOiAxOTIwcHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXG4gICAgLnRlcm1pbmFsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgfVxuXG4gICAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgICB9XG5cbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH0gKi8iXX0= */"]
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }, {
          type: _common_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]
        }, {
          type: _common_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]
        }, {
          type: _chart_chart_service__WEBPACK_IMPORTED_MODULE_7__["ChartService"]
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


    var _common_fyers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/fyers.service */
    "./src/app/common/fyers.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chart/chart.module */
    "./src/app/chart/chart.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _common_fyers_service__WEBPACK_IMPORTED_MODULE_5__["FyersService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__["ChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__["ChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__["ChartModule"]],

          /* exports: [
            ChartsModule
          ], */
          providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _common_fyers_service__WEBPACK_IMPORTED_MODULE_5__["FyersService"]],
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


    var _common_application_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common/application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_fyers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./common/fyers.service */
    "./src/app/common/fyers.service.ts");
    /* harmony import */


    var _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/aliceblue.service */
    "./src/app/common/aliceblue.service.ts");

    var AppService = /*#__PURE__*/function () {
      function AppService(http, fyersService, aliceblueService) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.fyersService = fyersService;
        this.aliceblueService = aliceblueService;
        this.requestStatusEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.payOffEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AppService, [{
        key: "getMastersContract",
        value: function getMastersContract() {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'aliceblue') {
            this.aliceblueService.getMastersContract();
          }
        }
      }, {
        key: "get",
        value: function get(urlToFetch) {
          var httpOptions = {};
          var url = urlToFetch;
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "getZerodhaMargin",
        value: function getZerodhaMargin(instru, month, curr_positions_trades, exchange) {
          var formData = new FormData();
          formData.append('action', 'calculate');
          /*
          formData.append('exchange[]', 'CDS');
          formData.append('product[]', 'OPT');
          formData.append('scrip[]', 'USDINR20OCT');
          formData.append('option_type[]', 'CE');
          formData.append('strike_price[]', '73.5');
          formData.append('qty[]', '30');
          formData.append('trade[]', 'sell'); */
          // console.log('getMargin curr_positions_trades: ', curr_positions_trades);

          for (var i = 0; i < curr_positions_trades.length; i++) {
            var element = curr_positions_trades[i];
            /* {
              qty: 50,
              scrip: '11150CE',
              expiry: '01OCT2020',
              entry: 50,
              exit: 0,
            }, */
            // -375x10950PEx01OCT2020x19.2x0x0&
            // console.log('getMargin inside loop: ', element);

            if (element.exit !== null && element.exit === 0) {
              var pos_strike = element.scrip.slice(0, -2); // remove CE PE at end

              var type = '';

              if (element.scrip.includes('CE')) {
                type = 'CE';
              }

              if (element.scrip.includes('PE')) {
                type = 'PE';
              }

              var trade = 'sell';

              if (element.qty > 0) {
                trade = 'buy';
              }

              var exch = 'CDS';

              if (exchange.includes('NIFTY')) {
                exch = 'NFO';
              }

              var qtyMultiple = 1000;

              if (exchange === 'NIFTY') {
                qtyMultiple = 1;
              } else if (exchange === 'BANKNIFTY') {
                qtyMultiple = 1;
              }

              var scrip = instru + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].year + month;
              formData.append('exchange[]', exch);
              formData.append('product[]', 'OPT');
              formData.append('scrip[]', scrip);
              formData.append('option_type[]', type);
              formData.append('strike_price[]', pos_strike);
              formData.append('qty[]', Math.abs(element.qty) / qtyMultiple);
              formData.append('trade[]', trade);
            }
          }
          /* for (let pair of formData.entries()) {
            console.log('getMargin pair: ', pair[0], pair[1]);
          } */
          // console.log('getMargin formdata: ', formData);


          return this.http.post('https://zerodha.com/margin-calculator/SPAN', formData);
          /* .subscribe(
          (response) => console.log('ZERODHA MARGIN: ', response),
          (error) => console.log('ZERODHA MARGIN ERROR: ', error)
          ); */
        }
      }, {
        key: "sendSubscriptions",
        value: function sendSubscriptions(strikes) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'aliceblue') {
            this.aliceblueService.sendSubscriptions(strikes);
          }
        }
      }, {
        key: "connectWebsocket",
        value: function connectWebsocket(access_token) {
          this.aliceblueService.connectWebsocket(access_token);
        }
      }, {
        key: "auth",
        value: function auth() {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].RestMode === 'fyers') {
            return this.fyersService.auth();
          }
        }
      }, {
        key: "getTokenUrl",
        value: function getTokenUrl(auth_code, appId) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].RestMode === 'fyers') {
            return this.fyersService.getTokenUrl(auth_code, appId);
          }
        }
      }, {
        key: "getFunds",
        value: function getFunds(access_token) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].RestMode === 'fyers') {
            return this.fyersService.getFunds(access_token);
          }
        }
      }, {
        key: "getPositions",
        value: function getPositions(access_token) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].RestMode === 'fyers') {
            return this.fyersService.getPositions(access_token);
          }
        }
      }, {
        key: "getOrders",
        value: function getOrders(access_token) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].RestMode === 'fyers') {
            return this.fyersService.getOrders(access_token);
          }
        }
      }, {
        key: "placeOrder",
        value: function placeOrder(access_token, symbol, qty, orderType, side, productType, limitPrice, stopPrice) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].RestMode === 'fyers') {
            var order = {
              'symbol': symbol,
              'qty': qty,
              'type': orderType,
              'side': side,
              'productType': productType,
              'limitPrice': limitPrice,
              'stopPrice': stopPrice,
              'disclosedQty': 0,
              'validity': 'DAY',
              'offlineOrder': 'False',
              'stopLoss': 0,
              'takeProfit': 0
            };
            console.log('Order: ' + order);
            return this.fyersService.place_order(access_token, order);
          }
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_fyers_service__WEBPACK_IMPORTED_MODULE_4__["FyersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_aliceblue_service__WEBPACK_IMPORTED_MODULE_5__["AliceblueService"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _common_fyers_service__WEBPACK_IMPORTED_MODULE_4__["FyersService"]
        }, {
          type: _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_5__["AliceblueService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chart/chart.component.ts":
  /*!******************************************!*\
    !*** ./src/app/chart/chart.component.ts ***!
    \******************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chartjs-plugin-annotation */
    "./node_modules/chartjs-plugin-annotation/src/index.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _common_application_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _common_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/models */
    "./src/app/common/models.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _common_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common/map.service */
    "./src/app/common/map.service.ts");
    /* harmony import */


    var _common_websocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/websocket.service */
    "./src/app/common/websocket.service.ts");
    /* harmony import */


    var _chart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chart.service */
    "./src/app/chart/chart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ChartComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r0.lineChartData)("labels", ctx_r0.lineChartLabels)("options", ctx_r0.lineChartOptions)("colors", ctx_r0.lineChartColors)("legend", ctx_r0.lineChartLegend)("chartType", ctx_r0.lineChartType)("plugins", ctx_r0.lineChartPlugins);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "positionExited": a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "text-danger": a0,
        "text-success": a1
      };
    };

    function ChartComponent_tr_67_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_67_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pos_r5 = ctx.$implicit;
          return pos_r5.qty = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_67_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pos_r5 = ctx.$implicit;
          return pos_r5.scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_67_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pos_r5 = ctx.$implicit;
          return pos_r5.expiry = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_67_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pos_r5 = ctx.$implicit;
          return pos_r5.entry = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_67_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pos_r5 = ctx.$implicit;
          return pos_r5.exit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_tr_67_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pos_r5 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.splitPosition(pos_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_tr_67_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pos_r5 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.deletePosition(pos_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pos_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, pos_r5.exit !== 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx_r1.stepValue)("ngModel", pos_r5.qty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r5.scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r5.expiry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r5.entry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r5.exit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getLTP_strike(pos_r5), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c1, pos_r5.pnl < 0, pos_r5.pnl > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getPnL(pos_r5), " ");
      }
    }

    function ChartComponent_div_128_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Straddle Charts ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.straddle1instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.straddle1expiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.straddle1scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_select_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.straddle2instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.straddle2expiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.straddle2scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_select_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.straddle3instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_input_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.straddle3expiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_128_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.straddle3scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "canvas", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle1instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle1expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle1scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle2instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle2expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle2scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle3instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle3expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.straddle3scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r3.i1ChartData)("labels", ctx_r3.i1ChartLabels)("options", ctx_r3.i1ChartOptions)("colors", ctx_r3.i1ChartColors)("legend", ctx_r3.i1ChartLegend)("chartType", ctx_r3.i1ChartType)("plugins", ctx_r3.i1ChartPlugins);
      }
    }

    function ChartComponent_div_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Charts ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ChartComponent = /*#__PURE__*/function () {
      function ChartComponent(appService, mapService, websocketService, chartService) {
        var _this16 = this;

        _classCallCheck(this, ChartComponent);

        this.appService = appService;
        this.mapService = mapService;
        this.websocketService = websocketService;
        this.chartService = chartService;
        this.s1Trades = null;
        this.s2Trades = null;
        this.s3Trades = null;
        this.s4Trades = null;
        this.s5Trades = null;
        this.currLoadNum = null;
        this.payOffData = null;
        this.curr_positions_trades = null;
        this.expiryDate = null;
        this.margin = null;
        this.breakevens = null;
        this.cePremium = 0;
        this.pePremium = 0;
        this.ceWeight = 0;
        this.peWeight = 0;
        this.ceLots = 0;
        this.peLots = 0;
        this.urlToFetch = ''; // 'https://opstra.definedge.com/api/free/strategybuilder/payoff/NIFTY$-375x11600CEx01OCT2020x10.27x5.1x0&-375x10600PEx01OCT2020x11.8x0x0&+150x10700PEx01OCT2020x52.05x0x0&-150x10650PEx01OCT2020x37.3x0x0&+225x10550PEx01OCT2020x31.87x13.4x0&-225x11200CEx01OCT2020x22.65x36.55x0&-150x11250CEx01OCT2020x17.65x30.75x0&+150x10550PEx01OCT2020x31.87x28.2x0&+150x10550PEx01OCT2020x32.7x13.4x0&-375x11350CEx01OCT2020x11.4x0x0$2020-10-01$0$0$0';

        this.spot = null;
        this.rest_res = null;
        this.labels = [];
        this.pnl = [];
        this.zeroline = [];
        this.instru = 'NIFTY';
        this.stepValue = 25;
        this.mean = 0;
        this.variance = 1;
        this.hide_payoff = true;
        this.use_hypo_future = false;
        this.hypo_future_strike = 74.5;
        this.lineChartData = [
          /* { data: [-65, -59, 80, 81, 56, -55, -40], label: 'Series A' },
          { data: [0, 0, 0, 0, 0, 0, 0], label: 'Zero line' }, */

          /* { data: [-65, -59, 80, 81, 56, -55, -40], label: 'PnL' },
          { data: [0, 0, 0, 0, 0, 0, 0], label: 'Zero line' }, */
        ];
        this.lineChartLabels = [
          /* 'January', 'February', 'March', 'April', 'May', 'June', 'July' */
        ];
        /* public lineChartOptions: (ChartOptions & { annotation: any }) = {
          responsive: true,
        }; */

        this.lineChartOptions = {
          /* responsive: true,
          scales: {
            xAxes: [{}],
          },
          animation: {
            duration: 0
          },
          annotation: {
            annotations: [
              {
                drawTime: 'afterDatasetsDraw',
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                value: this.spot,
                borderColor: 'orange',
                borderWidth: 1,
                label: {
                  enabled: false,
                  fontColor: 'orange',
                  content: 'Nifty'
                }
              },
            ],
          } */
        };
        this.lineChartColors = [
        /* {
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)',
        }, */
        {
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
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__];
        this.straddle1instru = 'USDINR';
        this.straddle1expiryDate = null;
        this.straddle1scrip = null;
        this.straddle2instru = 'USDINR';
        this.straddle2expiryDate = null;
        this.straddle2scrip = null;
        this.straddle3instru = 'USDINR';
        this.straddle3expiryDate = null;
        this.straddle3scrip = null;
        this.i1ChartData = [];
        this.i1ChartLabels = [];
        this.i1ChartOptions = {
          responsive: true,
          scales: {
            xAxes: [{}],
            yAxes: [{
              id: 'y-axis-0',
              position: 'left'
            }, {
              id: 'y-axis-1',
              position: 'right'
            }]
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
        this.i1ChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__];
        this.intradayWatch = [{
          scrip: 'FUT',
          instru: 'USDINR',
          expiry: _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].USDINR_FUT_MONTH
        }, {
          scrip: '74CE',
          instru: 'USDINR',
          expiry: '2020-11-13'
        }, {
          scrip: '74PE',
          instru: 'USDINR',
          expiry: '2020-11-13'
        }, {
          scrip: '74.5CE',
          instru: 'USDINR',
          expiry: '2020-11-13'
        }, {
          scrip: '74.5PE',
          instru: 'USDINR',
          expiry: '2020-11-13'
        }];
        this.appService.payOffEvent$.subscribe(function (res) {
          console.log('payOffEvent subcribe: ', res); // this.rest_res = res;

          var scrip = _this16.parseSymbol(res.symbol);

          console.log('Adding scrip to strategy: ' + scrip);
          /* let qty = -450;
          if (this.instru === 'BANKNIFTY') {
            qty = 25;
          }
          if (this.instru === 'USDINR') {
            qty = 1000;
          } */

          _this16.addPosition(res.qty, scrip, res.ltp); // TODO: check instru for lot size

        });
        this.websocketService.websocketEvent$.subscribe(function (res) {
          console.log('chart websocketEvent: ', res);

          if (res === 'connected') {
            _this16.doStrategiesSubscriptions();
          }
        });
        /* window.addEventListener('storage', () => {
          // When local storage changes, dump the list to
          // the console.
          console.log('*** changed1');
          console.log(JSON.parse(window.localStorage.getItem('addScripToStrategy')));
        });
             window.onstorage = function(e) {
          console.log('received storage event', JSON.parse(e.newValue));
          //if (e.key === 'userportal_s') {
          //  let token = e.newValue;
          //  that.chatService.setAccessToken(token);
          //  localStorage.removeItem('userportal_s');
          //}
        }; */
      }

      _createClass(ChartComponent, [{
        key: "parseSymbol",
        value: function parseSymbol(symbol) {
          symbol = symbol.replace('NSE:', '');
          var instru = '';

          if (symbol.startsWith('NIFTY')) {
            instru = 'NIFTY';
            symbol = symbol.replace('NIFTY', '');
          }

          if (symbol.startsWith('BANKNIFTY')) {
            instru = 'BANKNIFTY';
            symbol = symbol.replace('BANKNIFTY', '');
          }

          if (symbol.startsWith('USDINR')) {
            instru = 'USDINR';
            symbol = symbol.replace('USDINR', '');
          }

          var type = '';

          if (symbol.includes('CE')) {
            type = 'CE';
          }

          if (symbol.includes('PE')) {
            type = 'PE';
          }

          symbol = symbol.slice(0, -2); // remove CE PE at end

          var strike = symbol.substring(5);
          var expiry = symbol.substring(0, 5); // 20N08 20JUN 20911

          return strike + type;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          /* let positions = {
            instru: 'NIFTY',
            expiry: '2020-10-01',
            trades:
            [
              {
                qty: -375,
                scrip: '10950PE',
                expiry: '01OCT2020',
                entry: 19.2,
                exit: 0,
              },
              {
                qty: 150,
                scrip: '11050PE',
                expiry: '01OCT2020',
                entry: 32.7,
                exit: 0,
              },
              {
                qty: -375,
                scrip: '11450CE',
                expiry: '01OCT2020',
                entry: 10,
                exit: 0,
              },
              {
                qty: 225,
                scrip: '11500CE',
                expiry: '01OCT2020',
                entry: 6.35,
                exit: 0,
              },
              {
                qty: -75,
                scrip: '11200CE',
                expiry: '01OCT2020',
                entry: 95.95,
                exit: 0,
              },
              {
                qty: -75,
                scrip: '11200PE',
                expiry: '01OCT2020',
                entry: 66.2,
                exit: 0,
              },
              {
                qty: 75,
                scrip: '11250CE',
                expiry: '01OCT2020',
                entry: 67.25,
                exit: 0,
              },
              {
                qty: 75,
                scrip: '11150PE',
                expiry: '01OCT2020',
                entry: 50,
                exit: 0,
              },
            ]
          };
          localStorage.setItem(
            'curr_positions1',
            JSON.stringify(positions)
          ); */
          // localStorage.removeItem('curr_positions1');
          // this.loadPayoffData();
          // this.getPayoff();
          // this.getMargin();
          // this.doStrategiesSubscriptions();

          /***** LOCAL STORAGE RETRIEVE SAVE ************************************* */
          //this.chartService.loadIntradayData(this.intradayWatch);
          //this.chartService.initFetchIntraday(this.intradayWatch);
          //this.chartService.saveIntradayData();

          /****************************************** */
          var refresh_interval = setInterval(function () {
            if (!_this17.hide_payoff) {
              _this17.updateChartData(_this17.payOffData);
            }

            _this17.getCEPEWeightage();
          }, 5000);
          var refresh_intervalP = setInterval(function () {
            if (!_this17.hide_payoff) {
              _this17.getPayoff();
            }
          }, 60000);
          var refresh_intervalI = setInterval(function () {//this.updateIntradayChartData();
          }, 2000);

          for (var num = 1; num <= 5; num++) {
            var curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));

            if (curr_positions && curr_positions.trades) {
              if (num === 1) {
                this.s1Trades = curr_positions;
              }

              if (num === 2) {
                this.s2Trades = curr_positions;
              }

              if (num === 3) {
                this.s3Trades = curr_positions;
              }

              if (num === 4) {
                this.s4Trades = curr_positions;
              }

              if (num === 5) {
                this.s5Trades = curr_positions;
              }
            }
          }
        }
      }, {
        key: "exportToCSV",
        value: function exportToCSV(num) {
          var export_file_name = 'Strategy_' + num + '_' + this.getDateInFormat() + '.csv';
          console.log('exporting: ', export_file_name);
          var curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));

          if (curr_positions && curr_positions.trades) {
            var instru = curr_positions.instru;
            var expiryDate = curr_positions.expiry;
            var curr_positions_trades = curr_positions.trades;
            console.log('exporting:', instru, expiryDate, curr_positions_trades);
            var str = '';
            str += instru + ',' + expiryDate + '\r\n';
            curr_positions_trades.forEach(function (pos) {
              var row = '';
              row += pos.qty + ',' + pos.scrip + ',' + pos.expiry + ',' + pos.entry + ',' + pos.exit;
              str += row + '\r\n';
            });
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
        key: "importCSV",
        value: function importCSV(fileInput, num) {
          var _this18 = this;

          var fileReaded = fileInput.target.files[0];
          var reader = new FileReader();
          reader.readAsText(fileReaded);

          reader.onload = function (e) {
            var csv = String(reader.result);
            console.log('csv:', csv);

            _this18.loadPayoffData(num, true, csv);
          };
        }
      }, {
        key: "loadImportedPositions",
        value: function loadImportedPositions(importData) {
          var allTextLines_all_data = importData.split(/\r|\n|\r/);
          var allTextLines = allTextLines_all_data.filter(function (elem) {
            return elem !== '';
          });
          console.log('allTextLines: ', allTextLines);
          var firstLine = allTextLines[0].split(',');
          var instru = firstLine[0];
          var expiryDate = firstLine[1];
          var trades = [];

          for (var index = 1; index < allTextLines.length; index++) {
            var line = allTextLines[index].split(',');
            trades.push({
              qty: Number(line[0]),
              scrip: line[1],
              expiry: line[2],
              entry: Number(line[3]),
              exit: Number(line[4])
            });
          }

          var curr_positions = {
            instru: '',
            expiry: '',
            trades: {}
          };
          curr_positions.instru = instru;
          curr_positions.expiry = expiryDate;
          curr_positions.trades = trades;
          return curr_positions;
        }
      }, {
        key: "loadOptionChain",
        value: function loadOptionChain() {
          if (this.instru && this.expiryDate) {
            this.chartService.optionChainEvent$.next([this.instru, this.expiryDate]);
          } else {
            console.log('No data to load');
          }
        }
      }, {
        key: "doSingleStrategySubscription",
        value: function doSingleStrategySubscription() {
          if (this.instru && this.expiryDate && this.curr_positions_trades) {
            this.subscribeStrategiesPositionsFeed(this.instru, this.expiryDate, this.curr_positions_trades);
          } else {
            console.log('Nothing to subscribe');
          }
        }
      }, {
        key: "doStrategiesSubscriptions",
        value: function doStrategiesSubscriptions() {
          for (var num = 1; num <= 5; num++) {
            var curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));

            if (curr_positions && curr_positions.trades) {
              if (num === 1) {
                this.s1Trades = curr_positions;
              }

              if (num === 2) {
                this.s2Trades = curr_positions;
              }

              if (num === 3) {
                this.s3Trades = curr_positions;
              }

              if (num === 4) {
                this.s4Trades = curr_positions;
              }

              if (num === 5) {
                this.s5Trades = curr_positions;
              }

              var instru = curr_positions.instru;
              var expiryDate = curr_positions.expiry;
              var trades = curr_positions.trades;
              this.subscribeStrategiesPositionsFeed(instru, expiryDate, trades);
            }
          }
          /* this.intradayWatch.forEach(element => {
            if (element.scrip !== 'FUT' && element.scrip !== 'SPOT') {
              this.subscribeIntradayWatchFeed(element.instru, element.expiry, element.scrip);
            }
          }); */

        }
      }, {
        key: "subscribeStrategiesPositionsFeed",
        value: function subscribeStrategiesPositionsFeed(instru, expiry_date, trades) {
          var sub = [];
          trades.forEach(function (pos) {
            var symbol = pos.scrip;
            var type = '';

            if (symbol.includes('CE')) {
              type = 'CE';
            }

            if (symbol.includes('PE')) {
              type = 'PE';
            }

            console.log('subscribeStrategiesPositionsFeed symbol: ' + symbol);
            symbol = symbol.slice(0, -2); // remove CE PE at end

            var expiryDate = new Date(pos.expiry).toDateString(); // expiry_date

            var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_4__["Instrument"]();
            e1.expiry = expiryDate;
            e1.instru = instru;
            e1.strike = Number(symbol);
            e1.type = type;
            sub.push(e1);
          });
          var expiryDate = new Date(expiry_date).toDateString();
          var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_4__["Instrument"]();
          e1.expiry = expiryDate;
          e1.instru = instru;
          e1.strike = Number(this.hypo_future_strike);
          e1.type = 'CE';
          sub.push(e1);
          var e2 = new _common_models__WEBPACK_IMPORTED_MODULE_4__["Instrument"]();
          e2.expiry = expiryDate;
          e2.instru = instru;
          e2.strike = Number(this.hypo_future_strike);
          e2.type = 'PE';
          sub.push(e2);
          /* let ltp = 14000; // TODO: HOW TO DECIDE LTP OF INSTRUMENT AT TIME OF INITIAL SUBSCRIPTIONS !?
          let range = 1000;
          let range_multiple = 50;
          let increment = 50;
          if (this.instru === 'BANKNIFTY') {
            ltp = 32000;
            range = 3000;
            range_multiple = 100;
            increment = 100;
          }
          if (this.instru === 'USDINR') {
            ltp = this.hypo_future_strike;
            range = 2;
            range_multiple = 0.25;
            increment = 0.25;
          }
               let round_ltp = (Math.round(ltp / range_multiple) * range_multiple);
          let lower_range = round_ltp - range; // TODO: range depends on instru
          let upper_range = round_ltp + range;
               for (let point = lower_range; point <= upper_range; point += increment) {
                 let expiryDate = new Date(expiry_date).toDateString();
                 let e1 = new Instrument();
            e1.expiry = expiryDate;
            e1.instru = instru;
            e1.strike = Number(point);
            e1.type = 'CE';
            sub.push(e1);
                 let e2 = new Instrument();
            e2.expiry = expiryDate;
            e2.instru = instru;
            e2.strike = Number(point);
            e2.type = 'PE';
            sub.push(e2);
          } */

          console.log('strategies positions feed', sub);
          this.appService.sendSubscriptions(sub);
        }
      }, {
        key: "subscribeIntradayWatchFeed",
        value: function subscribeIntradayWatchFeed(instru, expiry_date, scrip) {
          var sub = [];
          var symbol = scrip;
          var type = '';

          if (symbol.includes('CE')) {
            type = 'CE';
          }

          if (symbol.includes('PE')) {
            type = 'PE';
          }

          console.log('subscribeIntradayWatchFeed symbol: ' + symbol);
          symbol = symbol.slice(0, -2); // remove CE PE at end

          var expiryDate = new Date(expiry_date).toDateString();
          var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_4__["Instrument"]();
          e1.expiry = expiryDate;
          e1.instru = instru;
          e1.strike = Number(symbol);
          e1.type = type;
          sub.push(e1);
          console.log('intraday watch feed', sub);
          this.appService.sendSubscriptions(sub);
        }
      }, {
        key: "loadPayoffData",
        value: function loadPayoffData(num) {
          var _this19 = this;

          var isImported = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var importData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var curr_positions = null;

          if (!isImported) {
            curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));
          } else {
            curr_positions = this.loadImportedPositions(importData);
          }

          this.currLoadNum = num;
          console.log('curr_positions: ', curr_positions);
          this.curr_positions_trades = null;

          if (curr_positions && curr_positions.trades) {
            this.instru = curr_positions.instru;
            this.expiryDate = curr_positions.expiry;
            this.curr_positions_trades = curr_positions.trades;

            if (this.instru === 'NIFTY') {
              this.stepValue = 50;
            } else if (this.instru === 'BANKNIFTY') {
              this.stepValue = 25;
            } else {
              this.stepValue = 1000;
            }

            this.curr_positions_trades.sort(function (a, b) {
              // -1 means a should come before b
              // 1 means a should come after b

              /*
              exit and exit
              exit and no exit
              no exit and exit
              same strike no exit and no exit
              no exit and no exit
              */
              // console.log(a.exit, b.exit);
              if (a.exit !== 0 && b.exit !== 0) {
                //return b.scrip.localeCompare(a.scrip);
                return _this19.compareForSorting(a.scrip, b.scrip);
              }

              if (a.exit !== 0 && b.exit === 0) {
                return -1;
              }

              if (a.exit === 0 && b.exit !== 0) {
                return 1;
              }

              var a_symbol = a.scrip.slice(0, -2);
              var b_symbol = b.scrip.slice(0, -2);

              if (a_symbol === b_symbol && a.scrip.includes('CE') && b.scrip.includes('PE')) {
                // same strike CE PE, CE should occur first
                return -1;
              }

              if (a_symbol === b_symbol && a.scrip.includes('PE') && b.scrip.includes('CE')) {
                // same strike CE PE, CE should occur first
                return 1;
              } //return b.scrip.localeCompare(a.scrip); // negative if a is before b


              return _this19.compareForSorting(a.scrip, b.scrip);
            });
          }

          _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].curr_positions_trades = this.curr_positions_trades;
          this.constructUrlToFetch();
          this.getCEPEWeightage();
        }
      }, {
        key: "compareForSorting",
        value: function compareForSorting(ascrip, bscrip) {
          // All CE strikes to be before PE
          if (ascrip.includes('CE') && bscrip.includes('PE')) {
            // CE should occur first
            return -1;
          }

          if (ascrip.includes('PE') && bscrip.includes('CE')) {
            // CE should occur first
            return 1;
          } // same type of options


          var a_symbol = ascrip.slice(0, -2);
          var b_symbol = bscrip.slice(0, -2);

          if (a_symbol > b_symbol) {
            return -1;
          }

          return 1;
        }
      }, {
        key: "constructUrlToFetch",
        value: function constructUrlToFetch() {
          if (this.curr_positions_trades) {
            var url = 'https://opstra.definedge.com/api/free/strategybuilder/payoff/NIFTY$';
            this.curr_positions_trades.forEach(function (element) {
              /* {
                qty: 75,
                scrip: '11150CE',
                expiry: '01OCT2020',
                entry: 50,
                exit: 0,
              }, */
              // -375x10950PEx01OCT2020x19.2x0x0&
              var pos = '' + (element.qty <= 0 ? element.qty : '+' + element.qty) + 'x' + element.scrip + 'x' + element.expiry + 'x' + element.entry + 'x' + element.exit + 'x0&';
              url += pos;
            });
            url = url.replace(/&\s*$/, ''); // remove last &

            url += '$' + this.expiryDate;
            url += '$0$0$0'; // $2020-10-01$0$0$0

            console.log('urlToFetch: ' + url);
            this.urlToFetch = url;
          }
        }
      }, {
        key: "addPosition",
        value: function addPosition() {
          var qty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var scrip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var entry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          if (this.curr_positions_trades === null) {
            this.curr_positions_trades = [];
          }

          var d = new Date(this.expiryDate);
          var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
          var day = ('0' + d.getDate()).slice(-2);
          var monthIndex = d.getMonth();
          var monthName = monthNames[monthIndex];
          var year = d.getFullYear();
          var dateString = day + monthName + year; // console.log('***: ', day + monthName + year);

          this.curr_positions_trades.push({
            qty: qty,
            scrip: scrip,
            expiry: dateString,
            entry: entry,
            exit: 0
          });
        }
      }, {
        key: "splitPosition",
        value: function splitPosition(pos) {
          this.curr_positions_trades.push({
            qty: 0,
            scrip: pos.scrip,
            expiry: pos.expiry,
            entry: pos.entry,
            exit: pos.exit
          });
        }
      }, {
        key: "deletePosition",
        value: function deletePosition(pos) {
          var found_index = -100;

          for (var index = 0; index < this.curr_positions_trades.length; index++) {
            var element = this.curr_positions_trades[index];

            if (element.qty === pos.qty && element.scrip === pos.scrip && element.expiry === pos.expiry && element.entry === pos.entry && element.exit === pos.exit) {
              found_index = index;
              break;
            }
          }

          if (found_index !== -100) {
            this.curr_positions_trades.splice(found_index, 1);
          }
        }
      }, {
        key: "calculatePayoff",
        value: function calculatePayoff() {
          this.constructUrlToFetch();
          this.getPayoff();
          this.getMargin();
        }
      }, {
        key: "reloadPayoffData",
        value: function reloadPayoffData(num) {
          this.loadPayoffData(num);
          this.getPayoff();
          this.getMargin();
        }
      }, {
        key: "savePositions",
        value: function savePositions(num) {
          // To combine positions of same scrip
          // other way is iterating through the array and use Map with scrip as key and rest of params as value
          var combinedItems = function combinedItems() {
            var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var res = arr.reduce(function (acc, obj) {
              console.log(obj);

              if (obj.exit !== 0) {
                acc.push(obj);
                return acc;
              } //this.curr_positions_trades.push({ qty: qty, scrip: scrip, expiry: dateString, entry: entry, exit: 0 });


              var found = false;

              for (var i = 0; i < acc.length; i++) {
                if (acc[i].exit === 0 && acc[i].scrip === obj.scrip && acc[i].expiry === obj.expiry) {
                  found = true;
                  acc[i].entry = (acc[i].entry * acc[i].qty + obj.entry * obj.qty) / (acc[i].qty + obj.qty);
                  acc[i].entry = Math.round((acc[i].entry + 0.00001) * 10000) / 10000; // round to four decimals

                  acc[i].qty += obj.qty;
                }
              }

              if (found === false) {
                acc.push(obj);
              }

              return acc;
            }, []);
            return res;
          };

          this.curr_positions_trades = combinedItems(this.curr_positions_trades); //console.log(ne);

          console.log(this.curr_positions_trades);

          if (confirm('Sure save ' + num + '?')) {
            var curr_positions = {
              instru: '',
              expiry: '',
              trades: {}
            };
            curr_positions.instru = this.instru;
            curr_positions.expiry = this.expiryDate;
            this.curr_positions_trades.forEach(function (element) {
              // delete element.id;
              delete element.pnl;
            });
            curr_positions.trades = this.curr_positions_trades;
            console.log('Saving positions: ', curr_positions);
            console.log('Saving positions json: ', JSON.stringify(curr_positions));
            localStorage.setItem('curr_positions' + num, JSON.stringify(curr_positions));
            this.reloadPayoffData(num); // this.doStrategiesSubscriptions();

            for (var _num = 1; _num <= 5; _num++) {
              var _curr_positions = JSON.parse(localStorage.getItem('curr_positions' + _num));

              if (_curr_positions && _curr_positions.trades) {
                if (_num === 1) {
                  this.s1Trades = _curr_positions;
                }

                if (_num === 2) {
                  this.s2Trades = _curr_positions;
                }

                if (_num === 3) {
                  this.s3Trades = _curr_positions;
                }

                if (_num === 4) {
                  this.s4Trades = _curr_positions;
                }

                if (_num === 5) {
                  this.s5Trades = _curr_positions;
                }
              }
            }
          }
        }
      }, {
        key: "getCEPEWeightage",
        value: function getCEPEWeightage() {
          var _this20 = this;

          this.cePremium = 0;
          this.pePremium = 0;
          this.ceWeight = 0;
          this.peWeight = 0;
          this.ceLots = 0;
          this.peLots = 0;

          if (this.curr_positions_trades) {
            this.curr_positions_trades.forEach(function (element) {
              if (element.exit === null || element.exit === 0) {
                if (element.scrip.includes('CE') && element.qty < 0) {
                  var mkt_price = _this20.getLTP_strike({
                    scrip: element.scrip
                  }, _this20.instru, element.expiry);

                  var currPremium = element.qty * mkt_price;
                  _this20.cePremium += currPremium;
                  _this20.ceLots += element.qty / 1000;
                }

                if (element.scrip.includes('PE') && element.qty < 0) {
                  var _mkt_price = _this20.getLTP_strike({
                    scrip: element.scrip
                  }, _this20.instru, element.expiry);

                  var _currPremium = element.qty * _mkt_price;

                  _this20.pePremium += _currPremium;
                  _this20.peLots += element.qty / 1000;
                }
              }

              var totalCEPE = _this20.cePremium + _this20.pePremium;
              _this20.ceWeight = _this20.cePremium / totalCEPE * 100;
              _this20.peWeight = _this20.pePremium / totalCEPE * 100;
              _this20.cePremium = Math.round(_this20.cePremium);
              _this20.pePremium = Math.round(_this20.pePremium);
              _this20.ceWeight = Math.round(_this20.ceWeight);
              _this20.peWeight = Math.round(_this20.peWeight);
            });
          }
        }
      }, {
        key: "getPayoff",
        value: function getPayoff() {
          var _this21 = this;

          var myPayoff = {
            chart: []
          };
          var ltp = 0;

          if (this.instru === 'USDINR') {
            if (this.use_hypo_future) {
              var ce_premium = this.getLTP_strike({
                scrip: this.hypo_future_strike + 'CE'
              }, this.instru, this.expiryDate);
              var pe_premium = this.getLTP_strike({
                scrip: this.hypo_future_strike + 'PE'
              }, this.instru, this.expiryDate);
              ltp = ce_premium - pe_premium + this.hypo_future_strike; // Find future price from Put Call Parity

              ltp = Math.round((ltp + 0.00001) * 100) / 100; // console.log('hypo fut:' + ltp);
            } else {
              ltp = parseFloat(this.getInstruLTP());
              ltp = Math.round((ltp + 0.00001) * 100) / 100; // TODO: ltp rounding for usdinr to two decimal
            }
          } else {
            ltp = parseInt(this.getInstruLTP());
          }

          console.log('ltp is: ', ltp);
          var range = 1000;
          var increment = 1;

          if (this.instru === 'BANKNIFTY') {
            range = 3000;
          }

          if (this.instru === 'USDINR') {
            range = 2;
            increment = 0.01;
          }

          if (this.payoff_range) {
            range = this.payoff_range;
          }

          var lower_range = ltp - range; // TODO: range depends on instru

          var upper_range = ltp + range;
          var pnlForBreakeven = [];
          var pnlExitedPos = 0;

          if (this.curr_positions_trades) {
            this.curr_positions_trades.forEach(function (element) {
              if (element.exit && element.exit > 0) {
                var pospnl = _this21.getPnL(element);

                pnlExitedPos += pospnl;
              }
            });

            var _loop = function _loop(_point) {
              var pnl = 0;
              var t0 = 0;
              _point = Math.round((_point + 0.00001) * 100) / 100; // for USDINR two decimal places

              _this21.curr_positions_trades.forEach(function (element) {
                /*   {
                    qty: 75,
                    scrip: '11150CE',
                    expiry: '01OCT2020',
                    entry: 50,
                    exit: 0,
                  }, */
                if (element.exit === null || element.exit === 0) {
                  var type = null;
                  var typet0 = null;

                  if (element.scrip.includes('CE') && element.qty < 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].CEsell;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].CE;
                  }

                  if (element.scrip.includes('PE') && element.qty < 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].PEsell;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].PE;
                  }

                  if (element.scrip.includes('CE') && element.qty > 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].CEbuy;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].CE;
                  }

                  if (element.scrip.includes('PE') && element.qty > 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].PEbuy;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].PE;
                  }

                  var pos_strike = element.scrip.slice(0, -2); // remove CE PE at end

                  var expiry = element.expiry; // this.expiryDate;

                  var d1 = new Date(expiry); // position expiry

                  var d2 = new Date(_this21.expiryDate);

                  if (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()) {
                    pnl += _this21.calculatePnLAtPoint(_point, pos_strike, element.qty, element.entry, type);
                  } else {
                    var _mkt_price2 = _this21.getLTP_strike({
                      scrip: element.scrip
                    }, _this21.instru, expiry);

                    var _iv = _this21.calculateIV(ltp, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].INTEREST_RATE, expiry, typet0, _mkt_price2); // console.log('*** ', pos_strike, typet0, expiry, iv);


                    var d3 = new Date();
                    var add_days = Math.round((d2.getTime() - d3.getTime()) / (1000 * 3600 * 24));
                    console.log('add_days: ', add_days);

                    var _t0_ = _this21.calculateT0AtPoint(_point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].INTEREST_RATE, expiry, _iv, typet0, add_days);

                    _t0_ = _t0_ - element.entry;
                    _t0_ = _t0_ * element.qty;
                    pnl += _t0_;
                  } // pnl += this.calculatePnLAtPoint(point, pos_strike, element.qty, element.entry, type);


                  var mkt_price = _this21.getLTP_strike({
                    scrip: element.scrip
                  }, _this21.instru, expiry);

                  var iv = _this21.calculateIV(ltp, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].INTEREST_RATE, expiry, typet0, mkt_price); // console.log('*** ', pos_strike, typet0, expiry, iv, mkt_price);


                  var t0_ = _this21.calculateT0AtPoint(_point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].INTEREST_RATE, expiry, iv, typet0);

                  t0_ = t0_ - element.entry;
                  t0_ = t0_ * element.qty;
                  t0 += t0_;
                }
              });

              pnl += pnlExitedPos;
              pnl = Math.round((pnl + 0.00001) * 100) / 100;
              t0 += pnlExitedPos;
              t0 = Math.round((t0 + 0.00001) * 100) / 100;
              pnlForBreakeven.push(pnl);
              myPayoff.chart.push({
                Final: pnl,
                StockPrice: _point,
                Today: t0
              });
              point = _point;
            };

            for (var point = lower_range; point <= upper_range; point += increment) {
              _loop(point);
            }

            console.log('myPayoff:', myPayoff);
            this.payOffData = myPayoff;
            this.updateChartData(myPayoff);
            this.breakevens = '';

            for (var i = 1; i < myPayoff.chart.length; i++) {
              var element = myPayoff.chart[i];
              var prev_element = myPayoff.chart[i - 1];

              if (element.Final > 0 && prev_element.Final <= 0 || element.Final < 0 && prev_element.Final >= 0) {
                this.breakevens = this.breakevens + prev_element.StockPrice + ' ';
              }
            }
          }
          /* this.appService.get(this.urlToFetch).subscribe(res => {
            console.log('getPayoff: ', res);
                 // this.payOffData = res;
                 if ((res as any).breakevens !== null) {
              this.breakevens = (res as any).breakevens;
            }
                 // this.updateChartData(res);
                 // this.appService.payOffEvent$.next(res);
          },
          error => {
            console.log('getPayoff error', error);
          }); */

        }
      }, {
        key: "calculateIV",
        value: function calculateIV(spot, strike, int_rate, expiry_date, type, mkt_price) {
          var high = 80;
          var low = 0;
          var iv = 0;
          var date_expiry = new Date(expiry_date);
          var date_now = new Date();
          var seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var delta_t = Math.floor(hours / 24) / 365.0;
          /* if (hours < 24) {
            return 0;
          } */

          while (high - low > 0.0001) {
            if (this.calculateT0AtPoint(spot, strike, int_rate, expiry_date, (high + low) / 2, type) > mkt_price) {
              high = (high + low) / 2;
            } else {
              low = (high + low) / 2;
            }
          }

          iv = (high + low) / 2;
          return iv;
        }
      }, {
        key: "calculateT0AtPoint",
        value: function calculateT0AtPoint(spot, strike, int_rate, expiry_date, volatility, type, add_days) {
          var t0 = 0;
          var date_expiry = new Date(expiry_date);

          if (this.instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
          } else {
            date_expiry.setHours(15, 30, 0);
          }

          if (!add_days) {
            add_days = 0;
          }

          var date_now = new Date();
          date_now.setDate(date_now.getDate() + add_days);
          var seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var delta_t = Math.floor(hours / 24) / 365.0; // time

          /* if (hours < 12) {
            return 0;
          }
          else { */

          var volt = volatility / 100;
          int_rate = int_rate / 100;
          var d1 = (Math.log(spot / strike) + (int_rate + Math.pow(volt, 2) / 2) * delta_t) / (volt * Math.sqrt(delta_t)); // let d2 = (Math.log(spot / strike) + (int_rate - (Math.pow(volt, 2) / 2)) * delta_t) / (volt * Math.sqrt(delta_t));

          var d2 = d1 - volt * Math.sqrt(delta_t);
          var fv_strike = strike * Math.exp(-1 * int_rate * delta_t);

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].CE) {
            t0 = spot * this.getCDF(d1) - fv_strike * this.getCDF(d2);
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].PE) {
            t0 = fv_strike * this.getCDF(-1 * d2) - spot * this.getCDF(-1 * d1);
          }
          /* } */


          return t0;
        }
      }, {
        key: "getCDF",
        value: function getCDF(x) {
          var standardDeviation = Math.sqrt(this.variance);
          return 0.5 * this.erfc(-(x - this.mean) / (standardDeviation * Math.sqrt(2)));
        } // Complementary error function
        // From Numerical Recipes in C 2e p221

      }, {
        key: "erfc",
        value: function erfc(x) {
          var z = Math.abs(x);
          var t = 1 / (1 + z / 2);
          var r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
          return x >= 0 ? r : 2 - r;
        }
      }, {
        key: "calculatePnLAtPoint",
        value: function calculatePnLAtPoint(point, pos_strike, qty, entry, type) {
          var pnl = 0;

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].CEsell) {
            if (point > pos_strike) {
              pnl = (pos_strike - point + entry) * Math.abs(qty);
            } else {
              pnl = entry * Math.abs(qty);
            }
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].PEsell) {
            if (point < pos_strike) {
              pnl = (-pos_strike + point + entry) * Math.abs(qty);
            } else {
              pnl = entry * Math.abs(qty);
            }
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].CEbuy) {
            if (point > pos_strike) {
              pnl = (-pos_strike + point - entry) * Math.abs(qty);
            } else {
              pnl = entry * -Math.abs(qty);
            }
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_4__["PositionTypeForPayOff"].PEbuy) {
            if (point < pos_strike) {
              pnl = (pos_strike - point - entry) * Math.abs(qty);
            } else {
              pnl = entry * -Math.abs(qty);
            }
          } // pnl = pnl * lotsize;


          if (pnl !== 0) {
            pnl = Math.round((pnl + 0.00001) * 100) / 100;
          }

          return pnl;
        }
      }, {
        key: "getMargin",
        value: function getMargin() {
          var _this22 = this;

          /* let url = this.urlToFetch.replace('payoff', 'margin');
          this.appService.get(url).subscribe(res => {
            console.log('getMargin: ', res);
            this.margin = (res as any).margin.toLocaleString();
          },
          error => {
            console.log('getMargin error', error);
          }); */
          var d = new Date(this.expiryDate); // let month = d.toLocaleString('default', { month: 'short' }).toUpperCase();

          var month = _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].monthsMapping[d.getMonth() + 1];

          console.log('getMargin: ', this.curr_positions_trades);
          this.appService.getZerodhaMargin(this.instru, month, this.curr_positions_trades, this.instru).subscribe(function (res) {
            console.log('getMargin: ', res);

            if (res.total) {
              _this22.margin = Math.round(res.total.total).toLocaleString();
            }
          }, function (error) {
            console.log('getMargin error', error);
          });
        }
      }, {
        key: "getROI",
        value: function getROI() {
          // console.log('roi: ', this.getStrategyPnL(), parseFloat(this.margin.replace(/,/g, '')));
          if (this.margin) {
            var roi = this.getStrategyPnL() / parseFloat(this.margin.replace(/,/g, '')) * 100;
            roi = Math.round((roi + 0.00001) * 100) / 100;
            return roi;
          }
        }
      }, {
        key: "getPnL",
        value: function getPnL(pos, instru, expiry_date) {
          var pnl = null;
          var exit = null;

          if (pos.exit !== null && pos.exit !== 0) {
            exit = pos.exit;
          } else {
            exit = this.getLTP_strike(pos, instru, expiry_date);
          }

          if (pos.qty > 0) {
            var p = (exit - pos.entry) * pos.qty;
            pnl = p;
          } else if (pos.qty < 0) {
            var _p2 = (pos.entry - exit) * -pos.qty;

            pnl = _p2;
          }
          /* if (position.scrip.includes('USDINR')) {
            pnl *= 1000;
          } */


          pnl = Math.round((pnl + 0.00001) * 100) / 100;
          pos.pnl = pnl;
          return pnl;
        }
      }, {
        key: "getStrategyPnL",
        value: function getStrategyPnL() {
          var _this23 = this;

          var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var pnl = 0;
          var pointsProfit = 0;
          var trades = null;
          var instru = null;
          var expiry = null;

          if (num === null) {
            trades = this.curr_positions_trades;
          }

          if (num === 1 && this.s1Trades) {
            trades = this.s1Trades.trades;
            instru = this.s1Trades.instru;
            expiry = this.s1Trades.expiry;
          }

          if (num === 2 && this.s2Trades) {
            trades = this.s2Trades.trades;
            instru = this.s2Trades.instru;
            expiry = this.s2Trades.expiry;
          }

          if (num === 3 && this.s3Trades) {
            trades = this.s3Trades.trades;
            instru = this.s3Trades.instru;
            expiry = this.s3Trades.expiry;
          }

          if (num === 4 && this.s4Trades) {
            trades = this.s4Trades.trades;
            instru = this.s4Trades.instru;
            expiry = this.s4Trades.expiry;
          }

          if (num === 5 && this.s5Trades) {
            trades = this.s5Trades.trades;
            instru = this.s5Trades.instru;
            expiry = this.s5Trades.expiry;
          }

          if (trades) {
            trades.forEach(function (pos) {
              if (num) {
                var posPnl = _this23.getPnL(pos, instru, pos.expiry);

                pnl += posPnl;
                pointsProfit += posPnl / Math.abs(pos.qty); // console.log('points:', pointsProfit);
              } else {
                var _posPnl = _this23.getPnL(pos); // pos.pnl;


                pnl += _posPnl;
                pointsProfit += _posPnl / Math.abs(pos.qty);
              }
            });
          }

          pnl = Math.round((pnl + 0.00001) * 100) / 100;
          pointsProfit = Math.round((pointsProfit + 0.00001) * 100) / 100; // console.log('pointsProfit:', pointsProfit);

          this.chartService.strategyPnLEvent$.next([pnl, pointsProfit]);
          return pnl;
        }
      }, {
        key: "getLTP_strike",
        value: function getLTP_strike(pos, instru, expiry_date) {
          if (!instru) {
            instru = this.instru;
          }

          if (!expiry_date) {
            expiry_date = pos.expiry; // this.expiryDate;
          }

          var is_monthly_expiry = false;
          var expiryDate = new Date(expiry_date);
          expiryDate.setHours(0, 0, 0, 0);
          var tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].monthlyExpiryDates;

          if (instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].monthlyExpiryDatesUSDINR;
          }

          for (var key in tempmonthlyExpiryDates) {
            if (tempmonthlyExpiryDates.hasOwnProperty(key)) {
              // console.log(key + " -> " + tempmonthlyExpiryDates[key] + ' ' + expiryDate);
              if (expiryDate.getTime() === tempmonthlyExpiryDates[key].getTime()) {
                // console.log('monthly expiry matched');
                is_monthly_expiry = true;
                break;
              }
            }
          }

          var expiry = null;

          if (is_monthly_expiry) {
            expiry = '' + (expiryDate.getFullYear() - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].monthsMapping[expiryDate.getMonth() + 1];
          } else {
            var expiryMonth = null;

            if (expiryDate.getMonth() + 1 === 10) {
              expiryMonth = 'O';
            } else if (expiryDate.getMonth() + 1 === 11) {
              expiryMonth = 'N';
            } else if (expiryDate.getMonth() + 1 === 12) {
              expiryMonth = 'D';
            } else {
              expiryMonth = expiryDate.getMonth() + 1;
            }

            expiry = '' + (expiryDate.getFullYear() - 2000) + expiryMonth + ('0' + expiryDate.getDate()).slice(-2);
          }

          var str = instru + expiry + pos.scrip; // console.log('str: ' + str);

          return this.mapService.getLtp(str);
        }
      }, {
        key: "getInstruLTP",
        value: function getInstruLTP(instru) {
          if (!instru) {
            instru = this.instru;
          }

          var scrip = 'NIFTY50';

          if (instru === 'BANKNIFTY') {
            scrip = 'BANKNIFTY';
          }

          if (instru === 'USDINR') {
            var expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].year + _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].USDINR_FUT_MONTH];
            var expiryMonth = null;

            if (expiryDate.getMonth() + 1 === 10) {
              expiryMonth = 'O';
            } else if (expiryDate.getMonth() + 1 === 11) {
              expiryMonth = 'N';
            } else if (expiryDate.getMonth() + 1 === 12) {
              expiryMonth = 'D';
            } else {
              expiryMonth = expiryDate.getMonth() + 1;
            }

            var expiry = '' + (expiryDate.getFullYear() - 2000) + expiryMonth + ('0' + expiryDate.getDate()).slice(-2); // scrip = 'USDINR' + expiry + AppConstants.USDINR_FUT_MONTH + AppConstants.year + 'FUT';

            scrip = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].USDINR_FUT_MONTH + 'FUT'; // console.log('getLtp strike: ' + scrip);
          }

          this.spot = this.mapService.getLtp(scrip);
          return this.spot;
        }
      }, {
        key: "updateChartData",
        value: function updateChartData(res) {
          var _this24 = this;

          if (res) {
            this.labels = [];
            this.pnl = [];
            var t0 = [];
            this.zeroline = [];
            var count = 0;

            if (res.chart && Array.isArray(res.chart)) {
              res.chart.forEach(function (element) {
                // Change: -8.1, Final: -102518, StockPrice: 10318, Today: -115484.48, bes: 0
                count++;

                if (count < 100) {
                  /* this.labels.push(element.StockPrice);
                  this.pnl.push(element.Final);
                  this.zeroline.push(0); */
                }

                _this24.labels.push(element.StockPrice);

                _this24.pnl.push(element.Final);

                t0.push(element.Today);

                _this24.zeroline.push(0);
              });
            } // console.log('payOffEvent labels: ', this.labels);
            // console.log('payOffEvent pnl: ', this.pnl);


            this.lineChartLabels = this.labels;
            this.lineChartData = [{
              data: this.pnl,
              label: 'PnL'
            }, {
              data: t0,
              label: 'T+0',
              fill: false
            }];
            var ltp = 0;

            if (this.instru === 'USDINR') {
              if (this.use_hypo_future) {
                var ce_premium = this.getLTP_strike({
                  scrip: this.hypo_future_strike + 'CE'
                }, this.instru, this.expiryDate);
                var pe_premium = this.getLTP_strike({
                  scrip: this.hypo_future_strike + 'PE'
                }, this.instru, this.expiryDate);
                ltp = ce_premium - pe_premium + this.hypo_future_strike; // Find future price from Put Call Parity

                ltp = Math.round((ltp + 0.00001) * 100) / 100;
                console.log('hypo fut:' + ltp);
              } else {
                ltp = parseFloat(this.getInstruLTP());
                ltp = Math.round((ltp + 0.00001) * 100) / 100; // TODO: ltp rounding for usdinr to two decimal
              }
            } else {
              ltp = parseInt(this.getInstruLTP());
            }

            this.lineChartOptions = {
              responsive: true,
              scales: {
                xAxes: [{}]
              },
              tooltips: {
                mode: 'index',
                intersect: false
              },
              animation: {
                duration: 0
              },
              annotation: {
                events: ['click'],
                annotations: this.getChartAnnotations(ltp)
              }
            };
          }
        }
      }, {
        key: "getChartAnnotations",
        value: function getChartAnnotations(ltp) {
          var annotations = [];
          /* let range = 1000;
          let range_multiple = 50;
          let increment = 50;
          if (this.instru === 'BANKNIFTY') {
            range = 3000;
            range_multiple = 100;
            increment = 100;
          }
          if (this.instru === 'USDINR') {
            range = 2;
            range_multiple = 0.25;
            increment = 0.25;
          }
               let round_ltp = (Math.round(ltp / range_multiple) * range_multiple);
          let lower_range = round_ltp - range; // TODO: range depends on instru
          let upper_range = round_ltp + range; */

          /* for (let point = lower_range; point <= upper_range; point += increment) {
            let symbol = point;
            let ce_premium = this.getLTP_strike({ scrip : symbol + 'CE' }, this.instru, this.expiryDate);
            let pe_premium = this.getLTP_strike({ scrip : symbol + 'PE' }, this.instru, this.expiryDate);
                 annotations.push({
              drawTime: 'afterDatasetsDraw',
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: symbol,
              borderColor: 'white',
              borderWidth: 0,
              label: {
                yAdjust: 180,
                enabled: true,
                fontColor: 'white',
                content: ce_premium
              },
              onClick: function(this, e) {
                let scrip = point + 'CE';
                console.log('Adding scrip from payoff to strategy: ' + scrip);
                let qty = 75;
                if (this.instru === 'BANKNIFTY') {
                  qty = 25;
                }
                if (this.instru === 'USDINR') {
                  qty = 1000;
                }
                console.log(e);
                localStorage.setItem('addScripToStrategy', JSON.stringify({qty: qty, scrip: scrip, premium: ce_premium}));
              }
            });
            annotations.push({
              drawTime: 'afterDatasetsDraw',
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: symbol,
              borderColor: 'white',
              borderWidth: 0,
              label: {
                yAdjust: 200,
                enabled: true,
                fontColor: 'white',
                content: pe_premium
              },
              onClick: function(e) {
                let scrip = point + 'PE';
                console.log('Adding scrip from payoff to strategy: ' + scrip);
                let qty = 75;
                if (this.instru === 'BANKNIFTY') {
                  qty = 25;
                }
                if (this.instru === 'USDINR') {
                  qty = 1000;
                }
                this.addPosition(qty, scrip, pe_premium); // TODO: check instru for lot size
              }
            });
          } */

          /*
              this.curr_positions_trades.forEach(element => { */

          /* {
            qty: 75,
            scrip: '11150CE',
            expiry: '01OCT2020',
            entry: 50,
            exit: 0,
          }, */
          // -375x10950PEx01OCT2020x19.2x0x0&

          /*       if (element.exit === 0) {
                  let symbol = element.scrip.slice(0, -2);
                  symbol = parseFloat(symbol);
                  symbol = (Math.round((symbol + 0.00001) * 100) / 100); // ltp rounding for usdinr to two decimal
          
                  let labelcolor = 'white'; //'lightgreen';
                  let linecolor = 'darkgrey' //'limegreen';
                  let yAdjustBase = 0;
          
                  if (element.scrip.includes('PE')) {
                    //labelcolor = 'salmon';
                    //linecolor = 'salmon';
                    yAdjustBase = 60;
                  } */

          /* if (this.doAnnotationsContainSymbol(annotations, symbol)) {
            //yAdjustBase = 80;
            //linecolor = 'darkturquoise';
          } */

          /* if (element.qty >= 0) {
            labelcolor = 'white';
          } */
          //let pos = '' + (element.qty <= 0 ? element.qty : '+' + element.qty) + 'x' + element.scrip + 'x' + element.expiry + 'x' + element.entry + 'x' + element.exit + 'x0&';

          /* annotations.push({
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: symbol,
            borderColor: linecolor,
            borderWidth: 1,
            label: {
              yAdjust: 0,
              enabled: true,
              fontColor: labelcolor,
              content: symbol
            }
          });
           annotations.push({
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: symbol,
            borderColor: linecolor,
            borderWidth: 1,
            label: {
              yAdjust: yAdjustBase + 40,
              enabled: true,
              fontColor: labelcolor,
              content: element.qty / 1000
            }
          });
           let pnlcolor = 'lightgreen';
          if (element.pnl < 0) {
            pnlcolor = 'salmon';
          }
          annotations.push({
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: symbol,
            borderColor: linecolor,
            borderWidth: 1,
            label: {
              yAdjust: yAdjustBase + 60,
              enabled: true,
              fontColor: pnlcolor,
              content: element.pnl
            }
          });
          }
          }); */

          annotations.push({
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: ltp,
            borderColor: 'orange',
            borderWidth: 1,
            label: {
              yAdjust: -40,
              enabled: true,
              fontColor: 'orange',
              content: ltp
            }
          }); // console.log(annotations);

          return annotations;
        }
      }, {
        key: "doAnnotationsContainSymbol",
        value: function doAnnotationsContainSymbol(annotations, symbol) {
          for (var i = 0; i < annotations.length; i++) {
            if (symbol === annotations[i].value) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "updateIntradayChartData",
        value: function updateIntradayChartData() {
          var labels = [];
          var prices = [];
          var spot = [];
          var ce_intraday = this.chartService.getIntradayData('74CE', 'USDINR', '2020-11-13');
          var pe_intraday = this.chartService.getIntradayData('74PE', 'USDINR', '2020-11-13');
          var spot_intraday = this.chartService.getIntradayData('FUT', 'USDINR', _common_application_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].USDINR_FUT_MONTH);

          if (ce_intraday) {
            ce_intraday.forEach(function (ce_elem) {
              var ce_time = ce_elem.time;
              pe_intraday.forEach(function (pe_elem) {
                if (ce_time === pe_elem.time) {
                  var p = ce_elem.price + pe_elem.price;
                  p = Math.round((p + 0.00001) * 100) / 100; // round to 2 decimal places

                  labels.push(ce_time);
                  prices.push(p);
                  return;
                }
              });

              if (spot_intraday) {
                spot_intraday.forEach(function (elem) {
                  if (ce_time === elem.time) {
                    spot.push(elem.price);
                    return;
                  }
                });
              }
            });
          } // console.log('updateIntradayChartData: ', labels, prices);


          this.i1ChartLabels = labels;
          this.i1ChartData = [{
            data: prices,
            label: 'Price'
          }, {
            data: spot,
            label: 'Underlying',
            yAxisID: 'y-axis-1'
          }];
        }
      }]);

      return ChartComponent;
    }();

    ChartComponent.ɵfac = function ChartComponent_Factory(t) {
      return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_7__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chart_service__WEBPACK_IMPORTED_MODULE_8__["ChartService"]));
    };

    ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartComponent,
      selectors: [["app-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 130,
      vars: 50,
      consts: [["id", "accordionPayoff", 1, "accordion", "mb-2"], [1, "card"], ["type", "button", "data-toggle", "collapse", "data-target", "#payOffSection", "aria-expanded", "true", "aria-controls", "payOffSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "payOffSection", "aria-labelledby", "headingOne", "data-parent", "#accordionPayoff", 1, "collapse", "show", "p-2"], [1, "chart-all-strategies-pnl", "text-center"], [1, "font-weight-bold", 3, "ngClass"], [1, "pl-4", "pr-4"], [1, "chart-flex-container"], ["class", "chart-chart", 4, "ngIf"], [1, "chart-positions"], [1, "form-check-inline", "use-hypo-future-class"], ["for", "use-range", 1, "form-check-label"], ["id", "use-range", "type", "number", "placeholder", "Payoff Range", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "", "id", "use-hypo-future", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "use-hypo-future", 1, "form-check-label"], ["type", "number", "placeholder", "Closest Strike", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "", "id", "hide-payoff", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "hide-payoff", 1, "form-check-label"], [1, "mb-2"], [1, "strategy_instru", "form-control", "form-control-sm", "mr-2", 3, "ngModel", "ngModelChange"], ["value", "NIFTY"], ["value", "BANKNIFTY"], ["value", "USDINR"], ["placeholder", "Expiry YYYY-MM-DD", "id", "payOffExpiry", 1, "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-1", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [1, "table", "table-sm", "table-bordered", "shadow", "text-center"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mr-1", 3, "click"], [1, "mt-2"], ["type", "file", "name", "File Upload 1", "accept", ".csv", 2, "display", "none", 3, "change"], ["fileImportInput1", ""], [1, "mt-2", "font-weight-bold"], [3, "ngClass"], [1, "mt-1"], ["class", "accordion mb-2", "id", "accordionStraddle", 4, "ngIf"], ["class", "accordion", "id", "accordionCharts", 4, "ngIf"], [1, "chart-chart"], ["baseChart", "", "width", "2", "height", "1", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"], ["type", "number", "placeholder", "Qty", 1, "form-control", "form-control-sm", 3, "step", "ngModel", "ngModelChange"], ["placeholder", "Scrip 11500CE", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Expiry 01OCT2020", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Entry", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Exit", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "font-weight-bold"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["id", "accordionStraddle", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#straddleSection", "aria-expanded", "true", "aria-controls", "straddleSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "straddleSection", "aria-labelledby", "headingOne", "data-parent", "#accordionStraddle", 1, "collapse", "show", "p-2"], ["placeholder", "Expiry YYYY-MM-DD", "id", "payOffExpiry", 1, "mr-2", "mb-1", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Scrip", "id", "payOffExpiry", 1, "mb-1", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["id", "accordionCharts", 1, "accordion"], ["type", "button", "data-toggle", "collapse", "data-target", "#chartsSection", "aria-expanded", "true", "aria-controls", "chartsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "chartsSection", "aria-labelledby", "headingOne", "data-parent", "#accordionCharts", 1, "collapse", "show", "p-2"], ["height", "600", "width", "760", "src", "https://ssltvc.forexprostools.com/?pair_ID=8985&height=600&width=760&interval=300&plotStyle=candles&domain_ID=56&lang_ID=56&timezone_ID=20"], ["height", "600", "width", "760", "src", "https://ssltvc.forexprostools.com/?pair_ID=160&height=600&width=760&interval=300&plotStyle=candles&domain_ID=56&lang_ID=56&timezone_ID=20"]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Strategy Payoff ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Strategy 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Strategy 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Strategy 3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Strategy 4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Strategy 5: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ChartComponent_div_36_Template, 2, 7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_41_listener($event) {
            return ctx.payoff_range = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.use_hypo_future = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Use Hypothetical Future");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.hypo_future_strike = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.hide_payoff = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Hide Payoff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_select_ngModelChange_53_listener($event) {
            return ctx.instru = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "NIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "BANKNIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "USDINR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_60_listener($event) {
            return ctx.expiryDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_61_listener() {
            return ctx.doSingleStrategySubscription();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Refresh LTPs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_63_listener() {
            return ctx.loadOptionChain();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Load Option Chain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ChartComponent_tr_67_Template, 22, 15, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_68_listener() {
            return ctx.addPosition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_70_listener() {
            return ctx.calculatePayoff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_73_listener() {
            return ctx.savePositions(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Save 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_75_listener() {
            return ctx.savePositions(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Save 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_77_listener() {
            return ctx.savePositions(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Save 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_79_listener() {
            return ctx.savePositions(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Save 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_81_listener() {
            return ctx.savePositions(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Save 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_84_listener() {
            return ctx.reloadPayoffData(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Load 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_86_listener() {
            return ctx.reloadPayoffData(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Load 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_88_listener() {
            return ctx.reloadPayoffData(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Load 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_90_listener() {
            return ctx.reloadPayoffData(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Load 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_92_listener() {
            return ctx.reloadPayoffData(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Load 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_95_listener() {
            return ctx.exportToCSV(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Export 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_97_listener() {
            return ctx.exportToCSV(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Export 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_99_listener() {
            return ctx.exportToCSV(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Export 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_101_listener() {
            return ctx.exportToCSV(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Export 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_103_listener() {
            return ctx.exportToCSV(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Export 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_106_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109);

            return _r2.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Import");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChartComponent_Template_input_change_108_listener($event) {
            return ctx.importCSV($event, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Total PnL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Place SLs and entries based on SPOT POSITION. Watch Payoff, Breakevens, Loss at Rs 1.5. Maintain 1:1 RR. Don't enter entire position on same day, divide in days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Better to exit a position and re-enter another strike above/below. Place SL based on SPOT, and re-enter another strike on SL hit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, ChartComponent_div_128_Template, 36, 16, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, ChartComponent_div_129_Template, 8, 0, "div", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, ctx.getStrategyPnL(1) < 0, ctx.getStrategyPnL(1) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c1, ctx.getStrategyPnL(2) < 0, ctx.getStrategyPnL(2) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c1, ctx.getStrategyPnL(3) < 0, ctx.getStrategyPnL(3) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c1, ctx.getStrategyPnL(4) < 0, ctx.getStrategyPnL(4) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c1, ctx.getStrategyPnL(5) < 0, ctx.getStrategyPnL(5) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hide_payoff);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payoff_range);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.use_hypo_future);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hypo_future_strike);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hide_payoff);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Loaded Strategy ", ctx.currLoadNum, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instru);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expiryDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.curr_positions_trades);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c1, ctx.getStrategyPnL() < 0, ctx.getStrategyPnL() > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getStrategyPnL(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Margin: ", ctx.margin, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ROI: ", ctx.getROI(), " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Breakevens: ", ctx.breakevens, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("CE: ", ctx.cePremium, " ( ", ctx.ceWeight, "% ) , ", ctx.ceLots, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("PE: ", ctx.pePremium, " ( ", ctx.peWeight, "% ) , ", ctx.peLots, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["[_nghost-%COMP%], input[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\n.use-hypo-future-class[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.chart-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.chart-positions[_ngcontent-%COMP%] {\n  \n  \n  min-width: 400px;\n}\n\n.chart-chart[_ngcontent-%COMP%] {\n  \n  min-width: 500px;\n}\n\n#payOffExpiry[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.positionExited[_ngcontent-%COMP%] {\n  background-color: rgba(148, 159, 177, 0.2);\n  \n}\n\n.strategy_instru[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n\n#payOffExpiry[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrZXQvRGVza3RvcC9nZW5lcmFsL3RyYWRlcy1hLTE5c2VwL3NyYy9hcHAvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBREdBO0VBQ0ksMENBQUE7RUFBeUMsYUFBQTtBQ0M3Qzs7QURFQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0LCBpbnB1dCwgLmlucHV0LWdyb3VwLXRleHQsIHNlbGVjdCwgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlLWh5cG8tZnV0dXJlLWNsYXNzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jaGFydC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2hhcnQtcG9zaXRpb25zIHtcclxuICAgIC8qIGZsZXg6IDI7ICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uY2hhcnQtY2hhcnQge1xyXG4gICAgLyogZmxleDogMzsgKi9cclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbiNwYXlPZmZFeHBpcnkge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnBvc2l0aW9uRXhpdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LDE1OSwxNzcsMC4yKTsgLyogI2Y4ZjlmYTsgKi9cclxufVxyXG5cclxuLnN0cmF0ZWd5X2luc3RydSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jcGF5T2ZmRXhwaXJ5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsIjpob3N0LCBpbnB1dCwgLmlucHV0LWdyb3VwLXRleHQsIHNlbGVjdCwgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2UtaHlwby1mdXR1cmUtY2xhc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2hhcnQtZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jaGFydC1wb3NpdGlvbnMge1xuICAvKiBmbGV4OiAyOyAqL1xuICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5jaGFydC1jaGFydCB7XG4gIC8qIGZsZXg6IDM7ICovXG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbiNwYXlPZmZFeHBpcnkge1xuICB3aWR0aDogMzAlO1xufVxuXG4ucG9zaXRpb25FeGl0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTU5LCAxNzcsIDAuMik7XG4gIC8qICNmOGY5ZmE7ICovXG59XG5cbi5zdHJhdGVneV9pbnN0cnUge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNwYXlPZmZFeHBpcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chart',
          templateUrl: './chart.component.html',
          styleUrls: ['./chart.component.scss']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }, {
          type: _common_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]
        }, {
          type: _common_websocket_service__WEBPACK_IMPORTED_MODULE_7__["WebsocketService"]
        }, {
          type: _chart_service__WEBPACK_IMPORTED_MODULE_8__["ChartService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chart/chart.module.ts":
  /*!***************************************!*\
    !*** ./src/app/chart/chart.module.ts ***!
    \***************************************/

  /*! exports provided: ChartModule */

  /***/
  function srcAppChartChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartModule", function () {
      return ChartModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chart.component */
    "./src/app/chart/chart.component.ts");
    /* harmony import */


    var _chart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chart.service */
    "./src/app/chart/chart.service.ts");

    var ChartModule = function ChartModule() {
      _classCallCheck(this, ChartModule);
    };

    ChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ChartModule
    });
    ChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function ChartModule_Factory(t) {
        return new (t || ChartModule)();
      },
      providers: [_chart_service__WEBPACK_IMPORTED_MODULE_8__["ChartService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChartModule, {
        declarations: [_chart_component__WEBPACK_IMPORTED_MODULE_7__["ChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]],
        exports: [_chart_component__WEBPACK_IMPORTED_MODULE_7__["ChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]],
          exports: [_chart_component__WEBPACK_IMPORTED_MODULE_7__["ChartComponent"]],
          declarations: [_chart_component__WEBPACK_IMPORTED_MODULE_7__["ChartComponent"]],
          providers: [_chart_service__WEBPACK_IMPORTED_MODULE_8__["ChartService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chart/chart.service.ts":
  /*!****************************************!*\
    !*** ./src/app/chart/chart.service.ts ***!
    \****************************************/

  /*! exports provided: ChartService */

  /***/
  function srcAppChartChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartService", function () {
      return ChartService;
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


    var _common_application_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/map.service */
    "./src/app/common/map.service.ts");
    /* harmony import */


    var _common_fyers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/fyers.service */
    "./src/app/common/fyers.service.ts");
    /* harmony import */


    var _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common/aliceblue.service */
    "./src/app/common/aliceblue.service.ts");

    var ChartService = /*#__PURE__*/function () {
      function ChartService(http, mapService, fyersService, aliceblueService) {
        _classCallCheck(this, ChartService);

        this.http = http;
        this.mapService = mapService;
        this.fyersService = fyersService;
        this.aliceblueService = aliceblueService;
        this.requestStatusEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.optionChainEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.strategyPnLEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.intradayData = new Map();
      }

      _createClass(ChartService, [{
        key: "getIntradayData",
        value: function getIntradayData(scrip, instru, expiry) {
          return this.intradayData.get(instru + ' ' + expiry + ' ' + scrip);
        }
      }, {
        key: "loadIntradayData",
        value: function loadIntradayData(intradayWatch) {
          var _this25 = this;

          console.log('Loading intraday data');
          intradayWatch.forEach(function (element) {
            var prices = JSON.parse(localStorage.getItem(element.instru + ' ' + element.expiry + ' ' + element.scrip));

            _this25.intradayData.set(element.instru + ' ' + element.expiry + ' ' + element.scrip, prices);
          });
          console.log('Loaded intraday data: ', this.intradayData);
        }
      }, {
        key: "initFetchIntraday",
        value: function initFetchIntraday(intradayWatch) {
          var _this26 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(500).subscribe(function (sec) {
            // console.log('Fetching intraday data');
            var cutOffTime = new Date();
            cutOffTime.setHours(17, 5, 0, 0);
            var openTime = new Date();
            openTime.setHours(8, 55, 0, 0);
            var currTime = new Date().getTime();

            if (currTime > cutOffTime.getTime()) {
              return;
            }

            if (currTime < openTime.getTime()) {
              return;
            }

            if (new Date().getDay() === 6 || new Date().getDay() === 0) {
              return;
            }

            intradayWatch.forEach(function (element) {
              var scrip = element.scrip;
              var instru = element.instru;
              var expiry = element.expiry;
              var ltp = null;

              if (scrip === 'FUT' || scrip === 'SPOT') {
                ltp = _this26.getInstruLTP(instru);
              } else {
                ltp = _this26.getLTP_strike(scrip, instru, expiry);
              }

              if (ltp) {
                var arr = _this26.intradayData.get(instru + ' ' + expiry + ' ' + scrip);

                if (!arr) {
                  arr = [];
                }

                var d = new Date(); // "2020-10-15 8:24"

                var dformat = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes()].join(':'); // let prev_ltp = arr[dformat];

                var found = null;

                for (var i = 0; i < arr.length; i++) {
                  if (arr[i].time && arr[i].time === dformat) {
                    found = i;
                    break;
                  }
                }

                if (found !== null) {
                  arr[found] = {
                    time: dformat,
                    price: ltp
                  };
                } else {
                  arr.push({
                    time: dformat,
                    price: ltp
                  });
                } // arr[dformat] = ltp;


                _this26.intradayData.set(instru + ' ' + expiry + ' ' + scrip, arr); // console.log('intradayData: ', this.intradayData);

              }
            });
          });
        }
      }, {
        key: "getLTP_strike",
        value: function getLTP_strike(scrip, instru, expiry_date) {
          var is_monthly_expiry = false;
          var expiryDate = new Date(expiry_date);
          expiryDate.setHours(0, 0, 0, 0);
          var tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].monthlyExpiryDates;

          if (instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].monthlyExpiryDatesUSDINR;
          }

          for (var key in tempmonthlyExpiryDates) {
            if (tempmonthlyExpiryDates.hasOwnProperty(key)) {
              // console.log(key + " -> " + tempmonthlyExpiryDates[key] + ' ' + expiryDate);
              if (expiryDate.getTime() === tempmonthlyExpiryDates[key].getTime()) {
                // console.log('monthly expiry matched');
                is_monthly_expiry = true;
                break;
              }
            }
          }

          var expiry = null;

          if (is_monthly_expiry) {
            expiry = '' + (expiryDate.getFullYear() - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].monthsMapping[expiryDate.getMonth() + 1];
          } else {
            var expiryMonth = null;

            if (expiryDate.getMonth() + 1 === 10) {
              expiryMonth = 'O';
            } else if (expiryDate.getMonth() + 1 === 11) {
              expiryMonth = 'N';
            } else if (expiryDate.getMonth() + 1 === 12) {
              expiryMonth = 'D';
            } else {
              expiryMonth = expiryDate.getMonth() + 1;
            }

            expiry = '' + (expiryDate.getFullYear() - 2000) + expiryMonth + ('0' + expiryDate.getDate()).slice(-2);
          }

          var str = instru + expiry + scrip; // console.log('str: ' + str);

          return this.mapService.getLtp(str);
        }
      }, {
        key: "getInstruLTP",
        value: function getInstruLTP(instru) {
          var scrip = 'NIFTY50';

          if (instru === 'BANKNIFTY') {
            scrip = 'BANKNIFTY';
          }

          if (instru === 'USDINR') {
            var expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].year + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USDINR_FUT_MONTH];
            var expiryMonth = null;

            if (expiryDate.getMonth() + 1 === 10) {
              expiryMonth = 'O';
            } else if (expiryDate.getMonth() + 1 === 11) {
              expiryMonth = 'N';
            } else if (expiryDate.getMonth() + 1 === 12) {
              expiryMonth = 'D';
            } else {
              expiryMonth = expiryDate.getMonth() + 1;
            }

            var expiry = '' + (expiryDate.getFullYear() - 2000) + expiryMonth + ('0' + expiryDate.getDate()).slice(-2);
            scrip = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USDINR_FUT_MONTH + 'FUT'; // console.log('getLtp strike: ' + scrip);
          }

          var spot = this.mapService.getLtp(scrip);
          return spot;
        }
      }, {
        key: "saveIntradayData",
        value: function saveIntradayData() {
          var _this27 = this;

          // console.log('Saving intraday data: ');
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(function (sec) {
            var _iterator = _createForOfIteratorHelper(_this27.intradayData),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _slicedToArray(_step.value, 2),
                    key = _step$value[0],
                    value = _step$value[1];

                var val = value; // console.log('Saving intraday data: ', val);
                // console.log('Saving intraday data json: ', JSON.stringify(val));

                localStorage.setItem(key, JSON.stringify(val));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }]);

      return ChartService;
    }();

    ChartService.ɵfac = function ChartService_Factory(t) {
      return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_fyers_service__WEBPACK_IMPORTED_MODULE_5__["FyersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_aliceblue_service__WEBPACK_IMPORTED_MODULE_6__["AliceblueService"]));
    };

    ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChartService,
      factory: ChartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _common_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]
        }, {
          type: _common_fyers_service__WEBPACK_IMPORTED_MODULE_5__["FyersService"]
        }, {
          type: _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_6__["AliceblueService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/aliceblue-parser.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/common/aliceblue-parser.service.ts ***!
    \****************************************************/

  /*! exports provided: AliceblueParserService */

  /***/
  function srcAppCommonAliceblueParserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AliceblueParserService", function () {
      return AliceblueParserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _application_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models */
    "./src/app/common/models.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map.service */
    "./src/app/common/map.service.ts");

    var AliceblueParserService = /*#__PURE__*/function () {
      function AliceblueParserService(http, mapService) {
        _classCallCheck(this, AliceblueParserService);

        this.http = http;
        this.mapService = mapService;
      }

      _createClass(AliceblueParserService, [{
        key: "handleSocketMessage",
        value: function handleSocketMessage(binaryData) {
          // console.log('AliceblueService message', binaryData);
          this.parseSocketMessage(binaryData);
        }
      }, {
        key: "parseSocketMessage",
        value: function parseSocketMessage(binaryData) {
          var dataByteArry = new Uint8Array(binaryData);

          if (dataByteArry instanceof Uint8Array) {
            var mode = dataByteArry[0]; // let payload = dataByteArry.subarray(1);
            // console.log('mode', mode);

            if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].MARKETDATA) {
              this.parseMarketData(dataByteArry);
            } else if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].COMPACT_MARKETDATA) {} else if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].SNAPQUOTE) {} else if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].FULL_SNAPQUOTE) {} else if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].DPR) {} else if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].OI) {
              console.log('***** RECEIVED OI');
            } else if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].MARKET_STATUS) {} else if (mode === _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueWsFrameMode"].EXCHANGE_MESSAGES) {}
          } else {
            console.error('Error while converting binary data to byte array');
          }
        }
      }, {
        key: "parseMarketData",
        value: function parseMarketData(payload) {
          // console.log(payload.byteLength);

          /* for (let i = 0; i < payload.byteLength; i++) {
            // do something with each byte in the array
          } */
          var p = new _models__WEBPACK_IMPORTED_MODULE_2__["AliceMarketData"]();
          p.exchange_code = payload[1];
          var multiplier = 100;

          if (p.exchange_code === 3) {
            multiplier = 10000000;
          } // console.log(p.exchange_code);
          // console.log(enc.decode(payload.subarray(0, 2)));
          // console.log(this.byteArrayToNumber(payload.subarray(6, 10), 24));


          p.token = this.byteArrayToNumber(payload.subarray(2, 6), 24);
          p.ltp = this.byteArrayToNumber(payload.subarray(6, 10), 24) / multiplier;
          p.ltt_unix = this.byteArrayToNumber(payload.subarray(10, 14), 24);
          p.last_traded_qty = this.byteArrayToNumber(payload.subarray(14, 18), 24);
          p.volume = this.byteArrayToNumber(payload.subarray(18, 22), 24);
          p.best_bid = this.byteArrayToNumber(payload.subarray(22, 26), 24) / multiplier;
          p.best_bid_qty = this.byteArrayToNumber(payload.subarray(26, 30), 24);
          p.best_ask = this.byteArrayToNumber(payload.subarray(30, 34), 24) / multiplier;
          p.best_ask_qty = this.byteArrayToNumber(payload.subarray(34, 38), 24);
          p.total_buy_qty = this.byteArrayToNumber(payload.subarray(38, 46), 56);
          p.total_sell_qty = this.byteArrayToNumber(payload.subarray(46, 54), 56);
          p.atp = this.byteArrayToNumber(payload.subarray(54, 58), 24) / multiplier;
          p.exchange_timestamp = this.byteArrayToNumber(payload.subarray(58, 62), 24);
          p.open = this.byteArrayToNumber(payload.subarray(62, 66), 24) / multiplier;
          p.high = this.byteArrayToNumber(payload.subarray(66, 70), 24) / multiplier;
          p.low = this.byteArrayToNumber(payload.subarray(70, 74), 24) / multiplier;
          p.close = this.byteArrayToNumber(payload.subarray(74, 78), 24) / multiplier;
          p.year_high = this.byteArrayToNumber(payload.subarray(78, 82), 24) / multiplier;
          p.year_low = this.byteArrayToNumber(payload.subarray(82, 86), 24) / multiplier; // console.log('parseMarketData:', p);
          // console.log('parseMarketData:', new Date(p.ltt_unix * 1000), new Date(p.ltt_unix * 1000).getHours(), new Date(p.ltt_unix * 1000).getMinutes(), new Date(p.ltt_unix * 1000).getSeconds());

          /* if (seconds === 0) {
            update current min
          } else {
            update current min+1
          } */

          this.updateMaps(p);
        }
      }, {
        key: "convertPayloadToString",
        value: function convertPayloadToString(payload) {
          var payloadstr = String.fromCharCode.apply(null, payload);
          return payloadstr;
        }
      }, {
        key: "byteArrayToNumber",
        value: function byteArrayToNumber(bufferedArray, shiftMax) {
          var accum = 0;
          var shiftBy = 0;
          var startIndex = 0;

          for (shiftBy = shiftMax; shiftBy >= 0; shiftBy -= 8) {
            accum |= (bufferedArray[startIndex] & 0xff) << shiftBy;
            startIndex++; // console.log(accum, shiftBy, startIndex);
          }

          return accum;
        }
      }, {
        key: "updateMaps",
        value: function updateMaps(p) {
          var instru_masters = _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.get(p.token);

          if (instru_masters) {
            // console.log('instru_masters.symbol', instru_masters.symbol);
            var split = instru_masters.symbol.split(' ');
            var instru = split[0];
            var strike = isNaN(split[split.length - 2]) ? split[split.length - 2] : Number(split[split.length - 2]);
            var type = split[split.length - 1];
            var expiry = '';

            if (split.length === 4) {
              // NIFTY JUN 9000 PE
              expiry = _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].year + split[1]; // TODO: make year 21 when 2021 year starts
              // console.log(expiry);
            } else {
              // USDINR 19 JUN20 77.0 CE, NIFTY JUN FUT, NIFTY 13 AUG20 9000.0 PE
              var expiryDate = new Date(instru_masters.expiry); // console.log((expiryDate.getFullYear() - 2000), (expiryDate.getMonth() + 1), expiryDate.getDate());

              var expiryMonth = null;

              if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
              } else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
              } else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
              } else {
                expiryMonth = expiryDate.getMonth() + 1;
              }

              expiry = '' + (expiryDate.getFullYear() - 2000) + expiryMonth + ('0' + expiryDate.getDate()).slice(-2); // expiryDate.getDate();
            }

            var symbol = instru + expiry + strike + type; // NIFTY2061810000CE NIFTY20JUN10000CE NIFTY20N1810000CE
            // console.log('updateMaps strike is', symbol);

            this.mapService.setLtp(symbol, p.ltp);
            this.mapService.setAtp(symbol, p.atp);
            this.mapService.setVolume(symbol, p.volume); // this.mapService.setOI(instru_masters.symbol, p.oi);
            // this.mapService.setChgOI(instru_masterss.symbol, p.chgoi);
          } else {
            // symbol is in nse masters or cds masters, not nfo masters
            var _symbol = '';

            if (p.token === 26000) {
              _symbol = 'NIFTY50';
            } else if (p.token === 26009) {
              _symbol = 'BANKNIFTY';
            } else if (p.token === 1) {
              _symbol = 'USDINR';
            } else {
              console.error(p.token, 'not found in masters');
            }

            this.mapService.setLtp(_symbol, p.ltp);
            this.mapService.setAtp(_symbol, p.atp);
            this.mapService.setVolume(_symbol, p.volume);
          }
        }
      }]);

      return AliceblueParserService;
    }();

    AliceblueParserService.ɵfac = function AliceblueParserService_Factory(t) {
      return new (t || AliceblueParserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]));
    };

    AliceblueParserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AliceblueParserService,
      factory: AliceblueParserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AliceblueParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/aliceblue.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/common/aliceblue.service.ts ***!
    \*********************************************/

  /*! exports provided: AliceblueService */

  /***/
  function srcAppCommonAliceblueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AliceblueService", function () {
      return AliceblueService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _application_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models */
    "./src/app/common/models.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./websocket.service */
    "./src/app/common/websocket.service.ts");

    var AliceblueService = /*#__PURE__*/function () {
      // abMastersContract: AliceblueInstrument[] = [];
      function AliceblueService(http, webSocketService) {
        _classCallCheck(this, AliceblueService);

        this.http = http;
        this.webSocketService = webSocketService;
        this.baseUrl = 'https://ant.aliceblueonline.com';
      }

      _createClass(AliceblueService, [{
        key: "getMastersContract",
        value: function getMastersContract() {
          var httpOptions = {
            responseType: 'json'
          };
          var url = this.baseUrl + '/api/v2/contracts.json?exchanges=NFO';
          this.http.get(url, httpOptions).subscribe(function (res) {
            console.log('AliceblueService getMastersContract', res);

            if (res) {
              _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.clear();

              for (var o in res) {
                if (res[o] instanceof Array) {
                  res[o].forEach(function (i) {
                    var p = new _models__WEBPACK_IMPORTED_MODULE_2__["AliceblueInstrument"]();
                    p.symbol = i.symbol; // USDINR 19 JUN20 77.0 CE, NIFTY JUN FUT, NIFTY JUN 9000 PE, NIFTY 13 AUG20 9000.0 PE

                    p.lotSize = Number(i.lotSize);
                    p.expiry = new Date(i.expiry * 1000).toDateString();
                    p.exchange_code = i.exchange_code;
                    p.exchange = i.exchange;
                    p.company = i.company;
                    p.code = Number(i.code); // let split = i.symbol.split(' ');
                    // let key = split[0] + split[split.length - 2] + split[split.length - 1]; // NIFTY10000CE

                    /* if (i.code === 95734 || i.code === '95734') {
                      console.log('**** FOUND', i.code);
                    } */

                    if (p.code === 95734) {// console.log('**** FOUND', i.code);
                    }

                    _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.set(p.code, p);
                  });
                }
              }
            }

            console.log('AliceblueService getMastersContract abMastersContract', _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract);
          }, function (error) {
            console.log('AliceblueService getMastersContract error', error);
          });
        }
      }, {
        key: "connectWebsocket",
        value: function connectWebsocket(access_token) {
          this.webSocketService.connect(access_token);
        }
      }, {
        key: "sendSubscriptions",
        value: function sendSubscriptions(instruments) {
          var _this28 = this;

          /* for _instrument in instrument:
                      if not isinstance(_instrument, Instrument):
                          raise TypeError("Required parameter instrument not of type Instrument")
                      exchange = self.__exchange_codes[_instrument.exchange]
                      arr.append([exchange, int(_instrument.token)])
                      self.__subscribers[_instrument] = live_feed_type
          arr.append([exchange, int(_instrument.token)])
          data = json.dumps({'a' : 'subscribe', 'v' : arr, 'm' : AliceBlueLiveFeedType.MARKET_DATA}) */
          var arr = [];
          instruments.forEach(function (instrument) {
            var instru = _this28.findStrikeInMasters(instrument);

            if (instru) {
              arr.push([instru.exchange_code, instru.code]);
            }
          });
          var message = JSON.stringify({
            'a': 'subscribe',
            'v': arr,
            'm': _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueLiveFeedType"].MARKET_DATA
          });
          console.log('sendSubscriptions: ' + message);
          this.webSocketService.sendMessage(message);
        }
      }, {
        key: "findStrikeInMasters",
        value: function findStrikeInMasters(instrument) {
          /*
              symbol in masters:
              USDINR 19 JUN20 77.0 CE
              NIFTY 13 AUG20 9000.0 PE
              NIFTY JUN FUT
              NIFTY JUN 9000 PE
           */
          var return_instru = null;

          _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.forEach(function (element) {
            // for (let i = 0; i < this.abMastersContract.length; i++) {
            // let element = this.abMastersContract[i];
            var split = element.symbol.split(' ');
            var instru = split[0];
            var strike = split[split.length - 2];
            var type = split[split.length - 1]; // console.log(instru, strike, type, element.expiry, instrument.instru, instrument.strike, instrument.type, instrument.expiry);

            if (instrument.expiry === element.expiry && instrument.instru === instru && instrument.strike === Number(strike) && instrument.type === type) {
              return_instru = element;
              return;
            }
          });

          return return_instru;
          /*
          for contract in master_contract:
                  if symbol == master_contract[contract].symbol.split(' ')[0]:
                      matches.append(master_contract[contract])
          matches = []
          for i in res:
              if(i.expiry == expiry_date):
                  matches.append(i)
          for i in matches:
              if(is_fut == True):
                  if('FUT' in i.symbol):
                      return i
              else:
                  sp = i.symbol.split(' ')
                  if((sp[-1] == 'CE') or (sp[-1] == 'PE')):
                      if(float(sp[-2]) == float(strike)):
                          if(is_CE == True):
                              if(sp[-1] == 'CE'):
                                  return i
                          else:
                              if(sp[-1] == 'PE'):
                                  return i */
        }
      }]);

      return AliceblueService;
    }();

    AliceblueService.ɵfac = function AliceblueService_Factory(t) {
      return new (t || AliceblueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]));
    };

    AliceblueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AliceblueService,
      factory: AliceblueService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AliceblueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]
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
    AppConstants.USDINR_FUT_MONTH = new Date().toLocaleString('default', {
      month: 'short'
    }).toUpperCase().substring(0, 3); // 'JUL';

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
      '21AUG': new Date(2021, 7, 26),
      '21SEP': new Date(2021, 8, 30),
      '21OCT': new Date(2021, 9, 28),
      '21NOV': new Date(2021, 10, 25),
      '21DEC': new Date(2021, 11, 30)
    };
    AppConstants.monthlyExpiryDatesUSDINR = {
      '21JAN': new Date(2021, 0, 27),
      '21FEB': new Date(2021, 1, 24),
      '21MAR': new Date(2021, 2, 26),
      '21APR': new Date(2021, 3, 28),
      '21MAY': new Date(2021, 4, 27),
      '21JUN': new Date(2021, 5, 25),
      '21JUL': new Date(2021, 6, 28),
      '21AUG': new Date(2021, 7, 27),
      '21SEP': new Date(2021, 8, 28),
      '21OCT': new Date(2021, 9, 27),
      '21NOV': new Date(2021, 10, 26),
      '21DEC': new Date(2021, 11, 17)
    };
    AppConstants.dummyResPos = '{"s":"ok","netPositions":[{"crossCurrency":"N","qty":16,"realized_profit":0,"id":"NSE:JPASSOCIAT-EQ-CNC","unrealized_profit":0.32,"buyQty":16,"sellAvg":0,"sellQty":0,"buyAvg":4.78,"symbol":"NSE:JPASSOCIAT-EQ","fyToken":"101000000011460","slNo":0,"avgPrice":4.78,"segment":"E","dummy":" ","rbiRefRate":1,"side":1,"netQty":16,"pl":0.32,"productType":"CNC","netAvg":4.78,"qtyMulti_com":1},{"crossCurrency":"N","qty":16,"realized_profit":0,"id":"NSE:JPASSOCIAT-EQ-CNC","unrealized_profit":0.32,"buyQty":16,"sellAvg":0,"sellQty":0,"buyAvg":4.78,"symbol":"NSE:JPASSOCIAT-EQ","fyToken":"101000000011460","slNo":0,"avgPrice":4.78,"segment":"E","dummy":" ","rbiRefRate":1,"side":1,"netQty":16,"pl":0.32,"productType":"CNC","netAvg":4.78,"qtyMulti_com":1}],"message":""}';
    AppConstants.dummyResOrd = '{"s":"ok","message":"","orderBook":[{"status":5,"symbol":"NSE:TCSEQ","qty":1,"orderNumStatus":"119050790482:5","dqQtyRem":5,"orderDateTime":"07-May-2019 15:18:04","orderValidity":"IOC","fyToken":"101000000011536","slNo":1,"message":"RMS:119050790482:Not allowed to trade in NSE EQ","segment":"E","id":"119050790482","stopPrice":0,"exchOrdId":0,"remainingQuantity":1,"filledQty":0,"limitPrice":2155,"offlineOrder":"false","instrument":"EQUITY","productType":"CNC","type":1,"side":1,"discloseQty":5,"tradedPrice":0}]}';
    /***/
  },

  /***/
  "./src/app/common/fyers.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/common/fyers.service.ts ***!
    \*****************************************/

  /*! exports provided: FyersService */

  /***/
  function srcAppCommonFyersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FyersService", function () {
      return FyersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _application_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // const fyers = require('fyers-api');
    // import * as fyers from 'fyers-api';


    var FyersService = /*#__PURE__*/function () {
      function FyersService(http) {
        _classCallCheck(this, FyersService);

        this.http = http;
        this.baseUrl = 'https://api.fyers.in/api/v1/';
        this.dataUrl = 'https://data.fyers.in/data-api/v1/';
        this.testUrl = 'https://jsonplaceholder.typicode.com/posts';
      }

      _createClass(FyersService, [{
        key: "auth",
        value: function auth() {
          /* let reqBody = { 'app_id': AppConstants.fyersAppId, 'secret_key':  AppConstants.fyersSecretId };
          return fyers.auth(reqBody); */
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              /* Authorization: auth, */
              'Content-Type': 'application/json'
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + 'auth';
          var body = {
            'app_id': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].fyersAppId,
            'secret_key': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].fyersSecretId
          };
          return this.http.post(url, body, httpOptions);
        }
      }, {
        key: "getTokenUrl",
        value: function getTokenUrl(auth_code, appId) {
          /* return fyers.generateToken(); */
          return this.baseUrl + 'genrateToken' + '?authorization_code=' + auth_code + '&appId=' + appId;
        }
      }, {
        key: "getFunds",
        value: function getFunds(access_token) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: access_token,
              'Content-Type': 'application/json'
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + 'funds';
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "getPositions",
        value: function getPositions(access_token) {
          /* return from(
            [this.convertToJson(AppConstants.dummyResPos.replace('\ufeff', ''))]
          ); */

          /* return from(
            [JSON.parse(AppConstants.dummyResPos)]
          ); */
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: access_token,
              'Content-Type': 'application/json'
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + 'positions';
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "getOrders",
        value: function getOrders(access_token) {
          /* return from(
            [JSON.parse(AppConstants.dummyResOrd)]
          ); */
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: access_token,
              'Content-Type': 'application/json'
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + 'orders';
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "place_order",
        value: function place_order(access_token, body) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: access_token,
              'Content-Type': 'application/json'
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + 'orders';
          return this.http.post(url, body, httpOptions);
        }
      }]);

      return FyersService;
    }();

    FyersService.ɵfac = function FyersService_Factory(t) {
      return new (t || FyersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    FyersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FyersService,
      factory: FyersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FyersService, [{
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
  "./src/app/common/map.service.ts":
  /*!***************************************!*\
    !*** ./src/app/common/map.service.ts ***!
    \***************************************/

  /*! exports provided: MapService */

  /***/
  function srcAppCommonMapServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapService", function () {
      return MapService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MapService = /*#__PURE__*/function () {
      function MapService() {
        _classCallCheck(this, MapService);

        this.ltpMap = new Map();
        this.atpMap = new Map();
        this.volumeMap = new Map();
        this.oiMap = new Map();
        this.chgoiMap = new Map();
        this.intradayData = new Array();
      }

      _createClass(MapService, [{
        key: "getLtp",
        value: function getLtp(strike) {
          return this.ltpMap.get(strike);
        }
      }, {
        key: "setLtp",
        value: function setLtp(strike, val) {
          this.ltpMap.set(strike, val);
        }
      }, {
        key: "getAtp",
        value: function getAtp(strike) {
          return this.atpMap.get(strike);
        }
      }, {
        key: "setAtp",
        value: function setAtp(strike, val) {
          this.atpMap.set(strike, val);
        }
      }, {
        key: "getVolume",
        value: function getVolume(strike) {
          return this.volumeMap.get(strike);
        }
      }, {
        key: "setVolume",
        value: function setVolume(strike, val) {
          this.volumeMap.set(strike, val);
        }
      }, {
        key: "getOI",
        value: function getOI(strike) {
          return this.oiMap.get(strike);
        }
      }, {
        key: "setOI",
        value: function setOI(strike, val) {
          this.oiMap.set(strike, val);
        }
      }, {
        key: "getChgOI",
        value: function getChgOI(strike) {
          return this.chgoiMap.get(strike);
        }
      }, {
        key: "setChgOI",
        value: function setChgOI(strike, val) {
          this.chgoiMap.set(strike, val);
        }
      }, {
        key: "getIntradayData",
        value: function getIntradayData(period) {
          return this.intradayData.slice(Math.max(this.intradayData.length - period, 0));
        }
      }, {
        key: "setIntradayData",
        value: function setIntradayData() {}
      }]);

      return MapService;
    }();

    MapService.ɵfac = function MapService_Factory(t) {
      return new (t || MapService)();
    };

    MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MapService,
      factory: MapService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/models.ts":
  /*!**********************************!*\
    !*** ./src/app/common/models.ts ***!
    \**********************************/

  /*! exports provided: IntradayData, Position, Order, PlaceOrder, AliceblueInstrument, Instrument, AliceMarketData, AliceBlueLiveFeedType, AliceBlueWsFrameMode, PositionTypeForPayOff */

  /***/
  function srcAppCommonModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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
  "./src/app/common/websocket.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/common/websocket.service.ts ***!
    \*********************************************/

  /*! exports provided: WebsocketService */

  /***/
  function srcAppCommonWebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
      return WebsocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _application_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models */
    "./src/app/common/models.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./aliceblue-parser.service */
    "./src/app/common/aliceblue-parser.service.ts");

    var WebsocketService = /*#__PURE__*/function () {
      function WebsocketService(aliceblueParserService) {
        _classCallCheck(this, WebsocketService);

        this.aliceblueParserService = aliceblueParserService;
        this.websocketEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.baseUrl = 'https://ant.aliceblueonline.com';
        this.socket_endpoint = 'wss://ant.aliceblueonline.com/hydrasocket/v2/websocket?access_token=';
      }

      _createClass(WebsocketService, [{
        key: "isSocketConnected",
        value: function isSocketConnected() {
          if (this.websocket && this.websocket.OPEN === 1) {
            return true;
          }

          return false;
        }
      }, {
        key: "connect",
        value: function connect(access_token) {
          var _this29 = this;

          this.access_token = access_token;
          this.websocket = new WebSocket(this.socket_endpoint + access_token);
          this.websocket.binaryType = 'arraybuffer';

          this.websocket.onopen = function () {
            _this29.handleOnOpen(event);
          };

          this.websocket.onmessage = function (messageEvent) {
            _this29.handleOnMessage(messageEvent);
          };

          this.websocket.onerror = function (event) {
            _this29.handleOnError(event);
          };

          this.websocket.onclose = function (event) {
            _this29.handleOnClose(event);
          };
        }
      }, {
        key: "handleOnOpen",
        value: function handleOnOpen(event) {
          console.log('Opened Web Socket connection');

          if (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].SocketMode === 'aliceblue') {
            this.sendHeartbeat();
            this.sendInitialSubscription();
            this.websocketEvent$.next('connected');
          }
        }
      }, {
        key: "sendHeartbeat",
        value: function sendHeartbeat() {
          var _this30 = this;

          this.heartbeatInterval = setInterval(function () {
            // console.log('sending heartbeat');
            var message = JSON.stringify({
              "a": "h",
              "v": [],
              "m": ""
            });

            _this30.sendMessage(message);
          }, 5000);
        }
      }, {
        key: "sendInitialSubscription",
        value: function sendInitialSubscription() {
          console.log('sending initial subscription');
          var usdinr_fut_code = _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].USDINRFUTCodes[_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].USDINR_FUT_MONTH];
          var message = JSON.stringify({
            'a': 'subscribe',
            'v': [[1, 26000], [1, 26009], [3, 1], [3, usdinr_fut_code]
            /* , [2, 95734], [2, 95733] */
            ],
            'm': _models__WEBPACK_IMPORTED_MODULE_2__["AliceBlueLiveFeedType"].MARKET_DATA
          }); // 26000 26009 for nf and bnf spot
          // 1 is usdinr spot

          console.log('usdinr_fut_code', usdinr_fut_code);
          this.sendMessage(message);
        }
      }, {
        key: "handleOnMessage",
        value: function handleOnMessage(messageEvent) {
          // console.log('handleOnMessage', messageEvent);
          if (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].SocketMode === 'aliceblue') {
            this.aliceblueParserService.handleSocketMessage(messageEvent.data);
          }
        }
      }, {
        key: "handleOnError",
        value: function handleOnError(event) {
          console.log('Error in WS connection', event);
        }
      }, {
        key: "handleOnClose",
        value: function handleOnClose(event) {
          var _this31 = this;

          console.log('Closed WS connection', event);
          clearInterval(this.heartbeatInterval);
          this.websocket = null;
          setTimeout(function () {
            console.log('Reconnecting websocket');

            _this31.connect(_this31.access_token);
          }, 2000);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message) {
          if (this.websocket && this.websocket.OPEN === 1) {
            // console.log('Sending message over websocket: ' + message);
            this.websocket.send(message);
          } else {
            console.log('Cannot send the message. Socket is not yet opened or it has been closed - ', message);
          }
        }
      }]);

      return WebsocketService;
    }();

    WebsocketService.ɵfac = function WebsocketService_Factory(t) {
      return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_4__["AliceblueParserService"]));
    };

    WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebsocketService,
      factory: WebsocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_4__["AliceblueParserService"]
        }];
      }, null);
    })();
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
    /*! /Users/aniket/Desktop/general/trades-a-19sep/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map