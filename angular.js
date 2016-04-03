angular.module("app", ["ui.router"])
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
})