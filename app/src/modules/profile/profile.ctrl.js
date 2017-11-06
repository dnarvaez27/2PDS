(function ( ng ) {
    let mod = ng.module( 'profileModule' );

    mod.controller( 'profileCtrl', [ '$scope', '$stateParams', '$state', 'FilterPatientService',
        function ( $scope, $stateParams, $state, FilterPatientService ) {

            $scope.$parent.menusrc = 'app/src/modules/profile/menu_profile.html';
            $scope.$on( '$destroy', function () {
                $scope.$parent.menusrc = 'app/src/menu.html';
            } );

            //BEGIN: TEMPORAL
            if ( !$stateParams.user ) {
                $scope.currentUser = {
                    user: 'dnarvaez27',
                    name: 'David Narvaez',
                    pass: '1234',
                    img: 'https://avatars1.githubusercontent.com/u/12243937?v=4'
                };
            }
            else {
                $scope.currentUser = $stateParams.user;
            }
            //END: TEMPORAL

            $scope.inputFilter = FilterPatientService.id_filter;

            $scope.goToPatients = function () {
                $state.go( 'patients' );
                // TODO: Color de boton
            };

            $scope.goToPatients();
        }
    ] );
})( angular );
