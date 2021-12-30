function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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


    var _common_angel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./common/angel.service */
    "./src/app/common/angel.service.ts");
    /* harmony import */


    var _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./common/angelwebsocket.service */
    "./src/app/common/angelwebsocket.service.ts");
    /* harmony import */


    var _common_holdings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./common/holdings.service */
    "./src/app/common/holdings.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./chart/chart.component */
    "./src/app/chart/chart.component.ts");

    function AppComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Websocket is connected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Websocket is not connected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "text-danger": a0,
        "text-success": a1
      };
    };

    function AppComponent_tbody_102_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var pos_r11 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.includePosPnLInSum1(pos_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var pos_r11 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.includePosPnLInSum2(pos_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var pos_r11 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.includePosPnLInSum3(pos_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var pos_r11 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.includePosPnLInSum4(pos_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 20);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tbody_102_tr_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var pos_r11 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.exitPosition(pos_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pos_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r11.scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r11.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r11.netQty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r11.buyAvg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r11.sellAvg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getPosLTP(pos_r11));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, pos_r11.pnl < 0, pos_r11.pnl > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getPosPnL(pos_r11));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "pos-qty-", pos_r11.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.disable_order_buttons);
      }
    }

    function AppComponent_tbody_102_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tbody_102_tr_1_Template, 29, 13, "tr", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.positions);
      }
    }

    function AppComponent_tbody_135_tr_1_Template(rf, ctx) {
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
        var ord_r20 = ctx.$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.getOrderStatus(ord_r20.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.side === 1 ? "B" : "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.qty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.getOrderType(ord_r20.type));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.limit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.stop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.tradedPrice);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.orderDateTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ord_r20.message);
      }
    }

    function AppComponent_tbody_135_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tbody_135_tr_1_Template, 21, 10, "tr", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.orders);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "stockHolding": a0
      };
    };

    var _c2 = function _c2(a0, a1, a2) {
      return {
        "green": a0,
        "red": a1,
        "bold-higher": a2
      };
    };

    function AppComponent_tr_169_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var h_r22 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx_r5.isStockHolding(h_r22.scrip)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.ltp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](17, _c2, h_r22.oned > 0, h_r22.oned < 0, h_r22.oned > 2 || h_r22.oned < 0 - 2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.oned);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](21, _c2, h_r22.onew > 0, h_r22.onew < 0, h_r22.onew > 5 || h_r22.onew < 0 - 5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.onew);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](25, _c2, h_r22.onem > 0, h_r22.onem < 0, h_r22.onem > 7 || h_r22.onem < 0 - 7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.onem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](29, _c2, h_r22.threem > 0, h_r22.threem < 0, h_r22.threem > 10 || h_r22.threem < 0 - 10));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.threem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](33, _c2, h_r22.fiftytwow > 0, h_r22.fiftytwow < 0, h_r22.fiftytwow > 10 || h_r22.fiftytwow < 0 - 10));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.fiftytwow);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](37, _c2, h_r22.avgp > 0, h_r22.avgp < 0, h_r22.avgp > 5 || h_r22.avgp < 0 - 5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r22.avgp);
      }
    }

    function AppComponent_div_174_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sug_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", sug_r26.strikeCE, "CE ", sug_r26.ltpCE, " , ", sug_r26.strikePE, "PE ", sug_r26.ltpPE, " ");
      }
    }

    function AppComponent_div_174_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sug_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", sug_r28.action, ": ", sug_r28.strike, " ", sug_r28.ltp, " ");
      }
    }

    function AppComponent_div_174_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Strategy PnL: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_174_span_5_Template, 2, 4, "span", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_174_span_6_Template, 2, 3, "span", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Combined SL: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_174_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.combined_SL = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r6.getStrategyPnL() < 0, ctx_r6.getStrategyPnL() > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r6.getStrategyPnL(), " , ", ctx_r6.strategyPointsProfit, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.suggestions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.adjust_sugg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Premium: ", ctx_r6.combined_premium, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.combined_SL);
      }
    }

    function AppComponent_tr_254_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oc_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r34.getQtyOfStrikeInStrategy(oc_r32.strike + "CE"), " (", ctx_r34.getCostOfStrikeInStrategy(oc_r32.strike + "CE"), ") ");
      }
    }

    function AppComponent_tr_254_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.getSpotValue(), " ");
      }
    }

    function AppComponent_tr_254_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oc_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r36.getQtyOfStrikeInStrategy(oc_r32.strike + "PE"), " (", ctx_r36.getCostOfStrikeInStrategy(oc_r32.strike + "PE"), ") ");
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "ocStrikeStrategyCE": a0
      };
    };

    var _c4 = function _c4(a0, a1) {
      return {
        "table-warning": a0,
        "oc-strike": a1
      };
    };

    var _c5 = function _c5(a0) {
      return {
        "ocStrikeStrategyPE": a0
      };
    };

    function AppComponent_tr_254_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_254_Template_input_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.includeInStrangleFn(oc_r32.symbol + "CE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_254_Template_input_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.includeInDebitSpreadFn(oc_r32.symbol + "CE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_254_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.addToStrategyBuilder(oc_r32, "CE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_254_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.addToChart(oc_r32, "CE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_tr_254_div_17_Template, 2, 2, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_tr_254_div_20_Template, 2, 1, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_tr_254_div_23_Template, 2, 2, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_254_Template_input_change_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.includeInStrangleFn(oc_r32.symbol + "PE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_tr_254_Template_input_change_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.includeInDebitSpreadFn(oc_r32.symbol + "PE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_254_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.addToStrategyBuilder(oc_r32, "PE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "SB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_254_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var oc_r32 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.addToChart(oc_r32, "PE");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oc_r32 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getVolume(oc_r32.symbol + "CE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getDelta(oc_r32.symbol, oc_r32.strike, "CE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.getLtp(oc_r32.symbol + "CE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c4, ctx_r7.isSpotStrike(oc_r32.strike), !ctx_r7.isSpotStrike(oc_r32.strike)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", oc_r32.strike, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isSpotStrike(oc_r32.strike));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.getLtp(oc_r32.symbol + "PE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getDelta(oc_r32.symbol, oc_r32.strike, "PE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getVolume(oc_r32.symbol + "PE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));
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
      function AppComponent(route, appService, mapService, websocketService, chartService, angelService, angelWS, holdingsService
      /* private cdr: ChangeDetectorRef */
      ) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.route = route;
        this.appService = appService;
        this.mapService = mapService;
        this.websocketService = websocketService;
        this.chartService = chartService;
        this.angelService = angelService;
        this.angelWS = angelWS;
        this.holdingsService = holdingsService;
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
        this.ws_vendor = 'aliceblue';
        this.mean = 0;
        this.variance = 1;
        this.ws_access_token = 'A8E8eGyqMug7VOXnvx2dPjf9pWbf8KKgfn9RQy9EVyA.KqVXmuGCRCQ2wEf95iFEtVjQxs0_LoL9FyZ86bPJlFg';
        this.strategyPnL = 0;
        this.strategyPointsProfit = 0;
        this.suggestions = [];
        this.adjust_sugg = [];
        this.portfolio_return = 0;
        this.holdings = [];
        this.total_inv = 0;
        this.current_val = 0;
        this.combined_SL = 0;
        this.combined_premium = 0;
        this.qty_default = 175;
        this.route.queryParams.subscribe(function (params) {
          console.log('params', params);

          if (params && params.access_token) {
            _this.access_token = params.access_token; // console.log('access_token', this.access_token);

            /*  this.getFunds();
             this.getPositions();
             this.getOrders(); */
            // this.getPayoff();
            // this.appService.getMastersContract();
            // this.angelLogin();
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

          // Setting dummy values for indices for Payoff to work even if websocket is not working
          this.mapService.setLtp('NIFTY50', 18000);
          this.mapService.setLtp('BANKNIFTY', 40000);

          if (window.location.href.includes('localhost')) {
            _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].isProduction = false;
          }

          console.log(window.location.href, _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].isProduction);
          var refresh_interval = setInterval(function () {
            _this2.updateSpotStrike();
          }, 5000);
          var autoSuggest_interval = setInterval(function () {// this.autoSuggest();
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
        key: "simulateOptionChain",
        value: function simulateOptionChain() {}
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

          var iv = this.appService.calculateIV(this.oc_instru, spot, strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].INTEREST_RATE, date_expiry, typet0, mkt_price);
          return iv;
        }
      }, {
        key: "getDelta",
        value: function getDelta(symbol, strike, type) {
          var ltp = this.getLtp(symbol + type);
          var expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
          var delta = this.appService.getDelta(this.oc_instru, strike, type, expiry, ltp);
          return delta;
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
        key: "establishWSVendor",
        value: function establishWSVendor() {
          _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].SocketMode = this.ws_vendor;
          this.appService.getMastersContract(this.ws_access_token);
        }
      }, {
        key: "isSocketConnected",
        value: function isSocketConnected() {
          return this.appService.isSocketConnected();
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

                _this11.appService.playAudio('success');
              }
            }, function (error) {
              console.log('app exitPosition error', error);

              _this11.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);

              _this11.refreshAll();

              _this11.appService.playAudio('error');
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
        key: "addToChart",
        value: function addToChart(oc, type) {
          this.appService.chartEvent$.next({
            symbol: oc.symbol + type,
            type: type
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


                  _this12.appService.playAudio('success');
                }
              }, function (error) {
                console.log('app ocOrder error', error);

                _this12.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);

                _this12.refreshAll();

                _this12.appService.playAudio('error');
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
                this.appService.playAudio('warn');
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
        key: "sortTableColumn",
        value: function sortTableColumn(colName) {
          console.log('sort');
          this.holdings.sort(function (a, b) {
            // console.log(a['scrip'], b['scrip']);
            if (a['scrip'] === 'NIFTY 50') {
              return -1;
            }

            if (b['scrip'] === 'NIFTY 50') {
              return 1;
            }

            return a[colName] > b[colName] ? -1 : a[colName] < b[colName] ? 1 : 0; // 1 means b before a
            // -1 means a before b
          });
        }
      }, {
        key: "fetchStocks",
        value: function fetchStocks() {
          this.holdingsService.fetchStocksData();
        }
      }, {
        key: "loadHoldings",
        value: function loadHoldings() {
          var r = this.holdingsService.loadHoldings();
          this.portfolio_return = r['portfolio_return'];
          this.holdings = r['holdings'];
          this.total_inv = r['total_inv'];
          this.current_val = r['current_val'];
          console.log('stocks:', this.holdings);
        }
      }, {
        key: "isStockHolding",
        value: function isStockHolding(scrip) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[scrip].avgp) {
            return true;
          } else {
            return false;
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

          if (!_common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].isSimulatedStrategy) {
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
          _common_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].SocketMode = this.ws_vendor;
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
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chart_chart_service__WEBPACK_IMPORTED_MODULE_7__["ChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_angel_service__WEBPACK_IMPORTED_MODULE_8__["AngelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_9__["AngelWebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_holdings_service__WEBPACK_IMPORTED_MODULE_10__["HoldingsService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 270,
      vars: 61,
      consts: [[1, "main-content"], [1, "top-content", "d-flex"], [1, "mr-auto"], [1, "confirmation-check", "form-check-inline", "mt-0"], ["type", "radio", "value", "aliceblue", "id", "aliceblue_ws", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "aliceblue_ws", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "mr-4", "mt-2"], [1, ""], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "width", "200px"], [2, "width", "50%"], [1, "ml-1"], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "width", "220px"], [2, "margin-top", "0.5rem"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "refresh-btn", 3, "click"], [1, "flex-container"], [1, "positions_div"], [1, "table-title"], [1, "font-weight-bold"], [1, "pl-4", "pr-4"], [1, "positions-sum", "font-weight-bold"], [3, "ngClass"], [1, "pl-2", "pr-2"], [1, "ml-auto", "float-right"], [1, "form-check-inline"], ["for", "hide-positions", 1, "form-check-label", "mr-1"], ["type", "checkbox", "value", "", "id", "hide-positions", 1, "form-check-input", "mr-2", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "refresh-btn", 3, "disabled", "click"], [1, "table", "table-sm", "table-bordered", "shadow", "text-center"], [1, "thead-light"], ["scope", "col"], [1, "orderbook_div"], [1, "d-flex"], [1, "form-check-inline", "ml-auto"], ["for", "hide-orders", 1, "form-check-label", "mr-1"], ["type", "checkbox", "value", "", "id", "hide-orders", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check", "text-center", 2, "font-size", "18px"], ["type", "checkbox", "value", "", "id", "disable-order-buttons", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "disable-order-buttons", 1, "form-check-label"], ["id", "accordionHoldings", 1, "accordion", "mb-2"], [1, "card"], ["type", "button", "data-toggle", "collapse", "data-target", "#holdingsSection", "aria-expanded", "true", "aria-controls", "holdingsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "holdingsSection", "aria-labelledby", "headingOne", "data-parent", "#accordionHoldings", 1, "collapse", "show", "p-2"], [1, "table", "table-sm", "table-bordered", "shadow", "mb-0", "text-center"], ["scope", "col", 1, "oc-col"], ["scope", "col", 1, "oc-col", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "algo-suggestions-main shadow-sm p-3 mb-5 bg-white", 4, "ngIf"], [1, "option-chain"], [1, "new-input", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["value", "NIFTY"], ["value", "BANKNIFTY"], ["value", "USDINR"], ["id", "strategy-qty", "type", "number", "placeholder", "Qty Default", 1, "ml-2", "form-control", "form-control-sm", 2, "display", "inline", "width", "70px", 3, "ngModel", "ngModelChange"], [2, "display", "inline-block", "margin-left", "20px", "margin-right", "10px"], [1, "input-group", "input-group-sm", "new-input-prepend-expiry"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "confirmation-check", "form-check-inline"], ["type", "checkbox", "value", "", "id", "is-monthly-expiry", 1, "form-check-input", 3, "ngModel", "disabled", "ngModelChange"], ["for", "is-monthly-expiry", 1, "form-check-label"], [2, "display", "inline-block", "margin-left", "20px", "margin-right", "10px", "margin-bottom", "20px"], [1, "input-group", "input-group-sm", "new-input-prepend-oc"], ["type", "number", "min", "0", "step", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "50", "step", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "ml-1", 3, "click"], [1, "text-center"], ["colspan", "4", "scope", "col"], ["scope", "col", 1, "oc-col-actions"], ["scope", "col", 1, "text-center"], ["type", "radio", "value", "INTRADAY", "id", "oc-order-type-intraday", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "oc-order-type-intraday", 1, "form-check-label"], ["type", "radio", "value", "MARGIN", "id", "oc-order-type-margin", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "oc-order-type-margin", 1, "form-check-label"], [1, "form-check-inline", "posCheckbox"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "change"], [1, "font-weight-bold", 3, "ngClass"], [1, "positions-row-actions"], ["type", "number", "placeholder", "Qty", 1, "pos-input", "form-control", "form-control-sm", 3, "id"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "algo-suggestions-main", "shadow-sm", "p-3", "mb-5", "bg-white"], [1, "mr-2"], ["class", "suggest-positions", 4, "ngFor", "ngForOf"], [1, "ml-4", "mr-3"], ["type", "number", "placeholder", "Combined SL", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "70px", "display", "inline", 3, "ngModel", "ngModelChange"], [1, "suggest-positions"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mr-1", 3, "click"], [1, "text-info", "font-weight-bold", 3, "ngClass"], ["class", "ocStrategyStrikeQty", 4, "ngIf"], [1, "font-weight-bold", "text-center", 3, "ngClass"], ["class", "ocStrategyStrikeQty oc-strike-spot", 4, "ngIf"], [1, "ocStrategyStrikeQty"], [1, "ocStrategyStrikeQty", "oc-strike-spot"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.ws_vendor = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Aliceblue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
            return ctx.establishWSVendor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Connect WS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_button_12_Template, 2, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_span_14_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_span_15_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nifty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "BNF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_43_listener() {
            return ctx.refreshAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Refresh All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Positions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " P&L1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " P&L2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " P&L3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " P&L4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_80_listener($event) {
            return ctx.hide_positions = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_81_listener() {
            return ctx.exitSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Exit selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "table", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "thead", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "NetQty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "BuyAvg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "SellAvg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "CMP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "PnL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, AppComponent_tbody_102_Template, 2, 1, "tbody", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_111_listener($event) {
            return ctx.hide_orders = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "table", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "thead", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "B/S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Qty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, AppComponent_tbody_135_Template, 2, 1, "tbody", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_138_listener($event) {
            return ctx.disable_order_buttons = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Disable order buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Stocks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "table", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "thead", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Scrip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "LTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_156_listener() {
            return ctx.sortTableColumn("oned");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "1D%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_158_listener() {
            return ctx.sortTableColumn("onew");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "1W%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_160_listener() {
            return ctx.sortTableColumn("onem");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "1M%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_162_listener() {
            return ctx.sortTableColumn("threem");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "3M%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_164_listener() {
            return ctx.sortTableColumn("fiftytwow");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "52W H%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_th_click_166_listener() {
            return ctx.sortTableColumn("avgp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Avg%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, AppComponent_tr_169_Template, 17, 41, "tr", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_170_listener() {
            return ctx.fetchStocks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Fetch Stocks data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_172_listener() {
            return ctx.loadHoldings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Load");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, AppComponent_div_174_Template, 12, 10, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "app-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_178_listener($event) {
            return ctx.oc_instru = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "NIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "BANKNIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "USDINR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_185_listener($event) {
            return ctx.qty_default = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Expiry: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_192_listener($event) {
            return ctx.oc_year = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_197_listener($event) {
            return ctx.oc_month = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_202_listener($event) {
            return ctx.oc_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_204_listener($event) {
            return ctx.is_monthly_expiry = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Is Monthly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Strike range: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Higher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_213_listener($event) {
            return ctx.oc_range_higher = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Lower");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_218_listener($event) {
            return ctx.oc_range_lower = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Multiple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_223_listener($event) {
            return ctx.oc_range_multiple = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_224_listener() {
            return ctx.updateOCRange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_226_listener() {
            return ctx.clearOC();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "table", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "thead", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "tr", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "th", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Calls");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Puts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Delta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "LTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "th", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Strike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "LTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Delta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "th", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](254, AppComponent_tr_254_Template, 38, 38, "tr", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_256_listener($event) {
            return ctx.oc_product_type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Intraday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_260_listener($event) {
            return ctx.oc_product_type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ws_vendor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMastersStatus());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.access_token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSocketConnected());

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](49, _c0, ctx.getPositionsPnLSum(1) < 0, ctx.getPositionsPnLSum(1) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(1), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](52, _c0, ctx.getPositionsPnLSum(2) < 0, ctx.getPositionsPnLSum(2) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(2), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](55, _c0, ctx.getPositionsPnLSum(3) < 0, ctx.getPositionsPnLSum(3) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(3), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](58, _c0, ctx.getPositionsPnLSum(4) < 0, ctx.getPositionsPnLSum(4) > 0));

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Portfolio return: ", ctx.portfolio_return, "% Total inv.: ", ctx.total_inv, " Current val.: ", ctx.current_val, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.holdings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

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
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__["ChartComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%], input[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.stockHolding[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #ff6347;\n}\n\n.bold-higher[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px !important;\n}\n\n.algo-suggestions-main[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n\n.suggest-positions[_ngcontent-%COMP%] {\n  border: 1px solid #b5b5b5;\n  padding: 5px;\n  border-radius: 5px;\n  margin-right: 15px;\n  font-weight: bold;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 2px solid #dee2e6;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.posCheckbox[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.ocStrategyStrikeQty[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: black;\n}\n\n.oc-strike[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  width: 60px;\n}\n\n.oc-strike-spot[_ngcontent-%COMP%] {\n  width: 60px;\n  margin: 0 auto;\n}\n\n.oc-col-actions[_ngcontent-%COMP%] {\n  width: 19rem;\n}\n\n.oc-col[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\n.lastRequestStatus[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #f8f9fa;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n}\n\n.positions_div[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.orderbook_div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.pos-input[_ngcontent-%COMP%] {\n  width: 60px;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.positions-row-actions[_ngcontent-%COMP%] {\n  \n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  \n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.table-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.new-input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 120px;\n  display: inline-block;\n}\n\n.new-input-prepend[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 150px;\n  display: inline-flex;\n}\n\n.new-input-prepend-expiry[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 100px;\n  display: inline-flex;\n}\n\n.new-input-prepend-oc[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 130px;\n  display: inline-flex;\n}\n\n.new-input-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.confirmation-check[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.new-order-div[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ocStrikeStrategyCE[_ngcontent-%COMP%] {\n  background-color: #ccffc9 !important;\n}\n\n.ocStrikeStrategyPE[_ngcontent-%COMP%] {\n  background-color: #ffdede !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrZXQvRGVza3RvcC9nZW5lcmFsL3RyYWRlcy1hLTE5c2VwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLE9BQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FET0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSkY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBQUE7QUNKRjs7QURPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3QsIGlucHV0LCAuaW5wdXQtZ3JvdXAtdGV4dCwgc2VsZWN0LCBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi5zdG9ja0hvbGRpbmcge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6ICNmZjYzNDc7XHJcbn1cclxuXHJcbi5ib2xkLWhpZ2hlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGdvLXN1Z2dlc3Rpb25zLW1haW57XHJcbiAgcG9zaXRpb246IHN0aWNreTsgXHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnN1Z2dlc3QtcG9zaXRpb25zIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxufVxyXG5cclxuLnBvc0NoZWNrYm94IHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9jU3RyYXRlZ3lTdHJpa2VRdHkge1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9jLXN0cmlrZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLm9jLXN0cmlrZS1zcG90IHtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm9jLWNvbC1hY3Rpb25zIHtcclxuICB3aWR0aDogMTlyZW07XHJcbn1cclxuXHJcbi5vYy1jb2wge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4ubGFzdFJlcXVlc3RTdGF0dXMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbnNfZGl2IHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm9yZGVyYm9va19kaXYge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wb3MtaW5wdXQge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnBvc2l0aW9ucy1yb3ctYWN0aW9ucyB7XHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG59XHJcblxyXG4ucmVmcmVzaC1idG4ge1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxNXB4OyAqL1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRhYmxlLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5uZXctaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubmV3LWlucHV0LXByZXBlbmQge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5uZXctaW5wdXQtcHJlcGVuZC1leHBpcnkge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IFxyXG59XHJcblxyXG4ubmV3LWlucHV0LXByZXBlbmQtb2Mge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5uZXctaW5wdXQtYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tY2hlY2sge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbnMtc3VtIHtcclxuICBcclxufVxyXG5cclxuLm5ldy1vcmRlci1kaXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vY1N0cmlrZVN0cmF0ZWd5Q0Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ZmYzkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9jU3RyaWtlU3RyYXRlZ3lQRSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGVkZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfVxyXG5cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQtc21hbGwge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2OHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtMjRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgfVxyXG5cclxuICBhLFxyXG4gIGE6dmlzaXRlZCxcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgIGNvbG9yOiAjYzJjM2M0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgIHRleHQtaW5kZW50OiA0cHg7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbmsge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjMjQyOTJlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0xNjBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIHdpZHRoOiAxOTIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0gKi8iLCI6aG9zdCwgaW5wdXQsIC5pbnB1dC1ncm91cC10ZXh0LCBzZWxlY3QsIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG4uc3RvY2tIb2xkaW5nIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZmY2MzQ3O1xufVxuXG4uYm9sZC1oaWdoZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGdvLXN1Z2dlc3Rpb25zLW1haW4ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnN1Z2dlc3QtcG9zaXRpb25zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I1YjViNTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuLnBvc0NoZWNrYm94IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5vY1N0cmF0ZWd5U3RyaWtlUXR5IHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9jLXN0cmlrZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4ub2Mtc3RyaWtlLXNwb3Qge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5vYy1jb2wtYWN0aW9ucyB7XG4gIHdpZHRoOiAxOXJlbTtcbn1cblxuLm9jLWNvbCB7XG4gIHdpZHRoOiA1cmVtO1xufVxuXG4ubGFzdFJlcXVlc3RTdGF0dXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBvc2l0aW9uc19kaXYge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5vcmRlcmJvb2tfZGl2IHtcbiAgZmxleDogMTtcbn1cblxuLnBvcy1pbnB1dCB7XG4gIHdpZHRoOiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucG9zaXRpb25zLXJvdy1hY3Rpb25zIHtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xufVxuXG4ucmVmcmVzaC1idG4ge1xuICAvKiBtYXJnaW4tbGVmdDogMTVweDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRhYmxlLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubmV3LWlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uZXctaW5wdXQtcHJlcGVuZCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXctaW5wdXQtcHJlcGVuZC1leHBpcnkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubmV3LWlucHV0LXByZXBlbmQtb2Mge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubmV3LWlucHV0LWJ0biB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb25maXJtYXRpb24tY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubmV3LW9yZGVyLWRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5vY1N0cmlrZVN0cmF0ZWd5Q0Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmM5ICFpbXBvcnRhbnQ7XG59XG5cbi5vY1N0cmlrZVN0cmF0ZWd5UEUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZWRlICFpbXBvcnRhbnQ7XG59XG5cbi8qIDpob3N0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc3BhY2VyIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLnRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAudG9vbGJhciBpbWcge1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiAjODg4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLTI0cHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcbiAgICAudGVybWluYWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG5cbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICAgIH1cblxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfSAqLyJdfQ== */"]
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
        }, {
          type: _common_angel_service__WEBPACK_IMPORTED_MODULE_8__["AngelService"]
        }, {
          type: _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_9__["AngelWebsocketService"]
        }, {
          type: _common_holdings_service__WEBPACK_IMPORTED_MODULE_10__["HoldingsService"]
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


    var _common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/models */
    "./src/app/common/models.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_fyers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/fyers.service */
    "./src/app/common/fyers.service.ts");
    /* harmony import */


    var _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./common/aliceblue.service */
    "./src/app/common/aliceblue.service.ts");
    /* harmony import */


    var _common_angel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./common/angel.service */
    "./src/app/common/angel.service.ts");
    /* harmony import */


    var _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./common/angelwebsocket.service */
    "./src/app/common/angelwebsocket.service.ts");
    /* harmony import */


    var _common_websocket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./common/websocket.service */
    "./src/app/common/websocket.service.ts");
    /* harmony import */


    var _common_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./common/map.service */
    "./src/app/common/map.service.ts");

    var AppService = /*#__PURE__*/function () {
      function AppService(http, fyersService, aliceblueService, angelService, angelWS, websocketService, mapService) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.fyersService = fyersService;
        this.aliceblueService = aliceblueService;
        this.angelService = angelService;
        this.angelWS = angelWS;
        this.websocketService = websocketService;
        this.mapService = mapService;
        this.requestStatusEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.payOffEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.chartEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mean = 0;
        this.variance = 1;
      }

      _createClass(AppService, [{
        key: "getMastersContract",
        value: function getMastersContract(access_token) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'aliceblue') {
            this.aliceblueService.getMastersContract(access_token);
          } else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'angel') {
            return this.angelService.getMastersContract();
          }
        }
      }, {
        key: "getDelta",
        value: function getDelta(instru, strike, type, expiry, ltp) {
          var simulate_strategy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          var simulateCurrDateObj = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
          //let expiry_date = new Date(this.oc_year, this.oc_month - 1, this.oc_date).toDateString();
          // let date_expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
          var date_expiry = new Date(expiry);

          if (instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
          } else {
            date_expiry.setHours(15, 30, 0);
          }

          var date_now = new Date();

          if (simulate_strategy) {
            date_now = simulateCurrDateObj;
          } // date_now.setDate(date_now.getDate() + 0);


          var seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var delta_t = Math.floor(hours / 24) / 365.0; // time

          var underlying = 'NIFTY50';

          if (instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
          } else if (instru === 'USDINR') {
            underlying = 'USDINR_FUT';
          }

          var spot = this.getLtp(underlying); // let mkt_price = this.getLtp(symbol + type);

          var mkt_price = ltp;
          var typet0 = null;

          if (type === 'CE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_3__["PositionTypeForPayOff"].CE;
          }

          if (type === 'PE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_3__["PositionTypeForPayOff"].PE;
          }

          var iv = this.calculateIV(instru, spot, strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].INTEREST_RATE, date_expiry, typet0, mkt_price);
          var volt = iv / 100;
          var int_rate = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].INTEREST_RATE / 100; // console.log(spot, date_expiry, mkt_price, iv);

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
        key: "getLtp",
        value: function getLtp(strike) {
          var oc_strike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          // console.log('strike', strike);
          if (strike === 'USDINR_FUT') {
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
            strike = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USDINR_FUT_MONTH + 'FUT'; // console.log('getLtp strike: ' + strike);
          }

          var ltp = this.mapService.getLtp(strike);

          if (oc_strike) {
            oc_strike.ltp = ltp;
          }

          return ltp;
        }
      }, {
        key: "calculateIV",
        value: function calculateIV(instru, spot, strike, int_rate, expiry_date, type, mkt_price) {
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
            if (this.calculateT0AtPoint(instru, spot, strike, int_rate, expiry_date, (high + low) / 2, type) > mkt_price) {
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
        value: function calculateT0AtPoint(instru, spot, strike, int_rate, expiry_date, volatility, type, add_days) {
          var t0 = 0;
          var date_expiry = new Date(expiry_date);

          if (instru === 'USDINR') {
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

            if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__["PositionTypeForPayOff"].CE) {
              t0 = spot * this.getCDF(d1) - fv_strike * this.getCDF(d2);
            }

            if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__["PositionTypeForPayOff"].PE) {
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
        key: "playAudio",
        value: function playAudio(type) {
          var relativePath = '';

          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].isProduction === false) {
            relativePath = '../';
          }

          var audio = new Audio();

          if (type === 'success') {
            audio.src = relativePath + "assets/audio/beep-25-success.mp3";
          } else if (type === 'error') {
            audio.src = relativePath + "assets/audio/beep-02.mp3";
          } else if (type === 'warn') {
            audio.src = relativePath + "assets/audio/beep-05.mp3";
          }

          audio.load();
          audio.play();
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
          } else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'angel') {
            this.angelService.sendSubscriptions(strikes);
          }
        }
      }, {
        key: "connectWebsocket",
        value: function connectWebsocket(access_token) {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'aliceblue') {
            this.aliceblueService.connectWebsocket(access_token);
          } else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'angel') {
            this.angelService.angelLogin();
          }
        }
      }, {
        key: "isSocketConnected",
        value: function isSocketConnected() {
          if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'aliceblue') {
            return this.websocketService.isSocketConnected();
          } else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SocketMode === 'angel') {
            return this.angelWS.isSocketConnected();
          }
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
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_fyers_service__WEBPACK_IMPORTED_MODULE_5__["FyersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_aliceblue_service__WEBPACK_IMPORTED_MODULE_6__["AliceblueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_angel_service__WEBPACK_IMPORTED_MODULE_7__["AngelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_8__["AngelWebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_9__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_map_service__WEBPACK_IMPORTED_MODULE_10__["MapService"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _common_fyers_service__WEBPACK_IMPORTED_MODULE_5__["FyersService"]
        }, {
          type: _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_6__["AliceblueService"]
        }, {
          type: _common_angel_service__WEBPACK_IMPORTED_MODULE_7__["AngelService"]
        }, {
          type: _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_8__["AngelWebsocketService"]
        }, {
          type: _common_websocket_service__WEBPACK_IMPORTED_MODULE_9__["WebsocketService"]
        }, {
          type: _common_map_service__WEBPACK_IMPORTED_MODULE_10__["MapService"]
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


    var _common_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/map.service */
    "./src/app/common/map.service.ts");
    /* harmony import */


    var _common_application_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/application.constant */
    "./src/app/common/application.constant.ts");
    /* harmony import */


    var _common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/models */
    "./src/app/common/models.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _common_websocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/websocket.service */
    "./src/app/common/websocket.service.ts");
    /* harmony import */


    var _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/angelwebsocket.service */
    "./src/app/common/angelwebsocket.service.ts");
    /* harmony import */


    var _chart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./chart.service */
    "./src/app/chart/chart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ChartComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var alert_r9 = ctx.$implicit;
          return alert_r9.selected = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var alert_r9 = ctx.$implicit;
          return alert_r9.instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var alert_r9 = ctx.$implicit;
          return alert_r9.scrip1 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var alert_r9 = ctx.$implicit;
          return alert_r9.scrip2 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var alert_r9 = ctx.$implicit;
          return alert_r9.expiry = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_select_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var alert_r9 = ctx.$implicit;
          return alert_r9.compare = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ">");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "<");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var alert_r9 = ctx.$implicit;
          return alert_r9.price = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var alert_r9 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", alert_r9.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", alert_r9.instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", alert_r9.scrip1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", alert_r9.scrip2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", alert_r9.expiry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", alert_r9.compare);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", alert_r9.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAlertLtp(alert_r9));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r9.status);
      }
    }

    function ChartComponent_tr_16_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var o_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r19.instru, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r19.scrip, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r19.qty, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r19.price, " ");
      }
    }

    function ChartComponent_div_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r2.lineChartData)("labels", ctx_r2.lineChartLabels)("options", ctx_r2.lineChartOptions)("colors", ctx_r2.lineChartColors)("legend", ctx_r2.lineChartLegend)("chartType", ctx_r2.lineChartType)("plugins", ctx_r2.lineChartPlugins);
      }
    }

    function ChartComponent_div_96_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_96_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.simulate_instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_96_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.simulateExpiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_96_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.simulateStartDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_96_Template_select_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.simulateTimeAdv = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_96_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.simulateTimeMins = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_div_96_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.loadSimulatedNextMins();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_div_96_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          return _r21.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Import");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 85, 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChartComponent_div_96_Template_input_change_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.uploadExpiryFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.simulate_instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.simulateExpiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.simulateStartDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.simulateTimeAdv);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.simulateTimeMins);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date Time: ", ctx_r3.simulateCurrDateTimeString, "");
      }
    }

    function ChartComponent_tr_113_td_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_113_td_1_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var pos_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return pos_r31.selected = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_113_td_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var pos_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return pos_r31.selectedActual = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pos_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r31.selected)("disabled", pos_r31.exit !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r31.selectedActual)("disabled", pos_r31.exit !== 0);
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

    function ChartComponent_tr_113_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartComponent_tr_113_td_1_Template, 4, 4, "td", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_113_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var pos_r31 = ctx.$implicit;
          return pos_r31.qty = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_113_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var pos_r31 = ctx.$implicit;
          return pos_r31.scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_113_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var pos_r31 = ctx.$implicit;
          return pos_r31.expiry = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_113_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var pos_r31 = ctx.$implicit;
          return pos_r31.entry = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_113_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var pos_r31 = ctx.$implicit;
          return pos_r31.exit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_tr_113_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var pos_r31 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.splitPosition(pos_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_tr_113_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var pos_r31 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.deletePosition(pos_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pos_r31 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, pos_r31.exit !== 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.payoff_overlay);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx_r4.stepValue)("ngModel", pos_r31.qty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r31.scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r31.expiry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r31.entry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", pos_r31.exit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getLTP_strike(pos_r31), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c1, pos_r31.pnl < 0, pos_r31.pnl > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getPnL(pos_r31), " ");
      }
    }

    function ChartComponent_div_174_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r6.finLineChartDataInstru)("labels", ctx_r6.finLineChartLabelsInstru)("options", ctx_r6.finLineChartOptions)("colors", ctx_r6.finLineChartColors)("legend", ctx_r6.lineChartLegend)("chartType", ctx_r6.lineChartType)("plugins", ctx_r6.lineChartPlugins);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r6.finLineChartData1)("labels", ctx_r6.finLineChartLabels1)("options", ctx_r6.finLineChartOptions)("colors", ctx_r6.finLineChartColors)("legend", ctx_r6.lineChartLegend)("chartType", ctx_r6.lineChartType)("plugins", ctx_r6.lineChartPlugins);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r6.finLineChartData2)("labels", ctx_r6.finLineChartLabels2)("options", ctx_r6.finLineChartOptions)("colors", ctx_r6.finLineChartColors)("legend", ctx_r6.lineChartLegend)("chartType", ctx_r6.lineChartType)("plugins", ctx_r6.lineChartPlugins);
      }
    }

    function ChartComponent_div_199_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Straddle Charts ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.straddle1instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.straddle1expiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.straddle1scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_select_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.straddle2instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.straddle2expiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.straddle2scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_select_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.straddle3instru = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "BANKNIFTY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "USDINR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_input_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.straddle3expiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_199_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.straddle3scrip = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "canvas", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle1instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle1expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle1scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle2instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle2expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle2scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle3instru);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle3expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.straddle3scrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r7.i1ChartData)("labels", ctx_r7.i1ChartLabels)("options", ctx_r7.i1ChartOptions)("colors", ctx_r7.i1ChartColors)("legend", ctx_r7.i1ChartLegend)("chartType", ctx_r7.i1ChartType)("plugins", ctx_r7.i1ChartPlugins);
      }
    }

    function ChartComponent_div_200_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Charts ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ChartComponent = /*#__PURE__*/function () {
      function ChartComponent(appService, mapService, websocketService, angelWS, chartService) {
        var _this16 = this;

        _classCallCheck(this, ChartComponent);

        this.appService = appService;
        this.mapService = mapService;
        this.websocketService = websocketService;
        this.angelWS = angelWS;
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
        this.simulate_instru = 'BANKNIFTY';
        this.simulate_strategy = false;
        this.simulateExpiryDate = '2021-12-09';
        this.simulateStartDate = '2021-12-09';
        this.simulateCurrDateObj = new Date();
        this.simulateTimeAdv = 'add';
        this.simulateTimeMins = 5;
        this.simulateCurrHour = 9;
        this.simulateCurrMins = 15;
        this.simulateCurrDateTimeString = '';
        this.payoff_overlay = false;
        this.hide_payoff = false;
        this.use_hypo_future = false;
        this.hypo_future_strike = 74.5;
        this.payoff_range = 1000;
        this.alerts = [];
        this.ordersTextarea = '';
        this.orders_parsed = [];
        this.orders_broker = 'upstox';
        this.ce_side_overlay = false;
        this.pe_side_overlay = false;
        this.num_overlays = 1;
        this.lineChartData = [
          /* { data: [-65, -59, 80, 81, 56, -55, -40], label: 'Series A' },
          { data: [0, 0, 0, 0, 0, 0, 0], label: 'Zero line' }, */

          /* { data: [-65, -59, 80, 81, 56, -55, -40], label: 'PnL' },
          { data: [0, 0, 0, 0, 0, 0, 0], label: 'Zero line' }, */
        ];
        this.finLineChartData1 = [];
        this.finLineChartData2 = [];
        this.finLineChartDataInstru = [];
        this.lineChartLabels = [
          /* 'January', 'February', 'March', 'April', 'May', 'June', 'July' */
        ];
        this.finLineChartLabels1 = [];
        this.finLineChartLabels2 = [];
        this.finLineChartLabelsInstru = [];
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
        this.finLineChartOptions = {};
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
        }, {
          borderColor: '#35A4EB',
          borderWidth: 2,
          pointRadius: 0,
          borderDash: [10, 5]
        }, {
          borderColor: 'black',
          borderWidth: 1,
          pointRadius: 0,
          borderDash: [10, 5]
        }, {
          borderColor: '#35A4EB',
          borderWidth: 2,
          pointRadius: 0,
          borderDash: [10, 5]
        }, {
          borderColor: '#35A4EB',
          borderWidth: 2,
          pointRadius: 0,
          borderDash: [10, 5]
        }];
        this.finLineChartColors = [{
          borderColor: '#35A4EB',
          borderWidth: 2,
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
          expiry: _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].USDINR_FUT_MONTH
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
        this.appService.chartEvent$.subscribe(function (res) {
          console.log('chartEvent subcribe: ', res); // this.rest_res = res;

          var scrip = _this16.parseSymbol(res.symbol);

          console.log('Adding scrip to chart: ' + scrip);

          _this16.addScripToChart(scrip, res.type);
        });
        this.websocketService.websocketEvent$.subscribe(function (res) {
          console.log('chart websocketEvent: ', res);

          if (res === 'connected') {
            _this16.doStrategiesSubscriptions();
          }
        });
        this.angelWS.websocketEvent$.subscribe(function (res) {
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
          this.alerts = [];

          for (var index = 0; index < _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].numAlerts; index += 1) {
            this.alerts.push({
              selected: false,
              scrip1: '40000CE',
              scrip2: '',
              instru: 'BANKNIFTY',
              expiry: '2021-12-31',
              compare: '>',
              price: 20,
              status: ''
            });
          }

          var alert_interval = setInterval(function () {
            if (_this17.alerts) {
              _this17.alerts.forEach(function (alert) {
                alert.status = '';

                if (alert.selected) {
                  var ltp = null;

                  if (alert.scrip1) {
                    var ltp1 = _this17.getLTP_strike({
                      scrip: alert.scrip1
                    }, alert.instru, alert.expiry);

                    ltp = ltp1;

                    if (alert.scrip2) {
                      var ltp2 = _this17.getLTP_strike({
                        scrip: alert.scrip2
                      }, alert.instru, alert.expiry);

                      ltp += ltp2;
                    }
                  } else {
                    // index
                    ltp = _this17.mapService.getLtp(alert.instru);
                  }

                  if (alert.compare === '>') {
                    if (ltp > alert.price) {
                      alert.status = 'Alert';

                      _this17.appService.playAudio('success');
                    } else {
                      alert.status = '';
                    }
                  }

                  if (alert.compare === '<') {
                    if (ltp < alert.price) {
                      alert.status = 'Alert';

                      _this17.appService.playAudio('success');
                    } else {
                      alert.status = '';
                    }
                  }
                }
              });
            }
          }, 1000);
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
        key: "ordersTextareaUpdated",
        value: function ordersTextareaUpdated(event) {
          // console.log(this.ordersTextarea);
          if (this.orders_broker === 'upstox') {
            this.parseUpstoxOrders();
          } else if (this.orders_broker === 'zerodha') {
            this.parseZerodhaOrders();
          }
        }
      }, {
        key: "parseZerodhaOrders",
        value: function parseZerodhaOrders() {
          /*
          14:59:52	BUY	BANKNIFTY 2nd w DEC 38000 CE NFO	NRML	125 / 125	7.20	COMPLETE
          11:36:58	SELL	BANKNIFTY 2nd w DEC 35000 PE NFO
          NRML	75 / 75	140.85	COMPLETE
          11:36:58	SELL	BANKNIFTY 2nd w DEC 35700 PE NFO
          NRML	175 / 175	303.71	COMPLETE
          11:36:58	BUY	BANKNIFTY 2nd w DEC 36300 CE NFO
          NRML	175 / 175	162.56	COMPLETE
          
          14:59:52	BUY	BANKNIFTY 2nd w DEC 38000 CE NFO
          NRML	125 / 125	7.20	COMPLETE
          11:36:58	SELL	BANKNIFTY 2nd w DEC 35000 PE NFO
          NRML	75 / 75	140.85	COMPLETE
          11:36:58	SELL	BANKNIFTY 2nd w DEC 35700 PE NFO	NRML	175 / 175	303.71	COMPLETE
          11:36:58	BUY	BANKNIFTY 2nd w DEC 36300 CE NFO	NRML	175 / 175	162.56	COMPLETE
          */
          this.orders_parsed = [];
          var split = this.ordersTextarea.split('COMPLETE\n');
          console.log(split);

          if (split) {
            for (var i = 0; i < split.length; i++) {
              var line = split[i];
              line = line.replace('\n', '\t');
              var details = line.split('\t');
              var o = new _common_models__WEBPACK_IMPORTED_MODULE_5__["OrderPasted"]();
              o.instru = details[2].split(' ')[0];
              o.scrip = details[2].split(' ')[4] + details[2].split(' ')[5];
              o.qty = Number(details[4].split(' ')[0]);

              if (details[1] === 'SELL') {
                o.qty = -o.qty;
              }

              o.price = Number(details[5]);
              o.strategy = this.currLoadNum;
              this.orders_parsed.push(o);
            }
          }

          console.log(this.orders_parsed);
        }
      }, {
        key: "parseUpstoxOrders",
        value: function parseUpstoxOrders() {
          /*
          BANKNIFTY 36400CE
          NFO 02DEC21
          Complete
          03:26 PM	Delivery	Sell	175/175	54.00	0	0	54.51
          
          BANKNIFTY 36300CE
          NFO 02DEC21
          Complete
          03:26 PM	Delivery	Buy	175/175	70.00	0	0	69.40
          */
          this.orders_parsed = [];
          var split = this.ordersTextarea.split('\n\t\n'); // console.log(split);

          if (split) {
            for (var i = 0; i < split.length; i++) {
              var line = split[i];
              var order = line.split('\n');
              console.log(order);
              var o = new _common_models__WEBPACK_IMPORTED_MODULE_5__["OrderPasted"]();
              o.instru = order[0].split(' ')[0];
              o.expiry = order[1].split(' ')[1];
              o.scrip = order[0].split(' ')[1];
              o.symbol = this.getMapKeyString(o.instru, o.expiry, o.scrip);
              var details = order[3].split('\t');
              o.qty = Number(details[3].split('/')[0]);

              if (details[2] === 'Sell') {
                o.qty = -o.qty;
              }

              o.price = Number(details[7]);
              o.strategy = this.currLoadNum;
              this.orders_parsed.push(o);
            }
          }

          console.log(this.orders_parsed);
        }
      }, {
        key: "addOrdersToStrategy",
        value: function addOrdersToStrategy() {
          for (var i = 0; i < this.orders_parsed.length; i++) {
            this.addPosition(this.orders_parsed[i].qty, this.orders_parsed[i].scrip, this.orders_parsed[i].price);
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
        key: "uploadExpiryFile",
        value: function uploadExpiryFile(fileInput) {
          var _this18 = this;

          var fileReaded = fileInput.target.files[0];
          var reader = new FileReader();
          reader.readAsText(fileReaded);

          reader.onload = function (e) {
            var csv = String(reader.result); // console.log('csv:', csv);

            _this18.loadExpiryFile(csv);
          };
        }
      }, {
        key: "loadExpiryFile",
        value: function loadExpiryFile(importData) {
          var allTextLines_all_data = importData.split(/\r|\n|\r/);
          var allTextLines = allTextLines_all_data.filter(function (elem) {
            return elem !== '';
          }); // console.log('allTextLines: ', allTextLines);

          var firstLine = allTextLines[0].split(','); // ignore first line header

          _common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"].simulateData = {};

          for (var index = 1; index < allTextLines.length; index++) {
            // Ticker	Date/Time	Open	High	Low	Close	Volume	Open Interest
            // BANKNIFTY, 30/07/21 9:15, 34698.8, 34698.8, 34445.4, 34607.7, 0, 0
            var split = allTextLines[index].split(',');
            var timeDict = {};
            timeDict = _common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"].simulateData[split[0]]; // split[0] is the instrument name

            if (!timeDict) {
              timeDict = {};
            }

            timeDict[split[1]] = Number(split[5]); // closing price

            _common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"].simulateData[split[0]] = timeDict;
          }

          console.log('simulateData', _common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"].simulateData);

          if (_common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"].simulateData) {
            _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].isSimulatedStrategy = true;
          }

          this.simulateCurrDateObj = new Date(this.simulateStartDate);
          this.simulateCurrDateObj.setHours(this.simulateCurrHour);
          this.simulateCurrDateObj.setMinutes(this.simulateCurrMins);
          var curr_date_string = '' + ('0' + this.simulateCurrDateObj.getDate()).slice(-2) + '-' + ('0' + (this.simulateCurrDateObj.getMonth() + 1)).slice(-2) + '-' + this.simulateCurrDateObj.getFullYear();
          this.simulateCurrDateTimeString = curr_date_string + ' ' + ('0' + this.simulateCurrDateObj.getHours()).slice(-2) + ':' + ('0' + this.simulateCurrDateObj.getMinutes()).slice(-2) + ':00'; // '21-10-2021 09:15:00'

          this.loadSimulatedOCForTime(this.simulate_instru, this.simulateCurrDateTimeString, this.simulateExpiryDate);
          this.loadOptionChain(this.simulate_instru, this.simulateExpiryDate);
        }
      }, {
        key: "loadSimulatedNextMins",
        value: function loadSimulatedNextMins() {
          if (this.simulateTimeAdv === 'add') {
            this.simulateCurrDateObj.setMinutes(this.simulateCurrDateObj.getMinutes() + Number(this.simulateTimeMins));

            if (this.simulateCurrDateObj.getHours() === 15 && this.simulateCurrDateObj.getMinutes() > 30 || this.simulateCurrDateObj.getHours() > 15) {
              var eod = new Date(this.simulateCurrDateObj);
              eod.setHours(15);
              eod.setMinutes(30);
              var diff = this.simulateCurrDateObj.getTime() - eod.getTime(); // difference in milliseconds

              var newday = new Date(this.simulateCurrDateObj);
              newday.setDate(newday.getDate() + 1);
              newday.setHours(9);
              newday.setMinutes(15);
              newday.setMilliseconds(newday.getMilliseconds() + diff);
              this.simulateCurrDateObj = new Date(newday); //console.log(eod, diff, newday);
            }
          }

          if (this.simulateTimeAdv === 'subtract') {
            this.simulateCurrDateObj.setMinutes(this.simulateCurrDateObj.getMinutes() - Number(this.simulateTimeMins));

            if (this.simulateCurrDateObj.getHours() === 9 && this.simulateCurrDateObj.getMinutes() < 15 || this.simulateCurrDateObj.getHours() < 9) {
              var sod = new Date(this.simulateCurrDateObj);
              sod.setHours(9);
              sod.setMinutes(15);

              var _diff = sod.getTime() - this.simulateCurrDateObj.getTime(); // difference in milliseconds


              var _newday = new Date(this.simulateCurrDateObj);

              _newday.setDate(_newday.getDate() - 1);

              _newday.setHours(15);

              _newday.setMinutes(30);

              _newday.setMilliseconds(_newday.getMilliseconds() - _diff);

              this.simulateCurrDateObj = new Date(_newday); //console.log(sod, diff, newday);
            }
          }

          var curr_date_string = '' + ('0' + this.simulateCurrDateObj.getDate()).slice(-2) + '-' + ('0' + (this.simulateCurrDateObj.getMonth() + 1)).slice(-2) + '-' + this.simulateCurrDateObj.getFullYear();
          this.simulateCurrDateTimeString = curr_date_string + ' ' + ('0' + this.simulateCurrDateObj.getHours()).slice(-2) + ':' + ('0' + this.simulateCurrDateObj.getMinutes()).slice(-2) + ':00'; // '21-10-2021 09:15:00'

          this.loadSimulatedOCForTime(this.simulate_instru, this.simulateCurrDateTimeString, this.simulateExpiryDate);
        }
      }, {
        key: "loadSimulatedOCForTime",
        value: function loadSimulatedOCForTime(instru, dateTimeString, expiry_date) {
          var curr_date_time = dateTimeString;
          console.log('loadSimulatedOCForTime', curr_date_time);

          for (var _i = 0, _Object$entries = Object.entries(_common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"].simulateData); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            // console.log(`${key}: ${value}`);
            if (key === instru || key.startsWith(instru) && (key.endsWith('CE') || key.endsWith('PE'))) {
              if (key === instru) {
                var symbol = instru;

                if (instru === 'NIFTY') {
                  symbol = 'NIFTY50';
                }

                this.mapService.setLtp(symbol, value[curr_date_time]);
              } else {
                var scrip = key;
                scrip = scrip.replace(instru, '');
                scrip = scrip.replace('WK', '');

                var _symbol = this.getMapKeyString(instru, expiry_date, scrip);

                var ltp = value[curr_date_time];
                this.mapService.setLtp(_symbol, ltp);
              }
            }
          }

          this.addScripToChart(this.simulate_instru, null);
          this.getPayoff();
          console.log('ltpMap', this.mapService.ltpMap);
        }
      }, {
        key: "getMapKeyString",
        value: function getMapKeyString(instru, expiry_date, scrip) {
          var is_monthly_expiry = false;
          var expiryDate = new Date(expiry_date);
          expiryDate.setHours(0, 0, 0, 0);
          var tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthlyExpiryDates;

          if (instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthlyExpiryDatesUSDINR;
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
            expiry = '' + (expiryDate.getFullYear() - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthsMapping[expiryDate.getMonth() + 1];
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

          var str = instru + expiry + scrip;
          return str;
        }
      }, {
        key: "importCSV",
        value: function importCSV(fileInput, num) {
          var _this19 = this;

          var fileReaded = fileInput.target.files[0];
          var reader = new FileReader();
          reader.readAsText(fileReaded);

          reader.onload = function (e) {
            var csv = String(reader.result);
            console.log('csv:', csv);

            _this19.loadPayoffData(num, true, csv);
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
          var instru = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var expiryDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (instru && expiryDate) {
            this.chartService.optionChainEvent$.next([instru, expiryDate]);
          } else if (this.instru && this.expiryDate) {
            this.chartService.optionChainEvent$.next([this.instru, this.expiryDate]);
          } else {
            console.log('No data to load');
          }
        }
      }, {
        key: "doSingleStrategySubscription",
        value: function doSingleStrategySubscription(alert) {
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

          this.subscribeAlerts();
          /* this.intradayWatch.forEach(element => {
            if (element.scrip !== 'FUT' && element.scrip !== 'SPOT') {
              this.subscribeIntradayWatchFeed(element.instru, element.expiry, element.scrip);
            }
          }); */
        }
      }, {
        key: "subscribeAlerts",
        value: function subscribeAlerts() {
          var _this20 = this;

          var sub = [];

          if (this.alerts) {
            this.alerts.forEach(function (pos) {
              if (pos.selected) {
                if (pos.scrip1) {
                  var e1 = _this20.getSubscriptionObject(pos.scrip1, pos.instru, pos.expiry);

                  sub.push(e1);
                }

                if (pos.scrip2) {
                  var e2 = _this20.getSubscriptionObject(pos.scrip2, pos.instru, pos.expiry);

                  sub.push(e2);
                }
              }
            });
          }

          console.log('alerts feed', sub);
          this.appService.sendSubscriptions(sub);
        }
      }, {
        key: "getSubscriptionObject",
        value: function getSubscriptionObject(scrip, instru, expiry) {
          var symbol = scrip;
          var type = '';

          if (symbol.includes('CE')) {
            type = 'CE';
          }

          if (symbol.includes('PE')) {
            type = 'PE';
          }

          console.log('getSubscriptionObject symbol: ' + symbol);
          symbol = symbol.slice(0, -2); // remove CE PE at end

          var expiryDate = new Date(expiry).toDateString(); // expiry_date

          var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_5__["Instrument"]();
          e1.expiry = expiryDate;
          e1.instru = instru;
          e1.strike = Number(symbol);
          e1.type = type;
          return e1;
        }
      }, {
        key: "subscribeStrategiesPositionsFeed",
        value: function subscribeStrategiesPositionsFeed(instru, expiry_date, trades) {
          var _this21 = this;

          var sub = [];
          trades.forEach(function (pos) {
            var e1 = _this21.getSubscriptionObject(pos.scrip, instru, pos.expiry);

            sub.push(e1);
          });
          var expiryDate = new Date(expiry_date).toDateString();
          var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_5__["Instrument"]();
          e1.expiry = expiryDate;
          e1.instru = instru;
          e1.strike = Number(this.hypo_future_strike);
          e1.type = 'CE';
          sub.push(e1);
          var e2 = new _common_models__WEBPACK_IMPORTED_MODULE_5__["Instrument"]();
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
          var e1 = new _common_models__WEBPACK_IMPORTED_MODULE_5__["Instrument"]();
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
          var _this22 = this;

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
            this.curr_positions_trades.forEach(function (e) {
              e.selected = true;
              e.selectedActual = true;
            });

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
                return _this22.compareForSorting(a.scrip, b.scrip);
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


              return _this22.compareForSorting(a.scrip, b.scrip);
            });
          }

          _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].curr_positions_trades = this.curr_positions_trades;
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
          /* if (this.curr_positions_trades) {
            let url = 'https://opstra.definedge.com/api/free/strategybuilder/payoff/NIFTY$';
            this.curr_positions_trades.forEach(element => {
              // -375x10950PEx01OCT2020x19.2x0x0&
              let pos = '' + (element.qty <= 0 ? element.qty : '+' + element.qty) + 'x' + element.scrip + 'x' + element.expiry + 'x' + element.entry + 'x' + element.exit + 'x0&';
              url += pos;
            });
            url = url.replace(/&\s*$/, ''); // remove last &
            url += '$' + this.expiryDate;
            url += '$0$0$0';
            // $2020-10-01$0$0$0
            console.log('urlToFetch: ' + url);
            this.urlToFetch = url;
          } */
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
            exit: 0,
            selected: true,
            selectedActual: false
          });
        }
      }, {
        key: "addPositionCustom",
        value: function addPositionCustom(arr) {
          var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var scrip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var entry = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var d = new Date(this.expiryDate);
          var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
          var day = ('0' + d.getDate()).slice(-2);
          var monthIndex = d.getMonth();
          var monthName = monthNames[monthIndex];
          var year = d.getFullYear();
          var dateString = day + monthName + year; // console.log('***: ', day + monthName + year);

          arr.push({
            qty: qty,
            scrip: scrip,
            expiry: dateString,
            entry: entry,
            exit: 0,
            selected: true,
            selectedActual: false
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
            exit: pos.exit,
            selected: true,
            selectedActual: false
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
              //console.log(obj);
              if (obj.exit !== 0) {
                acc.push(obj);
                return acc;
              }

              if (obj.notconsider === true) {
                return acc;
              } //this.curr_positions_trades.push({ qty: qty, scrip: scrip, expiry: dateString, entry: entry, exit: 0 });


              var found = false;

              for (var i = 0; i < acc.length; i++) {
                if (acc[i].notconsider === true) {
                  continue;
                }

                if (acc[i].exit === 0 && acc[i].scrip === obj.scrip && acc[i].expiry === obj.expiry) {
                  found = true;

                  if (acc[i].qty > 0 && obj.qty > 0 || acc[i].qty < 0 && obj.qty < 0) {
                    acc[i].entry = (acc[i].entry * acc[i].qty + obj.entry * obj.qty) / (acc[i].qty + obj.qty);
                    acc[i].entry = Math.round((acc[i].entry + 0.00001) * 10000) / 10000; // round to four decimals

                    acc[i].qty += obj.qty;
                  } else {
                    var qtydiff = acc[i].qty + obj.qty;

                    if (qtydiff !== 0) {
                      // if quantity mismatch, add another entry
                      if (Math.abs(acc[i].qty) > Math.abs(obj.qty)) {
                        var copy = Object.assign({}, acc[i]);
                        copy.qty = qtydiff;
                        copy.entry = acc[i].entry;
                        copy.notconsider = true;
                        acc.push(copy);
                        acc[i].qty = -obj.qty;
                        acc[i].exit = obj.entry; // console.log('qtydiff', qtydiff, copy);
                      } else {
                        var _copy = Object.assign({}, acc[i]);

                        _copy.qty = qtydiff;
                        _copy.entry = obj.entry;
                        _copy.notconsider = true;
                        acc.push(_copy);
                        acc[i].exit = obj.entry;
                      }
                    } else {
                      acc[i].exit = obj.entry;
                    }
                  }
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
              delete element.selected;
              delete element.selectedActual;
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
          /* this.cePremium = 0;
          this.pePremium = 0;
          this.ceWeight = 0;
          this.peWeight = 0;
          this.ceLots = 0;
          this.peLots = 0;
          if (this.curr_positions_trades) {
            this.curr_positions_trades.forEach(element => {
                   if (element.exit === null || element.exit === 0) {
                if (element.scrip.includes('CE') && element.qty < 0) {
                  let mkt_price = this.getLTP_strike({ scrip : element.scrip }, this.instru, element.expiry);
                  let currPremium = element.qty * mkt_price;
                  this.cePremium += currPremium;
                  this.ceLots += element.qty / 1000;
                }
                if (element.scrip.includes('PE') && element.qty < 0) {
                  let mkt_price = this.getLTP_strike({ scrip : element.scrip }, this.instru, element.expiry);
                  let currPremium = element.qty * mkt_price;
                  this.pePremium += currPremium;
                  this.peLots += element.qty / 1000;
                }
              }
                   let totalCEPE = this.cePremium + this.pePremium;
              this.ceWeight = (this.cePremium / totalCEPE) * 100;
              this.peWeight = (this.pePremium / totalCEPE) * 100;
                   this.cePremium = Math.round(this.cePremium);
              this.pePremium = Math.round(this.pePremium);
              this.ceWeight = Math.round(this.ceWeight);
              this.peWeight = Math.round(this.peWeight);
            });
          } */
        }
      }, {
        key: "unselectStraddlePositions",
        value: function unselectStraddlePositions() {
          var strikes = [];
          var straddle_strike;
          var qty;

          if (this.curr_positions_trades) {
            this.curr_positions_trades.forEach(function (element) {
              if (element.exit === 0) {
                var pos_strike = element.scrip.slice(0, -2); // remove CE PE at end

                if (strikes.includes(pos_strike)) {
                  straddle_strike = pos_strike;
                  qty = Math.abs(element.qty);
                } else {
                  strikes.push(pos_strike);
                }
              }
            });
            console.log('straddle strike:', straddle_strike);

            if (straddle_strike) {
              this.curr_positions_trades.forEach(function (element) {
                if (element.exit === 0) {
                  var pos_strike = element.scrip.slice(0, -2); // remove CE PE at end

                  if (pos_strike === straddle_strike) {
                    element.selected = false;
                  }
                }
              });
            }

            console.log('selected:', this.curr_positions_trades);
          }

          return [straddle_strike, qty];
        }
      }, {
        key: "whatIsStraddleHedge",
        value: function whatIsStraddleHedge(straddle_strike, qty, type) {
          var strike;

          if (this.curr_positions_trades) {
            this.curr_positions_trades.forEach(function (element) {
              if (element.exit === 0) {
                if (element.selected) {
                  if (element.scrip.includes(type) && element.qty === qty) {
                    strike = element.scrip.slice(0, -2); // remove CE PE at end
                  }
                }
              }
            });
          }

          console.log('hedge strike:', strike);
          return strike;
        }
      }, {
        key: "payoffCheckboxChange",
        value: function payoffCheckboxChange(event) {
          if (event.currentTarget.checked) {
            if (this.overlay_strike) {
              var new_strike1 = this.overlay_strike;
              var straddle_strike = this.unselectStraddlePositions();
              var new_premium1_ce = this.getLTP_strike({
                scrip: new_strike1 + 'CE'
              }, this.instru, this.expiryDate);
              this.addPosition(-straddle_strike[1], new_strike1 + 'CE', new_premium1_ce);
              var new_premium1_pe = this.getLTP_strike({
                scrip: new_strike1 + 'PE'
              }, this.instru, this.expiryDate);
              this.addPosition(-straddle_strike[1], new_strike1 + 'PE', new_premium1_pe);
              this.calculatePayoff();
            }
          } else {
            this.reloadPayoffData(this.currLoadNum);
          }
        }
      }, {
        key: "getPayoff",
        value: function getPayoff() {
          var _this23 = this;

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
          var multiple = 50;

          if (this.instru === 'BANKNIFTY') {
            range = 3000;
            multiple = 100;
          }

          if (this.instru === 'USDINR') {
            range = 2;
            increment = 0.01;
            multiple = 0.25;
          }

          if (this.payoff_range) {
            range = this.payoff_range;
          }

          var lower_range = ltp - range;
          var upper_range = ltp + range;
          var pnlForBreakeven = [];
          var pnlExitedPos = 0;
          var actualPos = [];
          var overlayPos1 = [];
          var overlayPos2 = [];
          var overlayPos3 = [];

          if (this.curr_positions_trades) {
            if (this.ce_side_overlay || this.pe_side_overlay) {
              var straddle_strike = this.unselectStraddlePositions();
              this.curr_positions_trades.forEach(function (element) {
                overlayPos1.push(element);
                overlayPos2.push(element);
                overlayPos3.push(element);
              });
              var type = 'CE';

              if (this.pe_side_overlay) {
                type = 'PE';
                multiple = -100;
              }

              var hedge_strike = this.whatIsStraddleHedge(straddle_strike[0], straddle_strike[1], type);
              var new_strike1 = hedge_strike - multiple;
              var new_premium1_ce = this.getLTP_strike({
                scrip: new_strike1 + 'CE'
              }, this.instru, this.expiryDate);
              this.addPositionCustom(overlayPos1, -straddle_strike[1], new_strike1 + 'CE', new_premium1_ce);
              var new_premium1_pe = this.getLTP_strike({
                scrip: new_strike1 + 'PE'
              }, this.instru, this.expiryDate);
              this.addPositionCustom(overlayPos1, -straddle_strike[1], new_strike1 + 'PE', new_premium1_pe);
              console.log('overlayPos1:', overlayPos1);
              var new_strike2 = hedge_strike - 2 * multiple;
              var new_premium2_ce = this.getLTP_strike({
                scrip: new_strike2 + 'CE'
              }, this.instru, this.expiryDate);
              this.addPositionCustom(overlayPos2, -straddle_strike[1], new_strike2 + 'CE', new_premium2_ce);
              var new_premium2_pe = this.getLTP_strike({
                scrip: new_strike2 + 'PE'
              }, this.instru, this.expiryDate);
              this.addPositionCustom(overlayPos2, -straddle_strike[1], new_strike2 + 'PE', new_premium2_pe);
              console.log('overlayPos2:', overlayPos2);
              var new_strike3 = hedge_strike - 3 * multiple;
              var new_premium3_ce = this.getLTP_strike({
                scrip: new_strike3 + 'CE'
              }, this.instru, this.expiryDate);
              this.addPositionCustom(overlayPos3, -straddle_strike[1], new_strike3 + 'CE', new_premium3_ce);
              var new_premium3_pe = this.getLTP_strike({
                scrip: new_strike3 + 'PE'
              }, this.instru, this.expiryDate);
              this.addPositionCustom(overlayPos3, -straddle_strike[1], new_strike3 + 'PE', new_premium3_pe);
              console.log('overlayPos3:', overlayPos3);
            }

            this.curr_positions_trades.forEach(function (element) {
              if (element.exit && element.exit > 0) {
                var pospnl = _this23.getPnL(element);

                pnlExitedPos += pospnl;
              }

              if (_this23.payoff_overlay && element.selectedActual === true) {
                actualPos.push(element);
              }
            });

            for (var point = lower_range; point <= upper_range; point += increment) {
              var pnl = 0;
              var t0 = 0;
              var overlayPnL = 0;
              var overlayT0 = 0;
              var overlayPnL2 = 0;
              var overlayPnL3 = 0;
              var arr = [];
              point = Math.round((point + 0.00001) * 100) / 100; // for USDINR two decimal places

              if (this.payoff_overlay) {
                arr = this.calculatePnLAtPoint(this.curr_positions_trades, point, ltp, true);
                overlayPnL += arr[0];
                overlayPnL += pnlExitedPos;
                overlayPnL = Math.round((overlayPnL + 0.00001) * 100) / 100;
                overlayT0 += arr[1];
                overlayT0 += pnlExitedPos;
                overlayT0 = Math.round((overlayT0 + 0.00001) * 100) / 100;
                arr = this.calculatePnLAtPoint(actualPos, point, ltp, false);
              } else if (this.ce_side_overlay || this.pe_side_overlay) {
                arr = this.calculatePnLAtPoint(overlayPos1, point, ltp, true);
                overlayPnL += arr[0];
                overlayPnL += pnlExitedPos;
                overlayPnL = Math.round((overlayPnL + 0.00001) * 100) / 100;
                arr = this.calculatePnLAtPoint(overlayPos2, point, ltp, true);
                overlayPnL2 += arr[0];
                overlayPnL2 += pnlExitedPos;
                overlayPnL2 = Math.round((overlayPnL2 + 0.00001) * 100) / 100;
                arr = this.calculatePnLAtPoint(overlayPos3, point, ltp, true);
                overlayPnL3 += arr[0];
                overlayPnL3 += pnlExitedPos;
                overlayPnL3 = Math.round((overlayPnL3 + 0.00001) * 100) / 100;
                arr = this.calculatePnLAtPoint(this.curr_positions_trades, point, ltp, false);
              } else {
                arr = this.calculatePnLAtPoint(this.curr_positions_trades, point, ltp, false);
              }

              pnl += arr[0];
              pnl += pnlExitedPos;
              pnl = Math.round((pnl + 0.00001) * 100) / 100;
              t0 += arr[1];
              t0 += pnlExitedPos;
              t0 = Math.round((t0 + 0.00001) * 100) / 100;
              pnlForBreakeven.push(pnl);
              myPayoff.chart.push({
                Final: pnl,
                StockPrice: point,
                Today: t0,
                Overlay: overlayPnL,
                OverlayT0: overlayT0,
                Overlay2: overlayPnL2,
                Overlay3: overlayPnL3
              });
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
        key: "calculatePnLAtPoint",
        value: function calculatePnLAtPoint(positions, point, ltp, overlay) {
          var _this24 = this;

          var pnl = 0;
          var t0 = 0;
          positions.forEach(function (element) {
            /*  {
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
                type = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].CEsell;
                typet0 = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].CE;
              }

              if (element.scrip.includes('PE') && element.qty < 0) {
                type = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].PEsell;
                typet0 = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].PE;
              }

              if (element.scrip.includes('CE') && element.qty > 0) {
                type = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].CEbuy;
                typet0 = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].CE;
              }

              if (element.scrip.includes('PE') && element.qty > 0) {
                type = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].PEbuy;
                typet0 = _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].PE;
              }

              var pos_strike = element.scrip.slice(0, -2); // remove CE PE at end

              var expiry = element.expiry; // this.expiryDate;

              var d1 = new Date(expiry); // position expiry

              var d2 = new Date(_this24.expiryDate);

              if (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()) {
                if (overlay && !element.selected) {
                  pnl += _this24.getPnL(element);
                } else {
                  pnl += _this24.calculatePnLAtPointForStrike(point, pos_strike, element.qty, element.entry, type);
                }
              } else {
                var mkt_price = _this24.getLTP_strike({
                  scrip: element.scrip
                }, _this24.instru, expiry);

                var iv = _this24.calculateIV(ltp, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].INTEREST_RATE, expiry, typet0, mkt_price); // console.log('*** ', pos_strike, typet0, expiry, iv);


                var d3 = new Date();
                var add_days = Math.round((d2.getTime() - d3.getTime()) / (1000 * 3600 * 24));
                console.log('add_days: ', add_days);

                var t0_ = _this24.calculateT0AtPointForStrike(point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].INTEREST_RATE, expiry, iv, typet0, add_days);

                t0_ = t0_ - element.entry;
                t0_ = t0_ * element.qty;
                pnl += t0_;
              } // T+0 calculation:


              if (overlay && !element.selected) {
                t0 += _this24.getPnL(element);
              } else {
                var _mkt_price = _this24.getLTP_strike({
                  scrip: element.scrip
                }, _this24.instru, expiry);

                var _iv = _this24.calculateIV(ltp, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].INTEREST_RATE, expiry, typet0, _mkt_price);

                var _t0_ = _this24.calculateT0AtPointForStrike(point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].INTEREST_RATE, expiry, _iv, typet0); // console.log('*** ', pos_strike, typet0, expiry, mkt_price, iv, t0_);


                _t0_ = _t0_ - element.entry;
                _t0_ = _t0_ * element.qty;
                t0 += _t0_;
              }
            }
          }); //console.log('t0', t0);

          return [pnl, t0];
        }
      }, {
        key: "calculateIV",
        value: function calculateIV(spot, strike, int_rate, expiry_date, type, mkt_price) {
          var high = 80;
          var low = 0;
          var iv = 0;
          var date_expiry = new Date(expiry_date);
          var date_now = new Date();

          if (this.simulate_strategy) {
            date_now = this.simulateCurrDateObj;
          }

          var seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var delta_t = Math.floor(hours / 24) / 365.0;
          /* if (hours < 24) {
            return 0;
          } */

          while (high - low > 0.0001) {
            if (this.calculateT0AtPointForStrike(spot, strike, int_rate, expiry_date, (high + low) / 2, type) > mkt_price) {
              high = (high + low) / 2;
            } else {
              low = (high + low) / 2;
            }
          }

          iv = (high + low) / 2;
          return iv;
        }
      }, {
        key: "calculateT0AtPointForStrike",
        value: function calculateT0AtPointForStrike(spot, strike, int_rate, expiry_date, volatility, type, add_days) {
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

          if (this.simulate_strategy) {
            date_now = this.simulateCurrDateObj;
          }

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

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].CE) {
            t0 = spot * this.getCDF(d1) - fv_strike * this.getCDF(d2);
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].PE) {
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
        key: "calculatePnLAtPointForStrike",
        value: function calculatePnLAtPointForStrike(point, pos_strike, qty, entry, type) {
          var pnl = 0;

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].CEsell) {
            if (point > pos_strike) {
              pnl = (pos_strike - point + entry) * Math.abs(qty);
            } else {
              pnl = entry * Math.abs(qty);
            }
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].PEsell) {
            if (point < pos_strike) {
              pnl = (-pos_strike + point + entry) * Math.abs(qty);
            } else {
              pnl = entry * Math.abs(qty);
            }
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].CEbuy) {
            if (point > pos_strike) {
              pnl = (-pos_strike + point - entry) * Math.abs(qty);
            } else {
              pnl = entry * -Math.abs(qty);
            }
          }

          if (type === _common_models__WEBPACK_IMPORTED_MODULE_5__["PositionTypeForPayOff"].PEbuy) {
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
          var _this25 = this;

          /* let url = this.urlToFetch.replace('payoff', 'margin');
          this.appService.get(url).subscribe(res => {
            console.log('getMargin: ', res);
            this.margin = (res as any).margin.toLocaleString();
          },
          error => {
            console.log('getMargin error', error);
          }); */
          var d = new Date(this.expiryDate); // let month = d.toLocaleString('default', { month: 'short' }).toUpperCase();

          var month = _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthsMapping[d.getMonth() + 1];

          console.log('getMargin: ', this.curr_positions_trades);
          this.appService.getZerodhaMargin(this.instru, month, this.curr_positions_trades, this.instru).subscribe(function (res) {
            console.log('getMargin: ', res);

            if (res.total) {
              _this25.margin = Math.round(res.total.total).toLocaleString();
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
        key: "getStrategyDelta",
        value: function getStrategyDelta() {
          var _this26 = this;

          var delta = 0;
          var trades = this.curr_positions_trades;

          if (trades) {
            trades.forEach(function (pos) {
              if (pos.exit === null || pos.exit === 0) {
                if (_this26.payoff_overlay && !pos.selected) {
                  return;
                }

                var type = '';
                var s = pos.scrip;

                if (s.includes('CE')) {
                  type = 'CE';
                }

                if (s.includes('PE')) {
                  type = 'PE';
                }

                var strike = s.slice(0, -2); // remove CE PE at end

                var ltp = _this26.getLTP_strike(pos);

                delta += _this26.appService.getDelta(_this26.instru, strike, type, pos.expiry, ltp, _this26.simulate_strategy, _this26.simulateCurrDateObj) * pos.qty;
              }
            });
          }

          delta = Math.round((delta + 0.00001) * 100) / 100;
          var suggest_string = ' ( 50: ' + Math.round((-delta / 50 + 0.00001) * 100) / 100 + ' , 100: ' + Math.round((-delta / 100 + 0.00001) * 100) / 100 + ' , 150: ' + Math.round((-delta / 150 + 0.00001) * 100) / 100 + ' , 200: ' + Math.round((-delta / 200 + 0.00001) * 100) / 100 + ' )';
          return delta + suggest_string;
        }
      }, {
        key: "getStrategyPnLAfterCharges",
        value: function getStrategyPnLAfterCharges() {
          var pnl = this.getStrategyPnL();
          var charges = 0;
          var trades = this.curr_positions_trades;

          if (trades) {
            trades.forEach(function (pos) {
              if (pos.exit !== null && pos.exit !== 0) {
                charges += 70;
              } else {
                charges += 35;
              }
            });
          }

          return pnl - charges;
        }
      }, {
        key: "getStrategyPnL",
        value: function getStrategyPnL() {
          var _this27 = this;

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
                var posPnl = _this27.getPnL(pos, instru, pos.expiry);

                pnl += posPnl;
                pointsProfit += posPnl / Math.abs(pos.qty); // console.log('points:', pointsProfit);
              } else {
                var _posPnl = _this27.getPnL(pos); // pos.pnl;


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
        key: "getAlertLtp",
        value: function getAlertLtp(alert) {
          if (alert.selected) {
            if (alert.scrip1) {
              var ltp1 = this.getLTP_strike({
                scrip: alert.scrip1
              }, alert.instru, alert.expiry);
              var ltp = ltp1;

              if (alert.scrip2) {
                var ltp2 = this.getLTP_strike({
                  scrip: alert.scrip2
                }, alert.instru, alert.expiry);
                ltp += ltp2;
              }

              return ltp;
            } else {
              // index
              return this.mapService.getLtp(alert.instru);
            }
          }
        }
        /*   getLTP(scrip, instru?, expiry_date?) { // scrip: 18000CE
            return this.getLTP_strike({ scrip : scrip }, instru, expiry_date);
          } */

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
          var tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthlyExpiryDates;

          if (instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthlyExpiryDatesUSDINR;
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
            expiry = '' + (expiryDate.getFullYear() - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthsMapping[expiryDate.getMonth() + 1];
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
            var expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].year + _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].USDINR_FUT_MONTH];
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

            scrip = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].USDINR_FUT_MONTH + 'FUT'; // console.log('getLtp strike: ' + scrip);
          }

          this.spot = this.mapService.getLtp(scrip);
          return this.spot;
        }
      }, {
        key: "addScripToChart",
        value: function addScripToChart(scrip, type) {
          for (var _i2 = 0, _Object$entries2 = Object.entries(_common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"].simulateData); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                key = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];

            if (key === scrip || key.startsWith(this.simulate_instru) && key.endsWith(scrip)) {
              var chartData = {
                chart: []
              };
              var curr_date = this.simulateCurrDateTimeString.split(' ')[0];

              for (var _i3 = 0, _Object$entries3 = Object.entries(value); _i3 < _Object$entries3.length; _i3++) {
                var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                    k = _Object$entries3$_i[0],
                    v = _Object$entries3$_i[1];

                if (k.startsWith(curr_date)) {
                  chartData.chart.push({
                    label: k,
                    close: v
                  });
                }
              }

              console.log('value', curr_date, chartData, value);
              this.updateFinChartData(chartData, type);
            }
          }
        }
      }, {
        key: "updateFinChartData",
        value: function updateFinChartData(res, type) {
          if (res) {
            var labels = [];
            var close = [];

            if (res.chart && Array.isArray(res.chart)) {
              res.chart.forEach(function (element) {
                labels.push(element.label);
                close.push(element.close);
              });
            }

            if (!type) {
              this.finLineChartLabelsInstru = labels;
              this.finLineChartDataInstru = [{
                data: close,
                label: 'close'
              }];
            } else if (type === 'CE') {
              this.finLineChartLabels1 = labels;
              this.finLineChartData1 = [{
                data: close,
                label: 'close'
              }];
            } else if (type === 'PE') {
              this.finLineChartLabels2 = labels;
              this.finLineChartData2 = [{
                data: close,
                label: 'close'
              }];
            }

            this.finLineChartOptions = {
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
              }
            };
          }
        }
      }, {
        key: "updateChartData",
        value: function updateChartData(res) {
          var _this28 = this;

          if (res) {
            this.labels = [];
            this.pnl = [];
            var overlay = [];
            var overlayT0 = [];
            var overlay2 = [];
            var overlay3 = [];
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

                _this28.labels.push(element.StockPrice);

                _this28.pnl.push(element.Final);

                t0.push(element.Today);

                _this28.zeroline.push(0);

                if (_this28.payoff_overlay) {
                  overlay.push(element.Overlay);
                  overlayT0.push(element.OverlayT0);
                }

                if (_this28.ce_side_overlay || _this28.pe_side_overlay) {
                  overlay.push(element.Overlay);
                  overlay2.push(element.Overlay2);
                  overlay3.push(element.Overlay3);
                }
                /* overlay.push(10000); */

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
            }, {
              data: overlay,
              label: 'Overlay',
              fill: false
            }, {
              data: overlayT0,
              label: 'OverlayT0',
              fill: false
            }, {
              data: overlay2,
              label: 'Overlay2',
              fill: false
            }, {
              data: overlay3,
              label: 'Overlay3',
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
          var spot_intraday = this.chartService.getIntradayData('FUT', 'USDINR', _common_application_constant__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].USDINR_FUT_MONTH);

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
      return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_7__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_8__["AngelWebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chart_service__WEBPACK_IMPORTED_MODULE_9__["ChartService"]));
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
      decls: 201,
      vars: 64,
      consts: [["id", "accordionAlerts", 1, "accordion", "mb-2"], [1, "card"], ["type", "button", "data-toggle", "collapse", "data-target", "#alertsSection", "aria-expanded", "false", "aria-controls", "alertsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "alertsSection", "aria-labelledby", "headingOne", "data-parent", "#accordionAlerts", 1, "collapse", "show", "p-2"], ["class", "alerts-flex-container", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["id", "accordionOrders", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#ordersSection", "aria-expanded", "true", "aria-controls", "ordersSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "ordersSection", "aria-labelledby", "headingOne", "data-parent", "#accordionOrders", 1, "collapse", "show", "p-2"], ["rows", "5", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "table", "table-sm", "table-bordered", "shadow", "text-center"], [4, "ngFor", "ngForOf"], [1, "confirmation-check", "form-check-inline", "mt-0"], ["type", "radio", "value", "upstox", "id", "upstox_orders", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "upstox_orders", 1, "form-check-label"], ["type", "radio", "value", "zerodha", "id", "zerodha_orders", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "zerodha_orders", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 2, "margin-top", "-7px", 3, "click"], ["id", "accordionPayoff", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#payOffSection", "aria-expanded", "true", "aria-controls", "payOffSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "payOffSection", "aria-labelledby", "headingOne", "data-parent", "#accordionPayoff", 1, "collapse", "show", "p-2"], [1, "chart-all-strategies-pnl", "text-center"], [1, "font-weight-bold", 3, "ngClass"], [1, "pl-4", "pr-4"], [1, "chart-flex-container"], ["class", "chart-chart", 4, "ngIf"], [1, "chart-positions"], [1, "form-check-inline", "use-hypo-future-class"], ["for", "use-range", 1, "form-check-label"], ["id", "use-range", "type", "number", "placeholder", "Payoff Range", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "", "id", "use-hypo-future", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "use-hypo-future", 1, "form-check-label"], ["type", "number", "placeholder", "Closest Strike", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "", "id", "hide-payoff", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "hide-payoff", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "simulate_strategy", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "simulate_strategy", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "ce_side_overlay", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "ce_side_overlay", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "pe_side_overlay", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pe_side_overlay", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "payoff_overlay", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["for", "payoff_overlay", 1, "form-check-label"], ["type", "number", "placeholder", "Overlay strike", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], [1, "strategy_instru", "form-control", "form-control-sm", "mr-2", 3, "ngModel", "ngModelChange"], ["value", "NIFTY"], ["value", "BANKNIFTY"], ["value", "USDINR"], ["placeholder", "Expiry YYYY-MM-DD", "id", "payOffExpiry", 1, "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-1", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mr-1", 3, "click"], [1, "mt-2"], ["type", "file", "name", "File Upload 1", "accept", ".csv", 2, "display", "none", 3, "change"], ["fileImportInput1", ""], [1, "mt-2", "font-weight-bold"], [3, "ngClass"], [2, "font-weight", "normal"], [1, "mt-1"], [4, "ngIf"], ["class", "accordion mb-2", "id", "accordionStraddle", 4, "ngIf"], ["class", "accordion", "id", "accordionCharts", 4, "ngIf"], [1, "alerts-flex-container"], [1, "form-check-inline"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "alert_field", "form-control", "form-control-sm", "mr-2", 3, "ngModel", "ngModelChange"], ["value", "NIFTY50"], ["placeholder", "Scrip1", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], ["placeholder", "Scrip2", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], ["placeholder", "Expiry YYYY-MM-DD", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], ["value", ">"], ["value", "<"], ["placeholder", "Price", "type", "number", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], [1, "text-danger", "ml-2"], [1, "chart-chart"], ["baseChart", "", "width", "2", "height", "1", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"], ["placeholder", "Expiry YYYY-MM-DD", 1, "simulateDate", "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Start YYYY-MM-DD", 1, "simulateDate", "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "simulateTimeAdv", "form-control", "form-control-sm", "mr-2", 3, "ngModel", "ngModelChange"], ["value", "add"], ["value", "subtract"], ["placeholder", "mins", "id", "simulateTimeMins", 1, "simulateTimeMins", "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "File Upload Expiry", "accept", ".csv", 2, "display", "none", 3, "change"], ["fileImportInputExpiry", ""], ["type", "number", "placeholder", "Qty", 1, "form-control", "form-control-sm", 3, "step", "ngModel", "ngModelChange"], ["placeholder", "Scrip 11500CE", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Expiry 01OCT2020", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Entry", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Exit", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "font-weight-bold"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "form-check-inline", "posCheckbox"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "ngModel", "disabled", "ngModelChange"], [1, "chart-finchart"], ["id", "accordionStraddle", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#straddleSection", "aria-expanded", "true", "aria-controls", "straddleSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "straddleSection", "aria-labelledby", "headingOne", "data-parent", "#accordionStraddle", 1, "collapse", "show", "p-2"], ["placeholder", "Expiry YYYY-MM-DD", "id", "payOffExpiry", 1, "mr-2", "mb-1", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Scrip", "id", "payOffExpiry", 1, "mb-1", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["id", "accordionCharts", 1, "accordion"], ["type", "button", "data-toggle", "collapse", "data-target", "#chartsSection", "aria-expanded", "true", "aria-controls", "chartsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "chartsSection", "aria-labelledby", "headingOne", "data-parent", "#accordionCharts", 1, "collapse", "show", "p-2"], ["height", "600", "width", "760", "src", "https://ssltvc.forexprostools.com/?pair_ID=8985&height=600&width=760&interval=300&plotStyle=candles&domain_ID=56&lang_ID=56&timezone_ID=20"], ["height", "600", "width", "760", "src", "https://ssltvc.forexprostools.com/?pair_ID=160&height=600&width=760&interval=300&plotStyle=candles&domain_ID=56&lang_ID=56&timezone_ID=20"]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Alerts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChartComponent_div_5_Template, 23, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_6_listener() {
            return ctx.subscribeAlerts();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Refresh LTPs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Orders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_textarea_ngModelChange_13_listener($event) {
            return ctx.ordersTextarea = $event;
          })("ngModelChange", function ChartComponent_Template_textarea_ngModelChange_13_listener($event) {
            return ctx.ordersTextareaUpdated($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChartComponent_tr_16_Template, 9, 4, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.orders_broker = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Upstox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.orders_broker = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Zerodha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_25_listener() {
            return ctx.addOrdersToStrategy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Strategy Payoff ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Strategy 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Strategy 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Strategy 3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Strategy 4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Strategy 5: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ChartComponent_div_63_Template, 2, 7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.payoff_range = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.use_hypo_future = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Use Hypothetical Future");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_73_listener($event) {
            return ctx.hypo_future_strike = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_75_listener($event) {
            return ctx.hide_payoff = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Hide Payoff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_79_listener($event) {
            return ctx.simulate_strategy = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Simulate Strategy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_84_listener($event) {
            return ctx.ce_side_overlay = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "CE side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_88_listener($event) {
            return ctx.pe_side_overlay = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "PE side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_92_listener($event) {
            return ctx.payoff_overlay = $event;
          })("change", function ChartComponent_Template_input_change_92_listener($event) {
            return ctx.payoffCheckboxChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Payoff Overlay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_95_listener($event) {
            return ctx.overlay_strike = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ChartComponent_div_96_Template, 24, 6, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_select_ngModelChange_99_listener($event) {
            return ctx.instru = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "NIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "BANKNIFTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "USDINR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_106_listener($event) {
            return ctx.expiryDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_107_listener() {
            return ctx.doSingleStrategySubscription();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Refresh LTPs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_109_listener() {
            return ctx.loadOptionChain();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Load Option Chain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, ChartComponent_tr_113_Template, 23, 16, "tr", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_114_listener() {
            return ctx.addPosition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_116_listener() {
            return ctx.calculatePayoff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_119_listener() {
            return ctx.savePositions(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Save 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_121_listener() {
            return ctx.savePositions(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Save 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_123_listener() {
            return ctx.savePositions(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Save 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_125_listener() {
            return ctx.savePositions(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Save 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_127_listener() {
            return ctx.savePositions(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Save 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_130_listener() {
            return ctx.reloadPayoffData(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Load 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_132_listener() {
            return ctx.reloadPayoffData(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Load 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_134_listener() {
            return ctx.reloadPayoffData(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Load 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_136_listener() {
            return ctx.reloadPayoffData(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Load 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_138_listener() {
            return ctx.reloadPayoffData(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Load 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_141_listener() {
            return ctx.exportToCSV(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Export 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_143_listener() {
            return ctx.exportToCSV(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Export 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_145_listener() {
            return ctx.exportToCSV(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Export 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_147_listener() {
            return ctx.exportToCSV(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Export 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_149_listener() {
            return ctx.exportToCSV(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Export 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_152_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](155);

            return _r5.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Import");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "input", 56, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChartComponent_Template_input_change_154_listener($event) {
            return ctx.importCSV($event, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Total PnL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, ChartComponent_div_174_Template, 9, 21, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Update 27 Nov:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Maintain T+0 Monitor extra buying options and buy and exit whenever required. Shift straddle if spot breaching breakeven. Move other side hedge whenever required. End result for the Fly is the straddle one strike near to a side's hedge on the Expiry day. Exit the Fly if getting 3% on deployed capital in the week and move to next week. During the day, maintain your T+0 slope. Do that using extra buying and maintaining appropriate distance of hedge from straddle. If spot is nearing breakeven, make sure that side hedge distance is less than straddle combined premium. At end of the day, if required, then adjust straddle and hedges to achieve the payoff structure and T0 you want. T0 gives your pnl of the day irrespective of whether you are shifting your straddle or not. So maintaining T0 slope is important. If you are shifting straddle constantly, you might capture extra theta decay during the day, but will not be much as compared to original straddle. You will anyways be shifting the straddle at end of day. Not required to shift straddle constantly. Shift straddle has to be shifted when breakeven is breached, because loss rate increases after that at end of day. Also review payoff structure at end of day. Add another lower quantity closer hedged fly if required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Straddle Adjustments:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Move straddle legs as per the trend. Not early (to avoid random moves) and Not Late (ITM loss and lower premium) Moving frequently leads to getting lower premium over time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Hedge Adjustments:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Hedges should not be too far and not too close. Too far increases overnight risk. Too close results in late profit realization. Manage intraday moves with extra buy. Maintaining T0 is important. Move untested side hedge inside if cheap. Add extra small quantity of buy to manage T0 line according to trend. Monitor option chart for this. Look for EMA confirmation, S/R breach for adjustment of straddle and buys. Max loss on a side should be 100 points. In terms of Rs., do 100 * num. lots. Hedge should eventually be at the distance less than straddle premium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Loss less:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " A side becomes loss less if NET CREDIT is GREATER than HEDGE DISTANCE on that side. Normally you would have atleast 400 credit in straddle and pay upto 200 on hedges. So net credit is 200. So straddle around 200 points away from hedge can make that side loss less. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Strangle:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Sell naked far OTM CE or strangle. Exit the naked option if SL hit. Keep moving untested side naked sell inside. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "NEW FLY:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " If BNF near of crossing breakeven, make CLOSE-HEDGED fly with lower qty at that point. Exit this new fly if BNF moving out of its breakevens. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](199, ChartComponent_div_199_Template, 36, 16, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](200, ChartComponent_div_200_Template, 8, 0, "div", 64);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ordersTextarea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders_parsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orders_broker);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orders_broker);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](46, _c1, ctx.getStrategyPnL(1) < 0, ctx.getStrategyPnL(1) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](49, _c1, ctx.getStrategyPnL(2) < 0, ctx.getStrategyPnL(2) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](52, _c1, ctx.getStrategyPnL(3) < 0, ctx.getStrategyPnL(3) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](55, _c1, ctx.getStrategyPnL(4) < 0, ctx.getStrategyPnL(4) > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStrategyPnL(4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](58, _c1, ctx.getStrategyPnL(5) < 0, ctx.getStrategyPnL(5) > 0));

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulate_strategy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ce_side_overlay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pe_side_overlay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payoff_overlay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.overlay_strike);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.simulate_strategy === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Loaded Strategy ", ctx.currLoadNum, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instru);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expiryDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.curr_positions_trades);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](61, _c1, ctx.getStrategyPnL() < 0, ctx.getStrategyPnL() > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getStrategyPnL(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.getStrategyPnLAfterCharges(), ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delta: ", ctx.getStrategyDelta(), "");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.simulate_strategy === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["[_nghost-%COMP%], input[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\n.use-hypo-future-class[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.chart-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.posCheckbox[_ngcontent-%COMP%] {\n  margin: 8px auto !important;\n  padding-left: 8px;\n}\n\n.simulateDate[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n\n.simulateTimeAdv[_ngcontent-%COMP%], .simulateTimeMins[_ngcontent-%COMP%] {\n  width: 10%;\n  display: inline-block;\n}\n\n.alert_field[_ngcontent-%COMP%] {\n  width: 10%;\n  display: inline-block;\n}\n\n.chart-positions[_ngcontent-%COMP%] {\n  \n  \n  min-width: 400px;\n}\n\n.chart-chart[_ngcontent-%COMP%] {\n  \n  min-width: 500px;\n}\n\n.chart-finchart[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n\n#payOffExpiry[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.positionExited[_ngcontent-%COMP%] {\n  background-color: rgba(148, 159, 177, 0.2);\n  \n}\n\n.strategy_instru[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n\n#payOffExpiry[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrZXQvRGVza3RvcC9nZW5lcmFsL3RyYWRlcy1hLTE5c2VwL3NyYy9hcHAvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7QUNGSjs7QURLQTtFQUNJLDBDQUFBO0VBQXlDLGFBQUE7QUNEN0M7O0FESUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCwgaW5wdXQsIC5pbnB1dC1ncm91cC10ZXh0LCBzZWxlY3QsIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZS1oeXBvLWZ1dHVyZS1jbGFzcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uY2hhcnQtZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnBvc0NoZWNrYm94IHtcclxuICAgIG1hcmdpbjogOHB4IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4uc2ltdWxhdGVEYXRlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zaW11bGF0ZVRpbWVBZHYsIC5zaW11bGF0ZVRpbWVNaW5zIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLmFsZXJ0X2ZpZWxkIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jaGFydC1wb3NpdGlvbnMge1xyXG4gICAgLyogZmxleDogMjsgKi9cclxuICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jaGFydC1jaGFydCB7XHJcbiAgICAvKiBmbGV4OiAzOyAqL1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmNoYXJ0LWZpbmNoYXJ0IHtcclxuICAgIG1pbi13aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbiNwYXlPZmZFeHBpcnkge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnBvc2l0aW9uRXhpdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LDE1OSwxNzcsMC4yKTsgLyogI2Y4ZjlmYTsgKi9cclxufVxyXG5cclxuLnN0cmF0ZWd5X2luc3RydSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jcGF5T2ZmRXhwaXJ5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsIjpob3N0LCBpbnB1dCwgLmlucHV0LWdyb3VwLXRleHQsIHNlbGVjdCwgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2UtaHlwby1mdXR1cmUtY2xhc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2hhcnQtZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wb3NDaGVja2JveCB7XG4gIG1hcmdpbjogOHB4IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5zaW11bGF0ZURhdGUge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaW11bGF0ZVRpbWVBZHYsIC5zaW11bGF0ZVRpbWVNaW5zIHtcbiAgd2lkdGg6IDEwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWxlcnRfZmllbGQge1xuICB3aWR0aDogMTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jaGFydC1wb3NpdGlvbnMge1xuICAvKiBmbGV4OiAyOyAqL1xuICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5jaGFydC1jaGFydCB7XG4gIC8qIGZsZXg6IDM7ICovXG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5jaGFydC1maW5jaGFydCB7XG4gIG1pbi13aWR0aDogNzAwcHg7XG59XG5cbiNwYXlPZmZFeHBpcnkge1xuICB3aWR0aDogMzAlO1xufVxuXG4ucG9zaXRpb25FeGl0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTU5LCAxNzcsIDAuMik7XG4gIC8qICNmOGY5ZmE7ICovXG59XG5cbi5zdHJhdGVneV9pbnN0cnUge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNwYXlPZmZFeHBpcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"]
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
          type: _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
        }, {
          type: _common_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]
        }, {
          type: _common_websocket_service__WEBPACK_IMPORTED_MODULE_7__["WebsocketService"]
        }, {
          type: _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_8__["AngelWebsocketService"]
        }, {
          type: _chart_service__WEBPACK_IMPORTED_MODULE_9__["ChartService"]
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
          var _this29 = this;

          console.log('Loading intraday data');
          intradayWatch.forEach(function (element) {
            var prices = JSON.parse(localStorage.getItem(element.instru + ' ' + element.expiry + ' ' + element.scrip));

            _this29.intradayData.set(element.instru + ' ' + element.expiry + ' ' + element.scrip, prices);
          });
          console.log('Loaded intraday data: ', this.intradayData);
        }
      }, {
        key: "initFetchIntraday",
        value: function initFetchIntraday(intradayWatch) {
          var _this30 = this;

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
                ltp = _this30.getInstruLTP(instru);
              } else {
                ltp = _this30.getLTP_strike(scrip, instru, expiry);
              }

              if (ltp) {
                var arr = _this30.intradayData.get(instru + ' ' + expiry + ' ' + scrip);

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


                _this30.intradayData.set(instru + ' ' + expiry + ' ' + scrip, arr); // console.log('intradayData: ', this.intradayData);

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
          var _this31 = this;

          // console.log('Saving intraday data: ');
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(function (sec) {
            var _iterator = _createForOfIteratorHelper(_this31.intradayData),
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
            var _symbol2 = '';

            if (p.token === 26000) {
              _symbol2 = 'NIFTY50';
            } else if (p.token === 26009) {
              _symbol2 = 'BANKNIFTY';
            } else if (p.token === 1) {
              _symbol2 = 'USDINR';
            } else {
              console.error(p.token, 'not found in masters');
            }

            this.mapService.setLtp(_symbol2, p.ltp);
            this.mapService.setAtp(_symbol2, p.atp);
            this.mapService.setVolume(_symbol2, p.volume);
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
        value: function getMastersContract(access_token) {
          var _this32 = this;

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

              _this32.connectWebsocket(access_token);
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
          var _this33 = this;

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
            var instru = _this33.findStrikeInMasters(instrument);

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
  "./src/app/common/angel.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/common/angel.service.ts ***!
    \*****************************************/

  /*! exports provided: AngelService */

  /***/
  function srcAppCommonAngelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngelService", function () {
      return AngelService;
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
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models */
    "./src/app/common/models.ts");
    /* harmony import */


    var _angelwebsocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./angelwebsocket.service */
    "./src/app/common/angelwebsocket.service.ts"); // const fyers = require('fyers-api');
    // import * as fyers from 'fyers-api';


    var AngelService = /*#__PURE__*/function () {
      function AngelService(http, angelWS) {
        _classCallCheck(this, AngelService);

        this.http = http;
        this.angelWS = angelWS;
        this.baseUrl = 'https://apiconnect.angelbroking.com';
      }

      _createClass(AngelService, [{
        key: "getAngelHeaders",
        value: function getAngelHeaders() {}
      }, {
        key: "angelLogin",
        value: function angelLogin() {
          var _this34 = this;

          this.auth().subscribe(function (res) {
            console.log('angel auth', res);

            if (res && res.data) {
              _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelFeedToken = res.data.feedToken;
              _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelJWTToken = res.data.jwtToken;
              _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelRefreshToken = res.data.refreshToken;

              _this34.angelWS.connect();
            }
          }, function (error) {
            console.log('angel auth error', error);
          });
        }
      }, {
        key: "getMastersContract",
        value: function getMastersContract() {
          var _this35 = this;

          var httpOptions = {
            responseType: 'json'
          };
          var url = 'https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json';
          this.http.get(url, httpOptions).subscribe(function (res) {
            console.log('AngelService getMastersContract', res);

            if (res) {
              _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.clear();

              res.forEach(function (i) {
                // {"token":"37616","symbol":"BANKNIFTY28OCT2139100CE","name":"BANKNIFTY","expiry":"28OCT2021","strike":"3910000.000000","lotsize":"25","instrumenttype":"OPTIDX","exch_seg":"NFO","tick_size":"5.000000"},
                var p = new _models__WEBPACK_IMPORTED_MODULE_3__["AliceblueInstrument"]();
                var multiplier = 100;

                if (i.exch_seg === 'CDS') {
                  multiplier = 10000000;
                }

                p.instru = i.name;
                p.strike = Number(i.strike) / multiplier;

                if (i.symbol.endsWith('CE')) {
                  p.optionType = 'CE';
                }

                if (i.symbol.endsWith('PE')) {
                  p.optionType = 'PE';
                }

                if (i.symbol.endsWith('FUT')) {
                  p.optionType = 'FUT';
                }

                p.symbol = i.symbol; // BANKNIFTY28OCT2139100CE NIFTY28OCT21FUT USDINR21O1475.25CE

                p.lotSize = Number(i.lotsize);
                p.expiry = new Date(i.expiry).toDateString(); // p.exchange_code = i.exchange_code;

                p.exchange = i.exch_seg; // p.company = i.company;

                p.code = Number(i.token); // let split = i.symbol.split(' ');
                // let key = split[0] + split[split.length - 2] + split[split.length - 1]; // NIFTY10000CE

                /* if (i.code === 95734 || i.code === '95734') {
                  console.log('**** FOUND', i.code);
                } */

                if (p.code === 95734) {// console.log('**** FOUND', i.code);
                }

                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.set(p.code, p);
              });

              _this35.angelLogin();
            }

            console.log('AngelService getMastersContract abMastersContract', _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract);
          }, function (error) {
            console.log('AngelService getMastersContract error', error);
          });
        }
      }, {
        key: "sendSubscriptions",
        value: function sendSubscriptions(instruments) {
          var _this36 = this;

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
            var instru = _this36.findStrikeInMasters(instrument);
          }); // let message = JSON.stringify({'a' : 'subscribe', 'v' : arr, 'm' : AliceBlueLiveFeedType.MARKET_DATA});

          var strwatchlistscrips = 'nse_fo|43315&nse_fo|38692';
          var subs = '{"task":"mw","channel":"' + strwatchlistscrips + '","token":"' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelFeedToken + '","user": "' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelUserId + '","acctid":"' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelUserId + '"}';
          console.log('angel sendSubscriptions: ' + subs);
          this.angelWS.sendMessage(subs);
        }
      }, {
        key: "findStrikeInMasters",
        value: function findStrikeInMasters(instrument) {
          /*
              symbol in masters:
              BANKNIFTY28OCT2139100CE
              NIFTY28OCT21FUT
              USDINR21O1475.25CE
           */
          var return_instru = null;

          _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].abMastersContract.forEach(function (element) {
            // console.log(instru, strike, type, element.expiry, instrument.instru, instrument.strike, instrument.type, instrument.expiry);
            if (instrument.expiry === element.expiry && instrument.instru === element.instru && instrument.strike === element.strike && instrument.type === element.optionType) {
              return_instru = element;
              return;
            }
          });

          return return_instru;
        }
      }, {
        key: "auth",
        value: function auth() {
          /* let reqBody = { 'app_id': AppConstants.fyersAppId, 'secret_key':  AppConstants.fyersSecretId };
          return fyers.auth(reqBody); */
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-UserType': 'USER',
              'X-SourceID': 'WEB',
              'X-ClientLocalIP': '192.168.0.2',
              'X-ClientPublicIP': '101.190.74.150',
              'X-MACAddress': '37:ab:f8:95:27:ff',
              'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelAPIKey
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + '/rest/auth/angelbroking/user/v1/loginByPassword';
          var body = {
            'clientcode': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelUserId,
            'password': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelPassword
          };
          return this.http.post(url, body, httpOptions);
          /* {
            "status": true,
            "message": "SUCCESS",
            "errorcode": "",
            "data": {
                "jwtToken": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkExNjUzMDciLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjA4NTY0MDU4LCJleHAiOjE2MDg1NzMwNTh9.VTx5ZmHagVRoPiS982j1LnIyNvpK7QIknwctRgO_QBlntYSAuWCuhEPzjC-rKJjqul2imxOvPLYZ6JVIuqVcPw",
                "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6IlJFRlJFU0gtVE9LRU4iLCJpYXQiOjE2MDg1NjQwNTh9.JWbUh1b1XcqLQUJzWr270DrFSsIjrZe4X4d6iDdgpjmy6p_AYt38qJukRuuNekztfvrwyOPVw3j8ni5H8xvOBQ",
                "feedToken": "1168502830"
            }
          } */
        }
      }, {
        key: "getFunds",
        value: function getFunds(access_token) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: 'Bearer ' + access_token,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-UserType': 'USER',
              'X-SourceID': 'WEB',
              'X-ClientLocalIP': '192.168.0.2',
              'X-ClientPublicIP': '101.190.74.150',
              'X-MACAddress': '37:ab:f8:95:27:ff',
              'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelAPIKey
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + '/rest/secure/angelbroking/user/v1/getRMS';
          return this.http.get(url, httpOptions);
          /* {
            "status": true,
            "message": "SUCCESS",
            "errorcode": "",
            "data": {
                "net": "80152.68437499999709",
                "availablecash": "80152.68437499999709",
                "availableintradaypayin": "100000",
                "availablelimitmargin": "0",
                "collateral": "0",
                "m2munrealized": "0",
                "m2mrealized": "0",
                "utiliseddebits": "19847.315624999999272",
                "utilisedspan": "0",
                "utilisedoptionpremium": "0",
                "utilisedholdingsales": "0",
                "utilisedexposure": "0",
                "utilisedturnover": "0",
                "utilisedpayout": "0"
            }
          } */
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
              Authorization: 'Bearer ' + access_token,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-UserType': 'USER',
              'X-SourceID': 'WEB',
              'X-ClientLocalIP': '192.168.0.2',
              'X-ClientPublicIP': '101.190.74.150',
              'X-MACAddress': '37:ab:f8:95:27:ff',
              'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelAPIKey
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + '/rest/secure/angelbroking/order/v1/getPosition';
          return this.http.get(url, httpOptions);
          /* {
            "status": true,
            "message": "SUCCESS",
            "errorcode": "",
            "data": [
                {
                    "symboltoken": "44068",
                    "symbolname": "NIFTY",
                    "instrumenttype": "OPTIDX",
                    "priceden": "1",
                    "pricenum": "1",
                    "genden": "1",
                    "gennum": "1",
                    "precision": "2",
                    "multiplier": "-1",
                    "boardlotsize": "1",
                    "exchange": "NFO",
                    "producttype": "INTRADAY",
                    "tradingsymbol": "NIFTY24DEC2015000CE",
                    "symbolgroup": "XX",
                    "strikeprice": "1500000",
                    "optiontype": "CE",
                    "expirydate": "24DEC2020",
                    "lotsize": "75",
                    "cfbuyqty": "0",
                    "cfsellqty": "0",
                    "cfbuyamount": "0",
                    "cfsellamount": "0",
                    "buyavgprice": "0",
                    "sellavgprice": "165",
                    "avgnetprice": "165",
                    "netvalue": "12375",
                    "netqty": "-75",
                    "totalbuyvalue": "0",
                    "totalsellvalue": "12375",
                    "cfbuyavgprice": "0",
                    "cfsellavgprice": "0",
                    "totalbuyavgprice": "0",
                    "totalsellavgprice": "165",
                    "netprice": "165",
                    "buyqty": "0",
                    "sellqty": "75",
                    "buyamount": "0",
                    "sellamount": "12375"
                }
            ]
          } */
        }
      }, {
        key: "getOrders",
        value: function getOrders(access_token) {
          /* return from(
            [JSON.parse(AppConstants.dummyResOrd)]
          ); */
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: 'Bearer ' + access_token,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-UserType': 'USER',
              'X-SourceID': 'WEB',
              'X-ClientLocalIP': '192.168.0.2',
              'X-ClientPublicIP': '101.190.74.150',
              'X-MACAddress': '37:ab:f8:95:27:ff',
              'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelAPIKey
            }),
            responseType: 'json'
          };
          var url = this.baseUrl + '/rest/secure/angelbroking/order/v1/getOrderBook';
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

      return AngelService;
    }();

    AngelService.ɵfac = function AngelService_Factory(t) {
      return new (t || AngelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_4__["AngelWebsocketService"]));
    };

    AngelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AngelService,
      factory: AngelService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angelwebsocket_service__WEBPACK_IMPORTED_MODULE_4__["AngelWebsocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/angelwebsocket.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/common/angelwebsocket.service.ts ***!
    \**************************************************/

  /*! exports provided: AngelWebsocketService */

  /***/
  function srcAppCommonAngelwebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngelWebsocketService", function () {
      return AngelWebsocketService;
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


    var pako__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! pako */
    "./node_modules/pako/dist/pako.esm.mjs");
    /* harmony import */


    var _aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./aliceblue-parser.service */
    "./src/app/common/aliceblue-parser.service.ts"); //import * as smartapi from 'smartapi-javascript';


    var AngelWebsocketService = /*#__PURE__*/function () {
      function AngelWebsocketService(aliceblueParserService) {
        _classCallCheck(this, AngelWebsocketService);

        this.aliceblueParserService = aliceblueParserService;
        this.websocketEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.socket_endpoint = 'wss://omnefeeds.angelbroking.com/NestHtml5Mobile/socket/stream?';
        this.url2 = "wss://wsfeeds.angelbroking.com/NestHtml5Mobile/socket/stream";
      }

      _createClass(AngelWebsocketService, [{
        key: "isSocketConnected",
        value: function isSocketConnected() {
          if (this.websocket && this.websocket.OPEN === 1) {
            return true;
          }

          return false;
        }
      }, {
        key: "connect",
        value: function connect() {
          var _this37 = this;

          this.websocket = new WebSocket(this.socket_endpoint);
          this.websocket.binaryType = 'arraybuffer';

          this.websocket.onopen = function () {
            _this37.handleOnOpen(event);
          };

          this.websocket.onmessage = function (messageEvent) {
            _this37.handleOnMessage(messageEvent);
          };

          this.websocket.onerror = function (event) {
            _this37.handleOnError(event);
          };

          this.websocket.onclose = function (event) {
            _this37.handleOnClose(event);
          };
        }
      }, {
        key: "handleOnOpen",
        value: function handleOnOpen(event) {
          console.log('Opened Web Socket connection');
          /* if (AppConstants.SocketMode === 'aliceblue') {
            this.sendHeartbeat();
            this.sendInitialSubscription();
            this.websocketEvent$.next('connected');
          } */

          var _req = '{"task":"cn","channel":"","token":"' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelFeedToken + '","user": "' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelUserId + '","acctid":"' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelUserId + '"}';

          this.sendMessage(_req);
          this.sendHeartbeat();
        }
      }, {
        key: "sendHeartbeat",
        value: function sendHeartbeat() {
          var _this38 = this;

          this.heartbeatInterval = setInterval(function () {
            // console.log('sending heartbeat');
            var message = '{"task":"hb","channel":"","token":"' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelFeedToken + '","user": "' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelUserId + '","acctid":"' + _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].angelUserId + '"}';

            _this38.sendMessage(message);
          }, 59000);
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
          console.log('handleOnMessage', messageEvent, messageEvent.data); // console.log('handleOnMessage parse', JSON.parse(messageEvent.data));

          /* if (AppConstants.SocketMode === 'aliceblue') {
            this.aliceblueParserService.handleSocketMessage(messageEvent.data);
          } */

          var strData = atob(messageEvent.data); // Convert binary string to character-number array

          var charData = strData.split('').map(function (x) {
            return x.charCodeAt(0);
          }); // Turn number array into byte-array

          var binData = new Uint8Array(charData); // Pako magic

          var result = this._atos(pako__WEBPACK_IMPORTED_MODULE_4__["inflate"](binData));

          console.log('parsed', result);
          var json = JSON.parse(result)[0];

          if (json && json.msg === 'connected') {
            console.log('ANGEL WS CONNECTED'); // USDINR: cde_fo|1
            // NIFTY50: cde_fo|2 - not working

            /* let strwatchlistscrips = 'nse_fo|43315&nse_fo|38692'
            //let strwatchlistscrips = 'cde_fo|2'
            let subs = '{"task":"mw","channel":"' + strwatchlistscrips + '","token":"' + AppConstants.angelFeedToken + '","user": "' + AppConstants.angelUserId + '","acctid":"' + AppConstants.angelUserId + '"}';
            this.sendMessage(subs); */

            this.websocketEvent$.next('connected');
            /* strwatchlistscrips = 'nse_fo|38692'
            subs = '{"task":"mw","channel":"' + strwatchlistscrips + '","token":"' + AppConstants.angelFeedToken + '","user": "' + AppConstants.angelUserId + '","acctid":"' + AppConstants.angelUserId + '"}';
            this.sendMessage(subs); */
            // [{"tvalue":"12\/10\/2021 13:19:20","name":"tm"},{"to":"3484040944.50","lo":"38.65","e":"nse_fo","sp":"54.15","c":"78.30","ltp":"54.00","ltq":"50","tk":"43315","bs":"450","ltt":"12\/10\/2021 13:19:19","tsq":"1385600","v":"61349550","bp":"54.00","cng":"-24.30","bq":"150","ap":"56.79","nc":"-31.0345","name":"sf","tbq":"749350"}]
            // [{"e":"nse_fo","name":"sf","ltp":"54.00","ltq":"50","tk":"43315","ltt":"NA"}]
            // [{"to":"23800815.00","lo":"01.75","e":"nse_fo","sp":"02.00","c":"02.60","ltp":"01.95","ltq":"50","tk":"38692","bs":"21500","ltt":"12\/10\/2021 13:19:13","tsq":"361500","v":"9958500","bp":"01.95","cng":"-00.65","bq":"108350","ap":"02.39","nc":"-25.00","name":"sf","tbq":"1945850"},{"to":"3484075018.50","lo":"38.65","e":"nse_fo","sp":"54.05","c":"78.30","ltp":"53.95","ltq":"100","tk":"43315","bs":"1800","ltt":"12\/10\/2021 13:19:20","tsq":"1390250","v":"61350150","bp":"53.90","cng":"-24.35","bq":"700","ap":"56.79","nc":"-31.0983","name":"sf","tbq":"747150"}]
          }
        }
      }, {
        key: "_atos",
        value: function _atos(array) {
          var newarray = [];

          try {
            for (var i = 0; i < array.length; i++) {
              newarray.push(String.fromCharCode(array[i]));
            }
          } catch (e) {}

          return newarray.join('');
        }
      }, {
        key: "handleOnError",
        value: function handleOnError(event) {
          console.log('Error in WS connection', event);
        }
      }, {
        key: "handleOnClose",
        value: function handleOnClose(event) {
          var _this39 = this;

          console.log('Closed WS connection', event);
          clearInterval(this.heartbeatInterval);
          this.websocket = null;
          setTimeout(function () {
            if (_this39.websocket && _this39.websocket.OPEN === 1) {// ws connected
            } else {
              console.log('Reconnecting websocket');

              _this39.connect();
            }
          }, 2000);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message) {
          if (this.websocket && this.websocket.OPEN === 1) {
            console.log('Sending message over websocket: ' + message);
            this.websocket.send(message);
          } else {
            console.log('Cannot send the message. Socket is not yet opened or it has been closed - ', message);
          }
        }
      }]);

      return AngelWebsocketService;
    }();

    AngelWebsocketService.ɵfac = function AngelWebsocketService_Factory(t) {
      return new (t || AngelWebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_5__["AliceblueParserService"]));
    };

    AngelWebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AngelWebsocketService,
      factory: AngelWebsocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngelWebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_5__["AliceblueParserService"]
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

    AppConstants.SocketMode = 'aliceblue'; // angel

    AppConstants.RestMode = 'fyers';
    AppConstants.fyersAppId = 'FUU5Z8ICUH';
    AppConstants.fyersSecretId = 'IYF3LPXJ0X';
    AppConstants.angelUserId = 'A165307';
    AppConstants.angelPassword = 'scjFNB5iYLI';
    AppConstants.angelAPIKey = 'I5nI74Nm';
    AppConstants.angelFeedToken = '';
    AppConstants.angelJWTToken = '';
    AppConstants.angelRefreshToken = '';
    AppConstants.year = '22'; // TODO: make year 22 when 2022 year starts

    AppConstants.INTEREST_RATE = 6; // https://in.investing.com/rates-bonds/india-10-year-bond-yield-historical-data

    AppConstants.curr_positions_trades = [];
    AppConstants.isSimulatedStrategy = false;
    AppConstants.isProduction = true;
    AppConstants.numAlerts = 4;
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
      '21DEC': new Date(2021, 11, 30),
      '22JAN': new Date(2022, 0, 27),
      '22FEB': new Date(2022, 1, 24),
      '22MAR': new Date(2022, 2, 31)
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
      '21DEC': new Date(2021, 11, 29),
      '22JAN': new Date(2022, 0, 27),
      '22FEB': new Date(2022, 1, 24),
      '22MAR': new Date(2022, 2, 29)
    };
    AppConstants.holdings = {
      'NIFTY 50': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 17131,
        'qty': 109
      },
      'NIFTY BANK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 36938,
        'qty': 27
      },
      'ADANIPORTS': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ASIANPAINT': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 3098.95,
        'qty': 3
      },
      'AXISBANK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BAJAJ-AUTO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BAJAJFINSV': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 17013.7,
        'qty': 1
      },
      'BAJFINANCE': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BHARTIARTL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 745,
        'qty': 13
      },
      'BPCL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BRITANNIA': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'CIPLA': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 969.8,
        'qty': 10
      },
      'COALINDIA': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'DIVISLAB': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 4888.55,
        'qty': 2
      },
      'DRREDDY': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'EICHERMOT': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'GRASIM': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 1733.95,
        'qty': 6
      },
      'HCLTECH': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HDFC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HDFCBANK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HDFCLIFE': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HEROMOTOCO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HINDALCO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HINDUNILVR': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ICICIBANK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'INDUSINDBK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'INFY': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 1718.17,
        'qty': 12
      },
      'IOC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ITC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'JSWSTEEL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'KOTAKBANK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 1962,
        'qty': 5
      },
      'LT': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'M&M': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'MARUTI': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'NESTLEIND': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 18927.05,
        'qty': 1
      },
      'NTPC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ONGC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'POWERGRID': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 202.1,
        'qty': 45
      },
      'RELIANCE': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 2481,
        'qty': 4
      },
      'SBILIFE': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 1183.8,
        'qty': 8
      },
      'SBIN': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'SHREECEM': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'SUNPHARMA': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'TATACONSUM': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'TATAMOTORS': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'TATASTEEL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'TCS': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 3544.32,
        'qty': 6
      },
      'TECHM': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 1577.74,
        'qty': 13
      },
      'TITAN': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 2330.5,
        'qty': 4
      },
      'ULTRACEMCO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'UPL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'WIPRO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'RADICO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 1068.1,
        'qty': 9
      },
      'VBL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': 901.7,
        'qty': 11
      },
      'ACC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ADANIENT': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ADANIGREEN': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ADANITRANS': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'AMBUJACEM': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'APOLLOHOSP': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'AUROPHARMA': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BAJAJHLDNG': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BANDHANBNK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BERGEPAINT': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BIOCON': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'BOSCHLTD': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'CADILAHC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'CHOLAFIN': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'COLPAL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'DABUR': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'DLF': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'DMART': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'GAIL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'GLAND': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'GODREJCP': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HAVELLS': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HDFCAMC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'HINDPETRO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'ICICIPRULI': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'IGL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'INDIGO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'INDUSTOWER': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'JINDALSTEL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'JUBLFOOD': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'LTI': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'LUPIN': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'MARICO': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'MCDOWELL-N': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'MUTHOOTFIN': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'NAUKRI': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'NMDC': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'PEL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'PGHH': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'PIDILITIND': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'PIIND': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'PNB': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'SAIL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'SBICARD': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'SIEMENS': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'TORNTPHARM': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'VEDL': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      },
      'YESBANK': {
        'ltp': null,
        'volume': null,
        'oned': null,
        'onew': null,
        'onem': null,
        'threem': null,
        'fiftytwow': null,
        'avgp': null,
        'qty': null
      }
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
  "./src/app/common/holdings.service.ts":
  /*!********************************************!*\
    !*** ./src/app/common/holdings.service.ts ***!
    \********************************************/

  /*! exports provided: HoldingsService */

  /***/
  function srcAppCommonHoldingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoldingsService", function () {
      return HoldingsService;
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
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HoldingsService = /*#__PURE__*/function () {
      function HoldingsService(http) {
        _classCallCheck(this, HoldingsService);

        this.http = http;
        /*
        go to https://www.nseindia.com/
        in the search bar, search for instrument like TCS
        on instrument's page, scroll down and select Historical Data tab
        select 3M and click Filter
        get the url from Network tab in dev console
        example: https://www.nseindia.com/api/historical/cm/equity?symbol=TCS&series=[%22EQ%22]&from=21-09-2021&to=21-12-2021
         for nf, bnf:
        gives 1 year by default:
        https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI
        https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEBANK
        also for stocks, but does not give 52W high:
        https://query1.finance.yahoo.com/v8/finance/chart/TCS.NS
        for providing range:
        https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI?formatted=true&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&period1=1632182400&period2=1640044800
        https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEBANK?formatted=true&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&period1=1632182400&period2=1640044800
        or get the data from https://www1.nseindia.com/products/content/equities/indices/historical_index_data.htm
        */

        /*
        let u1 = 'https://www.nseindia.com/api/historical/cm/equity?symbol=TCS&series=[%22EQ%22]&from=21-09-2021&to=21-12-2021';
        this.http.get(u1, httpOptions).subscribe((res: any) => {
          console.log('nse', res);
        });
        let u2 = 'https://www.nseindia.com/api/historical/cm/equity?symbol=INFY&series=[%22EQ%22]&from=21-09-2021&to=21-12-2021';
        this.http.get(u2, httpOptions).subscribe((res: any) => {
          console.log('nse2', res);
        });
        let u3 = 'https://www.nseindia.com/api/historical/cm/equity?symbol=GRASIM&series=[%22EQ%22]&from=21-09-2021&to=21-12-2021';
        this.http.get(u3, httpOptions).subscribe((res: any) => {
          console.log('nse3', res);
        });
        */

        this.holdingsMap = {
          'ADANIPORTS.NS': {
            'holding': false,
            'average': null
          },
          'ASIANPAINT.NS': {
            'holding': true,
            'average': 3098.95
          }
        };
      }

      _createClass(HoldingsService, [{
        key: "loadHoldings",
        value: function loadHoldings() {
          var portfolio_return = 0;
          var holdings = [];
          var total_investment = 0;
          var current_value = 0; // console.log(AppConstants.holdings);

          for (var key in _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings) {
            if (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings.hasOwnProperty(key)) {
              // doing here and not in fetchStockHistoricalData to avoid overwriting of average price in appconstants
              var avgp = null;

              if (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['avgp']) {
                avgp = (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['ltp'] - _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['avgp']) * 100 / _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['avgp'];
                avgp = Math.round((avgp + 0.00001) * 100) / 100;
                var avgp_adj = _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['avgp'];
                var ltp_adj = _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['ltp'];

                if (key === 'NIFTY 50') {
                  avgp_adj = avgp_adj / 92.4;
                  ltp_adj = ltp_adj / 92.4;
                }

                if (key === 'NIFTY BANK') {
                  avgp_adj = avgp_adj / 100;
                  ltp_adj = ltp_adj / 100;
                }

                total_investment += avgp_adj * _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['qty'];
                current_value += ltp_adj * _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['qty'];
              }

              holdings.push({
                scrip: key,
                volume: _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['volume'],
                ltp: _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['ltp'],
                oned: _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['oned'],
                onew: _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['onew'],
                onem: _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['onem'],
                threem: _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['threem'],
                fiftytwow: _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['fiftytwow'],
                avgp: avgp
              });
            }
          }

          portfolio_return = (current_value - total_investment) * 100 / total_investment;
          portfolio_return = Math.round((portfolio_return + 0.00001) * 100) / 100;
          total_investment = Math.round(total_investment);
          current_value = Math.round(current_value); // console.log(total_investment, current_value);

          return {
            'portfolio_return': portfolio_return,
            'holdings': holdings,
            'total_inv': total_investment,
            'current_val': current_value
          };
        }
      }, {
        key: "fetchStocksData",
        value: function fetchStocksData() {
          var _this40 = this;

          var httpOptions = {
            responseType: 'json'
          };
          var nifty50stocksURL = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050';
          /* this.http.get(indicesURL, httpOptions).subscribe((res: any) => {
            console.log('ind', res);
          }); */

          this.http.get(nifty50stocksURL, httpOptions).subscribe(function (res) {
            console.log('now stocks data: ', res);
            var resArr = res.data;
            resArr.forEach(function (element) {
              if (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings.hasOwnProperty(element.symbol)) {
                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.symbol]['ltp'] = Math.round((element.lastPrice + 0.00001) * 100) / 100;
                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.symbol]['volume'] = Math.round((element.totalTradedVolume + 0.00001) * 100) / 100;
                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.symbol]['oned'] = Math.round((element.pChange + 0.00001) * 100) / 100; // AppConstants.holdings[element.symbol]['onew'] = Math.round((element.nearWKH + 0.00001) * 100) / 100;

                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.symbol]['onem'] = Math.round((element.perChange30d + 0.00001) * 100) / 100;
                var fiftytwow = (element.lastPrice - element.yearHigh) * 100 / element.yearHigh;
                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.symbol]['fiftytwow'] = Math.round((fiftytwow + 0.00001) * 100) / 100;
              }
            });
          });
          setTimeout(function () {
            _this40.fetchIndicesData();
          }, 2000);
          setTimeout(function () {
            _this40.fetchHistoricalData();
          }, 4000); // console.log(AppConstants.holdings);
        }
      }, {
        key: "fetchIndicesData",
        value: function fetchIndicesData() {
          var httpOptions = {
            responseType: 'json'
          };
          var indicesURL = 'https://www.nseindia.com/api/allIndices';
          this.http.get(indicesURL, httpOptions).subscribe(function (res) {
            console.log('indices data: ', res);
            var resArr = res.data;
            resArr.forEach(function (element) {
              if (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings.hasOwnProperty(element.index)) {
                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.index]['ltp'] = Math.round((element.last + 0.00001) * 100) / 100;
                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.index]['oned'] = Math.round((element.percentChange + 0.00001) * 100) / 100; // AppConstants.holdings[element.symbol]['onew'] = Math.round((element.nearWKH + 0.00001) * 100) / 100;

                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.index]['onem'] = Math.round((element.perChange30d + 0.00001) * 100) / 100;
                var fiftytwow = (element.last - element.yearHigh) * 100 / element.yearHigh;
                _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[element.index]['fiftytwow'] = Math.round((fiftytwow + 0.00001) * 100) / 100;
              }
            });
          });
        }
      }, {
        key: "fetchHistoricalData",
        value: function fetchHistoricalData() {
          var _this41 = this;

          var httpOptions = {
            responseType: 'json'
          };
          var date_now = new Date();
          var date_prev = new Date();
          date_prev.setDate(date_prev.getDate() - 150); // let stockHistoricalURL = 'https://www.nseindia.com/api/historical/cm/equity?symbol=TCS&series=[%22EQ%22]&from=21-09-2021&to=21-12-2021';

          var stockHistoricalURL = 'https://query1.finance.yahoo.com/v8/finance/chart/';

          var _loop = function _loop(key) {
            if (_application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings.hasOwnProperty(key)) {
              // console.log(key + " -> " + this.tempmonthlyExpiryDates[key] + ' ' + enteredDate);
              // https://query1.finance.yahoo.com/v7/finance/quote?symbols=RADICO.NS&fields=exchangeTimezoneName,exchangeTimezoneShortName,regularMarketTime,gmtOffSetMilliseconds&region=US&lang=en-US
              // https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&crumb=DVvEVKnjAxW&lang=en-US&region=US&symbols=RADICO.NS&fields=messageBoardId%2ClongName%2CshortName%2CmarketCap%2CunderlyingSymbol%2CunderlyingExchangeSymbol%2CheadSymbolAsString%2CregularMarketPrice%2CregularMarketChange%2CregularMarketChangePercent%2CregularMarketVolume%2Cuuid%2CregularMarketOpen%2CfiftyTwoWeekLow%2CfiftyTwoWeekHigh%2CtoCurrency%2CfromCurrency%2CtoExchange%2CfromExchange&corsDomain=finance.yahoo.com
              var k = key + '.NS';

              if (k === 'NIFTY 50.NS') {
                k = '%5ENSEI';
              }

              if (k === 'NIFTY BANK.NS') {
                k = '%5ENSEBANK';
              } //let stockUrl = stockHistoricalURL + k + '?formatted=true&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&period1=';
              //stockUrl += Math.floor(date_prev.getTime() / 1000) + '&period2=' + Math.floor(date_now.getTime() / 1000);


              var stockUrl = stockHistoricalURL + k + '?formatted=true&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&range=1y';

              _this41.http.get(stockUrl, httpOptions).subscribe(function (res) {
                if (res) {
                  // console.log(res.chart.result[0].indicators.adjclose[0].adjclose[102]);
                  // console.log(res);
                  var closeArr = res.chart.result[0].indicators.adjclose[0].adjclose;

                  if (closeArr instanceof Array) {
                    var ltp = _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['ltp'];

                    if (!ltp) {
                      ltp = res.chart.result[0].meta.regularMarketPrice;
                      _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['ltp'] = ltp;
                      var currdate = res.chart.result[0].meta.regularMarketTime;
                      var index_oned = 1;
                      var timestamps = res.chart.result[0].timestamp;

                      if (new Date(currdate * 1000).getDate() === new Date(timestamps[timestamps.length - 1] * 1000).getDate()) {
                        index_oned = 2;
                      }

                      var one = closeArr[closeArr.length - index_oned];
                      one = (ltp - one) * 100 / one;
                      one = Math.round((one + 0.00001) * 100) / 100;
                      _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['oned'] = one;
                      var thirty = closeArr[closeArr.length - 30];
                      thirty = (ltp - thirty) * 100 / thirty;
                      thirty = Math.round((thirty + 0.00001) * 100) / 100;
                      _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['onem'] = thirty;
                      var highArr = res.chart.result[0].indicators.quote[0].high;
                      var max_high = Math.max.apply(null, highArr);
                      var fiftytwow = (ltp - max_high) * 100 / max_high;
                      _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['fiftytwow'] = Math.round((fiftytwow + 0.00001) * 100) / 100; // console.log(ltp, one, thirty);
                    }

                    var seven = closeArr[closeArr.length - 7];
                    seven = (ltp - seven) * 100 / seven;
                    seven = Math.round((seven + 0.00001) * 100) / 100;
                    var ninety = closeArr[closeArr.length - 90];
                    ninety = (ltp - ninety) * 100 / ninety;
                    ninety = Math.round((ninety + 0.00001) * 100) / 100;
                    console.log(key, seven, ninety);
                    _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['onew'] = seven;
                    _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings[key]['threem'] = ninety;
                  }
                }
              });
            }
          };

          for (var key in _application_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].holdings) {
            _loop(key);
          }
        }
      }]);

      return HoldingsService;
    }();

    HoldingsService.ɵfac = function HoldingsService_Factory(t) {
      return new (t || HoldingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    HoldingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HoldingsService,
      factory: HoldingsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoldingsService, [{
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

    MapService.simulateData = {};

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

  /*! exports provided: IntradayData, Position, OrderPasted, Order, PlaceOrder, AliceblueInstrument, Instrument, AliceMarketData, AliceBlueLiveFeedType, AliceBlueWsFrameMode, PositionTypeForPayOff */

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


    __webpack_require__.d(__webpack_exports__, "OrderPasted", function () {
      return OrderPasted;
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

    var OrderPasted = function OrderPasted() {
      _classCallCheck(this, OrderPasted);
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
    "./src/app/common/aliceblue-parser.service.ts"); //import * as smartapi from 'smartapi-javascript';


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
          var _this42 = this;

          this.access_token = access_token;
          this.websocket = new WebSocket(this.socket_endpoint + access_token);
          this.websocket.binaryType = 'arraybuffer';

          this.websocket.onopen = function () {
            _this42.handleOnOpen(event);
          };

          this.websocket.onmessage = function (messageEvent) {
            _this42.handleOnMessage(messageEvent);
          };

          this.websocket.onerror = function (event) {
            _this42.handleOnError(event);
          };

          this.websocket.onclose = function (event) {
            _this42.handleOnClose(event);
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
          var _this43 = this;

          this.heartbeatInterval = setInterval(function () {
            // console.log('sending heartbeat');
            var message = JSON.stringify({
              "a": "h",
              "v": [],
              "m": ""
            });

            _this43.sendMessage(message);
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
          var _this44 = this;

          console.log('Closed WS connection', event);
          clearInterval(this.heartbeatInterval);
          this.websocket = null;
          setTimeout(function () {
            console.log('Reconnecting websocket');

            _this44.connect(_this44.access_token);
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