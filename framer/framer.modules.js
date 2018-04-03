require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"statusBarModule":[function(require,module,exports){
exports.setStatusBarPlacement = function() {
  statusBar.y = Align.top();
  statusBar.x = Align.left();
  return statusBar.bringToFront();
};

exports.setStatusBarTime = function() {
  var date, day, hour, minute;
  date = new Date;
  day = date.getDay();
  minute = date.getMinutes();
  hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  statusBar_time.text = hour + ":" + minute;
  return Utils.delay(30, function() {
    return exports.setStatusBarTime();
  });
};

exports.setStatusBarState = function(stateToInit) {
  var component, componentIndex, i, j, k, len, len1, len2, results, stateIndex, statusBarComponents, statusBarStates;
  statusBarStates = ['white', 'black'];
  statusBarComponents = [statusBar_battery, statusBar_signal, statusBar_wifi, statusBar_time];
  for (i = 0, len = statusBarStates.length; i < len; i++) {
    stateIndex = statusBarStates[i];
    for (j = 0, len1 = statusBarComponents.length; j < len1; j++) {
      componentIndex = statusBarComponents[j];
      if (componentIndex === statusBar_time) {
        componentIndex.states[stateIndex] = {
          color: stateIndex
        };
      } else {
        componentIndex.states[stateIndex] = {
          fill: stateIndex
        };
      }
    }
  }
  results = [];
  for (k = 0, len2 = statusBarComponents.length; k < len2; k++) {
    component = statusBarComponents[k];
    results.push(component.stateSwitch(stateToInit));
  }
  return results;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvc3RhdHVzQmFyTW9kdWxlLmNvZmZlZSIsIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uXG4jIHN0YXR1c0Jhck1vZHVsZSA9IHJlcXVpcmUgJ3N0YXR1c0Jhck1vZHVsZSdcbiMgQ29weSB0aGUgc3RhdHVzIGJhciBkZXNpZ24gY29tcG9uZW50IGludG8geW91ciBwcm9qZWN0XG4jIENhbGwgdGhlIHNldFN0YXR1c0JhclBsYWNlbWVudCBhdCB0aGUgZW5kIG9mIHlvdXIgcHJvamVjdCB0byBlbnN1cmUgdGhhdCBpdCBzdGF5cyBvbiB0b3BcblxuXG4jIGZ1bmN0aW9uIHRvIGFsaWduIGFuZCBrZWVwIHN0YXR1cyBiYXIgYXQgdG9wIHJpZ2h0XG5leHBvcnRzLnNldFN0YXR1c0JhclBsYWNlbWVudCA9ICgpIC0+XG5cdHN0YXR1c0Jhci55ID0gQWxpZ24udG9wKClcblx0c3RhdHVzQmFyLnggPSBBbGlnbi5sZWZ0KClcblx0c3RhdHVzQmFyLmJyaW5nVG9Gcm9udCgpXG5cbiMgZnVuY3Rpb24gdG8gc2V0IG91ciBzdGF0dXMgYmFyIHRpbWUgdG8gdGhlIGN1cnJlbnQgdGltZVxuZXhwb3J0cy5zZXRTdGF0dXNCYXJUaW1lID0gKCkgLT5cblx0ZGF0ZSA9IG5ldyBEYXRlXG5cdGRheSA9IGRhdGUuZ2V0RGF5KClcblx0bWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcblx0aG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuXHRcblx0aWYgaG91ciA+IDEyXG5cdFx0aG91ciA9IGhvdXIgLSAxMlxuXHRpZiBtaW51dGUgPCAxMFxuXHRcdG1pbnV0ZSA9ICcwJyArIG1pbnV0ZSBcblx0XG5cdHN0YXR1c0Jhcl90aW1lLnRleHQgPSBcIiN7aG91cn06I3ttaW51dGV9XCJcblx0XG5cdFV0aWxzLmRlbGF5IDMwLCAtPlxuXHRcdGV4cG9ydHMuc2V0U3RhdHVzQmFyVGltZSgpXG5cbiMgaW5pdCB5b3VyIHN0YXR1cyBiYXIgd2l0aCBlaXRoZXIgYmxhY2sgb3Igd2hpdGUgZmlsbFxuZXhwb3J0cy5zZXRTdGF0dXNCYXJTdGF0ZSA9IChzdGF0ZVRvSW5pdCkgLT5cblx0XG5cdCMgc2V0IHRoZSBzdGF0ZXMgZm9yIG91ciBzdGF0dXMgYmFyIGFuZCBvdXRsaW5lIHRoZSB2YXJpb3VzIGNvbXBvbmVudHNcblx0c3RhdHVzQmFyU3RhdGVzID0gWyd3aGl0ZScsICdibGFjayddXG5cdHN0YXR1c0JhckNvbXBvbmVudHMgPSBbc3RhdHVzQmFyX2JhdHRlcnksIHN0YXR1c0Jhcl9zaWduYWwsIHN0YXR1c0Jhcl93aWZpLCBzdGF0dXNCYXJfdGltZV1cblxuXHQjIGxvb3AgdGhyb3VnaCBhbmQgYXNzaWduIG91ciBzdGF0ZXMgdG8gZWFjaCBjb21wb25lbnRcblx0Zm9yIHN0YXRlSW5kZXggaW4gc3RhdHVzQmFyU3RhdGVzXG5cdFx0Zm9yIGNvbXBvbmVudEluZGV4IGluIHN0YXR1c0JhckNvbXBvbmVudHNcblx0XHRcdGlmIGNvbXBvbmVudEluZGV4ID09IHN0YXR1c0Jhcl90aW1lXG5cdFx0XHRcdGNvbXBvbmVudEluZGV4LnN0YXRlc1tzdGF0ZUluZGV4XSA9IFxuXHRcdFx0XHRcdGNvbG9yOiBzdGF0ZUluZGV4XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbXBvbmVudEluZGV4LnN0YXRlc1tzdGF0ZUluZGV4XSA9IFxuXHRcdFx0XHRcdGZpbGw6IHN0YXRlSW5kZXhcblx0XHRcdFx0XHRcblx0Zm9yIGNvbXBvbmVudCBpbiBzdGF0dXNCYXJDb21wb25lbnRzXG5cdFx0Y29tcG9uZW50LnN0YXRlU3dpdGNoKHN0YXRlVG9Jbml0KSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRElBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7Ozs7QURGbEIsT0FBTyxDQUFDLHFCQUFSLEdBQWdDLFNBQUE7RUFDL0IsU0FBUyxDQUFDLENBQVYsR0FBYyxLQUFLLENBQUMsR0FBTixDQUFBO0VBQ2QsU0FBUyxDQUFDLENBQVYsR0FBYyxLQUFLLENBQUMsSUFBTixDQUFBO1NBQ2QsU0FBUyxDQUFDLFlBQVYsQ0FBQTtBQUgrQjs7QUFNaEMsT0FBTyxDQUFDLGdCQUFSLEdBQTJCLFNBQUE7QUFDMUIsTUFBQTtFQUFBLElBQUEsR0FBTyxJQUFJO0VBQ1gsR0FBQSxHQUFNLElBQUksQ0FBQyxNQUFMLENBQUE7RUFDTixNQUFBLEdBQVMsSUFBSSxDQUFDLFVBQUwsQ0FBQTtFQUNULElBQUEsR0FBTyxJQUFJLENBQUMsUUFBTCxDQUFBO0VBRVAsSUFBRyxJQUFBLEdBQU8sRUFBVjtJQUNDLElBQUEsR0FBTyxJQUFBLEdBQU8sR0FEZjs7RUFFQSxJQUFHLE1BQUEsR0FBUyxFQUFaO0lBQ0MsTUFBQSxHQUFTLEdBQUEsR0FBTSxPQURoQjs7RUFHQSxjQUFjLENBQUMsSUFBZixHQUF5QixJQUFELEdBQU0sR0FBTixHQUFTO1NBRWpDLEtBQUssQ0FBQyxLQUFOLENBQVksRUFBWixFQUFnQixTQUFBO1dBQ2YsT0FBTyxDQUFDLGdCQUFSLENBQUE7RUFEZSxDQUFoQjtBQWIwQjs7QUFpQjNCLE9BQU8sQ0FBQyxpQkFBUixHQUE0QixTQUFDLFdBQUQ7QUFHM0IsTUFBQTtFQUFBLGVBQUEsR0FBa0IsQ0FBQyxPQUFELEVBQVUsT0FBVjtFQUNsQixtQkFBQSxHQUFzQixDQUFDLGlCQUFELEVBQW9CLGdCQUFwQixFQUFzQyxjQUF0QyxFQUFzRCxjQUF0RDtBQUd0QixPQUFBLGlEQUFBOztBQUNDLFNBQUEsdURBQUE7O01BQ0MsSUFBRyxjQUFBLEtBQWtCLGNBQXJCO1FBQ0MsY0FBYyxDQUFDLE1BQU8sQ0FBQSxVQUFBLENBQXRCLEdBQ0M7VUFBQSxLQUFBLEVBQU8sVUFBUDtVQUZGO09BQUEsTUFBQTtRQUlDLGNBQWMsQ0FBQyxNQUFPLENBQUEsVUFBQSxDQUF0QixHQUNDO1VBQUEsSUFBQSxFQUFNLFVBQU47VUFMRjs7QUFERDtBQUREO0FBU0E7T0FBQSx1REFBQTs7aUJBQ0MsU0FBUyxDQUFDLFdBQVYsQ0FBc0IsV0FBdEI7QUFERDs7QUFoQjJCIn0=
