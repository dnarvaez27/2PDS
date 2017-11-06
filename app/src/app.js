(function () {
    let app = angular.module( '2pdsApp', [
        'ui.router',
        'mainModule',
        'servicesModule',
        'projectModule',
        'accountModule',
        'profileModule',
        'patientModule'
    ] );


    app.controller( 'menuController', [ '$scope', '$state',
        function ( $scope, $state ) {
            $scope.menusrc = 'app/src/menu.html';

            $scope.goMenu = function ( numMenu ) {
                switch ( numMenu ) {
                    case 0:
                        $state.go( 'home' );
                        break;
                    case 1:
                        $state.go( 'services' );
                        break;
                    case 2:
                        $state.go( 'project' );
                        break;
                    case 3:
                        // About
                        break;
                    case 4:
                        // Account
                        $state.go( 'account' );
                        break;
                }
                setMenuOn( numMenu );
            };
        } ] );

    function setMenuOn( numMenu ) {
        for ( let i = 0; i < 5; i++ ) {
            if ( i !== numMenu ) {
                $( '#menu-item-' + i ).toggleClass( 'menu-on', false );
            }
        }
        $( '#menu-item-' + numMenu ).toggleClass( 'menu-on', true );

        $( document ).ready( function () {
            $( 'html, body' ).animate( { scrollTop: 0 }, 800 );
        } );
    }

    app.config( [ '$qProvider', function ( $qProvider ) {
        $qProvider.errorOnUnhandledRejections( false );
    } ] );
})( window.angular );
