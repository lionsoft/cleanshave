System.register(['angular2/core', 'angular2/common', './people.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, people_service_1, router;
    var People;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            },
            function (router_1) {
                router = router_1;
            }],
        execute: function() {
            People = (function () {
                function People(_peopleService) {
                    var _this = this;
                    this._peopleService = _peopleService;
                    this.index = 0;
                    _peopleService.getPeople()
                        .subscribe(function (res) { return _this.people = res.json(); });
                    setInterval(function () {
                        var i = Math.floor(Math.random() * 50);
                        if (_this.people && _this.people[i]) {
                            var x = Math.random() * 50;
                            _this.people[i].first = x.toString();
                            _this.people[i].last = x.toString();
                        }
                    }, 10);
                }
                People = __decorate([
                    core_1.Component({
                        selector: 'people',
                        templateUrl: './app/people/people.html',
                        directives: [common_1.CORE_DIRECTIVES, router.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [people_service_1.PeopleService])
                ], People);
                return People;
            })();
            exports_1("People", People);
        }
    }
});
//# sourceMappingURL=People.js.map