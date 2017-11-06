(function ( ng ) {
    let mod = ng.module( 'accountModule' );

    mod.controller( 'accountCtrl', [ '$scope',
        function ( $scope ) {
            $scope.onSubmit = function () {
                console.log( 'submit' );
            };

            $scope.goToSignUp = function () {
                console.log( 'Signup' );
            };
        }
    ] );
})( angular );
