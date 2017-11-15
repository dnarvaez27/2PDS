(function ( ng ) {

    // let DiscoveryV1 = require( 'watson-developer-cloud/discovery/v1' );
    //
    // let discovery = new DiscoveryV1( {
    //                                      username: '8fa9aa7a-1bb6-4f76-9794-7ee457c284c7',
    //                                      password: 'x0O8gYKIlrQP',
    //                                      version_date: '2017-11-07'
    //                                  } );
    //
    // discovery.query(
    //                      '6a4ba250-bf5e-41f5-aeb0-dac945f38ced',
    //                      '45634d34-f5b1-42b1-bf62-ca72e2c93ff4',
    //                      'version=2017-11-07&count=&offset=&aggregation=term%28enriched_text.concepts.text%2Ccount%3A10%29&filter=&passages=true&deduplicate=false&highlight=true&return=&passages.characters=&passages.count=5&passages.fields=&natural_language_query=Alergies%20reactions',
    //                      function ( error, data ) {
    //                          console.log( JSON.stringify( data, null, 2 ) );
    //                      } );

    let mod = ng.module( 'patientModule' );

    mod.controller( 'diagnosisCtrl', [ '$scope', '$http',
        function ( $scope, $http ) {

            $scope.send = function ( nql ) {
                $scope.results = undefined;
                $http.post( 'http://127.0.0.1:8081/discovery', { 'nlq': nql } )
                     .then( function ( response ) {
                         console.log( 'Hola' );
                         console.log( response.data );
                         $scope.results = [];

                         let results = response.data.results;
                         results.forEach( function ( item ) {

                             console.log( item );

                             let text = item.text;
                             let extracetedMetadata = item.extracted_metadata;
                             let enrichedText = item.enriched_text;

                             enrichedText.categories.forEach( function ( cat ) {
                                 cat.label = cat.label.substr( 1 );
                             } );

                             let obj = {
                                 date: extracetedMetadata.publicationdate,
                                 text: item.text,
                                 concepts: enrichedText.concepts,
                                 categories: enrichedText.categories,
                                 // highlights: item.highlight.text
                             };

                             $scope.results.push( obj );

                             console.log( 123 );


                         } );
                     } );
            };

            $scope.send( 'Alergies reactions' );

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

            $scope.seeHighlights = function ( h ) {
                $scope.$parent.$parent.$parent.highlights = h;
                $scope.$parent.$parent.$parent.dialogsrc = 'app/src/modules/patient/detail/diagnosis/diagnosis.hightlight.modal.html';
                $( '#modal' ).modal( 'show' );
            };

            $scope.seeText = function ( text ) {
                $scope.$parent.$parent.$parent.text = text;
                $scope.$parent.$parent.$parent.dialogsrc = 'app/src/modules/patient/detail/diagnosis/diagnosis.modal.html';
                $( '#modal' ).modal( 'show' );
            };

            function setListeners() {
                document.querySelectorAll( 'round-progress' ).forEach( function ( item ) {
                    item.__proto__.addMouseListener.call( item, modal );
                } );
            }
        }
    ] );
})( angular );
