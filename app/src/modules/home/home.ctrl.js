(function ( ng ) {
    let mod = ng.module( 'mainModule' );

    mod.controller( 'mainCtrl', [ '$scope',
        function ( $scope ) {
            $scope.goMenu( 0 );
        }
    ] );
})( angular );
