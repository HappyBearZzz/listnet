!function(e,o){"use strict";e.module("ngRangeSlider",[]).directive("rangeSlider",["$window",function(t){return{restrict:"EA",controller:["$scope",function(t){t.iter=function(e){for(var o=[],t=0;e>=t;t++)o.push(t);return o},t._notInRunLoop=function(){return!t.$root.$$phase},t._supportThrottle=function(){return e.isDefined(o)&&"function"==typeof o.throttle}}],template:'<section><datalist id="numbers"><option ng-repeat="index in iter(max)">{{index}}</option></datalist><input list="numbers" type="range" ng-change="_which = 0" ng-model="_model[0]" min="{{_values.min}}" max="{{_values.max}}" step="{{_step}}" /><input type="range" ng-change="_which = 1" ng-model="_model[1]" min="{{_values.min}}" max="{{_values.max}}" step="{{_step}}" /></section>',replace:!0,require:"ngModel",scope:{model:"=ngModel",throttle:"=",step:"=",max:"=",min:"="},link:function(n,l){n._model=[n.model.from,n.model.to],n._values={min:n.min||0,max:n.max||100},n._step=n.step||1;var m=function(){var o=l.find("input");e.forEach(o,function(o,t){o=e.element(o),o.val(""),o.val(n._model[t])})};n.$watch("model",function(){n._model=[n.model.from,n.model.to],m()},!0);var i=function(){n._values[this]=n[this],m()};n.$watch("min",i.bind("min")),n.$watch("max",i.bind("max")),n._which=0;var a=function(o){if(n.model=e.isArray(n.model)?[o[0],o[1]]:{from:o[0],to:o[1]},n._notInRunLoop())try{n.$apply()}catch(t){}};n.throttle&&n._supportThrottle()&&(a=o.throttle(a,t.parseFloat(n.throttle))),n.$watchCollection("_model",function(){n._model[0]=t.parseFloat(n._model[0]),n._model[1]=t.parseFloat(n._model[1]),0===n._which&&n._model[1]<n._model[0]&&(n._model[1]=n._model[0]),1===n._which&&n._model[0]>n._model[1]&&(n._model[0]=n._model[1]),function(){n._model[0]<n._values.min&&(n._model[0]=n._values.min),n._model[1]<n._values.min&&(n._model[1]=n._values.min),n._model[0]>n._values.max&&(n._model[0]=n._values.max),n._model[1]>n._values.max&&(n._model[1]=n._values.max)}(),a(n._model)})}}}])}(window.angular,window._);