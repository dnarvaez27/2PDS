(function ( ng ) {
    let mod = ng.module( 'patientModule', [ 'ui.router' ] );

    mod.config( [ '$stateProvider', '$urlRouterProvider',
                    function ( $stateProvider, $urlRouterProvider ) {
                        // $urlRouterProvider.otherwise( '/patients' );

                        $stateProvider
                            .state( 'patients', {
                                url: '/patients',
                                parent: 'profile',
                                views: {
                                    'profileView': {
                                        templateUrl: 'app/src/modules/patient/patients.list.html',
                                        controller: 'patientsCtrl'
                                    },
                                    'sidebarView': {
                                        templateUrl: 'app/src/modules/patient/patients.filter.html',
                                        controller: 'patientsCtrl'
                                    }
                                }
                            } )
                            .state( 'patient', {
                                url: '/patients/:id',
                                parent: 'profile',
                                params: {
                                    id: null,
                                },
                                views: {
                                    'profileView': {
                                        templateUrl: 'app/src/modules/patient/detail/patients.detail.html',
                                        controller: 'patientDetailCtrl'
                                    },
                                    'sidebarView': {
                                        templateUrl: 'app/src/modules/patient/detail/patients.detail.sidebar.html',
                                        controller: 'patientDetailCtrl'
                                    }
                                }
                            } );
                    } ] );

    mod.service( 'FilterPatientService', function () {
        let id_filter = '';
    } );
})( window.angular );
