(function ( ng ) {
    let mod = ng.module( 'servicesModule', [ 'ui.router' ] );

    mod.config( [ '$stateProvider', '$urlRouterProvider',
                    function ( $stateProvider, $urlRouterProvider ) {
                        $urlRouterProvider.otherwise( '/home' );

                        $stateProvider
                            .state( 'services', {
                                url: '/services',
                                views: {
                                    'mainView': {
                                        templateUrl: 'app/src/modules/services/services.html',
                                        controller: 'servicesCtrl'
                                    }
                                }
                            } );
                    } ] );
})( window.angular );
