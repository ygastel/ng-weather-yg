import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {

    private readonly locations: string[];
    private readonly newLocationEmitter = new Subject<string>();
    private readonly deletedLocationEmitter = new Subject<string>();

    constructor() {
        this.locations = [];
        this.loadLocationFromStorage().forEach(oneLocation => this.addLocation(oneLocation));
    }

    public addLocation(zipcode: string) {
        this.locations.push(zipcode);
        this.saveLocationToStorage();
        this.newLocationEmitter.next(zipcode);
    }

    public getNewLocation(): Observable<string> {
        return this.newLocationEmitter.asObservable();
    }

    public getRemovedLocation(): Observable<string> {
        return this.deletedLocationEmitter.asObservable();
    }

    public removeLocation(zipcode: string): void {
        const index = this.locations.indexOf(zipcode);
        if (index !== -1) {
            this.locations.splice(index, 1);
            this.saveLocationToStorage();
            this.deletedLocationEmitter.next(zipcode);
        }
    }

    private saveLocationToStorage() {
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    }

    private loadLocationFromStorage(): string[] {
        const locString = localStorage.getItem(LOCATIONS);
        return locString ? JSON.parse(locString) : [];
    }
}
