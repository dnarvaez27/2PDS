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
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Esta Canet',
                'id': 10,
                'last': '6/4/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Bartolemo Lewerenz',
                'id': 29,
                'last': '11/9/2016',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Cindy Grestie',
                'id': 36,
                'last': '5/20/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Shae Korous',
                'id': 53,
                'last': '3/7/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Luise Sommerlin',
                'id': 44,
                'last': '6/17/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Kattie Pate',
                'id': 2,
                'last': '3/7/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Gallard Banane',
                'id': 60,
                'last': '11/21/2016',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Estell Kemetz',
                'id': 77,
                'last': '8/4/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Jean Bricham',
                'id': 36,
                'last': '12/26/2016',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Sarita D\'Alesio',
                'id': 81,
                'last': '5/8/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Rudolf Osbaldstone',
                'id': 93,
                'last': '8/4/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Hannie McKennan',
                'id': 71,
                'last': '8/9/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Andra Filan',
                'id': 71,
                'last': '9/10/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Gabriel Dewett',
                'id': 45,
                'last': '8/13/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Imelda Foulis',
                'id': 71,
                'last': '4/12/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Abigail Cunnow',
                'id': 78,
                'last': '12/12/2016',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Shawn O\'Ferris',
                'id': 40,
                'last': '6/1/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Cayla Bonus',
                'id': 57,
                'last': '3/13/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Bennie Aberkirdo',
                'id': 39,
                'last': '6/26/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Belle Dummett',
                'id': 79,
                'last': '5/12/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Sari Dubarry',
                'id': 93,
                'last': '2/8/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Alaster Colenutt',
                'id': 53,
                'last': '5/6/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Aila Sharplin',
                'id': 96,
                'last': '7/29/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Brian Chiplin',
                'id': 3,
                'last': '5/15/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Bond Tyt',
                'id': 37,
                'last': '12/7/2016',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Serge Pencost',
                'id': 18,
                'last': '10/19/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Penny Burfield',
                'id': 100,
                'last': '8/9/2017',
                'type': null,
                'img': null,
                'gender': 'F'
            }, {
                'name': 'Nessi Blanking',
                'id': 9,
                'last': '11/5/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            }, {
                'name': 'Caesar Walasik',
                'id': 68,
                'last': '11/4/2017',
                'type': null,
                'img': null,
                'gender': 'M'
            } ];

            let temp = search( $stateParams.id );
            temp.age = 24;
            temp.rh = 'A+';
            temp.phone = '+57 555-55-555';
            temp.mail = 'pac@email.com';
            temp.type = 'P1';
            temp.exams = [
                {
                    'name': 'Oximetría de pulso',
                    'status': 0,
                    'results': { prbpm: 23, spo2: 132 },
                    'date': new Date(),
                    'file': 'oximetria.html'
                },
                {
                    'name': 'Rayos X de Tórax',
                    'status': 1,
                    'results': '',
                    'date': new Date()
                },
                {
                    'name': 'Ecocardiograma (ECG, ultrasonido cardiaco o sonograma)',
                    'status': 1,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Espirometría Simple',
                    'status': 2,
                    'results': '', 'date': new Date(),
                    'file': 'espirometria.html'
                },
                {
                    'name': 'Caminata de 6 minutos',
                    'status': 1,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Doppler o Triplex Arterial Venoso',
                    'status': -1,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Electrocardiograma (EKG)',
                    'status': 1,
                    'results': '', 'date': new Date(),
                    'file': 'ecg.html'
                },
                {
                    'name': 'Gammagrafía pulmonar de ventilación/perfusión',
                    'status': 0,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Ecocardiograma Transesofágico',
                    'status': 2,
                    'results': '', 'date': new Date()
                },
                {
                    'name': 'Espirometría Forzada',
                    'status': -1,
                    'results': '', 'date': new Date()
                }
            ];

            if ( !temp.img || temp.img === '' ) {
                temp.img = temp.gender === 'M' ? 'app/utils/imgs/male.png' : 'app/utils/imgs/female.png';
            }

            PatientData.setPatient( temp );
            $scope.currentPatient = PatientData.patient;

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

            $scope.seeExam = function ( obj ) {
                $scope.$parent.$parent.getStatus = $scope.getStatus;
                $scope.$parent.$parent.examen = obj;
                $scope.$parent.$parent.dialogsrc = 'app/src/modules/patient/detail/patient.modal.html';
                $( '#modal' ).modal( 'show' );
            };

            //TODO
            function search( id ) {
                let rta = null;
                users.some( function ( item ) {
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
