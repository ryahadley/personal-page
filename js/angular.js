angular.module("app", ["ui.router", "ngAnimate"])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state("home", {
            url: "/",
            templateUrl: "views/home.html"
        })

        .state("projects", {
            url: "/projects",
            templateUrl: "views/projects.html"
        })

        .state("interests", {
            url: "/interests",
            templateUrl: "views/interests.html"
        })

        .state("goals", {
            url: "/goals",
            templateUrl: "views/goals.html"
        })

        .state("contact", {
            url: "/contact",
            templateUrl: "views/contact.html"
        })
})
