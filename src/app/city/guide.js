/**
 * Created by Lorenzo on 28/09/14.
 */
angular.module( 'trippo.guide', [
    'ui.router',
    'placeholders',
    'ui.bootstrap' ,
    'trippo.resources',
    'trippo.modal',
    'trippo.plan'
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

.controller('GuideCtrl', function GuideCtrl($scope,GuideService,$stateParams,DatesService) {

    GuideService.initGuide($stateParams.id,function(){
        $scope.guide = GuideService.getGuide($stateParams.id);
        console.log('in controller');

        console.log($scope.guide);

    }) ;


    $scope.makeMoment=function(day){
        return moment(day,DatesService.dateFormat) ;
    } ;

    $scope.getPlaces = function(day){
            return day.schedule;
        } ;

        /**
         *MAPS HANDLING
         * current start and destination variable for the map
         */

        $scope.origin=undefined;
        $scope.destination=undefined;
        $scope.setMapsDirections = function (start,day) {
            $scope.selectedItems = $scope.getPlaces(day)  ;
            $scope.origin = start;
            var index_dest = $scope.selectedItems.indexOf(start)+1;
            $scope.destination = ($scope.selectedItems[index_dest] === undefined) ? $scope.selectedItems[index_dest-1] : $scope.selectedItems[index_dest];

            $scope.currentMarker =undefined;
            $scope.currentSelectedMap  = {place :$scope.origin, type:"direction"};
        };

        $scope.currentMarker = undefined;
        $scope.setMapsMarker = function (item) {
            $scope.currentMarker = item  ;
            //making undefined origin and destination because no more available in map.. Important to allow update of the value
            $scope.origin = undefined;
            $scope.destination =undefined;
            $scope.currentSelectedMap  = {place :$scope.currentMarker, type:"marker"};


        };

        //keep track of which is the last item pressed which is linked to origin and destination of the map (used to highline this item)
        $scope.currentSelectedMap = undefined;
        $scope.isCurrentMap= function(value,type){

            if ( $scope.currentSelectedMap!== undefined  && value == $scope.currentSelectedMap.place && type == $scope.currentSelectedMap.type) {
                return true;
            }
            return false;
        } ;


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
