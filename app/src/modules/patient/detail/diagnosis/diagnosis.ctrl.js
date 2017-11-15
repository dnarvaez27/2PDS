(function ( ng ) {
    let mod = ng.module( 'patientModule' );

    mod.controller( 'diagnosisCtrl', [ '$scope', '$http',
        function ( $scope, $http ) {
            $http.get( 'app/utils/data/json.json' )
                 .then( function ( response ) {
                     let json = response.data.snapshots;
                     let arr = json.filter( function ( obj ) {
                         return 'enriched_text' in obj.snapshot;
                     } );
                     let last = arr[ arr.length - 1 ].snapshot.enriched_text;

                     $scope.diagnosis = {
                         concepts: last.concepts,
                         categories: last.categories
                     };

                     $scope.diagnosis.categories.forEach( function ( item ) {
                         item.label = item.label.replaceAll( '/', ',' ).substr( 1 );
                     } );

                 } );

            $scope.$on( 'renderDone', function () {
                console.log( 'done' );
                document.getElementById( 'categories-progresses' )
                        .childNodes.forEach( function ( item ) {
                    if ( item instanceof Element ) {
                        console.log( item );
                        let attr = document.createAttribute( 'reload' );
                        attr.value = 'true';
                        let element = item.querySelector( 'round-progress' );
                        console.log( element );
                        element.setAttributeNode( attr );
                    }
                } );

                document.getElementById( 'concepts-progresses' )
                        .childNodes.forEach( function ( item ) {
                    if ( item instanceof Element ) {
                        console.log( item );
                        let attr = document.createAttribute( 'reload' );
                        attr.value = 'true';
                        let element = item.querySelector( 'round-progress' );
                        console.log( element );
                        element.setAttributeNode( attr );
                    }
                } );

                setListeners();
            } );

            function setListeners() {
                document.querySelectorAll( 'round-progress' ).forEach( function ( item ) {
                    item.__proto__.addMouseListener.call( item, modal );
                } );
            }
        }
    ] );
})( angular );
