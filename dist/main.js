(self["webpackChunktrades_a"] = self["webpackChunktrades_a"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _common_application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/application.constant */ 8001);
/* harmony import */ var _common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/models */ 8077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ 900);
/* harmony import */ var _common_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/map.service */ 397);
/* harmony import */ var _common_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/websocket.service */ 4440);
/* harmony import */ var _chart_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/chart.service */ 2118);
/* harmony import */ var _common_angel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/angel.service */ 1580);
/* harmony import */ var _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/angelwebsocket.service */ 4991);
/* harmony import */ var _common_holdings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/holdings.service */ 3609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/chart.component */ 8748);














function AppComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AppComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Websocket is connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AppComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Websocket is not connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "text-danger": a0, "text-success": a1 }; };
function AppComponent_tbody_102_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const pos_r11 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r13.includePosPnLInSum1(pos_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const pos_r11 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r15.includePosPnLInSum2(pos_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const pos_r11 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r16.includePosPnLInSum3(pos_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tbody_102_tr_1_Template_input_change_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const pos_r11 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r17.includePosPnLInSum4(pos_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_tbody_102_tr_1_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const pos_r11 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r18.exitPosition(pos_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pos_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](pos_r11.scrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](pos_r11.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](pos_r11.netQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](pos_r11.buyAvg);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](pos_r11.sellAvg);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r10.getPosLTP(pos_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](10, _c0, pos_r11.pnl < 0, pos_r11.pnl > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r10.getPosPnL(pos_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "pos-qty-", pos_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r10.disable_order_buttons);
} }
function AppComponent_tbody_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_tbody_102_tr_1_Template, 29, 13, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.positions);
} }
function AppComponent_tbody_135_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ord_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.scrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r19.getOrderStatus(ord_r20.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.side === 1 ? "B" : "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r19.getOrderType(ord_r20.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.limit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.stop);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.tradedPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.orderDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ord_r20.message);
} }
function AppComponent_tbody_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_tbody_135_tr_1_Template, 21, 10, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.orders);
} }
const _c1 = function (a0) { return { "stockHolding": a0 }; };
const _c2 = function (a0, a1, a2) { return { "green": a0, "red": a1, "bold-higher": a2 }; };
function AppComponent_tr_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r22 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c1, ctx_r5.isStockHolding(h_r22.scrip)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.scrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.ltp);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](21, _c2, h_r22.oned > 0, h_r22.oned < 0, h_r22.oned > 2 || h_r22.oned < -2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.oned);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](25, _c2, h_r22.onew > 0, h_r22.onew < 0, h_r22.onew > 5 || h_r22.onew < -5));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.onew);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](29, _c2, h_r22.onem > 0, h_r22.onem < 0, h_r22.onem > 7 || h_r22.onem < -7));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.onem);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](33, _c2, h_r22.threem > 0, h_r22.threem < 0, h_r22.threem > 10 || h_r22.threem < -10));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.threem);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](37, _c2, h_r22.fiftytwow > 0, h_r22.fiftytwow < 0, h_r22.fiftytwow > 10 || h_r22.fiftytwow < -10));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.fiftytwow);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](41, _c2, h_r22.avgp > 0, h_r22.avgp < 0, h_r22.avgp > 5 || h_r22.avgp < -5));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.avgp);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](45, _c2, h_r22.support > 0, h_r22.support < 0, h_r22.support > 5 || h_r22.support < -5));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.support);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](49, _c2, h_r22.resistance > 0, h_r22.resistance < 0, h_r22.resistance > 5 || h_r22.resistance < -5));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](h_r22.resistance);
} }
function AppComponent_div_215_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sug_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate4"](" ", sug_r26.strikeCE, "CE ", sug_r26.ltpCE, " , ", sug_r26.strikePE, "PE ", sug_r26.ltpPE, " ");
} }
function AppComponent_div_215_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sug_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", sug_r28.action, ": ", sug_r28.strike, " ", sug_r28.ltp, " ");
} }
function AppComponent_div_215_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Strategy PnL: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AppComponent_div_215_span_5_Template, 2, 4, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AppComponent_div_215_span_6_Template, 2, 3, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Combined SL: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_div_215_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r30.combined_SL = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](7, _c0, ctx_r6.getStrategyPnL() < 0, ctx_r6.getStrategyPnL() > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r6.getStrategyPnL(), " , ", ctx_r6.strategyPointsProfit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.suggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.adjust_sugg);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Current Premium: ", ctx_r6.combined_premium, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r6.combined_SL);
} }
function AppComponent_tr_295_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oc_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r34.getQtyOfStrikeInStrategy(oc_r32.strike + "CE"), " (", ctx_r34.getCostOfStrikeInStrategy(oc_r32.strike + "CE"), ") ");
} }
function AppComponent_tr_295_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r35.getSpotValue(), " ");
} }
function AppComponent_tr_295_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oc_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r36.getQtyOfStrikeInStrategy(oc_r32.strike + "PE"), " (", ctx_r36.getCostOfStrikeInStrategy(oc_r32.strike + "PE"), ") ");
} }
const _c3 = function (a0) { return { "ocStrikeStrategyCE": a0 }; };
const _c4 = function (a0, a1) { return { "table-warning": a0, "oc-strike": a1 }; };
const _c5 = function (a0) { return { "ocStrikeStrategyPE": a0 }; };
function AppComponent_tr_295_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tr_295_Template_input_change_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r39.includeInStrangleFn(oc_r32.symbol + "CE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tr_295_Template_input_change_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r41.includeInDebitSpreadFn(oc_r32.symbol + "CE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_tr_295_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r42.addToStrategyBuilder(oc_r32, "CE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "SB");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_tr_295_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r43.addToChart(oc_r32, "CE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, AppComponent_tr_295_div_17_Template, 2, 2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, AppComponent_tr_295_div_20_Template, 2, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, AppComponent_tr_295_div_23_Template, 2, 2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tr_295_Template_input_change_31_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r44.includeInStrangleFn(oc_r32.symbol + "PE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_tr_295_Template_input_change_33_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r45.includeInDebitSpreadFn(oc_r32.symbol + "PE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_tr_295_Template_button_click_34_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r46.addToStrategyBuilder(oc_r32, "PE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "SB");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_tr_295_Template_button_click_36_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const oc_r32 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r47.addToChart(oc_r32, "PE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oc_r32 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](21, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.getVolume(oc_r32.symbol + "CE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](23, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.getDelta(oc_r32.symbol, oc_r32.strike, "CE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](25, _c3, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.getLtp(oc_r32.symbol + "CE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "CE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](27, _c4, ctx_r7.isSpotStrike(oc_r32.strike), !ctx_r7.isSpotStrike(oc_r32.strike)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", oc_r32.strike, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.isSpotStrike(oc_r32.strike));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](30, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.getLtp(oc_r32.symbol + "PE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](32, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.getDelta(oc_r32.symbol, oc_r32.strike, "PE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](34, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.getVolume(oc_r32.symbol + "PE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](36, _c5, ctx_r7.isStrikeInCurrStrategy(oc_r32.strike + "PE")));
} }
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
class AppComponent {
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
    constructor(route, appService, mapService, websocketService, chartService, angelService, angelWS, holdingsService
    /* private cdr: ChangeDetectorRef */ ) {
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
        this.qty_default = 200;
        this.historical_append = 'WK';
        this.zerodha_auth = 'enctoken Sr2gbgdlEM7yRuGdXWtOu9YrTyyuMHHqBJ+F4N1UXSDmSpEH8UrrAkE9Ii7DCbAb3CkRMtRVhbcnC9Qv+rY7LcLVgyz2lGZg4VqnFFnl19PrXXPH7qxXuA==';
        this.zerodha_marketwatch = '{"status":"success","data":[{"id":108696388,"name":"1","items":[{"id":673211353,"weight":1,"tradingsymbol":"INDIA VIX","instrument_token":264969,"segment":"INDICES","exchange":"NSE","expiry":""},{"id":816421144,"weight":2,"tradingsymbol":"NIFTY 50","instrument_token":256265,"segment":"INDICES","exchange":"NSE","expiry":""},{"id":903805357,"weight":6,"tradingsymbol":"NIFTYBEES","instrument_token":2707457,"segment":"NSE","exchange":"NSE","expiry":""},{"id":915508605,"weight":7,"tradingsymbol":"ICICINIFTY","instrument_token":7565569,"segment":"NSE","exchange":"NSE","expiry":""},{"id":915630019,"weight":8,"tradingsymbol":"KOTAKBKETF","instrument_token":1497857,"segment":"NSE","exchange":"NSE","expiry":""},{"id":915630692,"weight":9,"tradingsymbol":"KOTAKNIFTY","instrument_token":4634113,"segment":"NSE","exchange":"NSE","expiry":""},{"id":916079116,"weight":10,"tradingsymbol":"SETFNIF50","instrument_token":2605057,"segment":"NSE","exchange":"NSE","expiry":""},{"id":2963445776,"weight":11,"tradingsymbol":"LIQUIDBEES","instrument_token":2817537,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3185499175,"weight":12,"tradingsymbol":"BANKBEES","instrument_token":2928385,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3325591374,"weight":13,"tradingsymbol":"NIFTY BANK","instrument_token":260105,"segment":"INDICES","exchange":"NSE","expiry":""}]},{"id":108696392,"name":"Watchlist 2","items":[{"id":2542203093,"weight":19,"tradingsymbol":"INDIA VIX","instrument_token":264969,"segment":"INDICES","exchange":"NSE","expiry":""},{"id":3380116369,"weight":20,"tradingsymbol":"BANKNIFTY2211340400CE","instrument_token":11244546,"segment":"NFO-OPT","exchange":"NFO","expiry":"2022-01-13"},{"id":3384256979,"weight":21,"tradingsymbol":"BANKNIFTY2211340500CE","instrument_token":11245570,"segment":"NFO-OPT","exchange":"NFO","expiry":"2022-01-13"},{"id":3384259326,"weight":22,"tradingsymbol":"BANKNIFTY2211340600CE","instrument_token":11246082,"segment":"NFO-OPT","exchange":"NFO","expiry":"2022-01-13"},{"id":3384262349,"weight":23,"tradingsymbol":"BANKNIFTY2211340700CE","instrument_token":11246594,"segment":"NFO-OPT","exchange":"NFO","expiry":"2022-01-13"},{"id":3384265324,"weight":24,"tradingsymbol":"BANKNIFTY2211340800CE","instrument_token":11247106,"segment":"NFO-OPT","exchange":"NFO","expiry":"2022-01-13"},{"id":3384267715,"weight":25,"tradingsymbol":"BANKNIFTY2211340900CE","instrument_token":11249922,"segment":"NFO-OPT","exchange":"NFO","expiry":"2022-01-13"},{"id":3384270013,"weight":26,"tradingsymbol":"BANKNIFTY2211341000CE","instrument_token":11250434,"segment":"NFO-OPT","exchange":"NFO","expiry":"2022-01-13"}]},{"id":108696391,"name":"3","items":[]},{"id":108696390,"name":"4","items":[{"id":3350520016,"weight":3,"tradingsymbol":"USDINR22107FUT","instrument_token":1838339,"segment":"CDS-FUT","exchange":"CDS","expiry":"2022-01-07"},{"id":3352324563,"weight":4,"tradingsymbol":"USDINR2210774.75CE","instrument_token":2084099,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3352325735,"weight":5,"tradingsymbol":"USDINR22JAN74.75CE","instrument_token":2331907,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-27"},{"id":3357694089,"weight":6,"tradingsymbol":"USDINR2210774PE","instrument_token":2082819,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3352326484,"weight":6,"tradingsymbol":"USDINR2211474.75CE","instrument_token":2277379,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-14"},{"id":3352327889,"weight":7,"tradingsymbol":"USDINR22JAN74.5CE","instrument_token":2331395,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-27"},{"id":3352328068,"weight":8,"tradingsymbol":"USDINR2210774.5CE","instrument_token":2083587,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3352328218,"weight":9,"tradingsymbol":"USDINR2211474.5CE","instrument_token":2274563,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-14"},{"id":3352330098,"weight":10,"tradingsymbol":"USDINR22JAN74.25PE","instrument_token":2331139,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-27"},{"id":3352330606,"weight":11,"tradingsymbol":"USDINR2210774.25PE","instrument_token":2083331,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3352330853,"weight":12,"tradingsymbol":"USDINR2211474.25PE","instrument_token":2228483,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-14"},{"id":3352331692,"weight":13,"tradingsymbol":"USDINR22JAN74.5PE","instrument_token":2331651,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-27"},{"id":3352331872,"weight":14,"tradingsymbol":"USDINR2210774.5PE","instrument_token":2083843,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3352332088,"weight":15,"tradingsymbol":"USDINR2211474.5PE","instrument_token":2275843,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-14"}]},{"id":108696389,"name":"5","items":[{"id":3348892336,"weight":0,"tradingsymbol":"USDINR2210775.5CE","instrument_token":2085635,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348944443,"weight":1,"tradingsymbol":"USDINR2210775CE","instrument_token":2084611,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348963455,"weight":2,"tradingsymbol":"USDINR2210776.5CE","instrument_token":2087683,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348963507,"weight":3,"tradingsymbol":"USDINR2210776.25CE","instrument_token":2087171,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348963586,"weight":4,"tradingsymbol":"USDINR2210776CE","instrument_token":2086659,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348963744,"weight":5,"tradingsymbol":"USDINR2210775.75CE","instrument_token":2086147,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348963890,"weight":6,"tradingsymbol":"USDINR2210775.25CE","instrument_token":2085123,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964092,"weight":7,"tradingsymbol":"USDINR2210774.25CE","instrument_token":2083075,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964200,"weight":8,"tradingsymbol":"USDINR2210774.75CE","instrument_token":2084099,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964250,"weight":9,"tradingsymbol":"USDINR2210774.5CE","instrument_token":2083587,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964298,"weight":10,"tradingsymbol":"USDINR2210774CE","instrument_token":2082563,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964379,"weight":11,"tradingsymbol":"USDINR2210773.75CE","instrument_token":2082051,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964434,"weight":12,"tradingsymbol":"USDINR2210773.5CE","instrument_token":2081539,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964547,"weight":13,"tradingsymbol":"USDINR2210773.25CE","instrument_token":2081027,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964591,"weight":14,"tradingsymbol":"USDINR2210773CE","instrument_token":2080515,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964657,"weight":15,"tradingsymbol":"USDINR2210772.75CE","instrument_token":2080003,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964687,"weight":16,"tradingsymbol":"USDINR2210772.5CE","instrument_token":2079491,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964729,"weight":17,"tradingsymbol":"USDINR2210772.25CE","instrument_token":2078979,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348967699,"weight":18,"tradingsymbol":"USDINR2210776.25PE","instrument_token":2087427,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348965608,"weight":18,"tradingsymbol":"USDINR2210776PE","instrument_token":2086915,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348964780,"weight":18,"tradingsymbol":"USDINR2210772CE","instrument_token":2078467,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348965675,"weight":19,"tradingsymbol":"USDINR2210775.75PE","instrument_token":2086403,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348967763,"weight":19,"tradingsymbol":"USDINR2210776.5PE","instrument_token":2087939,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348965724,"weight":20,"tradingsymbol":"USDINR2210775.5PE","instrument_token":2085891,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348965816,"weight":21,"tradingsymbol":"USDINR2210775.25PE","instrument_token":2085379,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348965993,"weight":22,"tradingsymbol":"USDINR2210775PE","instrument_token":2084867,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966094,"weight":23,"tradingsymbol":"USDINR2210774.75PE","instrument_token":2084355,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966143,"weight":24,"tradingsymbol":"USDINR2210774.5PE","instrument_token":2083843,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966207,"weight":25,"tradingsymbol":"USDINR2210774.25PE","instrument_token":2083331,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966278,"weight":26,"tradingsymbol":"USDINR2210774PE","instrument_token":2082819,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966366,"weight":27,"tradingsymbol":"USDINR2210773.75PE","instrument_token":2082307,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966427,"weight":28,"tradingsymbol":"USDINR2210773.5PE","instrument_token":2081795,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966465,"weight":29,"tradingsymbol":"USDINR2210773.25PE","instrument_token":2081283,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966553,"weight":30,"tradingsymbol":"USDINR2210773PE","instrument_token":2080771,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966621,"weight":31,"tradingsymbol":"USDINR2210772.75PE","instrument_token":2080259,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966683,"weight":32,"tradingsymbol":"USDINR2210772.5PE","instrument_token":2079747,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966740,"weight":33,"tradingsymbol":"USDINR2210772.25PE","instrument_token":2079235,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3348966840,"weight":34,"tradingsymbol":"USDINR2210772PE","instrument_token":2078723,"segment":"CDS-OPT","exchange":"CDS","expiry":"2022-01-07"},{"id":3349002726,"weight":35,"tradingsymbol":"USDINR22107FUT","instrument_token":1838339,"segment":"CDS-FUT","exchange":"CDS","expiry":"2022-01-07"}]},{"id":1432148480,"name":"MW 6","items":[{"id":3153225189,"weight":4,"tradingsymbol":"INDIA VIX","instrument_token":264969,"segment":"INDICES","exchange":"NSE","expiry":""}]},{"id":1439682075,"name":"MW 7","items":[{"id":3160458234,"weight":1,"tradingsymbol":"INDIA VIX","instrument_token":264969,"segment":"INDICES","exchange":"NSE","expiry":""},{"id":3186435109,"weight":2,"tradingsymbol":"NIFTYBEES","instrument_token":2707457,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186401941,"weight":3,"tradingsymbol":"CIPLA","instrument_token":177665,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186406251,"weight":4,"tradingsymbol":"DIVISLAB","instrument_token":2800641,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186408123,"weight":5,"tradingsymbol":"TCS","instrument_token":2953217,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186408254,"weight":6,"tradingsymbol":"INFY","instrument_token":408065,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186414542,"weight":7,"tradingsymbol":"TECHM","instrument_token":3465729,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186425692,"weight":8,"tradingsymbol":"RELIANCE","instrument_token":738561,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186409602,"weight":9,"tradingsymbol":"ASIANPAINT","instrument_token":60417,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186428516,"weight":10,"tradingsymbol":"BHARTIARTL","instrument_token":2714625,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186410885,"weight":11,"tradingsymbol":"POWERGRID","instrument_token":3834113,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186411996,"weight":12,"tradingsymbol":"NESTLEIND","instrument_token":4598529,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186427537,"weight":13,"tradingsymbol":"KOTAKBANK","instrument_token":492033,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3186565769,"weight":14,"tradingsymbol":"BAJAJFINSV","instrument_token":4268801,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3261642640,"weight":15,"tradingsymbol":"SBILIFE","instrument_token":5582849,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3261648555,"weight":16,"tradingsymbol":"LT","instrument_token":2939649,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3261672641,"weight":17,"tradingsymbol":"GRASIM","instrument_token":315393,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3261674006,"weight":18,"tradingsymbol":"TITAN","instrument_token":897537,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3261755095,"weight":19,"tradingsymbol":"BANKBEES","instrument_token":2928385,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3262029921,"weight":20,"tradingsymbol":"VBL","instrument_token":4843777,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3262031465,"weight":21,"tradingsymbol":"RADICO","instrument_token":2813441,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3380025273,"weight":22,"tradingsymbol":"PIDILITIND","instrument_token":681985,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3380026008,"weight":23,"tradingsymbol":"SUNPHARMA","instrument_token":857857,"segment":"NSE","exchange":"NSE","expiry":""},{"id":3380027033,"weight":24,"tradingsymbol":"DMART","instrument_token":5097729,"segment":"NSE","exchange":"NSE","expiry":""}]}]}';
        this.zerodha_from_date = '2021-12-08';
        this.zerodha_to_date = '2022-01-07';
        this.zerodha_expiry_date = 'Jan-07-2021';
        this.route.queryParams.subscribe(params => {
            console.log('params', params);
            if (params && params.access_token) {
                this.access_token = params.access_token;
                // console.log('access_token', this.access_token);
                /*  this.getFunds();
                 this.getPositions();
                 this.getOrders(); */
                // this.getPayoff();
                // this.appService.getMastersContract();
                // this.angelLogin();
            }
            if (params && params.user_id) {
                this.user_id = params.user_id;
            }
        });
        this.appService.requestStatusEvent$.subscribe(res => {
            console.log('app requestStatusEvent: ', res);
            this.lastRequestStatus = res;
        });
        this.websocketService.websocketEvent$.subscribe(res => {
            console.log('app websocketEvent: ', res);
            if (res === 'connected') {
                this.subscribePositionsFeed();
            }
        });
    }
    ngOnInit() {
        // Setting dummy values for indices for Payoff to work even if websocket is not working
        this.mapService.setLtp('NIFTY50', 18000);
        this.mapService.setLtp('BANKNIFTY', 40000);
        if (window.location.href.includes('localhost')) {
            _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.isProduction = false;
        }
        console.log(window.location.href, _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.isProduction);
        let refresh_interval = setInterval(() => {
            this.updateSpotStrike();
        }, 5000);
        let autoSuggest_interval = setInterval(() => {
            // this.autoSuggest();
        }, 2000);
        this.chartService.strategyPnLEvent$.subscribe(res => {
            // console.log('received:', res);
            this.strategyPnL = res[0];
            this.strategyPointsProfit = res[1];
        });
        this.chartService.optionChainEvent$.subscribe(res => {
            console.log('received oc:', res);
            let instru = res[0];
            let expiryDate = res[1];
            this.processOCRequest(instru, expiryDate);
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
        });
        /* this.cdr.detectChanges(); */
    }
    fetchHistorical() {
        this.holdingsService.fetchCandles(this.historical_append, this.zerodha_auth, this.zerodha_marketwatch, this.zerodha_from_date, this.zerodha_to_date, this.zerodha_expiry_date);
    }
    exportHistorical() {
        this.holdingsService.exportToCSV();
    }
    processOCRequest(instru, expiryDate) {
        this.oc_instru = instru;
        let expiry = new Date(expiryDate);
        this.oc_year = expiry.getFullYear();
        this.oc_month = expiry.getMonth() + 1;
        this.oc_date = expiry.getDate();
        if (this.oc_instru === 'NIFTY') {
            this.oc_range_multiple = 50;
            let spot = this.getLtp('NIFTY50');
            let spotStrike = (Math.round(spot / this.oc_range_multiple) * this.oc_range_multiple);
            this.oc_range_higher = spotStrike + 400;
            this.oc_range_lower = spotStrike - 400;
        }
        else if (this.oc_instru === 'BANKNIFTY') {
            this.oc_range_multiple = 100;
            let spot = this.getLtp('BANKNIFTY');
            let spotStrike = (Math.round(spot / this.oc_range_multiple) * this.oc_range_multiple);
            this.oc_range_higher = spotStrike + 1200;
            this.oc_range_lower = spotStrike - 1200;
        }
        else if (this.oc_instru === 'USDINR') {
            this.oc_range_multiple = 0.25;
            let spot = this.getLtp('USDINR_FUT');
            let spotStrike = (Math.round(spot / this.oc_range_multiple) * this.oc_range_multiple);
            this.oc_range_higher = spotStrike + 2;
            this.oc_range_lower = spotStrike - 2;
        }
        this.updateOCRange();
    }
    getStrategyPnL() {
        return this.strategyPnL;
    }
    getIV(symbol, strike, type) {
        let date_expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
        if (this.oc_instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
        }
        else {
            date_expiry.setHours(15, 30, 0);
        }
        let underlying = 'NIFTY50';
        if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
        }
        else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
        }
        let spot = this.getLtp(underlying);
        let mkt_price = this.getLtp(symbol + type);
        let typet0 = null;
        if (type === 'CE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_1__.PositionTypeForPayOff.CE;
        }
        if (type === 'PE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_1__.PositionTypeForPayOff.PE;
        }
        let iv = this.appService.calculateIV(this.oc_instru, spot, strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.INTEREST_RATE, date_expiry, typet0, mkt_price);
        return iv;
    }
    getDelta(symbol, strike, type) {
        let ltp = this.getLtp(symbol + type);
        let expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
        let delta = this.appService.getDelta(this.oc_instru, strike, type, expiry, ltp);
        return delta;
    }
    getUSDINRMonth() {
        return _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH;
    }
    checkNifty() {
        if (this.nifty_oc_check) {
            this.usdinr_oc_check = false;
            this.checked_instrument = 'NIFTY';
        }
        else {
            this.usdinr_oc_check = true;
            this.checked_instrument = 'USDINR';
        }
    }
    checkUSDINR() {
        if (this.usdinr_oc_check) {
            this.nifty_oc_check = false;
            this.checked_instrument = 'USDINR';
        }
        else {
            this.nifty_oc_check = true;
            this.checked_instrument = 'NIFTY';
        }
    }
    login() {
        this.auth();
    }
    auth() {
        this.appService.auth().subscribe((res) => {
            console.log('app auth', res);
            if (res) {
                this.appService.requestStatusEvent$.next(res);
                if (res.authorization_code) {
                    this.auth_code = res.authorization_code;
                    this.generateAccessToken();
                }
            }
        }, error => {
            console.log('app auth error', error);
            this.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
        });
    }
    generateAccessToken() {
        if (this.auth_code) {
            let tokenUrl = this.appService.getTokenUrl(this.auth_code, _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fyersAppId);
            console.log('tokenUrl', tokenUrl);
            // window.location.href = tokenUrl;
            let wnd = window.open(tokenUrl /* , '_self' */);
        }
    }
    getFunds() {
        console.log('app getting Funds');
        this.appService.getFunds(this.access_token).subscribe((res) => {
            console.log('app getFunds', res);
            if (res) {
                this.totalBalance = res.fund_limit[8].equityAmount.toLocaleString();
                this.availableBalance = res.fund_limit[9].equityAmount.toLocaleString();
                this.utilizedBalance = res.fund_limit[6].equityAmount.toLocaleString();
            }
        }, error => {
            console.log('app getPositions error', error);
            this.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
        });
    }
    getPositions() {
        console.log('app getting Positions');
        this.appService.getPositions(this.access_token).subscribe((res) => {
            console.log('app getPositions', res);
            if (res) {
                this.lastPositionsUpdateTime = new Date().toLocaleTimeString();
                this.appService.requestStatusEvent$.next(res);
                this.mapPositions(res);
            }
        }, error => {
            console.log('app getPositions error', error);
            this.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
        });
    }
    includePosPnLInSum1(pos) {
        pos.includeInSum1 = !pos.includeInSum1;
    }
    includePosPnLInSum2(pos) {
        pos.includeInSum2 = !pos.includeInSum2;
    }
    includePosPnLInSum3(pos) {
        pos.includeInSum3 = !pos.includeInSum3;
    }
    includePosPnLInSum4(pos) {
        pos.includeInSum4 = !pos.includeInSum4;
    }
    getPositionsPnLSum(num) {
        let sum = 0;
        if (this.positions) {
            this.positions.forEach(pos => {
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
    mapPositions(res) {
        this.positions = [];
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            if (res.netPositions instanceof Array) {
                res.netPositions.forEach(pos => {
                    let p = new _common_models__WEBPACK_IMPORTED_MODULE_1__.Position();
                    p.id = pos.id;
                    p.scrip = pos.symbol;
                    p.netQty = pos.netQty;
                    p.buyAvg = pos.buyAvg;
                    p.sellAvg = pos.sellAvg;
                    p.type = pos.productType;
                    p.realizedProfit = pos.realizedProfit;
                    p.pnl = pos.pl;
                    this.positions.push(p);
                });
                this.subscribePositionsFeed();
            }
        }
    }
    subscribePositionsFeed() {
        let sub = [];
        this.positions.forEach(pos => {
            let symbol = pos.scrip;
            symbol = symbol.replace('NSE:', '');
            let instru = '';
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
            let type = '';
            if (symbol.includes('CE')) {
                type = 'CE';
            }
            if (symbol.includes('PE')) {
                type = 'PE';
            }
            console.log('subscribePositionsFeed symbol: ' + symbol);
            symbol = symbol.slice(0, -2); // remove CE PE at end
            let strike = symbol.substring(5);
            let expiry = symbol.substring(0, 5); // 20N08 20JUN 20911
            // 20O0812000CE 2091012000CE
            let expiryDate = '';
            if (isNaN(expiry)) { // 20N08 20JUN
                if (isNaN(parseInt(expiry[4]))) { // 20JUN // checking whether last character is number or not - 20N08 20JUN
                    if (instru === 'NIFTY' || instru === 'BANKNIFTY') {
                        expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDates[expiry].toDateString();
                    }
                    if (instru === 'USDINR') {
                        expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDatesUSDINR[expiry].toDateString();
                    }
                }
                else { // 20N08
                    let year = Number(expiry.substring(0, 2)) + 2000;
                    let month = null;
                    if (expiry[2] === 'O') {
                        month = 9;
                    }
                    else if (expiry[2] === 'N') {
                        month = 10;
                    }
                    else if (expiry[2] === 'D') {
                        month = 11;
                    }
                    let date = Number(expiry.substring(3, 5));
                    console.log('subscribePositionsFeed oct nov dec: ', year, month, date);
                    expiryDate = new Date(year, month, date).toDateString();
                }
                // console.log('expiryDate', expiryDate);
            }
            else { // 20618
                let year = Number(expiry.substring(0, 2)) + 2000;
                let month = Number(expiry.substring(2, 3)) - 1;
                let date = Number(expiry.substring(3, 5));
                console.log('subscribePositionsFeed: ', year, month, date);
                expiryDate = new Date(year, month, date).toDateString();
            }
            let e1 = new _common_models__WEBPACK_IMPORTED_MODULE_1__.Instrument();
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
    getMastersStatus() {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.size) {
            return 'Masters Contract is available';
        }
        return 'Masters Contract not available yet';
    }
    establishWSVendor() {
        _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode = this.ws_vendor;
        this.appService.getMastersContract(this.ws_access_token);
    }
    isSocketConnected() {
        return this.appService.isSocketConnected();
    }
    getOrders() {
        console.log('app getting Orders');
        this.appService.getOrders(this.access_token).subscribe((res) => {
            console.log('app getOrders', res);
            if (res) {
                this.lastOrdersUpdateTime = new Date().toLocaleTimeString();
                this.appService.requestStatusEvent$.next(res);
                this.mapOrders(res);
            }
        }, error => {
            console.log('app getOrders error', error);
            this.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
        });
    }
    mapOrders(res) {
        this.orders = [];
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            if (res.orderBook instanceof Array) {
                res.orderBook.forEach(order => {
                    let o = new _common_models__WEBPACK_IMPORTED_MODULE_1__.Order();
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
                    this.orders.push(o);
                });
            }
        }
    }
    getCMP() {
        return 0.0;
    }
    getOrderStatus(status) {
        if (status === 1) {
            return 'Cancelled';
        }
        else if (status === 2) {
            return 'Filled';
        }
        else if (status === 3) {
            return 'Unknown';
        }
        else if (status === 4) {
            return 'Transit';
        }
        else if (status === 5) {
            return 'Rejected';
        }
        else if (status === 6) {
            return 'Pending';
        }
    }
    getOrderType(type) {
        if (type === 1) {
            return 'Limit';
        }
        else if (type === 2) {
            return 'Market';
        }
        else if (type === 3) {
            return 'SL-M';
        }
        else if (type === 4) {
            return 'SL';
        }
    }
    newOrder(side) {
        let symbol = 'NSE:' + this.newexpiry + this.newstrike + this.newoption;
        this.appService.placeOrder(this.access_token, symbol, this.newqty, this.newOrderType, side, this.newProductType, this.newlimit, this.newstop)
            .subscribe((res) => {
            console.log('app newOrder', res);
            this.refreshAll();
            if (res) {
                this.appService.requestStatusEvent$.next(res);
            }
        }, error => {
            console.log('app newOrder error', error);
            this.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
            this.refreshAll();
        });
    }
    resetNewOrder() {
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
    exitSelected() {
        if (this.positions) {
            if (confirm('Exit Selected?')) {
                this.positions.forEach(pos => {
                    if (pos.includeInSum1 || pos.includeInSum2 || pos.includeInSum3 || pos.includeInSum4) {
                        this.exitPosition(pos, true);
                    }
                });
            }
        }
    }
    exitPosition(pos, isExitSelected = false) {
        let qty = Number((document.getElementById('pos-qty-' + pos.id)).value);
        /* let limit = ((document.getElementById('pos-limit-' + pos.id)) as HTMLInputElement).value; */
        if (!qty) {
            qty = Math.abs(pos.netQty);
        }
        let buysell = 0;
        if (pos.netQty > 0) {
            buysell = -1;
        }
        else if (pos.netQty < 0) {
            buysell = 1;
        }
        let orderType = 2; // MARKET
        console.log('placing order: ', pos.scrip, qty, orderType, buysell, pos.type, 0);
        let user_confirm = isExitSelected;
        if (isExitSelected === false) {
            user_confirm = confirm('Exit ' + qty + ' Qty with ' + (buysell === -1 ? 'Sell order' : 'Buy order') + ' Sure?');
        }
        if (user_confirm) {
            this.appService.placeOrder(this.access_token, pos.scrip, qty, orderType, buysell, pos.type, 0, 0)
                .subscribe((res) => {
                console.log('app exitPosition', res);
                this.refreshAll();
                if (res) {
                    this.appService.requestStatusEvent$.next(res);
                    this.appService.playAudio('success');
                }
            }, error => {
                console.log('app exitPosition error', error);
                this.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
                this.refreshAll();
                this.appService.playAudio('error');
            });
        }
    }
    refreshAll() {
        this.getFunds();
        this.getPositions();
        this.getOrders();
    }
    addToStrategyBuilder(oc, type) {
        this.appService.payOffEvent$.next({ symbol: oc.symbol + type, ltp: this.getLtp(oc.symbol + type), qty: this.qty_default });
    }
    addToChart(oc, type) {
        this.appService.chartEvent$.next({ symbol: oc.symbol + type, type: type });
    }
    getQtyOfStrikeInStrategy(strike) {
        let curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.curr_positions_trades;
        if (curr_positions_trades) {
            for (let i = 0; i < curr_positions_trades.length; i++) {
                let element = curr_positions_trades[i];
                /* {
                  qty: 50,
                  scrip: '11150CE',
                  expiry: '01OCT2020',
                  entry: 50,
                  exit: 0,
                }, */
                let ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
                let strikeExpiry = new Date(element.expiry);
                if (ocDate.getDate() === strikeExpiry.getDate() && element.scrip === strike && element.exit === 0) {
                    return element.qty;
                }
            }
            return null;
        }
    }
    getCostOfStrikeInStrategy(strike) {
        let curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.curr_positions_trades;
        if (curr_positions_trades) {
            for (let i = 0; i < curr_positions_trades.length; i++) {
                let element = curr_positions_trades[i];
                /* {
                  qty: 50,
                  scrip: '11150CE',
                  expiry: '01OCT2020',
                  entry: 50,
                  exit: 0,
                }, */
                let ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
                let strikeExpiry = new Date(element.expiry);
                if (ocDate.getDate() === strikeExpiry.getDate() && element.scrip === strike && element.exit === 0) {
                    return element.entry;
                }
            }
            return null;
        }
    }
    isStrikeInCurrStrategy(strike) {
        let curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.curr_positions_trades;
        if (curr_positions_trades) {
            for (let i = 0; i < curr_positions_trades.length; i++) {
                let element = curr_positions_trades[i];
                /* {
                  qty: 50,
                  scrip: '11150CE',
                  expiry: '01OCT2020',
                  entry: 50,
                  exit: 0,
                }, */
                let ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
                let strikeExpiry = new Date(element.expiry);
                if (element.exit === 0 && ocDate.getDate() === strikeExpiry.getDate() && element.scrip === strike) {
                    return true;
                }
            }
            return false;
        }
    }
    ocOrder(buysell, optionType, oc) {
        let symbol = 'NSE:' + oc.symbol + optionType;
        let strike = oc.strike;
        let productType = this.oc_product_type;
        let limit;
        console.log('ocOrder qty: ' + 'oc-qty-' + optionType + '-' + oc.symbol);
        let qty = Number(document.getElementById('oc-qty-' + optionType + '-' + oc.symbol).value);
        limit = document.getElementById('oc-limit-' + optionType + '-' + oc.symbol).value;
        /* let block = (document.getElementById('oc-block-' + optionType + '-' + oc.symbol) as HTMLInputElement).value; */
        let orderType = 2; // MARKET
        if (limit) {
            orderType = 1; // LIMIT
        }
        else {
            limit = 0;
        }
        console.log('placing order: ', symbol, qty, (orderType === 2 ? 'Market' : 'Limit'), buysell, productType, limit);
        if (true /* confirm(qty + ' Qty, ' + limit + ' Limit, ' + (orderType === 2 ? 'Market' : 'Limit') + ' order ' + 'Sure?') */) {
            this.appService.placeOrder(this.access_token, symbol, qty, orderType, buysell, productType, limit, 0)
                .subscribe((res) => {
                console.log('app ocOrder', res);
                this.refreshAll();
                if (res) {
                    this.appService.requestStatusEvent$.next(symbol + ' ' + qty + ' ' + (orderType === 2 ? 'Market' : 'Limit') + ' ' + res);
                    // Order submitted successfully. Your Order Ref. No.220091778602
                    this.appService.playAudio('success');
                }
            }, error => {
                console.log('app ocOrder error', error);
                this.appService.requestStatusEvent$.next(error.error.message + ', ' + error.message);
                this.refreshAll();
                this.appService.playAudio('error');
            });
        }
    }
    isAnyOpenPosition() {
        let curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.curr_positions_trades;
        if (curr_positions_trades) {
            for (let i = 0; i < curr_positions_trades.length; i++) {
                let element = curr_positions_trades[i];
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
    autoSuggest() {
        this.findInitialPositions();
        this.checkAdjustments();
    }
    findInitialPositions() {
        this.suggestions = [];
        if (!this.isAnyOpenPosition()) {
            for (let index = this.oc_range_lower; index <= this.oc_range_higher; index += this.oc_range_multiple) {
                //this.oc_strikes.push({symbol: this.oc_instru + this.getExpiry() + index, strike: index, ltp: 0, delta: 0 }); // symbol: NIFTY2061810000 NIFTY20JUN10000
                let symbol = this.oc_instru + this.getExpiry() + index;
                let ltp = this.getLtp(symbol + 'CE');
                if (ltp >= 16 && ltp <= 28) {
                    let delta = this.getDelta(symbol, index, 'CE');
                    if (delta > 0 && Math.abs(delta) < 1) { // on 0DTE, delta is not calculated correctly
                        //console.log(index, ltp, delta);
                        for (let index1 = this.oc_range_lower; index1 <= this.oc_range_higher; index1 += this.oc_range_multiple) {
                            let symbol1 = this.oc_instru + this.getExpiry() + index1;
                            let delta1 = this.getDelta(symbol1, index1, 'PE');
                            if (Math.abs(delta + delta1) <= 0.025) {
                                let ltp1 = this.getLtp(symbol1 + 'PE');
                                if (ltp1) {
                                    this.suggestions.push({ strikeCE: index, deltaCE: delta, ltpCE: ltp, strikePE: index1, deltaPE: delta1, ltpPE: ltp1 });
                                }
                            }
                        }
                    }
                }
            }
            // console.log(this.suggestions);
        }
    }
    checkAdjustments() {
        let curr_positions_trades = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.curr_positions_trades;
        let ceDelta = 0;
        let cePremium = 0;
        let ceQty = 0;
        let peDelta = 0;
        let pePremium = 0;
        let peQty = 0;
        this.adjust_sugg = [];
        this.combined_premium = 0;
        if (curr_positions_trades) {
            for (let i = 0; i < curr_positions_trades.length; i++) {
                let element = curr_positions_trades[i];
                /* {
                  qty: 50,
                  scrip: '11150CE',
                  expiry: '01OCT2020',
                  entry: 50,
                  exit: 0,
                }, */
                let ocDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
                let strikeExpiry = new Date(element.expiry);
                if (element.exit === 0 && element.qty < 0) { // calculating delta and premiums of only sold positions
                    let type = '';
                    if (element.scrip.includes('CE')) {
                        type = 'CE';
                    }
                    if (element.scrip.includes('PE')) {
                        type = 'PE';
                    }
                    let index = element.scrip.slice(0, -2);
                    let symbol = this.oc_instru + this.getExpiry() + index;
                    let delta = this.getDelta(symbol, index, type) * element.qty;
                    let ltp = this.getLtp(symbol + type) * element.qty;
                    if (type === 'CE') {
                        cePremium += ltp;
                        ceDelta += delta;
                        ceQty += element.qty;
                    }
                    else if (type === 'PE') {
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
                this.combined_premium = (Math.round((this.combined_premium + 0.00001) * 100) / 100);
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
                }
                // console.log(ceDelta, peDelta, cePremium, pePremium);
            }
        }
    }
    roll(type, delta) {
        for (let index1 = this.oc_range_lower; index1 <= this.oc_range_higher; index1 += this.oc_range_multiple) {
            let symbol1 = this.oc_instru + this.getExpiry() + index1;
            let delta1 = this.getDelta(symbol1, index1, type);
            if (Math.abs(delta + delta1) <= 0.025) {
                let ltp1 = this.getLtp(symbol1 + type);
                if (ltp1) {
                    this.adjust_sugg.push({ action: 'Adjust ' + type, strike: index1 + type, ltp: ltp1 });
                }
            }
        }
    }
    sortTableColumn(colName) {
        console.log('sort');
        this.holdings.sort((a, b) => {
            // console.log(a['scrip'], b['scrip']);
            if (a['scrip'] === 'NIFTY 50') {
                return -1;
            }
            if (b['scrip'] === 'NIFTY 50') {
                return 1;
            }
            return a[colName] > b[colName] ? -1 : a[colName] < b[colName] ? 1 : 0;
            // 1 means b before a
            // -1 means a before b
        });
    }
    fetchStocks() {
        this.holdingsService.fetchStocksData();
    }
    loadHoldings() {
        let r = this.holdingsService.loadHoldings();
        this.portfolio_return = r['portfolio_return'];
        this.holdings = r['holdings'];
        this.total_inv = r['total_inv'];
        this.current_val = r['current_val'];
        console.log('stocks:', this.holdings);
    }
    backtestStocks() {
        this.holdingsService.backtestStocks();
    }
    exportBacktest() {
        this.holdingsService.exportBacktest();
    }
    isStockHolding(scrip) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[scrip].avgp) {
            return true;
        }
        else {
            return false;
        }
    }
    updateOCRange() {
        this.is_monthly_expiry = false;
        let enteredDate = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
        let tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDates;
        if (this.oc_instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDatesUSDINR;
        }
        for (let key in tempmonthlyExpiryDates) {
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
        for (let index = this.oc_range_lower; index <= this.oc_range_higher; index += this.oc_range_multiple) {
            this.oc_strikes.push({ symbol: this.oc_instru + this.getExpiry() + index, strike: index, ltp: 0, delta: 0 }); // symbol: NIFTY2061810000 NIFTY20JUN10000
        }
        if (!_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.isSimulatedStrategy) {
            let sub = [];
            this.oc_strikes.forEach(oc => {
                let e1 = new _common_models__WEBPACK_IMPORTED_MODULE_1__.Instrument();
                e1.expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date).toDateString();
                e1.instru = this.oc_instru;
                e1.strike = Number(oc.strike);
                e1.type = 'CE';
                sub.push(e1);
                let e2 = new _common_models__WEBPACK_IMPORTED_MODULE_1__.Instrument();
                e2.expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date).toDateString();
                e2.instru = this.oc_instru;
                e2.strike = Number(oc.strike);
                e2.type = 'PE';
                sub.push(e2);
            });
            console.log('updateOCRange Subscriptions: ' + sub);
            this.appService.sendSubscriptions(sub);
        }
    }
    clearOC() {
        this.oc_strikes = [];
    }
    getSpotValue() {
        let underlying = '';
        if (this.oc_instru === 'NIFTY') {
            underlying = 'NIFTY50';
        }
        else if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
        }
        else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
        }
        let e = this.getLtp(underlying);
        return e;
    }
    updateSpotStrike() {
        let underlying = '';
        if (this.oc_instru === 'NIFTY') {
            underlying = 'NIFTY50';
        }
        else if (this.oc_instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
        }
        else if (this.oc_instru === 'USDINR') {
            underlying = 'USDINR_FUT';
        }
        let e = this.getLtp(underlying);
        let spotStrike = (Math.round(e / this.oc_range_multiple) * this.oc_range_multiple);
        /* let symbol = this.oc_instru + this.getExpiry() + spotStrike;
    
        let ce_premium = this.getLtp(symbol + 'CE');
        let pe_premium = this.getLtp(symbol + 'PE');
        let targetStrike = ce_premium - pe_premium + spotStrike;
        targetStrike = (Math.round(targetStrike / this.oc_range_multiple) * this.oc_range_multiple); */
        // targetStrike:72.75 74.25 0.0975 0.15 74.25
        // console.log('oc targetStrike:' + symbol + ' ' + targetStrike + ' ' + ce_premium + ' ' + pe_premium + ' ' + spotStrike);
        this.ocSpotStrike = spotStrike; // targetStrike;
    }
    isSpotStrike(strike) {
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
    getPosLTP(position) {
        let symbol = position.scrip;
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
    getPosPnL(position) {
        // return position.realizedProfit;
        if (position.cmp) {
            let pnl = null;
            let realizedProfit = 0;
            if (position.realizedProfit) {
                realizedProfit = position.realizedProfit;
            }
            if (position.netQty === 0) {
                return position.pnl;
            }
            if (position.netQty > 0) {
                let p = (position.cmp - position.buyAvg) * position.netQty;
                pnl = realizedProfit + p;
            }
            else if (position.netQty < 0) {
                let p = (position.sellAvg - position.cmp) * -position.netQty;
                pnl = realizedProfit + p;
            }
            if (position.scrip.includes('USDINR')) {
                pnl *= 1000;
            }
            position.pnl = (Math.round((pnl + 0.00001) * 100) / 100);
            return position.pnl;
        }
        else {
            return position.pnl;
        }
    }
    // strike in map is NIFTY2061810000CE or NIFTY20JUN10000CE
    getExpiry() {
        if (this.is_monthly_expiry) {
            return '' + (this.oc_year - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthsMapping[this.oc_month];
        }
        let expiryMonth = null;
        if (this.oc_month === 10) {
            expiryMonth = 'O';
        }
        else if (this.oc_month === 11) {
            expiryMonth = 'N';
        }
        else if (this.oc_month === 12) {
            expiryMonth = 'D';
        }
        else {
            expiryMonth = this.oc_month;
        }
        return '' + (this.oc_year - 2000) + expiryMonth + ('0' + this.oc_date).slice(-2); //this.oc_date;
    }
    getLtp(strike, oc_strike = null) {
        // console.log('strike', strike);
        if (strike === 'USDINR_FUT') {
            let expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.year + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH];
            let expiryMonth = null;
            if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
            }
            else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
            }
            else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
            }
            else {
                expiryMonth = expiryDate.getMonth() + 1;
            }
            let expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
            strike = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH + 'FUT';
            // console.log('getLtp strike: ' + strike);
        }
        let ltp = this.mapService.getLtp(strike);
        if (oc_strike) {
            oc_strike.ltp = ltp;
        }
        return ltp;
    }
    getAtp(strike) {
        return this.mapService.getAtp(strike);
    }
    getVolume(strike) {
        let volume = this.mapService.getVolume(strike);
        if (volume) {
            return volume.toLocaleString();
        }
        return volume;
    }
    getOI(strike) {
        this.mapService.getOI(strike);
    }
    getChgOI(strike) {
        this.mapService.getChgOI(strike);
    }
    connectWS() {
        _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode = this.ws_vendor;
        this.appService.connectWebsocket(this.ws_access_token);
    }
    includeInStrangleFn(symbol) {
        if (this.stranglePositions.includes(symbol)) {
            this.stranglePositions = this.stranglePositions.filter(e => e !== symbol);
        }
        else {
            this.stranglePositions.push(symbol);
        }
    }
    includeInDebitSpreadFn(symbol) {
        if (this.debitSpreadPositions.includes(symbol)) {
            this.debitSpreadPositions = this.debitSpreadPositions.filter(e => e !== symbol);
        }
        else {
            this.debitSpreadPositions.push(symbol);
        }
    }
    getProfitForStrangle() {
        let pnl = 0.0;
        let lotsize = 0;
        if (this.oc_instru === 'NIFTY') {
            lotsize = 50;
        }
        else if (this.oc_instru === 'BANKNIFTY') {
            lotsize = 25;
        }
        else if (this.oc_instru === 'USDINR') {
            lotsize = 1000;
        }
        let credit = 0;
        this.stranglePositions.forEach(symbol => {
            let ltp = this.getLtp(symbol);
            credit += ltp;
            // console.log(symbol + ', ltp: ' + ltp);
            pnl += (ltp * lotsize);
        });
        credit = Math.round((credit + 0.00001) * 100) / 100; // round to 2 decimal places
        return credit + ' , ' + pnl;
    }
    getPnLForDebitSpread() {
        let profit = 0.0;
        let loss = 0.0;
        let lotsize = 0;
        let spread = 0;
        if (this.oc_instru === 'NIFTY') {
            lotsize = 50;
            spread = 50;
        }
        else if (this.oc_instru === 'BANKNIFTY') {
            lotsize = 25;
            spread = 100;
        }
        else if (this.oc_instru === 'USDINR') {
            lotsize = 1000;
            spread = 0.25;
        }
        let pos = [];
        this.debitSpreadPositions.forEach(symbol => {
            let ltp = this.getLtp(symbol);
            // console.log(symbol + ', ltp: ' + ltp);
            pos.push(ltp);
        });
        if (pos.length === 2) {
            let s1 = pos[0];
            let s2 = pos[1];
            let debit = Math.abs(s1 - s2);
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_map_service__WEBPACK_IMPORTED_MODULE_3__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_4__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_chart_chart_service__WEBPACK_IMPORTED_MODULE_5__.ChartService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_angel_service__WEBPACK_IMPORTED_MODULE_6__.AngelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_7__.AngelWebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_holdings_service__WEBPACK_IMPORTED_MODULE_8__.HoldingsService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 311, vars: 67, consts: [[1, "main-content"], [1, "top-content", "d-flex"], [1, "mr-auto"], [1, "confirmation-check", "form-check-inline", "mt-0"], ["type", "radio", "value", "aliceblue", "id", "aliceblue_ws", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "aliceblue_ws", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "mr-4", "mt-2"], [1, ""], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "width", "200px"], [2, "width", "50%"], [1, "ml-1"], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "width", "220px"], [2, "margin-top", "0.5rem"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "refresh-btn", 3, "click"], [1, "flex-container"], [1, "positions_div"], [1, "table-title"], [1, "font-weight-bold"], [1, "pl-4", "pr-4"], [1, "positions-sum", "font-weight-bold"], [3, "ngClass"], [1, "pl-2", "pr-2"], [1, "ml-auto", "float-right"], [1, "form-check-inline"], ["for", "hide-positions", 1, "form-check-label", "mr-1"], ["type", "checkbox", "value", "", "id", "hide-positions", 1, "form-check-input", "mr-2", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "refresh-btn", 3, "disabled", "click"], [1, "table", "table-sm", "table-bordered", "shadow", "text-center"], [1, "thead-light"], ["scope", "col"], [1, "orderbook_div"], [1, "d-flex"], [1, "form-check-inline", "ml-auto"], ["for", "hide-orders", 1, "form-check-label", "mr-1"], ["type", "checkbox", "value", "", "id", "hide-orders", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check", "text-center", 2, "font-size", "18px"], ["type", "checkbox", "value", "", "id", "disable-order-buttons", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "disable-order-buttons", 1, "form-check-label"], ["id", "accordionHistorical", 1, "accordion", "mb-2"], [1, "card"], ["type", "button", "data-toggle", "collapse", "data-target", "#historicalSection", "aria-expanded", "false", "aria-controls", "holdingsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "historicalSection", "aria-labelledby", "headingOne", "data-parent", "#accordionHistorical", 1, "collapse", "hide", "p-2"], [1, "historical_input", "mb-2"], ["for", "historical_append", 1, "historical_label"], ["name", "historical_append", "placeholder", "historical_append", 1, "mr-2", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "zerodha_auth", 1, "historical_label"], ["name", "zerodha_auth", "placeholder", "zerodha_auth", 1, "mr-2", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "zerodha_marketwatch", 1, "historical_label"], ["name", "zerodha_marketwatch", "rows", "5", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["for", "zerodha_from_date", 1, "historical_label"], ["name", "zerodha_from_date", "placeholder", "zerodha_from_date", 1, "mr-2", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "zerodha_to_date", 1, "historical_label"], ["name", "zerodha_to_date", "placeholder", "zerodha_to_date", 1, "mr-2", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "zerodha_expiry_date", 1, "historical_label"], ["name", "zerodha_expiry_date", "placeholder", "zerodha_expiry_date", 1, "mr-2", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["id", "accordionHoldings", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#holdingsSection", "aria-expanded", "true", "aria-controls", "holdingsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "holdingsSection", "aria-labelledby", "headingOne", "data-parent", "#accordionHoldings", 1, "collapse", "show", "p-2"], [1, "table", "table-sm", "table-bordered", "shadow", "mb-0", "text-center"], ["scope", "col", 1, "oc-col"], ["scope", "col", 1, "oc-col", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "algo-suggestions-main shadow-sm p-3 mb-5 bg-white", 4, "ngIf"], [1, "option-chain"], [1, "new-input", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["value", "NIFTY"], ["value", "BANKNIFTY"], ["value", "USDINR"], ["id", "strategy-qty", "type", "number", "placeholder", "Qty Default", 1, "ml-2", "form-control", "form-control-sm", 2, "display", "inline", "width", "70px", 3, "ngModel", "ngModelChange"], [2, "display", "inline-block", "margin-left", "20px", "margin-right", "10px"], [1, "input-group", "input-group-sm", "new-input-prepend-expiry"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "confirmation-check", "form-check-inline"], ["type", "checkbox", "value", "", "id", "is-monthly-expiry", 1, "form-check-input", 3, "ngModel", "disabled", "ngModelChange"], ["for", "is-monthly-expiry", 1, "form-check-label"], [2, "display", "inline-block", "margin-left", "20px", "margin-right", "10px", "margin-bottom", "20px"], [1, "input-group", "input-group-sm", "new-input-prepend-oc"], ["type", "number", "min", "0", "step", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "50", "step", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "ml-1", 3, "click"], [1, "text-center"], ["colspan", "4", "scope", "col"], ["scope", "col", 1, "oc-col-actions"], ["scope", "col", 1, "text-center"], ["type", "radio", "value", "INTRADAY", "id", "oc-order-type-intraday", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "oc-order-type-intraday", 1, "form-check-label"], ["type", "radio", "value", "MARGIN", "id", "oc-order-type-margin", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "oc-order-type-margin", 1, "form-check-label"], [1, "form-check-inline", "posCheckbox"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "change"], [1, "font-weight-bold", 3, "ngClass"], [1, "positions-row-actions"], ["type", "number", "placeholder", "Qty", 1, "pos-input", "form-control", "form-control-sm", 3, "id"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "algo-suggestions-main", "shadow-sm", "p-3", "mb-5", "bg-white"], [1, "mr-2"], ["class", "suggest-positions", 4, "ngFor", "ngForOf"], [1, "ml-4", "mr-3"], ["type", "number", "placeholder", "Combined SL", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "70px", "display", "inline", 3, "ngModel", "ngModelChange"], [1, "suggest-positions"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mr-1", 3, "click"], [1, "text-info", "font-weight-bold", 3, "ngClass"], ["class", "ocStrategyStrikeQty", 4, "ngIf"], [1, "font-weight-bold", "text-center", 3, "ngClass"], ["class", "ocStrategyStrikeQty oc-strike-spot", 4, "ngIf"], [1, "ocStrategyStrikeQty"], [1, "ocStrategyStrikeQty", "oc-strike-spot"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_4_listener($event) { return ctx.ws_vendor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Aliceblue");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.establishWSVendor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Connect WS");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, AppComponent_button_12_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AppComponent_span_14_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, AppComponent_span_15_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Nifty");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "BNF");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_43_listener() { return ctx.refreshAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Refresh All");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, " P&L1: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, " P&L2: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, " P&L3: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, " P&L4: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_80_listener($event) { return ctx.hide_positions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_81_listener() { return ctx.exitSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "Exit selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "NetQty");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "BuyAvg");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "SellAvg");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "CMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "PnL");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](101, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](102, AppComponent_tbody_102_Template, 2, 1, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "Hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_111_listener($event) { return ctx.hide_orders = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "B/S");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](126, "Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](128, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](130, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](135, AppComponent_tbody_135_Template, 2, 1, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](136, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_138_listener($event) { return ctx.disable_order_buttons = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "Disable order buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](141, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, " Historical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "Append");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_150_listener($event) { return ctx.historical_append = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "Authorization");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_154_listener($event) { return ctx.zerodha_auth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "Marketwatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "textarea", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_158_listener($event) { return ctx.zerodha_marketwatch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_162_listener($event) { return ctx.zerodha_from_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_166_listener($event) { return ctx.zerodha_to_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_170_listener($event) { return ctx.zerodha_expiry_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_171_listener() { return ctx.fetchHistorical(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172, "Fetch Historical");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_173_listener() { return ctx.exportHistorical(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, " Stocks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](182, "table", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "Scrip");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, "LTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_189_listener() { return ctx.sortTableColumn("oned"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "1D%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_191_listener() { return ctx.sortTableColumn("onew"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "1W%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_193_listener() { return ctx.sortTableColumn("onem"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "1M%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_195_listener() { return ctx.sortTableColumn("threem"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](196, "3M%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](197, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_197_listener() { return ctx.sortTableColumn("fiftytwow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](198, "52W H%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](199, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_199_listener() { return ctx.sortTableColumn("avgp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "Avg%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_201_listener() { return ctx.sortTableColumn("support"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](203, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_th_click_203_listener() { return ctx.sortTableColumn("resistance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](204, "Resistance");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](206, AppComponent_tr_206_Template, 21, 53, "tr", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](207, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_207_listener() { return ctx.fetchStocks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](208, "Fetch Stocks data");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](209, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_209_listener() { return ctx.loadHoldings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](210, "Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_211_listener() { return ctx.backtestStocks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "Backtest");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_213_listener() { return ctx.exportBacktest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](214, "Export Backtest");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](215, AppComponent_div_215_Template, 12, 10, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](216, "app-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](217, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](218, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "select", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_219_listener($event) { return ctx.oc_instru = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](220, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "NIFTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](223, "BANKNIFTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "USDINR");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_226_listener($event) { return ctx.qty_default = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](227, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](228, "Expiry: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](230, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](232, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](233, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_233_listener($event) { return ctx.oc_year = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](235, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](236, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_238_listener($event) { return ctx.oc_month = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](241, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](242, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](243, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_243_listener($event) { return ctx.oc_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](244, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](245, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_245_listener($event) { return ctx.is_monthly_expiry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](246, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "Is Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](249, "Strike range: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](250, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](253, "Higher");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_254_listener($event) { return ctx.oc_range_higher = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](255, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](256, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](258, "Lower");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_259_listener($event) { return ctx.oc_range_lower = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](262, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "Multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_264_listener($event) { return ctx.oc_range_multiple = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](265, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_265_listener() { return ctx.updateOCRange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](266, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](267, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_Template_button_click_267_listener() { return ctx.clearOC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](269, "table", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](271, "tr", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](273, "Calls");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](274, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](276, "Puts");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](277, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](278, "th", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](279, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](280, "Volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](281, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](282, "Delta");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](283, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](284, "LTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](285, "th", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](286, "Strike");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](287, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](288, "LTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](289, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](290, "Delta");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](292, "Volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](293, "th", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](294, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](295, AppComponent_tr_295_Template, 38, 38, "tr", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](296, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](297, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_297_listener($event) { return ctx.oc_product_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](298, "label", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](299, "Intraday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](300, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](301, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_301_listener($event) { return ctx.oc_product_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](302, "label", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](303, "Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](304, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](305, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](306);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](307, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](308, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](309);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](310, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.ws_vendor);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.getMastersStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.access_token);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isSocketConnected());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isSocketConnected());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" Funds: Total: ", ctx.totalBalance, ", Available: ", ctx.availableBalance, ", Utilized: ", ctx.utilizedBalance, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.getLtp("NIFTY50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.getLtp("BANKNIFTY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("USDINR ", ctx.getUSDINRMonth(), " FUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.getLtp("USDINR_FUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("Positions last update: ", ctx.lastPositionsUpdateTime, " | Orders last update: ", ctx.lastOrdersUpdateTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](55, _c0, ctx.getPositionsPnLSum(1) < 0, ctx.getPositionsPnLSum(1) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(1), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](58, _c0, ctx.getPositionsPnLSum(2) < 0, ctx.getPositionsPnLSum(2) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](61, _c0, ctx.getPositionsPnLSum(3) < 0, ctx.getPositionsPnLSum(3) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](64, _c0, ctx.getPositionsPnLSum(4) < 0, ctx.getPositionsPnLSum(4) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.getPositionsPnLSum(4), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.hide_positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.disable_order_buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.hide_positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.hide_orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.hide_orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.disable_order_buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.historical_append);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.zerodha_auth);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.zerodha_marketwatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.zerodha_from_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.zerodha_to_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.zerodha_expiry_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("Portfolio return: ", ctx.portfolio_return, "% Total inv.: ", ctx.total_inv, " Current val.: ", ctx.current_val, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.holdings);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_instru);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.qty_default);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_year);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_month);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.is_monthly_expiry)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_range_higher);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_range_lower);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_range_multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.oc_strikes);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_product_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.oc_product_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Strangle max profit per lot: ", ctx.getProfitForStrangle(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("Debit spread per lot Profit: ", ctx.getPnLForDebitSpread()[0], ", Loss: ", ctx.getPnLForDebitSpread()[1], "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__.ChartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinValidator, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet], styles: ["[_nghost-%COMP%], input[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.stockHolding[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #ff6347;\n}\n\n.bold-higher[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px !important;\n}\n\n.historical_label[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.algo-suggestions-main[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n\n.suggest-positions[_ngcontent-%COMP%] {\n  border: 1px solid #b5b5b5;\n  padding: 5px;\n  border-radius: 5px;\n  margin-right: 15px;\n  font-weight: bold;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 2px solid #dee2e6;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.posCheckbox[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.ocStrategyStrikeQty[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: black;\n}\n\n.oc-strike[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  width: 60px;\n}\n\n.oc-strike-spot[_ngcontent-%COMP%] {\n  width: 60px;\n  margin: 0 auto;\n}\n\n.oc-col-actions[_ngcontent-%COMP%] {\n  width: 19rem;\n}\n\n.oc-col[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\n.lastRequestStatus[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #f8f9fa;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n}\n\n.positions_div[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.orderbook_div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.pos-input[_ngcontent-%COMP%] {\n  width: 60px;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.positions-row-actions[_ngcontent-%COMP%] {\n  \n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  \n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.table-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.new-input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 120px;\n  display: inline-block;\n}\n\n.new-input-prepend[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 150px;\n  display: inline-flex;\n}\n\n.new-input-prepend-expiry[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 100px;\n  display: inline-flex;\n}\n\n.new-input-prepend-oc[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 5px;\n  width: 130px;\n  display: inline-flex;\n}\n\n.new-input-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.confirmation-check[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.new-order-div[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ocStrikeStrategyCE[_ngcontent-%COMP%] {\n  background-color: #ccffc9 !important;\n}\n\n.ocStrikeStrategyPE[_ngcontent-%COMP%] {\n  background-color: #ffdede !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDBCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLE9BQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0Usb0NBQUE7QUFKRjs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0LCBpbnB1dCwgLmlucHV0LWdyb3VwLXRleHQsIHNlbGVjdCwgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4uc3RvY2tIb2xkaW5nIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiAjZmY2MzQ3O1xyXG59XHJcblxyXG4uYm9sZC1oaWdoZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlzdG9yaWNhbF9sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxnby1zdWdnZXN0aW9ucy1tYWlue1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7IFxyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5zdWdnZXN0LXBvc2l0aW9ucyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I1YjViNTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5wb3NDaGVja2JveCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vY1N0cmF0ZWd5U3RyaWtlUXR5IHtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5vYy1zdHJpa2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5vYy1zdHJpa2Utc3BvdCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5vYy1jb2wtYWN0aW9ucyB7XHJcbiAgd2lkdGg6IDE5cmVtO1xyXG59XHJcblxyXG4ub2MtY29sIHtcclxuICB3aWR0aDogNXJlbTtcclxufVxyXG5cclxuLmxhc3RSZXF1ZXN0U3RhdHVzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucG9zaXRpb25zX2RpdiB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5vcmRlcmJvb2tfZGl2IHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucG9zLWlucHV0IHtcclxuICB3aWR0aDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbnMtcm93LWFjdGlvbnMge1xyXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxufVxyXG5cclxuLnJlZnJlc2gtYnRuIHtcclxuICAvKiBtYXJnaW4tbGVmdDogMTVweDsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50YWJsZS10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubmV3LWlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm5ldy1pbnB1dC1wcmVwZW5kIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ubmV3LWlucHV0LXByZXBlbmQtZXhwaXJ5IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBcclxufVxyXG5cclxuLm5ldy1pbnB1dC1wcmVwZW5kLW9jIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ubmV3LWlucHV0LWJ0biB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWNoZWNrIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucG9zaXRpb25zLXN1bSB7XHJcbiAgXHJcbn1cclxuXHJcbi5uZXctb3JkZXItZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub2NTdHJpa2VTdHJhdGVneUNFIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmM5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vY1N0cmlrZVN0cmF0ZWd5UEUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRlZGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBjb2xvcjogI2MyYzNjNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgICBjb2xvcjogIzI0MjkyZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9ICovIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ 900);
/* harmony import */ var _common_fyers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/fyers.service */ 6982);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/chart.module */ 6534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService, _common_fyers_service__WEBPACK_IMPORTED_MODULE_3__.FyersService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModule,
            /* HighchartsChartModule */
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModule] }); })();


/***/ }),

/***/ 900:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _common_application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/application.constant */ 8001);
/* harmony import */ var _common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/models */ 8077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _common_fyers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/fyers.service */ 6982);
/* harmony import */ var _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/aliceblue.service */ 7023);
/* harmony import */ var _common_angel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/angel.service */ 1580);
/* harmony import */ var _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/angelwebsocket.service */ 4991);
/* harmony import */ var _common_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/websocket.service */ 4440);
/* harmony import */ var _common_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/map.service */ 397);











class AppService {
    constructor(http, fyersService, aliceblueService, angelService, angelWS, websocketService, mapService) {
        this.http = http;
        this.fyersService = fyersService;
        this.aliceblueService = aliceblueService;
        this.angelService = angelService;
        this.angelWS = angelWS;
        this.websocketService = websocketService;
        this.mapService = mapService;
        this.requestStatusEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.payOffEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.chartEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.stockChartEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.mean = 0;
        this.variance = 1;
    }
    getMastersContract(access_token) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'aliceblue') {
            this.aliceblueService.getMastersContract(access_token);
        }
        else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'angel') {
            return this.angelService.getMastersContract();
        }
    }
    getDelta(instru, strike, type, expiry, ltp, simulate_strategy = false, simulateCurrDateObj = null) {
        //let expiry_date = new Date(this.oc_year, this.oc_month - 1, this.oc_date).toDateString();
        // let date_expiry = new Date(this.oc_year, this.oc_month - 1, this.oc_date);
        let date_expiry = new Date(expiry);
        if (instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
        }
        else {
            date_expiry.setHours(15, 30, 0);
        }
        let date_now = new Date();
        if (simulate_strategy) {
            date_now = simulateCurrDateObj;
        }
        // date_now.setDate(date_now.getDate() + 0);
        let seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let delta_t = (Math.floor(hours / 24)) / 365.0; // time
        let underlying = 'NIFTY50';
        if (instru === 'BANKNIFTY') {
            underlying = 'BANKNIFTY';
        }
        else if (instru === 'USDINR') {
            underlying = 'USDINR_FUT';
        }
        let spot = this.getLtp(underlying);
        // let mkt_price = this.getLtp(symbol + type);
        let mkt_price = ltp;
        let typet0 = null;
        if (type === 'CE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_1__.PositionTypeForPayOff.CE;
        }
        if (type === 'PE') {
            typet0 = _common_models__WEBPACK_IMPORTED_MODULE_1__.PositionTypeForPayOff.PE;
        }
        let iv = this.calculateIV(instru, spot, strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.INTEREST_RATE, date_expiry, typet0, mkt_price);
        let volt = iv / 100;
        let int_rate = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.INTEREST_RATE / 100;
        // console.log(spot, date_expiry, mkt_price, iv);
        let d1 = (Math.log(spot / strike) + (int_rate + (Math.pow(volt, 2) / 2)) * delta_t) / (volt * Math.sqrt(delta_t));
        let delta = 0;
        if (type === 'CE') {
            delta = this.getCDF(d1);
        }
        else if (type === 'PE') {
            delta = this.getCDF(d1) - 1;
        }
        delta = Math.round((delta + 0.00001) * 100) / 100;
        return delta;
    }
    getLtp(strike, oc_strike = null) {
        // console.log('strike', strike);
        if (strike === 'USDINR_FUT') {
            let expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.year + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH];
            let expiryMonth = null;
            if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
            }
            else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
            }
            else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
            }
            else {
                expiryMonth = expiryDate.getMonth() + 1;
            }
            let expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
            strike = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH + 'FUT';
            // console.log('getLtp strike: ' + strike);
        }
        let ltp = this.mapService.getLtp(strike);
        if (oc_strike) {
            oc_strike.ltp = ltp;
        }
        return ltp;
    }
    // params - smaller date, bigger date
    calcWorkingDays(dDate1, dDate2) {
        // return (dDate2.getTime() - dDate1.getTime()) / (1000 * 3600 * 24);
        // https://stackoverflow.com/questions/37069186/calculate-working-days-between-two-dates-in-javascript-excepts-holidays
        let count = 0;
        let curDate = new Date(dDate1.getTime());
        while (curDate <= dDate2) {
            let dayOfWeek = curDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                count++;
            }
            curDate.setDate(curDate.getDate() + 1);
        }
        _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holidays.forEach(day => {
            if ((day >= dDate1) && (day <= dDate2)) {
                count--;
            }
        });
        return count - 1;
        /* var iWeeks, iDateDiff, iAdjust = 0;
        if (dDate2 < dDate1) return -1; // error code if dates transposed
        var iWeekday1 = dDate1.getDay(); // day of week
        var iWeekday2 = dDate2.getDay();
        iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1; // change Sunday from 0 to 7
        iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;
        if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1; // adjustment if both days on weekend
        iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1; // only count weekdays
        iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;
      
        // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
        iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000)
      
        if (iWeekday1 < iWeekday2) { //Equal to makes it reduce 5 days
          iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
        } else {
          iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
        }
      
        iDateDiff -= iAdjust // take into account both days on weekend
      
        let date_diff = iDateDiff; // (iDateDiff + 1); // add 1 because dates are inclusive
        return date_diff; */
    }
    calculateIV(instru, spot, strike, int_rate, expiry_date, type, mkt_price) {
        let high = 80;
        let low = 0;
        let iv = 0;
        /* let date_expiry = new Date(expiry_date);
        let date_now = new Date(); */
        /* let days_diff = this.calcWorkingDays(date_now, date_expiry);
        let seconds = days_diff * 86400;
    
        //let seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
        let	minutes = Math.floor(seconds / 60);
        let	hours = Math.floor(minutes / 60);
        let	delta_t = (Math.floor(hours / 24)) / 365.0;
    
        if (hours < 24) {
          return 0;
        } */
        while ((high - low) > 0.0001) {
            if (this.calculateT0AtPoint(instru, spot, strike, int_rate, expiry_date, (high + low) / 2, type) > mkt_price) {
                high = (high + low) / 2;
            }
            else {
                low = (high + low) / 2;
            }
        }
        iv = (high + low) / 2;
        return iv;
    }
    calculateT0AtPoint(instru, spot, strike, int_rate, expiry_date, volatility, type, add_days) {
        let t0 = 0;
        let date_expiry = new Date(expiry_date);
        if (instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
        }
        else {
            date_expiry.setHours(15, 30, 0);
        }
        if (!add_days) {
            add_days = 0;
        }
        let date_now = new Date();
        // date_now.setDate(date_now.getDate() + add_days);
        let days_diff = this.calcWorkingDays(date_now, date_expiry);
        days_diff = days_diff - add_days;
        let seconds = days_diff * 86400;
        // let seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let delta_t = (Math.floor(hours / 24)) / 365.0; // time
        if (hours < 12) {
            return 0;
        }
        else {
            let volt = volatility / 100;
            int_rate = int_rate / 100;
            let d1 = (Math.log(spot / strike) + (int_rate + (Math.pow(volt, 2) / 2)) * delta_t) / (volt * Math.sqrt(delta_t));
            // let d2 = (Math.log(spot / strike) + (int_rate - (Math.pow(volt, 2) / 2)) * delta_t) / (volt * Math.sqrt(delta_t));
            let d2 = d1 - (volt * Math.sqrt(delta_t));
            let fv_strike = (strike) * Math.exp(-1 * int_rate * delta_t);
            if (type === _common_models__WEBPACK_IMPORTED_MODULE_1__.PositionTypeForPayOff.CE) {
                t0 = spot * this.getCDF(d1) - fv_strike * this.getCDF(d2);
            }
            if (type === _common_models__WEBPACK_IMPORTED_MODULE_1__.PositionTypeForPayOff.PE) {
                t0 = fv_strike * this.getCDF(-1 * d2) - spot * this.getCDF(-1 * d1);
            }
        }
        return t0;
    }
    getCDF(x) {
        let standardDeviation = Math.sqrt(this.variance);
        return 0.5 * this.erfc(-(x - this.mean) / (standardDeviation * Math.sqrt(2)));
    }
    // Complementary error function
    // From Numerical Recipes in C 2e p221
    erfc(x) {
        let z = Math.abs(x);
        let t = 1 / (1 + z / 2);
        let r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 +
            t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 +
                t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 +
                    t * (-0.82215223 + t * 0.17087277)))))))));
        return x >= 0 ? r : 2 - r;
    }
    playAudio(type) {
        let relativePath = '';
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.isProduction === false) {
            relativePath = '../';
        }
        let audio = new Audio();
        if (type === 'success') {
            audio.src = relativePath + "assets/audio/beep-25-success.mp3";
        }
        else if (type === 'error') {
            audio.src = relativePath + "assets/audio/beep-02.mp3";
        }
        else if (type === 'warn') {
            audio.src = relativePath + "assets/audio/beep-05.mp3";
        }
        audio.load();
        audio.play();
    }
    get(urlToFetch) {
        let httpOptions = {};
        let url = urlToFetch;
        return this.http.get(url, httpOptions);
    }
    getZerodhaMargin(instru, month, curr_positions_trades, exchange) {
        let formData = new FormData();
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
        for (let i = 0; i < curr_positions_trades.length; i++) {
            let element = curr_positions_trades[i];
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
                let pos_strike = element.scrip.slice(0, -2); // remove CE PE at end
                let type = '';
                if (element.scrip.includes('CE')) {
                    type = 'CE';
                }
                if (element.scrip.includes('PE')) {
                    type = 'PE';
                }
                let trade = 'sell';
                if (element.qty > 0) {
                    trade = 'buy';
                }
                let exch = 'CDS';
                if (exchange.includes('NIFTY')) {
                    exch = 'NFO';
                }
                let qtyMultiple = 1000;
                if (exchange === 'NIFTY') {
                    qtyMultiple = 1;
                }
                else if (exchange === 'BANKNIFTY') {
                    qtyMultiple = 1;
                }
                let scrip = instru + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.year + month;
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
        return this.http.post('https://zerodha.com/margin-calculator/SPAN', formData); /* .subscribe(
          (response) => console.log('ZERODHA MARGIN: ', response),
          (error) => console.log('ZERODHA MARGIN ERROR: ', error)
        ); */
    }
    sendSubscriptions(strikes) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'aliceblue') {
            this.aliceblueService.sendSubscriptions(strikes);
        }
        else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'angel') {
            this.angelService.sendSubscriptions(strikes);
        }
    }
    connectWebsocket(access_token) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'aliceblue') {
            this.aliceblueService.connectWebsocket(access_token);
        }
        else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'angel') {
            this.angelService.angelLogin();
        }
    }
    isSocketConnected() {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'aliceblue') {
            return this.websocketService.isSocketConnected();
        }
        else if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'angel') {
            return this.angelWS.isSocketConnected();
        }
    }
    auth() {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            return this.fyersService.auth();
        }
    }
    getTokenUrl(auth_code, appId) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            return this.fyersService.getTokenUrl(auth_code, appId);
        }
    }
    getFunds(access_token) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            return this.fyersService.getFunds(access_token);
        }
    }
    getPositions(access_token) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            return this.fyersService.getPositions(access_token);
        }
    }
    getOrders(access_token) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            return this.fyersService.getOrders(access_token);
        }
    }
    placeOrder(access_token, symbol, qty, orderType, side, productType, limitPrice, stopPrice) {
        if (_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.RestMode === 'fyers') {
            let order = {
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
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_common_fyers_service__WEBPACK_IMPORTED_MODULE_2__.FyersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_common_aliceblue_service__WEBPACK_IMPORTED_MODULE_3__.AliceblueService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_common_angel_service__WEBPACK_IMPORTED_MODULE_4__.AngelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_5__.AngelWebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_6__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_common_map_service__WEBPACK_IMPORTED_MODULE_7__.MapService)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8748:
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartComponent": () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-annotation */ 2057);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/map.service */ 397);
/* harmony import */ var _common_application_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/application.constant */ 8001);
/* harmony import */ var _common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models */ 8077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ 900);
/* harmony import */ var _common_websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/websocket.service */ 4440);
/* harmony import */ var _common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/angelwebsocket.service */ 4991);
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart.service */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stock-chart/stock-chart.component */ 8805);



// import { prependOnceListener } from 'process';












function ChartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const alert_r11 = restoredCtx.$implicit; return alert_r11.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_select_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const alert_r11 = restoredCtx.$implicit; return alert_r11.instru = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "NIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "BANKNIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "USDINR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const alert_r11 = restoredCtx.$implicit; return alert_r11.scrip1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const alert_r11 = restoredCtx.$implicit; return alert_r11.scrip2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const alert_r11 = restoredCtx.$implicit; return alert_r11.expiry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_select_ngModelChange_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const alert_r11 = restoredCtx.$implicit; return alert_r11.compare = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_5_Template_input_ngModelChange_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const alert_r11 = restoredCtx.$implicit; return alert_r11.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", alert_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", alert_r11.instru);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", alert_r11.scrip1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", alert_r11.scrip2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", alert_r11.expiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", alert_r11.compare);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", alert_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.getAlertLtp(alert_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](alert_r11.status);
} }
function ChartComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", o_r21.instru, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", o_r21.scrip, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", o_r21.qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", o_r21.price, " ");
} }
function ChartComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "canvas", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("datasets", ctx_r2.lineChartData)("labels", ctx_r2.lineChartLabels)("options", ctx_r2.lineChartOptions)("colors", ctx_r2.lineChartColors)("legend", ctx_r2.lineChartLegend)("chartType", ctx_r2.lineChartType)("plugins", ctx_r2.lineChartPlugins);
} }
function ChartComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_100_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r24.simulate_instru = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "NIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "BANKNIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "USDINR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_100_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r26.simulateExpiryDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_100_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r27.simulateStartDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](33); return _r23.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Import");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r29.loadSimulatedNextMins(-120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "-120");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r30.loadSimulatedNextMins(120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "+120");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r31.loadSimulatedNextMins(-15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r32.loadSimulatedNextMins(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "+15");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r33.loadSimulatedNextMins(-5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r34.loadSimulatedNextMins(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "+5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r35.loadSimulatedNextMins(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_div_100_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r36.loadSimulatedNextMins(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "+1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_100_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r37.show_simulate_charts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Show simulate charts");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "input", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ChartComponent_div_100_Template_input_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r38.uploadExpiryFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.simulate_instru);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.simulateExpiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.simulateStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.show_simulate_charts);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Date Time: ", ctx_r3.simulateCurrDateTimeString, "");
} }
function ChartComponent_tr_117_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_117_td_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44); const pos_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; return pos_r39.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_117_td_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44); const pos_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; return pos_r39.selectedActual = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pos_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", pos_r39.selected)("disabled", pos_r39.exit !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", pos_r39.selectedActual)("disabled", pos_r39.exit !== 0);
} }
const _c0 = function (a0) { return { "positionExited": a0 }; };
const _c1 = function (a0, a1) { return { "text-danger": a0, "text-success": a1 }; };
function ChartComponent_tr_117_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChartComponent_tr_117_td_1_Template, 4, 4, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_117_Template_input_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const pos_r39 = restoredCtx.$implicit; return pos_r39.qty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_117_Template_input_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const pos_r39 = restoredCtx.$implicit; return pos_r39.scrip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_117_Template_input_ngModelChange_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const pos_r39 = restoredCtx.$implicit; return pos_r39.expiry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_117_Template_input_ngModelChange_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const pos_r39 = restoredCtx.$implicit; return pos_r39.entry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_tr_117_Template_input_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const pos_r39 = restoredCtx.$implicit; return pos_r39.exit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_tr_117_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const pos_r39 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r54.splitPosition(pos_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_tr_117_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const pos_r39 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r55.deletePosition(pos_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pos_r39 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c0, pos_r39.exit !== 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.payoff_overlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("step", ctx_r4.stepValue)("ngModel", pos_r39.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", pos_r39.scrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", pos_r39.expiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", pos_r39.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", pos_r39.exit);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r4.getLTP_strike(pos_r39), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](13, _c1, pos_r39.pnl < 0, pos_r39.pnl > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r4.getPnL(pos_r39), " ");
} }
function ChartComponent_div_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "canvas", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "canvas", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "canvas", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("datasets", ctx_r6.finLineChartDataInstru)("labels", ctx_r6.finLineChartLabelsInstru)("options", ctx_r6.finLineChartOptions)("colors", ctx_r6.finLineChartColors)("legend", ctx_r6.lineChartLegend)("chartType", ctx_r6.lineChartType)("plugins", ctx_r6.lineChartPlugins);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("datasets", ctx_r6.finLineChartData1)("labels", ctx_r6.finLineChartLabels1)("options", ctx_r6.finLineChartOptions)("colors", ctx_r6.finLineChartColors)("legend", ctx_r6.lineChartLegend)("chartType", ctx_r6.lineChartType)("plugins", ctx_r6.lineChartPlugins);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("datasets", ctx_r6.finLineChartData2)("labels", ctx_r6.finLineChartLabels2)("options", ctx_r6.finLineChartOptions)("colors", ctx_r6.finLineChartColors)("legend", ctx_r6.lineChartLegend)("chartType", ctx_r6.lineChartType)("plugins", ctx_r6.lineChartPlugins);
} }
function ChartComponent_div_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Update 27 Nov:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Maintain T+0 Monitor extra buying options and buy and exit whenever required. Shift straddle if spot breaching breakeven. Move other side hedge whenever required. End result for the Fly is the straddle one strike near to a side's hedge on the Expiry day. Exit the Fly if getting 3% on deployed capital in the week and move to next week. During the day, maintain your T+0 slope. Do that using extra buying and maintaining appropriate distance of hedge from straddle. If spot is nearing breakeven, make sure that side hedge distance is less than straddle combined premium. At end of the day, if required, then adjust straddle and hedges to achieve the payoff structure and T0 you want. T0 gives your pnl of the day irrespective of whether you are shifting your straddle or not. So maintaining T0 slope is important. If you are shifting straddle constantly, you might capture extra theta decay during the day, but will not be much as compared to original straddle. You will anyways be shifting the straddle at end of day. Not required to shift straddle constantly. Shift straddle has to be shifted when breakeven is breached, because loss rate increases after that at end of day. Also review payoff structure at end of day. Add another lower quantity closer hedged fly if required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Straddle Adjustments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Move straddle legs as per the trend. Not early (to avoid random moves) and Not Late (ITM loss and lower premium) Moving frequently leads to getting lower premium over time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Hedge Adjustments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Hedges should not be too far and not too close. Too far increases overnight risk. Too close results in late profit realization. Manage intraday moves with extra buy. Maintaining T0 is important. Move untested side hedge inside if cheap. Add extra small quantity of buy to manage T0 line according to trend. Monitor option chart for this. Look for EMA confirmation, S/R breach for adjustment of straddle and buys. Max loss on a side should be 100 points. In terms of Rs., do 100 * num. lots. Hedge should eventually be at the distance less than straddle premium. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Loss less:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " A side becomes loss less if NET CREDIT is GREATER than HEDGE DISTANCE on that side. Normally you would have atleast 400 credit in straddle and pay upto 200 on hedges. So net credit is 200. So straddle around 200 points away from hedge can make that side loss less. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Strangle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Sell naked far OTM CE or strangle. Exit the naked option if SL hit. Keep moving untested side naked sell inside. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "NEW FLY:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, " If BNF near of crossing breakeven, make CLOSE-HEDGED fly with lower qty at that point. Exit this new fly if BNF moving out of its breakevens. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ChartComponent_app_stock_chart_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-stock-chart");
} }
function ChartComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Straddle Charts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r56.straddle1instru = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "NIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "BANKNIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "USDINR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r58.straddle1expiryDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r59.straddle1scrip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r60.straddle2instru = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "NIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "BANKNIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "USDINR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r61.straddle2expiryDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r62.straddle2scrip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_select_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r63.straddle3instru = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "NIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "BANKNIFTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "USDINR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r64.straddle3expiryDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_div_181_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r65.straddle3scrip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "canvas", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle1instru);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle1expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle1scrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle2instru);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle2expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle2scrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle3instru);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle3expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9.straddle3scrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("datasets", ctx_r9.i1ChartData)("labels", ctx_r9.i1ChartLabels)("options", ctx_r9.i1ChartOptions)("colors", ctx_r9.i1ChartColors)("legend", ctx_r9.i1ChartLegend)("chartType", ctx_r9.i1ChartType)("plugins", ctx_r9.i1ChartPlugins);
} }
function ChartComponent_div_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Charts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "iframe", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "iframe", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class ChartComponent {
    constructor(appService, mapService, websocketService, angelWS, chartService) {
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
        this.simulateExpiryDate = '2022-01-06';
        this.simulateStartDate = '2022-01-06';
        this.simulateCurrDateObj = new Date();
        this.simulateTimeMins = 5;
        this.simulateCurrHour = 9;
        this.simulateCurrMins = 15;
        this.simulateCurrDateTimeString = '';
        this.payoff_overlay = false;
        this.hide_payoff = false;
        this.multi_t0 = false;
        this.show_simulate_charts = false;
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
        this.lineChartLabels = [ /* 'January', 'February', 'March', 'April', 'May', 'June', 'July' */];
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
            },
            {
                borderColor: 'black',
                borderWidth: 1,
                pointRadius: 0
            },
            {
                borderColor: '#205f87',
                borderWidth: 1,
                pointRadius: 0
            },
            {
                borderColor: '#6fb9e8',
                borderWidth: 1,
                pointRadius: 0
            },
            {
                borderColor: '#35A4EB',
                borderWidth: 2,
                pointRadius: 0,
                borderDash: [10, 5]
            },
            {
                borderColor: 'black',
                borderWidth: 1,
                pointRadius: 0,
                borderDash: [10, 5]
            },
            {
                borderColor: '#35A4EB',
                borderWidth: 2,
                pointRadius: 0,
                borderDash: [10, 5]
            },
            {
                borderColor: '#35A4EB',
                borderWidth: 2,
                pointRadius: 0,
                borderDash: [10, 5]
            },
        ];
        this.finLineChartColors = [
            {
                borderColor: '#35A4EB',
                borderWidth: 2,
                pointRadius: 0
            },
        ];
        this.lineChartLegend = false; // true
        this.lineChartType = 'line';
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__];
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
                yAxes: [
                    {
                        id: 'y-axis-0',
                        position: 'left',
                        /* ticks: {
                          max: 1,
                        } */
                    },
                    {
                        id: 'y-axis-1',
                        position: 'right',
                        /* gridLines: {
                          color: 'rgba(255,0,0,0.3)',
                        },
                        ticks: {
                          fontColor: 'red',
                        } */
                        /* ticks: {
                          min: 71,
                          max: 77,
                        } */
                    }
                ]
            },
            tooltips: {
                mode: 'index',
                intersect: false,
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
        this.i1ChartColors = [{ borderColor: '#35A4EB', borderWidth: 2, pointRadius: 0 }, { borderColor: 'black', borderWidth: 1, pointRadius: 0 },];
        this.i1ChartLegend = false; // true
        this.i1ChartType = 'line';
        this.i1ChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__];
        this.intradayWatch = [
            { scrip: 'FUT', instru: 'USDINR', expiry: _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.USDINR_FUT_MONTH, },
            { scrip: '74CE', instru: 'USDINR', expiry: '2020-11-13', },
            { scrip: '74PE', instru: 'USDINR', expiry: '2020-11-13', },
            { scrip: '74.5CE', instru: 'USDINR', expiry: '2020-11-13', },
            { scrip: '74.5PE', instru: 'USDINR', expiry: '2020-11-13', },
            /* { scrip: '73.25CE', instru: 'USDINR', expiry: '2020-10-23', },
            { scrip: '73.25PE', instru: 'USDINR', expiry: '2020-10-23', },
            { scrip: '73.5CE', instru: 'USDINR', expiry: '2020-10-23', },
            { scrip: '73.5PE', instru: 'USDINR', expiry: '2020-10-23', }, */
        ];
        this.appService.payOffEvent$.subscribe(res => {
            console.log('payOffEvent subcribe: ', res);
            // this.rest_res = res;
            let scrip = this.parseSymbol(res.symbol);
            console.log('Adding scrip to strategy: ' + scrip);
            /* let qty = -450;
            if (this.instru === 'BANKNIFTY') {
              qty = 25;
            }
            if (this.instru === 'USDINR') {
              qty = 1000;
            } */
            this.addPosition(res.qty, scrip, res.ltp); // TODO: check instru for lot size
        });
        this.appService.chartEvent$.subscribe(res => {
            console.log('chartEvent subcribe: ', res);
            // this.rest_res = res;
            let scrip = this.parseSymbol(res.symbol);
            console.log('Adding scrip to chart: ' + scrip);
            this.addScripToChart(scrip, res.type);
            this.appService.stockChartEvent$.next({ symbol: res.symbol, type: res.type, currdate: this.simulateCurrDateObj });
        });
        this.websocketService.websocketEvent$.subscribe(res => {
            console.log('chart websocketEvent: ', res);
            if (res === 'connected') {
                this.doStrategiesSubscriptions();
            }
        });
        this.angelWS.websocketEvent$.subscribe(res => {
            console.log('chart websocketEvent: ', res);
            if (res === 'connected') {
                this.doStrategiesSubscriptions();
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
    parseSymbol(symbol) {
        symbol = symbol.replace('NSE:', '');
        let instru = '';
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
        let type = '';
        if (symbol.includes('CE')) {
            type = 'CE';
        }
        if (symbol.includes('PE')) {
            type = 'PE';
        }
        symbol = symbol.slice(0, -2); // remove CE PE at end
        let strike = symbol.substring(5);
        let expiry = symbol.substring(0, 5); // 20N08 20JUN 20911
        return strike + type;
    }
    ngOnInit() {
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
        for (let index = 0; index < _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.numAlerts; index += 1) {
            this.alerts.push({ selected: false, scrip1: '40000CE', scrip2: '', instru: 'BANKNIFTY', expiry: '2022-01-07', compare: '>', price: 20, status: '' });
        }
        let alert_interval = setInterval(() => {
            if (this.alerts) {
                this.alerts.forEach((alert) => {
                    alert.status = '';
                    if (alert.selected) {
                        let ltp = null;
                        if (alert.scrip1) {
                            let ltp1 = this.getLTP_strike({ scrip: alert.scrip1 }, alert.instru, alert.expiry);
                            ltp = ltp1;
                            if (alert.scrip2) {
                                let ltp2 = this.getLTP_strike({ scrip: alert.scrip2 }, alert.instru, alert.expiry);
                                ltp += ltp2;
                            }
                        }
                        else { // index
                            ltp = this.mapService.getLtp(alert.instru);
                        }
                        if (alert.compare === '>') {
                            if (ltp > alert.price) {
                                alert.status = 'Alert';
                                this.appService.playAudio('success');
                            }
                            else {
                                alert.status = '';
                            }
                        }
                        if (alert.compare === '<') {
                            if (ltp < alert.price) {
                                alert.status = 'Alert';
                                this.appService.playAudio('success');
                            }
                            else {
                                alert.status = '';
                            }
                        }
                    }
                });
            }
        }, 1000);
        let refresh_interval = setInterval(() => {
            if (!this.hide_payoff) {
                this.updateChartData(this.payOffData);
            }
            this.getCEPEWeightage();
        }, 5000);
        let refresh_intervalP = setInterval(() => {
            if (!this.hide_payoff) {
                this.getPayoff();
            }
        }, 60000);
        let refresh_intervalI = setInterval(() => {
            //this.updateIntradayChartData();
        }, 2000);
        for (let num = 1; num <= 5; num++) {
            let curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));
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
    ordersTextareaUpdated(event) {
        // console.log(this.ordersTextarea);
        if (this.orders_broker === 'upstox') {
            this.parseUpstoxOrders();
        }
        else if (this.orders_broker === 'zerodha') {
            this.parseZerodhaOrders();
        }
    }
    parseZerodhaOrders() {
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
        let split = this.ordersTextarea.split('COMPLETE\n');
        console.log(split);
        if (split) {
            for (let i = 0; i < split.length; i++) {
                let line = split[i];
                line = line.replace('\n', '\t');
                let details = line.split('\t');
                let o = new _common_models__WEBPACK_IMPORTED_MODULE_3__.OrderPasted();
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
    parseUpstoxOrders() {
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
        let split = this.ordersTextarea.split('\n\t\n');
        // console.log(split);
        if (split) {
            for (let i = 0; i < split.length; i++) {
                let line = split[i];
                let order = line.split('\n');
                console.log(order);
                let o = new _common_models__WEBPACK_IMPORTED_MODULE_3__.OrderPasted();
                o.instru = order[0].split(' ')[0];
                o.expiry = order[1].split(' ')[1];
                o.scrip = order[0].split(' ')[1];
                o.symbol = this.getMapKeyString(o.instru, o.expiry, o.scrip);
                let details = order[3].split('\t');
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
    addOrdersToStrategy() {
        for (let i = 0; i < this.orders_parsed.length; i++) {
            this.addPosition(this.orders_parsed[i].qty, this.orders_parsed[i].scrip, this.orders_parsed[i].price);
        }
    }
    exportToCSV(num) {
        let export_file_name = 'Strategy_' + num + '_' + this.getDateInFormat() + '.csv';
        console.log('exporting: ', export_file_name);
        let curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));
        if (curr_positions && curr_positions.trades) {
            let instru = curr_positions.instru;
            let expiryDate = curr_positions.expiry;
            let curr_positions_trades = curr_positions.trades;
            console.log('exporting:', instru, expiryDate, curr_positions_trades);
            let str = '';
            str += instru + ',' + expiryDate + '\r\n';
            curr_positions_trades.forEach(pos => {
                let row = '';
                row += pos.qty + ',' + pos.scrip + ',' + pos.expiry + ',' + pos.entry + ',' + pos.exit;
                str += row + '\r\n';
            });
            const downloadFile = new Blob([str], {
                type: 'application/x-msdownload',
            });
            /* if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              // for IE
              window.navigator.msSaveOrOpenBlob(downloadFile, export_file_name);
            } else { */
            const fileURL = URL.createObjectURL(downloadFile);
            const link = document.createElement('a');
            link.href = fileURL;
            link.target = '_blank';
            document.body.appendChild(link);
            link.download = export_file_name;
            link.click();
            link.parentNode.removeChild(link);
            // }
        }
    }
    getDateInFormat() {
        let date = new Date();
        let d = date.getDate();
        let m = date.getMonth() + 1; //Month from 0 to 11
        let y = date.getFullYear();
        let h = date.getHours();
        let mins = date.getMinutes();
        let s = date.getSeconds();
        let format = '' + (d <= 9 ? '0' + d : d) + (m <= 9 ? '0' + m : m) + y + '_' + (h <= 9 ? '0' + h : h) + (mins <= 9 ? '0' + mins : mins) + (s <= 9 ? '0' + s : s);
        return format;
    }
    uploadExpiryFile(fileInput) {
        let fileReaded = fileInput.target.files[0];
        let reader = new FileReader();
        reader.readAsText(fileReaded);
        reader.onload = e => {
            let csv = String(reader.result);
            // console.log('csv:', csv);
            this.loadExpiryFile(csv);
        };
    }
    loadExpiryFile(importData) {
        let allTextLines_all_data = importData.split(/\r|\n|\r/);
        let allTextLines = allTextLines_all_data.filter(function (elem) {
            return elem !== '';
        });
        // console.log('allTextLines: ', allTextLines);
        let firstLine = allTextLines[0].split(','); // ignore first line header
        _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.simulateData = {};
        _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.stockChartData = {};
        for (let index = 1; index < allTextLines.length; index++) {
            // Ticker	Date/Time	Open	High	Low	Close	Volume	Open Interest
            // BANKNIFTY, 30-07-2021 9:15:00, 34698.8, 34698.8, 34445.4, 34607.7, 0, 0
            let split = allTextLines[index].split(',');
            let instru_name = split[0];
            /* if (instru_name === 'USDINR') {
              instru_name = 'USDINR_FUT';
            } */
            let timeDict = {};
            timeDict = _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.simulateData[instru_name];
            if (!timeDict) {
                timeDict = {};
            }
            timeDict[split[1]] = Number(split[5]); // time = closing price
            _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.simulateData[instru_name] = timeDict;
            let instruDict = [];
            instruDict = _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.stockChartData[instru_name];
            if (!instruDict) {
                instruDict = [];
            }
            let datesplit = split[1].split(' ');
            let dateparts = datesplit[0].split('-');
            let timeparts = datesplit[1].split(':');
            let datecurr = new Date(Number(dateparts[2]), Number(dateparts[1]) - 1, Number(dateparts[0]), Number(timeparts[0]), Number(timeparts[1]), 0).getTime();
            instruDict.push([datecurr, Number(split[2]), Number(split[3]), Number(split[4]), Number(split[5]), Number(split[6])]);
            _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.stockChartData[instru_name] = instruDict;
        }
        console.log('simulateData', _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.simulateData);
        console.log('stockChartData', _common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.stockChartData);
        if (_common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.simulateData) {
            _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.isSimulatedStrategy = true;
        }
        this.simulateCurrDateObj = new Date(this.simulateStartDate);
        this.simulateCurrDateObj.setHours(this.simulateCurrHour);
        this.simulateCurrDateObj.setMinutes(this.simulateCurrMins);
        let curr_date_string = '' + ('0' + this.simulateCurrDateObj.getDate()).slice(-2) + '-' + ('0' + (this.simulateCurrDateObj.getMonth() + 1)).slice(-2) + '-' + this.simulateCurrDateObj.getFullYear();
        this.simulateCurrDateTimeString = curr_date_string + ' ' + ('0' + this.simulateCurrDateObj.getHours()).slice(-2) + ':' + ('0' + this.simulateCurrDateObj.getMinutes()).slice(-2) + ':00'; // '21-10-2021 09:15:00'
        this.loadSimulatedOCForTime(this.simulate_instru, this.simulateCurrDateTimeString, this.simulateExpiryDate);
        this.loadOptionChain(this.simulate_instru, this.simulateExpiryDate);
    }
    loadSimulatedNextMins(mins = null) {
        if (this.simulateTimeAdv === 'add' || (mins && mins > 0)) {
            console.log('adding next', mins);
            if (mins) {
                this.simulateCurrDateObj.setMinutes(this.simulateCurrDateObj.getMinutes() + mins);
            }
            else {
                this.simulateCurrDateObj.setMinutes(this.simulateCurrDateObj.getMinutes() + Number(this.simulateTimeMins));
            }
            if ((this.simulateCurrDateObj.getHours() === 15 && this.simulateCurrDateObj.getMinutes() > 30) || this.simulateCurrDateObj.getHours() > 15) {
                let eod = new Date(this.simulateCurrDateObj);
                eod.setHours(15);
                eod.setMinutes(30);
                let diff = this.simulateCurrDateObj.getTime() - eod.getTime(); // difference in milliseconds
                let newday = new Date(this.simulateCurrDateObj);
                newday.setDate(newday.getDate() + 1);
                newday.setHours(9);
                newday.setMinutes(15);
                newday.setMilliseconds(newday.getMilliseconds() + diff);
                this.simulateCurrDateObj = new Date(newday);
                //console.log(eod, diff, newday);
            }
        }
        if (this.simulateTimeAdv === 'subtract' || (mins && mins < 0)) {
            console.log('subtract next', mins);
            if (mins) {
                console.log('mins', this.simulateCurrDateObj.getMinutes());
                this.simulateCurrDateObj.setMinutes(this.simulateCurrDateObj.getMinutes() + mins);
                console.log('mins2', this.simulateCurrDateObj.getMinutes());
            }
            else {
                this.simulateCurrDateObj.setMinutes(this.simulateCurrDateObj.getMinutes() - Number(this.simulateTimeMins));
            }
            if ((this.simulateCurrDateObj.getHours() === 9 && this.simulateCurrDateObj.getMinutes() < 15) || this.simulateCurrDateObj.getHours() < 9) {
                let sod = new Date(this.simulateCurrDateObj);
                sod.setHours(9);
                sod.setMinutes(15);
                let diff = sod.getTime() - this.simulateCurrDateObj.getTime(); // difference in milliseconds
                let newday = new Date(this.simulateCurrDateObj);
                newday.setDate(newday.getDate() - 1);
                newday.setHours(15);
                newday.setMinutes(30);
                newday.setMilliseconds(newday.getMilliseconds() - diff);
                this.simulateCurrDateObj = new Date(newday);
                //console.log(sod, diff, newday);
            }
        }
        let curr_date_string = '' + ('0' + this.simulateCurrDateObj.getDate()).slice(-2) + '-' + ('0' + (this.simulateCurrDateObj.getMonth() + 1)).slice(-2) + '-' + this.simulateCurrDateObj.getFullYear();
        this.simulateCurrDateTimeString = curr_date_string + ' ' + ('0' + this.simulateCurrDateObj.getHours()).slice(-2) + ':' + ('0' + this.simulateCurrDateObj.getMinutes()).slice(-2) + ':00'; // '21-10-2021 09:15:00'
        this.loadSimulatedOCForTime(this.simulate_instru, this.simulateCurrDateTimeString, this.simulateExpiryDate);
    }
    loadSimulatedOCForTime(instru, dateTimeString, expiry_date) {
        let curr_date_time = dateTimeString;
        console.log('loadSimulatedOCForTime', curr_date_time);
        for (let [key, value] of Object.entries(_common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.simulateData)) {
            // console.log(`${key}: ${value}`);
            if (key === instru || (key.startsWith(instru) && (key.endsWith('CE') || key.endsWith('PE')))) {
                if (key === instru) {
                    let symbol = instru;
                    if (instru === 'NIFTY') {
                        symbol = 'NIFTY50';
                    }
                    if (instru === 'USDINR') {
                        let expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.year + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.USDINR_FUT_MONTH];
                        let expiryMonth = null;
                        if (expiryDate.getMonth() + 1 === 10) {
                            expiryMonth = 'O';
                        }
                        else if (expiryDate.getMonth() + 1 === 11) {
                            expiryMonth = 'N';
                        }
                        else if (expiryDate.getMonth() + 1 === 12) {
                            expiryMonth = 'D';
                        }
                        else {
                            expiryMonth = expiryDate.getMonth() + 1;
                        }
                        let expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
                        symbol = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.USDINR_FUT_MONTH + 'FUT';
                    }
                    this.mapService.setLtp(symbol, value[curr_date_time]);
                }
                else {
                    let scrip = key;
                    scrip = scrip.replace(instru, '');
                    scrip = scrip.replace('WK', '');
                    let symbol = this.getMapKeyString(instru, expiry_date, scrip);
                    let ltp = value[curr_date_time];
                    this.mapService.setLtp(symbol, ltp);
                }
            }
        }
        this.addScripToChart(this.simulate_instru, null);
        this.getPayoff();
        console.log('ltpMap', this.mapService.ltpMap);
    }
    getMapKeyString(instru, expiry_date, scrip) {
        let is_monthly_expiry = false;
        let expiryDate = new Date(expiry_date);
        expiryDate.setHours(0, 0, 0, 0);
        let tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthlyExpiryDates;
        if (instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthlyExpiryDatesUSDINR;
        }
        for (let key in tempmonthlyExpiryDates) {
            if (tempmonthlyExpiryDates.hasOwnProperty(key)) {
                // console.log(key + " -> " + tempmonthlyExpiryDates[key] + ' ' + expiryDate);
                if (expiryDate.getTime() === tempmonthlyExpiryDates[key].getTime()) {
                    // console.log('monthly expiry matched');
                    is_monthly_expiry = true;
                    break;
                }
            }
        }
        let expiry = null;
        if (is_monthly_expiry) {
            expiry = '' + (expiryDate.getFullYear() - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthsMapping[expiryDate.getMonth() + 1];
        }
        else {
            let expiryMonth = null;
            if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
            }
            else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
            }
            else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
            }
            else {
                expiryMonth = expiryDate.getMonth() + 1;
            }
            expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
        }
        let str = instru + expiry + scrip;
        return str;
    }
    importCSV(fileInput, num) {
        let fileReaded = fileInput.target.files[0];
        let reader = new FileReader();
        reader.readAsText(fileReaded);
        reader.onload = e => {
            let csv = String(reader.result);
            console.log('csv:', csv);
            this.loadPayoffData(num, true, csv);
        };
    }
    loadImportedPositions(importData) {
        let allTextLines_all_data = importData.split(/\r|\n|\r/);
        let allTextLines = allTextLines_all_data.filter(function (elem) {
            return elem !== '';
        });
        console.log('allTextLines: ', allTextLines);
        let firstLine = allTextLines[0].split(',');
        let instru = firstLine[0];
        let expiryDate = firstLine[1];
        let trades = [];
        for (let index = 1; index < allTextLines.length; index++) {
            let line = allTextLines[index].split(',');
            trades.push({ qty: Number(line[0]), scrip: line[1], expiry: line[2], entry: Number(line[3]), exit: Number(line[4]) });
        }
        let curr_positions = { instru: '', expiry: '', trades: {} };
        curr_positions.instru = instru;
        curr_positions.expiry = expiryDate;
        curr_positions.trades = trades;
        return curr_positions;
    }
    loadOptionChain(instru = null, expiryDate = null) {
        if (instru && expiryDate) {
            this.chartService.optionChainEvent$.next([instru, expiryDate]);
        }
        else if (this.instru && this.expiryDate) {
            this.chartService.optionChainEvent$.next([this.instru, this.expiryDate]);
        }
        else {
            console.log('No data to load');
        }
    }
    doSingleStrategySubscription(alert) {
        if (this.instru && this.expiryDate && this.curr_positions_trades) {
            this.subscribeStrategiesPositionsFeed(this.instru, this.expiryDate, this.curr_positions_trades);
        }
        else {
            console.log('Nothing to subscribe');
        }
    }
    doStrategiesSubscriptions() {
        for (let num = 1; num <= 5; num++) {
            let curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));
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
                let instru = curr_positions.instru;
                let expiryDate = curr_positions.expiry;
                let trades = curr_positions.trades;
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
    subscribeAlerts() {
        let sub = [];
        if (this.alerts) {
            this.alerts.forEach((pos) => {
                if (pos.selected) {
                    if (pos.scrip1) {
                        let e1 = this.getSubscriptionObject(pos.scrip1, pos.instru, pos.expiry);
                        sub.push(e1);
                    }
                    if (pos.scrip2) {
                        let e2 = this.getSubscriptionObject(pos.scrip2, pos.instru, pos.expiry);
                        sub.push(e2);
                    }
                }
            });
        }
        console.log('alerts feed', sub);
        this.appService.sendSubscriptions(sub);
    }
    getSubscriptionObject(scrip, instru, expiry) {
        let symbol = scrip;
        let type = '';
        if (symbol.includes('CE')) {
            type = 'CE';
        }
        if (symbol.includes('PE')) {
            type = 'PE';
        }
        console.log('getSubscriptionObject symbol: ' + symbol);
        symbol = symbol.slice(0, -2); // remove CE PE at end
        let expiryDate = new Date(expiry).toDateString(); // expiry_date
        let e1 = new _common_models__WEBPACK_IMPORTED_MODULE_3__.Instrument();
        e1.expiry = expiryDate;
        e1.instru = instru;
        e1.strike = Number(symbol);
        e1.type = type;
        return e1;
    }
    subscribeStrategiesPositionsFeed(instru, expiry_date, trades) {
        let sub = [];
        trades.forEach(pos => {
            let e1 = this.getSubscriptionObject(pos.scrip, instru, pos.expiry);
            sub.push(e1);
        });
        let expiryDate = new Date(expiry_date).toDateString();
        let e1 = new _common_models__WEBPACK_IMPORTED_MODULE_3__.Instrument();
        e1.expiry = expiryDate;
        e1.instru = instru;
        e1.strike = Number(this.hypo_future_strike);
        e1.type = 'CE';
        sub.push(e1);
        let e2 = new _common_models__WEBPACK_IMPORTED_MODULE_3__.Instrument();
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
    subscribeIntradayWatchFeed(instru, expiry_date, scrip) {
        let sub = [];
        let symbol = scrip;
        let type = '';
        if (symbol.includes('CE')) {
            type = 'CE';
        }
        if (symbol.includes('PE')) {
            type = 'PE';
        }
        console.log('subscribeIntradayWatchFeed symbol: ' + symbol);
        symbol = symbol.slice(0, -2); // remove CE PE at end
        let expiryDate = new Date(expiry_date).toDateString();
        let e1 = new _common_models__WEBPACK_IMPORTED_MODULE_3__.Instrument();
        e1.expiry = expiryDate;
        e1.instru = instru;
        e1.strike = Number(symbol);
        e1.type = type;
        sub.push(e1);
        console.log('intraday watch feed', sub);
        this.appService.sendSubscriptions(sub);
    }
    loadPayoffData(num, isImported = false, importData = null) {
        let curr_positions = null;
        if (!isImported) {
            curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));
        }
        else {
            curr_positions = this.loadImportedPositions(importData);
        }
        this.currLoadNum = num;
        console.log('curr_positions: ', curr_positions);
        this.curr_positions_trades = null;
        if (curr_positions && curr_positions.trades) {
            this.instru = curr_positions.instru;
            this.expiryDate = curr_positions.expiry;
            this.curr_positions_trades = curr_positions.trades;
            this.curr_positions_trades.forEach(e => {
                e.selected = true;
                e.selectedActual = true;
            });
            if (this.instru === 'NIFTY') {
                this.stepValue = 50;
            }
            else if (this.instru === 'BANKNIFTY') {
                this.stepValue = 25;
            }
            else {
                this.stepValue = 1000;
            }
            this.curr_positions_trades.sort((a, b) => {
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
                    return this.compareForSorting(a.scrip, b.scrip);
                }
                if (a.exit !== 0 && b.exit === 0) {
                    return -1;
                }
                if (a.exit === 0 && b.exit !== 0) {
                    return 1;
                }
                let a_symbol = a.scrip.slice(0, -2);
                let b_symbol = b.scrip.slice(0, -2);
                if (a_symbol === b_symbol && a.scrip.includes('CE') && b.scrip.includes('PE')) { // same strike CE PE, CE should occur first
                    return -1;
                }
                if (a_symbol === b_symbol && a.scrip.includes('PE') && b.scrip.includes('CE')) { // same strike CE PE, CE should occur first
                    return 1;
                }
                //return b.scrip.localeCompare(a.scrip); // negative if a is before b
                return this.compareForSorting(a.scrip, b.scrip);
            });
        }
        _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.curr_positions_trades = this.curr_positions_trades;
        this.constructUrlToFetch();
        this.getCEPEWeightage();
    }
    compareForSorting(ascrip, bscrip) {
        // All CE strikes to be before PE
        if (ascrip.includes('CE') && bscrip.includes('PE')) { // CE should occur first
            return -1;
        }
        if (ascrip.includes('PE') && bscrip.includes('CE')) { // CE should occur first
            return 1;
        }
        // same type of options
        let a_symbol = ascrip.slice(0, -2);
        let b_symbol = bscrip.slice(0, -2);
        if (a_symbol > b_symbol) {
            return -1;
        }
        return 1;
    }
    constructUrlToFetch() {
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
    addPosition(qty = null, scrip = null, entry = null) {
        if (this.curr_positions_trades === null) {
            this.curr_positions_trades = [];
        }
        let d = new Date(this.expiryDate);
        let monthNames = ['JAN', 'FEB', 'MAR', 'APR',
            'MAY', 'JUN', 'JUL', 'AUG',
            'SEP', 'OCT', 'NOV', 'DEC'];
        let day = ('0' + d.getDate()).slice(-2);
        let monthIndex = d.getMonth();
        let monthName = monthNames[monthIndex];
        let year = d.getFullYear();
        let dateString = day + monthName + year;
        // console.log('***: ', day + monthName + year);
        this.curr_positions_trades.push({ qty: qty, scrip: scrip, expiry: dateString, entry: entry, exit: 0, selected: true, selectedActual: false });
    }
    addPositionCustom(arr, qty = null, scrip = null, entry = null) {
        let d = new Date(this.expiryDate);
        let monthNames = ['JAN', 'FEB', 'MAR', 'APR',
            'MAY', 'JUN', 'JUL', 'AUG',
            'SEP', 'OCT', 'NOV', 'DEC'];
        let day = ('0' + d.getDate()).slice(-2);
        let monthIndex = d.getMonth();
        let monthName = monthNames[monthIndex];
        let year = d.getFullYear();
        let dateString = day + monthName + year;
        // console.log('***: ', day + monthName + year);
        arr.push({ qty: qty, scrip: scrip, expiry: dateString, entry: entry, exit: 0, selected: true, selectedActual: false });
    }
    splitPosition(pos) {
        this.curr_positions_trades.push({ qty: 0, scrip: pos.scrip, expiry: pos.expiry, entry: pos.entry, exit: pos.exit, selected: true, selectedActual: false });
    }
    deletePosition(pos) {
        let found_index = -100;
        for (let index = 0; index < this.curr_positions_trades.length; index++) {
            let element = this.curr_positions_trades[index];
            if (element.qty === pos.qty && element.scrip === pos.scrip && element.expiry === pos.expiry && element.entry === pos.entry &&
                element.exit === pos.exit) {
                found_index = index;
                break;
            }
        }
        if (found_index !== -100) {
            this.curr_positions_trades.splice(found_index, 1);
        }
    }
    calculatePayoff() {
        this.constructUrlToFetch();
        this.getPayoff();
        this.getMargin();
    }
    reloadPayoffData(num) {
        this.loadPayoffData(num);
        this.getPayoff();
        this.getMargin();
    }
    savePositions(num) {
        // To combine positions of same scrip
        // other way is iterating through the array and use Map with scrip as key and rest of params as value
        const combinedItems = (arr = []) => {
            const res = arr.reduce((acc, obj) => {
                //console.log(obj);
                if (obj.exit !== 0) {
                    acc.push(obj);
                    return acc;
                }
                if (obj.notconsider === true) {
                    return acc;
                }
                //this.curr_positions_trades.push({ qty: qty, scrip: scrip, expiry: dateString, entry: entry, exit: 0 });
                let found = false;
                for (let i = 0; i < acc.length; i++) {
                    if (acc[i].notconsider === true) {
                        continue;
                    }
                    if (acc[i].exit === 0 && acc[i].scrip === obj.scrip && acc[i].expiry === obj.expiry) {
                        found = true;
                        if ((acc[i].qty > 0 && obj.qty > 0) || (acc[i].qty < 0 && obj.qty < 0)) {
                            acc[i].entry = ((acc[i].entry * acc[i].qty) + (obj.entry * obj.qty)) / (acc[i].qty + obj.qty);
                            acc[i].entry = (Math.round((acc[i].entry + 0.00001) * 10000) / 10000); // round to four decimals
                            acc[i].qty += obj.qty;
                        }
                        else {
                            let qtydiff = acc[i].qty + obj.qty;
                            if (qtydiff !== 0) { // if quantity mismatch, add another entry
                                if (Math.abs(acc[i].qty) > Math.abs(obj.qty)) {
                                    let copy = Object.assign({}, acc[i]);
                                    copy.qty = qtydiff;
                                    copy.entry = acc[i].entry;
                                    copy.notconsider = true;
                                    acc.push(copy);
                                    acc[i].qty = -obj.qty;
                                    acc[i].exit = obj.entry;
                                    // console.log('qtydiff', qtydiff, copy);
                                }
                                else {
                                    let copy = Object.assign({}, acc[i]);
                                    copy.qty = qtydiff;
                                    copy.entry = obj.entry;
                                    copy.notconsider = true;
                                    acc.push(copy);
                                    acc[i].exit = obj.entry;
                                }
                            }
                            else {
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
        this.curr_positions_trades = combinedItems(this.curr_positions_trades);
        //console.log(ne);
        console.log(this.curr_positions_trades);
        if (confirm('Sure save ' + num + '?')) {
            let curr_positions = { instru: '', expiry: '', trades: {} };
            curr_positions.instru = this.instru;
            curr_positions.expiry = this.expiryDate;
            this.curr_positions_trades.forEach(element => {
                delete element.selected;
                delete element.selectedActual;
                delete element.pnl;
            });
            curr_positions.trades = this.curr_positions_trades;
            console.log('Saving positions: ', curr_positions);
            console.log('Saving positions json: ', JSON.stringify(curr_positions));
            localStorage.setItem('curr_positions' + num, JSON.stringify(curr_positions));
            this.reloadPayoffData(num);
            // this.doStrategiesSubscriptions();
            for (let num = 1; num <= 5; num++) {
                let curr_positions = JSON.parse(localStorage.getItem('curr_positions' + num));
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
    }
    getCEPEWeightage() {
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
    unselectStraddlePositions() {
        let strikes = [];
        let straddle_strike;
        let qty;
        if (this.curr_positions_trades) {
            this.curr_positions_trades.forEach(element => {
                if (element.exit === 0) {
                    let pos_strike = element.scrip.slice(0, -2); // remove CE PE at end
                    if (strikes.includes(pos_strike)) {
                        straddle_strike = pos_strike;
                        qty = Math.abs(element.qty);
                    }
                    else {
                        strikes.push(pos_strike);
                    }
                }
            });
            console.log('straddle strike:', straddle_strike);
            if (straddle_strike) {
                this.curr_positions_trades.forEach(element => {
                    if (element.exit === 0) {
                        let pos_strike = element.scrip.slice(0, -2); // remove CE PE at end
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
    whatIsStraddleHedge(straddle_strike, qty, type) {
        let strike;
        if (this.curr_positions_trades) {
            this.curr_positions_trades.forEach(element => {
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
    payoffCheckboxChange(event) {
        if (event.currentTarget.checked) {
            if (this.overlay_strike) {
                let new_strike1 = this.overlay_strike;
                let straddle_strike = this.unselectStraddlePositions();
                let new_premium1_ce = this.getLTP_strike({ scrip: new_strike1 + 'CE' }, this.instru, this.expiryDate);
                this.addPosition(-straddle_strike[1], new_strike1 + 'CE', new_premium1_ce);
                let new_premium1_pe = this.getLTP_strike({ scrip: new_strike1 + 'PE' }, this.instru, this.expiryDate);
                this.addPosition(-straddle_strike[1], new_strike1 + 'PE', new_premium1_pe);
                this.calculatePayoff();
            }
        }
        else {
            this.reloadPayoffData(this.currLoadNum);
        }
    }
    getPayoff() {
        let myPayoff = { chart: [] };
        let ltp = 0;
        if (this.instru === 'USDINR') {
            if (this.use_hypo_future) {
                let ce_premium = this.getLTP_strike({ scrip: this.hypo_future_strike + 'CE' }, this.instru, this.expiryDate);
                let pe_premium = this.getLTP_strike({ scrip: this.hypo_future_strike + 'PE' }, this.instru, this.expiryDate);
                ltp = ce_premium - pe_premium + this.hypo_future_strike; // Find future price from Put Call Parity
                ltp = (Math.round((ltp + 0.00001) * 100) / 100);
                // console.log('hypo fut:' + ltp);
            }
            else {
                ltp = parseFloat(this.getInstruLTP());
                ltp = (Math.round((ltp + 0.00001) * 100) / 100); // TODO: ltp rounding for usdinr to two decimal
            }
        }
        else {
            ltp = parseInt(this.getInstruLTP());
        }
        console.log('ltp is: ', ltp);
        let range = 1000;
        let increment = 1;
        let multiple = 50;
        if (this.instru === 'BANKNIFTY') {
            range = 3000;
            multiple = 100;
        }
        if (this.instru === 'USDINR') {
            range = 2;
            increment = 0.01;
            multiple = 0.25;
        }
        if (this.payoff_range && this.instru !== 'USDINR') {
            range = this.payoff_range;
        }
        let lower_range = ltp - range;
        let upper_range = ltp + range;
        let pnlForBreakeven = [];
        let pnlExitedPos = 0;
        let actualPos = [];
        let overlayPos1 = [];
        let overlayPos2 = [];
        let overlayPos3 = [];
        if (this.curr_positions_trades) {
            if (this.ce_side_overlay || this.pe_side_overlay) {
                let straddle_strike = this.unselectStraddlePositions();
                this.curr_positions_trades.forEach(element => {
                    overlayPos1.push(element);
                    overlayPos2.push(element);
                    overlayPos3.push(element);
                });
                let type = 'CE';
                if (this.pe_side_overlay) {
                    type = 'PE';
                    multiple = -100;
                }
                let hedge_strike = this.whatIsStraddleHedge(straddle_strike[0], straddle_strike[1], type);
                let new_strike1 = hedge_strike - multiple;
                let new_premium1_ce = this.getLTP_strike({ scrip: new_strike1 + 'CE' }, this.instru, this.expiryDate);
                this.addPositionCustom(overlayPos1, -straddle_strike[1], new_strike1 + 'CE', new_premium1_ce);
                let new_premium1_pe = this.getLTP_strike({ scrip: new_strike1 + 'PE' }, this.instru, this.expiryDate);
                this.addPositionCustom(overlayPos1, -straddle_strike[1], new_strike1 + 'PE', new_premium1_pe);
                console.log('overlayPos1:', overlayPos1);
                let new_strike2 = hedge_strike - 2 * multiple;
                let new_premium2_ce = this.getLTP_strike({ scrip: new_strike2 + 'CE' }, this.instru, this.expiryDate);
                this.addPositionCustom(overlayPos2, -straddle_strike[1], new_strike2 + 'CE', new_premium2_ce);
                let new_premium2_pe = this.getLTP_strike({ scrip: new_strike2 + 'PE' }, this.instru, this.expiryDate);
                this.addPositionCustom(overlayPos2, -straddle_strike[1], new_strike2 + 'PE', new_premium2_pe);
                console.log('overlayPos2:', overlayPos2);
                let new_strike3 = hedge_strike - 3 * multiple;
                let new_premium3_ce = this.getLTP_strike({ scrip: new_strike3 + 'CE' }, this.instru, this.expiryDate);
                this.addPositionCustom(overlayPos3, -straddle_strike[1], new_strike3 + 'CE', new_premium3_ce);
                let new_premium3_pe = this.getLTP_strike({ scrip: new_strike3 + 'PE' }, this.instru, this.expiryDate);
                this.addPositionCustom(overlayPos3, -straddle_strike[1], new_strike3 + 'PE', new_premium3_pe);
                console.log('overlayPos3:', overlayPos3);
            }
            this.curr_positions_trades.forEach(element => {
                if (element.exit && element.exit > 0) {
                    let pospnl = this.getPnL(element);
                    pnlExitedPos += pospnl;
                }
                if (this.payoff_overlay && element.selectedActual === true) {
                    actualPos.push(element);
                }
            });
            for (let point = lower_range; point <= upper_range; point += increment) {
                let pnl = 0;
                let t0 = 0;
                let t1 = 0;
                let t2 = 0;
                let overlayPnL = 0;
                let overlayT0 = 0;
                let overlayPnL2 = 0;
                let overlayPnL3 = 0;
                let arr = [];
                point = (Math.round((point + 0.00001) * 100) / 100); // for USDINR two decimal places
                if (this.payoff_overlay) {
                    arr = this.calculatePnLAtPoint(this.curr_positions_trades, point, ltp, true);
                    overlayPnL += arr[0];
                    overlayPnL += pnlExitedPos;
                    overlayPnL = (Math.round((overlayPnL + 0.00001) * 100) / 100);
                    overlayT0 += arr[1];
                    overlayT0 += pnlExitedPos;
                    overlayT0 = (Math.round((overlayT0 + 0.00001) * 100) / 100);
                    arr = this.calculatePnLAtPoint(actualPos, point, ltp, false);
                }
                else if (this.ce_side_overlay || this.pe_side_overlay) {
                    arr = this.calculatePnLAtPoint(overlayPos1, point, ltp, true);
                    overlayPnL += arr[0];
                    overlayPnL += pnlExitedPos;
                    overlayPnL = (Math.round((overlayPnL + 0.00001) * 100) / 100);
                    arr = this.calculatePnLAtPoint(overlayPos2, point, ltp, true);
                    overlayPnL2 += arr[0];
                    overlayPnL2 += pnlExitedPos;
                    overlayPnL2 = (Math.round((overlayPnL2 + 0.00001) * 100) / 100);
                    arr = this.calculatePnLAtPoint(overlayPos3, point, ltp, true);
                    overlayPnL3 += arr[0];
                    overlayPnL3 += pnlExitedPos;
                    overlayPnL3 = (Math.round((overlayPnL3 + 0.00001) * 100) / 100);
                    arr = this.calculatePnLAtPoint(this.curr_positions_trades, point, ltp, false);
                }
                else {
                    arr = this.calculatePnLAtPoint(this.curr_positions_trades, point, ltp, false);
                }
                pnl += arr[0];
                pnl += pnlExitedPos;
                pnl = (Math.round((pnl + 0.00001) * 100) / 100);
                t0 += arr[1];
                t0 += pnlExitedPos;
                t0 = (Math.round((t0 + 0.00001) * 100) / 100);
                t1 += arr[2];
                t1 += pnlExitedPos;
                t1 = (Math.round((t1 + 0.00001) * 100) / 100);
                t2 += arr[3];
                t2 += pnlExitedPos;
                t2 = (Math.round((t2 + 0.00001) * 100) / 100);
                pnlForBreakeven.push(pnl);
                myPayoff.chart.push({ Final: pnl, StockPrice: point, Today: t0, T1: t1, T2: t2, Overlay: overlayPnL, OverlayT0: overlayT0, Overlay2: overlayPnL2, Overlay3: overlayPnL3 });
            }
            console.log('myPayoff:', myPayoff);
            this.payOffData = myPayoff;
            this.updateChartData(myPayoff);
            this.breakevens = '';
            for (let i = 1; i < myPayoff.chart.length; i++) {
                let element = myPayoff.chart[i];
                let prev_element = myPayoff.chart[i - 1];
                if ((element.Final > 0 && prev_element.Final <= 0) || (element.Final < 0 && prev_element.Final >= 0)) {
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
    calculatePnLAtPoint(positions, point, ltp, overlay) {
        let pnl = 0;
        let t0 = 0;
        let t1 = 0;
        let t2 = 0;
        positions.forEach(element => {
            /*  {
              qty: 75,
              scrip: '11150CE',
              expiry: '01OCT2020',
              entry: 50,
              exit: 0,
            }, */
            if (element.exit === null || element.exit === 0) {
                let type = null;
                let typet0 = null;
                if (element.scrip.includes('CE') && element.qty < 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.CEsell;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.CE;
                }
                if (element.scrip.includes('PE') && element.qty < 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.PEsell;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.PE;
                }
                if (element.scrip.includes('CE') && element.qty > 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.CEbuy;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.CE;
                }
                if (element.scrip.includes('PE') && element.qty > 0) {
                    type = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.PEbuy;
                    typet0 = _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.PE;
                }
                let pos_strike = element.scrip.slice(0, -2); // remove CE PE at end
                let expiry = element.expiry; // this.expiryDate;
                let d1 = new Date(expiry); // position expiry
                let d2 = new Date(this.expiryDate);
                if (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()) {
                    if (overlay && !element.selected) {
                        pnl += this.getPnL(element);
                    }
                    else {
                        pnl += this.calculatePnLAtPointForStrike(point, pos_strike, element.qty, element.entry, type);
                    }
                }
                else { // for Calendar position - position expiry not same as strategy expiry date
                    let d3 = new Date(); // today
                    let days_diff = this.appService.calcWorkingDays(d3, d2);
                    let add_days = days_diff;
                    // let add_days = Math.round((d2.getTime() - d3.getTime()) / (1000 * 3600 * 24));
                    // console.log('add_days: ', add_days);
                    let mkt_price = this.getLTP_strike({ scrip: element.scrip }, this.instru, expiry);
                    let iv = this.calculateIV(ltp, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.INTEREST_RATE, expiry, typet0, mkt_price);
                    // console.log('*** ', pos_strike, typet0, expiry, iv);
                    let t0_ = this.calculateT0AtPointForStrike(point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.INTEREST_RATE, expiry, iv, typet0, add_days);
                    t0_ = t0_ - element.entry;
                    t0_ = t0_ * element.qty;
                    pnl += t0_;
                }
                // T+0 calculation:
                if (overlay && !element.selected) {
                    t0 += this.getPnL(element);
                }
                else {
                    let mkt_price = this.getLTP_strike({ scrip: element.scrip }, this.instru, expiry);
                    let iv = this.calculateIV(ltp, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.INTEREST_RATE, expiry, typet0, mkt_price);
                    let t0_ = this.calculateT0AtPointForStrike(point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.INTEREST_RATE, expiry, iv, typet0);
                    // console.log('*** ', pos_strike, typet0, expiry, mkt_price, iv, t0_);
                    t0_ = t0_ - element.entry;
                    t0_ = t0_ * element.qty;
                    t0 += t0_;
                    if (this.multi_t0) {
                        let t1_ = this.calculateT0AtPointForStrike(point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.INTEREST_RATE, expiry, iv, typet0, 1);
                        t1_ = t1_ - element.entry;
                        t1_ = t1_ * element.qty;
                        t1 += t1_;
                        let t2_ = this.calculateT0AtPointForStrike(point, pos_strike, _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.INTEREST_RATE, expiry, iv, typet0, 2);
                        t2_ = t2_ - element.entry;
                        t2_ = t2_ * element.qty;
                        t2 += t2_;
                    }
                }
            }
        });
        //console.log('t0', t0);
        return [pnl, t0, t1, t2];
    }
    calculateIV(spot, strike, int_rate, expiry_date, type, mkt_price, add_days) {
        let high = 80;
        let low = 0;
        let iv = 0;
        /* let date_expiry = new Date(expiry_date);
    
        let date_now = new Date();
        if (this.simulate_strategy) {
          date_now = this.simulateCurrDateObj;
        } */
        /* let days_diff = this.appService.calcWorkingDays(date_now, date_expiry);
        let seconds = days_diff * 86400;
        
        // let seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
        let	minutes = Math.floor(seconds / 60);
        let	hours = Math.floor(minutes / 60);
        let	delta_t = (Math.floor(hours / 24)) / 365.0; */
        /* if (hours < 24) {
          return 0;
        } */
        while ((high - low) > 0.0001) {
            if (this.calculateT0AtPointForStrike(spot, strike, int_rate, expiry_date, (high + low) / 2, type, add_days) > mkt_price) {
                high = (high + low) / 2;
            }
            else {
                low = (high + low) / 2;
            }
        }
        iv = (high + low) / 2;
        return iv;
    }
    calculateT0AtPointForStrike(spot, strike, int_rate, expiry_date, volatility, type, add_days) {
        let t0 = 0;
        let date_expiry = new Date(expiry_date);
        if (this.instru === 'USDINR') {
            date_expiry.setHours(12, 30, 0);
        }
        else {
            date_expiry.setHours(15, 30, 0);
        }
        if (!add_days) {
            add_days = 0;
        }
        let date_now = new Date();
        if (this.simulate_strategy) {
            date_now = this.simulateCurrDateObj;
        }
        // date_now.setDate(date_now.getDate() + add_days);
        let days_diff = this.appService.calcWorkingDays(date_now, date_expiry);
        days_diff = days_diff - add_days;
        let seconds = days_diff * 86400;
        //let seconds = Math.floor((date_expiry.getTime() - date_now.getTime()) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let delta_t = (Math.floor(hours / 24)) / 365.0; // time
        /* if (hours < 12) {
          return 0;
        }
        else { */
        let volt = volatility / 100;
        int_rate = int_rate / 100;
        let d1 = (Math.log(spot / strike) + (int_rate + (Math.pow(volt, 2) / 2)) * delta_t) / (volt * Math.sqrt(delta_t));
        // let d2 = (Math.log(spot / strike) + (int_rate - (Math.pow(volt, 2) / 2)) * delta_t) / (volt * Math.sqrt(delta_t));
        let d2 = d1 - (volt * Math.sqrt(delta_t));
        let fv_strike = (strike) * Math.exp(-1 * int_rate * delta_t);
        if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.CE) {
            t0 = spot * this.getCDF(d1) - fv_strike * this.getCDF(d2);
        }
        if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.PE) {
            t0 = fv_strike * this.getCDF(-1 * d2) - spot * this.getCDF(-1 * d1);
        }
        /* } */
        return t0;
    }
    getCDF(x) {
        let standardDeviation = Math.sqrt(this.variance);
        return 0.5 * this.erfc(-(x - this.mean) / (standardDeviation * Math.sqrt(2)));
    }
    // Complementary error function
    // From Numerical Recipes in C 2e p221
    erfc(x) {
        let z = Math.abs(x);
        let t = 1 / (1 + z / 2);
        let r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 +
            t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 +
                t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 +
                    t * (-0.82215223 + t * 0.17087277)))))))));
        return x >= 0 ? r : 2 - r;
    }
    calculatePnLAtPointForStrike(point, pos_strike, qty, entry, type) {
        let pnl = 0;
        if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.CEsell) {
            if (point > pos_strike) {
                pnl = (pos_strike - point + entry) * Math.abs(qty);
            }
            else {
                pnl = entry * Math.abs(qty);
            }
        }
        if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.PEsell) {
            if (point < pos_strike) {
                pnl = (-pos_strike + point + entry) * Math.abs(qty);
            }
            else {
                pnl = entry * Math.abs(qty);
            }
        }
        if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.CEbuy) {
            if (point > pos_strike) {
                pnl = (-pos_strike + point - entry) * Math.abs(qty);
            }
            else {
                pnl = entry * -Math.abs(qty);
            }
        }
        if (type === _common_models__WEBPACK_IMPORTED_MODULE_3__.PositionTypeForPayOff.PEbuy) {
            if (point < pos_strike) {
                pnl = (pos_strike - point - entry) * Math.abs(qty);
            }
            else {
                pnl = entry * -Math.abs(qty);
            }
        }
        // pnl = pnl * lotsize;
        if (pnl !== 0) {
            pnl = (Math.round((pnl + 0.00001) * 100) / 100);
        }
        return pnl;
    }
    getMargin() {
        /* let url = this.urlToFetch.replace('payoff', 'margin');
        this.appService.get(url).subscribe(res => {
          console.log('getMargin: ', res);
          this.margin = (res as any).margin.toLocaleString();
        },
        error => {
          console.log('getMargin error', error);
        }); */
        let d = new Date(this.expiryDate);
        // let month = d.toLocaleString('default', { month: 'short' }).toUpperCase();
        let month = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthsMapping[d.getMonth() + 1];
        console.log('getMargin: ', this.curr_positions_trades);
        this.appService.getZerodhaMargin(this.instru, month, this.curr_positions_trades, this.instru).subscribe((res) => {
            console.log('getMargin: ', res);
            if (res.total) {
                this.margin = Math.round(res.total.total).toLocaleString();
            }
        }, error => {
            console.log('getMargin error', error);
        });
    }
    getROI() {
        // console.log('roi: ', this.getStrategyPnL(), parseFloat(this.margin.replace(/,/g, '')));
        if (this.margin) {
            let roi = (this.getStrategyPnL() / parseFloat(this.margin.replace(/,/g, ''))) * 100;
            roi = (Math.round((roi + 0.00001) * 100) / 100);
            return roi;
        }
    }
    getPnL(pos, instru, expiry_date) {
        let pnl = null;
        let exit = null;
        if (pos.exit !== null && pos.exit !== 0) {
            exit = pos.exit;
        }
        else {
            exit = this.getLTP_strike(pos, instru, expiry_date);
        }
        if (pos.qty > 0) {
            let p = (exit - pos.entry) * pos.qty;
            pnl = p;
        }
        else if (pos.qty < 0) {
            let p = (pos.entry - exit) * -pos.qty;
            pnl = p;
        }
        /* if (position.scrip.includes('USDINR')) {
          pnl *= 1000;
        } */
        pnl = (Math.round((pnl + 0.00001) * 100) / 100);
        pos.pnl = pnl;
        return pnl;
    }
    getStrategyDelta() {
        let delta = 0;
        let trades = this.curr_positions_trades;
        if (trades) {
            trades.forEach(pos => {
                if (pos.exit === null || pos.exit === 0) {
                    if (this.payoff_overlay && !pos.selected) {
                        return;
                    }
                    let type = '';
                    let s = pos.scrip;
                    if (s.includes('CE')) {
                        type = 'CE';
                    }
                    if (s.includes('PE')) {
                        type = 'PE';
                    }
                    let strike = s.slice(0, -2); // remove CE PE at end
                    let ltp = this.getLTP_strike(pos);
                    delta += (this.appService.getDelta(this.instru, strike, type, pos.expiry, ltp, this.simulate_strategy, this.simulateCurrDateObj) * pos.qty);
                }
            });
        }
        delta = Math.round((delta + 0.00001) * 100) / 100;
        let suggest_string = ' ( 50: ' + (Math.round(((-delta / 50) + 0.00001) * 100) / 100) +
            ' , 100: ' + (Math.round(((-delta / 100) + 0.00001) * 100) / 100) +
            ' , 150: ' + (Math.round(((-delta / 150) + 0.00001) * 100) / 100) +
            ' , 200: ' + (Math.round(((-delta / 200) + 0.00001) * 100) / 100) + ' )';
        return delta + suggest_string;
    }
    getStrategyPnLAfterCharges() {
        let pnl = this.getStrategyPnL();
        // https://zerodha.com/charges#tab-equities
        // https://upstox.com/pricing/
        let charges = 0;
        let trades = this.curr_positions_trades;
        if (trades) {
            trades.forEach(pos => {
                let brokerage = 0;
                if (pos.exit !== null && pos.exit !== 0) {
                    brokerage = 40;
                }
                else {
                    brokerage = 20;
                }
                let total_premium = (Math.abs(pos.qty) * pos.entry) + (Math.abs(pos.qty) * pos.exit);
                let sell_premium = 0;
                if (pos.qty < 0) {
                    sell_premium = pos.entry * Math.abs(pos.qty);
                }
                else {
                    sell_premium = pos.exit * Math.abs(pos.qty);
                }
                let stt = 0.0005 * sell_premium;
                let exchange_fees = total_premium * 0.00053;
                let gst = 0.18 * (brokerage + exchange_fees);
                let clearing_charges = 0.00005 * total_premium;
                let stamp_duty = 0.00003 * total_premium;
                charges += brokerage + stt + exchange_fees + gst + clearing_charges + stamp_duty;
                // console.log(brokerage, stt, exchange_fees, gst, clearing_charges, stamp_duty);
            });
        }
        return Math.round(pnl - charges);
    }
    getStrategyPnL(num = null) {
        let pnl = 0;
        let pointsProfit = 0;
        let trades = null;
        let instru = null;
        let expiry = null;
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
            trades.forEach(pos => {
                if (num) {
                    let posPnl = this.getPnL(pos, instru, pos.expiry);
                    pnl += posPnl;
                    pointsProfit += posPnl / Math.abs(pos.qty);
                    // console.log('points:', pointsProfit);
                }
                else {
                    let posPnl = this.getPnL(pos); // pos.pnl;
                    pnl += posPnl;
                    pointsProfit += posPnl / Math.abs(pos.qty);
                }
            });
        }
        pnl = (Math.round((pnl + 0.00001) * 100) / 100);
        pointsProfit = (Math.round((pointsProfit + 0.00001) * 100) / 100);
        // console.log('pointsProfit:', pointsProfit);
        this.chartService.strategyPnLEvent$.next([pnl, pointsProfit]);
        return pnl;
    }
    getAlertLtp(alert) {
        if (alert.selected) {
            if (alert.scrip1) {
                let ltp1 = this.getLTP_strike({ scrip: alert.scrip1 }, alert.instru, alert.expiry);
                let ltp = ltp1;
                if (alert.scrip2) {
                    let ltp2 = this.getLTP_strike({ scrip: alert.scrip2 }, alert.instru, alert.expiry);
                    ltp += ltp2;
                }
                return ltp;
            }
            else { // index
                return this.mapService.getLtp(alert.instru);
            }
        }
    }
    /*   getLTP(scrip, instru?, expiry_date?) { // scrip: 18000CE
        return this.getLTP_strike({ scrip : scrip }, instru, expiry_date);
      } */
    getLTP_strike(pos, instru, expiry_date) {
        if (!instru) {
            instru = this.instru;
        }
        if (!expiry_date) {
            expiry_date = pos.expiry; // this.expiryDate;
        }
        let is_monthly_expiry = false;
        let expiryDate = new Date(expiry_date);
        expiryDate.setHours(0, 0, 0, 0);
        let tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthlyExpiryDates;
        if (instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthlyExpiryDatesUSDINR;
        }
        for (let key in tempmonthlyExpiryDates) {
            if (tempmonthlyExpiryDates.hasOwnProperty(key)) {
                // console.log(key + " -> " + tempmonthlyExpiryDates[key] + ' ' + expiryDate);
                if (expiryDate.getTime() === tempmonthlyExpiryDates[key].getTime()) {
                    // console.log('monthly expiry matched');
                    is_monthly_expiry = true;
                    break;
                }
            }
        }
        let expiry = null;
        if (is_monthly_expiry) {
            expiry = '' + (expiryDate.getFullYear() - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthsMapping[expiryDate.getMonth() + 1];
        }
        else {
            let expiryMonth = null;
            if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
            }
            else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
            }
            else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
            }
            else {
                expiryMonth = expiryDate.getMonth() + 1;
            }
            expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
        }
        let str = instru + expiry + pos.scrip;
        // console.log('str: ' + str);
        return this.mapService.getLtp(str);
    }
    getInstruLTP(instru) {
        if (!instru) {
            instru = this.instru;
        }
        let scrip = 'NIFTY50';
        if (instru === 'BANKNIFTY') {
            scrip = 'BANKNIFTY';
        }
        if (instru === 'USDINR') {
            let expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.year + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.USDINR_FUT_MONTH];
            let expiryMonth = null;
            if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
            }
            else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
            }
            else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
            }
            else {
                expiryMonth = expiryDate.getMonth() + 1;
            }
            let expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
            // scrip = 'USDINR' + expiry + AppConstants.USDINR_FUT_MONTH + AppConstants.year + 'FUT';
            scrip = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.USDINR_FUT_MONTH + 'FUT';
            // console.log('getLtp strike: ' + scrip);
        }
        this.spot = this.mapService.getLtp(scrip);
        return this.spot;
    }
    addScripToChart(scrip, type) {
        for (let [key, value] of Object.entries(_common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService.simulateData)) {
            if (key === scrip || (key.startsWith(this.simulate_instru) && key.endsWith(scrip))) {
                let chartData = { chart: [] };
                let curr_date = this.simulateCurrDateTimeString.split(' ')[0];
                for (let [k, v] of Object.entries(value)) {
                    if (k.startsWith(curr_date)) {
                        chartData.chart.push({ label: k, close: v });
                    }
                }
                console.log('value', curr_date, chartData, value);
                this.updateFinChartData(chartData, type);
            }
        }
    }
    updateFinChartData(res, type) {
        if (res) {
            let labels = [];
            let close = [];
            if (res.chart && Array.isArray(res.chart)) {
                res.chart.forEach(element => {
                    labels.push(element.label);
                    close.push(element.close);
                });
            }
            if (!type) {
                this.finLineChartLabelsInstru = labels;
                this.finLineChartDataInstru = [
                    { data: close, label: 'close' },
                ];
            }
            else if (type === 'CE') {
                this.finLineChartLabels1 = labels;
                this.finLineChartData1 = [
                    { data: close, label: 'close' },
                ];
            }
            else if (type === 'PE') {
                this.finLineChartLabels2 = labels;
                this.finLineChartData2 = [
                    { data: close, label: 'close' },
                ];
            }
            this.finLineChartOptions = {
                responsive: true,
                scales: {
                    xAxes: [{}],
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                animation: {
                    duration: 0
                },
                /* annotation: {
                  events: ['click'],
                  annotations: this.getChartAnnotations(ltp),
                } */
            };
        }
    }
    updateChartData(res) {
        if (res) {
            this.labels = [];
            this.pnl = [];
            let overlay = [];
            let overlayT0 = [];
            let overlay2 = [];
            let overlay3 = [];
            let t0 = [];
            let t1 = [];
            let t2 = [];
            this.zeroline = [];
            let count = 0;
            if (res.chart && Array.isArray(res.chart)) {
                res.chart.forEach(element => {
                    // Change: -8.1, Final: -102518, StockPrice: 10318, Today: -115484.48, bes: 0
                    count++;
                    if (count < 100) {
                        /* this.labels.push(element.StockPrice);
                        this.pnl.push(element.Final);
                        this.zeroline.push(0); */
                    }
                    this.labels.push(element.StockPrice);
                    this.pnl.push(element.Final);
                    t0.push(element.Today);
                    if (this.multi_t0) {
                        t1.push(element.T1);
                        t2.push(element.T2);
                    }
                    this.zeroline.push(0);
                    if (this.payoff_overlay) {
                        overlay.push(element.Overlay);
                        overlayT0.push(element.OverlayT0);
                    }
                    if (this.ce_side_overlay || this.pe_side_overlay) {
                        overlay.push(element.Overlay);
                        overlay2.push(element.Overlay2);
                        overlay3.push(element.Overlay3);
                    }
                    /* overlay.push(10000); */
                });
            }
            // console.log('payOffEvent labels: ', this.labels);
            // console.log('payOffEvent pnl: ', this.pnl);
            this.lineChartLabels = this.labels;
            this.lineChartData = [
                { data: this.pnl, label: 'PnL' },
                { data: t0, label: 'T+0', fill: false, },
                { data: t1, label: 'T+1', fill: false, },
                { data: t2, label: 'T+2', fill: false, },
                { data: overlay, label: 'Overlay', fill: false, },
                { data: overlayT0, label: 'OverlayT0', fill: false, },
                { data: overlay2, label: 'Overlay2', fill: false, },
                { data: overlay3, label: 'Overlay3', fill: false, },
                /* { data: this.zeroline, label: 'Zero line' }, */
            ];
            let ltp = 0;
            if (this.instru === 'USDINR') {
                if (this.use_hypo_future) {
                    let ce_premium = this.getLTP_strike({ scrip: this.hypo_future_strike + 'CE' }, this.instru, this.expiryDate);
                    let pe_premium = this.getLTP_strike({ scrip: this.hypo_future_strike + 'PE' }, this.instru, this.expiryDate);
                    ltp = ce_premium - pe_premium + this.hypo_future_strike; // Find future price from Put Call Parity
                    ltp = (Math.round((ltp + 0.00001) * 100) / 100);
                    console.log('hypo fut:' + ltp);
                }
                else {
                    ltp = parseFloat(this.getInstruLTP());
                    ltp = (Math.round((ltp + 0.00001) * 100) / 100); // TODO: ltp rounding for usdinr to two decimal
                }
            }
            else {
                ltp = parseInt(this.getInstruLTP());
            }
            this.lineChartOptions = {
                responsive: true,
                scales: {
                    xAxes: [{}],
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                animation: {
                    duration: 0
                },
                annotation: {
                    events: ['click'],
                    annotations: this.getChartAnnotations(ltp),
                }
            };
        }
    }
    getChartAnnotations(ltp) {
        let annotations = [];
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
        });
        // console.log(annotations);
        return annotations;
    }
    doAnnotationsContainSymbol(annotations, symbol) {
        for (let i = 0; i < annotations.length; i++) {
            if (symbol === annotations[i].value) {
                return true;
            }
        }
        return false;
    }
    updateIntradayChartData() {
        let labels = [];
        let prices = [];
        let spot = [];
        let ce_intraday = this.chartService.getIntradayData('74CE', 'USDINR', '2020-11-13');
        let pe_intraday = this.chartService.getIntradayData('74PE', 'USDINR', '2020-11-13');
        let spot_intraday = this.chartService.getIntradayData('FUT', 'USDINR', _common_application_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.USDINR_FUT_MONTH);
        if (ce_intraday) {
            ce_intraday.forEach(ce_elem => {
                let ce_time = ce_elem.time;
                pe_intraday.forEach(pe_elem => {
                    if (ce_time === pe_elem.time) {
                        let p = ce_elem.price + pe_elem.price;
                        p = Math.round((p + 0.00001) * 100) / 100; // round to 2 decimal places
                        labels.push(ce_time);
                        prices.push(p);
                        return;
                    }
                });
                if (spot_intraday) {
                    spot_intraday.forEach(elem => {
                        if (ce_time === elem.time) {
                            spot.push(elem.price);
                            return;
                        }
                    });
                }
            });
        }
        // console.log('updateIntradayChartData: ', labels, prices);
        this.i1ChartLabels = labels;
        this.i1ChartData = [
            { data: prices, label: 'Price' },
            { data: spot, label: 'Underlying', yAxisID: 'y-axis-1' },
        ];
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_common_websocket_service__WEBPACK_IMPORTED_MODULE_5__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_common_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_6__.AngelWebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_chart_service__WEBPACK_IMPORTED_MODULE_7__.ChartService)); };
ChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 183, vars: 67, consts: [["id", "accordionAlerts", 1, "accordion", "mb-2"], [1, "card"], ["type", "button", "data-toggle", "collapse", "data-target", "#alertsSection", "aria-expanded", "false", "aria-controls", "alertsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "alertsSection", "aria-labelledby", "headingOne", "data-parent", "#accordionAlerts", 1, "collapse", "show", "p-2"], ["class", "alerts-flex-container", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["id", "accordionOrders", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#ordersSection", "aria-expanded", "true", "aria-controls", "ordersSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "ordersSection", "aria-labelledby", "headingOne", "data-parent", "#accordionOrders", 1, "collapse", "show", "p-2"], ["rows", "5", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "table", "table-sm", "table-bordered", "shadow", "text-center"], [4, "ngFor", "ngForOf"], [1, "confirmation-check", "form-check-inline", "mt-0"], ["type", "radio", "value", "upstox", "id", "upstox_orders", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "upstox_orders", 1, "form-check-label"], ["type", "radio", "value", "zerodha", "id", "zerodha_orders", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "zerodha_orders", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 2, "margin-top", "-7px", 3, "click"], ["id", "accordionPayoff", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#payOffSection", "aria-expanded", "true", "aria-controls", "payOffSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "payOffSection", "aria-labelledby", "headingOne", "data-parent", "#accordionPayoff", 1, "collapse", "show", "p-2"], [1, "chart-all-strategies-pnl", "text-center"], [1, "font-weight-bold", 3, "ngClass"], [1, "pl-4", "pr-4"], [1, "chart-flex-container"], ["class", "chart-chart", 4, "ngIf"], [1, "chart-positions"], [1, "form-check-inline", "use-hypo-future-class"], ["for", "use-range", 1, "form-check-label"], ["id", "use-range", "type", "number", "placeholder", "Payoff Range", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "", "id", "use-hypo-future", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "use-hypo-future", 1, "form-check-label"], ["type", "number", "placeholder", "Closest Strike", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "", "id", "hide-payoff", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "hide-payoff", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "show-multit0", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "show-multit0", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "simulate_strategy", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "simulate_strategy", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "ce_side_overlay", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "ce_side_overlay", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "pe_side_overlay", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pe_side_overlay", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "payoff_overlay", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["for", "payoff_overlay", 1, "form-check-label"], ["type", "number", "placeholder", "Overlay strike", 1, "ml-2", "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], [1, "strategy_instru", "form-control", "form-control-sm", "mr-2", 3, "ngModel", "ngModelChange"], ["value", "NIFTY"], ["value", "BANKNIFTY"], ["value", "USDINR"], ["placeholder", "Expiry YYYY-MM-DD", "id", "payOffExpiry", 1, "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-1", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mr-1", 3, "click"], [1, "mt-2"], ["type", "file", "name", "File Upload 1", "accept", ".csv", 2, "display", "none", 3, "change"], ["fileImportInput1", ""], [1, "mt-2", "font-weight-bold"], [3, "ngClass"], [2, "font-weight", "normal"], [1, "mt-1"], [4, "ngIf"], ["class", "accordion mb-2", "id", "accordionStraddle", 4, "ngIf"], ["class", "accordion", "id", "accordionCharts", 4, "ngIf"], [1, "alerts-flex-container"], [1, "form-check-inline"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "alert_field", "form-control", "form-control-sm", "mr-2", 3, "ngModel", "ngModelChange"], ["value", "NIFTY50"], ["placeholder", "Scrip1", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], ["placeholder", "Scrip2", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], ["placeholder", "Expiry YYYY-MM-DD", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], ["value", ">"], ["value", "<"], ["placeholder", "Price", "type", "number", 1, "mr-2", "mb-1", "form-control", "form-control-sm", "alert_field", 3, "ngModel", "ngModelChange"], [1, "text-danger", "ml-2"], [1, "chart-chart"], ["baseChart", "", "width", "2", "height", "1", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"], ["placeholder", "Expiry YYYY-MM-DD", 1, "simulateDate", "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Start YYYY-MM-DD", 1, "simulateDate", "mb-1", "mr-3", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "mr-1", 3, "click"], ["type", "checkbox", "value", "", "id", "show_simulate_charts", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "show_simulate_charts", 1, "form-check-label"], ["type", "file", "name", "File Upload Expiry", "accept", ".csv", 2, "display", "none", 3, "change"], ["fileImportInputExpiry", ""], ["type", "number", "placeholder", "Qty", 1, "form-control", "form-control-sm", 3, "step", "ngModel", "ngModelChange"], ["placeholder", "Scrip 11500CE", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Expiry 01OCT2020", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Entry", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Exit", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "font-weight-bold"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "form-check-inline", "posCheckbox"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "ngModel", "disabled", "ngModelChange"], [1, "chart-finchart"], ["id", "accordionStraddle", 1, "accordion", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#straddleSection", "aria-expanded", "true", "aria-controls", "straddleSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "straddleSection", "aria-labelledby", "headingOne", "data-parent", "#accordionStraddle", 1, "collapse", "show", "p-2"], ["placeholder", "Expiry YYYY-MM-DD", "id", "payOffExpiry", 1, "mr-2", "mb-1", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["placeholder", "Scrip", "id", "payOffExpiry", 1, "mb-1", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["id", "accordionCharts", 1, "accordion"], ["type", "button", "data-toggle", "collapse", "data-target", "#chartsSection", "aria-expanded", "true", "aria-controls", "chartsSection", 1, "btn", "btn-light", "font-weight-bold"], ["id", "chartsSection", "aria-labelledby", "headingOne", "data-parent", "#accordionCharts", 1, "collapse", "show", "p-2"], ["height", "600", "width", "760", "src", "https://ssltvc.forexprostools.com/?pair_ID=8985&height=600&width=760&interval=300&plotStyle=candles&domain_ID=56&lang_ID=56&timezone_ID=20"], ["height", "600", "width", "760", "src", "https://ssltvc.forexprostools.com/?pair_ID=160&height=600&width=760&interval=300&plotStyle=candles&domain_ID=56&lang_ID=56&timezone_ID=20"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Alerts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ChartComponent_div_5_Template, 23, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_6_listener() { return ctx.subscribeAlerts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Refresh LTPs");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.ordersTextarea = $event; })("ngModelChange", function ChartComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.ordersTextareaUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ChartComponent_tr_16_Template, 9, 4, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_18_listener($event) { return ctx.orders_broker = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Upstox");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_22_listener($event) { return ctx.orders_broker = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Zerodha");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_25_listener() { return ctx.addOrdersToStrategy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Strategy Payoff ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Strategy 1: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Strategy 2: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Strategy 3: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Strategy 4: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Strategy 5: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, ChartComponent_div_63_Template, 2, 7, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_68_listener($event) { return ctx.payoff_range = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_70_listener($event) { return ctx.use_hypo_future = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Use Hypothetical Future");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_73_listener($event) { return ctx.hypo_future_strike = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_75_listener($event) { return ctx.hide_payoff = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Hide Payoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_79_listener($event) { return ctx.multi_t0 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "Multi T+0");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_83_listener($event) { return ctx.simulate_strategy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Simulate Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_88_listener($event) { return ctx.ce_side_overlay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "CE side");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_92_listener($event) { return ctx.pe_side_overlay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "PE side");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_96_listener($event) { return ctx.payoff_overlay = $event; })("change", function ChartComponent_Template_input_change_96_listener($event) { return ctx.payoffCheckboxChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, "Payoff Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_99_listener($event) { return ctx.overlay_strike = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](100, ChartComponent_div_100_Template, 36, 5, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_select_ngModelChange_103_listener($event) { return ctx.instru = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, "NIFTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "BANKNIFTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "USDINR");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChartComponent_Template_input_ngModelChange_110_listener($event) { return ctx.expiryDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_111_listener() { return ctx.doSingleStrategySubscription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, "Refresh LTPs");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_113_listener() { return ctx.loadOptionChain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "Load Option Chain");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](117, ChartComponent_tr_117_Template, 23, 16, "tr", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_118_listener() { return ctx.addPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_120_listener() { return ctx.calculatePayoff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_123_listener() { return ctx.savePositions(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "Save 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_125_listener() { return ctx.savePositions(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "Save 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_127_listener() { return ctx.savePositions(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, "Save 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_129_listener() { return ctx.savePositions(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "Save 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_131_listener() { return ctx.savePositions(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Save 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_134_listener() { return ctx.reloadPayoffData(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](135, "Load 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_136_listener() { return ctx.reloadPayoffData(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "Load 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_138_listener() { return ctx.reloadPayoffData(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](139, "Load 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_140_listener() { return ctx.reloadPayoffData(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, "Load 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_142_listener() { return ctx.reloadPayoffData(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, "Load 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_145_listener() { return ctx.exportToCSV(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "Export 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_147_listener() { return ctx.exportToCSV(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "Export 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_149_listener() { return ctx.exportToCSV(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150, "Export 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_151_listener() { return ctx.exportToCSV(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](152, "Export 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_153_listener() { return ctx.exportToCSV(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154, "Export 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_156_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](159); return _r5.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "input", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ChartComponent_Template_input_change_158_listener($event) { return ctx.importCSV($event, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](161, " Total PnL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](178, ChartComponent_div_178_Template, 9, 21, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](179, ChartComponent_div_179_Template, 24, 0, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](180, ChartComponent_app_stock_chart_180_Template, 1, 0, "app-stock-chart", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](181, ChartComponent_div_181_Template, 36, 16, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](182, ChartComponent_div_182_Template, 8, 0, "div", 66);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.ordersTextarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.orders_parsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.orders_broker);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.orders_broker);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](49, _c1, ctx.getStrategyPnL(1) < 0, ctx.getStrategyPnL(1) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.getStrategyPnL(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](52, _c1, ctx.getStrategyPnL(2) < 0, ctx.getStrategyPnL(2) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.getStrategyPnL(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](55, _c1, ctx.getStrategyPnL(3) < 0, ctx.getStrategyPnL(3) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.getStrategyPnL(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](58, _c1, ctx.getStrategyPnL(4) < 0, ctx.getStrategyPnL(4) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.getStrategyPnL(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](61, _c1, ctx.getStrategyPnL(5) < 0, ctx.getStrategyPnL(5) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.getStrategyPnL(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.hide_payoff);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.payoff_range);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.use_hypo_future);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.hypo_future_strike);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.hide_payoff);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.multi_t0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.simulate_strategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.ce_side_overlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.pe_side_overlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.payoff_overlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.overlay_strike);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.simulate_strategy === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Loaded Strategy ", ctx.currLoadNum, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.instru);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.expiryDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.curr_positions_trades);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](64, _c1, ctx.getStrategyPnL() < 0, ctx.getStrategyPnL() > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.getStrategyPnL(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" (", ctx.getStrategyPnLAfterCharges(), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Delta: ", ctx.getStrategyDelta(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Margin: ", ctx.margin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("ROI: ", ctx.getROI(), " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Breakevens: ", ctx.breakevens, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("CE: ", ctx.cePremium, " ( ", ctx.ceWeight, "% ) , ", ctx.ceLots, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("PE: ", ctx.pePremium, " ( ", ctx.peWeight, "% ) , ", ctx.peLots, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf",  false && 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.show_simulate_charts);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective, _stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_8__.StockChartComponent], styles: ["[_nghost-%COMP%], input[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\n.use-hypo-future-class[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.chart-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.posCheckbox[_ngcontent-%COMP%] {\n  margin: 8px auto !important;\n  padding-left: 8px;\n}\n\n.simulateDate[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n\n.simulateTimeAdv[_ngcontent-%COMP%], .simulateTimeMins[_ngcontent-%COMP%] {\n  width: 10%;\n  display: inline-block;\n}\n\n.alert_field[_ngcontent-%COMP%] {\n  width: 10%;\n  display: inline-block;\n}\n\n.chart-positions[_ngcontent-%COMP%] {\n  \n  \n  min-width: 400px;\n}\n\n.chart-chart[_ngcontent-%COMP%] {\n  \n  min-width: 500px;\n}\n\n.chart-finchart[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n\n#payOffExpiry[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.positionExited[_ngcontent-%COMP%] {\n  background-color: rgba(148, 159, 177, 0.2);\n  \n}\n\n.strategy_instru[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n\n#payOffExpiry[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7QUFGSjs7QUFLQTtFQUNJLDBDQUFBO0VBQXlDLGFBQUE7QUFEN0M7O0FBSUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0FBREoiLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3QsIGlucHV0LCAuaW5wdXQtZ3JvdXAtdGV4dCwgc2VsZWN0LCBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2UtaHlwby1mdXR1cmUtY2xhc3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNoYXJ0LWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wb3NDaGVja2JveCB7XHJcbiAgICBtYXJnaW46IDhweCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLnNpbXVsYXRlRGF0ZSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2ltdWxhdGVUaW1lQWR2LCAuc2ltdWxhdGVUaW1lTWlucyB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcbi5hbGVydF9maWVsZCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2hhcnQtcG9zaXRpb25zIHtcclxuICAgIC8qIGZsZXg6IDI7ICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uY2hhcnQtY2hhcnQge1xyXG4gICAgLyogZmxleDogMzsgKi9cclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5jaGFydC1maW5jaGFydCB7XHJcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4jcGF5T2ZmRXhwaXJ5IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wb3NpdGlvbkV4aXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwxNTksMTc3LDAuMik7IC8qICNmOGY5ZmE7ICovXHJcbn1cclxuXHJcbi5zdHJhdGVneV9pbnN0cnUge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3BheU9mZkV4cGlyeSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6534:
/*!***************************************!*\
  !*** ./src/app/chart/chart.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartModule": () => (/* binding */ ChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ 3094);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock-chart/stock-chart.component */ 8805);
/* harmony import */ var _chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.component */ 8748);
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart.service */ 2118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);











class ChartModule {
}
ChartModule.ɵfac = function ChartModule_Factory(t) { return new (t || ChartModule)(); };
ChartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ChartModule });
ChartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_chart_service__WEBPACK_IMPORTED_MODULE_3__.ChartService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_9__.ChartsModule,
            highcharts_angular__WEBPACK_IMPORTED_MODULE_10__.HighchartsChartModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChartModule, { declarations: [_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _stock_chart_stock_chart_component__WEBPACK_IMPORTED_MODULE_1__.StockChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_9__.ChartsModule,
        highcharts_angular__WEBPACK_IMPORTED_MODULE_10__.HighchartsChartModule], exports: [_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent] }); })();


/***/ }),

/***/ 2118:
/*!****************************************!*\
  !*** ./src/app/chart/chart.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartService": () => (/* binding */ ChartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _common_application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/application.constant */ 8001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _common_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/map.service */ 397);
/* harmony import */ var _common_fyers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/fyers.service */ 6982);
/* harmony import */ var _common_aliceblue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/aliceblue.service */ 7023);







class ChartService {
    constructor(http, mapService, fyersService, aliceblueService) {
        this.http = http;
        this.mapService = mapService;
        this.fyersService = fyersService;
        this.aliceblueService = aliceblueService;
        this.requestStatusEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.optionChainEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.strategyPnLEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.intradayData = new Map();
    }
    getIntradayData(scrip, instru, expiry) {
        return this.intradayData.get(instru + ' ' + expiry + ' ' + scrip);
    }
    loadIntradayData(intradayWatch) {
        console.log('Loading intraday data');
        intradayWatch.forEach(element => {
            let prices = JSON.parse(localStorage.getItem(element.instru + ' ' + element.expiry + ' ' + element.scrip));
            this.intradayData.set(element.instru + ' ' + element.expiry + ' ' + element.scrip, prices);
        });
        console.log('Loaded intraday data: ', this.intradayData);
    }
    initFetchIntraday(intradayWatch) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(500).subscribe((sec) => {
            // console.log('Fetching intraday data');
            let cutOffTime = new Date();
            cutOffTime.setHours(17, 5, 0, 0);
            let openTime = new Date();
            openTime.setHours(8, 55, 0, 0);
            let currTime = new Date().getTime();
            if (currTime > cutOffTime.getTime()) {
                return;
            }
            if (currTime < openTime.getTime()) {
                return;
            }
            if (new Date().getDay() === 6 || new Date().getDay() === 0) {
                return;
            }
            intradayWatch.forEach(element => {
                let scrip = element.scrip;
                let instru = element.instru;
                let expiry = element.expiry;
                let ltp = null;
                if (scrip === 'FUT' || scrip === 'SPOT') {
                    ltp = this.getInstruLTP(instru);
                }
                else {
                    ltp = this.getLTP_strike(scrip, instru, expiry);
                }
                if (ltp) {
                    let arr = this.intradayData.get(instru + ' ' + expiry + ' ' + scrip);
                    if (!arr) {
                        arr = [];
                    }
                    let d = new Date();
                    // "2020-10-15 8:24"
                    let dformat = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-')
                        + ' ' +
                        [d.getHours(), d.getMinutes()].join(':');
                    // let prev_ltp = arr[dformat];
                    let found = null;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].time && arr[i].time === dformat) {
                            found = i;
                            break;
                        }
                    }
                    if (found !== null) {
                        arr[found] = { time: dformat, price: ltp };
                    }
                    else {
                        arr.push({ time: dformat, price: ltp });
                    }
                    // arr[dformat] = ltp;
                    this.intradayData.set(instru + ' ' + expiry + ' ' + scrip, arr);
                    // console.log('intradayData: ', this.intradayData);
                }
            });
        });
    }
    getLTP_strike(scrip, instru, expiry_date) {
        let is_monthly_expiry = false;
        let expiryDate = new Date(expiry_date);
        expiryDate.setHours(0, 0, 0, 0);
        let tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDates;
        if (instru === 'USDINR') {
            tempmonthlyExpiryDates = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDatesUSDINR;
        }
        for (let key in tempmonthlyExpiryDates) {
            if (tempmonthlyExpiryDates.hasOwnProperty(key)) {
                // console.log(key + " -> " + tempmonthlyExpiryDates[key] + ' ' + expiryDate);
                if (expiryDate.getTime() === tempmonthlyExpiryDates[key].getTime()) {
                    // console.log('monthly expiry matched');
                    is_monthly_expiry = true;
                    break;
                }
            }
        }
        let expiry = null;
        if (is_monthly_expiry) {
            expiry = '' + (expiryDate.getFullYear() - 2000) + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthsMapping[expiryDate.getMonth() + 1];
        }
        else {
            let expiryMonth = null;
            if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
            }
            else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
            }
            else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
            }
            else {
                expiryMonth = expiryDate.getMonth() + 1;
            }
            expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
        }
        let str = instru + expiry + scrip;
        // console.log('str: ' + str);
        return this.mapService.getLtp(str);
    }
    getInstruLTP(instru) {
        let scrip = 'NIFTY50';
        if (instru === 'BANKNIFTY') {
            scrip = 'BANKNIFTY';
        }
        if (instru === 'USDINR') {
            let expiryDate = _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.monthlyExpiryDatesUSDINR[_common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.year + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH];
            let expiryMonth = null;
            if (expiryDate.getMonth() + 1 === 10) {
                expiryMonth = 'O';
            }
            else if (expiryDate.getMonth() + 1 === 11) {
                expiryMonth = 'N';
            }
            else if (expiryDate.getMonth() + 1 === 12) {
                expiryMonth = 'D';
            }
            else {
                expiryMonth = expiryDate.getMonth() + 1;
            }
            let expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2);
            scrip = 'USDINR' + expiry + _common_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH + 'FUT';
            // console.log('getLtp strike: ' + scrip);
        }
        let spot = this.mapService.getLtp(scrip);
        return spot;
    }
    saveIntradayData() {
        // console.log('Saving intraday data: ');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(1000).subscribe((sec) => {
            for (let [key, value] of this.intradayData) {
                let val = value;
                // console.log('Saving intraday data: ', val);
                // console.log('Saving intraday data json: ', JSON.stringify(val));
                localStorage.setItem(key, JSON.stringify(val));
            }
        });
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_common_map_service__WEBPACK_IMPORTED_MODULE_1__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_common_fyers_service__WEBPACK_IMPORTED_MODULE_2__.FyersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_common_aliceblue_service__WEBPACK_IMPORTED_MODULE_3__.AliceblueService)); };
ChartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4256:
/*!****************************************************!*\
  !*** ./src/app/common/aliceblue-parser.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliceblueParserService": () => (/* binding */ AliceblueParserService)
/* harmony export */ });
/* harmony import */ var _application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.constant */ 8001);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 8077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.service */ 397);





class AliceblueParserService {
    constructor(http, mapService) {
        this.http = http;
        this.mapService = mapService;
    }
    handleSocketMessage(binaryData) {
        // console.log('AliceblueService message', binaryData);
        this.parseSocketMessage(binaryData);
    }
    parseSocketMessage(binaryData) {
        const dataByteArry = new Uint8Array(binaryData);
        if (dataByteArry instanceof Uint8Array) {
            let mode = dataByteArry[0];
            // let payload = dataByteArry.subarray(1);
            // console.log('mode', mode);
            if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.MARKETDATA) {
                this.parseMarketData(dataByteArry);
            }
            else if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.COMPACT_MARKETDATA) {
            }
            else if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.SNAPQUOTE) {
            }
            else if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.FULL_SNAPQUOTE) {
            }
            else if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.DPR) {
            }
            else if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.OI) {
                console.log('***** RECEIVED OI');
            }
            else if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.MARKET_STATUS) {
            }
            else if (mode === _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueWsFrameMode.EXCHANGE_MESSAGES) {
            }
        }
        else {
            console.error('Error while converting binary data to byte array');
        }
    }
    parseMarketData(payload) {
        // console.log(payload.byteLength);
        /* for (let i = 0; i < payload.byteLength; i++) {
          // do something with each byte in the array
        } */
        let p = new _models__WEBPACK_IMPORTED_MODULE_1__.AliceMarketData();
        p.exchange_code = payload[1];
        let multiplier = 100;
        if (p.exchange_code === 3) {
            multiplier = 10000000;
        }
        // console.log(p.exchange_code);
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
        p.year_low = this.byteArrayToNumber(payload.subarray(82, 86), 24) / multiplier;
        // console.log('parseMarketData:', p);
        // console.log('parseMarketData:', new Date(p.ltt_unix * 1000), new Date(p.ltt_unix * 1000).getHours(), new Date(p.ltt_unix * 1000).getMinutes(), new Date(p.ltt_unix * 1000).getSeconds());
        /* if (seconds === 0) {
          update current min
        } else {
          update current min+1
        } */
        this.updateMaps(p);
    }
    convertPayloadToString(payload) {
        let payloadstr = String.fromCharCode.apply(null, payload);
        return payloadstr;
    }
    byteArrayToNumber(bufferedArray, shiftMax) {
        let accum = 0;
        let shiftBy = 0;
        let startIndex = 0;
        for (shiftBy = shiftMax; shiftBy >= 0; shiftBy -= 8) {
            accum |= (bufferedArray[startIndex] & 0xff) << shiftBy;
            startIndex++;
            // console.log(accum, shiftBy, startIndex);
        }
        return accum;
    }
    updateMaps(p) {
        let instru_masters = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.get(p.token);
        if (instru_masters) {
            // console.log('instru_masters.symbol', instru_masters.symbol);
            let split = instru_masters.symbol.split(' ');
            let instru = split[0];
            let strike = isNaN(split[split.length - 2]) ? split[split.length - 2] : Number(split[split.length - 2]);
            let type = split[split.length - 1];
            let expiry = '';
            if (split.length === 4) { // NIFTY JUN 9000 PE
                expiry = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.year + split[1]; // TODO: make year 21 when 2021 year starts
                // console.log(expiry);
            }
            else { // USDINR 19 JUN20 77.0 CE, NIFTY JUN FUT, NIFTY 13 AUG20 9000.0 PE
                let expiryDate = new Date(instru_masters.expiry);
                // console.log((expiryDate.getFullYear() - 2000), (expiryDate.getMonth() + 1), expiryDate.getDate());
                let expiryMonth = null;
                if (expiryDate.getMonth() + 1 === 10) {
                    expiryMonth = 'O';
                }
                else if (expiryDate.getMonth() + 1 === 11) {
                    expiryMonth = 'N';
                }
                else if (expiryDate.getMonth() + 1 === 12) {
                    expiryMonth = 'D';
                }
                else {
                    expiryMonth = expiryDate.getMonth() + 1;
                }
                expiry = '' + (expiryDate.getFullYear() - 2000) + (expiryMonth) + ('0' + expiryDate.getDate()).slice(-2); // expiryDate.getDate();
            }
            let symbol = instru + expiry + strike + type; // NIFTY2061810000CE NIFTY20JUN10000CE NIFTY20N1810000CE
            // console.log('updateMaps strike is', symbol);
            this.mapService.setLtp(symbol, p.ltp);
            this.mapService.setAtp(symbol, p.atp);
            this.mapService.setVolume(symbol, p.volume);
            // this.mapService.setOI(instru_masters.symbol, p.oi);
            // this.mapService.setChgOI(instru_masterss.symbol, p.chgoi);
        }
        else { // symbol is in nse masters or cds masters, not nfo masters
            let symbol = '';
            if (p.token === 26000) {
                symbol = 'NIFTY50';
            }
            else if (p.token === 26009) {
                symbol = 'BANKNIFTY';
            }
            else if (p.token === 1) {
                symbol = 'USDINR';
            }
            else {
                console.error(p.token, 'not found in masters');
            }
            this.mapService.setLtp(symbol, p.ltp);
            this.mapService.setAtp(symbol, p.atp);
            this.mapService.setVolume(symbol, p.volume);
        }
    }
}
AliceblueParserService.ɵfac = function AliceblueParserService_Factory(t) { return new (t || AliceblueParserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_map_service__WEBPACK_IMPORTED_MODULE_2__.MapService)); };
AliceblueParserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AliceblueParserService, factory: AliceblueParserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7023:
/*!*********************************************!*\
  !*** ./src/app/common/aliceblue.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliceblueService": () => (/* binding */ AliceblueService)
/* harmony export */ });
/* harmony import */ var _application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.constant */ 8001);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 8077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket.service */ 4440);





class AliceblueService {
    // abMastersContract: AliceblueInstrument[] = [];
    constructor(http, webSocketService) {
        this.http = http;
        this.webSocketService = webSocketService;
        this.baseUrl = 'https://ant.aliceblueonline.com';
    }
    getMastersContract(access_token) {
        let httpOptions = {
            responseType: 'json'
        };
        let url = this.baseUrl + '/api/v2/contracts.json?exchanges=NFO';
        this.http.get(url, httpOptions).subscribe((res) => {
            console.log('AliceblueService getMastersContract', res);
            if (res) {
                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.clear();
                for (let o in res) {
                    if (res[o] instanceof Array) {
                        res[o].forEach(i => {
                            let p = new _models__WEBPACK_IMPORTED_MODULE_1__.AliceblueInstrument();
                            p.symbol = i.symbol; // USDINR 19 JUN20 77.0 CE, NIFTY JUN FUT, NIFTY JUN 9000 PE, NIFTY 13 AUG20 9000.0 PE
                            p.lotSize = Number(i.lotSize);
                            p.expiry = new Date(i.expiry * 1000).toDateString();
                            p.exchange_code = i.exchange_code;
                            p.exchange = i.exchange;
                            p.company = i.company;
                            p.code = Number(i.code);
                            // let split = i.symbol.split(' ');
                            // let key = split[0] + split[split.length - 2] + split[split.length - 1]; // NIFTY10000CE
                            /* if (i.code === 95734 || i.code === '95734') {
                              console.log('**** FOUND', i.code);
                            } */
                            if (p.code === 95734) {
                                // console.log('**** FOUND', i.code);
                            }
                            _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.set(p.code, p);
                        });
                    }
                }
                this.connectWebsocket(access_token);
            }
            console.log('AliceblueService getMastersContract abMastersContract', _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract);
        }, error => {
            console.log('AliceblueService getMastersContract error', error);
        });
    }
    connectWebsocket(access_token) {
        this.webSocketService.connect(access_token);
    }
    sendSubscriptions(instruments) {
        /* for _instrument in instrument:
                    if not isinstance(_instrument, Instrument):
                        raise TypeError("Required parameter instrument not of type Instrument")
                    exchange = self.__exchange_codes[_instrument.exchange]
                    arr.append([exchange, int(_instrument.token)])
                    self.__subscribers[_instrument] = live_feed_type
        arr.append([exchange, int(_instrument.token)])
        data = json.dumps({'a' : 'subscribe', 'v' : arr, 'm' : AliceBlueLiveFeedType.MARKET_DATA}) */
        let arr = [];
        instruments.forEach(instrument => {
            let instru = this.findStrikeInMasters(instrument);
            if (instru) {
                arr.push([instru.exchange_code, instru.code]);
            }
        });
        let message = JSON.stringify({ 'a': 'subscribe', 'v': arr, 'm': _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueLiveFeedType.MARKET_DATA });
        console.log('sendSubscriptions: ' + message);
        this.webSocketService.sendMessage(message);
    }
    findStrikeInMasters(instrument) {
        /*
            symbol in masters:
            USDINR 19 JUN20 77.0 CE
            NIFTY 13 AUG20 9000.0 PE
            NIFTY JUN FUT
            NIFTY JUN 9000 PE
         */
        let return_instru = null;
        _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.forEach(element => {
            // for (let i = 0; i < this.abMastersContract.length; i++) {
            // let element = this.abMastersContract[i];
            let split = element.symbol.split(' ');
            let instru = split[0];
            let strike = split[split.length - 2];
            let type = split[split.length - 1];
            // console.log(instru, strike, type, element.expiry, instrument.instru, instrument.strike, instrument.type, instrument.expiry);
            if (instrument.expiry === element.expiry &&
                instrument.instru === instru &&
                instrument.strike === Number(strike) &&
                instrument.type === type) {
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
}
AliceblueService.ɵfac = function AliceblueService_Factory(t) { return new (t || AliceblueService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService)); };
AliceblueService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AliceblueService, factory: AliceblueService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1580:
/*!*****************************************!*\
  !*** ./src/app/common/angel.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngelService": () => (/* binding */ AngelService)
/* harmony export */ });
/* harmony import */ var _application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.constant */ 8001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 8077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angelwebsocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angelwebsocket.service */ 4991);






// const fyers = require('fyers-api');
// import * as fyers from 'fyers-api';
class AngelService {
    constructor(http, angelWS) {
        this.http = http;
        this.angelWS = angelWS;
        this.baseUrl = 'https://apiconnect.angelbroking.com';
    }
    getAngelHeaders() {
    }
    angelLogin() {
        this.auth().subscribe((res) => {
            console.log('angel auth', res);
            if (res && res.data) {
                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelFeedToken = res.data.feedToken;
                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelJWTToken = res.data.jwtToken;
                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelRefreshToken = res.data.refreshToken;
                this.angelWS.connect();
            }
        }, error => {
            console.log('angel auth error', error);
        });
    }
    getMastersContract() {
        let httpOptions = {
            responseType: 'json'
        };
        let url = 'https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json';
        this.http.get(url, httpOptions).subscribe((res) => {
            console.log('AngelService getMastersContract', res);
            if (res) {
                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.clear();
                res.forEach(i => {
                    // {"token":"37616","symbol":"BANKNIFTY28OCT2139100CE","name":"BANKNIFTY","expiry":"28OCT2021","strike":"3910000.000000","lotsize":"25","instrumenttype":"OPTIDX","exch_seg":"NFO","tick_size":"5.000000"},
                    let p = new _models__WEBPACK_IMPORTED_MODULE_1__.AliceblueInstrument();
                    let multiplier = 100;
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
                    p.expiry = new Date(i.expiry).toDateString();
                    // p.exchange_code = i.exchange_code;
                    p.exchange = i.exch_seg;
                    // p.company = i.company;
                    p.code = Number(i.token);
                    // let split = i.symbol.split(' ');
                    // let key = split[0] + split[split.length - 2] + split[split.length - 1]; // NIFTY10000CE
                    /* if (i.code === 95734 || i.code === '95734') {
                      console.log('**** FOUND', i.code);
                    } */
                    if (p.code === 95734) {
                        // console.log('**** FOUND', i.code);
                    }
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.set(p.code, p);
                });
                this.angelLogin();
            }
            console.log('AngelService getMastersContract abMastersContract', _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract);
        }, error => {
            console.log('AngelService getMastersContract error', error);
        });
    }
    sendSubscriptions(instruments) {
        /* for _instrument in instrument:
                    if not isinstance(_instrument, Instrument):
                        raise TypeError("Required parameter instrument not of type Instrument")
                    exchange = self.__exchange_codes[_instrument.exchange]
                    arr.append([exchange, int(_instrument.token)])
                    self.__subscribers[_instrument] = live_feed_type
        arr.append([exchange, int(_instrument.token)])
        data = json.dumps({'a' : 'subscribe', 'v' : arr, 'm' : AliceBlueLiveFeedType.MARKET_DATA}) */
        let arr = [];
        instruments.forEach(instrument => {
            let instru = this.findStrikeInMasters(instrument);
        });
        // let message = JSON.stringify({'a' : 'subscribe', 'v' : arr, 'm' : AliceBlueLiveFeedType.MARKET_DATA});
        let strwatchlistscrips = 'nse_fo|43315&nse_fo|38692';
        let subs = '{"task":"mw","channel":"' + strwatchlistscrips + '","token":"' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelFeedToken + '","user": "' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelUserId + '","acctid":"' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelUserId + '"}';
        console.log('angel sendSubscriptions: ' + subs);
        this.angelWS.sendMessage(subs);
    }
    findStrikeInMasters(instrument) {
        /*
            symbol in masters:
            BANKNIFTY28OCT2139100CE
            NIFTY28OCT21FUT
            USDINR21O1475.25CE
         */
        let return_instru = null;
        _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.abMastersContract.forEach(element => {
            // console.log(instru, strike, type, element.expiry, instrument.instru, instrument.strike, instrument.type, instrument.expiry);
            if (instrument.expiry === element.expiry &&
                instrument.instru === element.instru &&
                instrument.strike === element.strike &&
                instrument.type === element.optionType) {
                return_instru = element;
                return;
            }
        });
        return return_instru;
    }
    auth() {
        /* let reqBody = { 'app_id': AppConstants.fyersAppId, 'secret_key':  AppConstants.fyersSecretId };
        return fyers.auth(reqBody); */
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-UserType': 'USER',
                'X-SourceID': 'WEB',
                'X-ClientLocalIP': '192.168.0.2',
                'X-ClientPublicIP': '101.190.74.150',
                'X-MACAddress': '37:ab:f8:95:27:ff',
                'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelAPIKey,
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + '/rest/auth/angelbroking/user/v1/loginByPassword';
        let body = { 'clientcode': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelUserId, 'password': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelPassword };
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
    getFunds(access_token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-UserType': 'USER',
                'X-SourceID': 'WEB',
                'X-ClientLocalIP': '192.168.0.2',
                'X-ClientPublicIP': '101.190.74.150',
                'X-MACAddress': '37:ab:f8:95:27:ff',
                'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelAPIKey,
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + '/rest/secure/angelbroking/user/v1/getRMS';
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
    getPositions(access_token) {
        /* return from(
          [this.convertToJson(AppConstants.dummyResPos.replace('\ufeff', ''))]
        ); */
        /* return from(
          [JSON.parse(AppConstants.dummyResPos)]
        ); */
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-UserType': 'USER',
                'X-SourceID': 'WEB',
                'X-ClientLocalIP': '192.168.0.2',
                'X-ClientPublicIP': '101.190.74.150',
                'X-MACAddress': '37:ab:f8:95:27:ff',
                'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelAPIKey,
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + '/rest/secure/angelbroking/order/v1/getPosition';
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
    getOrders(access_token) {
        /* return from(
          [JSON.parse(AppConstants.dummyResOrd)]
        ); */
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-UserType': 'USER',
                'X-SourceID': 'WEB',
                'X-ClientLocalIP': '192.168.0.2',
                'X-ClientPublicIP': '101.190.74.150',
                'X-MACAddress': '37:ab:f8:95:27:ff',
                'X-PrivateKey': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelAPIKey,
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + '/rest/secure/angelbroking/order/v1/getOrderBook';
        return this.http.get(url, httpOptions);
    }
    place_order(access_token, body) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                Authorization: access_token,
                'Content-Type': 'application/json'
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + 'orders';
        return this.http.post(url, body, httpOptions);
    }
}
AngelService.ɵfac = function AngelService_Factory(t) { return new (t || AngelService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angelwebsocket_service__WEBPACK_IMPORTED_MODULE_2__.AngelWebsocketService)); };
AngelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AngelService, factory: AngelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4991:
/*!**************************************************!*\
  !*** ./src/app/common/angelwebsocket.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngelWebsocketService": () => (/* binding */ AngelWebsocketService)
/* harmony export */ });
/* harmony import */ var _application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.constant */ 8001);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 8077);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pako */ 3376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliceblue-parser.service */ 4256);



// import { resourceUsage } from 'process';
//import * as smartapi from 'smartapi-javascript';



class AngelWebsocketService {
    constructor(aliceblueParserService) {
        this.aliceblueParserService = aliceblueParserService;
        this.websocketEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.socket_endpoint = 'wss://omnefeeds.angelbroking.com/NestHtml5Mobile/socket/stream?';
        this.url2 = "wss://wsfeeds.angelbroking.com/NestHtml5Mobile/socket/stream";
    }
    isSocketConnected() {
        if (this.websocket && this.websocket.OPEN === 1) {
            return true;
        }
        return false;
    }
    connect() {
        this.websocket = new WebSocket(this.socket_endpoint);
        this.websocket.binaryType = 'arraybuffer';
        this.websocket.onopen = () => {
            this.handleOnOpen(event);
        };
        this.websocket.onmessage = messageEvent => {
            this.handleOnMessage(messageEvent);
        };
        this.websocket.onerror = event => {
            this.handleOnError(event);
        };
        this.websocket.onclose = event => {
            this.handleOnClose(event);
        };
    }
    handleOnOpen(event) {
        console.log('Opened Web Socket connection');
        /* if (AppConstants.SocketMode === 'aliceblue') {
          this.sendHeartbeat();
          this.sendInitialSubscription();
          this.websocketEvent$.next('connected');
        } */
        let _req = '{"task":"cn","channel":"","token":"' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelFeedToken + '","user": "' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelUserId + '","acctid":"' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelUserId + '"}';
        this.sendMessage(_req);
        this.sendHeartbeat();
    }
    sendHeartbeat() {
        this.heartbeatInterval = setInterval(() => {
            // console.log('sending heartbeat');
            let message = '{"task":"hb","channel":"","token":"' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelFeedToken + '","user": "' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelUserId + '","acctid":"' + _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.angelUserId + '"}';
            this.sendMessage(message);
        }, 59000);
    }
    sendInitialSubscription() {
        console.log('sending initial subscription');
        let usdinr_fut_code = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINRFUTCodes[_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH];
        let message = JSON.stringify({
            'a': 'subscribe',
            'v': [[1, 26000], [1, 26009], [3, 1], [3, usdinr_fut_code] /* , [2, 95734], [2, 95733] */],
            'm': _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueLiveFeedType.MARKET_DATA
        });
        // 26000 26009 for nf and bnf spot
        // 1 is usdinr spot
        console.log('usdinr_fut_code', usdinr_fut_code);
        this.sendMessage(message);
    }
    handleOnMessage(messageEvent) {
        console.log('handleOnMessage', messageEvent, messageEvent.data);
        // console.log('handleOnMessage parse', JSON.parse(messageEvent.data));
        /* if (AppConstants.SocketMode === 'aliceblue') {
          this.aliceblueParserService.handleSocketMessage(messageEvent.data);
        } */
        let strData = atob(messageEvent.data);
        // Convert binary string to character-number array
        var charData = strData.split('').map(function (x) { return x.charCodeAt(0); });
        // Turn number array into byte-array
        var binData = new Uint8Array(charData);
        // Pako magic
        var result = this._atos(pako__WEBPACK_IMPORTED_MODULE_2__.inflate(binData));
        console.log('parsed', result);
        let json = JSON.parse(result)[0];
        if (json && json.msg === 'connected') {
            console.log('ANGEL WS CONNECTED');
            // USDINR: cde_fo|1
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
    _atos(array) {
        var newarray = [];
        try {
            for (var i = 0; i < array.length; i++) {
                newarray.push(String.fromCharCode(array[i]));
            }
        }
        catch (e) { }
        return newarray.join('');
    }
    handleOnError(event) {
        console.log('Error in WS connection', event);
    }
    handleOnClose(event) {
        console.log('Closed WS connection', event);
        clearInterval(this.heartbeatInterval);
        this.websocket = null;
        setTimeout(() => {
            if (this.websocket && this.websocket.OPEN === 1) {
                // ws connected
            }
            else {
                console.log('Reconnecting websocket');
                this.connect();
            }
        }, 2000);
    }
    sendMessage(message) {
        if (this.websocket && this.websocket.OPEN === 1) {
            console.log('Sending message over websocket: ' + message);
            this.websocket.send(message);
        }
        else {
            console.log('Cannot send the message. Socket is not yet opened or it has been closed - ', message);
        }
    }
}
AngelWebsocketService.ɵfac = function AngelWebsocketService_Factory(t) { return new (t || AngelWebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_3__.AliceblueParserService)); };
AngelWebsocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AngelWebsocketService, factory: AngelWebsocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8001:
/*!************************************************!*\
  !*** ./src/app/common/application.constant.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": () => (/* binding */ AppConstants)
/* harmony export */ });
class AppConstants {
}
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
    'JAN': 1131,
    'FEB': 10201,
    'MAR': 1779,
    'APR': 1170,
    'MAY': 1381,
    'JUN': 1237,
    'JUL': 1503,
    'AUG': 1091,
    'SEP': 1136,
    'OCT': 1176,
    'NOV': 5940,
    'DEC': 1182,
};
AppConstants.USDINR_FUT_MONTH = new Date().toLocaleString('default', { month: 'short' }).toUpperCase().substring(0, 3); // 'JUL';
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
    '22MAR': new Date(2022, 2, 31),
    '22APR': new Date(2022, 2, 29),
    '22MAY': new Date(2022, 2, 29),
    '22JUN': new Date(2022, 2, 29),
    '22JUL': new Date(2022, 2, 29),
    '22AUG': new Date(2022, 2, 29),
    '22SEP': new Date(2022, 2, 29),
    '22OCT': new Date(2022, 2, 29),
    '22NOV': new Date(2022, 2, 29),
    '22DEC': new Date(2022, 2, 29),
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
    '22MAR': new Date(2022, 2, 29),
    '22APR': new Date(2022, 2, 29),
    '22MAY': new Date(2022, 2, 29),
    '22JUN': new Date(2022, 2, 29),
    '22JUL': new Date(2022, 2, 29),
    '22AUG': new Date(2022, 2, 29),
    '22SEP': new Date(2022, 2, 29),
    '22OCT': new Date(2022, 2, 29),
    '22NOV': new Date(2022, 2, 29),
    '22DEC': new Date(2022, 2, 29),
};
AppConstants.holidays = [
    new Date(26, 0, 2022),
    new Date(1, 2, 2022),
    new Date(18, 2, 2022),
    new Date(14, 3, 2022),
    new Date(15, 3, 2022),
    new Date(3, 4, 2022),
    new Date(9, 7, 2022),
    new Date(15, 7, 2022),
    new Date(31, 7, 2022),
    new Date(5, 9, 2022),
    new Date(24, 9, 2022),
    new Date(26, 9, 2022),
    new Date(8, 10, 2022),
];
/* Enter Supports from high to low, Enter Resistances from Low to High */
AppConstants.holdings = {
    'NIFTY 50': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 17369, 'qty': 161, 'support': [16800, 16500], 'resistance': [18350, 18600] },
    'NIFTY BANK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 36938, 'qty': 27, 'support': [34200], 'resistance': [38900, 41800] },
    'ADANIPORTS': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [650], 'resistance': [900] },
    'ASIANPAINT': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 3098.95, 'qty': 3, 'support': [3000, 2860], 'resistance': [3600] },
    'AXISBANK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [650], 'resistance': [770, 850] },
    'BAJAJ-AUTO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [3300], 'resistance': [4000, 4300] },
    'BAJAJFINSV': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 17013.7, 'qty': 1, 'support': [15500], 'resistance': [19200] },
    'BAJFINANCE': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [6500], 'resistance': [8000] },
    'BHARTIARTL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [650], 'resistance': [780] },
    'BPCL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [360, 250], 'resistance': [500, 550] },
    'BRITANNIA': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [3400], 'resistance': [3800, 4150] },
    'CIPLA': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [870], 'resistance': [1000] },
    'COALINDIA': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [140], 'resistance': [200] },
    'DIVISLAB': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [4350], 'resistance': [5400] },
    'DRREDDY': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [4250], 'resistance': [5600] },
    'EICHERMOT': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2350], 'resistance': [3000] },
    'GRASIM': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 1733.95, 'qty': 6, 'support': [1600], 'resistance': [1900] },
    'HCLTECH': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1100], 'resistance': [1360] },
    'HDFC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2500], 'resistance': [3000] },
    'HDFCBANK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1400], 'resistance': [1700] },
    'HDFCLIFE': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [630], 'resistance': [760] },
    'HEROMOTOCO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2300], 'resistance': [3600] },
    'HINDALCO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [410], 'resistance': [550] },
    'HINDUNILVR': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2230], 'resistance': [2800] },
    'ICICIBANK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [710], 'resistance': [850] },
    'INDUSINDBK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [810], 'resistance': [1230] },
    'INFY': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 1718.17, 'qty': 12, 'support': [1800, 1670], 'resistance': [1950] },
    'IOC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [110], 'resistance': [140, 170] },
    'ITC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [210, 200], 'resistance': [260] },
    'JSWSTEEL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [620], 'resistance': [770] },
    'KOTAKBANK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1720], 'resistance': [2200] },
    'LT': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1740], 'resistance': [2070] },
    'M&M': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [800, 730], 'resistance': [980] },
    'MARUTI': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [7000], 'resistance': [8300, 9900] },
    'NESTLEIND': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 18927.05, 'qty': 1, 'support': [18600], 'resistance': [20600] },
    'NTPC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [120], 'resistance': [150] },
    'ONGC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [130], 'resistance': [170] },
    'POWERGRID': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 202.1, 'qty': 45, 'support': [198], 'resistance': [215] },
    'RELIANCE': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 2481, 'qty': 4, 'support': [2350], 'resistance': [2750] },
    'SBILIFE': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 1183.8, 'qty': 8, 'support': [1100], 'resistance': [1290] },
    'SBIN': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [450], 'resistance': [540] },
    'SHREECEM': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [25300], 'resistance': [31300] },
    'SUNPHARMA': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 829.8, 'qty': 12, 'support': [730], 'resistance': [870] },
    'TATACONSUM': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [700], 'resistance': [880] },
    'TATAMOTORS': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 513.9, 'qty': 20, 'support': [440], 'resistance': [530] },
    'TATASTEEL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1060], 'resistance': [1500] },
    'TCS': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 3544.32, 'qty': 6, 'support': [3400], 'resistance': [4000] },
    'TECHM': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 1577.74, 'qty': 13, 'support': [1540], 'resistance': [1830] },
    'TITAN': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 2330.5, 'qty': 4, 'support': [2200], 'resistance': [2680] },
    'ULTRACEMCO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [7000], 'resistance': [8200] },
    'UPL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [700], 'resistance': [850] },
    'WIPRO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [600], 'resistance': [725] },
    'RADICO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 1068.1, 'qty': 9, 'support': [1000], 'resistance': [1300] },
    'VBL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 901.7, 'qty': 11, 'support': [810], 'resistance': [1000] },
    'ACC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2100], 'resistance': [2600] },
    'ADANIENT': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 1860.9, 'qty': 6, 'support': [1750, 1350], 'resistance': [1800, 1900] },
    'ADANIGREEN': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1500, 875], 'resistance': [1500, 1900] },
    'ADANITRANS': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1650], 'resistance': [2040] },
    'AMBUJACEM': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [350], 'resistance': [440] },
    'APOLLOHOSP': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [4000], 'resistance': [5930] },
    'AUROPHARMA': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [620], 'resistance': [770, 1060] },
    'BAJAJHLDNG': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [5000], 'resistance': [5650] },
    'BANDHANBNK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [250], 'resistance': [430, 630] },
    'BANKBARODA': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [70], 'resistance': [140] },
    'BERGEPAINT': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [720], 'resistance': [870] },
    'BIOCON': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [320], 'resistance': [480] },
    'BOSCHLTD': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [13300, 8000], 'resistance': [19100, 22400, 27900] },
    'CADILAHC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [410], 'resistance': [570, 670] },
    'CHOLAFIN': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [470], 'resistance': [670] },
    'COLPAL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1400], 'resistance': [1750, 1800] },
    'DABUR': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [550], 'resistance': [650] },
    'DLF': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [360], 'resistance': [450] },
    'DMART': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 4704.85, 'qty': 2, 'support': [4170], 'resistance': [5200] },
    'GAIL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [125], 'resistance': [170, 200] },
    'GLAND': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [3350], 'resistance': [4050, 4300] },
    'GODREJCP': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [880], 'resistance': [1130] },
    'HAVELLS': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1240], 'resistance': [1500] },
    'HDFCAMC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2200], 'resistance': [3300] },
    'HINDPETRO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [275], 'resistance': [350] },
    'ICICIGI': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1330], 'resistance': [1650] },
    'ICICIPRULI': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [530], 'resistance': [700] },
    'IGL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [450, 370], 'resistance': [600] },
    'INDIGO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1800], 'resistance': [2350] },
    'INDUSTOWER': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [235], 'resistance': [330] },
    'JINDALSTEL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [350], 'resistance': [500] },
    'JUBLFOOD': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [3400], 'resistance': [4575] },
    'LTI': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [6300], 'resistance': [7550] },
    'LUPIN': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [860], 'resistance': [1260] },
    'MARICO': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [490], 'resistance': [600] },
    'MCDOWELL-N': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [860, 820], 'resistance': [1000] },
    'MUTHOOTFIN': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [1410], 'resistance': [1700] },
    'NAUKRI': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [5100], 'resistance': [7200] },
    'NMDC': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [130], 'resistance': [200] },
    'PEL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2400], 'resistance': [3000] },
    'PGHH': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [15400, 14300], 'resistance': [16200] },
    'PIDILITIND': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': 2648.45, 'qty': 4, 'support': [2500], 'resistance': [2750] },
    'PIIND': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2730], 'resistance': [3500] },
    'PNB': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [36], 'resistance': [48] },
    'SAIL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [100], 'resistance': [145] },
    'SBICARD': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [880], 'resistance': [1150] },
    'SIEMENS': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2100], 'resistance': [2550] },
    'TORNTPHARM': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [2740], 'resistance': [3280] },
    'VEDL': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [300], 'resistance': [370] },
    'YESBANK': { 'ltp': null, 'volume': null, 'oned': null, 'onew': null, 'onem': null, 'threem': null, 'fiftytwow': null, 'avgp': null, 'qty': null, 'support': [10], 'resistance': [20] },
};
AppConstants.dummyResPos = '{"s":"ok","netPositions":[{"crossCurrency":"N","qty":16,"realized_profit":0,"id":"NSE:JPASSOCIAT-EQ-CNC","unrealized_profit":0.32,"buyQty":16,"sellAvg":0,"sellQty":0,"buyAvg":4.78,"symbol":"NSE:JPASSOCIAT-EQ","fyToken":"101000000011460","slNo":0,"avgPrice":4.78,"segment":"E","dummy":" ","rbiRefRate":1,"side":1,"netQty":16,"pl":0.32,"productType":"CNC","netAvg":4.78,"qtyMulti_com":1},{"crossCurrency":"N","qty":16,"realized_profit":0,"id":"NSE:JPASSOCIAT-EQ-CNC","unrealized_profit":0.32,"buyQty":16,"sellAvg":0,"sellQty":0,"buyAvg":4.78,"symbol":"NSE:JPASSOCIAT-EQ","fyToken":"101000000011460","slNo":0,"avgPrice":4.78,"segment":"E","dummy":" ","rbiRefRate":1,"side":1,"netQty":16,"pl":0.32,"productType":"CNC","netAvg":4.78,"qtyMulti_com":1}],"message":""}';
AppConstants.dummyResOrd = '{"s":"ok","message":"","orderBook":[{"status":5,"symbol":"NSE:TCSEQ","qty":1,"orderNumStatus":"119050790482:5","dqQtyRem":5,"orderDateTime":"07-May-2019 15:18:04","orderValidity":"IOC","fyToken":"101000000011536","slNo":1,"message":"RMS:119050790482:Not allowed to trade in NSE EQ","segment":"E","id":"119050790482","stopPrice":0,"exchOrdId":0,"remainingQuantity":1,"filledQty":0,"limitPrice":2155,"offlineOrder":"false","instrument":"EQUITY","productType":"CNC","type":1,"side":1,"discloseQty":5,"tradedPrice":0}]}';


/***/ }),

/***/ 6982:
/*!*****************************************!*\
  !*** ./src/app/common/fyers.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FyersService": () => (/* binding */ FyersService)
/* harmony export */ });
/* harmony import */ var _application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.constant */ 8001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




// const fyers = require('fyers-api');
// import * as fyers from 'fyers-api';
class FyersService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.fyers.in/api/v1/';
        this.dataUrl = 'https://data.fyers.in/data-api/v1/';
        this.testUrl = 'https://jsonplaceholder.typicode.com/posts';
    }
    auth() {
        /* let reqBody = { 'app_id': AppConstants.fyersAppId, 'secret_key':  AppConstants.fyersSecretId };
        return fyers.auth(reqBody); */
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                /* Authorization: auth, */
                'Content-Type': 'application/json'
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + 'auth';
        let body = { 'app_id': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fyersAppId, 'secret_key': _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fyersSecretId };
        return this.http.post(url, body, httpOptions);
    }
    getTokenUrl(auth_code, appId) {
        /* return fyers.generateToken(); */
        return this.baseUrl + 'genrateToken' + '?authorization_code=' + auth_code + '&appId=' + appId;
    }
    getFunds(access_token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: access_token,
                'Content-Type': 'application/json'
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + 'funds';
        return this.http.get(url, httpOptions);
    }
    getPositions(access_token) {
        /* return from(
          [this.convertToJson(AppConstants.dummyResPos.replace('\ufeff', ''))]
        ); */
        /* return from(
          [JSON.parse(AppConstants.dummyResPos)]
        ); */
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: access_token,
                'Content-Type': 'application/json'
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + 'positions';
        return this.http.get(url, httpOptions);
    }
    getOrders(access_token) {
        /* return from(
          [JSON.parse(AppConstants.dummyResOrd)]
        ); */
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: access_token,
                'Content-Type': 'application/json'
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + 'orders';
        return this.http.get(url, httpOptions);
    }
    place_order(access_token, body) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                Authorization: access_token,
                'Content-Type': 'application/json'
            }),
            responseType: 'json'
        };
        let url = this.baseUrl + 'orders';
        return this.http.post(url, body, httpOptions);
    }
}
FyersService.ɵfac = function FyersService_Factory(t) { return new (t || FyersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
FyersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FyersService, factory: FyersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3609:
/*!********************************************!*\
  !*** ./src/app/common/holdings.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoldingsService": () => (/* binding */ HoldingsService)
/* harmony export */ });
/* harmony import */ var _application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.constant */ 8001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class HoldingsService {
    constructor(http) {
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
            'ADANIPORTS.NS': { 'holding': false, 'average': null },
            'ASIANPAINT.NS': { 'holding': true, 'average': 3098.95 },
        };
        this.backtestMap = {};
        this.shortlistedStocks = [];
        // *** add scrips from only ONE expiry to wathclist 5
        // update append value - for weekly add WK and keep empty for monthly
        // get authorization header from minute request
        // get response of marketwatch request
        // get date range from minute url
        this.append = '';
        this.auth = '';
        this.marketwatch = '';
        this.from_date = '';
        this.to_date = '';
        this.expiry_date = '';
        this.delay = 2000;
        this.data = {};
        this.niftyReturn = {};
    }
    fetchCandles(append, auth, marketwatch, from_date, to_date, expiry_date) {
        this.append = append;
        this.auth = auth;
        this.marketwatch = marketwatch;
        this.from_date = from_date;
        this.to_date = to_date;
        this.expiry_date = expiry_date;
        let json = JSON.parse(this.marketwatch);
        let items = json.data[4].items;
        console.log('marketwatch watchlist 5: ', json.data[4].items.length, json.data[4]);
        for (let i = 0; i < items.length; i++) {
            setTimeout(() => {
                let item = items[i];
                console.log('item', i, item);
                this.getItem(item);
            }, i * this.delay);
        }
    }
    getItem(item) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'authorization': this.auth,
        });
        let httpOptions = {
            responseType: 'json',
            headers: headers
        };
        let symbol = item.tradingsymbol; // let symbol = 'USDINR2210775.5CE' 'USDINR22FEB74PE' 'USDINR22107FUT';
        let token = item.instrument_token;
        console.log(symbol, token);
        let strike = symbol.substring(11);
        let scrip = 'USDINR' + this.append + strike;
        if (strike.includes('FUT')) {
            scrip = 'USDINR';
        }
        // let url = 'https://www.nseindia.com/api/chart-databyindex?index=OPTCURUSDINR31-12-2021CE74.5000';
        // url = 'https://kite.zerodha.com/api/marketwatch';
        // let url = 'https://kite.zerodha.com/oms/instruments/historical/2085635/minute?user_id=FW6041&oi=1&from=2021-12-02&to=2022-01-01';
        let url = 'https://kite.zerodha.com/oms/instruments/historical/' + token + '/minute?user_id=FW6041&oi=1&from=' + this.from_date + '&to=' + this.to_date;
        this.http.get(url, httpOptions).subscribe((res) => {
            console.log('scrip data:', scrip, res);
            if (res.data.candles) {
                let arr = res.data.candles;
                if (arr.length === 0) {
                    console.log('ZERO CANDLES FOR ', scrip);
                }
                for (let j = 0; j < arr.length; j++) {
                    let element = arr[j];
                    let obj = this.data[scrip]; // getting all data for scrip
                    if (!obj) {
                        obj = {};
                    }
                    let d = this.getDateInFormat(element[0]);
                    obj[d] = [element[1], element[2], element[3], element[4], element[5], element[6]];
                    this.data[scrip] = obj;
                }
            }
            console.log('candles:', Object.keys(this.data).length, this.data);
        });
    }
    exportToCSV() {
        let expiry_string = 'Monthly';
        if (this.append === 'WK') {
            expiry_string = 'Weekly';
        }
        let export_file_name = this.expiry_date + ' ' + expiry_string + '.csv';
        console.log('exporting: ', export_file_name);
        if (this.data) {
            let str = '';
            str += 'Ticker,Date/Time,Open,High,Low,Close,Volume,Open Interest\r\n';
            for (let key in this.data) { // for each scrip
                for (let key1 in this.data[key]) { // for each time in scrip
                    let row = '';
                    let arr = this.data[key][key1];
                    row += key + ',' + key1 + ',' + arr[0] + ',' + arr[1] + ',' + arr[2] + ',' + arr[3] + ',' + arr[4] + ',' + arr[5];
                    str += row + '\r\n';
                }
            }
            const downloadFile = new Blob([str], {
                type: 'application/x-msdownload',
            });
            /* if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
              window.navigator.msSaveOrOpenBlob(downloadFile, export_file_name);
            } else { */
            const fileURL = URL.createObjectURL(downloadFile);
            const link = document.createElement('a');
            link.href = fileURL;
            link.target = '_blank';
            document.body.appendChild(link);
            link.download = export_file_name;
            link.click();
            link.parentNode.removeChild(link);
            // }
        }
    }
    getDateInFormat(str = null) {
        if (!str) {
            str = new Date();
        }
        let date = new Date(str);
        let d = date.getDate();
        let m = date.getMonth() + 1; //Month from 0 to 11
        let y = date.getFullYear();
        let h = date.getHours();
        let mins = date.getMinutes();
        let s = date.getSeconds();
        // dd-mm-yyyy hh:mm:ss
        let format = '' + (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y + ' ' + (h <= 9 ? '0' + h : h) + ':' + (mins <= 9 ? '0' + mins : mins) + ':' + (s <= 9 ? '0' + s : s);
        return format;
    }
    loadHoldings() {
        let portfolio_return = 0;
        let holdings = [];
        let total_investment = 0;
        let current_value = 0;
        // console.log(AppConstants.holdings);
        for (let key in _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings) {
            if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings.hasOwnProperty(key)) {
                // doing here and not in fetchStockHistoricalData to avoid overwriting of average price in appconstants
                let avgp = null;
                let supp_str = '';
                let res_str = '';
                if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['avgp']) {
                    avgp = (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'] - _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['avgp']) * 100 / _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['avgp'];
                    avgp = Math.round((avgp + 0.00001) * 100) / 100;
                    let avgp_adj = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['avgp'];
                    let ltp_adj = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'];
                    if (key === 'NIFTY 50') {
                        avgp_adj = avgp_adj / 92.4;
                        ltp_adj = ltp_adj / 92.4;
                    }
                    if (key === 'NIFTY BANK') {
                        avgp_adj = avgp_adj / 100;
                        ltp_adj = ltp_adj / 100;
                    }
                    total_investment += (avgp_adj * _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['qty']);
                    current_value += (ltp_adj * _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['qty']);
                }
                let supp_perc = -999;
                let supp = null;
                for (let i = 0; i < _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['support'].length; i++) {
                    let element = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['support'][i];
                    let supp_perc_t = (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'] - element) * 100 / element;
                    if (supp_perc_t < 0 && supp_perc_t > supp_perc) {
                        supp_perc = supp_perc_t;
                        supp = element;
                    }
                    console.log(key, _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'], element, supp_perc_t);
                }
                if (supp !== null) {
                    supp_perc = Math.round((supp_perc + 0.00001) * 100) / 100;
                    supp_str = supp_perc + ' (' + supp + ')';
                }
                let res_perc = 999;
                let res = null;
                for (let i = 0; i < _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['resistance'].length; i++) {
                    let element = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['resistance'][i];
                    let res_perc_t = (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'] - element) * 100 / element;
                    if (res_perc_t > 0 && res_perc_t < res_perc) {
                        res_perc = res_perc_t;
                        res = element;
                    }
                }
                if (res !== null) {
                    res_perc = Math.round((res_perc + 0.00001) * 100) / 100;
                    res_str = res_perc + ' (' + res + ')';
                }
                holdings.push({ scrip: key, volume: _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['volume'], ltp: _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'], oned: _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['oned'],
                    onew: _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['onew'], onem: _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['onem'], threem: _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['threem'],
                    fiftytwow: _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['fiftytwow'], avgp: avgp, support: supp_str, resistance: res_str });
            }
        }
        portfolio_return = (current_value - total_investment) * 100 / total_investment;
        portfolio_return = Math.round((portfolio_return + 0.00001) * 100) / 100;
        total_investment = Math.round(total_investment);
        current_value = Math.round(current_value);
        // console.log(total_investment, current_value);
        return { 'portfolio_return': portfolio_return, 'holdings': holdings, 'total_inv': total_investment, 'current_val': current_value };
    }
    fetchStocksData() {
        let httpOptions = {
            responseType: 'json'
        };
        let nifty50stocksURL = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050';
        /* this.http.get(indicesURL, httpOptions).subscribe((res: any) => {
          console.log('ind', res);
        }); */
        this.http.get(nifty50stocksURL, httpOptions).subscribe((res) => {
            console.log('now stocks data: ', res);
            let resArr = res.data;
            resArr.forEach(element => {
                if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings.hasOwnProperty(element.symbol)) {
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.symbol]['ltp'] = Math.round((element.lastPrice + 0.00001) * 100) / 100;
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.symbol]['volume'] = Math.round((element.totalTradedVolume + 0.00001) * 100) / 100;
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.symbol]['oned'] = Math.round((element.pChange + 0.00001) * 100) / 100;
                    // AppConstants.holdings[element.symbol]['onew'] = Math.round((element.nearWKH + 0.00001) * 100) / 100;
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.symbol]['onem'] = Math.round((element.perChange30d + 0.00001) * 100) / 100;
                    let fiftytwow = (element.lastPrice - element.yearHigh) * 100 / element.yearHigh;
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.symbol]['fiftytwow'] = Math.round((fiftytwow + 0.00001) * 100) / 100;
                }
            });
        });
        setTimeout(() => { this.fetchIndicesData(); }, 2000);
        setTimeout(() => { this.fetchHistoricalData(); }, 4000);
        // console.log(AppConstants.holdings);
    }
    fetchIndicesData() {
        let httpOptions = {
            responseType: 'json'
        };
        let indicesURL = 'https://www.nseindia.com/api/allIndices';
        this.http.get(indicesURL, httpOptions).subscribe((res) => {
            console.log('indices data: ', res);
            let resArr = res.data;
            resArr.forEach(element => {
                if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings.hasOwnProperty(element.index)) {
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.index]['ltp'] = Math.round((element.last + 0.00001) * 100) / 100;
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.index]['oned'] = Math.round((element.percentChange + 0.00001) * 100) / 100;
                    // AppConstants.holdings[element.symbol]['onew'] = Math.round((element.nearWKH + 0.00001) * 100) / 100;
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.index]['onem'] = Math.round((element.perChange30d + 0.00001) * 100) / 100;
                    let fiftytwow = (element.last - element.yearHigh) * 100 / element.yearHigh;
                    _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[element.index]['fiftytwow'] = Math.round((fiftytwow + 0.00001) * 100) / 100;
                }
            });
        });
    }
    fetchHistoricalData() {
        let httpOptions = {
            responseType: 'json'
        };
        let date_now = new Date();
        let date_prev = new Date();
        date_prev.setDate(date_prev.getDate() - 150);
        // let stockHistoricalURL = 'https://www.nseindia.com/api/historical/cm/equity?symbol=TCS&series=[%22EQ%22]&from=21-09-2021&to=21-12-2021';
        let stockHistoricalURL = 'https://query1.finance.yahoo.com/v8/finance/chart/';
        for (let key in _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings) {
            if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings.hasOwnProperty(key)) {
                // console.log(key + " -> " + this.tempmonthlyExpiryDates[key] + ' ' + enteredDate);
                // https://query1.finance.yahoo.com/v7/finance/quote?symbols=RADICO.NS&fields=exchangeTimezoneName,exchangeTimezoneShortName,regularMarketTime,gmtOffSetMilliseconds&region=US&lang=en-US
                // https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&crumb=DVvEVKnjAxW&lang=en-US&region=US&symbols=RADICO.NS&fields=messageBoardId%2ClongName%2CshortName%2CmarketCap%2CunderlyingSymbol%2CunderlyingExchangeSymbol%2CheadSymbolAsString%2CregularMarketPrice%2CregularMarketChange%2CregularMarketChangePercent%2CregularMarketVolume%2Cuuid%2CregularMarketOpen%2CfiftyTwoWeekLow%2CfiftyTwoWeekHigh%2CtoCurrency%2CfromCurrency%2CtoExchange%2CfromExchange&corsDomain=finance.yahoo.com
                let k = key + '.NS';
                if (k === 'NIFTY 50.NS') {
                    k = '%5ENSEI';
                }
                if (k === 'NIFTY BANK.NS') {
                    k = '%5ENSEBANK';
                }
                //let stockUrl = stockHistoricalURL + k + '?formatted=true&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&period1=';
                //stockUrl += Math.floor(date_prev.getTime() / 1000) + '&period2=' + Math.floor(date_now.getTime() / 1000);
                let stockUrl = stockHistoricalURL + k + '?formatted=true&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&range=1y';
                this.http.get(stockUrl, httpOptions).subscribe((res) => {
                    if (res) {
                        // console.log(res.chart.result[0].indicators.adjclose[0].adjclose[102]);
                        // console.log(res);
                        let closeArr = res.chart.result[0].indicators.adjclose[0].adjclose;
                        if (closeArr instanceof Array) {
                            let ltp = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'];
                            if (!ltp) {
                                ltp = res.chart.result[0].meta.regularMarketPrice;
                                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['ltp'] = ltp;
                                let currdate = res.chart.result[0].meta.regularMarketTime;
                                let index_oned = 1;
                                let timestamps = res.chart.result[0].timestamp;
                                if (new Date(currdate * 1000).getDate() === new Date(timestamps[timestamps.length - 1] * 1000).getDate()) {
                                    index_oned = 2;
                                }
                                let one = closeArr[closeArr.length - index_oned];
                                one = (ltp - one) * 100 / one;
                                one = Math.round((one + 0.00001) * 100) / 100;
                                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['oned'] = one;
                                let thirty = closeArr[closeArr.length - 30];
                                thirty = (ltp - thirty) * 100 / thirty;
                                thirty = Math.round((thirty + 0.00001) * 100) / 100;
                                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['onem'] = thirty;
                                let highArr = res.chart.result[0].indicators.quote[0].high;
                                var max_high = Math.max.apply(null, highArr);
                                let fiftytwow = (ltp - max_high) * 100 / max_high;
                                _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['fiftytwow'] = Math.round((fiftytwow + 0.00001) * 100) / 100;
                                // console.log(ltp, one, thirty);
                            }
                            let seven = closeArr[closeArr.length - 7];
                            seven = (ltp - seven) * 100 / seven;
                            seven = Math.round((seven + 0.00001) * 100) / 100;
                            let ninety = closeArr[closeArr.length - 90];
                            ninety = (ltp - ninety) * 100 / ninety;
                            ninety = Math.round((ninety + 0.00001) * 100) / 100;
                            console.log(key, seven, ninety);
                            _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['onew'] = seven;
                            _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings[key]['threem'] = ninety;
                        }
                    }
                });
            }
        }
    }
    exportBacktest() {
        console.log(this.backtestMap);
        let export_file_name = 'Backtest ' + this.getDateInFormat() + '.csv';
        console.log('exporting: ', export_file_name);
        if (this.backtestMap) {
            let str = '';
            str += 'ExitDate,Portfolio,Nifty,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10\r\n';
            for (let key in this.backtestMap) {
                this.shortlistedStocks = [];
                for (let k in this.backtestMap[key]) {
                    if (this.backtestMap[key][k]['fiftytwow'] > -10) {
                        // this.shortlistedStocks[k] = this.backtestMap[key][k];
                        let copy = Object.assign({}, this.backtestMap[key][k]);
                        copy['scrip'] = k;
                        this.shortlistedStocks.push(copy);
                    }
                }
                this.shortlistedStocks.sort((a, b) => {
                    // -1 means a should come before b
                    // 1 means a should come after b
                    if (a['onem'] > b['onem']) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
                console.log('shortlistedStocks:', this.shortlistedStocks);
                let finalStocks = this.shortlistedStocks.slice(0, 10);
                console.log('finalStocks:', finalStocks);
                let cum_percent = 0;
                let stocksRetStr = '';
                for (let i = 0; i < finalStocks.length; i++) {
                    let ret = (finalStocks[i]['last'] - finalStocks[i]['entry']) * 100 / finalStocks[i]['entry'];
                    ret = Math.round((ret + 0.00001) * 100) / 100;
                    cum_percent += ret;
                    stocksRetStr += ',' + ret;
                }
                let avg_percent = cum_percent / finalStocks.length;
                avg_percent = Math.round((avg_percent + 0.00001) * 100) / 100;
                console.log(avg_percent, this.niftyReturn[key]);
                let returnsStr = '' + key + ',' + avg_percent + ',' + this.niftyReturn[key] + stocksRetStr + '\r\n';
                console.log(returnsStr);
                str += returnsStr;
            }
            const downloadFile = new Blob([str], {
                type: 'application/x-msdownload',
            });
            /* if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
              window.navigator.msSaveOrOpenBlob(downloadFile, export_file_name);
            } else { */
            const fileURL = URL.createObjectURL(downloadFile);
            const link = document.createElement('a');
            link.href = fileURL;
            link.target = '_blank';
            document.body.appendChild(link);
            link.download = export_file_name;
            link.click();
            link.parentNode.removeChild(link);
            //}
        }
    }
    backtestStocks() {
        this.backtest52W1M();
    }
    backtest52W1M() {
        // find stocks under 10% from 52W high
        // rank top 10 stocks based on 1 month returns
        let httpOptions = {
            responseType: 'json'
        };
        let stockHistoricalURL = 'https://query1.finance.yahoo.com/v8/finance/chart/';
        let monthsToTest = 12;
        let curr_date = new Date();
        for (let i = 13; i <= 24; i++) {
            let test_date_end = new Date();
            test_date_end.setDate(curr_date.getDate() - (30 * i));
            let test_date_start = new Date();
            test_date_start.setDate(curr_date.getDate() - (30 * i) - 365);
            for (let key in _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings) {
                if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.holdings.hasOwnProperty(key)) {
                    let k = key + '.NS';
                    if (k === 'NIFTY 50.NS') {
                        k = '%5ENSEI';
                    }
                    if (k === 'NIFTY BANK.NS') {
                        k = '%5ENSEBANK';
                    }
                    let stockUrl = stockHistoricalURL + k + '?formatted=true&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&period1=';
                    stockUrl += Math.floor(test_date_start.getTime() / 1000) + '&period2=' + Math.floor(test_date_end.getTime() / 1000);
                    this.http.get(stockUrl, httpOptions).subscribe((res) => {
                        if (res) {
                            // console.log(res.chart.result[0].indicators.adjclose[0].adjclose[102]);
                            // console.log(res);
                            let closeArr = res.chart.result[0].indicators.adjclose[0].adjclose;
                            if (closeArr instanceof Array) {
                                let obj = {};
                                obj['last'] = closeArr[closeArr.length - 1];
                                obj['entry'] = closeArr[closeArr.length - 22]; // considering 21 trading days in a month
                                if (key === 'NIFTY 50') {
                                    let ret = (obj['last'] - obj['entry']) * 100 / obj['entry'];
                                    ret = Math.round((ret + 0.00001) * 100) / 100;
                                    this.niftyReturn[test_date_end.toLocaleDateString()] = ret;
                                }
                                let thirty = closeArr[closeArr.length - 43]; // 22 + 21
                                thirty = (obj['entry'] - thirty) * 100 / thirty;
                                thirty = Math.round((thirty + 0.00001) * 100) / 100;
                                obj['onem'] = thirty;
                                let highArr = res.chart.result[0].indicators.quote[0].high;
                                highArr = highArr.slice(0, -21);
                                var max_high = Math.max.apply(null, highArr);
                                let fiftytwow = (obj['entry'] - max_high) * 100 / max_high;
                                obj['fiftytwow'] = Math.round((fiftytwow + 0.00001) * 100) / 100;
                                // console.log(ltp, one, thirty);
                                if (!this.backtestMap[test_date_end.toLocaleDateString()]) {
                                    this.backtestMap[test_date_end.toLocaleDateString()] = {};
                                }
                                this.backtestMap[test_date_end.toLocaleDateString()][key] = obj;
                            }
                        }
                    });
                }
            }
        }
    }
}
HoldingsService.ɵfac = function HoldingsService_Factory(t) { return new (t || HoldingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HoldingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HoldingsService, factory: HoldingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 397:
/*!***************************************!*\
  !*** ./src/app/common/map.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MapService {
    constructor() {
        this.ltpMap = new Map();
        this.atpMap = new Map();
        this.volumeMap = new Map();
        this.oiMap = new Map();
        this.chgoiMap = new Map();
        this.intradayData = new Array();
    }
    getLtp(strike) {
        if (strike === 'BANKNIFTY') {
            // return 37739;
        }
        return this.ltpMap.get(strike);
    }
    setLtp(strike, val) {
        this.ltpMap.set(strike, val);
    }
    getAtp(strike) {
        return this.atpMap.get(strike);
    }
    setAtp(strike, val) {
        this.atpMap.set(strike, val);
    }
    getVolume(strike) {
        return this.volumeMap.get(strike);
    }
    setVolume(strike, val) {
        this.volumeMap.set(strike, val);
    }
    getOI(strike) {
        return this.oiMap.get(strike);
    }
    setOI(strike, val) {
        this.oiMap.set(strike, val);
    }
    getChgOI(strike) {
        return this.chgoiMap.get(strike);
    }
    setChgOI(strike, val) {
        this.chgoiMap.set(strike, val);
    }
    getIntradayData(period) {
        return this.intradayData.slice(Math.max(this.intradayData.length - period, 0));
    }
    setIntradayData() {
    }
}
MapService.simulateData = {};
MapService.stockChartData = {};
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(); };
MapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8077:
/*!**********************************!*\
  !*** ./src/app/common/models.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntradayData": () => (/* binding */ IntradayData),
/* harmony export */   "Position": () => (/* binding */ Position),
/* harmony export */   "OrderPasted": () => (/* binding */ OrderPasted),
/* harmony export */   "Order": () => (/* binding */ Order),
/* harmony export */   "PlaceOrder": () => (/* binding */ PlaceOrder),
/* harmony export */   "AliceblueInstrument": () => (/* binding */ AliceblueInstrument),
/* harmony export */   "Instrument": () => (/* binding */ Instrument),
/* harmony export */   "AliceMarketData": () => (/* binding */ AliceMarketData),
/* harmony export */   "AliceBlueLiveFeedType": () => (/* binding */ AliceBlueLiveFeedType),
/* harmony export */   "AliceBlueWsFrameMode": () => (/* binding */ AliceBlueWsFrameMode),
/* harmony export */   "PositionTypeForPayOff": () => (/* binding */ PositionTypeForPayOff)
/* harmony export */ });
class IntradayData {
}
class Position {
    constructor() {
        this.includeInSum1 = false;
        this.includeInSum2 = false;
        this.includeInSum3 = false;
        this.includeInSum4 = false;
    }
}
class OrderPasted {
}
class Order {
}
class PlaceOrder {
}
class AliceblueInstrument {
}
class Instrument {
}
class AliceMarketData {
}
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


/***/ }),

/***/ 4440:
/*!*********************************************!*\
  !*** ./src/app/common/websocket.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var _application_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.constant */ 8001);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 8077);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliceblue-parser.service */ 4256);





//import * as smartapi from 'smartapi-javascript';
class WebsocketService {
    constructor(aliceblueParserService) {
        this.aliceblueParserService = aliceblueParserService;
        this.websocketEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.baseUrl = 'https://ant.aliceblueonline.com';
        this.socket_endpoint = 'wss://ant.aliceblueonline.com/hydrasocket/v2/websocket?access_token=';
    }
    isSocketConnected() {
        if (this.websocket && this.websocket.OPEN === 1) {
            return true;
        }
        return false;
    }
    connect(access_token) {
        this.access_token = access_token;
        this.websocket = new WebSocket(this.socket_endpoint + access_token);
        this.websocket.binaryType = 'arraybuffer';
        this.websocket.onopen = () => {
            this.handleOnOpen(event);
        };
        this.websocket.onmessage = messageEvent => {
            this.handleOnMessage(messageEvent);
        };
        this.websocket.onerror = event => {
            this.handleOnError(event);
        };
        this.websocket.onclose = event => {
            this.handleOnClose(event);
        };
    }
    handleOnOpen(event) {
        console.log('Opened Web Socket connection');
        if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'aliceblue') {
            this.sendHeartbeat();
            this.sendInitialSubscription();
            this.websocketEvent$.next('connected');
        }
    }
    sendHeartbeat() {
        this.heartbeatInterval = setInterval(() => {
            // console.log('sending heartbeat');
            let message = JSON.stringify({ "a": "h", "v": [], "m": "" });
            this.sendMessage(message);
        }, 5000);
    }
    sendInitialSubscription() {
        console.log('sending initial subscription');
        let usdinr_fut_code = _application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINRFUTCodes[_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USDINR_FUT_MONTH];
        let message = JSON.stringify({
            'a': 'subscribe',
            'v': [[1, 26000], [1, 26009], [3, 1], [3, usdinr_fut_code] /* , [2, 95734], [2, 95733] */],
            'm': _models__WEBPACK_IMPORTED_MODULE_1__.AliceBlueLiveFeedType.MARKET_DATA
        });
        // 26000 26009 for nf and bnf spot
        // 1 is usdinr spot
        console.log('usdinr_fut_code', usdinr_fut_code);
        this.sendMessage(message);
    }
    handleOnMessage(messageEvent) {
        // console.log('handleOnMessage', messageEvent);
        if (_application_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SocketMode === 'aliceblue') {
            this.aliceblueParserService.handleSocketMessage(messageEvent.data);
        }
    }
    handleOnError(event) {
        console.log('Error in WS connection', event);
    }
    handleOnClose(event) {
        console.log('Closed WS connection', event);
        clearInterval(this.heartbeatInterval);
        this.websocket = null;
        setTimeout(() => {
            console.log('Reconnecting websocket');
            this.connect(this.access_token);
        }, 2000);
    }
    sendMessage(message) {
        if (this.websocket && this.websocket.OPEN === 1) {
            // console.log('Sending message over websocket: ' + message);
            this.websocket.send(message);
        }
        else {
            console.log('Cannot send the message. Socket is not yet opened or it has been closed - ', message);
        }
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_aliceblue_parser_service__WEBPACK_IMPORTED_MODULE_2__.AliceblueParserService)); };
WebsocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8805:
/*!******************************************************!*\
  !*** ./src/app/stock-chart/stock-chart.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockChartComponent": () => (/* binding */ StockChartComponent)
/* harmony export */ });
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts/highstock */ 5513);
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/stock */ 675);
/* harmony import */ var highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_custom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-custom-events */ 246);
/* harmony import */ var highcharts_custom_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_custom_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/indicators/indicators */ 8655);
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_indicators_atr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/indicators/atr */ 9431);
/* harmony import */ var highcharts_indicators_atr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_atr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_indicators_supertrend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/indicators/supertrend */ 5247);
/* harmony import */ var highcharts_indicators_supertrend__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_supertrend__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/map.service */ 397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.service */ 900);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ 3094);



// import HC_exporting from 'highcharts/modules/exporting';

// import IndicatorZigzag from "highcharts/indicators/zigzag";







highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_1___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
highcharts_custom_events__WEBPACK_IMPORTED_MODULE_2___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
// HC_exporting(Highcharts);
highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_3___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
// IndicatorZigzag(Highcharts);
highcharts_indicators_atr__WEBPACK_IMPORTED_MODULE_4___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
highcharts_indicators_supertrend__WEBPACK_IMPORTED_MODULE_5___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
class StockChartComponent {
    constructor(appService, mapService) {
        this.appService = appService;
        this.mapService = mapService;
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__;
        this.updateFlag1 = false;
        this.updateFlag2 = false;
        this.loadOnlyCurrDateData = true;
        //data = [[1580221800000,78.15,79.6,78.05,79.42,162234000],[1580308200000,81.11,81.96,80.35,81.08,216229200],[1580394600000,80.14,81.02,79.69,80.97,126743200],[1580481000000,80.23,80.67,77.07,77.38,199588400],[1580740200000,76.07,78.37,75.56,77.17,173788400],[1580826600000,78.83,79.91,78.41,79.71,136616400],[1580913000000,80.88,81.19,79.74,80.36,118826800],[1580999400000,80.64,81.31,80.07,81.3,105425600],[1581085800000,80.59,80.85,79.5,80.01,117684000],[1581345000000,78.54,80.39,78.46,80.39,109348800],[1581431400000,80.9,80.97,79.68,79.9,94323200],[1581517800000,80.37,81.81,80.37,81.8,113730400],[1581604200000,81.05,81.56,80.84,81.22,94747600],[1581690600000,81.18,81.5,80.71,81.24,80113600],[1582036200000,78.84,79.94,78.65,79.75,152531200],[1582122600000,80,81.14,80,80.9,93984000],[1582209000000,80.66,81.16,79.55,80.07,100566000],[1582295400000,79.65,80.11,77.63,78.26,129554000],[1582554600000,74.32,76.04,72.31,74.54,222195200],[1582641000000,75.24,75.63,71.53,72.02,230673600],[1582727400000,71.63,74.47,71.63,73.16,198054800],[1582813800000,70.28,71.5,68.24,68.38,320605600],[1582900200000,64.32,69.6,64.09,68.34,426510000],[1583159400000,70.57,75.36,69.43,74.7,341397200],[1583245800000,75.92,76,71.45,72.33,319475600],[1583332200000,74.11,75.85,73.28,75.68,219178400],[1583418600000,73.88,74.89,72.85,73.23,187572800],[1583505000000,70.5,72.71,70.31,72.26,226176800],[1583760600000,65.94,69.52,65.75,66.54,286744800],[1583847000000,69.29,71.61,67.34,71.33,285290000],[1583933400000,69.35,70.31,67.96,68.86,255598800],[1584019800000,63.99,67.5,62,62.06,418474000],[1584106200000,66.22,69.98,63.24,69.49,370732000],[1584365400000,60.49,64.77,60,60.55,322423600],[1584451800000,61.88,64.4,59.6,63.22,324056000],[1584538200000,59.94,62.5,59.28,61.67,300233600],[1584624600000,61.85,63.21,60.65,61.19,271857200],[1584711000000,61.79,62.96,57,57.31,401693200],[1584970200000,57.02,57.13,53.15,56.09,336752800],[1585056600000,59.09,61.92,58.58,61.72,287531200],[1585143000000,62.69,64.56,61.08,61.38,303602000],[1585229400000,61.63,64.67,61.59,64.61,252087200],[1585315800000,63.19,63.97,61.76,61.94,204216800],[1585575000000,62.69,63.88,62.35,63.7,167976400],[1585661400000,63.9,65.62,63,63.57,197002000],[1585747800000,61.63,62.18,59.78,60.23,176218400],[1585834200000,60.08,61.29,59.22,61.23,165934000],[1585920600000,60.7,61.42,59.74,60.35,129880000],[1586179800000,62.72,65.78,62.35,65.62,201820400],[1586266200000,67.7,67.93,64.75,64.86,202887200],[1586352600000,65.68,66.84,65.31,66.52,168895200],[1586439000000,67.18,67.52,66.18,67,161834800],[1586784600000,67.08,68.43,66.46,68.31,131022800],[1586871000000,70,72.06,69.51,71.76,194994800],[1586957400000,70.6,71.58,70.16,71.11,131154400],[1587043800000,71.85,72.05,70.59,71.67,157125200],[1587130200000,71.17,71.74,69.21,70.7,215250000],[1587389400000,69.49,70.42,69.21,69.23,130015200],[1587475800000,69.07,69.31,66.36,67.09,180991600],[1587562200000,68.4,69.47,68.05,69.03,116862400],[1587648600000,68.97,70.44,68.72,68.76,124814400],[1587735000000,69.3,70.75,69.25,70.74,126161200],[1587994200000,70.45,71.14,69.99,70.79,117087600],[1588080600000,71.27,71.46,69.55,69.64,112004800],[1588167000000,71.18,72.42,70.97,71.93,137280800],[1588253400000,72.49,73.63,72.09,73.45,183064000],[1588339800000,71.56,74.75,71.46,72.27,240616800],[1588599000000,72.29,73.42,71.58,73.29,133568000],];
        /*
          data = [
            [1641361080000, 50.8, 52.2, 50.45, 52.2, 57475],
          [1641361140000, 51.8, 52.55, 51.2, 51.8, 39200],
          [1641361200000, 52.05, 53.8, 52, 53.6, 56325],
          [1641361260000, 53.5, 53.9, 52, 52.7, 33075],
          [1641361320000, 52.6, 52.6, 49.5, 49.5, 35825],
          [1641361380000, 49.95, 51.5, 49.5, 51.3, 27025],
          [1641361440000, 51.1, 53, 51.1, 52.8, 36700],
          [1641361500000, 52.5, 53.25, 51.4, 52.3, 38750],
          [1641361560000, 52.25, 53.4, 51.25, 53, 39675],
          [1641361620000, 53.1, 54.2, 50.85, 52.5, 50975],
          [1641361680000, 53, 53, 47.9, 49.15, 52825],
          [1641361740000, 49.2, 49.65, 47.6, 48.35, 45000],
          [1641361800000, 48.6, 49.65, 47.85, 49, 29050],
          [1641361860000, 49, 49.2, 46.75, 47.25, 35250],
          [1641361920000, 47.3, 47.6, 46.05, 46.7, 49900],
          [1641361980000, 46.95, 46.95, 40.05, 40.55, 137100],
          [1641362040000, 40.75, 40.75, 35.5, 36.75, 194700],
          [1641362100000, 36.8, 37.3, 36.25, 36.65, 84400],
          [1641362160000, 36.8, 37, 36.1, 36.55, 82325],
          [1641362220000, 36.4, 36.75, 33.15, 33.95, 124425],
          [1641362280000, 34.05, 35.3, 33.5, 35.3, 92375],
          [1641362340000, 34.85, 35.25, 33.4, 34.55, 92600],
          [1641362400000, 34.4, 35.85, 34.3, 35.15, 55575],
          [1641362460000, 35.4, 36.6, 35.2, 36, 43375],
          [1641362520000, 36, 37.3, 35.75, 37.3, 69350],
          [1641362580000, 37.3, 37.95, 36.6, 37.7, 67450],
          [1641362640000, 37.6, 37.8, 36.75, 37.45, 45375],
          [1641362700000, 37.6, 37.6, 35.8, 35.8, 51975],
          [1641362760000, 35.7, 35.7, 34.5, 35.1, 39550],
          [1641362820000, 35.3, 35.35, 34, 34.15, 32425],
          [1641362880000, 34.15, 35.05, 34, 34.95, 47475],
          [1641362940000, 35.25, 36.8, 35.1, 35.55, 40375],
          [1641363000000, 35.4, 35.55, 34.05, 34.45, 43425],
          [1641363060000, 34.5, 35.5, 34.25, 35.1, 55150],
          [1641363120000, 34.9, 35.1, 34.15, 34.55, 20500],
          [1641363180000, 34.7, 34.7, 31.7, 32.65, 63925],
          [1641363240000, 32.6, 32.95, 30.7, 32.85, 73725],
          [1641363300000, 32.8, 36.45, 32.8, 36.45, 70425],
          [1641363360000, 36.45, 37.35, 35.4, 36.3, 36450],
          [1641363420000, 36.3, 37.25, 35.55, 35.55, 42150],
          [1641363480000, 35.65, 35.65, 32.55, 35.3, 45325],
          [1641363540000, 35.4, 36, 34.45, 34.5, 39400],
          [1641363600000, 34.55, 34.85, 34.15, 34.45, 38950],
          [1641363660000, 34.55, 35.15, 33.95, 35.15, 35650],
          [1641363720000, 34.9, 36.15, 34.5, 35.6, 36675],
          [1641363780000, 35.9, 36.4, 35.5, 36.4, 22475],
          [1641363840000, 36.25, 36.5, 35.8, 36.15, 19925],
          [1641363900000, 36.2, 36.35, 35.25, 35.8, 22700],
          [1641363960000, 35.85, 35.85, 34.7, 34.85, 25225],
          [1641364020000, 34.65, 35.55, 34.5, 35.45, 17000],
          [1641364080000, 35.5, 36.65, 35.4, 35.7, 72450],
          [1641364140000, 35.8, 35.85, 34.4, 35.65, 30600],
          [1641364200000, 35.7, 35.8, 33.85, 34.7, 52650],
          [1641364260000, 34.7, 35.95, 34.7, 35.3, 21275],
          [1641364320000, 35.3, 35.4, 33.6, 34, 38775],
          [1641364380000, 34, 36.65, 33.65, 36, 38050],
          [1641364440000, 35.8, 37.9, 35.6, 37.6, 44050],
          [1641364500000, 37.3, 37.3, 32.7, 33.35, 53425],
          [1641364560000, 33.5, 33.85, 32.9, 33.8, 26450],
          [1641364620000, 34.1, 35.15, 33.75, 35.05, 17225],
          [1641364680000, 34.8, 34.95, 33.7, 34.05, 13325],
          [1641364740000, 33.9, 34.25, 32.8, 32.8, 18800],
          [1641364800000, 33.05, 34.15, 32.65, 33.7, 17400],
          [1641364860000, 33.4, 33.95, 33.15, 33.15, 11975],
          [1641364920000, 33, 33.15, 31.45, 32.05, 51000],
          [1641364980000, 31.8, 32.25, 31, 31.25, 72675],
          [1641365040000, 31.5, 32.35, 31.1, 31.7, 38075],
          [1641365100000, 31.9, 32.6, 31.55, 32.05, 28700],
          [1641365160000, 32.4, 32.45, 31.35, 31.5, 26100],
          [1641365220000, 31.45, 31.55, 30.3, 31.45, 72950],
          [1641365280000, 31.35, 32.3, 31.35, 31.85, 55675],
          [1641365340000, 31.85, 32.2, 31.35, 31.75, 34600],
          [1641365400000, 31.65, 31.8, 30.5, 30.6, 44075],
          [1641365460000, 30.65, 30.85, 29.7, 30.15, 74050],
          [1641365520000, 30.2, 30.7, 30.15, 30.6, 42100],
          [1641365580000, 30.55, 31.5, 30.5, 31.45, 31125],
          [1641365640000, 31.5, 32.8, 31.4, 32.4, 64725],
          [1641365700000, 32.35, 32.55, 31.4, 31.6, 36100],
          [1641365760000, 31.75, 32.45, 31, 32.45, 45675],
          [1641365820000, 32.2, 32.75, 31.6, 31.8, 38100],
          [1641365880000, 32, 32.4, 31.15, 32.4, 24850],
          [1641365940000, 32.45, 32.5, 31.1, 32.25, 39175],
          [1641366000000, 31.95, 32.25, 31.1, 31.15, 21700],
          [1641366060000, 31.25, 31.25, 27.7, 28.8, 87225],
          [1641366120000, 28.55, 29.55, 28.1, 29.1, 77575],
          [1641366180000, 29.15, 29.2, 27.3, 28.2, 112750],
          [1641366240000, 28.05, 28.8, 27.95, 28.4, 112050],
          [1641366300000, 28.6, 29.65, 28.15, 29.35, 93875],
          [1641366360000, 29.2, 30.8, 29.2, 29.6, 157500],
          [1641366420000, 29.5, 30.6, 29.5, 29.85, 99775],
          [1641366480000, 30.1, 30.2, 29.25, 29.85, 82825],
          [1641366540000, 29.95, 29.95, 29, 29.55, 62425],
          [1641366600000, 29.6, 30.2, 29.35, 30.05, 63000],
          [1641366660000, 29.6, 30, 29.4, 30, 51775],
          [1641366720000, 29.7, 30.2, 29.5, 29.75, 41225],
          [1641366780000, 29.5, 29.65, 28.95, 29, 35750],
          [1641366840000, 29.05, 29.05, 27.15, 27.7, 83325],
          [1641366900000, 27.45, 27.9, 27.1, 27.8, 39975],
          [1641366960000, 27.8, 28.7, 27.8, 28.4, 45600],
          [1641367020000, 28.6, 29.4, 28.4, 29.15, 38450]
          ]; */
        this.chartOptions1 = {
            rangeSelector: {
                selected: 1,
                buttons: [
                    {
                        type: 'day',
                        text: 'D',
                        count: 1,
                        events: {
                            click: function () {
                                //alert('Clicked button');
                            }
                        }
                    },
                    {
                        type: 'all',
                        text: 'All',
                        events: {
                            click: function () {
                                //alert('Clicked button');
                            }
                        }
                    }
                ]
            },
            title: {
                text: 'Call Option'
            },
            legend: {
                enabled: true
            },
            /* xAxis: {
              tickInterval: 5 * 60 * 1000 // 5 mins
            }, */
            plotOptions: {
                series: {
                    showInLegend: true,
                    dataGrouping: {
                        enabled: false
                    }
                    /* dataGrouping: {
                      forced: true,
                      //approximation: 'ohlc',
                      units: [
                        ['minute', [5]]
                      ]
                    } */
                }
            },
            series: [
                {
                    type: 'candlestick',
                    id: 'base',
                    name: 'Call Option',
                    data: [],
                    /* dataGrouping: {
                      forced: true,
                      //approximation: 'ohlc',
                      units: [
                        ['minute', [5]]
                      ]
                    } */
                },
                /* {
                  type: "zigzag",
                  showInLegend: true,
                  linkedTo: "base"
                }, */
                {
                    type: "supertrend",
                    // showInLegend: true,
                    linkedTo: "base",
                    params: {
                        period: 10,
                        multiplier: 2
                    },
                    marker: {
                        enabled: false
                    },
                    // lineWidth: 2,
                    //risingTrendColor: '#16C535',
                    //fallingTrendColor: '#F22303',
                    /* changeTrendLine: {
                      styles: {
                          lineWidth: 0.5,
                          lineColor: '#000',
                          dashStyle: 'Dash'
                      }
                    } */
                },
            ]
        };
        this.chartOptions2 = {
            rangeSelector: {
                selected: 1,
                buttons: [
                    {
                        type: 'day',
                        text: 'D',
                        count: 1,
                        events: {
                            click: function () {
                                //alert('Clicked button');
                            }
                        }
                    },
                    {
                        type: 'all',
                        text: 'All',
                        events: {
                            click: function () {
                                //alert('Clicked button');
                            }
                        }
                    }
                ]
            },
            title: {
                text: 'Put Option'
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                series: {
                    showInLegend: true,
                    dataGrouping: {
                        enabled: false
                    }
                }
            },
            series: [
                {
                    type: 'candlestick',
                    id: 'base',
                    name: 'Put Option',
                    data: []
                },
                /* {
                  type: "zigzag",
                  showInLegend: true,
                  linkedTo: "base"
                }, */
                {
                    type: "supertrend",
                    // showInLegend: true,
                    linkedTo: "base",
                    params: {
                        period: 10,
                        multiplier: 2
                    },
                    marker: {
                        enabled: false
                    },
                    // lineWidth: 2,
                    //risingTrendColor: '#16C535',
                    //fallingTrendColor: '#F22303',
                    /* changeTrendLine: {
                      styles: {
                          lineWidth: 0.5,
                          lineColor: '#000',
                          dashStyle: 'Dash'
                      }
                    } */
                },
            ]
        };
        this.appService.stockChartEvent$.subscribe(res => {
            console.log('stockChartEvent subcribe: ', res);
            // this.rest_res = res;
            this.currDate = res.currdate;
            console.log('currDate:', this.currDate);
            this.loadChart(res.symbol);
        });
    }
    loadChart(symbol) {
        symbol = symbol.replace('NSE:', '');
        let display = symbol;
        let data = _common_map_service__WEBPACK_IMPORTED_MODULE_6__.MapService.stockChartData[symbol]; // if index
        // console.log('data1:', data);
        if (!data) {
            let instru = '';
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
            let type = '';
            if (symbol.includes('CE')) {
                type = 'CE';
            }
            if (symbol.includes('PE')) {
                type = 'PE';
            }
            symbol = symbol.slice(0, -2); // remove CE PE at end
            let strike = symbol.substring(5);
            let expiry = symbol.substring(0, 5); // 20N08 20JUN 20911
            // return strike + type;
            display = strike + type;
            data = _common_map_service__WEBPACK_IMPORTED_MODULE_6__.MapService.stockChartData[instru + 'WK' + strike + type];
            // console.log('data2:', instru + 'WK' + strike + type, data);
            if (!data) {
                data = _common_map_service__WEBPACK_IMPORTED_MODULE_6__.MapService.stockChartData[instru + strike + type];
                // console.log('data3:', instru + strike + type, data);
            }
        }
        console.log('stockdata:', data);
        if (data) {
            this.processData(data, display);
            // this.updateChart(data, display);
        }
    }
    processData(data, display) {
        let trimmedData = [];
        let startInd = -1;
        if (this.loadOnlyCurrDateData) {
            for (let i = 0; i < data.length; i++) {
                let arr = data[i];
                let timestamp = arr[0];
                let tsDate = new Date(timestamp);
                if (this.currDate && tsDate.getDate() === this.currDate.getDate() && tsDate.getMonth() === this.currDate.getMonth() && tsDate.getFullYear() === this.currDate.getFullYear()) {
                    trimmedData.push(arr);
                    if (startInd === -1) {
                        startInd = i;
                    }
                }
            }
        }
        let extraStart = startInd - 120;
        if (extraStart < 0) {
            extraStart = 0;
        }
        //console.log('extra:', extraStart, startInd);
        let extraData = data.slice(extraStart, startInd);
        //console.log('extra data:', extraData);
        trimmedData = [...extraData, ...trimmedData];
        console.log('trimmedData:', trimmedData);
        /* for (let j = 0; j < trimmedData.length; j++) {
          console.log(new Date(trimmedData[j][0]));
        } */
        let processed_data = [];
        let t = null;
        let o = null;
        let h = null;
        let l = null;
        let c = null;
        let v = 0;
        for (let i = 0; i < trimmedData.length; i++) {
            let arr = trimmedData[i];
            let timestamp = arr[0];
            if (new Date(timestamp).getMinutes() % 5 === 0) {
                if (t) { // to handle case where this minute is first in data series
                    processed_data.push([t, o, h, l, c, v]);
                }
                t = arr[0];
                o = arr[1];
                h = arr[2];
                l = arr[3];
                c = null;
                v = 0;
            }
            else {
                if (o === null) {
                    o = arr[1];
                }
                if (h === null || arr[2] > h) {
                    h = arr[2];
                }
                if (l === null || arr[3] < l) {
                    l = arr[3];
                }
                if ((new Date(timestamp).getMinutes() + 1) % 5 === 0) {
                    c = arr[4];
                }
                if (i === trimmedData.length - 1) { // to handle case where this is last minute in data series
                    c = arr[4];
                    processed_data.push([t, o, h, l, c, v]);
                }
                v += arr[5];
            }
        }
        console.log('processed_data:', processed_data);
        this.updateChart(processed_data, display);
    }
    ngOnInit() {
        console.log('stock-chart loading', window);
        // this.processData(this.data, 'aniket');
    }
    updateChart(data, symbol) {
        if (symbol.includes('CE')) {
            this.chartOptions1.title = {
                text: symbol
            };
            this.chartOptions1.series[0] = {
                type: 'candlestick',
                id: 'base',
                name: symbol,
                /* dataGrouping: {
                  approximation: 'ohlc'
                }, */
                data: data,
                /* dataGrouping: {
                  forced: true,
                  //approximation: 'ohlc',
                  units: [
                    ['minute', [5]]
                  ]
                } */
            };
            this.updateFlag1 = true;
        }
        else if (symbol.includes('PE')) {
            this.chartOptions2.title = {
                text: symbol
            };
            this.chartOptions2.series[0] = {
                type: 'candlestick',
                id: 'base',
                name: symbol,
                /* dataGrouping: {
                  approximation: 'ohlc'
                }, */
                data: data,
                /* dataGrouping: {
                  forced: true,
                  //approximation: 'ohlc',
                  units: [
                    ['minute', [5]]
                  ]
                } */
            };
            this.updateFlag2 = true;
        }
    }
}
StockChartComponent.ɵfac = function StockChartComponent_Factory(t) { return new (t || StockChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_7__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_map_service__WEBPACK_IMPORTED_MODULE_6__.MapService)); };
StockChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: StockChartComponent, selectors: [["app-stock-chart"]], decls: 3, vars: 8, consts: [[1, "stockChartsDiv"], [1, "stockChart1", 3, "Highcharts", "constructorType", "options", "update", "updateChange"], [1, "stockChart2", 3, "Highcharts", "constructorType", "options", "update", "updateChange"]], template: function StockChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "highcharts-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updateChange", function StockChartComponent_Template_highcharts_chart_updateChange_1_listener($event) { return ctx.updateFlag1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "highcharts-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updateChange", function StockChartComponent_Template_highcharts_chart_updateChange_2_listener($event) { return ctx.updateFlag2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("constructorType", "stockChart")("options", ctx.chartOptions1)("update", ctx.updateFlag1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("constructorType", "stockChart")("options", ctx.chartOptions2)("update", ctx.updateFlag2);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartComponent], styles: [".stockChartsDiv[_ngcontent-%COMP%] {\n  display: flex;\n  height: 800px;\n}\n\n.stockChart1[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.stockChart2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InN0b2NrLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW46IDAgMCAxLjVyZW0gMDtcbn1cblxuaGlnaGNoYXJ0cy1jaGFydCB7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4OyBmbGV4LWdyb3c6IDM7XG59XG5cbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAlO1xufSAqL1xuXG4uc3RvY2tDaGFydHNEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4uc3RvY2tDaGFydDEge1xuICB3aWR0aDogNTAlO1xufVxuXG4uc3RvY2tDaGFydDIge1xuICB3aWR0aDogNTAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
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
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map