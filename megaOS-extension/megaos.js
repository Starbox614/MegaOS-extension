/*
this is the Snap! extension for my MegaOS project.
*/

SnapExtensions.primitives.set(
  'Starbx_CreateWindow(url,pro)',
  function (url, http) {
   let n = window.open(http + url, "", "_blank");
   return n
  }
);

SnapExtensions.primitives.set(
  'Starbx_WindowDelStatus(win)',
  function (win) {
   return win.closed
  }
);

SnapExtensions.primitives.set(
  'Starbx_WindowDelete(win)',
  function (win) {
   win.close()
  }
);

SnapExtensions.primitives.set(
  'Starbx_InEditor',
  function () {
   return location.href === parent.location.href;
  }
);

SnapExtensions.primitives.set(
  'Starbx_SetCursorURL(link)',
  function (link) {
   document.getElementsByTagName("body")[0].style.cursor = "url("+link+"), auto";
  }
);

SnapExtensions.primitives.set(
  'Starbx_SetCursorStyle(type)',
  function (name) {
   document.body.style.cursor = name;
  }
);

SnapExtensions.primitives.set(
  'Starbx_TabNameSet(name)',
  function (tab_name) {
   document.title = tab_name
  }
);


SnapExtensions.primitives.set(
  'iframe_makeSnapIframe(url,x,y)',
  function (url, x, y) {
   let iframe = document.createElement("iframe")
iframe.setAttribute("width",480)
iframe.setAttribute("height",390)
iframe.setAttribute("frameBorder",0)
iframe.setAttribute("allowfullscreen",true)
iframe.setAttribute("allow", "geolocation; microphone;camera")
iframe.setAttribute("style","position:absolute; top:"+y+"px; left:"+x+"px; z-index:50;")
iframe.setAttribute("src",url)
document.getElementById("world").after(iframe)
return iframe
  }
);

SnapExtensions.primitives.set(
  'iframe_PutIframeOnMe(frame, offw, offh, offx, offy)',
  function (iframe, w, h, x, y) {
   let stage = world.children[0].stage;
iframe.style.top = (this.position().y + y).toString() + "px";
iframe.style.left = (this.position().x + x).toString() + "px";
iframe.style.width = (this.width() + w).toString() + "px" ;
iframe.style.height = (this.height() + h).toString() + "px";
  }
);

SnapExtensions.primitives.set(
  'iframe_deleteAllIframes',
  function () {
   let iframes = document.getElementsByTagName("iframe")

for (i = 0;i<=iframes.length;i++) {
iframes[i].remove();
}
  }
);

SnapExtensions.primitives.set(
  'iframe_deleteHTMLElement(element)',
  function (iframe) {
   iframe.remove()
  }
);

SnapExtensions.primitives.set(
  'iframe_hide(iframe)',
  function (iframe) {
   iframe.style.zIndex = -1
  }
);

SnapExtensions.primitives.set(
  'iframe_show(iframe)',
  function (iframe) {
   iframe.style.zIndex = 1
  }
);

SnapExtensions.primitives.set(
  'iframe_hideAll',
  function () {
   let iframes = document.getElementsByTagName("iframe")

for (i = 0;i<=iframes.length;i++) {
iframes[i].style.zIndex = -1
}
  }
);


SnapExtensions.primitives.set(
  'iframe_runProject(iframe)',
  function (iframe) {
        let world = iframe.contentWindow.world;
        let ide = world.children[0];
     
        ide.stage.threads.pauseCustomHatBlocks = false;
        ide.runScripts();
        if (ide.embedOverlay) {
            ide.embedOverlay.destroy();
            ide.embedPlayButton.destroy();
        }
    
    world.worldCanvas.focus();
  };
  
);

/*
SnapExtensions.primitives.set(
  'iframe_stopProject(iframe)',
  function () {
   
}
  }
);


SnapExtensions.primitives.set(
  'iframe_pauseProject(iframe)',
  function () {
   
}
  }
);
*/

// I got this from @ego-lay_atman-bay

/* (original comment)
script based on @alessandrito123's script https://forum.snap.berkeley.edu/t/how-do-you-get-the-script-pic-of-a-script-using-js/9765/2
*/

SnapExtensions.primitives.set(
    'script_pic(script)',
    function(script) {
        script = script.expression;
        if (!script)
            return new Costume(newCanvas(new Point(0, 0), true), "empty");
        if (script instanceof Array) {
            script = script[0];
        }
        return new Costume(script.fullImage(), script.selector);
    }
);
