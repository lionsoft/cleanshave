import { Home } from './home/Home';
import { About } from './about/About';
import { People } from './people/People';
import { PersonDetail } from './people/PersonDetail';
import { Route, Router } from 'angular2/router';

export var Routes = {
  home: new Route({ path: '/', component: Home, name: 'Home'}),
  about: new Route({path: '/about', component: About, name: 'About'}),
  people: new Route({ path: '/people', component: People, name: 'People' }),
  detail: new Route({ path: '/people/:id', component: PersonDetail, name: 'Detail' })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
