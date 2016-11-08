// Helper function to get an element's exact position
export function GetPosition(el) {
	var xPos = 0;
	var yPos = 0;

	while (el) {
	if (el.tagName == "BODY") {
		// deal with browser quirks with body/window/document and page scroll
		var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
		var yScroll = el.scrollTop || document.documentElement.scrollTop;

		xPos += (el.offsetLeft - xScroll + el.clientLeft);
		yPos += (el.offsetTop - yScroll + el.clientTop);
	} else {
		// for all other non-BODY elements
		xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
		yPos += (el.offsetTop - el.scrollTop + el.clientTop);
	}

	el = el.offsetParent;
	}
	return {
	x: xPos,
	y: yPos
	};
}

export function AddEventListener(element, event, listener) {
    if (element.attachEvent) {
        
        element.attachEvent('on' + event, listener);
        
    } else if (element.addEventListener) {

        element.addEventListener(event, listener, false);
    }
}

/**
* Enable dragging on a Canvas object
*/
export function EnableDragging(ctx, element, listener) {
    
    var mousedown = false;

    addEventListener(element, 'mousedown', function(evt) { mousedown = true;  });
    addEventListener(element, 'mouseup',   function(evt) { mousedown = false;  });
    addEventListener(element, 'mouseout',  function(evt) { mousedown = false;  });
    addEventListener(element, 'mousemove', function(evt) {

        if (mousedown) {
            
            listener(evt);
        }
    });
}