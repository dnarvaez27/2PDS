(function ( ng ) {
    let mod = ng.module( 'projectModule', [ 'ui.router' ] );

    mod.config( [ '$stateProvider', '$urlRouterProvider',
        function ( $stateProvider, $urlRouterProvider ) {
            $urlRouterProvider.otherwise( '/home' );

            $stateProvider
                .state( 'project', {
                    url: '/project',
                    views: {
                        'mainView': {
                            templateUrl: 'app/src/modules/project/project.html',
                            controller: 'projectCtrl'
                        }
                    }
                } );
        } ] );
})( window.angular );
