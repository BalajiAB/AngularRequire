require.config({


    paths:{
        angular:'libs/angular',
        app:'app'
    },

    shim:{
        'app':{
            deps:['angular']
        }
    }
});

require(['app'],function(){
    angular.bootstrap(document, ['demoApp']);
});