(function () {
    let app = angular.module( '2pdsApp', [
        'ui.router',

        'patientModule',
        'accountModule',
        'projectModule',
        'servicesModule',
        'profileModule',
        'mainModule',
    ] );


    app.controller( 'menuController', [ '$scope', '$state',
        function ( $scope, $state ) {
            $scope.menusrc = 'app/src/menu.html';
            $scope.dialogsrc = '';

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


            $scope.showToast = function ( text ) {
                let x = document.getElementById( 'snackbar' );
                x.innerHTML = text;
                x.className = 'show';
                setTimeout( function () {
                    x.className = x.className.replace( 'show', '' );
                }, 3000 );
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

    app.config( [ '$qProvider', '$httpProvider', function ( $qProvider, $httpProvider ) {
        $qProvider.errorOnUnhandledRejections( false );
        $httpProvider.defaults.withCredentials = true;
    } ] );
})( window.angular );
