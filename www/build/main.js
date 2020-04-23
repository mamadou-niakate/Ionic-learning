webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var TaskService = /** @class */ (function () {
    function TaskService() {
        this.taskList = [
            {
                name: 'PHP',
                subTasks: [{ title: 'Apprendre les bases de PHP', isChecked: false }],
                isChecked: false
            },
            {
                name: 'Java',
                subTasks: [{ title: 'Apprendre les bases de Java', isChecked: false }],
                isChecked: false
            },
            {
                name: 'React js',
                subTasks: [{ title: 'Apprendre les bases de React', isChecked: false }],
                isChecked: false
            }
        ];
    }
    TaskService.prototype.getTask = function (index) {
        return this.taskList[index];
    };
    return TaskService;
}());

//# sourceMappingURL=TaskService.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSwitcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSwitcherService = /** @class */ (function () {
    function ThemeSwitcherService() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('dark-theme');
    }
    ThemeSwitcherService.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    ThemeSwitcherService.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    ThemeSwitcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ThemeSwitcherService);
    return ThemeSwitcherService;
}());

//# sourceMappingURL=ThemeSwitcherService.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TaskService__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Task__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_single_task_single_task__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupComponent = /** @class */ (function () {
    function GroupComponent(taskService, navCtrl, menuCtrl) {
        this.taskService = taskService;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.wantToAddSubTask = false;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.tasksList = this.taskService.taskList;
    };
    GroupComponent.prototype.openTask = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_single_task_single_task__["a" /* SingleTaskPage */], { index: index });
    };
    GroupComponent.prototype.formSubmit = function (f) {
        var newTask = new __WEBPACK_IMPORTED_MODULE_2__models_Task__["a" /* Task */](f.value.tache, [{ title: '', isChecked: false }], false);
        this.taskService.taskList.push(newTask);
        f.reset();
        this.wantToAddSubTask = !this.wantToAddSubTask;
    };
    GroupComponent.prototype.openOrSubmitForm = function () {
        this.wantToAddSubTask = !this.wantToAddSubTask;
    };
    GroupComponent.prototype.reorderItems = function (indexes) {
        this.tasksList = Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* reorderArray */])(this.tasksList, indexes);
    };
    GroupComponent.prototype.deleteItem = function (task) {
        var deleledTastIndex = this.tasksList.indexOf(task);
        this.tasksList.splice(deleledTastIndex, 1);
    };
    GroupComponent.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    GroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'group',template:/*ion-inline-start:"/home/niakate/WEB/Ionic-learning/Todo/src/components/group/group.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Todo</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list reorder="true" (ionItemReorder)="reorderItems($event)" >\n      <ion-item-sliding id="item" *ngFor="let task of tasksList; let itemIndex = index" (click)="openTask(itemIndex)">\n          <button ion-item [ngClass]="{\'checked\':task.isChecked, \'unChecked\': !task.isChecked}">                                                                                                                                                                                                                                                                                                                                                                                                \n            <ion-label> {{task.name}} </ion-label>\n            <ion-checkbox [(ngModel)]="task.isChecked"></ion-checkbox>\n          </button>\n          <ion-item-options side="right">\n            <button icon-only (click)="deleteItem(task)">\n              <ion-icon ios="ios-trash" md="md-trash" color="danger"></ion-icon>\n            </button>                                                                                                                                               \n          </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  <div>\n    <form id="form" #f="ngForm" (ngSubmit)="formSubmit(f)" *ngIf="wantToAddSubTask">\n      <p><input name="tache" ngModel/></p>\n      <button ion-button type="submit">Ajouter</button>\n    </form>\n    <button id="button" ion-button (click)="openOrSubmitForm()" *ngIf="!wantToAddSubTask">Ajouter</button>\n</div>\n</ion-content>'/*ion-inline-end:"/home/niakate/WEB/Ionic-learning/Todo/src/components/group/group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_TaskService__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* MenuController */]])
    ], GroupComponent);
    return GroupComponent;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_TaskService__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleTaskPage = /** @class */ (function () {
    function SingleTaskPage(navCtrl, navParams, taskService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.taskService = taskService;
        this.menuCtrl = menuCtrl;
        this.wantToAddSubTask = false;
    }
    SingleTaskPage.prototype.ngOnInit = function () {
        var index = this.navParams.get('index');
        this.task = this.taskService.getTask(index);
    };
    SingleTaskPage.prototype.formSubmit = function (f) {
        var subTask = {
            title: f.value.sous_tache,
            isChecked: false
        };
        this.task.subTasks.push(subTask);
        f.reset();
        this.wantToAddSubTask = !this.wantToAddSubTask;
    };
    SingleTaskPage.prototype.openOrSubmitForm = function () {
        this.wantToAddSubTask = !this.wantToAddSubTask;
    };
    SingleTaskPage.prototype.reorderItems = function (event) {
        this.task.subTasks = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* reorderArray */])(this.task.subTasks, event);
    };
    SingleTaskPage.prototype.deleteItem = function (subTask) {
        var deleledSubTastIndex = this.task.subTasks.indexOf(subTask);
        this.task.subTasks.splice(deleledSubTastIndex, 1);
    };
    SingleTaskPage.prototype.lineThroughTask = function (checkbox) {
        var itemNumb = parseInt(checkbox.id[9]) - 3;
        var taskItem = document.getElementById("subItem" + itemNumb);
        taskItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
        taskItem.style.backgroundColor = checkbox.checked ? "rgba(" + 38 + "," + 194 + "," + 129 + "," + 0.5 + ")" : "white";
    };
    SingleTaskPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SingleTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-single-task',template:/*ion-inline-start:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/single-task/single-task.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{task.name}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n    <ion-item-sliding *ngFor="let subTask of task.subTasks; let subTaskIndex = index">\n      <button ion-item *ngIf="subTask.title !== \'\'" [ngClass]="{\'checked\':subTask.isChecked, \'unChecked\': !subTask.isChecked}">\n          <ion-label >{{subTask.title}}</ion-label>\n          <ion-checkbox [(ngModel)]="subTask.isChecked"></ion-checkbox>\n      </button>\n      <ion-item-options side="right">\n        <button icon-only (click)="deleteItem(subTask)">\n          <ion-icon ios="ios-trash" md="md-trash" color="danger"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div>\n      <form id="form" #f="ngForm" (ngSubmit)="formSubmit(f)" *ngIf="wantToAddSubTask">\n        <p><input name="sous_tache" ngModel/></p>\n        <button ion-button type="submit">Ajouter</button>\n      </form>\n      <button id="button" ion-button (click)="openOrSubmitForm()" *ngIf="!wantToAddSubTask">Ajouter</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/single-task/single-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_TaskService__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], SingleTaskPage);
    return SingleTaskPage;
}());

//# sourceMappingURL=single-task.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ThemeSwitcherService__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreferencesPage = /** @class */ (function () {
    function PreferencesPage(navCtrl, navParams, viewCtrl, themeSwitcherService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.themeSwitcherService = themeSwitcherService;
        this.themeSwitcherService.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    PreferencesPage.prototype.toDarkTheme = function () {
        this.themeSwitcherService.setActiveTheme('dark-theme');
    };
    PreferencesPage.prototype.toLightTheme = function () {
        this.themeSwitcherService.setActiveTheme('light-theme');
    };
    PreferencesPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    PreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-preferences',template:/*ion-inline-start:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/preferences/preferences.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button clear (click)="dismissModal()"> Fermer </button>\n  </ion-navbar>\n  <style>\n    :root {\n      --ion-safe-area-top: 20px;\n      --ion-safe-area-bottom: 22px;\n    }\n  </style>\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group >\n    <ion-list-header>\n      <ion-label>Thème</ion-label>\n    </ion-list-header>\n      <ion-item>\n        <ion-label>Sombre</ion-label>\n        <ion-radio value="sombre" (ionSelect)= "toDarkTheme()"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Clair</ion-label>\n        <ion-radio value="clair" (ionSelect)= "toLightTheme()"></ion-radio>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/preferences/preferences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_ThemeSwitcherService__["a" /* ThemeSwitcherService */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button clear (click)="dismissModal()"> Fermer </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, menuCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button clear (click)="dismissModal()"> Fermer </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ProfilPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/profil/profil.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button clear (click)="dismissModal()"> Fermer </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/niakate/WEB/Ionic-learning/Todo/src/pages/settings/profil/profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_TaskService__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_group_group__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_single_task_single_task__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_preferences_preferences__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_notifications_notifications__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_about_about__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_profil_profil__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_ThemeSwitcherService__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__components_group_group__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_single_task_single_task__["a" /* SingleTaskPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_profil_profil__["a" /* ProfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__components_group_group__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_single_task_single_task__["a" /* SingleTaskPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_profil_profil__["a" /* ProfilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__services_TaskService__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_13__services_ThemeSwitcherService__["a" /* ThemeSwitcherService */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_group_group__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_preferences_preferences__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_notifications_notifications__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_about_about__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_profil_profil__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ThemeSwitcherService__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, modelCtrl, themeSwitcher) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.modelCtrl = modelCtrl;
        this.themeSwitcher = themeSwitcher;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__components_group_group__["a" /* GroupComponent */];
        this.preferencesPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_preferences_preferences__["a" /* PreferencesPage */];
        this.notificationsPage = __WEBPACK_IMPORTED_MODULE_6__pages_settings_notifications_notifications__["a" /* NotificationsPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_7__pages_settings_about_about__["a" /* AboutPage */];
        this.profilPage = __WEBPACK_IMPORTED_MODULE_8__pages_settings_profil_profil__["a" /* ProfilPage */];
        this.themeSwitcher.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page) {
        var modal = this.modelCtrl.create(page);
        modal.present();
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/niakate/WEB/Ionic-learning/Todo/src/app/app.html"*/'<ion-menu [content]="content" [ngClass]="selectedTheme">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item icon-start (click)="onNavigate(profilPage)">\n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          Profil\n        </button>\n        <button ion-item icon-start (click)="onNavigate(notificationsPage)">\n          <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>\n          Notifications\n        </button>\n        <button ion-item icon-start (click)="onNavigate(preferencesPage)">\n          <ion-icon ios="ios-options" md="md-options"></ion-icon>\n          Préférences\n        </button>\n        <button ion-item icon-start (click)="onNavigate(aboutPage)">\n          <ion-icon ios="ios-happy" md="md-happy"></ion-icon>\n          Apropos\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n<ion-nav [root]="rootPage" #content [ngClass]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"/home/niakate/WEB/Ionic-learning/Todo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__services_ThemeSwitcherService__["a" /* ThemeSwitcherService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(name, subTasks, isChecked) {
        this.subTasks = [];
        this.name = name;
        this.subTasks = subTasks;
        this.isChecked = isChecked;
    }
    return Task;
}());

//# sourceMappingURL=Task.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map