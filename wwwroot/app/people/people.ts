import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {PeopleService} from './people.service';
import {PersonDetail} from '../people/persondetail';
import {Person} from '../core/person';
import * as router from 'angular2/router';


@Component({
    selector: 'people',
    templateUrl: './app/people/people.html',
    directives: [CORE_DIRECTIVES, router.ROUTER_DIRECTIVES],
})
export class People {
    public people: Array<Person>;

    private index: number = 0;

    constructor(private _peopleService: PeopleService) {
        _peopleService.getPeople()
            .subscribe((res: any) => this.people = res.json());

        setInterval(() => {
            var i = Math.floor(Math.random() * 50);
            if (this.people && this.people[i]) {
                var x = Math.random() * 50;
                this.people[i].first = x.toString();
                this.people[i].last = x.toString();
            }
        }, 10);
    }
}