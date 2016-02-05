import * as ng from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import * as router from 'angular2/router';
import { Http, HTTP_BINDINGS } from 'angular2/http';
import { App } from './app';
import { PeopleService } from './people/people.service';

bootstrap(App, [
    router.ROUTER_PROVIDERS,
    HTTP_BINDINGS,
    PeopleService
]);

let x = 1;

const y = 3;

