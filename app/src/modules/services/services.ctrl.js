(function ( ng ) {
    let mod = ng.module( 'servicesModule' );

    mod.controller( 'servicesCtrl', [ '$scope',
        function ( $scope ) {
            $scope.goMenu( 1 );

            $scope.services = [
                {
                    name: 'Recolección de Información',
                    description: 'Recolección de información relevante sobre el paciente a tratar, los síntomas que presenta y posibles resultados de exámenes de laboratorio realizados con anterioridad',
                    color:'#009696'
                },
                {
                    name: 'Analizar la información',
                    description: 'Análisis de la información suministrada con base en algunas técnicas de inteligencia artificial como los árboles de diagnóstico. Este análisis se basará en estadísticas previas e información teórica relevante a la enfermedad que permite enfocar el estudio delimitando el espectro del diagnóstico',
                    color:'#dcb40a'
                },
                {
                    name: 'Presentación de resultados',
                    description: 'Presentación de resultados con base en el análisis previo.',
                    color:'#9dd838'
                },
                {
                    name: 'Recolectar nueva información',
                    description: 'Recolección de nueva información que surge como resultado del proceso previamente descrito',
                    color:'#1d4263'
                }
            ];
        }
    ] );
})( angular );
