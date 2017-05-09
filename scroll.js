var proportionalScroll = function (divIds, frameId, containerId) {

	var container = document.getElementById(containerId);
	var container_clientHeight = container.clientHeight;

	var frame = document.getElementById(frameId);
	var frame_scrollTop = frame.scrollTop;
	var frame_clientHeight = frame.clientHeight;
	var frame_scrollPercentage = frame_scrollTop / (container_clientHeight - frame_clientHeight);

	for (divElement of divs) {

		var currentDiv = document.getElementById(divElement);
		var currentDivScrollHeight = currentDiv.scrollHeight;
		var currentDiv_clientHeight = currentDiv.clientHeight;
		var currentDiv_scrollDestination = frame_scrollPercentage * (currentDivScrollHeight - currentDiv_clientHeight);

		currentDiv.scrollTop = currentDiv_scrollDestination;
	}
}

var scrollThenFix = function (divIds, frameId, containerId) {
	var container = document.getElementById(containerId);
	var container_clientHeight = container.clientHeight;

	var frame = document.getElementById(frameId);
	var frame_scrollTop = frame.scrollTop;
	var frame_clientHeight = frame.clientHeight;
	var frame_scrollDistance = frame_scrollTop + frame_clientHeight;

	for (divElement of divs) {

		var currentDiv = document.getElementById(divElement);
		var currentDiv_clientHeight = currentDiv.clientHeight;

		currentDiv.scrollTop = frame_scrollTop;
	}
}