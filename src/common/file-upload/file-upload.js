/**
 * Created by Lorenzo on 06/10/14.
 */

/*
 * jQuery File Upload Plugin Angular JS Example 1.2.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global window, angular */

    angular.module('demo', [
        'blueimp.fileupload'
    ])
        .config([
            '$httpProvider', 'fileUploadProvider',
            function ($httpProvider, fileUploadProvider) {
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                fileUploadProvider.defaults.redirect = window.location.href.replace(
                    /\/[^\/]*$/,
                    '/cors/result.html?%s'
                );


                    // Demo settings:
                    angular.extend(fileUploadProvider.defaults, {
                        // Enable image resizing, except for Android and Opera,
                        // which actually support image resizing, but fail to
                        // send Blob objects via XHR requests:
                        disableImageResize: /Android(?!.*Chrome)|Opera/
                            .test(window.navigator.userAgent),
                        maxFileSize: 5000000,
                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                    });
                fileUploadProvider.defaults.handleResponse = function (e,data){
                    console.log("response data");
                    console.log(data);
                    console.log("result data");
                    console.log(data.result);
                    console.log("files");
                    console.log(data.result.files);



                    var location = $(data.result).find("Location").text();
                    var key = $(data.result).find("Key").text();
                    console.log("loacation");

                    console.log(location);

                    console.log("name");
                    console.log(key.split('/').pop());
                    console.log(key.split('/').pop());


                     var file = {
                        deleteType : 'DELETE',
                        deleteUrl : location ,
                        name : key.split('/').pop() ,
                        size :137651,
                        thumbnailUrl : location,
                        type : 'image/jpeg' ,
                        url : location
                    }
                           ;
                    console.log("data.files before");
                    console.log(data.files);




                    if (file) {
                        console.log("repalcing data files");
                        data.scope.queue = data.scope.queue.filter(function(item){

                            console.log("item");
                            console.log(item.name);
                            console.log("file");
                            console.log(file.name);


                            return item.name !==  file.name;
                        });
                        data.scope.queue.push(file);
                        console.log(data.files);
                        console.log("data");
                        console.log(data);
                     console.log("data queue");
                     console.log(data.scope.queue);


                    } else if (data.errorThrown ||
                        data.textStatus === 'error') {
                        data.files[0].error = data.errorThrown ||
                            data.textStatus;
                    }

                    /*
                    var files = data.result && data.result.files;
                    if (files) {
                        data.scope.replace(data.files, files);
                        console.log("data queue");
                        console.log(data.scope.queue);
                        // do what you want...
                    } else if (data.errorThrown || data.textStatus === 'error') {
                        data.files[0].error = data.errorThrown ||
                            data.textStatus;
                    }   */

                };


            }
        ])

        .controller('DemoFileUploadController',
            function ($scope, $http) {
                $http({method: 'GET', url: '../guides/s3'}).
                    success(function (result, status, headers, config) {




                        $('#fileupload').get(0).setAttribute('action', result.url);

                        console.log(result.url);

                            $scope.options = {
                                //  fileInput:  file.fileInput,

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
                /*
                $scope.$on('fileuploaddone' ,function(event,file){
                    console.log("file on submit");
                    console.log(file);
                    console.log("form data");
                    console.log(file['formData']);


                    angular.forEach(file.originalFiles, function (value, key) {
                        var auth = {
                            AWSAccessKeyId : file.formData.AWSAccessKeyId ,
                            signature : file.formData.signature
                        }    ;
                        UploadService.setSignature(value.name,auth);
                        console.log(value.name);
                        console.log(UploadService.getSignature(value.name));


                    });


                }) ;  */




            }


        ) ;
        /*
        .factory('UploadService', function () {
            var signatures = []    ;
            return{
                setSignature : function(file ,sign){
                    console.log("set signature");

                    signatures[file] = sign ;
                } ,
                getSignature  :function(file){
                    return signatures[file];
                }
            }   ;

        })
        */




