(function ( ng ) {
    let mod = ng.module( 'profileModule', [ 'ui.router' ] );

    mod.config( [ '$stateProvider', '$urlRouterProvider',
                    function ( $stateProvider, $urlRouterProvider ) {
                        $urlRouterProvider.otherwise( '/profile' );

                        $stateProvider
                            .state( 'profile', {
                                url: '/profile/:userLogin',
                                params: {
                                    userLogin: null,
                                    user: null
                                },
                                views: {
                                    'mainView': {
                                        templateUrl: 'app/src/modules/profile/profile.html',
                                        controller: 'profileCtrl'
                                    }
                                },
                                onEnter: [ function () {
                                    $( '#account' ).text( ' Sign Out' );
                                } ],
                                onExit: [ function () {
                                    $( '#account' ).text( ' Account' );
                                } ]
                            } );
                    } ] );
})( window.angular );
