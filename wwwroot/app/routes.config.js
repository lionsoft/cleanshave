System.register(['./home/Home', './about/About', './people/People', './people/PersonDetail', 'angular2/router'], function(exports_1) {
    var Home_1, About_1, People_1, PersonDetail_1, router_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (Home_1_1) {
                Home_1 = Home_1_1;
            },
            function (About_1_1) {
                About_1 = About_1_1;
            },
            function (People_1_1) {
                People_1 = People_1_1;
            },
            function (PersonDetail_1_1) {
                PersonDetail_1 = PersonDetail_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                home: new router_1.Route({ path: '/', component: Home_1.Home, name: 'Home' }),
                about: new router_1.Route({ path: '/about', component: About_1.About, name: 'About' }),
                people: new router_1.Route({ path: '/people', component: People_1.People, name: 'People' }),
                detail: new router_1.Route({ path: '/people/:id', component: PersonDetail_1.PersonDetail, name: 'Detail' })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});
//# sourceMappingURL=routes.config.js.map