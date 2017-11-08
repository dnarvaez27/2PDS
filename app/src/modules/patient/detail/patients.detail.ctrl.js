(function ( ng ) {
    let mod = ng.module( 'patientModule' );

    mod.controller( 'patientDetailCtrl', [ '$scope', '$stateParams', 'PatientData', '$state',
        function ( $scope, $stateParams, PatientData, $state ) {
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
            temp.address = 'Calle 19 # 1-46';
            temp.city = 'Bogotá';
            temp.birth = new Date();
            temp.rh = 'A+';
            temp.phone = '+57 555-55-555';
            temp.mail = 'pac@email.com';
            temp.type = 'P1';
            temp.status = {
                height: 178,
                weight: 64,
                race: 'Caucasian'
            };
            temp.exams = [
                [
                    {
                        name: 'Oximetría de pulso',
                        status: 0,
                        results: { PRbpm: 28, SpO2: 120 },
                        date: new Date(),
                        file: 'oximetria.html'
                    },
                    {
                        name: 'Rayos X de Tórax',
                        status: 1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Electrocardiograma (EKG)',
                        status: 2,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Ecocardiograma (ECG, ultrasonido cardiaco o sonograma)',
                        status: 2,
                        results: {
                            freq_card: 60,
                            ritm_card: 128,
                            incl_cor: 12,
                            hallazgos: { hipertrofia: false, crec_auriculas: true, ventriculos: true }
                        },
                        date: new Date(),
                        file: 'ecg.html'
                    },
                    {
                        name: 'Espirometría	',
                        status: 2,
                        results: { vol_corr: 132, vol_ins: 45, vol_esp: 38 },
                        date: new Date(),
                        file: 'espirometria.html'
                    },
                    {
                        name: 'Caminata de 6 minutos',
                        status: 1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Doppler o Triplex Arterial Venoso',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    }
                ],
                [
                    {
                        name: 'Ecocardiograma Transesofágico',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Gammagrafía pulmonar de ventilación/perfusión',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Tomografía Axial Computarizada de Tórax (TAC)',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Imagen por Resonancia Magnética',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Cateterismo cardíaco derecho	',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Arteriografía pulmonar',
                        status: 1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Determinación de Clase Funcional',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Exámenes genéticos',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    },
                    {
                        name: 'Biopsia de pulmón',
                        status: -1,
                        results: {},
                        date: new Date(),
                        file: ''
                    }
                ]
            ];
            temp.history = [
                { date: new Date(), type: 'Urgency', description: 'Problems to breathe' },
                { date: new Date(), type: 'Specialist', description: 'Pulmonologist' }
            ];

            if ( !temp.img || temp.img === '' ) {
                temp.img = temp.gender === 'M' ? 'app/utils/imgs/male.png' : 'app/utils/imgs/female.png';
            }

            PatientData.setPatient( temp );
            $scope.currentPatient = PatientData.patient;

            $scope.seeExams = function () {
                $state.go( 'patientExams' );
            };
            $scope.seeHistory = function () {
                $state.go( 'patientHistory' );
            };
            $scope.seeDiagnosis = function () {
                $state.go( 'patientDiagnosis' );
            };

            // $scope.seeHistory();

            //TODO
            function search( id ) {
                let rta = null;
                users.some( function ( item ) {
                    if ( parseInt( item.id ) === parseInt( id ) ) {
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
