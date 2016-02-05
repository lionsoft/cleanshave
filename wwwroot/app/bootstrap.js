System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './app', './people/people.service'], function(exports_1) {
    var browser_1, router, http_1, app_1, people_service_1;
    var x, y;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1) {
                router = router_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router.ROUTER_PROVIDERS,
                http_1.HTTP_BINDINGS,
                people_service_1.PeopleService
            ]);
            x = 1;
            y = 3;
        }
    }
});
//# sourceMappingURL=bootstrap.js.map