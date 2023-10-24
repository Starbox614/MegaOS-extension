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
