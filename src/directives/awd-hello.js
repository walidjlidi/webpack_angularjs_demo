module.exports = function(ngModule){
    ngModule.directive('awdHello', function(){
       return {
           restrict: 'E',
           scope: {},
           templateUrl: 'src/directives/awd-hello.html',
           controllerAs: 'vm',
           controller: function(){
               var vm = this;
               
               vm.greeting = "Hello Webpack2 ";
           }
       };    
    });
}