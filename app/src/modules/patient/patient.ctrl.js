(function ( ng ) {
    let mod = ng.module( 'patientModule' );

    mod.controller( 'patientsCtrl', [ '$scope', 'Data',
        function ( $scope, Data ) {
            $scope.patients = [
                {
                    name: 'Paciente 1',
                    id: '123456789',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 2',
                    id: '987654321',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 3',
                    id: '5550055',
                    last: new Date(),
                    type: 'P2'
                },
                {
                    name: 'Paciente 1',
                    id: '123456789',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 2',
                    id: '987654321',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 3',
                    id: '5550055',
                    last: new Date(),
                    type: 'P2'
                },
                {
                    name: 'Paciente 1',
                    id: '123456789',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 2',
                    id: '987654321',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 3',
                    id: '5550055',
                    last: new Date(),
                    type: 'P2'
                },
                {
                    name: 'Paciente 1',
                    id: '123456789',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 2',
                    id: '987654321',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 3',
                    id: '5550055',
                    last: new Date(),
                    type: 'P2'
                },
                {
                    name: 'Paciente 1',
                    id: '123456789',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 2',
                    id: '987654321',
                    last: new Date(),
                    type: 'P1'
                },
                {
                    name: 'Paciente 3',
                    id: '5550055',
                    last: new Date(),
                    type: 'P2'
                },
            ];

            $scope.Data = Data;

            $scope.clickPatient = function ( id ) {
                console.log( id );
            };
        }
    ] );

    mod.factory( 'Data', function () {
        return {
            filter: {}
        };
    } );

})( angular );
