(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/annotations.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/annotations.css ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".video-js.vac-active .vjs-mouse-display, .video-js.vac-active .vjs-big-play-button {\n  display: none !important; }\n\n.video-js.vac-active .vac-marker-owrap, .video-js.vac-active .vac-control {\n  display: block; }\n\n.video-js.vac-active .vjs-control-bar {\n  z-index: 2; }\n\n.video-js.vac-active .vac-player-btn i.vac-player-icon svg {\n  fill: #00A6C2 !important; }\n\n.video-js.vac-active.vjs-has-started .vac-shape {\n  display: block; }\n\n.video-js.vac-disable-play .vjs-control {\n  cursor: default; }\n\n.video-js .vac-hidden {\n  display: none !important; }\n\n.video-js.vac-disable-fullscreen .vac-player-btn {\n  display: none; }\n\n.video-js.vac-disable-play .vac-marker {\n  display: none !important; }\n\n.video-js.vac-disable-play .vjs-play-control, .video-js.vac-disable-play .vjs-play-progress {\n  visibility: hidden !important; }\n\n.video-js .vac-button {\n  transition: all .2s ease-in-out;\n  margin: 10px;\n  line-height: 27px;\n  font-size: 13px;\n  padding: 0;\n  width: calc(100% - 20px);\n  text-align: center;\n  border-radius: 2px;\n  background: #00A6C2;\n  color: white;\n  display: block;\n  cursor: pointer; }\n\n.video-js .vac-button:hover {\n    background-color: #10dcff; }\n\n.video-js .vac-video-cover {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 0, 0, 0.15);\n  cursor: crosshair; }\n\n.video-js .vac-video-cover .vac-video-cover-canvas {\n    width: 100%;\n    height: 100%;\n    position: relative; }\n\n.video-js .vac-video-write-new-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.video-js .vac-video-write-new-wrap.vac-new-comment {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new > div {\n      width: 80%;\n      max-width: 400px;\n      border-radius: 2px;\n      background: rgba(255, 255, 255, 0.85);\n      padding: 20px; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new > div h5 {\n        margin: 0;\n        padding: 0;\n        font-size: 15px;\n        color: #000;\n        font-weight: normal; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new .vac-comment-showbox {\n      border-radius: 1px;\n      background-color: white;\n      margin-top: 20px;\n      width: 100%;\n      border-bottom: 2px solid #ee9828; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new .vac-comment-showbox textarea {\n        border: none;\n        font-size: 13px;\n        color: #383838;\n        line-height: 16px;\n        padding: 8px;\n        box-sizing: border-box;\n        min-height: 110px;\n        width: 100%;\n        resize: none; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new .vac-comment-showbox > div {\n        padding: 10px;\n        box-sizing: content-box;\n        height: 27px; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new .vac-comment-showbox > div button {\n          float: right;\n          width: auto;\n          padding: 0 40px;\n          margin: 0; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new .vac-comment-showbox > div a {\n          float: right;\n          font-size: 12px;\n          text-decoration: underline;\n          line-height: 27px;\n          display: inline-block;\n          color: #383838;\n          cursor: pointer;\n          margin-right: 20px; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new .vac-comment-showbox > div a:hover {\n            color: #FF0000; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new.vac-is-comment {\n      display: block; }\n\n.video-js .vac-video-write-new-wrap .vac-video-write-new.vac-is-comment .vac-comment-showbox {\n        position: absolute;\n        padding: 0;\n        margin: 0;\n        max-width: none; }\n\n.video-js .vac-shape {\n  position: absolute;\n  z-index: 1;\n  background-color: rgba(238, 152, 40, 0.65);\n  border: 2px dotted #ee9828;\n  display: none; }\n\n.video-js .vac-controls, .video-js .vac-add-controls {\n  z-index: 3;\n  position: absolute;\n  border-radius: 2px;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.4);\n  top: 4px;\n  left: 4px;\n  padding: 4px 0 0 0;\n  font-size: 14px;\n  color: white;\n  width: 150px;\n  display: none;\n  text-align: center; }\n\n.video-js .vac-controls i, .video-js .vac-add-controls i {\n    color: #dbdcdc;\n    font-size: 11px;\n    font-style: normal;\n    display: block;\n    padding: 4px 0 0; }\n\n.video-js .vac-controls button, .video-js .vac-add-controls button {\n    transition: all .2s ease-in-out;\n    margin: 10px;\n    line-height: 27px;\n    font-size: 13px;\n    padding: 0;\n    width: calc(100% - 20px);\n    text-align: center;\n    border-radius: 2px;\n    background: #00A6C2;\n    color: white;\n    display: block;\n    cursor: pointer; }\n\n.video-js .vac-controls button:hover, .video-js .vac-add-controls button:hover {\n      background-color: #10dcff; }\n\n.video-js .vac-controls.vac-add-controls button, .video-js .vac-add-controls.vac-add-controls button {\n    background-color: #eed428;\n    color: #383838; }\n\n.video-js .vac-controls.vac-add-controls button:hover, .video-js .vac-add-controls.vac-add-controls button:hover {\n      background-color: #f4e26f; }\n\n.video-js .vac-controls.vac-add-controls a, .video-js .vac-add-controls.vac-add-controls a {\n    margin: 3px auto 8px;\n    text-transform: uppercase;\n    display: inline-block;\n    color: white;\n    cursor: pointer;\n    text-decoration: underline;\n    font-size: 10px; }\n\n.video-js .vac-controls.vac-add-controls a:hover, .video-js .vac-add-controls.vac-add-controls a:hover {\n      color: #FF0000; }\n\n.video-js .vac-controls .vac-annotation-nav, .video-js .vac-controls .vac-video-move, .video-js .vac-add-controls .vac-annotation-nav, .video-js .vac-add-controls .vac-video-move {\n    margin-top: 8px;\n    width: 100%;\n    display: flex;\n    flex-direction: row; }\n\n.video-js .vac-controls .vac-annotation-nav div, .video-js .vac-controls .vac-video-move div, .video-js .vac-add-controls .vac-annotation-nav div, .video-js .vac-add-controls .vac-video-move div {\n      flex: 1;\n      background-color: rgba(0, 0, 0, 0.8);\n      text-align: center;\n      line-height: 22px;\n      color: #eed428;\n      transition: all .2s ease-in-out;\n      cursor: pointer;\n      font-size: 12px; }\n\n.video-js .vac-controls .vac-annotation-nav div:hover, .video-js .vac-controls .vac-video-move div:hover, .video-js .vac-add-controls .vac-annotation-nav div:hover, .video-js .vac-add-controls .vac-video-move div:hover {\n        background-color: #eed428;\n        color: #000; }\n\n.video-js .vac-controls .vac-annotation-nav div.vac-a-prev, .video-js .vac-controls .vac-video-move div.vac-a-prev, .video-js .vac-add-controls .vac-annotation-nav div.vac-a-prev, .video-js .vac-add-controls .vac-video-move div.vac-a-prev {\n        margin-right: 1px; }\n\n.video-js .vac-cursor-tool-tip {\n  position: absolute;\n  border-radius: 100%;\n  z-index: 999;\n  display: inline-block;\n  white-space: nowrap; }\n\n.video-js .vac-player-btn {\n  margin-right: 8px;\n  cursor: pointer; }\n\n.video-js .vac-player-btn i.vac-player-icon svg {\n    fill: white;\n    transition: fill .2s ease-in-out; }\n\n.video-js .vac-player-btn i.vac-player-icon:hover svg {\n    fill: #5ce7ff; }\n\n.video-js .vac-player-btn b {\n    position: absolute;\n    display: inline-block;\n    top: 3px;\n    right: 3px;\n    color: #FFF;\n    height: 14px;\n    line-height: 14px;\n    min-width: 14px;\n    text-align: center;\n    border-radius: 9px;\n    font-size: 10px;\n    font-weight: normal;\n    background-color: #FF0000; }\n\n.video-js .vac-marker-owrap {\n  display: none;\n  z-index: 10;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap {\n    margin: 0 10px;\n    height: 100%;\n    position: relative;\n    flex: auto; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable {\n      position: absolute;\n      width: 7px;\n      margin-left: 0px;\n      height: 30px;\n      bottom: 6px;\n      background: #00A6C2;\n      border-radius: 2px;\n      cursor: pointer;\n      transition: all .2s ease-in-out; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-hovering, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-force-tooltip, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-hovering, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-force-tooltip {\n        opacity: 1 !important;\n        background: #eed428;\n        height: 35px; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-hovering > div, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-force-tooltip > div, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-hovering > div, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-force-tooltip > div {\n          display: block;\n          opacity: 1; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-hovering.vac-ranged-marker, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-force-tooltip.vac-ranged-marker, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-hovering.vac-ranged-marker, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-force-tooltip.vac-ranged-marker {\n          box-shadow: 7px 0 0 0 #eed428 inset;\n          background-color: rgba(238, 212, 40, 0.65); }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-active, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-active {\n        background-color: #eed428; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-active.vac-ranged-marker, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-active.vac-ranged-marker {\n          box-shadow: 7px 0 0 0 #eed428 inset;\n          background-color: rgba(238, 212, 40, 0.65); }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-ranged-marker, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-ranged-marker {\n        box-shadow: 7px 0 0 0 #00A6C2 inset;\n        background-color: rgba(0, 166, 194, 0.65); }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker.vac-marker-draggable, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable.vac-marker-draggable {\n        box-shadow: 7px 0 0 0 #ee9828 inset;\n        background-color: rgba(238, 152, 40, 0.65);\n        cursor: ew-resize;\n        min-width: 7px !important; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker > div, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable > div {\n        width: 100%;\n        position: relative;\n        display: none;\n        opacity: 0;\n        transition: opacity .2s ease-in-out; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker > div span, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable > div span {\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          border-bottom: 1px solid #eed428;\n          display: block;\n          position: absolute;\n          max-width: 250px;\n          bottom: -1px;\n          line-height: 26px;\n          height: 28px;\n          overflow: hidden;\n          padding: 0 5px;\n          box-sizing: border-box;\n          border-radius: 1px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          font-family: Arial;\n          font-size: 12px;\n          left: 0px; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker > div span b, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable > div span b {\n            color: #eed428;\n            display: inline-block;\n            margin-right: 5px;\n            font-weight: normal; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap .vac-marker > div span.vac-right-side, .video-js .vac-marker-owrap .vac-marker-wrap .vac-marker-draggable > div span.vac-right-side {\n            left: auto;\n            right: 0px; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap.vac-dim-all .vac-marker {\n      height: 30px;\n      opacity: .4; }\n\n.video-js .vac-marker-owrap .vac-marker-wrap.vac-dim-all .vac-marker.vac-force-tooltip > div {\n        display: none; }\n\n.video-js .vac-comments-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 15%;\n  min-width: 225px;\n  z-index: 11;\n  background-color: rgba(255, 255, 255, 0.6);\n  height: calc(100% - 42px);\n  box-sizing: border-box;\n  transition: all .15s linear; }\n\n.video-js .vac-comments-container:hover, .video-js .vac-comments-container.vac-active {\n    width: 60%;\n    max-width: 480px; }\n\n.video-js .vac-comments-container:hover .vac-comments-wrap, .video-js .vac-comments-container.vac-active .vac-comments-wrap {\n      opacity: 1; }\n\n.video-js .vac-comments-container:hover.vac-active .vac-add-new-shapebox, .video-js .vac-comments-container.vac-active.vac-active .vac-add-new-shapebox {\n      display: block; }\n\n.video-js .vac-comments-container:hover.vac-active .vac-reply-btn, .video-js .vac-comments-container.vac-active.vac-active .vac-reply-btn {\n      display: none; }\n\n.video-js .vac-comments-container .vac-comments-wrap {\n    opacity: .9;\n    height: calc(100% - 26px);\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-sizing: border-box;\n    padding: 10px;\n    border-left: 1px solid #dbdcdc; }\n\n.video-js .vac-comments-container .vac-comments-wrap::-webkit-scrollbar {\n      width: 6px;\n      background-color: transparent; }\n\n.video-js .vac-comments-container .vac-comments-wrap::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n      background-color: #383838; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment {\n      border-radius: 1px;\n      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43); }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header {\n        width: 100%;\n        padding: 2px 5px;\n        color: #FFF;\n        background-color: #383838;\n        text-align: left; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header:hover .vac-delete-comment {\n          display: inline; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header .vac-author-name, .video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header .vac-timestamp {\n          display: inline-block;\n          line-height: 16px; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header .vac-author-name.vac-author-name, .video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header .vac-timestamp.vac-author-name {\n            font-weight: bold;\n            text-align: left;\n            font-size: 11px;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header .vac-author-name.vac-timestamp, .video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header .vac-timestamp.vac-timestamp {\n            float: right;\n            text-align: right;\n            font-size: 10px; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-header .vac-delete-comment {\n          display: none;\n          cursor: pointer;\n          color: #FF0000; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-comment .vac-comment-body {\n        width: 100%;\n        padding: 8px;\n        box-sizing: border-box;\n        margin-bottom: 10px;\n        background-color: #fff;\n        color: #000;\n        font-size: 13px;\n        line-height: 16px;\n        text-align: left;\n        border-bottom-left-radius: 2px;\n        border-bottom-right-radius: 2px;\n        border-bottom: 1px solid white; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-reply-btn {\n      margin: 10px 0 0 0;\n      width: 100%; }\n\n.video-js .vac-comments-container .vac-comments-wrap .vac-add-new-shapebox {\n      margin: 10px 0 0 0;\n      border-radius: 2px;\n      height: 157px;\n      padding: 0;\n      color: orange;\n      display: none; }\n\n.video-js .vac-comments-container .vac-comments-control-bar {\n    height: 26px;\n    border-bottom: 1px solid #eed428;\n    line-height: 26px;\n    padding: 0 10px;\n    box-sizing: border-box;\n    width: 100%;\n    background: #000; }\n\n.video-js .vac-comments-container .vac-comments-control-bar .vac-range, .video-js .vac-comments-container .vac-comments-control-bar .vac-control-buttons {\n      display: inline-block;\n      width: 49%; }\n\n.video-js .vac-comments-container .vac-comments-control-bar .vac-range.vac-range, .video-js .vac-comments-container .vac-comments-control-bar .vac-control-buttons.vac-range {\n        float: left;\n        text-align: left;\n        color: #eed428; }\n\n.video-js .vac-comments-container .vac-comments-control-bar .vac-range.vac-range b, .video-js .vac-comments-container .vac-comments-control-bar .vac-control-buttons.vac-range b {\n          color: white; }\n\n.video-js .vac-comments-container .vac-comments-control-bar .vac-control-buttons {\n      float: right;\n      text-align: right;\n      font-size: 10px; }\n\n.video-js .vac-comments-container .vac-comments-control-bar .vac-control-buttons a {\n        margin: 0 4px;\n        cursor: pointer;\n        color: red; }\n\n.video-js .vac-comments-container .vac-comments-control-bar .vac-control-buttons a.vac-close-comment-list {\n          color: white; }\n\n.video-js .vac-comments-container .vac-comments-control-bar .vac-control-buttons a:hover {\n          text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2Fubm90YXRpb25zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QixFQUFFOztBQUU1QjtFQUNFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxVQUFVLEVBQUU7O0FBRWQ7RUFDRSx3QkFBd0IsRUFBRTs7QUFFNUI7RUFDRSxjQUFjLEVBQUU7O0FBRWxCO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLHdCQUF3QixFQUFFOztBQUU1QjtFQUNFLGFBQWEsRUFBRTs7QUFFakI7RUFDRSx3QkFBd0IsRUFBRTs7QUFFNUI7RUFDRSw2QkFBNkIsRUFBRTs7QUFFakM7RUFFRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWUsRUFBRTs7QUFDakI7SUFDRSx5QkFBeUIsRUFBRTs7QUFFL0I7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsaUJBQWlCLEVBQUU7O0FBQ25CO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0IsRUFBRTs7QUFFeEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0MsRUFBRTs7QUFDdEM7SUFDRSxvQ0FBb0MsRUFBRTs7QUFDeEM7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUdaLGFBQWE7SUFHYixtQkFBbUI7SUFHbkIsdUJBQXVCLEVBQUU7O0FBQ3pCO01BQ0UsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIscUNBQXFDO01BQ3JDLGFBQWEsRUFBRTs7QUFDZjtRQUNFLFNBQVM7UUFDVCxVQUFV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V0FBVyxFQUFFOztBQUNmO01BQ0Usa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsVUFBVTtNQUNWLGFBQWE7TUFDYixhQUFhLEVBQUU7O0FBQ25CO0lBQ0UsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsZUFBZTtJQUVmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUU7O0FBQ2xCO01BQ0UscUJBQXFCO01BQ3JCLFVBQVUsRUFBRTs7QUFDWjtRQUNFLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsY0FBYyxFQUFFOztBQUNoQjtVQUNFLFlBQVksRUFBRTs7QUFDcEI7TUFDRSxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGVBQWUsRUFBRTs7QUFDakI7UUFDRSxhQUFhO1FBQ2IsZUFBZTtRQUNmLFVBQVUsRUFBRTs7QUFDWjtVQUNFLFlBQVksRUFBRTs7QUFDaEI7VUFDRSwwQkFBMEIsRUFBRSIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9hbm5vdGF0aW9ucy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tanMudmFjLWFjdGl2ZSAudmpzLW1vdXNlLWRpc3BsYXksIC52aWRlby1qcy52YWMtYWN0aXZlIC52anMtYmlnLXBsYXktYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi52aWRlby1qcy52YWMtYWN0aXZlIC52YWMtbWFya2VyLW93cmFwLCAudmlkZW8tanMudmFjLWFjdGl2ZSAudmFjLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4udmlkZW8tanMudmFjLWFjdGl2ZSAudmpzLWNvbnRyb2wtYmFyIHtcbiAgei1pbmRleDogMjsgfVxuXG4udmlkZW8tanMudmFjLWFjdGl2ZSAudmFjLXBsYXllci1idG4gaS52YWMtcGxheWVyLWljb24gc3ZnIHtcbiAgZmlsbDogIzAwQTZDMiAhaW1wb3J0YW50OyB9XG5cbi52aWRlby1qcy52YWMtYWN0aXZlLnZqcy1oYXMtc3RhcnRlZCAudmFjLXNoYXBlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnZpZGVvLWpzLnZhYy1kaXNhYmxlLXBsYXkgLnZqcy1jb250cm9sIHtcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbi52aWRlby1qcyAudmFjLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4udmlkZW8tanMudmFjLWRpc2FibGUtZnVsbHNjcmVlbiAudmFjLXBsYXllci1idG4ge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi52aWRlby1qcy52YWMtZGlzYWJsZS1wbGF5IC52YWMtbWFya2VyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi52aWRlby1qcy52YWMtZGlzYWJsZS1wbGF5IC52anMtcGxheS1jb250cm9sLCAudmlkZW8tanMudmFjLWRpc2FibGUtcGxheSAudmpzLXBsYXktcHJvZ3Jlc3Mge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDsgfVxuXG4udmlkZW8tanMgLnZhYy1idXR0b24ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogIzAwQTZDMjtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC52aWRlby1qcyAudmFjLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwZGNmZjsgfVxuXG4udmlkZW8tanMgLnZhYy12aWRlby1jb3ZlciB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xNSk7XG4gIGN1cnNvcjogY3Jvc3NoYWlyOyB9XG4gIC52aWRlby1qcyAudmFjLXZpZGVvLWNvdmVyIC52YWMtdmlkZW8tY292ZXItY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi52aWRlby1qcyAudmFjLXZpZGVvLXdyaXRlLW5ldy13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDExO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IH1cbiAgLnZpZGVvLWpzIC52YWMtdmlkZW8td3JpdGUtbmV3LXdyYXAudmFjLW5ldy1jb21tZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cbiAgLnZpZGVvLWpzIC52YWMtdmlkZW8td3JpdGUtbmV3LXdyYXAgLnZhYy12aWRlby13cml0ZS1uZXcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAudmlkZW8tanMgLnZhYy12aWRlby13cml0ZS1uZXctd3JhcCAudmFjLXZpZGVvLXdyaXRlLW5ldyA+IGRpdiB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgICBwYWRkaW5nOiAyMHB4OyB9XG4gICAgICAudmlkZW8tanMgLnZhYy12aWRlby13cml0ZS1uZXctd3JhcCAudmFjLXZpZGVvLXdyaXRlLW5ldyA+IGRpdiBoNSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuICAgIC52aWRlby1qcyAudmFjLXZpZGVvLXdyaXRlLW5ldy13cmFwIC52YWMtdmlkZW8td3JpdGUtbmV3IC52YWMtY29tbWVudC1zaG93Ym94IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZTk4Mjg7IH1cbiAgICAgIC52aWRlby1qcyAudmFjLXZpZGVvLXdyaXRlLW5ldy13cmFwIC52YWMtdmlkZW8td3JpdGUtbmV3IC52YWMtY29tbWVudC1zaG93Ym94IHRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzgzODM4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcmVzaXplOiBub25lOyB9XG4gICAgICAudmlkZW8tanMgLnZhYy12aWRlby13cml0ZS1uZXctd3JhcCAudmFjLXZpZGVvLXdyaXRlLW5ldyAudmFjLWNvbW1lbnQtc2hvd2JveCA+IGRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICBoZWlnaHQ6IDI3cHg7IH1cbiAgICAgICAgLnZpZGVvLWpzIC52YWMtdmlkZW8td3JpdGUtbmV3LXdyYXAgLnZhYy12aWRlby13cml0ZS1uZXcgLnZhYy1jb21tZW50LXNob3dib3ggPiBkaXYgYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMDsgfVxuICAgICAgICAudmlkZW8tanMgLnZhYy12aWRlby13cml0ZS1uZXctd3JhcCAudmFjLXZpZGVvLXdyaXRlLW5ldyAudmFjLWNvbW1lbnQtc2hvd2JveCA+IGRpdiBhIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogIzM4MzgzODtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG4gICAgICAgICAgLnZpZGVvLWpzIC52YWMtdmlkZW8td3JpdGUtbmV3LXdyYXAgLnZhYy12aWRlby13cml0ZS1uZXcgLnZhYy1jb21tZW50LXNob3dib3ggPiBkaXYgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI0ZGMDAwMDsgfVxuICAgIC52aWRlby1qcyAudmFjLXZpZGVvLXdyaXRlLW5ldy13cmFwIC52YWMtdmlkZW8td3JpdGUtbmV3LnZhYy1pcy1jb21tZW50IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICAudmlkZW8tanMgLnZhYy12aWRlby13cml0ZS1uZXctd3JhcCAudmFjLXZpZGVvLXdyaXRlLW5ldy52YWMtaXMtY29tbWVudCAudmFjLWNvbW1lbnQtc2hvd2JveCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7IH1cblxuLnZpZGVvLWpzIC52YWMtc2hhcGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAxNTIsIDQwLCAwLjY1KTtcbiAgYm9yZGVyOiAycHggZG90dGVkICNlZTk4Mjg7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLnZpZGVvLWpzIC52YWMtY29udHJvbHMsIC52aWRlby1qcyAudmFjLWFkZC1jb250cm9scyB7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHBhZGRpbmc6IDRweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC52aWRlby1qcyAudmFjLWNvbnRyb2xzIGksIC52aWRlby1qcyAudmFjLWFkZC1jb250cm9scyBpIHtcbiAgICBjb2xvcjogI2RiZGNkYztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCAwIDA7IH1cbiAgLnZpZGVvLWpzIC52YWMtY29udHJvbHMgYnV0dG9uLCAudmlkZW8tanMgLnZhYy1hZGQtY29udHJvbHMgYnV0dG9uIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZDogIzAwQTZDMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29udHJvbHMgYnV0dG9uOmhvdmVyLCAudmlkZW8tanMgLnZhYy1hZGQtY29udHJvbHMgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGRjZmY7IH1cbiAgLnZpZGVvLWpzIC52YWMtY29udHJvbHMudmFjLWFkZC1jb250cm9scyBidXR0b24sIC52aWRlby1qcyAudmFjLWFkZC1jb250cm9scy52YWMtYWRkLWNvbnRyb2xzIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZDQyODtcbiAgICBjb2xvcjogIzM4MzgzODsgfVxuICAgIC52aWRlby1qcyAudmFjLWNvbnRyb2xzLnZhYy1hZGQtY29udHJvbHMgYnV0dG9uOmhvdmVyLCAudmlkZW8tanMgLnZhYy1hZGQtY29udHJvbHMudmFjLWFkZC1jb250cm9scyBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTI2ZjsgfVxuICAudmlkZW8tanMgLnZhYy1jb250cm9scy52YWMtYWRkLWNvbnRyb2xzIGEsIC52aWRlby1qcyAudmFjLWFkZC1jb250cm9scy52YWMtYWRkLWNvbnRyb2xzIGEge1xuICAgIG1hcmdpbjogM3B4IGF1dG8gOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAxMHB4OyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29udHJvbHMudmFjLWFkZC1jb250cm9scyBhOmhvdmVyLCAudmlkZW8tanMgLnZhYy1hZGQtY29udHJvbHMudmFjLWFkZC1jb250cm9scyBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjRkYwMDAwOyB9XG4gIC52aWRlby1qcyAudmFjLWNvbnRyb2xzIC52YWMtYW5ub3RhdGlvbi1uYXYsIC52aWRlby1qcyAudmFjLWNvbnRyb2xzIC52YWMtdmlkZW8tbW92ZSwgLnZpZGVvLWpzIC52YWMtYWRkLWNvbnRyb2xzIC52YWMtYW5ub3RhdGlvbi1uYXYsIC52aWRlby1qcyAudmFjLWFkZC1jb250cm9scyAudmFjLXZpZGVvLW1vdmUge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29udHJvbHMgLnZhYy1hbm5vdGF0aW9uLW5hdiBkaXYsIC52aWRlby1qcyAudmFjLWNvbnRyb2xzIC52YWMtdmlkZW8tbW92ZSBkaXYsIC52aWRlby1qcyAudmFjLWFkZC1jb250cm9scyAudmFjLWFubm90YXRpb24tbmF2IGRpdiwgLnZpZGVvLWpzIC52YWMtYWRkLWNvbnRyb2xzIC52YWMtdmlkZW8tbW92ZSBkaXYge1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgZmxleDogMTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICNlZWQ0Mjg7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1jb250cm9scyAudmFjLWFubm90YXRpb24tbmF2IGRpdjpob3ZlciwgLnZpZGVvLWpzIC52YWMtY29udHJvbHMgLnZhYy12aWRlby1tb3ZlIGRpdjpob3ZlciwgLnZpZGVvLWpzIC52YWMtYWRkLWNvbnRyb2xzIC52YWMtYW5ub3RhdGlvbi1uYXYgZGl2OmhvdmVyLCAudmlkZW8tanMgLnZhYy1hZGQtY29udHJvbHMgLnZhYy12aWRlby1tb3ZlIGRpdjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWQ0Mjg7XG4gICAgICAgIGNvbG9yOiAjMDAwOyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1jb250cm9scyAudmFjLWFubm90YXRpb24tbmF2IGRpdi52YWMtYS1wcmV2LCAudmlkZW8tanMgLnZhYy1jb250cm9scyAudmFjLXZpZGVvLW1vdmUgZGl2LnZhYy1hLXByZXYsIC52aWRlby1qcyAudmFjLWFkZC1jb250cm9scyAudmFjLWFubm90YXRpb24tbmF2IGRpdi52YWMtYS1wcmV2LCAudmlkZW8tanMgLnZhYy1hZGQtY29udHJvbHMgLnZhYy12aWRlby1tb3ZlIGRpdi52YWMtYS1wcmV2IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7IH1cblxuLnZpZGVvLWpzIC52YWMtY3Vyc29yLXRvb2wtdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4udmlkZW8tanMgLnZhYy1wbGF5ZXItYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAudmlkZW8tanMgLnZhYy1wbGF5ZXItYnRuIGkudmFjLXBsYXllci1pY29uIHN2ZyB7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIC4ycyBlYXNlLWluLW91dDsgfVxuICAudmlkZW8tanMgLnZhYy1wbGF5ZXItYnRuIGkudmFjLXBsYXllci1pY29uOmhvdmVyIHN2ZyB7XG4gICAgZmlsbDogIzVjZTdmZjsgfVxuICAudmlkZW8tanMgLnZhYy1wbGF5ZXItYnRuIGIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdG9wOiAzcHg7XG4gICAgcmlnaHQ6IDNweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWluLXdpZHRoOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDsgfVxuXG4udmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cbiAgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtbXMtZmxleDogYXV0bztcbiAgICBmbGV4OiBhdXRvOyB9XG4gICAgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAgLnZhYy1tYXJrZXIsIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLWRyYWdnYWJsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogN3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgYmFja2dyb3VuZDogIzAwQTZDMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7IH1cbiAgICAgIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLnZhYy1ob3ZlcmluZywgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAgLnZhYy1tYXJrZXIudmFjLWZvcmNlLXRvb2x0aXAsIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLWRyYWdnYWJsZS52YWMtaG92ZXJpbmcsIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLWRyYWdnYWJsZS52YWMtZm9yY2UtdG9vbHRpcCB7XG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZDQyODtcbiAgICAgICAgaGVpZ2h0OiAzNXB4OyB9XG4gICAgICAgIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLnZhYy1ob3ZlcmluZyA+IGRpdiwgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAgLnZhYy1tYXJrZXIudmFjLWZvcmNlLXRvb2x0aXAgPiBkaXYsIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLWRyYWdnYWJsZS52YWMtaG92ZXJpbmcgPiBkaXYsIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLWRyYWdnYWJsZS52YWMtZm9yY2UtdG9vbHRpcCA+IGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgb3BhY2l0eTogMTsgfVxuICAgICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci52YWMtaG92ZXJpbmcudmFjLXJhbmdlZC1tYXJrZXIsIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLnZhYy1mb3JjZS10b29sdGlwLnZhYy1yYW5nZWQtbWFya2VyLCAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci1kcmFnZ2FibGUudmFjLWhvdmVyaW5nLnZhYy1yYW5nZWQtbWFya2VyLCAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci1kcmFnZ2FibGUudmFjLWZvcmNlLXRvb2x0aXAudmFjLXJhbmdlZC1tYXJrZXIge1xuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogN3B4IDAgMCAwICNlZWQ0MjggaW5zZXQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogN3B4IDAgMCAwICNlZWQ0MjggaW5zZXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIxMiwgNDAsIDAuNjUpOyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci52YWMtYWN0aXZlLCAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci1kcmFnZ2FibGUudmFjLWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWQ0Mjg7IH1cbiAgICAgICAgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAgLnZhYy1tYXJrZXIudmFjLWFjdGl2ZS52YWMtcmFuZ2VkLW1hcmtlciwgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAgLnZhYy1tYXJrZXItZHJhZ2dhYmxlLnZhYy1hY3RpdmUudmFjLXJhbmdlZC1tYXJrZXIge1xuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogN3B4IDAgMCAwICNlZWQ0MjggaW5zZXQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogN3B4IDAgMCAwICNlZWQ0MjggaW5zZXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIxMiwgNDAsIDAuNjUpOyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci52YWMtcmFuZ2VkLW1hcmtlciwgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAgLnZhYy1tYXJrZXItZHJhZ2dhYmxlLnZhYy1yYW5nZWQtbWFya2VyIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggMCAwIDAgIzAwQTZDMiBpbnNldDtcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDAgMCAwICMwMEE2QzIgaW5zZXQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTY2LCAxOTQsIDAuNjUpOyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci52YWMtbWFya2VyLWRyYWdnYWJsZSwgLnZpZGVvLWpzIC52YWMtbWFya2VyLW93cmFwIC52YWMtbWFya2VyLXdyYXAgLnZhYy1tYXJrZXItZHJhZ2dhYmxlLnZhYy1tYXJrZXItZHJhZ2dhYmxlIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggMCAwIDAgI2VlOTgyOCBpbnNldDtcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDAgMCAwICNlZTk4MjggaW5zZXQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAxNTIsIDQwLCAwLjY1KTtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7XG4gICAgICAgIG1pbi13aWR0aDogN3B4ICFpbXBvcnRhbnQ7IH1cbiAgICAgIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyID4gZGl2LCAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci1kcmFnZ2FibGUgPiBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDsgfVxuICAgICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlciA+IGRpdiBzcGFuLCAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci1kcmFnZ2FibGUgPiBkaXYgc3BhbiB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZDQyODtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICBib3R0b206IC0xcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7IH1cbiAgICAgICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlciA+IGRpdiBzcGFuIGIsIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwIC52YWMtbWFya2VyLWRyYWdnYWJsZSA+IGRpdiBzcGFuIGIge1xuICAgICAgICAgICAgY29sb3I6ICNlZWQ0Mjg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cbiAgICAgICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlciA+IGRpdiBzcGFuLnZhYy1yaWdodC1zaWRlLCAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcCAudmFjLW1hcmtlci1kcmFnZ2FibGUgPiBkaXYgc3Bhbi52YWMtcmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcmlnaHQ6IDBweDsgfVxuICAgIC52aWRlby1qcyAudmFjLW1hcmtlci1vd3JhcCAudmFjLW1hcmtlci13cmFwLnZhYy1kaW0tYWxsIC52YWMtbWFya2VyIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG9wYWNpdHk6IC40OyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1tYXJrZXItb3dyYXAgLnZhYy1tYXJrZXItd3JhcC52YWMtZGltLWFsbCAudmFjLW1hcmtlci52YWMtZm9yY2UtdG9vbHRpcCA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTUlO1xuICBtaW4td2lkdGg6IDIyNXB4O1xuICB6LWluZGV4OiAxMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQycHgpO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBsaW5lYXI7IH1cbiAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyOmhvdmVyLCAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIudmFjLWFjdGl2ZSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXgtd2lkdGg6IDQ4MHB4OyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyOmhvdmVyIC52YWMtY29tbWVudHMtd3JhcCwgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyLnZhYy1hY3RpdmUgLnZhYy1jb21tZW50cy13cmFwIHtcbiAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXI6aG92ZXIudmFjLWFjdGl2ZSAudmFjLWFkZC1uZXctc2hhcGVib3gsIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lci52YWMtYWN0aXZlLnZhYy1hY3RpdmUgLnZhYy1hZGQtbmV3LXNoYXBlYm94IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyOmhvdmVyLnZhYy1hY3RpdmUgLnZhYy1yZXBseS1idG4sIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lci52YWMtYWN0aXZlLnZhYy1hY3RpdmUgLnZhYy1yZXBseS1idG4ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy13cmFwIHtcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI2cHgpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGJkY2RjOyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtd3JhcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtd3JhcDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7IH1cbiAgICAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy13cmFwIC52YWMtY29tbWVudCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDMpO1xuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Myk7IH1cbiAgICAgIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLXdyYXAgLnZhYy1jb21tZW50IC52YWMtY29tbWVudC1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgICAgICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtd3JhcCAudmFjLWNvbW1lbnQgLnZhYy1jb21tZW50LWhlYWRlcjpob3ZlciAudmFjLWRlbGV0ZS1jb21tZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7IH1cbiAgICAgICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtd3JhcCAudmFjLWNvbW1lbnQgLnZhYy1jb21tZW50LWhlYWRlciAudmFjLWF1dGhvci1uYW1lLCAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy13cmFwIC52YWMtY29tbWVudCAudmFjLWNvbW1lbnQtaGVhZGVyIC52YWMtdGltZXN0YW1wIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cbiAgICAgICAgICAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy13cmFwIC52YWMtY29tbWVudCAudmFjLWNvbW1lbnQtaGVhZGVyIC52YWMtYXV0aG9yLW5hbWUudmFjLWF1dGhvci1uYW1lLCAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy13cmFwIC52YWMtY29tbWVudCAudmFjLWNvbW1lbnQtaGVhZGVyIC52YWMtdGltZXN0YW1wLnZhYy1hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAgICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtd3JhcCAudmFjLWNvbW1lbnQgLnZhYy1jb21tZW50LWhlYWRlciAudmFjLWF1dGhvci1uYW1lLnZhYy10aW1lc3RhbXAsIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLXdyYXAgLnZhYy1jb21tZW50IC52YWMtY29tbWVudC1oZWFkZXIgLnZhYy10aW1lc3RhbXAudmFjLXRpbWVzdGFtcCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDsgfVxuICAgICAgICAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy13cmFwIC52YWMtY29tbWVudCAudmFjLWNvbW1lbnQtaGVhZGVyIC52YWMtZGVsZXRlLWNvbW1lbnQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiAjRkYwMDAwOyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy13cmFwIC52YWMtY29tbWVudCAudmFjLWNvbW1lbnQtYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlOyB9XG4gICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtd3JhcCAudmFjLXJlcGx5LWJ0biB7XG4gICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLXdyYXAgLnZhYy1hZGQtbmV3LXNoYXBlYm94IHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGhlaWdodDogMTU3cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtY29udHJvbC1iYXIge1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZDQyODtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLWNvbnRyb2wtYmFyIC52YWMtcmFuZ2UsIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLWNvbnRyb2wtYmFyIC52YWMtY29udHJvbC1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA0OSU7IH1cbiAgICAgIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLWNvbnRyb2wtYmFyIC52YWMtcmFuZ2UudmFjLXJhbmdlLCAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy1jb250cm9sLWJhciAudmFjLWNvbnRyb2wtYnV0dG9ucy52YWMtcmFuZ2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICNlZWQ0Mjg7IH1cbiAgICAgICAgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtY29udHJvbC1iYXIgLnZhYy1yYW5nZS52YWMtcmFuZ2UgYiwgLnZpZGVvLWpzIC52YWMtY29tbWVudHMtY29udGFpbmVyIC52YWMtY29tbWVudHMtY29udHJvbC1iYXIgLnZhYy1jb250cm9sLWJ1dHRvbnMudmFjLXJhbmdlIGIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAgIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLWNvbnRyb2wtYmFyIC52YWMtY29udHJvbC1idXR0b25zIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZm9udC1zaXplOiAxMHB4OyB9XG4gICAgICAudmlkZW8tanMgLnZhYy1jb21tZW50cy1jb250YWluZXIgLnZhYy1jb21tZW50cy1jb250cm9sLWJhciAudmFjLWNvbnRyb2wtYnV0dG9ucyBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogcmVkOyB9XG4gICAgICAgIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLWNvbnRyb2wtYmFyIC52YWMtY29udHJvbC1idXR0b25zIGEudmFjLWNsb3NlLWNvbW1lbnQtbGlzdCB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlOyB9XG4gICAgICAgIC52aWRlby1qcyAudmFjLWNvbW1lbnRzLWNvbnRhaW5lciAudmFjLWNvbW1lbnRzLWNvbnRyb2wtYmFyIC52YWMtY29udHJvbC1idXR0b25zIGE6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/videojs_skin.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/videojs_skin.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {\n    width: 10em\n}\n\n.video-js .vjs-controls-disabled .vjs-big-play-button {\n    display: none!important\n}\n\n.video-js .vjs-control {\n    width: 3em\n}\n\n.video-js .vjs-menu-button-inline:before {\n    width: 1.5em\n}\n\n.vjs-menu-button-inline .vjs-menu {\n    left: 3em\n}\n\n.vjs-paused.vjs-has-started.video-js .vjs-big-play-button,.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button {\n    display: block\n}\n\n.video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button {\n    display: none!important\n}\n\n.video-js .vjs-mouse-display:after,.video-js .vjs-play-progress:after {\n    padding: 0 .4em .3em\n}\n\n.video-js.vjs-ended .vjs-loading-spinner {\n    display: none;\n}\n\n.video-js.vjs-ended .vjs-big-play-button {\n    display: block !important;\n}\n\nvideo-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.video-js .vjs-big-play-button {\n    display: block\n}\n\n.video-js .vjs-big-play-button {\n    top: 50%;\n    left: 50%;\n    margin-left: -1.5em;\n    margin-top: -1em\n}\n\n.video-js .vjs-big-play-button {\n    background-color: rgba(0,166,194,0.91);\n    font-size: 2.5em;\n    border-radius: 3%;\n    height: 1.7em !important;\n    line-height: 1.7em !important;\n    margin-top: -0.85em !important\n}\n\n.video-js:hover .vjs-big-play-button,.video-js .vjs-big-play-button:focus,.video-js .vjs-big-play-button:active {\n    background-color: #00A6C2\n}\n\n.video-js .vjs-loading-spinner {\n    border-color: #00a6c2\n}\n\n.video-js .vjs-control-bar2 {\n    background-color: #000000\n}\n\n.video-js .vjs-control-bar {\n    opacity: 1 !important;\n    background-color: rgba(0,0,0,0.54) !important;\n    color: #ffffff;\n    font-size: 14px\n}\n\n.video-js .vjs-play-progress,.video-js  .vjs-volume-level {\n    background-color: #ffffff\n}\n\n.video-js .vjs-slider {\n    background-color: #3b3d41\n}\n\n.video-js .vjs-load-progress {\n    background: rgba(255,255,255,0.4);\n}\n\n.video-js .vjs-big-play-button {\n    border-color: transparent;\n}\n\n.video-js *{\n    outline: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3ZpZGVvanNfc2tpbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNkM7SUFDN0MsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy92aWRlb2pzX3NraW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWpzIC52anMtbWVudS1idXR0b24taW5saW5lLnZqcy1zbGlkZXItYWN0aXZlLC52aWRlby1qcyAudmpzLW1lbnUtYnV0dG9uLWlubGluZTpmb2N1cywudmlkZW8tanMgLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmU6aG92ZXIsLnZpZGVvLWpzLnZqcy1uby1mbGV4IC52anMtbWVudS1idXR0b24taW5saW5lIHtcbiAgICB3aWR0aDogMTBlbVxufVxuXG4udmlkZW8tanMgLnZqcy1jb250cm9scy1kaXNhYmxlZCAudmpzLWJpZy1wbGF5LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnRcbn1cblxuLnZpZGVvLWpzIC52anMtY29udHJvbCB7XG4gICAgd2lkdGg6IDNlbVxufVxuXG4udmlkZW8tanMgLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmU6YmVmb3JlIHtcbiAgICB3aWR0aDogMS41ZW1cbn1cblxuLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmUgLnZqcy1tZW51IHtcbiAgICBsZWZ0OiAzZW1cbn1cblxuLnZqcy1wYXVzZWQudmpzLWhhcy1zdGFydGVkLnZpZGVvLWpzIC52anMtYmlnLXBsYXktYnV0dG9uLC52aWRlby1qcy52anMtZW5kZWQgLnZqcy1iaWctcGxheS1idXR0b24sLnZpZGVvLWpzLnZqcy1wYXVzZWQgLnZqcy1iaWctcGxheS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi52aWRlby1qcyAudmpzLWxvYWQtcHJvZ3Jlc3MgZGl2LC52anMtc2Vla2luZyAudmpzLWJpZy1wbGF5LWJ1dHRvbiwudmpzLXdhaXRpbmcgLnZqcy1iaWctcGxheS1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50XG59XG5cbi52aWRlby1qcyAudmpzLW1vdXNlLWRpc3BsYXk6YWZ0ZXIsLnZpZGVvLWpzIC52anMtcGxheS1wcm9ncmVzczphZnRlciB7XG4gICAgcGFkZGluZzogMCAuNGVtIC4zZW1cbn1cblxuLnZpZGVvLWpzLnZqcy1lbmRlZCAudmpzLWxvYWRpbmctc3Bpbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpZGVvLWpzLnZqcy1lbmRlZCAudmpzLWJpZy1wbGF5LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxudmlkZW8tanMudmpzLWVuZGVkIC52anMtYmlnLXBsYXktYnV0dG9uLC52aWRlby1qcy52anMtcGF1c2VkIC52anMtYmlnLXBsYXktYnV0dG9uLC52anMtcGF1c2VkLnZqcy1oYXMtc3RhcnRlZC52aWRlby1qcyAudmpzLWJpZy1wbGF5LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLnZpZGVvLWpzIC52anMtYmlnLXBsYXktYnV0dG9uIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAtMWVtXG59XG5cbi52aWRlby1qcyAudmpzLWJpZy1wbGF5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDE2NiwxOTQsMC45MSk7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcbiAgICBoZWlnaHQ6IDEuN2VtICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTAuODVlbSAhaW1wb3J0YW50XG59XG5cbi52aWRlby1qczpob3ZlciAudmpzLWJpZy1wbGF5LWJ1dHRvbiwudmlkZW8tanMgLnZqcy1iaWctcGxheS1idXR0b246Zm9jdXMsLnZpZGVvLWpzIC52anMtYmlnLXBsYXktYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTZDMlxufVxuXG4udmlkZW8tanMgLnZqcy1sb2FkaW5nLXNwaW5uZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzAwYTZjMlxufVxuXG4udmlkZW8tanMgLnZqcy1jb250cm9sLWJhcjIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBcbn1cblxuLnZpZGVvLWpzIC52anMtY29udHJvbC1iYXIge1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNTQpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4XG59XG5cbi52aWRlby1qcyAudmpzLXBsYXktcHJvZ3Jlc3MsLnZpZGVvLWpzICAudmpzLXZvbHVtZS1sZXZlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZlxufVxuXG4udmlkZW8tanMgLnZqcy1zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNkNDFcbn1cblxuLnZpZGVvLWpzIC52anMtbG9hZC1wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xufVxuXG4udmlkZW8tanMgLnZqcy1iaWctcGxheS1idXR0b24ge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi52aWRlby1qcyAqe1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


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
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ "./src/assets/css/annotations.css":
/*!****************************************!*\
  !*** ./src/assets/css/annotations.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./annotations.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/annotations.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/css/comment_icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/css/comment_icon.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "comment_icon.svg";

/***/ }),

/***/ "./src/assets/css/videojs_skin.css":
/*!*****************************************!*\
  !*** ./src/assets/css/videojs_skin.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./videojs_skin.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/videojs_skin.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ 3:
/*!***********************************************************************************************************************************!*\
  !*** multi ./src/styles.css ./src/assets/css/annotations.css ./src/assets/css/comment_icon.svg ./src/assets/css/videojs_skin.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rvargas/Projects/Front-End-sisred/SISRED-Frontend/src/styles.css */"./src/styles.css");
__webpack_require__(/*! /Users/rvargas/Projects/Front-End-sisred/SISRED-Frontend/src/assets/css/annotations.css */"./src/assets/css/annotations.css");
__webpack_require__(/*! /Users/rvargas/Projects/Front-End-sisred/SISRED-Frontend/src/assets/css/comment_icon.svg */"./src/assets/css/comment_icon.svg");
module.exports = __webpack_require__(/*! /Users/rvargas/Projects/Front-End-sisred/SISRED-Frontend/src/assets/css/videojs_skin.css */"./src/assets/css/videojs_skin.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map