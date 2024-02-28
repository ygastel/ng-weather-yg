import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[headerSelector]'
})
export class HeaderSelectorDirective {

    @Input()
    public headerSelectorKey: string;

    constructor(public readonly template: TemplateRef<any>) {
        console.log(`j'ai du contenu:`, template);
        setTimeout(() => {
            console.log(`j'ai une clé : `, this.headerSelectorKey);
        }, 2000);

    }

}

@Directive({
    selector: '[contentSelector]'
})
export class TabContentSelectorDirective {

    @Input() contentSelectorKey: string;

    constructor(public readonly template: TemplateRef<any>) {
        console.log(`je suis le content:`, template);
    }

}
