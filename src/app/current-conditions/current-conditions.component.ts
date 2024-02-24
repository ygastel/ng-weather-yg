import {Component, inject, OnDestroy, OnInit, Signal} from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {Router} from '@angular/router';
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit, OnDestroy {

    protected locationService = inject(LocationService);
    protected weatherService = inject(WeatherService);
    protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
    private router = inject(Router);

    private readonly onDestroy = new Subject<void>();

    showForecast(zipcode: string) {
        this.router.navigate(['/forecast', zipcode])
    }

    ngOnInit(): void {
        this.locationService.getNewLocation().pipe(takeUntil(this.onDestroy)).subscribe(newLocation => this.weatherService.addCurrentConditions(newLocation));
        this.locationService.getRemovedLocation().pipe(takeUntil(this.onDestroy)).subscribe(removedLocation => this.weatherService.removeCurrentConditions(removedLocation));
    }

    ngOnDestroy(): void {
        this.onDestroy.next();
    }
}
