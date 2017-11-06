(function ( ng ) {
    let mod = ng.module( 'accountModule' );

    mod.controller( 'accountCtrl', [ '$scope', '$state',
        function ( $scope, $state ) {

            $scope.users = [
                {
                    user: 'dnarvaez27',
                    name: 'David Narvaez',
                    pass: '1234',
                    img: 'https://avatars1.githubusercontent.com/u/12243937?v=4'
                },
                {
                    user: 'jd-vega11',
                    name: 'Juan David Vega',
                    pass: '1234',
                    img: 'https://avatars1.githubusercontent.com/u/25335776?v=4'
                },
                {
                    user: 'jd-chaves',
                    name: 'Juan Diego Chaves',
                    pass: '1234',
                    img: 'https://avatars2.githubusercontent.com/u/25336887?v=4'
                },
                {
                    user: 's-cortes',
                    name: 'Santiago Cortés',
                    pass: '1234',
                    img: 'https://avatars1.githubusercontent.com/u/25346635?v=4'
                },
            ];


            $scope.onSubmit = function () {
                let user = document.getElementById( 'username' ).value;
                let pswd = document.getElementById( 'password' ).value;

                let res = verifyUser( user, pswd );
                if ( res ) {
                    $state.go( 'profile', { userLogin: res.user, user: res } );
                }
            };

            $scope.goToSignUp = function () {
                console.log( 'Signup' );
            };

            function verifyUser( login, pass ) {
                let res = null;
                $scope.users.some( function ( user ) {
                    if ( user.user === login && user.pass === pass ) {
                        res = user;
                        return true;
                    }
                } );
                return res;
            }
        }
    ] );
})( angular );
