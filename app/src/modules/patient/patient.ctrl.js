(function ( ng ) {
    let mod = ng.module( 'patientModule' );

    mod.controller( 'patientsCtrl', [ '$scope', '$state', 'Data', 'PatientData',
        function ( $scope, $state, Data, PatientData ) {

            //TODO
            $scope.patients = [ {
                'name': 'Charyl Kirton',
                'id': 21,
                'last': '11/27/2016',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Esta Canet',
                'id': 10,
                'last': '6/4/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Bartolemo Lewerenz',
                'id': 29,
                'last': '11/9/2016',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Cindy Grestie',
                'id': 36,
                'last': '5/20/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Shae Korous',
                'id': 53,
                'last': '3/7/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Luise Sommerlin',
                'id': 44,
                'last': '6/17/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Kattie Pate',
                'id': 2,
                'last': '3/7/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Gallard Banane',
                'id': 60,
                'last': '11/21/2016',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Estell Kemetz',
                'id': 77,
                'last': '8/4/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Jean Bricham',
                'id': 36,
                'last': '12/26/2016',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Sarita D\'Alesio',
                'id': 81,
                'last': '5/8/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Rudolf Osbaldstone',
                'id': 93,
                'last': '8/4/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Hannie McKennan',
                'id': 71,
                'last': '8/9/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Andra Filan',
                'id': 71,
                'last': '9/10/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Gabriel Dewett',
                'id': 45,
                'last': '8/13/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Imelda Foulis',
                'id': 71,
                'last': '4/12/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Abigail Cunnow',
                'id': 78,
                'last': '12/12/2016',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Shawn O\'Ferris',
                'id': 40,
                'last': '6/1/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Cayla Bonus',
                'id': 57,
                'last': '3/13/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Bennie Aberkirdo',
                'id': 39,
                'last': '6/26/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Belle Dummett',
                'id': 79,
                'last': '5/12/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Sari Dubarry',
                'id': 93,
                'last': '2/8/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Alaster Colenutt',
                'id': 53,
                'last': '5/6/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Aila Sharplin',
                'id': 96,
                'last': '7/29/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Brian Chiplin',
                'id': 3,
                'last': '5/15/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Bond Tyt',
                'id': 37,
                'last': '12/7/2016',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Serge Pencost',
                'id': 18,
                'last': '10/19/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Penny Burfield',
                'id': 100,
                'last': '8/9/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Nessi Blanking',
                'id': 9,
                'last': '11/5/2017',
                'type': 'P1',
                'img': null
            }, {
                'name': 'Caesar Walasik',
                'id': 68,
                'last': '11/4/2017',
                'type': 'P1',
                'img': null
            } ];

            $scope.Data = Data;

            $scope.clickPatient = function ( pos ) {
                Data.data = {};
                let patient = $scope.patients[ pos ];
                PatientData.setPatient( null );
                $state.go( 'patient', { id: patient.id } );
            };
        }
    ] );

    mod.factory( 'Data', function () {
        return {
            data: {}
        };
    } );

})( angular );
