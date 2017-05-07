module.exports = function(ngModule){
    if (ON_TEST) {
        require('./awd-hello.test').default(ngModule);
    }
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