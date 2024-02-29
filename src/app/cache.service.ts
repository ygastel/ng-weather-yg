import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    private timeToLive = 5000;

    public storeCache<T>(cacheKey: string, payload: T): void {
        const toSave = {createdOn: new Date(), objectContent: payload} as PayLoad;
        localStorage.setItem(cacheKey, JSON.stringify(toSave));
    }

    public getFromCache<T>(cacheKey: string): T {
        const contentAsString = localStorage.getItem(cacheKey);
        if (contentAsString) {
            return this.parseContent(contentAsString);
        } else {
            return null;
        }
    }

    private parseContent(contentAsString: string) {
        const reloaded = JSON.parse(contentAsString) as PayLoad;
        const since = new Date().getTime() - new Date(reloaded.createdOn).getTime();
        if (since < this.timeToLive) {
            return reloaded.objectContent;
        } else {
            return null;
        }
    }
}

interface PayLoad {
    createdOn: Date;
    objectContent: any;
}
