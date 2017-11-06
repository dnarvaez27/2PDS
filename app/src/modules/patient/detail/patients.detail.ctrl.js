(function ( ng ) {
    let mod = ng.module( 'patientModule' );

    mod.controller( 'patientDetailCtrl', [ '$scope', '$stateParams', 'PatientData',
        function ( $scope, $stateParams, PatientData ) {
            // TODO
            let users = [ {
                'name': 'Charyl Kirton',
                'id': 21,
                'last': '11/27/2016',
                'type': null,
                'img': null
            }, {
                'name': 'Esta Canet',
                'id': 10,
                'last': '6/4/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Bartolemo Lewerenz',
                'id': 29,
                'last': '11/9/2016',
                'type': null,
                'img': null
            }, {
                'name': 'Cindy Grestie',
                'id': 36,
                'last': '5/20/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Shae Korous',
                'id': 53,
                'last': '3/7/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Luise Sommerlin',
                'id': 44,
                'last': '6/17/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Kattie Pate',
                'id': 2,
                'last': '3/7/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Gallard Banane',
                'id': 60,
                'last': '11/21/2016',
                'type': null,
                'img': null
            }, {
                'name': 'Estell Kemetz',
                'id': 77,
                'last': '8/4/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Jean Bricham',
                'id': 36,
                'last': '12/26/2016',
                'type': null,
                'img': null
            }, {
                'name': 'Sarita D\'Alesio',
                'id': 81,
                'last': '5/8/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Rudolf Osbaldstone',
                'id': 93,
                'last': '8/4/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Hannie McKennan',
                'id': 71,
                'last': '8/9/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Andra Filan',
                'id': 71,
                'last': '9/10/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Gabriel Dewett',
                'id': 45,
                'last': '8/13/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Imelda Foulis',
                'id': 71,
                'last': '4/12/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Abigail Cunnow',
                'id': 78,
                'last': '12/12/2016',
                'type': null,
                'img': null
            }, {
                'name': 'Shawn O\'Ferris',
                'id': 40,
                'last': '6/1/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Cayla Bonus',
                'id': 57,
                'last': '3/13/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Bennie Aberkirdo',
                'id': 39,
                'last': '6/26/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Belle Dummett',
                'id': 79,
                'last': '5/12/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Sari Dubarry',
                'id': 93,
                'last': '2/8/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Alaster Colenutt',
                'id': 53,
                'last': '5/6/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Aila Sharplin',
                'id': 96,
                'last': '7/29/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Brian Chiplin',
                'id': 3,
                'last': '5/15/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Bond Tyt',
                'id': 37,
                'last': '12/7/2016',
                'type': null,
                'img': null
            }, {
                'name': 'Serge Pencost',
                'id': 18,
                'last': '10/19/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Penny Burfield',
                'id': 100,
                'last': '8/9/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Nessi Blanking',
                'id': 9,
                'last': '11/5/2017',
                'type': null,
                'img': null
            }, {
                'name': 'Caesar Walasik',
                'id': 68,
                'last': '11/4/2017',
                'type': null,
                'img': null
            } ];

            let temp = search( $stateParams.id );
            temp.age = 24;
            temp.rh = 'A+';
            temp.phone = '+57 555-55-555';
            temp.mail = 'pac@email.com';
            temp.gender = 'F';
            temp.type = 'P1';
            temp.exams = [
                {
                    'name': 'Exámenes de Sangre',
                    'status': 0,
                    'results': '', 
                    'date': new Date(),
                },
                {
                    'name': 'Cateterismo cardíaco',
                    'status': 0,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Radiografía de tórax',
                    'status': -1,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Ecocardiografía',
                    'status': 2,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'ECG',
                    'status': 1,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Pruebas de función pulmonar',
                    'status': 1,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Gammagrafía pulmonar',
                    'status': 2,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Arteriografía pulmonar',
                    'status': -1,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Test de caminata',
                    'status': 0,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Polisomnografía',
                    'status': 2,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Exámenes de búsqueda de problemas autoinmunitarios',
                    'status': 1,
                    'results': '', 'date': new Date()
                }
            ];

            if ( !temp.img || temp.img === '' ) {
                temp.img = temp.gender === 'M' ? 'app/utils/imgs/male.png' : 'app/utils/imgs/female.png';
            }

            PatientData.setPatient( temp );
            $scope.currentPatient = PatientData.patient;

            //TODO
            function search( id ) {
                let rta = null;
                users.some( function ( item ) {
                    console.log( item.id + ':' + id );
                    if ( item.id == id ) {
                        rta = item;
                        return true;
                    }
                } );
                return rta;
            }
        }
    ] );

    mod.factory( 'PatientData', function () {
        return {
            patient: null,
            setPatient: function ( pat ) {
                if ( !this.patient || pat === null ) {
                    this.patient = pat;
                }
            }
        };
    } );
})( angular );
