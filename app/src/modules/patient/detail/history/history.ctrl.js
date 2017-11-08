(function ( ng ) {
    let mod = ng.module( 'patientModule' );

    mod.controller( 'historyCtrl', [ '$scope',
        function ( $scope ) {
            $scope.togglePatientData = function () {
                $( '#patient_data' ).toggleClass( 'panel-anim-in' );
            };
        }
    ] );
})( angular );
