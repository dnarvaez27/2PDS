(function ( ng ) {
    let mod = ng.module( 'patientModule' );

    mod.controller( 'examsCtrl', [ '$scope',
        function ( $scope ) {

            $scope.seeExam = function ( obj ) {
                $scope.$parent.$parent.$parent.getStatus = $scope.getStatus;
                $scope.$parent.$parent.$parent.examen = obj;
                $scope.$parent.$parent.$parent.dialogsrc = 'app/src/modules/patient/detail/patient.modal.html';
                $( '#modal' ).modal( 'show' );
            };
            $scope.getStatus = function ( num ) {
                switch ( num ) {
                    case -1:
                        return 'Not Registered';
                        break;
                    case 0:
                        return 'Sucess';
                        break;
                    case 1:
                        return 'Pending';
                        break;
                    case 2:
                        return 'Fail';
                        break;
                }
            };
        }
    ] );
})( angular );
