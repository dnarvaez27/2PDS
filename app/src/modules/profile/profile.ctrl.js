(function (ng) {
    let mod = ng.module('profileModule');

    mod.controller('profileCtrl', ['$scope', '$stateParams', '$state', 'FilterPatientService',
        function ($scope, $stateParams, $state, FilterPatientService) {

            $scope.$parent.menusrc = 'app/src/modules/profile/menu_profile.html';
            $scope.$on('$destroy', function () {
                $scope.$parent.menusrc = 'app/src/menu.html';
            });

            //BEGIN: TEMPORAL
            if (!$stateParams.user) {
                $scope.currentUser = {
                    user: 'dnarvaez27',
                    name: 'David Narvaez',
                    pass: '1234',
                    img: 'https://avatars1.githubusercontent.com/u/12243937?v=4',
                    statistics: {
                        total_patients: 12,
                        age_range: {
                            '0_10': 0,
                            '11_20': 1,
                            '21_30': 1,
                            '31_40': 4,
                            '41_50': 1,
                            '51_60': 2,
                            '61_70': 1,
                            '71_80': 1,
                            '81_90': 1,
                            '91_100': 0
                        },
                        gender_range: {
                            male: 4,
                            famele: 8
                        }
                    }
                };
            }
            else {
                $scope.currentUser = $stateParams.user;
            }
            //END: TEMPORAL

            $scope.inputFilter = FilterPatientService.id_filter;

            $scope.goToPatients = function () {
                $state.go('patients');
                // TODO: Color de boton
            };

            $scope.goToProfile = function () {
                $state.go('profile');
            };

            // $scope.goToPatients();
        }
    ]);
})(angular);
