import { Directive, HostBinding } from '@angular/core';
@Directive({
    selector: '[ye-input]'
})
export class InputDirective {
    @HostBinding('class.weui-input') public inputC: boolean = true;
}
