(self["webpackChunksysmex_en"] = self["webpackChunksysmex_en"] || []).push([["src_app_beyond-a-better-box_beyond-a-better-box_module_ts"],{

/***/ 727:
/*!***************************************************************************!*\
  !*** ./src/app/beyond-a-better-box/beyond-a-better-box-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeyondABetterBoxPageRoutingModule": () => (/* binding */ BeyondABetterBoxPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _beyond_a_better_box_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beyond-a-better-box.page */ 4865);




const routes = [
    {
        path: '',
        component: _beyond_a_better_box_page__WEBPACK_IMPORTED_MODULE_0__.BeyondABetterBoxPage
    }
];
let BeyondABetterBoxPageRoutingModule = class BeyondABetterBoxPageRoutingModule {
};
BeyondABetterBoxPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BeyondABetterBoxPageRoutingModule);



/***/ }),

/***/ 5491:
/*!*******************************************************************!*\
  !*** ./src/app/beyond-a-better-box/beyond-a-better-box.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeyondABetterBoxPageModule": () => (/* binding */ BeyondABetterBoxPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _beyond_a_better_box_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beyond-a-better-box-routing.module */ 727);
/* harmony import */ var _components_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/common-footer/common-footer.component */ 6005);
/* harmony import */ var _beyond_a_better_box_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beyond-a-better-box.page */ 4865);








let BeyondABetterBoxPageModule = class BeyondABetterBoxPageModule {
};
BeyondABetterBoxPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _beyond_a_better_box_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeyondABetterBoxPageRoutingModule
        ],
        declarations: [_beyond_a_better_box_page__WEBPACK_IMPORTED_MODULE_2__.BeyondABetterBoxPage, _components_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__.CommonFooterComponent]
    })
], BeyondABetterBoxPageModule);



/***/ }),

/***/ 4865:
/*!*****************************************************************!*\
  !*** ./src/app/beyond-a-better-box/beyond-a-better-box.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeyondABetterBoxPage": () => (/* binding */ BeyondABetterBoxPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_beyond_a_better_box_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./beyond-a-better-box.page.html */ 8669);
/* harmony import */ var _beyond_a_better_box_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beyond-a-better-box.page.scss */ 7750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let BeyondABetterBoxPage = class BeyondABetterBoxPage {
    constructor() { }
    ngOnInit() {
    }
};
BeyondABetterBoxPage.ctorParameters = () => [];
BeyondABetterBoxPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-beyond-a-better-box',
        template: _raw_loader_beyond_a_better_box_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_beyond_a_better_box_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BeyondABetterBoxPage);



/***/ }),

/***/ 6005:
/*!*****************************************************************!*\
  !*** ./src/components/common-footer/common-footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFooterComponent": () => (/* binding */ CommonFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./common-footer.component.html */ 3158);
/* harmony import */ var _common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-footer.component.scss */ 1559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let CommonFooterComponent = class CommonFooterComponent {
    constructor() { }
    ngOnInit() { }
};
CommonFooterComponent.ctorParameters = () => [];
CommonFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'common-footer',
        template: _raw_loader_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommonFooterComponent);



/***/ }),

/***/ 7750:
/*!*******************************************************************!*\
  !*** ./src/app/beyond-a-better-box/beyond-a-better-box.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h2 {\n  background-image: var(--section-header-image);\n  color: var(--section-theam);\n  background-repeat: no-repeat;\n  background-size: 1em;\n  font-size: 1em;\n  padding-left: 1.25em;\n}\n\nion-card section.list-content ion-label {\n  background: var(--section-theam);\n  color: white;\n  padding: 0.5em;\n}\n\nion-card section.list-content div.text {\n  margin: 0.5em;\n}\n\nion-card section.list-content h4 {\n  font-weight: bold;\n}\n\nion-card.next-generation {\n  --section-theam: #32AA3F;\n  --section-header-image: url('next-generation.png');\n}\n\nion-card.advanced-tools-and-technologies {\n  --section-theam: #2C73C2;\n  --section-header-image: url('advanced-tools.png');\n}\n\nion-card.process-optimization {\n  --section-theam: #5EC238;\n  --section-header-image: url('process-optimization.png');\n}\n\nion-card.harmonized-support {\n  --section-theam: #52C2F1;\n  --section-header-image: url('harmonized-support.png');\n}\n\nsection.beyond-care div.text {\n  margin: auto 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJleW9uZC1hLWJldHRlci1ib3gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNkNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFNSTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFITjs7QUFLSTtFQUNFLGFBQUE7QUFITjs7QUFNSTtFQUNFLGlCQUFBO0FBSk47O0FBU0E7RUFDRSx3QkFBQTtFQUNBLGtEQUFBO0FBTkY7O0FBVUE7RUFDRSx3QkFBQTtFQUNBLGlEQUFBO0FBUEY7O0FBVUE7RUFDRSx3QkFBQTtFQUNBLHVEQUFBO0FBUEY7O0FBVUE7RUFDRSx3QkFBQTtFQUNBLHFEQUFBO0FBUEY7O0FBV0U7RUFDRSxnQkFBQTtBQVJKIiwiZmlsZSI6ImJleW9uZC1hLWJldHRlci1ib3gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXNlY3Rpb24taGVhZGVyLWltYWdlKTtcbiAgY29sb3I6IHZhcigtLXNlY3Rpb24tdGhlYW0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDFlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctbGVmdDogMS4yNWVtO1xufVxuXG5cbmlvbi1jYXJkIHtcbiAgc2VjdGlvbi5saXN0LWNvbnRlbnQge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWN0aW9uLXRoZWFtKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIH1cbiAgICBkaXYudGV4dCB7XG4gICAgICBtYXJnaW46IDAuNWVtO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG5pb24tY2FyZC5uZXh0LWdlbmVyYXRpb24ge1xuICAtLXNlY3Rpb24tdGhlYW06ICMzMkFBM0Y7XG4gIC0tc2VjdGlvbi1oZWFkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9uZXh0LWdlbmVyYXRpb24ucG5nXCIpO1xuXG59XG5cbmlvbi1jYXJkLmFkdmFuY2VkLXRvb2xzLWFuZC10ZWNobm9sb2dpZXMge1xuICAtLXNlY3Rpb24tdGhlYW06ICMyQzczQzI7XG4gIC0tc2VjdGlvbi1oZWFkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9hZHZhbmNlZC10b29scy5wbmdcIik7XG59XG5cbmlvbi1jYXJkLnByb2Nlc3Mtb3B0aW1pemF0aW9uIHtcbiAgLS1zZWN0aW9uLXRoZWFtOiAjNUVDMjM4O1xuICAtLXNlY3Rpb24taGVhZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcHJvY2Vzcy1vcHRpbWl6YXRpb24ucG5nXCIpO1xufVxuXG5pb24tY2FyZC5oYXJtb25pemVkLXN1cHBvcnQge1xuICAtLXNlY3Rpb24tdGhlYW06ICM1MkMyRjE7XG4gIC0tc2VjdGlvbi1oZWFkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9oYXJtb25pemVkLXN1cHBvcnQucG5nXCIpO1xufVxuXG5zZWN0aW9uLmJleW9uZC1jYXJlIHtcbiAgZGl2LnRleHQge1xuICAgIG1hcmdpbjogYXV0byAxMCU7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 1559:
/*!*******************************************************************!*\
  !*** ./src/components/common-footer/common-footer.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24tZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 8669:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beyond-a-better-box/beyond-a-better-box.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <h1 class=\"title ion-text-center\">Lighting the way <span class=\"blue\">with diagnostics</span></h1>\n  <img src=\"assets/4menu.jpeg\" usemap=\"#mapmain\">\n  <map name=\"mapmain\">\n      <area class=\"toNext\" href=\"#nextblue\" shape=\"rect\" coords=\"464, 40, 900, 212\" target=\"_self\" alt=\"Advanced Tools and Technologies\">\n      <area class=\"toNext\" href=\"#nextnavy\" shape=\"rect\" coords=\"0, 212, 464, 392\" target=\"_self\" alt=\"Harmonized Support\">\n      <area class=\"toNext\" href=\"#nextlime\" shape=\"rect\" coords=\"463, 212, 900, 392\" target=\"_self\" alt=\"Process Optimization\">\n  </map>\n\n\n  <ion-card class=\"next-generation\">\n    <ion-card-header>\n      <ion-card-title><h2>NEXT GENERATION DIAGNOSTICS</h2></ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Minimize tech time and maximize diagnostic potential with unique parameters and reflexive testing capabilities.\n      Sysmex???s leading-edge technology and unmatched expertise deliver the tools you need to build the lab of tomorrow.\n\n      <ion-list>\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>ADVANCED CLINICAL PARAMETERS (ACP)</h3></ion-label>\n            <div class=\"text\">\n              Sysmex has automated and expanded the measures of hematopoiesis to accelerate the identification and enumeration of reportable immature cell indices.\n              Below are the ACPs that are uniquely provided by Sysmex:\n\n              <ul>\n                <li>\n                  <h4>Immature Granulocytes (IG)</h4>\n                  <p>the number of metamyelocytes, myelocytes, and promyelocytes.</p>\n                </li>\n                <li>\n                  <h4>Reticulocyte Hemoglobin (RET-He)</h4>\n                  <p>the amount of hemoglobin in the reticulocyte.</p>\n                </li>\n                <li>\n                  <h4>Immature Platelet Fraction (IPF)</h4>\n                  <p>a measure of immature platelets present.</p>\n                </li>\n              </ul>\n              <img src=\"assets/BABB_ACP.png\" alt=\"Learn more about ACP\" id=\"BABB_ACP\"/>\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>FLUORESCENT PLATELET</h3></ion-label>\n            <div class=\"text\">\n              This unique methodology provides sensitivity and selectivity to improve platelet counting accuracy in the presence of abnormalities.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>BODY FLUID DIFFERENTIALS</h3></ion-label>\n            <div class=\"text\">\n              Fluorescent flow technology is used to automate two part differentials in body fluid samples;\n              this speeds turnaround time and enhances consistency and reproducability of patient results.\n\n              Excellent low-end sensitivity permits automated results to be reported on samples with few cells.\n              This greatly minimizes the need for time-consuming and laborious manual counts.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>RERUN/REFLEX TESTING</h3></ion-label>\n            <div class=\"text\">\n              This automatically generates additional tests based on user-defined rules to reduce the amount of time to interpret results,\n              increase consistency in interpreting results, and reduce the need for manual counting.\n            </div>\n          </section>\n        </ion-item>\n\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>SYSMEX PATIENT CARE SPECIALISTS</h3></ion-label>\n            <div class=\"text\">\n              We maintain a team of clinical experts on staff who become an integral,\n              working part of the customer relationship, providing ongoing clinical expertise and support to your clinicians,\n              the lab and its stakeholders.\n\n              Sysmex Patient Care Specialists are uniquely qualified to assist your lab with the promotion,\n              adoption and implementation of advanced clinical parameters while keeping you apprised of the latest clinical\n              and diagnostic developments coming out of Sysmex R&D.\n            </div>\n          </section>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"advanced-tools-and-technologies\">\n    <ion-card-header>\n      <ion-card-title><h2>ADVANCED TOOLS AND TECHNOLOGIES</h2></ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Sysmex analyzers utilize thoughtful software applications to streamline operations,\n      reduce maintenance and calibration time, and ensure quality.\n      Remote monitoring through our secure network, SNCS, allows us to proactively help you avoid costly downtimes.\n\n\n      <ion-list>\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>SYSMEX MANAGED CALIBRATION PROGRAM</h3></ion-label>\n            <div class=\"text\">\n              Sysmex technical specialists perform routine calibration of your analyzers remotely,\n              reducing non-productive analyzer time by as much as 84% and making sure you???re always in compliance.\n              Sysmex uses evidence-based calibration to take available information from the analyzer and\n              combine it with information from Insight??? and your analyzer to make informed decisions\n              about the analyzer calibration status.\n\n              Having all the information available translates into more confidence\n              in the quality of calibration verification and patient results.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>BeyondCare??? Quality Monitor and Insight IQAP Program</h3></ion-label>\n\n            <h4>BeyondCare Quality Monitor</h4>\n            <div class=\"text\">\n              Sysmex BeyondCareSM Quality Monitor (BCQM) is a unique, evidence-based quality management program that monitors\n              the health and accuracy of your analyzers.\n              Imagine the confidence and freedom your lab will gain from an intelligent system that monitors\n              the quality of your investment in real time, optimizing the performance of your laboratory and the value of your results.\n\n              The BeyondCare Quality Monitor is available for hematology and urinalysis systems, and will revolutionize the way you look at QC.\n              To learn more, click here.\n            </div>\n\n            <h4>Insight IQAP Program</h4>\n            <div class=\"text\">\n              Instantly document and maintain your Q.A. history for analyzer peer comparison data across multiple sites with a single login.\n\n\n              <ul>\n                <li>On demand and flexible reporting options</li>\n                <li>OAbility to manage QC</li>\n                <li>OAccessible 24/7 lot-to-date reporting</li>\n                <li>OOnline QC record storage for up to 2 years.</li>\n                <li>OSingle login access for reports across multi-analyzer sites</li>\n                <li>OComprehensive support available 24/7</li>\n              </ul>\n\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>BUSINESS INTELLIGENCE REPORTING</h3></ion-label>\n            <div class=\"text\">\n              Information and insights help improve decision-making in virtually every area of your lab,\n              from clinical performance and productivity to staffing.\n\n              Sysmex Caresphere??? Workflow Solution (WS) provides a complete battery of business intelligence reports enabling\n              the laboratory to monitor and evaluate key performance data and metrics associated with lavender top testing data.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>DYE CARTRIDGE TAGS</h3></ion-label>\n            <div class=\"text\">\n              Faster, more accurate recognition of proper dye cartridges is achieved, further decreasing time involved in reagent change-outs.\n            </div>\n          </section>\n        </ion-item>\n\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>MULTI-SITE/MULTI LIS</h3></ion-label>\n            <div class=\"text\">\n              This enables standardization of rules and processes across your entire enterprise,\n              making auto-validation possible for all analyzers, whether you???re operating one or 100 locations.\n              Sysmex Caresphere??? Workflow Solution (WS) provides software that consolidates all analyzers and\n              devices via one order interface and result interface to the LIS.\n              The ability to combine multiple devices into a single interface can be both a cost savings and operational advantage.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>CONCENTRATED REAGENT DELIVERY SYSTEM</h3></ion-label>\n            <div class=\"text\">\n              Sysmex Concentrated Reagent Delivery System provides diluent from concentrate,\n              reducing change-outs by over 90%, which results in less container lifting for lab staff and frees up valuable storage space.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>ANALYZER MONITORING</h3></ion-label>\n            <div class=\"text\">\n              Sysmex has moved beyond merely remotely monitoring your analyzer.\n              We use proactive services to help prevent emergency downtime.\n              Customers who use a secure SNCS??? connection tell us how critical predictive monitoring is to their overall productivity.\n\n              Remote, secure internet access connects your lab and our 24/7 staff for analyzer monitoring,\n              automated peer-comparison and easy calibration verification.\n            </div>\n          </section>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"process-optimization\">\n    <ion-card-header>\n      <ion-card-title><h2>PROCESS OPTIMIZATION</h2></ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Automated Lavender Top Management?? means hands-free processing of more than 90 percent of your samples\n      when you customize with the SP-50TM slidemaker stainer, DI-60TM cell image analyzer and TS-10TM tube sorter.\n      Sysmex Caresphere??? Workflow Solution (WS) decision support software is designed to help labs achieve exceptional efficiency\n      through paperless workflow, standardized rules and streamlined auto-validation.\n\n      <ion-list>\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>SYSMEX Caresphere??? Workflow Solution (WS)???</h3></ion-label>\n            <div class=\"text\">\n              Sysmex Caresphere??? Workflow Solution (WS) decision support software for the clinical laboratory allows\n              labs to improve efficiency and increase capacity without adding staff, enabling you to seamlessly manage\n              your entire suite of hematology data while increasing auto-validation rates to as high as 90%.\n\n              With Sysmex Caresphere??? Workflow Solution (WS), technologists are freed up to focus on complex and variant results,\n              helping promote higher levels of patient care and safety.???\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>AUTOMATED SLIDE PREPARATION AND STAINING</h3></ion-label>\n            <div class=\"text\">\n              Fully automated, integrated slide making produces high quality blood smears\n              with reliable consistency for easier identification and counting to accelerate results reporting.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>EDTA AUTOMATED LAVENDER TOP MANAGEMENT??</h3></ion-label>\n            <div class=\"text\">\n              Hands-free management for more than 90 percent of EDTA tubes throughout\n              the entire analytical process drives sample handling consistency,\n              greater productivity and overall operational efficiency.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>HIGHEST RELIABILITY</h3></ion-label>\n            <div class=\"text\">\n              Sysmex has been consistently rated the highest in hematology analyzer reliability for the past 21 years*.\n              US hematology laboratories have also rated Sysmex #1 for system performance, service performance and support,\n              including predictive diagnostics performance*.\n              It is our commitment to provide the exceptional quality in our solutions. (*IMV ServiceTrak Hematology 2019)\n            </div>\n          </section>\n        </ion-item>\n\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>PAPERLESS PROCESSING</h3></ion-label>\n            <div class=\"text\">\n              Easy, online look-up of scattergrams and histograms together with test results eliminate\n              the need to print and store graphical reports, saving time and costs while streamlining workflow.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>STANDARDIZED HEMATOLOGY SOLUTIONS</h3></ion-label>\n            <div class=\"text\">\n              Consistent user interfaces and operational analyses across\n              your health network provides your clinicians with a more uniform clinical picture.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>CELL IMAGE ANALYSIS INTEGRATION</h3></ion-label>\n            <div class=\"text\">\n              Complete automation of manual WBC differential processes, integrating CBC analysis,\n              slide preparation, slide staining and digital image preclassification of cells are provided in a complete workcell.\n              Now you can free highly skilled medical technologists to spend more time on the difficult cases\n              that require careful analysis and assessment.\n              Automated Cell Image Analysis provides a more standardized differential result and\n              extensive network connectivity to enhance the level of service your laboratory provides clinicians and patients.\n            </div>\n          </section>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n  <ion-card class=\"advanced-tools-and-technologies\">\n    <ion-card-header>\n      <ion-card-title><h2>ADVANCED TOOLS AND TECHNOLOGIES</h2></ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Sysmex analyzers utilize thoughtful software applications to streamline operations,\n      reduce maintenance and calibration time, and ensure quality.\n      Remote monitoring through our secure network, SNCS, allows us to proactively help you avoid costly downtimes.\n\n\n      <ion-list>\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>SYSMEX MANAGED CALIBRATION PROGRAM</h3></ion-label>\n            <div class=\"text\">\n              Sysmex technical specialists perform routine calibration of your analyzers remotely,\n              reducing non-productive analyzer time by as much as 84% and making sure you???re always in compliance.\n              Sysmex uses evidence-based calibration to take available information from the analyzer and\n              combine it with information from Insight??? and your analyzer to make informed decisions\n              about the analyzer calibration status.\n\n              Having all the information available translates into more confidence\n              in the quality of calibration verification and patient results.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>BeyondCare??? Quality Monitor and Insight IQAP Program</h3></ion-label>\n\n            <h4>BeyondCare Quality Monitor</h4>\n            <div class=\"text\">\n              Sysmex BeyondCareSM Quality Monitor (BCQM) is a unique, evidence-based quality management program that monitors\n              the health and accuracy of your analyzers.\n              Imagine the confidence and freedom your lab will gain from an intelligent system that monitors\n              the quality of your investment in real time, optimizing the performance of your laboratory and the value of your results.\n\n              The BeyondCare Quality Monitor is available for hematology and urinalysis systems, and will revolutionize the way you look at QC.\n              To learn more, click here.\n            </div>\n\n            <h4>Insight IQAP Program</h4>\n            <div class=\"text\">\n              Instantly document and maintain your Q.A. history for analyzer peer comparison data across multiple sites with a single login.\n\n\n              <ul>\n                <li>On demand and flexible reporting options</li>\n                <li>OAbility to manage QC</li>\n                <li>OAccessible 24/7 lot-to-date reporting</li>\n                <li>OOnline QC record storage for up to 2 years.</li>\n                <li>OSingle login access for reports across multi-analyzer sites</li>\n                <li>OComprehensive support available 24/7</li>\n              </ul>\n\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>BUSINESS INTELLIGENCE REPORTING</h3></ion-label>\n            <div class=\"text\">\n              Information and insights help improve decision-making in virtually every area of your lab,\n              from clinical performance and productivity to staffing.\n\n              Sysmex Caresphere??? Workflow Solution (WS) provides a complete battery of business intelligence reports enabling\n              the laboratory to monitor and evaluate key performance data and metrics associated with lavender top testing data.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>DYE CARTRIDGE TAGS</h3></ion-label>\n            <div class=\"text\">\n              Faster, more accurate recognition of proper dye cartridges is achieved, further decreasing time involved in reagent change-outs.\n            </div>\n          </section>\n        </ion-item>\n\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>MULTI-SITE/MULTI LIS</h3></ion-label>\n            <div class=\"text\">\n              This enables standardization of rules and processes across your entire enterprise,\n              making auto-validation possible for all analyzers, whether you???re operating one or 100 locations.\n              Sysmex Caresphere??? Workflow Solution (WS) provides software that consolidates all analyzers and\n              devices via one order interface and result interface to the LIS.\n              The ability to combine multiple devices into a single interface can be both a cost savings and operational advantage.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>CONCENTRATED REAGENT DELIVERY SYSTEM</h3></ion-label>\n            <div class=\"text\">\n              Sysmex Concentrated Reagent Delivery System provides diluent from concentrate,\n              reducing change-outs by over 90%, which results in less container lifting for lab staff and frees up valuable storage space.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>ANALYZER MONITORING</h3></ion-label>\n            <div class=\"text\">\n              Sysmex has moved beyond merely remotely monitoring your analyzer.\n              We use proactive services to help prevent emergency downtime.\n              Customers who use a secure SNCS??? connection tell us how critical predictive monitoring is to their overall productivity.\n\n              Remote, secure internet access connects your lab and our 24/7 staff for analyzer monitoring,\n              automated peer-comparison and easy calibration verification.\n            </div>\n          </section>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"harmonized-support\">\n    <ion-card-header>\n      <ion-card-title><h2>HARMONIZED SUPPORT</h2></ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      remains dedicated to helping busy labs manage the growing complexities of today???s advanced hematology environments\n      through an unequaled combination of innovative resources and\n      best-in-class personal service ??? all designed to continuously improve lab operations and elevate the overall level of patient care.\n\n      Every aspect of laboratory support has been integrated into a revolutionary platform that\n      delivers the information technologists and administrators need to make more informed decisions and\n      the level of expert support the industry has come to expect from Sysmex throughout the entire solution lifecycle.\n\n      <ion-list>\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>COMPREHENSIVE CONTINUING EDUCATION</h3></ion-label>\n            <div class=\"text\">\n              Your staff???s educational and training needs are vital to your organization.\n              At Sysmex, we have powerful options that are tailored to your unique educational and\n              training needs from on-demand learning to virtual classroom instruction ??? and everything in between.\n\n              <ul>\n                <li>Webinars</li>\n                <li>Regional Symposia</li>\n                <li>User Groups</li>\n                <li>Virtual Training with Live Instructors</li>\n                <li>Online Training</li>\n                <li>In-Person Training</li>\n              </ul>\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>EVIDENCE-BASED MAINTENANCE</h3></ion-label>\n            <div class=\"text\">\n              Strategically aligns maintenance to system use and test volumes rather than calendar-based intervals,\n              ensuring resources are deployed when and where they make the most sense.\n\n              Keeping analyzers running at optimal levels keeps your laboratory working at peak performance.\n              Not only does Sysmex make the world???s most reliable hematology analyzers*,\n              we use technology to keep them ready to perform. Our support technologies have been designed with one goal:\n              to keep your analyzer available for testing so you can focus on what???s most important, high quality patient care.\n              *Ranked #1 by IMV ServiceTrak??? 2014.\n            </div>\n          </section>\n        </ion-item>\n\n        <ion-item>\n          <section class=\"list-content\">\n            <ion-label><h3>CUSTOMER RESOURCE CENTER (CRC)</h3></ion-label>\n            <div class=\"text\">\n              The Sysmex Customer Resource Center (CRC) puts an expansive library of Sysmex information,\n              documentation and expert resources in your hands. The CRC is your online,\n              single information source with access anywhere, anytime.\n              This service provides a customized view of the information your lab needs.\n\n              <h4>AVAILABLE INFORMATION INCLUDES:</h4>\n\n              <ul>\n                <li>CLSI-formatted procedure templates</li>\n                <li>Implementation manuals</li>\n                <li>Technology overview information</li>\n                <li>Insight??? IQAP Portal</li>\n                <li>Training portal - Center for Learning\t??? Operator manuals</li>\n                <li>Installation guides</li>\n                <li>Quick guides</li>\n                <li>Slide supported case studies</li>\n              </ul>\n\n              <img src=\"assets/1-Visit-Our-Customer-Resource-Center (1).jpeg\" />\n            </div>\n          </section>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <section class=\"beyond-care\">\n    <img src=\"assets/beyond-care.png\" />\n    <div class=\"text\">\n      With BeyondCare, every aspect of the laboratory experience has been integrated\n      into a revolutionary platform that provides our customers with greater visibility into their systems,\n      real-time data to create instantly actionable insights,\n      and single-point support throughout the entire solution life-cycle.\n      BeyondCare anticipates the resources you need from Sysmex and integrates them into a high-performance team that\n      supports the way your lab operates, streamlining communications and eliminating costly layers of communication that\n      can often contribute to analyzer downtime and work-flow issues.\n    </div>\n  </section>\n\n  <common-footer></common-footer>\n</ion-content>\n");

/***/ }),

/***/ 3158:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/common-footer/common-footer.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-footer>\n  <ion-toolbar>\n    <ion-title>?? Copyright 2021 Sysmex</ion-title>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_beyond-a-better-box_beyond-a-better-box_module_ts.js.map