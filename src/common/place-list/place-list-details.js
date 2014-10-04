/**
 * Created by Lorenzo on 04/10/14.
 */
var component = angular.module('common.placeListDetails', [
    'common.mapDirections' ,
    'trippo.modal'
]);

component.directive('placeListDetails', function (ModalHandler) {
    'use strict';

    var placeList = {
        restrict: 'EAC',
        scope: {

            itemList: '='      //list of place to show


        },

        replace: true,
        templateUrl: 'place-list/place-list-details.tpl.html',
        link: function (scope, element, attrs) {

            scope.setDetails = function(item) {
                ModalHandler.setDetailsItem(item);
            };
        }

    }   ;
    return placeList;
} );
