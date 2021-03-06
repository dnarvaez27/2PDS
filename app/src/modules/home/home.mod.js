(function ( ng ) {
    let mod = ng.module( 'mainModule', [ 'ui.router' ] );

    mod.config( [ '$stateProvider', '$urlRouterProvider',
                    function ( $stateProvider, $urlRouterProvider ) {
                        $urlRouterProvider.otherwise( '/home' );

                        $stateProvider
                            .state( 'home', {
                                url: '/home',
                                views: {
                                    'mainView': {
                                        templateUrl: 'app/src/modules/home/home.html',
                                        controller: 'mainCtrl'
                                    }
                                }
                            } );
                    } ] );
})( window.angular );
