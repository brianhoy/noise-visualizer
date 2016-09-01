webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// The browser platform with a compiler
	var platform_browser_dynamic_1 = __webpack_require__(1);
	// The app module
	var app_module_1 = __webpack_require__(337);
	// Compile and launch the module
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var forms_1 = __webpack_require__(338);
	var app_component_1 = __webpack_require__(376);
	var noise_options_service_1 = __webpack_require__(393);
	var debug_service_1 = __webpack_require__(672);
	var view_options_service_1 = __webpack_require__(387);
	var resize_service_1 = __webpack_require__(673);
	var angular2_resizable_1 = __webpack_require__(677);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                angular2_resizable_1.ResizableModule
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	            ],
	            providers: [
	                noise_options_service_1.NoiseOptionService,
	                debug_service_1.DebugService,
	                view_options_service_1.ViewOptionService,
	                resize_service_1.ResizeService
	            ],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(339));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * This module is used for handling user input, by defining and building a {@link FormGroup} that
	 * consists of
	 * {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl} objects can then
	 * be used
	 * to read information
	 * from the form DOM elements.
	 *
	 * Forms providers are not included in default providers; you must import these providers
	 * explicitly.
	 */
	var directives_1 = __webpack_require__(340);
	exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
	exports.REACTIVE_FORM_DIRECTIVES = directives_1.REACTIVE_FORM_DIRECTIVES;
	var abstract_control_directive_1 = __webpack_require__(351);
	exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
	var abstract_form_group_directive_1 = __webpack_require__(364);
	exports.AbstractFormGroupDirective = abstract_form_group_directive_1.AbstractFormGroupDirective;
	var checkbox_value_accessor_1 = __webpack_require__(341);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
	var control_container_1 = __webpack_require__(362);
	exports.ControlContainer = control_container_1.ControlContainer;
	var control_value_accessor_1 = __webpack_require__(342);
	exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
	var default_value_accessor_1 = __webpack_require__(343);
	exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(346);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_1 = __webpack_require__(345);
	exports.NgControlStatus = ng_control_status_1.NgControlStatus;
	var ng_form_1 = __webpack_require__(352);
	exports.NgForm = ng_form_1.NgForm;
	var ng_model_1 = __webpack_require__(363);
	exports.NgModel = ng_model_1.NgModel;
	var ng_model_group_1 = __webpack_require__(365);
	exports.NgModelGroup = ng_model_group_1.NgModelGroup;
	var form_control_directive_1 = __webpack_require__(368);
	exports.FormControlDirective = form_control_directive_1.FormControlDirective;
	var form_control_name_1 = __webpack_require__(369);
	exports.FormControlName = form_control_name_1.FormControlName;
	var form_group_directive_1 = __webpack_require__(371);
	exports.FormGroupDirective = form_group_directive_1.FormGroupDirective;
	var form_group_name_1 = __webpack_require__(372);
	exports.FormArrayName = form_group_name_1.FormArrayName;
	var form_group_name_2 = __webpack_require__(372);
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_1 = __webpack_require__(360);
	exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_1 = __webpack_require__(361);
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor;
	var validators_1 = __webpack_require__(373);
	exports.MaxLengthValidator = validators_1.MaxLengthValidator;
	exports.MinLengthValidator = validators_1.MinLengthValidator;
	exports.PatternValidator = validators_1.PatternValidator;
	exports.RequiredValidator = validators_1.RequiredValidator;
	var form_builder_1 = __webpack_require__(374);
	exports.FormBuilder = form_builder_1.FormBuilder;
	var model_1 = __webpack_require__(354);
	exports.AbstractControl = model_1.AbstractControl;
	exports.FormArray = model_1.FormArray;
	exports.FormControl = model_1.FormControl;
	exports.FormGroup = model_1.FormGroup;
	var validators_2 = __webpack_require__(356);
	exports.NG_ASYNC_VALIDATORS = validators_2.NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = validators_2.NG_VALIDATORS;
	exports.Validators = validators_2.Validators;
	__export(__webpack_require__(375));
	//# sourceMappingURL=forms.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var checkbox_value_accessor_1 = __webpack_require__(341);
	var default_value_accessor_1 = __webpack_require__(343);
	var ng_control_status_1 = __webpack_require__(345);
	var ng_form_1 = __webpack_require__(352);
	var ng_model_1 = __webpack_require__(363);
	var ng_model_group_1 = __webpack_require__(365);
	var number_value_accessor_1 = __webpack_require__(358);
	var radio_control_value_accessor_1 = __webpack_require__(359);
	var form_control_directive_1 = __webpack_require__(368);
	var form_control_name_1 = __webpack_require__(369);
	var form_group_directive_1 = __webpack_require__(371);
	var form_group_name_1 = __webpack_require__(372);
	var select_control_value_accessor_1 = __webpack_require__(360);
	var select_multiple_control_value_accessor_1 = __webpack_require__(361);
	var validators_1 = __webpack_require__(373);
	var checkbox_value_accessor_2 = __webpack_require__(341);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
	var default_value_accessor_2 = __webpack_require__(343);
	exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(346);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_2 = __webpack_require__(345);
	exports.NgControlStatus = ng_control_status_2.NgControlStatus;
	var ng_form_2 = __webpack_require__(352);
	exports.NgForm = ng_form_2.NgForm;
	var ng_model_2 = __webpack_require__(363);
	exports.NgModel = ng_model_2.NgModel;
	var ng_model_group_2 = __webpack_require__(365);
	exports.NgModelGroup = ng_model_group_2.NgModelGroup;
	var number_value_accessor_2 = __webpack_require__(358);
	exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
	var radio_control_value_accessor_2 = __webpack_require__(359);
	exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
	var form_control_directive_2 = __webpack_require__(368);
	exports.FormControlDirective = form_control_directive_2.FormControlDirective;
	var form_control_name_2 = __webpack_require__(369);
	exports.FormControlName = form_control_name_2.FormControlName;
	var form_group_directive_2 = __webpack_require__(371);
	exports.FormGroupDirective = form_group_directive_2.FormGroupDirective;
	var form_group_name_2 = __webpack_require__(372);
	exports.FormArrayName = form_group_name_2.FormArrayName;
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_2 = __webpack_require__(360);
	exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_2 = __webpack_require__(361);
	exports.NgSelectMultipleOption = select_multiple_control_value_accessor_2.NgSelectMultipleOption;
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_2.SelectMultipleControlValueAccessor;
	var validators_2 = __webpack_require__(373);
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	exports.RequiredValidator = validators_2.RequiredValidator;
	exports.SHARED_FORM_DIRECTIVES = [
	    select_control_value_accessor_1.NgSelectOption, select_multiple_control_value_accessor_1.NgSelectMultipleOption, default_value_accessor_1.DefaultValueAccessor, number_value_accessor_1.NumberValueAccessor,
	    checkbox_value_accessor_1.CheckboxControlValueAccessor, select_control_value_accessor_1.SelectControlValueAccessor, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor,
	    radio_control_value_accessor_1.RadioControlValueAccessor, ng_control_status_1.NgControlStatus, validators_1.RequiredValidator, validators_1.MinLengthValidator,
	    validators_1.MaxLengthValidator, validators_1.PatternValidator
	];
	exports.TEMPLATE_DRIVEN_DIRECTIVES = [ng_model_1.NgModel, ng_model_group_1.NgModelGroup, ng_form_1.NgForm];
	exports.REACTIVE_DRIVEN_DIRECTIVES = [form_control_directive_1.FormControlDirective, form_group_directive_1.FormGroupDirective, form_control_name_1.FormControlName, form_group_name_1.FormGroupName, form_group_name_1.FormArrayName];
	/**
	 *
	 * A list of all the form directives used as part of a `@Component` annotation.
	 *
	 *  This is a shorthand for importing them each individually.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'my-app',
	 *   directives: [FORM_DIRECTIVES]
	 * })
	 * class MyApp {}
	 * ```
	 * @experimental
	 */
	exports.FORM_DIRECTIVES = [exports.TEMPLATE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	/**
	 * @experimental
	 */
	exports.REACTIVE_FORM_DIRECTIVES = [exports.REACTIVE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	var InternalFormsSharedModule = (function () {
	    function InternalFormsSharedModule() {
	    }
	    /** @nocollapse */
	    InternalFormsSharedModule.decorators = [
	        { type: core_1.NgModule, args: [{ declarations: exports.SHARED_FORM_DIRECTIVES, exports: exports.SHARED_FORM_DIRECTIVES },] },
	    ];
	    return InternalFormsSharedModule;
	}());
	exports.InternalFormsSharedModule = InternalFormsSharedModule;
	//# sourceMappingURL=directives.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var control_value_accessor_1 = __webpack_require__(342);
	exports.CHECKBOX_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true
	};
	var CheckboxControlValueAccessor = (function () {
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    CheckboxControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    CheckboxControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return CheckboxControlValueAccessor;
	}());
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	//# sourceMappingURL=checkbox_value_accessor.js.map

/***/ },

/***/ 342:
239,

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(344);
	var control_value_accessor_1 = __webpack_require__(342);
	exports.DEFAULT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	var DefaultValueAccessor = (function () {
	    function DefaultValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    DefaultValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                    // TODO: vsavkin replace the above selector with the one below it once
	                    // https://github.com/angular/angular/issues/3011 is implemented
	                    // selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.DEFAULT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    DefaultValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return DefaultValueAccessor;
	}());
	exports.DefaultValueAccessor = DefaultValueAccessor;
	//# sourceMappingURL=default_value_accessor.js.map

/***/ },

/***/ 344:
15,

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(344);
	var ng_control_1 = __webpack_require__(346);
	var NgControlStatus = (function () {
	    function NgControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.untouched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.touched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.pristine : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.dirty : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassValid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? !this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    NgControlStatus.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formControlName],[ngModel],[formControl]',
	                    host: {
	                        '[class.ng-untouched]': 'ngClassUntouched',
	                        '[class.ng-touched]': 'ngClassTouched',
	                        '[class.ng-pristine]': 'ngClassPristine',
	                        '[class.ng-dirty]': 'ngClassDirty',
	                        '[class.ng-valid]': 'ngClassValid',
	                        '[class.ng-invalid]': 'ngClassInvalid'
	                    }
	                },] },
	    ];
	    /** @nocollapse */
	    NgControlStatus.ctorParameters = [
	        { type: ng_control_1.NgControl, decorators: [{ type: core_1.Self },] },
	    ];
	    return NgControlStatus;
	}());
	exports.NgControlStatus = NgControlStatus;
	//# sourceMappingURL=ng_control_status.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(347);
	var abstract_control_directive_1 = __webpack_require__(351);
	/**
	 * A base class that all control directive extend.
	 * It binds a {@link Control} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * @experimental
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        _super.apply(this, arguments);
	        this.name = null;
	        this.valueAccessor = null;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return NgControl;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.NgControl = NgControl;
	//# sourceMappingURL=ng_control.js.map

/***/ },

/***/ 347:
[992, 348, 349, 349],

/***/ 348:
29,

/***/ 349:
[993, 348, 350, 344],

/***/ 350:
[994, 344],

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(347);
	var lang_1 = __webpack_require__(344);
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * @experimental
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    Object.defineProperty(AbstractControlDirective.prototype, "control", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.invalid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pending : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.errors : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControlDirective.prototype.reset = function (value) {
	        if (value === void 0) { value = undefined; }
	        if (lang_1.isPresent(this.control))
	            this.control.reset(value);
	    };
	    return AbstractControlDirective;
	}());
	exports.AbstractControlDirective = AbstractControlDirective;
	//# sourceMappingURL=abstract_control_directive.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(353);
	var collection_1 = __webpack_require__(350);
	var lang_1 = __webpack_require__(344);
	var model_1 = __webpack_require__(354);
	var validators_1 = __webpack_require__(356);
	var control_container_1 = __webpack_require__(362);
	var shared_1 = __webpack_require__(355);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgForm; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    function NgForm(validators, asyncValidators) {
	        _super.call(this);
	        this._submitted = false;
	        this.ngSubmit = new async_1.EventEmitter();
	        this.form = new model_1.FormGroup({}, null, shared_1.composeValidators(validators), shared_1.composeAsyncValidators(asyncValidators));
	    }
	    Object.defineProperty(NgForm.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            dir._control = container.registerControl(dir.name, dir.control);
	            shared_1.setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            var group = new model_1.FormGroup({});
	            shared_1.setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var ctrl = _this.form.get(dir.path);
	            ctrl.setValue(value);
	        });
	    };
	    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	    NgForm.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    NgForm.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return collection_1.ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	    };
	    /** @nocollapse */
	    NgForm.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    NgForm.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgForm;
	}(control_container_1.ControlContainer));
	exports.NgForm = NgForm;
	//# sourceMappingURL=ng_form.js.map

/***/ },

/***/ 353:
68,

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PromiseObservable_1 = __webpack_require__(258);
	var shared_1 = __webpack_require__(355);
	var async_1 = __webpack_require__(353);
	var collection_1 = __webpack_require__(350);
	var exceptions_1 = __webpack_require__(347);
	var lang_1 = __webpack_require__(344);
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	exports.VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	exports.INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	exports.PENDING = 'PENDING';
	function isControl(control) {
	    return control instanceof AbstractControl;
	}
	exports.isControl = isControl;
	function _find(control, path, delimiter) {
	    if (lang_1.isBlank(path))
	        return null;
	    if (!(path instanceof Array)) {
	        path = path.split(delimiter);
	    }
	    if (path instanceof Array && collection_1.ListWrapper.isEmpty(path))
	        return null;
	    return path.reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return lang_1.isPresent(v.controls[name]) ? v.controls[name] : null;
	        }
	        else if (v instanceof FormArray) {
	            var index = name;
	            return lang_1.isPresent(v.at(index)) ? v.at(index) : null;
	        }
	        else {
	            return null;
	        }
	    }, control);
	}
	function toObservable(r) {
	    return lang_1.isPromise(r) ? PromiseObservable_1.PromiseObservable.create(r) : r;
	}
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? shared_1.composeValidators(validator) : validator;
	}
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? shared_1.composeAsyncValidators(asyncValidator) : asyncValidator;
	}
	/**
	 * @experimental
	 */
	var AbstractControl = (function () {
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        this._pristine = true;
	        this._touched = false;
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        get: function () { return this._status === exports.VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "invalid", {
	        get: function () { return this._status === exports.INVALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns the errors of this control.
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        get: function () { return this._status == exports.PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    AbstractControl.prototype.markAsTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._touched = true;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._pristine = false;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = true;
	        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsUntouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = false;
	        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._status = exports.PENDING;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._updateValue();
	        this._errors = this._runValidator();
	        this._status = this._calculateStatus();
	        if (this._status == exports.VALID || this._status == exports.PENDING) {
	            this._runAsyncValidator(emitEvent);
	        }
	        if (emitEvent) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    AbstractControl.prototype._runValidator = function () {
	        return lang_1.isPresent(this.validator) ? this.validator(this) : null;
	    };
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (lang_1.isPresent(this.asyncValidator)) {
	            this._status = exports.PENDING;
	            this._cancelExistingSubscription();
	            var obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	        }
	    };
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (lang_1.isPresent(this._asyncValidationSubscription)) {
	            this._asyncValidationSubscription.unsubscribe();
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run not automatically, but manually by the user.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ## Usage
	     *
	     * ```
	     * var login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.updateValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._errors = errors;
	        this._updateControlsErrors(emitEvent);
	    };
	    /**
	     * @deprecated - use get() instead
	     */
	    AbstractControl.prototype.find = function (path) { return _find(this, path, '/'); };
	    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        var control = lang_1.isPresent(path) && !collection_1.ListWrapper.isEmpty(path) ? this.find(path) : this;
	        if (lang_1.isPresent(control) && lang_1.isPresent(control._errors)) {
	            return collection_1.StringMapWrapper.get(control._errors, errorCode);
	        }
	        else {
	            return null;
	        }
	    };
	    AbstractControl.prototype.hasError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        return lang_1.isPresent(this.getError(errorCode, path));
	    };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        get: function () {
	            var x = this;
	            while (lang_1.isPresent(x._parent)) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new async_1.EventEmitter();
	        this._statusChanges = new async_1.EventEmitter();
	    };
	    AbstractControl.prototype._calculateStatus = function () {
	        if (lang_1.isPresent(this._errors))
	            return exports.INVALID;
	        if (this._anyControlsHaveStatus(exports.PENDING))
	            return exports.PENDING;
	        if (this._anyControlsHaveStatus(exports.INVALID))
	            return exports.INVALID;
	        return exports.VALID;
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	        return this._anyControls(function (control) { return control.status == status; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsDirty = function () {
	        return this._anyControls(function (control) { return control.dirty; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsTouched = function () {
	        return this._anyControls(function (control) { return control.touched; });
	    };
	    /** @internal */
	    AbstractControl.prototype._updatePristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = !this._anyControlsDirty();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._updateTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = this._anyControlsTouched();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    return AbstractControl;
	}());
	exports.AbstractControl = AbstractControl;
	/**
	 * Defines a part of a form that cannot be divided into other controls. `FormControl`s have values
	 * and
	 * validation state, which is determined by an optional validation function.
	 *
	 * `FormControl` is one of the three fundamental building blocks used to define forms in Angular,
	 * along
	 * with {@link FormGroup} and {@link FormArray}.
	 *
	 * ## Usage
	 *
	 * By default, a `FormControl` is created for every `<input>` or other form component.
	 * With {@link FormControlDirective} or {@link FormGroupDirective} an existing {@link FormControl}
	 * can be bound to a DOM element instead. This `FormControl` can be configured with a custom
	 * validation function.
	 *
	 * @experimental
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    function FormControl(value, validator, asyncValidator) {
	        if (value === void 0) { value = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	        /** @internal */
	        this._onChange = [];
	        this._value = value;
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        this._initObservables();
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. If `emitEvent` is `true`, this change will cause a
	     * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
	     * `false`.
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     *
	     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	     */
	    FormControl.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	        emitModelToViewChange = lang_1.isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	        emitViewToModelChange = lang_1.isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	        this._value = value;
	        if (this._onChange.length && emitModelToViewChange) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	        }
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * This function is functionally the same as updateValue() at this level.  It exists for
	     * symmetry with patchValue() on FormGroups and FormArrays, where it does behave differently.
	     */
	    FormControl.prototype.patchValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    /**
	     * @deprecated Please use setValue() instead.
	     */
	    FormControl.prototype.updateValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    FormControl.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = null; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this.markAsPristine({ onlySelf: onlySelf });
	        this.markAsUntouched({ onlySelf: onlySelf });
	        this.setValue(value, { onlySelf: onlySelf });
	    };
	    /**
	     * @internal
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * @internal
	     */
	    FormControl.prototype._anyControls = function (condition) { return false; };
	    /**
	     * Register a listener for change events.
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    /**
	     * @internal
	     */
	    FormControl.prototype._forEachChild = function (cb) { };
	    return FormControl;
	}(AbstractControl));
	exports.FormControl = FormControl;
	/**
	 * Defines a part of a form, of fixed length, that can contain other controls.
	 *
	 * A `FormGroup` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormGroup` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire group is invalid.
	 * Similarly, if a control changes its value, the entire group changes as well.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormArray}. {@link FormArray} can also contain other
	 * controls, but is of variable length.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    function FormGroup(controls, optionals, validator, asyncValidator) {
	        if (optionals === void 0) { optionals = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._optionals = lang_1.isPresent(optionals) ? optionals : {};
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Register a control with the group's list of controls.
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove a control from this group.
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        collection_1.StringMapWrapper.delete(this.controls, name);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as non-optional.
	     */
	    FormGroup.prototype.include = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, true);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as optional.
	     */
	    FormGroup.prototype.exclude = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, false);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Check whether there is a control with the given name in the group.
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        var c = collection_1.StringMapWrapper.contains(this.controls, controlName);
	        return c && this._included(controlName);
	    };
	    FormGroup.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            _this._throwIfControlMissing(name);
	            _this.controls[name].setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            if (_this.controls[name]) {
	                _this.controls[name].patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = {}; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, name) {
	            control.reset(value[name], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormGroup.prototype._throwIfControlMissing = function (name) {
	        if (!Object.keys(this.controls).length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.controls[name]) {
	            throw new exceptions_1.BaseException("Cannot find form control with name: " + name + ".");
	        }
	    };
	    /** @internal */
	    FormGroup.prototype._forEachChild = function (cb) {
	        collection_1.StringMapWrapper.forEach(this.controls, cb);
	    };
	    /** @internal */
	    FormGroup.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control, name) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /** @internal */
	    FormGroup.prototype._anyControls = function (condition) {
	        var _this = this;
	        var res = false;
	        this._forEachChild(function (control, name) {
	            res = res || (_this.contains(name) && condition(control));
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._reduceValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control.value;
	            return acc;
	        });
	    };
	    /** @internal */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var _this = this;
	        var res = initValue;
	        this._forEachChild(function (control, name) {
	            if (_this._included(name)) {
	                res = fn(res, control, name);
	            }
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._included = function (controlName) {
	        var isOptional = collection_1.StringMapWrapper.contains(this._optionals, controlName);
	        return !isOptional || collection_1.StringMapWrapper.get(this._optionals, controlName);
	    };
	    /** @internal */
	    FormGroup.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, name) {
	            if (value[name] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control with name: '" + name + "'.");
	            }
	        });
	    };
	    return FormGroup;
	}(AbstractControl));
	exports.FormGroup = FormGroup;
	/**
	 * Defines a part of a form, of variable length, that can contain other controls.
	 *
	 * A `FormArray` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormArray` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire array is invalid.
	 * Similarly, if a control changes its value, the entire array changes as well.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormGroup}. {@link FormGroup} can also contain
	 * other controls, but is of fixed length.
	 *
	 * ## Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    function FormArray(controls, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Get the {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {@link AbstractControl} at the end of the array.
	     */
	    FormArray.prototype.push = function (control) {
	        this.controls.push(control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Insert a new {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.insert = function (index, control) {
	        collection_1.ListWrapper.insert(this.controls, index, control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     */
	    FormArray.prototype.removeAt = function (index) {
	        collection_1.ListWrapper.removeAt(this.controls, index);
	        this.updateValueAndValidity();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    FormArray.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        value.forEach(function (newValue, index) {
	            _this._throwIfControlMissing(index);
	            _this.at(index).setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        value.forEach(function (newValue, index) {
	            if (_this.at(index)) {
	                _this.at(index).patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = []; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, index) {
	            control.reset(value[index], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormArray.prototype._throwIfControlMissing = function (index) {
	        if (!this.controls.length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.at(index)) {
	            throw new exceptions_1.BaseException("Cannot find form control at index " + index);
	        }
	    };
	    /** @internal */
	    FormArray.prototype._forEachChild = function (cb) {
	        this.controls.forEach(function (control, index) { cb(control, index); });
	    };
	    /** @internal */
	    FormArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
	    /** @internal */
	    FormArray.prototype._anyControls = function (condition) {
	        return this.controls.some(function (control) { return condition(control); });
	    };
	    /** @internal */
	    FormArray.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormArray.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, i) {
	            if (value[i] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control at index: " + i + ".");
	            }
	        });
	    };
	    return FormArray;
	}(AbstractControl));
	exports.FormArray = FormArray;
	//# sourceMappingURL=model.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var collection_1 = __webpack_require__(350);
	var exceptions_1 = __webpack_require__(347);
	var lang_1 = __webpack_require__(344);
	var validators_1 = __webpack_require__(356);
	var checkbox_value_accessor_1 = __webpack_require__(341);
	var default_value_accessor_1 = __webpack_require__(343);
	var normalize_validator_1 = __webpack_require__(357);
	var number_value_accessor_1 = __webpack_require__(358);
	var radio_control_value_accessor_1 = __webpack_require__(359);
	var select_control_value_accessor_1 = __webpack_require__(360);
	var select_multiple_control_value_accessor_1 = __webpack_require__(361);
	function controlPath(name, parent) {
	    var p = collection_1.ListWrapper.clone(parent.path);
	    p.push(name);
	    return p;
	}
	exports.controlPath = controlPath;
	function setUpControl(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    if (lang_1.isBlank(dir.valueAccessor))
	        _throwError(dir, 'No value accessor for form control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    dir.valueAccessor.writeValue(control.value);
	    // view -> model
	    dir.valueAccessor.registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.markAsDirty();
	        control.setValue(newValue, { emitModelToViewChange: false });
	    });
	    control.registerOnChange(function (newValue, emitModelEvent) {
	        // control -> view
	        dir.valueAccessor.writeValue(newValue);
	        // control -> ngModel
	        if (emitModelEvent)
	            dir.viewToModelUpdate(newValue);
	    });
	    // touched
	    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	}
	exports.setUpControl = setUpControl;
	function setUpFormContainer(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	exports.setUpFormContainer = setUpFormContainer;
	function _throwError(dir, message) {
	    var messageEnd;
	    if (dir.path.length > 1) {
	        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	    }
	    else if (dir.path[0]) {
	        messageEnd = "name: '" + dir.path + "'";
	    }
	    else {
	        messageEnd = 'unspecified name attribute';
	    }
	    throw new exceptions_1.BaseException(message + " " + messageEnd);
	}
	function composeValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
	}
	exports.composeValidators = composeValidators;
	function composeAsyncValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
	        null;
	}
	exports.composeAsyncValidators = composeAsyncValidators;
	function isPropertyUpdated(changes, viewModel) {
	    if (!collection_1.StringMapWrapper.contains(changes, 'model'))
	        return false;
	    var change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !lang_1.looseIdentical(viewModel, change.currentValue);
	}
	exports.isPropertyUpdated = isPropertyUpdated;
	// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	function selectValueAccessor(dir, valueAccessors) {
	    if (lang_1.isBlank(valueAccessors))
	        return null;
	    var defaultAccessor;
	    var builtinAccessor;
	    var customAccessor;
	    valueAccessors.forEach(function (v) {
	        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
	            defaultAccessor = v;
	        }
	        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) || lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
	            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
	            lang_1.hasConstructor(v, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor) ||
	            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
	            if (lang_1.isPresent(builtinAccessor))
	                _throwError(dir, 'More than one built-in value accessor matches form control with');
	            builtinAccessor = v;
	        }
	        else {
	            if (lang_1.isPresent(customAccessor))
	                _throwError(dir, 'More than one custom value accessor matches form control with');
	            customAccessor = v;
	        }
	    });
	    if (lang_1.isPresent(customAccessor))
	        return customAccessor;
	    if (lang_1.isPresent(builtinAccessor))
	        return builtinAccessor;
	    if (lang_1.isPresent(defaultAccessor))
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for form control with');
	    return null;
	}
	exports.selectValueAccessor = selectValueAccessor;
	//# sourceMappingURL=shared.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var toPromise_1 = __webpack_require__(243);
	var collection_1 = __webpack_require__(350);
	var lang_1 = __webpack_require__(344);
	/**
	 * Providers for validators to be used for {@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 * @experimental
	 */
	exports.NG_VALIDATORS = new core_1.OpaqueToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {@link NG_VALIDATORS} for more details.
	 *
	 * @experimental
	 */
	exports.NG_ASYNC_VALIDATORS = new core_1.OpaqueToken('NgAsyncValidators');
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {@link FormControl} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new FormControl("", Validators.required)
	 * ```
	 *
	 * @experimental
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     */
	    Validators.required = function (control) {
	        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == '') ?
	            { 'required': true } :
	            null;
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     */
	    Validators.pattern = function (pattern) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var regex = new RegExp("^" + pattern + "$");
	            var v = control.value;
	            return regex.test(v) ? null :
	                { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	        };
	    };
	    /**
	     * No-op validator.
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * Compose multiple validators into a single function that returns the union
	     * of the individual error maps.
	     */
	    Validators.compose = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    Validators.composeAsync = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	            return Promise.all(promises).then(_mergeErrors);
	        };
	    };
	    return Validators;
	}());
	exports.Validators = Validators;
	function _convertToPromise(obj) {
	    return lang_1.isPromise(obj) ? obj : toPromise_1.toPromise.call(obj);
	}
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _mergeErrors(arrayOfErrors) {
	    var res = arrayOfErrors.reduce(function (res, errors) {
	        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
	    }, {});
	    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
	}
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 357:
247,

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(344);
	var control_value_accessor_1 = __webpack_require__(342);
	exports.NUMBER_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	var NumberValueAccessor = (function () {
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : lang_1.NumberWrapper.parseFloat(value)); };
	    };
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    NumberValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                    host: {
	                        '(change)': 'onChange($event.target.value)',
	                        '(input)': 'onChange($event.target.value)',
	                        '(blur)': 'onTouched()'
	                    },
	                    providers: [exports.NUMBER_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    NumberValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return NumberValueAccessor;
	}());
	exports.NumberValueAccessor = NumberValueAccessor;
	//# sourceMappingURL=number_value_accessor.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(350);
	var exceptions_1 = __webpack_require__(347);
	var lang_1 = __webpack_require__(344);
	var control_value_accessor_1 = __webpack_require__(342);
	var ng_control_1 = __webpack_require__(346);
	exports.RADIO_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        var indexToRemove = -1;
	        for (var i = 0; i < this._accessors.length; ++i) {
	            if (this._accessors[i][1] === accessor) {
	                indexToRemove = i;
	            }
	        }
	        collection_1.ListWrapper.removeAt(this._accessors, indexToRemove);
	    };
	    RadioControlRegistry.prototype.select = function (accessor) {
	        var _this = this;
	        this._accessors.forEach(function (c) {
	            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                c[1].fireUncheck(accessor.value);
	            }
	        });
	    };
	    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	        if (!controlPair[0].control)
	            return false;
	        return controlPair[0].control.root === accessor._control.control.root &&
	            controlPair[1].name === accessor.name;
	    };
	    /** @nocollapse */
	    RadioControlRegistry.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return RadioControlRegistry;
	}());
	exports.RadioControlRegistry = RadioControlRegistry;
	var RadioControlValueAccessor = (function () {
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(ng_control_1.NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        if (lang_1.isPresent(value)) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        }
	    };
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(_this.value);
	            _this._registry.select(_this);
	        };
	    };
	    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new exceptions_1.BaseException("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    /** @nocollapse */
	    RadioControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                    providers: [exports.RADIO_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	        { type: RadioControlRegistry, },
	        { type: core_1.Injector, },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.propDecorators = {
	        'name': [{ type: core_1.Input },],
	        'formControlName': [{ type: core_1.Input },],
	        'value': [{ type: core_1.Input },],
	    };
	    return RadioControlValueAccessor;
	}());
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	//# sourceMappingURL=radio_control_value_accessor.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(350);
	var lang_1 = __webpack_require__(344);
	var control_value_accessor_1 = __webpack_require__(342);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	var SelectControlValueAccessor = (function () {
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var valueString = _buildValueString(this._getOptionId(value), value);
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) {
	            _this.value = valueString;
	            fn(_this._getOptionValue(valueString));
	        };
	    };
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var value = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(value) ? value : valueString;
	    };
	    /** @nocollapse */
	    SelectControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return SelectControlValueAccessor;
	}());
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	var NgSelectOption = (function () {
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select))
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        set: function (value) {
	            this._setElementValue(value);
	            if (lang_1.isPresent(this._select))
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectOption;
	}());
	exports.NgSelectOption = NgSelectOption;
	//# sourceMappingURL=select_control_value_accessor.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(350);
	var lang_1 = __webpack_require__(344);
	var control_value_accessor_1 = __webpack_require__(342);
	exports.SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (lang_1.isString(value))
	        value = "'" + value + "'";
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/** Mock interface for HTMLCollection */
	var HTMLCollection = (function () {
	    function HTMLCollection() {
	    }
	    return HTMLCollection;
	}());
	var SelectMultipleControlValueAccessor = (function () {
	    function SelectMultipleControlValueAccessor() {
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	        var _this = this;
	        this.value = value;
	        if (value == null)
	            return;
	        var values = value;
	        // convert values to ids
	        var ids = values.map(function (v) { return _this._getOptionId(v); });
	        this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (_) {
	            var selected = [];
	            if (_.hasOwnProperty('selectedOptions')) {
	                var options = _.selectedOptions;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    var val = _this._getOptionValue(opt.value);
	                    selected.push(val);
	                }
	            }
	            else {
	                var options = _.options;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    if (opt.selected) {
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	            }
	            fn(selected);
	        };
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id)._value, value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var opt = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(opt) ? opt._value : valueString;
	    };
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_MULTIPLE_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.ctorParameters = [];
	    return SelectMultipleControlValueAccessor;
	}());
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	var NgSelectMultipleOption = (function () {
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select)) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        set: function (value) {
	            if (lang_1.isPresent(this._select)) {
	                this._value = value;
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            }
	            else {
	                this._setElementValue(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectMultipleOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    /** @internal */
	    NgSelectMultipleOption.prototype._setSelected = function (selected) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	    };
	    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectMultipleOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectMultipleControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectMultipleOption;
	}());
	exports.NgSelectMultipleOption = NgSelectMultipleOption;
	exports.SELECT_DIRECTIVES = [SelectMultipleControlValueAccessor, NgSelectMultipleOption];
	//# sourceMappingURL=select_multiple_control_value_accessor.js.map

/***/ },

/***/ 362:
[996, 351],

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(353);
	var model_1 = __webpack_require__(354);
	var validators_1 = __webpack_require__(356);
	var abstract_form_group_directive_1 = __webpack_require__(364);
	var control_container_1 = __webpack_require__(362);
	var control_value_accessor_1 = __webpack_require__(342);
	var ng_control_1 = __webpack_require__(346);
	var ng_form_1 = __webpack_require__(352);
	var ng_model_group_1 = __webpack_require__(365);
	var shared_1 = __webpack_require__(355);
	var template_driven_errors_1 = __webpack_require__(366);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgModel; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this._control = new model_1.FormControl();
	        /** @internal */
	        this._registered = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkForErrors();
	        if (!this._registered)
	            this._setUpControl();
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this._updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	    Object.defineProperty(NgModel.prototype, "control", {
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        get: function () {
	            return this._parent ? shared_1.controlPath(this.name, this._parent) : [this.name];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "formDirective", {
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    NgModel.prototype._setUpControl = function () {
	        this._isStandalone() ? this._setUpStandalone() :
	            this.formDirective.addControl(this);
	        this._registered = true;
	    };
	    NgModel.prototype._isStandalone = function () {
	        return !this._parent || (this.options && this.options.standalone);
	    };
	    NgModel.prototype._setUpStandalone = function () {
	        shared_1.setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    NgModel.prototype._checkForErrors = function () {
	        if (!this._isStandalone()) {
	            this._checkParentType();
	        }
	        this._checkName();
	    };
	    NgModel.prototype._checkParentType = function () {
	        if (!(this._parent instanceof ng_model_group_1.NgModelGroup) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            template_driven_errors_1.TemplateDrivenErrors.formGroupNameException();
	        }
	        else if (!(this._parent instanceof ng_model_group_1.NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelParentException();
	        }
	    };
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            template_driven_errors_1.TemplateDrivenErrors.missingNameException();
	        }
	    };
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        resolvedPromise.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	    };
	    /** @nocollapse */
	    NgModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngModel]:not([formControlName]):not([formControl])',
	                    providers: [exports.formControlBinding],
	                    exportAs: 'ngModel'
	                },] },
	    ];
	    /** @nocollapse */
	    NgModel.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    NgModel.propDecorators = {
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'name': [{ type: core_1.Input },],
	        'options': [{ type: core_1.Input, args: ['ngModelOptions',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return NgModel;
	}(ng_control_1.NgControl));
	exports.NgModel = NgModel;
	//# sourceMappingURL=ng_model.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var control_container_1 = __webpack_require__(362);
	var shared_1 = __webpack_require__(355);
	/**
	 * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	 *
	 * @experimental
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        _super.apply(this, arguments);
	    }
	    AbstractFormGroupDirective.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormGroup(this);
	    };
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () { this.formDirective.removeFormGroup(this); };
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	        /**
	         * Get the {@link FormGroup} backing this binding.
	         */
	        get: function () { return this.formDirective.getFormGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         */
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {@link Form} to which this group belongs.
	         */
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractFormGroupDirective.prototype._checkParentType = function () { };
	    return AbstractFormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	//# sourceMappingURL=abstract_form_group_directive.js.map

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var validators_1 = __webpack_require__(356);
	var abstract_form_group_directive_1 = __webpack_require__(364);
	var control_container_1 = __webpack_require__(362);
	var ng_form_1 = __webpack_require__(352);
	var template_driven_errors_1 = __webpack_require__(366);
	exports.modelGroupProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgModelGroup; })
	};
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    function NgModelGroup(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    NgModelGroup.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelGroupParentException();
	        }
	    };
	    /** @nocollapse */
	    NgModelGroup.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngModelGroup]', providers: [exports.modelGroupProvider], exportAs: 'ngModelGroup' },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['ngModelGroup',] },],
	    };
	    return NgModelGroup;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.NgModelGroup = NgModelGroup;
	//# sourceMappingURL=ng_model_group.js.map

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(347);
	var error_examples_1 = __webpack_require__(367);
	var TemplateDrivenErrors = (function () {
	    function TemplateDrivenErrors() {
	    }
	    TemplateDrivenErrors.modelParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.ngModelWithFormGroup);
	    };
	    TemplateDrivenErrors.formGroupNameException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    TemplateDrivenErrors.missingNameException = function () {
	        throw new exceptions_1.BaseException("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	    };
	    TemplateDrivenErrors.modelGroupParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    return TemplateDrivenErrors;
	}());
	exports.TemplateDrivenErrors = TemplateDrivenErrors;
	//# sourceMappingURL=template_driven_errors.js.map

/***/ },

/***/ 367:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	exports.FormErrorExamples = {
	    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	};
	//# sourceMappingURL=error_examples.js.map

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(353);
	var collection_1 = __webpack_require__(350);
	var validators_1 = __webpack_require__(356);
	var control_value_accessor_1 = __webpack_require__(342);
	var ng_control_1 = __webpack_require__(346);
	var shared_1 = __webpack_require__(355);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlDirective; })
	};
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            shared_1.setUpControl(this.form, this);
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.form.setValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return collection_1.StringMapWrapper.contains(changes, 'form');
	    };
	    /** @nocollapse */
	    FormControlDirective.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControl]', providers: [exports.formControlBinding], exportAs: 'ngForm' },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formControl',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlDirective;
	}(ng_control_1.NgControl));
	exports.FormControlDirective = FormControlDirective;
	//# sourceMappingURL=form_control_directive.js.map

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(353);
	var validators_1 = __webpack_require__(356);
	var abstract_form_group_directive_1 = __webpack_require__(364);
	var control_container_1 = __webpack_require__(362);
	var control_value_accessor_1 = __webpack_require__(342);
	var ng_control_1 = __webpack_require__(346);
	var reactive_errors_1 = __webpack_require__(370);
	var shared_1 = __webpack_require__(355);
	var form_group_directive_1 = __webpack_require__(371);
	var form_group_name_1 = __webpack_require__(372);
	exports.controlNameBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlName; })
	};
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._added = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            this._checkParentType();
	            this.formDirective.addControl(this);
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    FormControlName.prototype.ngOnDestroy = function () { this.formDirective.removeControl(this); };
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        get: function () { return this.formDirective.getControl(this); },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlName.prototype._checkParentType = function () {
	        if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            reactive_errors_1.ReactiveErrors.ngModelGroupException();
	        }
	        else if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            !(this._parent instanceof form_group_directive_1.FormGroupDirective) &&
	            !(this._parent instanceof form_group_name_1.FormArrayName)) {
	            reactive_errors_1.ReactiveErrors.controlParentException();
	        }
	    };
	    /** @nocollapse */
	    FormControlName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControlName]', providers: [exports.controlNameBinding] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formControlName',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlName;
	}(ng_control_1.NgControl));
	exports.FormControlName = FormControlName;
	//# sourceMappingURL=form_control_name.js.map

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(347);
	var error_examples_1 = __webpack_require__(367);
	var ReactiveErrors = (function () {
	    function ReactiveErrors() {
	    }
	    ReactiveErrors.controlParentException = function () {
	        throw new exceptions_1.BaseException("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.ngModelGroupException = function () {
	        throw new exceptions_1.BaseException("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + error_examples_1.FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    ReactiveErrors.missingFormException = function () {
	        throw new exceptions_1.BaseException("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.groupParentException = function () {
	        throw new exceptions_1.BaseException("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formGroupName);
	    };
	    ReactiveErrors.arrayParentException = function () {
	        throw new exceptions_1.BaseException("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + error_examples_1.FormErrorExamples.formArrayName);
	    };
	    return ReactiveErrors;
	}());
	exports.ReactiveErrors = ReactiveErrors;
	//# sourceMappingURL=reactive_errors.js.map

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(353);
	var collection_1 = __webpack_require__(350);
	var lang_1 = __webpack_require__(344);
	var validators_1 = __webpack_require__(356);
	var control_container_1 = __webpack_require__(362);
	var reactive_errors_1 = __webpack_require__(370);
	var shared_1 = __webpack_require__(355);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupDirective; })
	};
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    function FormGroupDirective(_validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._submitted = false;
	        this.directives = [];
	        this.form = null;
	        this.ngSubmit = new async_1.EventEmitter();
	    }
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (collection_1.StringMapWrapper.contains(changes, 'form')) {
	            var sync = shared_1.composeValidators(this._validators);
	            this.form.validator = validators_1.Validators.compose([this.form.validator, sync]);
	            var async = shared_1.composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = validators_1.Validators.composeAsync([this.form.asyncValidator, async]);
	            this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        this._updateDomValue();
	    };
	    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    FormGroupDirective.prototype.addControl = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	    };
	    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.removeControl = function (dir) { collection_1.ListWrapper.remove(this.directives, dir); };
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var ctrl = this.form.get(dir.path);
	        ctrl.setValue(value);
	    };
	    FormGroupDirective.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    FormGroupDirective.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var ctrl = _this.form.get(dir.path);
	            dir.valueAccessor.writeValue(ctrl.value);
	        });
	    };
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (lang_1.isBlank(this.form)) {
	            reactive_errors_1.ReactiveErrors.missingFormException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupDirective.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formGroup]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formGroup',] },],
	        'ngSubmit': [{ type: core_1.Output },],
	    };
	    return FormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.FormGroupDirective = FormGroupDirective;
	//# sourceMappingURL=form_group_directive.js.map

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var validators_1 = __webpack_require__(356);
	var abstract_form_group_directive_1 = __webpack_require__(364);
	var control_container_1 = __webpack_require__(362);
	var reactive_errors_1 = __webpack_require__(370);
	var shared_1 = __webpack_require__(355);
	var form_group_directive_1 = __webpack_require__(371);
	exports.formGroupNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupName; })
	};
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    function FormGroupName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    FormGroupName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.groupParentException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formGroupName]', providers: [exports.formGroupNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formGroupName',] },],
	    };
	    return FormGroupName;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.FormGroupName = FormGroupName;
	exports.formArrayNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormArrayName; })
	};
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    function FormArrayName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    FormArrayName.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormArray(this);
	    };
	    FormArrayName.prototype.ngOnDestroy = function () { this.formDirective.removeFormArray(this); };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        get: function () { return this.formDirective.getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    FormArrayName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.arrayParentException();
	        }
	    };
	    /** @nocollapse */
	    FormArrayName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formArrayName]', providers: [exports.formArrayNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formArrayName',] },],
	    };
	    return FormArrayName;
	}(control_container_1.ControlContainer));
	exports.FormArrayName = FormArrayName;
	function _hasInvalidParent(parent) {
	    return !(parent instanceof FormGroupName) && !(parent instanceof form_group_directive_1.FormGroupDirective) &&
	        !(parent instanceof FormArrayName);
	}
	//# sourceMappingURL=form_group_name.js.map

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(344);
	var validators_1 = __webpack_require__(356);
	exports.REQUIRED = validators_1.Validators.required;
	exports.REQUIRED_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useValue: exports.REQUIRED,
	    multi: true
	};
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    /** @nocollapse */
	    RequiredValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                    providers: [exports.REQUIRED_VALIDATOR]
	                },] },
	    ];
	    return RequiredValidator;
	}());
	exports.RequiredValidator = RequiredValidator;
	/**
	 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	exports.MIN_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	var MinLengthValidator = (function () {
	    function MinLengthValidator(minLength) {
	        this._validator = validators_1.Validators.minLength(lang_1.NumberWrapper.parseInt(minLength, 10));
	    }
	    MinLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MinLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                    providers: [exports.MIN_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MinLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['minlength',] },] },
	    ];
	    return MinLengthValidator;
	}());
	exports.MinLengthValidator = MinLengthValidator;
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	exports.MAX_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator(maxLength) {
	        this._validator = validators_1.Validators.maxLength(lang_1.NumberWrapper.parseInt(maxLength, 10));
	    }
	    MaxLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MaxLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                    providers: [exports.MAX_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MaxLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['maxlength',] },] },
	    ];
	    return MaxLengthValidator;
	}());
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.PATTERN_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	var PatternValidator = (function () {
	    function PatternValidator(pattern) {
	        this._validator = validators_1.Validators.pattern(pattern);
	    }
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    PatternValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                    providers: [exports.PATTERN_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    PatternValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['pattern',] },] },
	    ];
	    return PatternValidator;
	}());
	exports.PatternValidator = PatternValidator;
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(350);
	var lang_1 = __webpack_require__(344);
	var model_1 = __webpack_require__(354);
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `optionals` and `validator`.
	     *
	     * See the {@link FormGroup} constructor for more details.
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var controls = this._reduceControls(controlsConfig);
	        var optionals = (lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'optionals') : null);
	        var validator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'validator') : null;
	        var asyncValidator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'asyncValidator') : null;
	        return new model_1.FormGroup(controls, optionals, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {@link FormControl} with the given `value`,`validator`, and `asyncValidator`.
	     */
	    FormBuilder.prototype.control = function (value, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        return new model_1.FormControl(value, validator, asyncValidator);
	    };
	    /**
	     * Construct an array of {@link FormControl}s from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new model_1.FormArray(controls, validator, asyncValidator);
	    };
	    /** @internal */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var controls = {};
	        collection_1.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	            controls[controlName] = _this._createControl(controlConfig);
	        });
	        return controls;
	    };
	    /** @internal */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof model_1.FormControl || controlConfig instanceof model_1.FormGroup ||
	            controlConfig instanceof model_1.FormArray) {
	            return controlConfig;
	        }
	        else if (lang_1.isArray(controlConfig)) {
	            var value = controlConfig[0];
	            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    /** @nocollapse */
	    FormBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return FormBuilder;
	}());
	exports.FormBuilder = FormBuilder;
	//# sourceMappingURL=form_builder.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var directives_1 = __webpack_require__(340);
	var radio_control_value_accessor_1 = __webpack_require__(359);
	var form_builder_1 = __webpack_require__(374);
	/**
	 * Shorthand set of providers used for building Angular forms.
	 * @experimental
	 */
	exports.FORM_PROVIDERS = [radio_control_value_accessor_1.RadioControlRegistry];
	/**
	 * Shorthand set of providers used for building reactive Angular forms.
	 * @experimental
	 */
	exports.REACTIVE_FORM_PROVIDERS = [form_builder_1.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry];
	var FormsModule = (function () {
	    function FormsModule() {
	    }
	    /** @nocollapse */
	    FormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: directives_1.TEMPLATE_DRIVEN_DIRECTIVES,
	                    providers: [exports.FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.TEMPLATE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return FormsModule;
	}());
	exports.FormsModule = FormsModule;
	var ReactiveFormsModule = (function () {
	    function ReactiveFormsModule() {
	    }
	    /** @nocollapse */
	    ReactiveFormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: [directives_1.REACTIVE_DRIVEN_DIRECTIVES],
	                    providers: [exports.REACTIVE_FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.REACTIVE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return ReactiveFormsModule;
	}());
	exports.ReactiveFormsModule = ReactiveFormsModule;
	/**
	 * @deprecated
	 */
	function disableDeprecatedForms() {
	    return [];
	}
	exports.disableDeprecatedForms = disableDeprecatedForms;
	/**
	 * @deprecated
	 */
	function provideForms() {
	    return [
	        { provide: core_1.PLATFORM_DIRECTIVES, useValue: directives_1.FORM_DIRECTIVES, multi: true }, exports.REACTIVE_FORM_PROVIDERS
	    ];
	}
	exports.provideForms = provideForms;
	//# sourceMappingURL=form_providers.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	__webpack_require__(377);
	var sidebar_component_1 = __webpack_require__(381);
	var webgl_view_component_1 = __webpack_require__(664);
	var resize_service_1 = __webpack_require__(673);
	var AppComponent = (function () {
	    function AppComponent(resizeService) {
	        this.resizeService = resizeService;
	        this.sidebarStyle = {};
	        this.contentStyle = {};
	    }
	    AppComponent.prototype.onSidebarResizeEnd = function (event) {
	        console.log("sidebar resize end rectangle", event.rectangle);
	        // the +17 is to account for the scrollbar
	        this.resizeService.sidebarResizeStream.next(event.rectangle.width + 17);
	        this.sidebarStyle = {
	            width: event.rectangle.width + "px",
	            position: 'fixed',
	        };
	        this.contentStyle = {
	            left: event.rectangle.width + "px"
	        };
	    };
	    AppComponent.prototype.validateSidebarResize = function (event) {
	        var MIN_DIMENSIONS_PX = 50;
	        var MAX_DIMENSIONS_PX = 500;
	        if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.width > MAX_DIMENSIONS_PX) {
	            return false;
	        }
	        return true;
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            directives: [sidebar_component_1.SidebarComponent, webgl_view_component_1.WebglViewComponent],
	            template: __webpack_require__(675),
	            styles: [__webpack_require__(676)]
	        }), 
	        __metadata('design:paramtypes', [resize_service_1.ResizeService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 377:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var _3d_options_component_1 = __webpack_require__(382);
	var noise_tree_component_1 = __webpack_require__(391);
	var noise_options_component_1 = __webpack_require__(656);
	var stringified_noise_component_1 = __webpack_require__(659);
	var noise_model_1 = __webpack_require__(392);
	var SidebarComponent = (function () {
	    function SidebarComponent() {
	        this.toggled = { displayOptions: false, noiseTree: false, noiseOptions: false, stringifiedNoise: false };
	        this.Math = Math;
	        this.baseNoise = new noise_model_1.NoiseModel();
	    }
	    SidebarComponent.prototype.toggleSection = function (section) {
	        console.log("toggling section", section);
	        this.toggled[section] = !this.toggled[section];
	    };
	    SidebarComponent = __decorate([
	        core_1.Component({
	            selector: 'sidebar',
	            directives: [_3d_options_component_1.ThreeDOptionsComponent, noise_tree_component_1.NoiseTreeComponent, noise_options_component_1.NoiseOptionsComponent, stringified_noise_component_1.StringifiedNoiseComponent],
	            template: __webpack_require__(662),
	            styles: [__webpack_require__(663)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SidebarComponent);
	    return SidebarComponent;
	}());
	exports.SidebarComponent = SidebarComponent;


/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var slider_component_1 = __webpack_require__(383);
	var three_d_options_model_1 = __webpack_require__(386);
	var view_options_service_1 = __webpack_require__(387);
	var ThreeDOptionsComponent = (function () {
	    function ThreeDOptionsComponent(viewOptionService) {
	        this.viewOptionService = viewOptionService;
	        this.options = new three_d_options_model_1.ThreeDOptionsModel();
	    }
	    ThreeDOptionsComponent.prototype.updateView = function () {
	        this.viewOptionService.viewOptionStream.next(this.options);
	        console.log("updating view");
	    };
	    ThreeDOptionsComponent = __decorate([
	        core_1.Component({
	            selector: "three-d-options",
	            directives: [slider_component_1.SliderComponent],
	            template: __webpack_require__(389),
	            styles: [__webpack_require__(390)],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [view_options_service_1.ViewOptionService])
	    ], ThreeDOptionsComponent);
	    return ThreeDOptionsComponent;
	}());
	exports.ThreeDOptionsComponent = ThreeDOptionsComponent;


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var common_1 = __webpack_require__(205);
	var forms_1 = __webpack_require__(338);
	var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
	    useExisting: core_1.forwardRef(function () { return SliderComponent; }),
	    multi: true
	});
	var SliderComponent = (function () {
	    function SliderComponent(ngControl) {
	        this._value = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        if (ngControl) {
	            ngControl.valueAccessor = this;
	        }
	    }
	    SliderComponent.prototype.getValue = function () {
	        return this._value;
	    };
	    Object.defineProperty(SliderComponent.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (v) {
	            if (v !== this._value) {
	                this._value = parseFloat(v);
	                this.onChange(parseFloat(v));
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SliderComponent.prototype.writeValue = function (value) {
	        this._value = value;
	        this.onChange(value);
	    };
	    SliderComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    SliderComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    SliderComponent = __decorate([
	        core_1.Component({
	            selector: 'slider',
	            inputs: ['min', 'max', 'label', 'sliderName',
	                'description', 'step', 'startingValue'],
	            outputs: ['value'],
	            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
	            directives: [common_1.CORE_DIRECTIVES],
	            template: __webpack_require__(384),
	            styles: [__webpack_require__(385)]
	        }),
	        __param(0, core_1.Optional()), 
	        __metadata('design:paramtypes', [forms_1.NgControl])
	    ], SliderComponent);
	    return SliderComponent;
	}());
	exports.SliderComponent = SliderComponent;


/***/ },

/***/ 384:
/***/ function(module, exports) {

	module.exports = "<div class=\"header-row\">\r\n    <label [attr.title]=\"description\" [attr.for]=\"sliderName\">{{label}}</label>\r\n    <input type=\"number\" [(ngModel)]=\"value\" placeholder=\"{{startingValue}}\">\r\n</div>\r\n<div class=\"slider-row\">\r\n    <div class=\"slider\">\r\n        <span>{{min}}</span>\r\n        <input [(ngModel)]=\"value\" min=\"{{min}}\" max=\"{{max}}\" step={{step}} value=\"{{startingValue}}\" name=\"{{sliderName}}\" type=\"range\"/>\r\n        <span>{{max}}</span>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 385:
/***/ function(module, exports) {

	module.exports = ":host {\r\n    margin: 2px;\r\n    display: block;\r\n}\r\n\r\n.header-row {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.header-row label {\r\n    width: 60%;\r\n    cursor: help;\r\n    display: inline-block;\r\n}\r\n\r\n.header-row input {\r\n    float: right;\r\n    z-index: -1;\r\n    width: 30%;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.slider {\r\n    padding: 5px 0 5px 0;\r\n    display: flex;\r\n}\r\n\r\nspan {\r\n    padding: 0 5px 0 5px;\r\n}\r\n\r\ninput[type=\"range\"] {\r\n    width: 0px;\r\n    margin: auto;\r\n    flex: auto; \r\n}\r\n\r\nlabel {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n    font-size: 12px;\r\n    color: gray;\r\n}\r\n\r\ninput[type=\"number\"] {\r\n    text-align: center;\r\n}"

/***/ },

/***/ 386:
/***/ function(module, exports) {

	"use strict";
	var ThreeDOptionsModel = (function () {
	    function ThreeDOptionsModel(segmentsPerChunk, chunkSize, renderDistance) {
	        this.segmentsPerChunk = segmentsPerChunk;
	        this.chunkSize = chunkSize;
	        this.renderDistance = renderDistance;
	        this.segmentsPerChunk = this.segmentsPerChunk || 30;
	        this.chunkSize = this.chunkSize || 5000;
	        this.renderDistance = this.renderDistance || 25000;
	    }
	    return ThreeDOptionsModel;
	}());
	exports.ThreeDOptionsModel = ThreeDOptionsModel;


/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var BehaviorSubject_1 = __webpack_require__(388);
	var three_d_options_model_1 = __webpack_require__(386);
	/*
	    Here's how this service works:
	        - The options components call viewOptionStream.next with a new ThreeDOptionsModel every time the user presses the Update View button
	        - ChunkManager subscribes to viewOptionStream.next, setting all of the values and reloading all the chunks when a new value is pushed
	*/
	var ViewOptionService = (function () {
	    function ViewOptionService() {
	        this.viewOptionStream = new BehaviorSubject_1.BehaviorSubject(new three_d_options_model_1.ThreeDOptionsModel());
	    }
	    ViewOptionService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ViewOptionService);
	    return ViewOptionService;
	}());
	exports.ViewOptionService = ViewOptionService;


/***/ },

/***/ 389:
/***/ function(module, exports) {

	module.exports = "<div class=\"option\">\r\n    <slider [min]=\"1000\" [max]=\"100000\" [label]=\"'Render Distance'\"\r\n        [(ngModel)]=\"options.renderDistance\"\r\n        [description]=\"'Chunks within this radius from the OrbitControls target are loaded'\"\r\n        [sliderName]=\"renderDistance\" [startingValue]=\"25000\" [step]=\"1000\"></slider>\r\n</div>\r\n<div class=\"option\">\r\n    <slider [min]=\"500\" [max]=\"10000\" [label]=\"'Chunk Size'\"\r\n        [(ngModel)]=\"options.chunkSize\"\r\n        [description]=\"'The size of each chunk, in Three.JS units'\"\r\n        [sliderName]=\"chunkSize\" [startingValue]=\"5000\" [step]=\"10\"></slider>\r\n</div>\r\n<div class=\"option\">\r\n    <slider [min]=\"1\" [max]=\"200\" [label]=\"'Chunk Segments'\"\r\n        [(ngModel)]=\"options.segmentsPerChunk\"\r\n        [description]=\"'Number of segments in each edge of the chunk mesh. A higher value means that the noise will be more accurately represented.'\"\r\n        [sliderName]=\"chunkSegments\" [startingValue]=\"30\" [step]=\"1\"></slider>\r\n</div>\r\n\r\n<button (click)=\"updateView()\" class=\"pure-button\">Update View</button>\r\n";

/***/ },

/***/ 390:
/***/ function(module, exports) {

	module.exports = "h2 {\r\n    margin-top: 0;\r\n}\r\n\r\n.option .slider-container {\r\n    display: flex;\r\n}\r\n\r\n.option input[type=\"range\"] {\r\n    width: 100%;\r\n}"

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var noise_model_1 = __webpack_require__(392);
	var noise_options_service_1 = __webpack_require__(393);
	var angular2_contextmenu_1 = __webpack_require__(394);
	var NoiseTreeComponent = (function () {
	    function NoiseTreeComponent(noiseOptionService, contextMenuService) {
	        this.noiseOptionService = noiseOptionService;
	        this.contextMenuService = contextMenuService;
	        this.showChildren = true;
	        this.selectedNoise = false;
	    }
	    NoiseTreeComponent.prototype.toggleShowChildren = function () {
	        console.log('toggling show children');
	        this.showChildren = !this.showChildren;
	    };
	    NoiseTreeComponent.prototype.addChildNoise = function () {
	        var _this = this;
	        console.log("calling updateRootNoise");
	        setInterval(function () { _this.showChildren = true; }, 0);
	        this.noiseModel.children.push(new noise_model_1.NoiseModel());
	        this.noiseOptionService.updateRootNoise(this.noiseModel);
	    };
	    NoiseTreeComponent.prototype.selectNoise = function () {
	        console.log("selecting noise");
	        this.selectedNoise = true;
	        this.noiseOptionService.selectNoise(this.noiseModel);
	    };
	    NoiseTreeComponent.prototype.deleteNoise = function () {
	        this.noiseOptionService.deleteNoise(this.noiseModel.uid);
	        this.noiseOptionService.selectRootNoise();
	    };
	    NoiseTreeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.noiseOptionService.newNoiseStream.subscribe(function (noise) {
	            if (_this.root) {
	                console.log("setting root noise in newNoiseStr");
	                _this.noiseModel = noise;
	            }
	        });
	        this.noiseOptionService.getSelectedNoiseStream().subscribe(function (noise) {
	            if (noise.uid != _this.noiseModel.uid) {
	                _this.selectedNoise = false;
	            }
	        });
	        this.noiseOptionService.getDeletedNoiseStream().subscribe(function (deletedNoiseId) {
	            for (var i = 0; i <= _this.noiseModel.children.length; i++) {
	                if (deletedNoiseId == _this.noiseModel.children[i].uid) {
	                    _this.noiseModel.children.splice(i, 1);
	                    return;
	                }
	            }
	        });
	        this.contextMenuActions = new Array();
	        this.contextMenuActions.push({
	            html: function () { return "Select this noise"; },
	            click: function (item) { return _this.selectNoise(); }
	        });
	        this.contextMenuActions.push({
	            html: function () { return "Add child noise"; },
	            click: function (item) { return _this.addChildNoise(); }
	        });
	        if (!this.root) {
	            this.contextMenuActions.push({
	                html: function () { return "Delete this noise"; },
	                click: function (item) { return _this.deleteNoise(); }
	            });
	        }
	        if (this.root) {
	            this.noiseOptionService.updateRootNoise(this.noiseModel);
	            this.selectNoise();
	        }
	    };
	    NoiseTreeComponent.prototype.onContextMenu = function ($event, item) {
	        this.contextMenuService.show.next({
	            actions: this.contextMenuActions,
	            event: $event,
	            item: item,
	        });
	        $event.preventDefault();
	    };
	    NoiseTreeComponent = __decorate([
	        core_1.Component({
	            selector: 'noise-tree',
	            inputs: ['root', 'noiseModel', 'xoffset'],
	            host: { 'class': 'noise-tree' },
	            directives: [NoiseTreeComponent, angular2_contextmenu_1.ContextMenuComponent],
	            providers: [angular2_contextmenu_1.ContextMenuService],
	            template: __webpack_require__(653),
	            styles: [__webpack_require__(654), __webpack_require__(655)]
	        }), 
	        __metadata('design:paramtypes', [noise_options_service_1.NoiseOptionService, angular2_contextmenu_1.ContextMenuService])
	    ], NoiseTreeComponent);
	    return NoiseTreeComponent;
	}());
	exports.NoiseTreeComponent = NoiseTreeComponent;


/***/ },

/***/ 392:
/***/ function(module, exports) {

	"use strict";
	var NoiseModel = (function () {
	    function NoiseModel(
	        /* Currently either 'Cellular' or 'Simplex' */
	        type, baseHeight, 
	        /* How many layers of noise their should be */
	        octaves, 
	        /* A multiplier that determines how quickly the amplitudes
	        diminish for each successive octave in a Perlin-noise function. */
	        persistence, 
	        /* A multiplier that determines how quickly the frequency
	        increases for each successive octave in a Perlin-noise function. */
	        lancunarity, 
	        /* Multiplied by coordinates in simplex noise function */
	        frequency, 
	        /* Determines the minimum and maximum value you can get from this noise. */
	        low, high, 
	        /* Only used for child noise functions. Can be 'add', 'subtract', 'multiply', or 'divide'. */
	        operation, children) {
	        this.type = type;
	        this.baseHeight = baseHeight;
	        this.octaves = octaves;
	        this.persistence = persistence;
	        this.lancunarity = lancunarity;
	        this.frequency = frequency;
	        this.low = low;
	        this.high = high;
	        this.operation = operation;
	        this.children = children;
	        this.type = this.type || "simplex";
	        this.baseHeight = this.baseHeight || 100;
	        this.octaves = this.octaves || 1;
	        this.persistence = this.persistence || 0.5;
	        this.lancunarity = this.lancunarity || 2;
	        this.frequency = this.frequency || 1;
	        this.low = this.low || 0;
	        this.high = this.high || 1000;
	        this.operation = this.operation || "add";
	        this.children = this.children || [];
	        this.uid = Math.random();
	    }
	    return NoiseModel;
	}());
	exports.NoiseModel = NoiseModel;


/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var noise_model_1 = __webpack_require__(392);
	var Subject_1 = __webpack_require__(69);
	var BehaviorSubject_1 = __webpack_require__(388);
	var NoiseOptionService = (function () {
	    function NoiseOptionService() {
	        this.rootNoise = new noise_model_1.NoiseModel();
	        this.newNoiseStream = new Subject_1.Subject();
	        this.selectedNoiseStream = new BehaviorSubject_1.BehaviorSubject(this.rootNoise);
	        this.rootNoiseStream = new BehaviorSubject_1.BehaviorSubject(this.rootNoise);
	        this.deletedNoiseStream = new Subject_1.Subject();
	    }
	    NoiseOptionService.prototype.selectNoise = function (noise) {
	        console.log("selectnoise", noise);
	        this.selectedNoiseStream.next(noise);
	    };
	    NoiseOptionService.prototype.deleteNoise = function (noiseId) {
	        this.deletedNoiseStream.next(noiseId);
	    };
	    NoiseOptionService.prototype.loadNewRootNoise = function (rootNoise) {
	        this.newNoiseStream.next(rootNoise);
	        this.updateRootNoise(rootNoise);
	    };
	    NoiseOptionService.prototype.updateRootNoise = function (rootNoise) {
	        console.log("updateRootNoise called");
	        this.rootNoise = rootNoise || this.rootNoise;
	        this.rootNoiseStream.next(this.rootNoise);
	        this.selectRootNoise();
	    };
	    NoiseOptionService.prototype.selectRootNoise = function () {
	        this.selectedNoiseStream.next(this.rootNoise);
	    };
	    NoiseOptionService.prototype.getDeletedNoiseStream = function () {
	        return this.deletedNoiseStream;
	    };
	    NoiseOptionService.prototype.getSelectedNoiseStream = function () {
	        return this.selectedNoiseStream;
	    };
	    NoiseOptionService.prototype.getRootNoiseStream = function () {
	        return this.rootNoiseStream;
	    };
	    NoiseOptionService.prototype.getRootNoise = function () {
	        return this.rootNoise;
	    };
	    NoiseOptionService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NoiseOptionService);
	    return NoiseOptionService;
	}());
	exports.NoiseOptionService = NoiseOptionService;


/***/ },

/***/ 653:
/***/ function(module, exports) {

	module.exports = "<div (contextmenu)=\"onContextMenu($event)\" class=\"tree-node\">\r\n    <button (click)=\"toggleShowChildren()\" [class.selected]=\"selectedNoise\" class=\"noise-header\">\r\n        <div [style.margin-left]=\"xoffset+'px'\">\r\n            <div class=\"toggleContainer\" >\r\n                <i *ngIf=\"!showChildren\" class=\"fa fa-caret-right\"></i>\r\n                <i *ngIf=\"showChildren\" class=\"fa fa-caret-down\"></i>\r\n            </div>\r\n            <h3>{{ noiseModel.type }}</h3>\r\n        </div>\r\n        <context-menu></context-menu>\r\n    </button>\r\n    <ul [hidden]=\"!showChildren\">\r\n        <li *ngFor=\"let child of noiseModel.children\">\r\n            <noise-tree [xoffset]=\"xoffset + 10\" [noiseModel]=\"child\"></noise-tree>\r\n        </li>\r\n    </ul>\r\n</div>\r\n";

/***/ },

/***/ 654:
/***/ function(module, exports) {

	module.exports = ":host {\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    cursor: context-menu;\r\n}\r\n\r\n.tree-node {\r\n}\r\n\r\nh3, h4 {\r\n    margin: 0;\r\n    font-weight: normal;\r\n}\r\n\r\n.noise-header {\r\n    width: 100%;\r\n    font-size: 14px;\r\n    height: 22px;\r\n    border: none;\r\n    text-align: left;\r\n    background-color: #F3F3F3;\r\n}\r\n\r\n.noise-header.selected {\r\n    color: white;\r\n    background-color: #3399FF;\r\n}\r\n\r\n.noise-header * {\r\n    display: inline-block;\r\n}\r\n\r\n.noise-header.selected:hover {\r\n    background-color: #3399FF;\r\n}\r\n\r\n.noise-header:hover {\r\n    background-color: #F0F0F0;\r\n}\r\n\r\nul {\r\n    margin: 0 0;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n    background-color: #F3F3F3; \r\n}\r\n\r\nli:hover {\r\n    background-color: #dedede;    \r\n}\r\n\r\n.toggleContainer {\r\n    width: 17px;\r\n    height: 17px;\r\n}"

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var noise_options_service_1 = __webpack_require__(393);
	var slider_component_1 = __webpack_require__(383);
	var NoiseOptionsComponent = (function () {
	    function NoiseOptionsComponent(noiseOptionService) {
	        var _this = this;
	        this.noiseOptionService = noiseOptionService;
	        this.panelStyle = {};
	        console.log("noise-options component loaded");
	        this.noiseOptionService.getSelectedNoiseStream().subscribe(function (noise) {
	            _this.selectedNoise = noise;
	        });
	    }
	    NoiseOptionsComponent.prototype.updateModel = function () {
	        this.noiseOptionService.updateRootNoise();
	    };
	    NoiseOptionsComponent = __decorate([
	        core_1.Component({
	            selector: 'noise-options',
	            directives: [slider_component_1.SliderComponent],
	            styles: [__webpack_require__(657)],
	            template: __webpack_require__(658)
	        }), 
	        __metadata('design:paramtypes', [noise_options_service_1.NoiseOptionService])
	    ], NoiseOptionsComponent);
	    return NoiseOptionsComponent;
	}());
	exports.NoiseOptionsComponent = NoiseOptionsComponent;


/***/ },

/***/ 657:
/***/ function(module, exports) {

	module.exports = ":host {\r\n    background-color: white;\r\n    z-index: 1;\r\n}\r\n\r\nlabel {\r\n    padding-right: 5px;    \r\n    font-weight: bold;\r\n}\r\n\r\ninput, select {\r\n    float: right;\r\n}\r\n\r\n.option {\r\n    padding: 3px;\r\n    border-top: 1px solid #ddd;\r\n}"

/***/ },

/***/ 658:
/***/ function(module, exports) {

	module.exports = "<!-- Configurable Values\r\n        /* Currently either 'Cellular' or 'Simplex' */\r\n        public type?: string,\r\n        public baseHeight?: number,\r\n        /* How many layers of noise there should be */\r\n        public octaves?: number,\r\n        /* A multiplier that determines how quickly the amplitudes \r\n        diminish for each successive octave in a Perlin-noise function. */\r\n        public persistence?: number,\r\n        /* A multiplier that determines how quickly the frequency \r\n        increases for each successive octave in a Perlin-noise function. */\r\n        public lancunarity?: number,\r\n        public frequency?: number,\r\n        /* Determines the minimum and maximum value you can get from this noise. */\r\n        public low?: number,\r\n        public high?: number,\r\n        /* Only used for child noise functions. Can be 'add', 'subtract', 'multiply', or 'divide'. */\r\n        public operation?: string,\r\n        public children?: NoiseModel[]\r\n-->\r\n\r\n<div class=\"noise-form-container\">\r\n    <div *ngIf=\"selectedNoise != null\" class=\"flex-container\">\r\n        <div class=\"option\">\r\n            <label>Type</label>\r\n            <select [(ngModel)]=\"selectedNoise.type\">\r\n                <option [value]=\"'truecellular'\">True Cellular</option>\r\n                <option [value]=\"'fastcellular'\" title=\"Simplex-based cellular http://goo.gl/hUCJnb\">Fast Cellular</option>\r\n                <option [value]=\"'simplex'\">Simplex</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"option\">\r\n            <label title=\"Determines what to do with the result generated by the children.\" for=\"operation\">Operation</label>\r\n            <select name=\"operation\" [(ngModel)]=\"selectedNoise.operation\">\r\n                <option [value]=\"'add'\">Add</option>\r\n                <option [value]=\"'subtract'\">Subtract</option>\r\n                <option [value]=\"'multiply'\">Multiply</option>\r\n                <option [value]=\"'divide'\">Divide</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"option\">\r\n            <slider [min]=\"-5000\" [max]=\"0\" [label]=\"'Low'\"\r\n                [(ngModel)]=\"selectedNoise.low\"\r\n                [description]=\"'Minimum value outputted by this noise function'\"\r\n                [sliderName]=\"low\" [startingValue]=\"0\" [step]=\"1\"></slider>\r\n        </div>\r\n        <div class=\"option\">\r\n            <slider [min]=\"0\" [max]=\"5000\" [label]=\"'High'\"\r\n                [(ngModel)]=\"selectedNoise.high\"\r\n                [description]=\"'Maximum value outputted by this noise function'\"\r\n                [sliderName]=\"high\" [startingValue]=\"0\" [step]=\"1\"></slider>\r\n        </div>\r\n\r\n        <div [hidden]=\"selectedNoise.type != 'simplex'\" class=\"option\">\r\n            <slider [min]=\"1\" [max]=\"16\" [label]=\"'Octaves'\"\r\n                [(ngModel)]=\"selectedNoise.octaves\"\r\n                [description]=\"'How many layers of noise there should be '\"\r\n                [sliderName]=\"octavesSlider\" [startingValue]=\"1\" [step]=\"1\"></slider>\r\n        </div>\r\n        <div class=\"option\">\r\n            <slider [min]=\"0\" [max]=\"8\" [label]=\"'Frequency'\"\r\n                [(ngModel)]=\"selectedNoise.frequency\"\r\n                [description]=\"'Multiplies the parameters of the noise function'\"\r\n                [sliderName]=\"frequencySlider\" [startingValue]=\"1\" [step]=\"0.05\"></slider>\r\n        </div>\r\n        <div [hidden]=\"selectedNoise.type != 'simplex'\" class=\"option\">\r\n            <slider [min]=\"0\" [max]=\"1\" [label]=\"'Persistence'\"\r\n                [(ngModel)]=\"selectedNoise.persistence\" \r\n                [description]=\"'A multiplier that determines how quickly the amplitudes \r\n        diminish for each successive octave'\"\r\n                [sliderName]=\"persistenceSlider\" [startingValue]=\"0\" [step]=\"0.05\"></slider>\r\n        </div>\r\n        <div [hidden]=\"selectedNoise.type != 'simplex'\" class=\"option\">\r\n            <slider [min]=\"1\" [max]=\"16\" [label]=\"'Lancunarity'\"\r\n                [(ngModel)]=\"selectedNoise.lancunarity\" \r\n                [description]=\"'A multiplier that determines how quickly the frequency \r\n    increases for each successive octave'\"\r\n                [sliderName]=\"lancunaritySlider\" [startingValue]=\"2\" [step]=\"0.5\"></slider>\r\n        </div>\r\n        <div class=\"option\">\r\n            <button class=\"pure-button\" (click)=\"updateModel()\">Update</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <label for=\"baseHeightSlider\">Lancunarity</label>\r\n            <p>A multiplier that determines how quickly the frequency \r\n    increases for each successive octave</p>\r\n            <div class=\"slider\">\r\n                <span>1</span>\r\n                <input min=\"1\" max=\"16\" value=\"2\" name=\"baseHeightSlider\" type=\"range\"/>\r\n                <span>16</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n-->";

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var noise_options_service_1 = __webpack_require__(393);
	var StringifiedNoiseComponent = (function () {
	    function StringifiedNoiseComponent(noiseOptionService) {
	        this.noiseOptionService = noiseOptionService;
	    }
	    StringifiedNoiseComponent.prototype.ngOnInit = function () {
	        var element = document.getElementById("stringifiedNoise");
	        this.noiseOptionService.getRootNoiseStream().subscribe(function (noiseModel) {
	            element.value = JSON.stringify(noiseModel);
	        });
	    };
	    StringifiedNoiseComponent.prototype.copyToClipboard = function () {
	        var element = document.getElementById("stringifiedNoise");
	        element.select();
	        try {
	            document.execCommand('copy');
	        }
	        catch (err) {
	            window.prompt("Copy to clipboard: Ctrl+C, Enter", this.stringifiedNoise);
	        }
	    };
	    StringifiedNoiseComponent.prototype.loadNoise = function () {
	        var element = document.getElementById("stringifiedNoise");
	        console.log("text:", element.value);
	        var noiseObj = JSON.parse(element.value);
	        this.noiseOptionService.loadNewRootNoise(noiseObj);
	    };
	    StringifiedNoiseComponent = __decorate([
	        core_1.Component({
	            selector: 'stringified-noise',
	            template: __webpack_require__(660),
	            styles: [__webpack_require__(661)]
	        }), 
	        __metadata('design:paramtypes', [noise_options_service_1.NoiseOptionService])
	    ], StringifiedNoiseComponent);
	    return StringifiedNoiseComponent;
	}());
	exports.StringifiedNoiseComponent = StringifiedNoiseComponent;


/***/ },

/***/ 660:
/***/ function(module, exports) {

	module.exports = "<textarea id=\"stringifiedNoise\" class=\"stringifiedNoise\"></textarea>\r\n<div style=\"display: inline-block\">\r\n\t<button class=\"pure-button\" (click)=\"copyToClipboard()\">Copy to Clipboard</button>\r\n\t<button class=\"pure-button\" title=\"Paste a stringified noise object into the textbox above, and click this button to load it\" (click)=\"loadNoise()\">Load</button>\r\n</div>";

/***/ },

/***/ 661:
/***/ function(module, exports) {

	module.exports = ".stringified-noise {\r\n\tmargin: 5px 5px 5px 5px;\r\n\tbackground-color: white;\r\n\twidth: 100%;\r\n\theight: 400px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\ntextarea {\r\n\tdisplay: block;\r\n\tmargin: 5px auto;\r\n\tmin-height: 100px;\r\n\twidth: 90%;\r\n\tmax-width: 90%;\r\n}"

/***/ },

/***/ 662:
/***/ function(module, exports) {

	module.exports = "<h1> Noise Visualizer </h1>\r\n<div class=\"display-options\">\r\n\t<div class=\"section-header\" (click)=\"toggleSection('displayOptions')\">\r\n\t\t<div class=\"toggle-container\">\r\n\t\t\t<i *ngIf=\"!toggled.displayOptions\" class=\"fa fa-caret-right\"></i>\r\n\t\t\t<i *ngIf=\"toggled.displayOptions\" class=\"fa fa-caret-down\"></i>\r\n\t\t</div>\r\n\t\t<h2 >Display Options</h2>\r\n\t</div>\r\n\t<three-d-options [hidden]=\"!toggled.displayOptions\"> </three-d-options>\r\n</div>\r\n<div class=\"noises\">\r\n\t<div class=\"section-header\" (click)=\"toggleSection('noiseTree')\">\r\n\t\t<div class=\"toggle-container\">\r\n\t\t\t<i *ngIf=\"!toggled.noiseTree\" class=\"fa fa-caret-right\"></i>\r\n\t\t\t<i *ngIf=\"toggled.noiseTree\" class=\"fa fa-caret-down\"></i>\r\n\t\t</div>\r\n\t\t<h2 [style.cursor]=\"'help'\" title=\"Right click items on the noise tree to see a context menu that allows you to select, add, or delete noise.\">Noise Tree</h2>\r\n\t</div>\r\n\t<noise-tree [hidden]=\"!toggled.noiseTree\" [xoffset]=\"0\" [root]=\"true\" [noiseModel]=\"baseNoise\"></noise-tree>\r\n</div>\r\n<div class=\"noise-options\">\r\n\t<div class=\"section-header\" (click)=\"toggleSection('noiseOptions')\">\r\n\t\t<div class=\"toggle-container\">\r\n\t\t\t<i *ngIf=\"!toggled.noiseOptions\" class=\"fa fa-caret-right\"></i>\r\n\t\t\t<i *ngIf=\"toggled.noiseOptions\" class=\"fa fa-caret-down\"></i>\r\n\t\t</div>\r\n\t\t<h2  [style.cursor]=\"'help'\" title=\"To modify the options of a different noise, select a different one using the noise tree above.\">Noise Options</h2>\r\n\t</div>\r\n\t<noise-options [hidden]=\"!toggled.noiseOptions\"></noise-options>\r\n</div>\r\n<div class=\"stringified-noise\">\r\n\t<div class=\"section-header\" (click)=\"toggleSection('stringifiedNoise')\">\r\n\t\t<div class=\"toggle-container\">\r\n\t\t\t<i *ngIf=\"!toggled.stringifiedNoise\" class=\"fa fa-caret-right\"></i>\r\n\t\t\t<i *ngIf=\"toggled.stringifiedNoise\" class=\"fa fa-caret-down\"></i>\r\n\t\t</div>\r\n\t\t<h2>Stringified</h2>\r\n\t</div>\r\n\t<stringified-noise [hidden]=\"!toggled.stringifiedNoise\"></stringified-noise>\r\n</div>";

/***/ },

/***/ 663:
/***/ function(module, exports) {

	module.exports = "h1 {\r\n    z-index: 1;\r\n    font-size: 20px;\r\n    padding-left: 10px;\r\n    padding-top: 3px;\r\n    margin-top: 0px;\r\n    margin-bottom: 3px;\r\n    box-shadow: 0px 1px 3px rgba(0,0,0,0.33);\r\n}\r\n\r\n.section-header {\r\n    width: 100%;\r\n    display: inline-block;\r\n    height: 22px;   \r\n    padding-left: 5px;\r\n    margin: 0;\r\n    cursor: default;\r\n\r\n    background-color: #DCDCDC;\r\n    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.33);\r\n}\r\n\r\n.section-header h2 {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    text-transform: uppercase;\r\n    color: #6C6C6C;\r\n    margin: 0;\r\n    -moz-user-select: -moz-none;\r\n    -khtml-user-select: none;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.toggle-container {\r\n    display: inline-block;\r\n    width: 22px;\r\n    height: 22px;\r\n    text-align: center;\r\n    line-height: 22px;\r\n    margin: 0;\r\n}"

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/threejs/three.d.ts"/>
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var Player_1 = __webpack_require__(665);
	var ChunkManager_1 = __webpack_require__(666);
	var Sky_1 = __webpack_require__(671);
	var debug_service_1 = __webpack_require__(672);
	var noise_options_service_1 = __webpack_require__(393);
	var view_options_service_1 = __webpack_require__(387);
	var resize_service_1 = __webpack_require__(673);
	var WebglViewComponent = (function () {
	    function WebglViewComponent(elementRef, noiseOptionService, viewOptionService, debugService, resizeService) {
	        this.elementRef = elementRef;
	        this.noiseOptionService = noiseOptionService;
	        this.viewOptionService = viewOptionService;
	        this.debugService = debugService;
	        this.resizeService = resizeService;
	        this.native = this.elementRef.nativeElement;
	        this.nativeElement = this.native;
	    }
	    WebglViewComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.scene = new THREE.Scene();
	        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200000);
	        this.camera.position.y = 1000;
	        this.initThreeJS();
	        this.initStats();
	        setTimeout(function () { _this.renderer.setSize(_this.nativeElement.offsetWidth, _this.nativeElement.offsetHeight); }, 1000);
	        this.player = new Player_1.Player(this.renderer, this.scene, this.camera);
	        this.initScene();
	        this.chunkManager = new ChunkManager_1.ChunkManager(this.player, this.scene, false, 25000, 5000, 100, this.noiseOptionService, this.viewOptionService);
	        this.sky = new Sky_1.Sky(this.scene);
	        // x axis: red, y axis: green, z axis: blue
	        var axisHelper = new THREE.AxisHelper(5000);
	        this.scene.add(axisHelper);
	        this.render();
	        //setInterval(this.softUpdate.bind(this), 2000)
	    };
	    WebglViewComponent.prototype.softUpdate = function () {
	        this.chunkManager.update();
	    };
	    WebglViewComponent.prototype.initThreeJS = function () {
	        var _this = this;
	        var lastWidth = this.nativeElement.offsetWidth;
	        var lastHeight = this.nativeElement.offsetHeight;
	        this.renderer = new THREE.WebGLRenderer();
	        this.renderer.setSize(lastWidth, lastHeight);
	        this.resizeService.sidebarResizeStream.subscribe(function (newSidebarWidth) {
	            lastWidth = window.innerWidth - newSidebarWidth;
	            _this.renderer.setSize(lastWidth, lastHeight);
	        });
	        this.resizeService.noisePanelResizeStream.subscribe(function (newPanelHeight) {
	            lastHeight = window.innerHeight - newPanelHeight;
	            _this.renderer.setSize(lastWidth, lastHeight);
	        });
	        this.nativeElement.appendChild(this.renderer.domElement);
	    };
	    WebglViewComponent.prototype.initScene = function () {
	        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
	        directionalLight.position.set(0, 1, 0);
	        this.scene.add(directionalLight);
	    };
	    WebglViewComponent.prototype.initStats = function () {
	        this.stats = new Stats();
	        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
	        this.stats.domElement.style.position = 'absolute';
	        this.nativeElement.appendChild(this.stats.dom);
	    };
	    WebglViewComponent.prototype.addAxisHelper = function (scale) {
	    };
	    WebglViewComponent.prototype.render = function () {
	        this.stats.begin();
	        this.chunkManager.update();
	        this.player.update();
	        this.renderer.render(this.scene, this.camera);
	        this.stats.end();
	        this.sky.update(0.0001, this.player.controls.target);
	        requestAnimationFrame(this.render.bind(this));
	    };
	    WebglViewComponent = __decorate([
	        core_1.Component({
	            selector: 'webgl-view',
	            template: '',
	            styles: [__webpack_require__(674)]
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, noise_options_service_1.NoiseOptionService, view_options_service_1.ViewOptionService, debug_service_1.DebugService, resize_service_1.ResizeService])
	    ], WebglViewComponent);
	    return WebglViewComponent;
	}());
	exports.WebglViewComponent = WebglViewComponent;


/***/ },

/***/ 665:
/***/ function(module, exports) {

	"use strict";
	var Player = (function () {
	    function Player(renderer, scene, camera) {
	        this.renderer = renderer;
	        this.scene = scene;
	        this.camera = camera;
	        var material = new THREE.MeshLambertMaterial();
	        var geometry = new THREE.CubeGeometry(100, 100, 100);
	        this.debugMesh = new THREE.Mesh(geometry, material);
	        this.scene.add(this.debugMesh);
	        this.initControls();
	    }
	    Player.prototype.update = function () {
	        this.controls.update();
	        this.debugMesh.position.copy(this.coordinates);
	    };
	    Object.defineProperty(Player.prototype, "coordinates", {
	        get: function () {
	            return this.controls.target;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Player.prototype.initControls = function () {
	        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
	        this.controls.update();
	        //controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
	        /*this.controls.enableDamping = true;
	        this.controls.dampingFactor = 0.01;
	        this.controls.enableZoom = true;
	        this.controls.zoomSpeed = 0.5;
	        this.controls.rotateSpeed = 0.01; */
	    };
	    return Player;
	}());
	exports.Player = Player;


/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ChunkGenerator_1 = __webpack_require__(667);
	var Noise_1 = __webpack_require__(669);
	// Chunks are 1000 by 1000 units
	var ChunkManager = (function () {
	    function ChunkManager(player, scene, asyncGenerateChunks, renderDistance, chunkSize, segments, noiseOptionService, viewOptionService, debugService) {
	        this.player = player;
	        this.scene = scene;
	        this.asyncGenerateChunks = asyncGenerateChunks;
	        this.renderDistance = renderDistance;
	        this.chunkSize = chunkSize;
	        this.segments = segments;
	        this.noiseOptionService = noiseOptionService;
	        this.viewOptionService = viewOptionService;
	        this.debugService = debugService;
	        this.chunkGenerator = new ChunkGenerator_1.ChunkGenerator(this.chunkSize, this.segments, null);
	        this.noiseModelStream = noiseOptionService.getRootNoiseStream();
	        this.noiseModelStream.subscribe(this.onNoiseUpdate.bind(this));
	        this.viewOptionsStream = this.viewOptionService.viewOptionStream;
	        this.viewOptionsStream.subscribe(this.onViewOptionsUpdate.bind(this));
	        // By default, all chunks that have centers less than 5000 units away from this.playerCoordinates will be loaded
	        this.renderDistance = this.renderDistance || 5000;
	        this.chunkSize = this.chunkSize || 1000;
	        this.noise == null;
	        if (this.renderDistance % this.chunkSize != 0) {
	            throw new Error("Render distance must be evenly divisible by chunk size. (rd=" + this.renderDistance + ",cs=" + this.chunkSize + ")");
	        }
	        this.chunks = new Map();
	        if (this.asyncGenerateChunks) {
	            this.asyncGenerateChunks = true;
	        }
	    }
	    ChunkManager.prototype.initializeWorker = function () {
	        var _this = this;
	        this.receivedWorkerData = true;
	        var myWorker = __webpack_require__(670);
	        this.worker = new myWorker();
	        this.worker.postMessage({ type: "setGeneratorSettings", data: { chunkSize: this.chunkSize } });
	        this.worker.onmessage = function (event) {
	            _this.onWorkerSendChunks(event.data);
	        };
	    };
	    ChunkManager.prototype.onViewOptionsUpdate = function (newViewOptions) {
	        this.renderDistance = newViewOptions.renderDistance;
	        this.segments = newViewOptions.segmentsPerChunk;
	        this.chunkSize = newViewOptions.chunkSize;
	        this.chunkGenerator.setChunkSize(newViewOptions.chunkSize);
	        this.chunkGenerator.setSegments(newViewOptions.segmentsPerChunk);
	        this.unloadAllChunksOnNextUpdate = true;
	    };
	    ChunkManager.prototype.onNoiseUpdate = function (newNoise) {
	        console.log("updating noise with model", newNoise);
	        this.noise = new Noise_1.Noise(newNoise);
	        this.unloadAllChunksOnNextUpdate = true;
	        this.chunkGenerator.setNoiseGenerator(this.noise);
	    };
	    ChunkManager.prototype.onWorkerSendChunks = function (data) {
	        this.receivedWorkerData = true;
	        var material = new THREE.MeshLambertMaterial();
	        for (var i = 0; i < data.length; i++) {
	            var geometryData = data[i].geometryData;
	            var chunk = this.chunkGenerator.generateChunkFromGeometryData(new THREE.Vector2(data[i].coords[0], data[i].coords[1]), geometryData);
	            this.chunks.set(this.serializeVec2(chunk.chunkCoordinates), chunk);
	            this.scene.add(chunk.mesh);
	        }
	    };
	    ChunkManager.prototype.update = function () {
	        if (!this.noise)
	            return;
	        if (!this.updatePlayerCoordinates() && !this.unloadAllChunksOnNextUpdate)
	            return;
	        console.log("chunk map: ", this.chunks);
	        console.log("updating unload list");
	        this.updateUnloadList(this.unloadAllChunksOnNextUpdate);
	        this.unloadAllChunksOnNextUpdate = false;
	        console.log("finished updating unload list:", this.unloadList, "actually unloading chunks now");
	        this.unloadChunks();
	        console.log("upadting load list");
	        this.updateLoadList();
	        console.log("loading chunks");
	        if (this.asyncGenerateChunks && this.loadList.length > 0 && this.receivedWorkerData) {
	            this.receivedWorkerData = false;
	            this.giveWorkerLoadList();
	        }
	        else {
	            this.loadChunks();
	        }
	        console.log("done update");
	    };
	    // returns true if the player coordinates are different
	    ChunkManager.prototype.updatePlayerCoordinates = function () {
	        var result = !this.playerCoordinates || !this.player.coordinates.equals(this.playerCoordinates);
	        this.playerCoordinates = this.player.coordinates.clone();
	        return result;
	    };
	    ChunkManager.prototype.updateLoadList = function () {
	        // Generate a list of chunk coordinates that are within this.renderDistance units of the player coordinates
	        this.loadList = new Array();
	        var chunkRadius = this.renderDistance / this.chunkSize;
	        var playerChunkCoordinates = this.realCoordsToChunkCoords(new THREE.Vector2(this.playerCoordinates.x, this.playerCoordinates.z));
	        // Iterates over a square of coordinates around the player
	        for (var i = -chunkRadius + playerChunkCoordinates.x; i <= chunkRadius + playerChunkCoordinates.x; i++) {
	            for (var j = -chunkRadius + playerChunkCoordinates.y; j <= chunkRadius + playerChunkCoordinates.y; j++) {
	                var loc = new THREE.Vector3(i * this.chunkSize, 0, j * this.chunkSize);
	                // If the chunk is close enough and it's not already loaded, add the chunk to the load list
	                if (this.playerCoordinates.distanceTo(loc) <= this.renderDistance && !this.chunks.has(i + "," + j)) {
	                    this.loadList.push(new THREE.Vector2(i, j));
	                }
	            }
	        }
	        console.log("loadList went from x", -chunkRadius + playerChunkCoordinates.x, "to ", chunkRadius + playerChunkCoordinates.x, "y", -chunkRadius + playerChunkCoordinates.y, "to", chunkRadius + playerChunkCoordinates.y, this.loadList);
	    };
	    ChunkManager.prototype.updateUnloadList = function (unloadAllChunks) {
	        var _this = this;
	        this.unloadList = new Array();
	        // Iterate through each chunk
	        this.chunks.forEach(function (chunk, key) {
	            var chunkCoords = _this.deserializeVec2(key);
	            var realCoords = _this.chunkCoordToRealCoords(chunkCoords);
	            // If the chunk is out of render distance, add it to the unload list
	            var realCoords3 = new THREE.Vector3(realCoords.x, 0, realCoords.y);
	            if (_this.playerCoordinates.distanceTo(realCoords3) > _this.renderDistance || unloadAllChunks) {
	                _this.unloadList.push(chunkCoords);
	            }
	        });
	    };
	    ChunkManager.prototype.giveWorkerLoadList = function () {
	        console.log("this.loadList:", this.loadList);
	        this.worker.postMessage({ type: "generateChunks", data: this.loadList });
	    };
	    ChunkManager.prototype.loadChunks = function () {
	        for (var i = 0; i < this.loadList.length; i++) {
	            this.loadChunk(this.loadList[i]);
	        }
	    };
	    ChunkManager.prototype.unloadChunks = function () {
	        for (var i = 0; i < this.unloadList.length; i++) {
	            this.unloadChunk(this.unloadList[i]);
	        }
	    };
	    ChunkManager.prototype.loadChunk = function (chunkCoordinates) {
	        // The ChunkGenerator handles all mesh generation, we just have to add it to the chunk container (map) and the scene
	        var chunk = this.chunkGenerator.generateChunk(chunkCoordinates);
	        this.chunks.set(this.serializeVec2(chunkCoordinates), chunk);
	        this.scene.add(chunk.mesh);
	    };
	    ChunkManager.prototype.unloadChunk = function (chunkCoordinates) {
	        var serializedChunkCoords = this.serializeVec2(chunkCoordinates);
	        var chunk = this.chunks.get(serializedChunkCoords);
	        this.scene.remove(chunk.mesh);
	        chunk.mesh.geometry.dispose();
	        this.chunks.delete(serializedChunkCoords);
	    };
	    ChunkManager.prototype.getChunkCoordinates = function (vec) {
	        vec.x = Math.floor(vec.x / 1000);
	        vec.z = Math.floor(vec.z / 1000);
	        return vec;
	    };
	    // Utility - ignore
	    ChunkManager.prototype.serializeVec2 = function (vec) { return vec.x + "," + vec.y; };
	    ChunkManager.prototype.serializeVec3 = function (vec) { return vec.x + "," + vec.y + "," + vec.z; };
	    ChunkManager.prototype.deserializeVec2 = function (vec) {
	        var numbers = vec.split(",").map(parseFloat);
	        if (numbers.length < 2) {
	            throw new Error("Cannot deserialize vector 2 " + vec);
	        }
	        return new THREE.Vector2(numbers[0], numbers[1]);
	    };
	    ChunkManager.prototype.deserializeVec3 = function (vec) {
	        var numbers = vec.split(",").map(parseFloat);
	        if (numbers.length < 3) {
	            throw new Error("Cannot deserialize vector 3 " + vec);
	        }
	        return new THREE.Vector3(numbers[0], numbers[1], numbers[2]);
	    };
	    ChunkManager.prototype.chunkCoordToRealCoords = function (vec) {
	        return new THREE.Vector2(vec.x * this.chunkSize, vec.y * this.chunkSize);
	    };
	    ChunkManager.prototype.realCoordsToChunkCoords = function (vec) {
	        return new THREE.Vector2(Math.floor(vec.x / this.chunkSize), Math.floor(vec.y / this.chunkSize));
	    };
	    return ChunkManager;
	}());
	exports.ChunkManager = ChunkManager;


/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../../typings/threejs/three.d.ts"/>
	"use strict";
	var Chunk_1 = __webpack_require__(668);
	var ChunkGenerator = (function () {
	    function ChunkGenerator(chunkSize, segments, noiseGenerator) {
	        this.chunkSize = chunkSize;
	        this.segments = segments;
	        this.noiseGenerator = noiseGenerator;
	        this.groundMaterial = new THREE.MeshLambertMaterial();
	        //this.noiseGenerator = this.noiseGenerator ? this.noiseGenerator : new SimplexNoise();
	        /*
	        AddShaderChunks();
	
	        this.textureLoader = textureLoader || new THREE.TextureLoader();
	        this.noiseGenerator = new SimplexNoise();
	        this.mountainNoiseGenerator = new Noise();
	        this.mountainMultiplierNoiseGenerator = new SimplexNoise();
	        this.shaders =  { terrainLambert : THREE.ShaderLib[ 'lambert' ] };
	        this.segments = 5;
	        this.renderedSegments = 100;
	
	        let myProperties = {
	            lights: true,
	            fog: true,
	            transparent: true,
	            color: new THREE.Color(10, 150, 20),
	            map: null // this.grassTexture || THREE.ImageUtils.loadTexture( 'images/grass.png' )
	        };
	
	        let myUniforms = {
	            opacity: { type: "f", value: 0.4 },
	            color: new THREE.Vector3(255, 100, 0),
	            time: { value: 1.0 }
	        };
	
	        this.renderedGroundMaterial = this.terrainLambertMaterial(myProperties, myUniforms);
	    }
	
	    private terrainLambertMaterial(parameters, uniforms_) {
	
	        var material = new THREE.ShaderMaterial( {
	            vertexShader: GetTerrainVertexShader(),
	            fragmentShader: GetTerrainFragmentShader(),
	            uniforms: THREE.UniformsUtils.merge( [
	                uniforms_,
	                THREE.ShaderLib[ 'lambert' ].uniforms ] ),
	            lights: true
	        } );
	
	        material.setValues( parameters )
	
	        return material; */
	    }
	    /*public generateChunk(chunkCoords: THREE.Vector2): Chunk {
	        let realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
	
	        let material = new THREE.MeshLambertMaterial();
	
	        let geometry = new THREE.PlaneGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
	        //geometry.translate(this.chunkSize / 2, this.chunkSize / 2, 0)
	
	        for ( var i = 0; i < geometry.vertices.length; i++ ) {
	            var vertex = geometry.vertices[i];
	            let noiseCoords = new THREE.Vector2((realCoords.x + vertex.x)/5000, (-realCoords.z + vertex.y)/5000);
	            vertex.z = this.noiseGenerator.noise(noiseCoords.x, noiseCoords.y) * 1000;
	        }
	        geometry.computeFaceNormals();
	        geometry.computeVertexNormals();
	
	        let mesh = new THREE.Mesh(geometry, material);
	        mesh.rotation.x = Math.PI / -2;
	        mesh.receiveShadow = true;
	        mesh.translateX(realCoords.x);
	        mesh.translateY(-realCoords.z);
	        return new Chunk(mesh);
	    } */
	    ChunkGenerator.prototype.generateChunk = function (chunkCoords) {
	        var realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
	        var geometry = new THREE.PlaneBufferGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
	        var vertices = geometry.attributes.position.array;
	        for (var i = 2; i < vertices.length; i += 3) {
	            var noiseCoords = new THREE.Vector2((realCoords.x + vertices[i - 2]) / 5000, (-realCoords.z + vertices[i - 1]) / 5000);
	            vertices[i] += this.noiseGenerator.noise(noiseCoords.x, noiseCoords.y);
	        }
	        console.log("vertices[1] = ", vertices[1]);
	        geometry.computeVertexNormals();
	        geometry.rotateX(-Math.PI / 2);
	        geometry.translate(realCoords.x, 0, realCoords.z);
	        var mesh = new THREE.Mesh(geometry, this.groundMaterial);
	        mesh.receiveShadow = true;
	        return new Chunk_1.Chunk(mesh, chunkCoords);
	    };
	    ChunkGenerator.prototype.generateChunkGeometryData = function (chunkCoords) {
	        var geometryData = {};
	        var realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
	        var geometry = new THREE.PlaneBufferGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
	        geometryData.vertices = geometry.attributes.position.array;
	        geometryData.normal = geometry.attributes.normal.array;
	        geometryData.uv = geometry.attributes.uv.array;
	        geometryData.indices = geometry.getIndex().array;
	        for (var i = 2; i < geometryData.vertices.length; i += 3) {
	            var noiseCoords = new THREE.Vector2((realCoords.x + geometryData.vertices[i - 2]) / 5000, (-realCoords.z + geometryData.vertices[i - 1]) / 5000);
	            geometryData.vertices[i] += this.noiseGenerator.noise(noiseCoords.x, +noiseCoords.y) * 1000;
	        }
	        return geometryData;
	    };
	    ChunkGenerator.prototype.generateChunkFromGeometryData = function (chunkCoords, geometryData) {
	        var realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
	        var geometry = new THREE.BufferGeometry();
	        geometry.setIndex(new THREE.BufferAttribute(geometryData.indices, 1));
	        geometry.addAttribute('position', new THREE.BufferAttribute(geometryData.vertices, 3));
	        geometry.addAttribute('normal', new THREE.BufferAttribute(geometryData.normal, 3));
	        geometry.addAttribute('uv', new THREE.BufferAttribute(geometryData.uvs, 2));
	        geometry.computeVertexNormals();
	        geometry.rotateX(-Math.PI / 2);
	        geometry.translate(realCoords.x, 0, realCoords.z);
	        var mesh = new THREE.Mesh(geometry, this.groundMaterial);
	        mesh.receiveShadow = true;
	        var chunk = new Chunk_1.Chunk(mesh, chunkCoords);
	        return chunk;
	    };
	    ChunkGenerator.prototype.setChunkSize = function (newChunkSize) {
	        this.chunkSize = newChunkSize;
	    };
	    ChunkGenerator.prototype.setSegments = function (newSegments) {
	        this.segments = newSegments;
	    };
	    ChunkGenerator.prototype.setNoiseGenerator = function (newNoise) {
	        this.noiseGenerator = newNoise;
	    };
	    ChunkGenerator.prototype.fastSigmoid = function (x) {
	        return x / (1 + Math.abs(x));
	    };
	    return ChunkGenerator;
	}());
	exports.ChunkGenerator = ChunkGenerator;


/***/ },

/***/ 668:
/***/ function(module, exports) {

	"use strict";
	var Chunk = (function () {
	    function Chunk(mesh, chunkCoordinates) {
	        this.mesh = mesh;
	        this.chunkCoordinates = chunkCoordinates;
	    }
	    return Chunk;
	}());
	exports.Chunk = Chunk;


/***/ },

/***/ 669:
/***/ function(module, exports) {

	"use strict";
	// Usage: feed it a NoiseOptions and then just call noise.
	var Noise = (function () {
	    function Noise(noiseModel) {
	        this.noiseModel = noiseModel;
	        this.MaxTerrainHeight = 1;
	        this.CellHeight = 0.05;
	        this.Scale = this.MaxTerrainHeight / this.CellHeight;
	        this.simplexObject = new SimplexNoise();
	        this.children = new Array();
	        for (var i = 0; i < this.noiseModel.children.length; i++) {
	            this.children.push(new Noise(this.noiseModel.children[i]));
	        }
	    }
	    Noise.prototype.noise = function (x, y) {
	        var result = 0;
	        var childrenResult = 0;
	        var frequency = this.noiseModel.frequency;
	        var amplitude = 1;
	        var min = 0;
	        var max = 0;
	        // noiseFunction should return a value between 0 and 1
	        var noiseFunction = this.simplex.bind(this);
	        if (this.noiseModel.type == "truecellular") {
	            noiseFunction = this.truecellular.bind(this);
	        }
	        else if (this.noiseModel.type == "fastcellular") {
	            noiseFunction = this.fastcellular.bind(this);
	        }
	        for (var i = 0; i < this.noiseModel.octaves; i++) {
	            result += noiseFunction(x * frequency, y * frequency) * amplitude;
	            max += amplitude;
	            frequency *= this.noiseModel.lancunarity;
	            amplitude *= this.noiseModel.persistence;
	        }
	        result = this.rescale(result, min, max, this.noiseModel.low, this.noiseModel.high);
	        for (var i = 0; i < this.children.length; i++) {
	            childrenResult += this.children[i].noise(x, y);
	        }
	        switch (this.noiseModel.operation) {
	            case "multiply":
	                return result * childrenResult;
	            case "divide":
	                return result / childrenResult;
	            case "add":
	                return result + childrenResult;
	            case "subtract":
	                return result - childrenResult;
	        }
	    };
	    Noise.prototype.simplex = function (x, y) {
	        return (this.simplexObject.noise(x, y) + 1) / 2;
	    };
	    Noise.prototype.truecellular = function (xC, yC) {
	        function cos(angle) {
	            if (angle.length)
	                return angle.map(cos);
	            return Math.cos(angle);
	        }
	        function fract(x) {
	            if (x.length)
	                return x.map(fract);
	            return x - Math.floor(x);
	        }
	        function floor(x) {
	            if (x.length)
	                return x.map(floor);
	            return Math.floor(x);
	        }
	        var vec2 = function vec2(x, y) {
	            if (x == null)
	                x = 0;
	            if (y == null)
	                y = x;
	            return [x, y];
	        };
	        vec2.add = function anonymous(out, a, b) {
	            out[0] = a[0] + b[0];
	            out[1] = a[1] + b[1];
	            return out;
	        };
	        function length(x) {
	            var sum = 0;
	            for (var i = 0; i < x.length; i++) {
	                sum += x[i] * x[i];
	            }
	            return Math.sqrt(sum);
	        }
	        function r(n) {
	            return fract(cos(n * 89.42) * 343.42);
	        }
	        ;
	        function r_vec2(n) {
	            return [r(n[0] * 23.62 - 300.0 + n[1] * 34.35), r(n[0] * 45.13 + 256.0 + n[1] * 38.89)];
	        }
	        ;
	        function worley(n, s) {
	            var dis = 2.0;
	            for (var x = -1; x <= 1; x++) {
	                for (var y = -1; y <= 1; y++) {
	                    var p = vec2.add([], floor([n[0], n[1]]), [x, y]);
	                    var d = length([r_vec2(p)[0] + x - fract([n[0], n[1]])[0], r_vec2(p)[1] + y - fract([n[0], n[1]])[1]]);
	                    if (dis > d) {
	                        dis = d;
	                    }
	                    ;
	                }
	                ;
	            }
	            ;
	            return 1.0 - dis;
	        }
	        ;
	        return worley([xC, yC], 1);
	    };
	    Noise.prototype.fastcellular = function (x, y) {
	        var val = this.simplexObject.noise(x, y); //get the simplex value
	        var zFloat = this.Scale * val; //get the "index" of the cell's height
	        var zInt = zFloat * this.CellHeight; //scale up the index to get the actual Z value
	        return zInt;
	    };
	    Noise.prototype.rescale = function (value, min_old, max_old, min_new, max_new) {
	        return ((max_new - min_new) / (max_old - min_old) * (value - max_old)) + max_new;
	    };
	    return Noise;
	}());
	exports.Noise = Noise;


/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		return new Worker(__webpack_require__.p + "c6af69ab3b60999b3a45.worker.js");
	};

/***/ },

/***/ 671:
/***/ function(module, exports) {

	"use strict";
	THREE.ShaderLib['sky'] = {
	    uniforms: {
	        luminance: { value: 1 },
	        turbidity: { value: 2 },
	        reileigh: { value: 1 },
	        mieCoefficient: { value: 0.005 },
	        mieDirectionalG: { value: 0.8 },
	        sunPosition: { value: new THREE.Vector3() }
	    },
	    vertexShader: [
	        "varying vec3 vWorldPosition;",
	        "void main() {",
	        "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
	        "vWorldPosition = worldPosition.xyz;",
	        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
	        "}",
	    ].join("\n"),
	    fragmentShader: [
	        "uniform sampler2D skySampler;",
	        "uniform vec3 sunPosition;",
	        "varying vec3 vWorldPosition;",
	        "vec3 cameraPos = vec3(0., 0., 0.);",
	        "// uniform sampler2D sDiffuse;",
	        "// const float turbidity = 10.0; //",
	        "// const float reileigh = 2.; //",
	        "// const float luminance = 1.0; //",
	        "// const float mieCoefficient = 0.005;",
	        "// const float mieDirectionalG = 0.8;",
	        "uniform float luminance;",
	        "uniform float turbidity;",
	        "uniform float reileigh;",
	        "uniform float mieCoefficient;",
	        "uniform float mieDirectionalG;",
	        "// constants for atmospheric scattering",
	        "const float e = 2.71828182845904523536028747135266249775724709369995957;",
	        "const float pi = 3.141592653589793238462643383279502884197169;",
	        "const float n = 1.0003; // refractive index of air",
	        "const float N = 2.545E25; // number of molecules per unit volume for air at",
	        "// 288.15K and 1013mb (sea level -45 celsius)",
	        "const float pn = 0.035;	// depolatization factor for standard air",
	        "// wavelength of used primaries, according to preetham",
	        "const vec3 lambda = vec3(680E-9, 550E-9, 450E-9);",
	        "// mie stuff",
	        "// K coefficient for the primaries",
	        "const vec3 K = vec3(0.686, 0.678, 0.666);",
	        "const float v = 4.0;",
	        "// optical length at zenith for molecules",
	        "const float rayleighZenithLength = 8.4E3;",
	        "const float mieZenithLength = 1.25E3;",
	        "const vec3 up = vec3(0.0, 1.0, 0.0);",
	        "const float EE = 1000.0;",
	        "const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;",
	        "// 66 arc seconds -> degrees, and the cosine of that",
	        "// earth shadow hack",
	        "const float cutoffAngle = pi/1.95;",
	        "const float steepness = 1.5;",
	        "vec3 totalRayleigh(vec3 lambda)",
	        "{",
	        "return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));",
	        "}",
	        // see http://blenderartists.org/forum/showthread.php?321110-Shaders-and-Skybox-madness
	        "// A simplied version of the total Reayleigh scattering to works on browsers that use ANGLE",
	        "vec3 simplifiedRayleigh()",
	        "{",
	        "return 0.0005 / vec3(94, 40, 18);",
	        // return 0.00054532832366 / (3.0 * 2.545E25 * pow(vec3(680E-9, 550E-9, 450E-9), vec3(4.0)) * 6.245);
	        "}",
	        "float rayleighPhase(float cosTheta)",
	        "{	 ",
	        "return (3.0 / (16.0*pi)) * (1.0 + pow(cosTheta, 2.0));",
	        "//	return (1.0 / (3.0*pi)) * (1.0 + pow(cosTheta, 2.0));",
	        "//	return (3.0 / 4.0) * (1.0 + pow(cosTheta, 2.0));",
	        "}",
	        "vec3 totalMie(vec3 lambda, vec3 K, float T)",
	        "{",
	        "float c = (0.2 * T ) * 10E-18;",
	        "return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;",
	        "}",
	        "float hgPhase(float cosTheta, float g)",
	        "{",
	        "return (1.0 / (4.0*pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0*g*cosTheta + pow(g, 2.0), 1.5));",
	        "}",
	        "float sunIntensity(float zenithAngleCos)",
	        "{",
	        // This function originally used `exp(n)`, but it returns an incorrect value
	        // on Samsung S6 phones. So it has been replaced with the equivalent `pow(e, n)`.
	        // See https://github.com/mrdoob/three.js/issues/8382
	        "return EE * max(0.0, 1.0 - pow(e, -((cutoffAngle - acos(zenithAngleCos))/steepness)));",
	        "}",
	        "// float logLuminance(vec3 c)",
	        "// {",
	        "// 	return log(c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722);",
	        "// }",
	        "// Filmic ToneMapping http://filmicgames.com/archives/75",
	        "float A = 0.15;",
	        "float B = 0.50;",
	        "float C = 0.10;",
	        "float D = 0.20;",
	        "float E = 0.02;",
	        "float F = 0.30;",
	        "float W = 1000.0;",
	        "vec3 Uncharted2Tonemap(vec3 x)",
	        "{",
	        "return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;",
	        "}",
	        "void main() ",
	        "{",
	        "float sunfade = 1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);",
	        "// luminance =  1.0 ;// vWorldPosition.y / 450000. + 0.5; //sunPosition.y / 450000. * 1. + 0.5;",
	        "// gl_FragColor = vec4(sunfade, sunfade, sunfade, 1.0);",
	        "float reileighCoefficient = reileigh - (1.0* (1.0-sunfade));",
	        "vec3 sunDirection = normalize(sunPosition);",
	        "float sunE = sunIntensity(dot(sunDirection, up));",
	        "// extinction (absorbtion + out scattering) ",
	        "// rayleigh coefficients",
	        // "vec3 betaR = totalRayleigh(lambda) * reileighCoefficient;",
	        "vec3 betaR = simplifiedRayleigh() * reileighCoefficient;",
	        "// mie coefficients",
	        "vec3 betaM = totalMie(lambda, K, turbidity) * mieCoefficient;",
	        "// optical length",
	        "// cutoff angle at 90 to avoid singularity in next formula.",
	        "float zenithAngle = acos(max(0.0, dot(up, normalize(vWorldPosition - cameraPos))));",
	        "float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));",
	        "float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));",
	        "// combined extinction factor	",
	        "vec3 Fex = exp(-(betaR * sR + betaM * sM));",
	        "// in scattering",
	        "float cosTheta = dot(normalize(vWorldPosition - cameraPos), sunDirection);",
	        "float rPhase = rayleighPhase(cosTheta*0.5+0.5);",
	        "vec3 betaRTheta = betaR * rPhase;",
	        "float mPhase = hgPhase(cosTheta, mieDirectionalG);",
	        "vec3 betaMTheta = betaM * mPhase;",
	        "vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex),vec3(1.5));",
	        "Lin *= mix(vec3(1.0),pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up, sunDirection),5.0),0.0,1.0));",
	        "//nightsky",
	        "vec3 direction = normalize(vWorldPosition - cameraPos);",
	        "float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]",
	        "float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]",
	        "vec2 uv = vec2(phi, theta) / vec2(2.0*pi, pi) + vec2(0.5, 0.0);",
	        "// vec3 L0 = texture2D(skySampler, uv).rgb+0.1 * Fex;",
	        "vec3 L0 = vec3(0.1) * Fex;",
	        "// composition + solar disc",
	        "//if (cosTheta > sunAngularDiameterCos)",
	        "float sundisk = smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);",
	        "// if (normalize(vWorldPosition - cameraPos).y>0.0)",
	        "L0 += (sunE * 19000.0 * Fex)*sundisk;",
	        "vec3 whiteScale = 1.0/Uncharted2Tonemap(vec3(W));",
	        "vec3 texColor = (Lin+L0);   ",
	        "texColor *= 0.04 ;",
	        "texColor += vec3(0.0,0.001,0.0025)*0.3;",
	        "float g_fMaxLuminance = 1.0;",
	        "float fLumScaled = 0.1 / luminance;     ",
	        "float fLumCompressed = (fLumScaled * (1.0 + (fLumScaled / (g_fMaxLuminance * g_fMaxLuminance)))) / (1.0 + fLumScaled); ",
	        "float ExposureBias = fLumCompressed;",
	        "vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);",
	        "vec3 color = curr*whiteScale;",
	        "vec3 retColor = pow(color,vec3(1.0/(1.2+(1.2*sunfade))));",
	        "gl_FragColor.rgb = retColor;",
	        "gl_FragColor.a = 1.0;",
	        "}",
	    ].join("\n")
	};
	var Sky = (function () {
	    function Sky(scene) {
	        this.distance = 400000;
	        this.scene = scene;
	        this.initializeSettings();
	        this.createMesh();
	        this.createSun();
	        //this.createSunDirectionalLight();
	    }
	    Sky.prototype.createMesh = function () {
	        var skyShader = THREE.ShaderLib["sky"];
	        this.uniforms = THREE.UniformsUtils.clone(skyShader.uniforms);
	        var skyMat = new THREE.ShaderMaterial({
	            fragmentShader: skyShader.fragmentShader,
	            vertexShader: skyShader.vertexShader,
	            uniforms: this.uniforms,
	            side: THREE.BackSide
	        });
	        var skyGeo = new THREE.SphereBufferGeometry(100000, 32, 15);
	        this.mesh = new THREE.Mesh(skyGeo, skyMat);
	        this.scene.add(this.mesh);
	    };
	    Sky.prototype.createSun = function () {
	        this.sunSphere = new THREE.Mesh(new THREE.SphereBufferGeometry(20000, 16, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
	        this.sunSphere.position.y = -700000;
	        this.sunSphere.visible = false;
	        this.scene.add(this.sunSphere);
	    };
	    Sky.prototype.createSunDirectionalLight = function () {
	        this.sunDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
	        this.sunDirectionalLight.position.set(-1, 1, -1);
	        this.scene.add(this.sunDirectionalLight);
	    };
	    Sky.prototype.initializeSettings = function () {
	        this.settings = {
	            turbidity: 10,
	            reileigh: 2,
	            mieCoefficient: 0.005,
	            mieDirectionalG: 0.8,
	            luminance: 1,
	            inclination: 0.00,
	            azimuth: 0.25,
	            sun: !true
	        };
	    };
	    Sky.prototype.updateSettings = function () {
	        this.uniforms.turbidity.value = this.settings.turbidity;
	        this.uniforms.reileigh.value = this.settings.reileigh;
	        this.uniforms.luminance.value = this.settings.luminance;
	        this.uniforms.mieCoefficient.value = this.settings.mieCoefficient;
	        this.uniforms.mieDirectionalG.value = this.settings.mieDirectionalG;
	        var theta = Math.PI * (this.settings.inclination - 0.5);
	        var phi = 2 * Math.PI * (this.settings.azimuth - 0.5);
	        this.sunSphere.position.x = this.distance * Math.cos(phi);
	        this.sunSphere.position.y = this.distance * Math.sin(phi) * Math.sin(theta);
	        this.sunSphere.position.z = this.distance * Math.sin(phi) * Math.cos(theta);
	        this.sunSphere.visible = this.settings.sun;
	        this.uniforms.sunPosition.value.copy(this.sunSphere.position);
	    };
	    Sky.prototype.update = function (delta, center) {
	        delta = delta || 1;
	        if (center)
	            this.mesh.position.copy(center);
	        while (this.settings.inclination > 2) {
	            this.settings.inclination -= 2;
	        }
	        /*this.sunDirectionalLight.position.set(this.sunSphere.position.x,
	            this.sunSphere.position.y, this.sunSphere.position.z); */
	        this.settings.inclination += delta * 0.00001;
	        this.updateSettings();
	    };
	    return Sky;
	}());
	exports.Sky = Sky;
	;


/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var Subject_1 = __webpack_require__(69);
	var DebugService = (function () {
	    function DebugService() {
	        console.log("debug service created");
	        this.chunkStream = new Subject_1.Subject();
	        this.chunkStream.subscribe(function (f) {
	            console.log("chunkstream update: ", f);
	        });
	    }
	    DebugService.prototype.getChunkDebugStream = function () {
	        return this.chunkStream;
	    };
	    DebugService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DebugService);
	    return DebugService;
	}());
	exports.DebugService = DebugService;


/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var Subject_1 = __webpack_require__(69);
	var ResizeService = (function () {
	    function ResizeService() {
	        this.sidebarResizeStream = new Subject_1.Subject();
	        this.noisePanelResizeStream = new Subject_1.Subject();
	    }
	    ResizeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ResizeService);
	    return ResizeService;
	}());
	exports.ResizeService = ResizeService;


/***/ },

/***/ 674:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 675:
/***/ function(module, exports) {

	module.exports = "<div class=\"main-wrap\">\r\n    <div mwlResizable \r\n            [resizeEdges]=\"{bottom: false, right: true, top: false, left: false}\"\r\n            [enableGhostResize]=\"true\"\r\n            [validateResize]=\"validateSidebarResize\"\r\n            [ngStyle]=\"sidebarStyle\"\r\n            (resizeEnd)=\"onSidebarResizeEnd($event)\"\r\n             class=\"sidebar\"><sidebar></sidebar></div>\r\n    <div [ngStyle]=\"contentStyle\" class=\"content\">\r\n        <div class=\"content-container\">\r\n            <webgl-view class=\"webgl\"></webgl-view>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },

/***/ 676:
/***/ function(module, exports) {

	module.exports = ".sidebar {\r\n    /*overflow-y: scroll; */\r\n    overflow-x: hidden;\r\n    background-color: #F3F3F3;\r\n    width: 250px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.sidebar h1 {\r\n    color: white;\r\n}\r\n\r\n.content {\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 250px;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.content-container {\r\n    display: flex;\r\n    flex-flow: column;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.webgl {\r\n    min-height: 400px;\r\n    flex-grow: 1;\r\n}\r\n\r\n.options {\r\n\r\n}"

/***/ }

});
//# sourceMappingURL=app.js.map