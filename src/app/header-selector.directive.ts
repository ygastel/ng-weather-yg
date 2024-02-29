import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[headerSelector]'
})
export class HeaderSelectorDirective {

    @Input()
    public headerSelectorKey: string;

    constructor(public readonly template: TemplateRef<any>) {
    }

}

@Directive({
    selector: '[contentSelector]'
})
export class TabContentSelectorDirective {

    @Input() contentSelectorKey: string;

    constructor(public readonly template: TemplateRef<any>) {
    }

}
