import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericTabDisplayComponent} from './generic-tab-display.component';

describe('GenericTabDisplayComponent', () => {
    let component: GenericTabDisplayComponent;
    let fixture: ComponentFixture<GenericTabDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GenericTabDisplayComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(GenericTabDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
