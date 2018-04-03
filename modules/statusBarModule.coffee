# Add the following line to your project in Framer Studio.
# statusBarModule = require 'statusBarModule'
# Copy the status bar design component into your project
# Call the setStatusBarPlacement at the end of your project to ensure that it stays on top


# function to align and keep status bar at top right
exports.setStatusBarPlacement = () ->
	statusBar.y = Align.top()
	statusBar.x = Align.left()
	statusBar.bringToFront()

# function to set our status bar time to the current time
exports.setStatusBarTime = () ->
	date = new Date
	day = date.getDay()
	minute = date.getMinutes()
	hour = date.getHours()
	
	if hour > 12
		hour = hour - 12
	if minute < 10
		minute = '0' + minute 
	
	statusBar_time.text = "#{hour}:#{minute}"
	
	Utils.delay 30, ->
		exports.setStatusBarTime()

# init your status bar with either black or white fill
exports.setStatusBarState = (stateToInit) ->
	
	# set the states for our status bar and outline the various components
	statusBarStates = ['white', 'black']
	statusBarComponents = [statusBar_battery, statusBar_signal, statusBar_wifi, statusBar_time]

	# loop through and assign our states to each component
	for stateIndex in statusBarStates
		for componentIndex in statusBarComponents
			if componentIndex == statusBar_time
				componentIndex.states[stateIndex] = 
					color: stateIndex
			else
				componentIndex.states[stateIndex] = 
					fill: stateIndex
					
	for component in statusBarComponents
		component.stateSwitch(stateToInit)