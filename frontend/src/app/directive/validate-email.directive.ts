import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: '[appValidateEmail]',
    providers: [NgModel]
})
export class ValidateEmailDirective {

    constructor(private ngModel: NgModel, private _el?: ElementRef) { }

    @HostListener('blur', ['$event']) onBlur(event) {
        // var EMAIL_REGEXP = /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9-+]+)*(\+[a-zA-Z0-9-]+)?@[a-zA-Z0-9-.]+(\.[a-zA-Z0-9]+)$/;
        var EMAIL_REGEXP = /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9-+]+)*(\+[a-zA-Z0-9-]+)?@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;
        const initalValue = this._el.nativeElement.value;
        let elm = $(this._el.nativeElement);
        let currentForm = this._el.nativeElement.form;
        let submitBtn = $(currentForm).find('button[type="submit"]')
        let isMatchRegex = EMAIL_REGEXP.test(initalValue);

        if (isMatchRegex || initalValue == '') {
            elm.css("border", "");
            submitBtn.removeAttr('disabled');
            elm.parent().find('p').remove();
        } else if (isMatchRegex == false) {

            elm.css("border", "1px solid #ff0000cf");
            submitBtn.attr('disabled', 'disabled');
            if (elm.parent().find('p').length == 0) {
                elm.parent().append('<p style="color: #ff0000cf;">Please provide a valid email id.</p>')
            }

        }
    }

    @HostListener('focusout', ['$event']) onFocusOut(event) {
        let initalValue = this._el.nativeElement.value;
        initalValue = initalValue.toLowerCase();
        this.ngModel.update.emit(initalValue)

    }


    @HostListener('keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // on enter
        if (event.keyCode === 13) {

            let initalValue = this._el.nativeElement.value;
            initalValue = initalValue.toLowerCase();
            this.ngModel.update.emit(initalValue)
        }

    }

    @HostListener('focus', ['$event']) onFocus(event) {

        let elm = $(this._el.nativeElement);
        let currentForm = this._el.nativeElement.form;
        let submitBtn = $(currentForm).find('button[type="submit"]')

        submitBtn.attr('disabled', 'disabled');

        elm.css("border", "");
        submitBtn.removeAttr('disabled');
        elm.parent().find('p').remove();

    }

}
