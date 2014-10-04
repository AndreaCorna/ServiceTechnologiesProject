/**
 * Created by Lorenzo on 28/09/14.
 */
angular.module( 'trippo.guide', [
    'ui.router',
    'placeholders',
    'ui.bootstrap' ,
    'trippo.resources',
    'trippo.modal',
    'trippo.plan',
    'common.placeListMaps' ,
    'common.placeListDetails' ,
    'common.mapsMarkers'
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
        })
            .state('guides', {
                url: '/guides',
                parent:"city",
                views: {
                    "content@city": {
                        controller: 'GuidesCtrl',
                        templateUrl: 'city/guides.tpl.html'

                    }
                }

            });
    }
)


.controller('GuidesCtrl', function GuideCtrl($scope,$location,GuideService,$stateParams) {
    $scope.guides =[];
    GuideService.initGuides($stateParams.city_name,function(){
        $scope.guides = GuideService.getGuides($stateParams.city_name);


    }) ;
        console.log("guides different");
        console.log($location.path().split('/').pop() != 'guides');
        console.log("guides equal");
        console.log($location.path().split('/').pop() == 'guides');

        
        console.log($location.path().split('/').pop() );


        $scope.moreInfo = function(id){
        $location.path('guide/'+id);
    } ;





})

.controller('GuideCtrl', function GuideCtrl($location,$scope,GuideService,$stateParams,DatesService) {

    GuideService.initGuide($stateParams.id,function(){
        $scope.guide = GuideService.getGuide($stateParams.id);
        console.log( $scope.guide);
        initMarkersInMap($scope.guide);



    }) ;
    $scope.markerArraySelected= [];
    var initMarkersInMap = function (guide){

         guide.days.map(function(day){
             console.log("day");

             console.log(day);

             var toAdd = day.schedule.filter(function(place){
                 console.log(place);


                 return $scope.markerArraySelected.filter(function(item){
                     return item.google_id == place.google_id;
                 }).length === 0;
                 

             }) ;
             console.log(" to add marker list");

             console.log(toAdd);
             console.log(" before concat");
             console.log($scope.markerArraySelected);

             $scope.markerArraySelected = $scope.markerArraySelected.concat(toAdd);
             console.log(" after concat");
             console.log($scope.markerArraySelected);


         }) ;




    } ;

    $scope.makeMoment=function(day){
        return moment(day,DatesService.dateFormat) ;
    } ;

    $scope.getPlaces = function(day){

        return day.schedule;
        } ;

    $scope.placeViews = ["DETAILS VIEW","MAPS VIEW"]   ;
    $scope.currentView =  $scope.placeViews[0];
    $scope.changeView = function() {
        var index =   $scope.placeViews.indexOf($scope.currentView);
        index++;
        console.log(index);
        console.log($scope.placeViews.length);


        if (index == $scope.placeViews.length){
            index = 0;
        }
        $scope.currentView = $scope.placeViews[index];



    }  ;





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
