var multipleScroll = function (divIds, frameId, containerId) {

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