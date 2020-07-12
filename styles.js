(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\nHTML {\n  height: 100%;\n  min-height: 100%;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  background: url('task-management.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #eee;\n  font-family: 'Poppins';\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n  border-bottom: 2px solid grey;\n  height: 10vh;\n}\n\nnav ul {\n  margin: 0px;\n  /* padding-top: 10px; */\n  /* padding: 0 2%; */\n}\n\na:hover {\n  text-decoration: none !important;\n}\n\nnav ul li a {\n  color: #84cde6;\n  text-decoration: none !important;\n}\n\nnav ul:first-of-type li a {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\nnav ul:last-of-type li {\n  margin-right: 10px;\n}\n\nnav ul li {\n  display: inline-block;\n}\n\nheader {\n  height: 430px;\n}\n\nheader div {\n  width: 70%;\n  margin: 0 auto;\n  display: block;\n  position: relative;\n}\n\nheader div h1 {\n  font-size: 6rem;\n  line-height: 6rem;\n  margin-bottom: -10px;\n}\n\nheader div img {\n  position: absolute;\n  right: 0px;\n  top: -140px;\n  width: 100%;\n  max-width: 700px;\n}\n\n.main {\n  width: 100%;\n  height: 90vh;\n  /* border-radius: 10px; */\n  /* margin: 0 auto; */\n  background: #eee;\n  /* padding: 10px 0; */\n  color: #222;\n  text-align: center;\n}\n\n.main img {\n  margin: 0 auto;\n  width: 80%;\n}\n\n.main p {\n  margin: 20px auto;\n}\n\n.logout {\n  background: #84cde6;\n  color: #fff;\n  border: none;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 4px;\n}\n\nform {\n  /* background: #eee; */\n  color: #222;\n  width: 25%;\n  height: 90vh;\n  background: #fff;\n  /* margin: 0 auto 50px auto; */\n  padding: 10px;\n  text-align: center;\n  /* border-radius: 10px; */\n  align-self: flex-end;\n  position: absolute;\n  right: 0;\n  /* border: 1px solid black; */\n}\n\nform p {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\nform label,\nform input {\n  display: block;\n  margin: 10px auto;\n}\n\nform input {\n  border: none;\n  background: none;\n  border-bottom: 1px solid #222;\n  padding: 10px;\n  width: 90%;\n  text-align: center;\n  font-size: 1.2rem;\n  border-radius: 5px;\n}\n\nform input[type='submit'] {\n  margin-top: 20px;\n  width: 37%;\n  border: none;\n  background: #84cde6; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */\n  color: #fff;\n  padding: 12px;\n  font-size: 1.2rem;\n  border-radius: 4px;\n}\n\n.course {\n  display: flex;\n\n  background: #fff;\n}\n\n.elem {\n  width: auto;\n  height: auto;\n  position: relative;\n}\n\n.elem::before {\n  content: '';\n  height: 315px;\n  width: 400px;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n#videos {\n  width: 100%;\n  height: 90vh;\n  overflow: scroll;\n}\n\n#videos__main {\n  height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\niframe {\n  margin: 2rem 0 0 2rem;\n  width: 810px;\n  height: 570px;\n}\n\n.side_video {\n  width: 85%;\n  height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTs7QUFFL0U7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1Q0FBcUQ7RUFDckQsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFDRDtFQUNFLGVBQWU7RUFDZixpQ0FBaUM7Q0FDbEM7O0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0NBQ25COztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7Q0FDdEI7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLGVBQWU7RUFDZixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULDhCQUE4QjtDQUMvQjs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkI7O0FBRUQ7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0IsQ0FBQywrQkFBK0IsQ0FBQyxnQ0FBZ0M7RUFDckYsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsY0FBYzs7RUFFZCxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7Q0FDVDs7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0NBQ2Y7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5IVE1MIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2ltYWdlcy90YXNrLW1hbmFnZW1lbnQuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIGhlaWdodDogMTB2aDtcbn1cblxubmF2IHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC8qIHBhZGRpbmctdG9wOiAxMHB4OyAqL1xuICAvKiBwYWRkaW5nOiAwIDIlOyAqL1xufVxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxubmF2IHVsIGxpIGEge1xuICBjb2xvcjogIzg0Y2RlNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5uYXYgdWw6Zmlyc3Qtb2YtdHlwZSBsaSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxubmF2IHVsOmxhc3Qtb2YtdHlwZSBsaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxubmF2IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDQzMHB4O1xufVxuXG5oZWFkZXIgZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlciBkaXYgaDEge1xuICBmb250LXNpemU6IDZyZW07XG4gIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cbmhlYWRlciBkaXYgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IC0xNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG4ubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAvKiBwYWRkaW5nOiAxMHB4IDA7ICovXG4gIGNvbG9yOiAjMjIyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbiBpbWcge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm1haW4gcCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ubG9nb3V0IHtcbiAgYmFja2dyb3VuZDogIzg0Y2RlNjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmZvcm0ge1xuICAvKiBiYWNrZ3JvdW5kOiAjZWVlOyAqL1xuICBjb2xvcjogIzIyMjtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBtYXJnaW46IDAgYXV0byA1MHB4IGF1dG87ICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xufVxuZm9ybSBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5mb3JtIGxhYmVsLFxuZm9ybSBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAzNyU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzg0Y2RlNjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqLyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jb3Vyc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZWxlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVsZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDMxNXB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbiN2aWRlb3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4jdmlkZW9zX19tYWluIHtcbiAgaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pZnJhbWUge1xuICBtYXJnaW46IDJyZW0gMCAwIDJyZW07XG4gIHdpZHRoOiA4MTBweDtcbiAgaGVpZ2h0OiA1NzBweDtcbn1cbi5zaWRlX3ZpZGVvIHtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\angular\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map