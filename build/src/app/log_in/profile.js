angular.module( 'trippo.profile', [
    'Devise',
    'trippo.resources'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'profile', {
            url: '/profile',
            views: {
                "main": {
                    controller: 'ProfileCtrl',
                    templateUrl: 'log_in/profile.tpl.html'
                }
            },
            data:{ pageTitle: 'Profile' }
        });
    })

    .controller('ProfileCtrl', function ProfileController($scope, Auth, $stateParams, ProfileService, $location){

        Auth.currentUser().then(function(user){
            $scope.email = user.email;
        });

        $scope.guides =[];

        ProfileService.initGuides(function() {
            $scope.guides = ProfileService.getGuides();
        });

        $scope.moreInfo = function(id) {
            $location.path('guide/' + id);
        };

    })

.factory('ProfileService', function (ProfileGuideRes,GuideRes) {
    var guides = [] ;
    /**
     * Handle list of guides which are used by the guides.html view
     * @param city
     * @param callback
     */
    var initGuides=function(callback){
        ProfileGuideRes.query(function(data){
            guides = data;

            if (typeof callback == 'function'){
                callback();
            }

        });

    };

    var getGuides = function(){
        return guides;
    };


    var guide;
    var initGuide=function(id,callback){
        GuideRes.get({id : id},function(data){
            guide = data;

            if (typeof callback == 'function'){
                callback();
            }

        });

    };



    var getGuide =function(id){
        return guide;

    }  ;
    return{
        initGuides :initGuides,
        getGuides : getGuides ,

        initGuide : initGuide,
        getGuide : getGuide
    }  ;

});