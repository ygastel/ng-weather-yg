import {AfterContentChecked, Component, ContentChildren, Input, QueryList, TemplateRef} from '@angular/core';
import {NgClass, NgForOf, NgTemplateOutlet} from '@angular/common';
import {HeaderSelectorDirective, TabContentSelectorDirective} from '../header-selector.directive';


@Component({
    selector: 'app-generic-tab-display',
    standalone: true,
    imports: [
        NgForOf,
        NgTemplateOutlet,
        NgClass
    ],
    templateUrl: './generic-tab-display.component.html',
    styleUrl: './generic-tab-display.component.css'
})
export class GenericTabDisplayComponent implements AfterContentChecked {
    @Input()
    tabContentTemplate: TemplateRef<any>;
    @ContentChildren(HeaderSelectorDirective, {descendants: true}) headerList: QueryList<HeaderSelectorDirective>;
    @ContentChildren(TabContentSelectorDirective, {descendants: true}) contentList: QueryList<TabContentSelectorDirective>;
    public selectedContent: TabContentSelectorDirective;

    public selectedKey: string;


    ngAfterContentChecked(): void {
        this.selectFirstAvailable();
        this.changeTabWhenSelectedOneIsRemoved();
        this.clearTabWhenNoMoreTabs();
    }

    private clearTabWhenNoMoreTabs() {
        if (this.headerList.length === 0) {
            this.selectedContent = undefined;
        }
    }

    private changeTabWhenSelectedOneIsRemoved() {
        if (this.headerList.length > 0 && !this.headerList.find(x => x.headerSelectorKey === this.selectedKey)) {
            this.selectKey(this.headerList.get(0).headerSelectorKey);
        }
    }

    selectKey(headerSelectorKey: string) {
        this.selectedKey = headerSelectorKey;
        this.selectedContent = this.contentList.find(x => x.contentSelectorKey === headerSelectorKey);
    }

    private selectFirstAvailable() {
        if (this.selectedContent === undefined && this.contentList.length > 0) {
            this.selectKey(this.headerList.get(0).headerSelectorKey);
        }
    }


}
