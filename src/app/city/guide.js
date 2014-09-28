/**
 * Created by Lorenzo on 28/09/14.
 */
angular.module( 'trippo.guide', [
    'ui.router',
    'placeholders',
    'ui.bootstrap' ,
    'trippo.resources',
    'trippo.modal'
])
.config(function config( $stateProvider ) {
        $stateProvider.state('guide', {
            url: '/guide/:id',
            views: {
                "main": {
                    controller: 'GuideCtrl',
                    templateUrl: 'city/guide.tpl.html'

                }
            },
            data: { pageTitle: 'Trippo' }
        });
    }
)


.controller('GuidesCtrl', function GuideCtrl($scope,$location,GuideService,$stateParams) {
    $scope.guides =[];
    GuideService.initGuides($stateParams.city_name,function(){
        $scope.guides = GuideService.getGuides($stateParams.city_name);
        console.log('in controller');

        console.log($scope.guides);

    }) ;

    $scope.moreInfo = function(id){
        $location.path('guide/'+id);
    } ;





})

.controller('GuideCtrl', function GuideCtrl($scope,GuideService,$stateParams) {

    GuideService.initGuide($stateParams.id,function(){
        $scope.guide = GuideService.getGuide($stateParams.id);
        console.log('in controller');

        console.log($scope.guide);

    }) ;

})

.factory('GuideService', function (SharedGuideRes,GuideRes,$stateParams) {
    var guides = [] ;
    /**
     * Handle list of guides which are used by the guides.html view
     * @param city
     * @param callback
     */
    var initGuides=function(city,callback){
        SharedGuideRes.query({city_name : $stateParams.city_name},function(data){
            guides[city] = data;

            if (typeof callback == 'function'){
                callback();
            }

        });

    };

    var getGuides = function(city){
        return guides[city];
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
