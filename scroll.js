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

var scrollToEnd = function (divIds, frameId, containerId) {
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

var scrollThenFix = function (divIds, placeholderDivs, frameId) {
	var frame = document.getElementById(frameId);
	var frame_scrollTop = frame.scrollTop;
	var frame_clientHeight = frame.clientHeight;

	for (var i = 0; i < divIds.length; i++) {

		var currentDiv = document.getElementById(divIds[i]);
		var currentDiv_clientHeight = currentDiv.clientHeight;

		var placeholderDiv = document.getElementById(placeholderDivs[i]);

		if (frame_scrollTop > currentDiv_clientHeight - frame_clientHeight) {
			currentDiv.style.position = "fixed";
			currentDiv.style.top = (-1 * (currentDiv_clientHeight - frame_clientHeight)) + "px";
			currentDiv.style.left = (i * (200 + 20)) + "px";

			placeholderDiv.style.display = "table";
		}
		else {
			currentDiv.style.position = "relative";
			currentDiv.style.top = 0 + "px";
			currentDiv.style.left = 0 + "px";

			placeholderDiv.style.display = "none";
		}

		currentDiv.scrollTop = frame_scrollTop;
	}
}