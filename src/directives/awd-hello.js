module.exports = function(ngModule){
    ngModule.directive('awdHello', function(){
       require ('./awd-hello.css')
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