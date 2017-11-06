(function ( ng ) {
    let mod = ng.module( 'accountModule', [ 'ui.router' ] );

    mod.config( [ '$stateProvider', '$urlRouterProvider',
                    function ( $stateProvider, $urlRouterProvider ) {
                        $urlRouterProvider.otherwise( '/account' );

                        $stateProvider
                            .state( 'account', {
                                url: '/account',
                                views: {
                                    'mainView': {
                                        templateUrl: 'app/src/modules/account/account.html',
                                        controller: 'accountCtrl'
                                    }
                                }
                            } );
                    } ] );
})( window.angular );
