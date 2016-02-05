import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Person} from '../core/Person';

/**
 * people service
 */
@Injectable()
export class PeopleService {

    constructor(private _http: Http) { }

    getPeople(): any {
        return this._http.get('/api/people');
    }

    getPerson(id: number) {
        return this._http.get('/api/people/' + id.toString());
    }

    private _fetchFailed(error: any) {
        console.error(error);
        return Promise.reject(error);
    }


}