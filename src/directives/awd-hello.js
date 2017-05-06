module.exports = function(ngModule){
    ngModule.directive('awdHello', function(){
       return {
           restrict: 'E',
           scope: {},
           template: require('./awd-hello.html'),
           controllerAs: 'vm',
           controller: function(){
               var vm = this;
               
               vm.greeting = "Hello Webpack2 ";
           }
       };    
    });
}