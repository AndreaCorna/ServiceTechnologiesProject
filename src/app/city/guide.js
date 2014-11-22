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
    'common.mapsMarkers' ,
    'common.file-upload'


])
.config(function config( $stateProvider,fileUploadProvider ) {
        $stateProvider.state('guide', {
            url: '/guide/:id',
            views: {
                "main": {
                    controller: 'GuideCtrl',
                    templateUrl: 'city/guide.tpl.html'

                }
            },

            data:{  pageTitle: 'Guide | Trippo ',
            description:''
        }
        })
            .state('guides', {
                url: '/guides',
                parent:"city",
                views: {
                    "content@city": {
                        controller: 'GuidesCtrl',
                        templateUrl: 'city/guides.tpl.html'

                    }
                }   ,
                data:{  pageTitle: 'Guides | Trippo ',
                    description:''
                }

            });

    }
)



.controller('GuidesCtrl', function GuideCtrl($http,$scope,$location,GuideService,$stateParams) {
    $scope.guides =[];

    GuideService.initGuides($stateParams.city_name,function() {
        $scope.guides = GuideService.getGuides($stateParams.city_name);
    });


        /*
        $(function() {
            $('.directUpload').find("input:file").each(function(i, elem) {
                var fileInput    = $(elem);
                var form         = $(fileInput.parents('form:first'));
                var submitButton = form.find('input[type="submit"]');
                var progressBar  = $("<div class='bar'></div>");
                var barContainer = $("<div class='progress'></div>").append(progressBar);
                fileInput.after(barContainer);
                $http({method: 'GET', url: '../guides/s3'}).
                    success(function(result, status, headers, config) {

                        console.log(result);
                        console.log(result.key);

                        fileInput.fileupload({
                            fileInput:       fileInput,
                            url:             result.url,
                            type:            'POST',
                            autoUpload:       true,
                            formData:      {AWSAccessKeyId : result['AWSAccessKeyId'],
                                            key : result['key'],
                                            policy : result['policy'],
                                            signature : result['signature'],
                                            success_action_status : result['success_action_status'],
                                            acl : result['acl']
                            },
                            paramName:        'file', // S3 does not like nested name fields i.e. name="user[avatar_url]"
                            dataType:         'XML',  // S3 returns XML if success_action_status is set to 201
                            replaceFileInput: false,
                            progressall: function (e, data) {
                                var progress = parseInt(data.loaded / data.total * 100, 10);
                                progressBar.css('width', progress + '%')  ;
                            },
                            start: function (e) {
                                submitButton.prop('disabled', true);

                                progressBar.
                                    css('background', 'green').
                                    css('display', 'block').
                                    css('width', '0%').
                                    text("Loading...");
                            },
                            done: function(e, data) {
                                submitButton.prop('disabled', false);
                                progressBar.text("Uploading done");

                                // extract key and generate URL from response
                                var key   = $(data.jqXHR.responseXML).find("Key").text();
                                var url   = '//<%= @s3_direct_post.url.host %>/' + key;

                                // create hidden field
                                var input = $("<input />", { type:'hidden', name: fileInput.attr('name'), value: url })  ;
                                form.append(input);
                            },
                            fail: function(e, data) {
                                console.log("failed");
                                
                                console.log(data);

                                submitButton.prop('disabled', false);

                                progressBar.
                                    css("background", "red").
                                    text("Failed");
                            }

                        });
                            });
                            });
                                });
          */


        /*

        $scope.$on('fileuploadadd', function(event, file){





          /*

            $http({method: 'GET', url: '../guides/s3'}).
                    success(function (result, status, headers, config) {

                    console.log("file");
                    console.log(file);


                    file.form.get(0).setAttribute('action', result.url);

                    console.log("file input");
                    console.log(file.fileInput);
                    $.each(file.files, function (index, file) {
                        $scope.options = {
                            //  fileInput:  file.fileInput,
                            url: result.url,
                            type: 'POST',
                            formData: {AWSAccessKeyId: result['AWSAccessKeyId'],
                                key : result['key'],
                                policy: result['policy'],
                                signature: result['signature'],
                                success_action_status: result['success_action_status'],
                                acl: result['acl']
                            },
                            paramName: 'file', // S3 does not like nested name fields i.e. name="user[avatar_url]"
                            dataType: 'XML'  // S3 returns XML if success_action_status is set to 201

                        };


                        });
                    });



        } ) ;

*/


        console.log("guides different");
        console.log($location.path().split('/').pop() != 'guides');
        console.log("guides equal");
        console.log($location.path().split('/').pop() == 'guides');

        
        console.log($location.path().split('/').pop() );


        $scope.moreInfo = function(id){
        $location.path('guide/'+id);
    } ;





})

.controller('GuideCtrl', function GuideCtrl($http,$location,$scope,GuideService,$stateParams,DatesService) {




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
