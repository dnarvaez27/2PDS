(function ( ng ) {
    let mod = ng.module( 'projectModule' );

    mod.controller( 'projectCtrl', [ '$scope',
        function ( $scope ) {
            $scope.goMenu( 2 );
            $scope.team = [
                {
                    name: 'David Narvaez Guerrero',
                    title: 'Sofware and Computer Engineer Student',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, dolor a fringilla sodales, nulla libero aliquam dolor, at tempor felis risus id enim. Nullam consequat, turpis at aliquam lacinia, lorem eros pellentesque lacus, vitae lobortis neque velit ut ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam cursus aliquet velit, vitae tincidunt arcu commodo eu. Duis posuere quam ex. Praesent ut ligula auctor, fermentum nisl at, egestas ante. Vivamus lectus nibh, mattis at justo non, placerat placerat eros. Proin eleifend orci in nisl interdum, non euismod sem hendrerit. Pellentesque efficitur faucibus ante, vitae consectetur nibh. Donec mattis sapien elit, sed gravida orci rhoncus in.',
                    img: 'https://avatars1.githubusercontent.com/u/12243937?v=4'
                },
                {
                    name: 'Juan David Vega',
                    title: 'Sofware and Computer Engineer Student',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, dolor a fringilla sodales, nulla libero aliquam dolor, at tempor felis risus id enim. Nullam consequat, turpis at aliquam lacinia, lorem eros pellentesque lacus, vitae lobortis neque velit ut ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam cursus aliquet velit, vitae tincidunt arcu commodo eu. Duis posuere quam ex. Praesent ut ligula auctor, fermentum nisl at, egestas ante. Vivamus lectus nibh, mattis at justo non, placerat placerat eros. Proin eleifend orci in nisl interdum, non euismod sem hendrerit. Pellentesque efficitur faucibus ante, vitae consectetur nibh. Donec mattis sapien elit, sed gravida orci rhoncus in.',
                    img: 'https://avatars1.githubusercontent.com/u/25335776?v=4'
                },
                {
                    name: 'Juan Diego Chaves',
                    title: 'Sofware and Computer Engineer Student',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, dolor a fringilla sodales, nulla libero aliquam dolor, at tempor felis risus id enim. Nullam consequat, turpis at aliquam lacinia, lorem eros pellentesque lacus, vitae lobortis neque velit ut ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam cursus aliquet velit, vitae tincidunt arcu commodo eu. Duis posuere quam ex. Praesent ut ligula auctor, fermentum nisl at, egestas ante. Vivamus lectus nibh, mattis at justo non, placerat placerat eros. Proin eleifend orci in nisl interdum, non euismod sem hendrerit. Pellentesque efficitur faucibus ante, vitae consectetur nibh. Donec mattis sapien elit, sed gravida orci rhoncus in.',
                    img: 'https://avatars2.githubusercontent.com/u/25336887?v=4'
                },
                {
                    name: 'Santiago Cortés',
                    title: 'Sofware and Computer Engineer Student',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, dolor a fringilla sodales, nulla libero aliquam dolor, at tempor felis risus id enim. Nullam consequat, turpis at aliquam lacinia, lorem eros pellentesque lacus, vitae lobortis neque velit ut ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam cursus aliquet velit, vitae tincidunt arcu commodo eu. Duis posuere quam ex. Praesent ut ligula auctor, fermentum nisl at, egestas ante. Vivamus lectus nibh, mattis at justo non, placerat placerat eros. Proin eleifend orci in nisl interdum, non euismod sem hendrerit. Pellentesque efficitur faucibus ante, vitae consectetur nibh. Donec mattis sapien elit, sed gravida orci rhoncus in.',
                    img: 'https://avatars1.githubusercontent.com/u/25346635?v=4'
                }
            ];
        }
    ] );
})( angular );
