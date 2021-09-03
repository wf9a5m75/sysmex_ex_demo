(self["webpackChunksysmex_en"] = self["webpackChunksysmex_en"] || []).push([["src_app_product-overview_product-overview_module_ts"],{

/***/ 4876:
/*!*********************************************************************!*\
  !*** ./src/app/product-overview/product-overview-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOverviewPageRoutingModule": () => (/* binding */ ProductOverviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _product_overview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-overview.page */ 2647);




const routes = [
    {
        path: '',
        component: _product_overview_page__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewPage
    }
];
let ProductOverviewPageRoutingModule = class ProductOverviewPageRoutingModule {
};
ProductOverviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductOverviewPageRoutingModule);



/***/ }),

/***/ 6394:
/*!*************************************************************!*\
  !*** ./src/app/product-overview/product-overview.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOverviewPageModule": () => (/* binding */ ProductOverviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _product_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-overview-routing.module */ 4876);
/* harmony import */ var _product_overview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.page */ 2647);







let ProductOverviewPageModule = class ProductOverviewPageModule {
};
ProductOverviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewPageRoutingModule
        ],
        declarations: [_product_overview_page__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewPage]
    })
], ProductOverviewPageModule);



/***/ }),

/***/ 2647:
/*!***********************************************************!*\
  !*** ./src/app/product-overview/product-overview.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOverviewPage": () => (/* binding */ ProductOverviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_product_overview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-overview.page.html */ 6247);
/* harmony import */ var _product_overview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.page.scss */ 7439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let ProductOverviewPage = class ProductOverviewPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductOverviewPage.ctorParameters = () => [];
ProductOverviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-product-overview',
        template: _raw_loader_product_overview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_overview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductOverviewPage);



/***/ }),

/***/ 7439:
/*!*************************************************************!*\
  !*** ./src/app/product-overview/product-overview.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  width: 276px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.slides {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1vdmVydmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIHdpZHRoOiAyNzZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNsaWRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 6247:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-overview/product-overview.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n    <h1 class=\"title ion-text-center blue\">PRODUCTS AND SERVICES​</h1>\n\n    <div class=\"slides\">\n      <ion-card>\n        <img src=\"assets/products-overview/hematology.png\">\n        <ion-card-header>\n          <ion-card-subtitle>A GLOBAL LEADER IN AUTOMATED HEMATOLOGY DIAGNOSTICS</ion-card-subtitle>\n          <ion-card-title>HEMATOLOGY</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"assets/products-overview/POL-Doctors-Offices-Clinics.png\">\n        <ion-card-header>\n          <ion-card-subtitle>The Intelligent, Affordable Choice for Your Lab</ion-card-subtitle>\n          <ion-card-title>POL - FOR DOCTOR OFFICES AND CLINICS</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"assets/products-overview/Mulitspecies-Hematology.png\">\n        <ion-card-header>\n          <ion-card-subtitle>Set a New Standard in Multispecies Hematology (For Animal Use Only)  </ion-card-subtitle>\n          <ion-card-title>HEMATOLOGY - MULTISPECIES</ion-card-title>\n        </ion-card-header>\n\n      </ion-card>\n\n      <ion-card>\n        <img src=\"assets/products-overview/Urinalysis.png\">\n        <ion-card-header>\n          <ion-card-subtitle>AUTOMATED URINALYSIS SOLUTION UN-SERIES</ion-card-subtitle>\n          <ion-card-title>URINALYSIS</ion-card-title>\n        </ion-card-header>\n\n      </ion-card>\n\n      <ion-card>\n        <img src=\"assets/products-overview/Flow-Cytometry.png\">\n        <ion-card-header>\n          <ion-card-subtitle>Commit to advancements in flow cytometry, building upon our hematology knowledge and strengthened</ion-card-subtitle>\n          <ion-card-title>URINALYSIS</ion-card-title>\n        </ion-card-header>\n\n      </ion-card>\n\n      <ion-card>\n        <img src=\"assets/products-overview/Hemostasis.png\">\n        <ion-card-header>\n          <ion-card-subtitle>With Sysmex Hemostasis Systems, labs can accurately and precisely measure the factors required to stop bleeding and identify possible abnormalities that could lead to excessive bleeding or thrombosis.</ion-card-subtitle>\n          <ion-card-title>HEMOSTASIS</ion-card-title>\n        </ion-card-header>\n\n      </ion-card>\n\n      <ion-card>\n        <img src=\"assets/products-overview/Informatic-Solutions.png\">\n        <ion-card-header>\n          <ion-card-subtitle>CARESPHERE™ DIGITAL SOLUTIONS—TOOLS FOR A SMARTER LAB</ion-card-subtitle>\n          <ion-card-title>INFORMATIC SOLUTIONS</ion-card-title>\n        </ion-card-header>\n\n      </ion-card>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_product-overview_product-overview_module_ts.js.map