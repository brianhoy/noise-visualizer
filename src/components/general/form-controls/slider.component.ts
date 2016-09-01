import { Component, Provider, forwardRef, Input, Optional } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES } from '@angular/common';
import { NgControl } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, 
    {
        useExisting: forwardRef(() => SliderComponent),
        multi: true
    }
);

@Component({
    selector: 'slider',
    inputs: ['min', 'max', 'label', 'sliderName',
        'description', 'step', 'startingValue'],
    outputs: ['value'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    directives: [CORE_DIRECTIVES],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements ControlValueAccessor {
    constructor(@Optional() ngControl: NgControl) {
        if (ngControl) {
            ngControl.valueAccessor = this;
            }
    }

    private min: number;
    private max: number;
    private label: string;
    private sliderName: string;
    private step: number;
    private startingValue: number;
    private description: string;

    private _value: number = 0;

    public getValue(): any {
        return this._value;
    }

    public get value(): any { 
        return this._value; 
    }

    public set value(v: any) {
        if (v !== this._value) {
            this._value = parseFloat(v);
            this.onChange(parseFloat(v));
        }
    }

    writeValue(value: any) {
        this._value = value;
        this.onChange(value);
    }

    onChange = (_: any) => {};
    onTouched = () => {};
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}