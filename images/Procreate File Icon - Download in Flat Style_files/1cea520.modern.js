(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1874:function(t,e,o){"use strict";var r=o(7),l=o(11),n=(o(218),o(26),o(40),o(23)),c=o.n(n),h=o(1367),d=o.n(h),m=o(1368),y=o.n(m),S=o(57),v=o.n(S),x=o(132),C=o.n(x),svg=o(1163),w=o.n(svg),f=o(1079),T=o(1095),P=o(22),H=o(64),k=(o(44),o(30),o(31),o(322));var z=o(1927),O=o.n(z),$=o(1089),j={colorsinspo:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={tab:t.tab,colors:t.colors.map((t=>t.hex)),brandPaletteId:t.selectedPalette?t.selectedPalette.id:null},{palette:r}=e;"re-color"!==o.tab&&(t.tab="re-color");var l=Object($.b)(t.colors.map((t=>t.originalHex)),r.colors);return t.colors.forEach(((e,o)=>{t["fill".concat(e.element,"Color")](t.colors[o].originalHex,l[o]),t.colors[o].hex=l[o],t.colors[o].lastHex=l[o]})),t.$store.dispatch("brandPalettes/setSelected",null),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.tab=e.tab,t.colors.forEach(((o,r)=>{t["fill".concat(o.element,"Color")](t.colors[r].originalHex,e.colors[r]),t.colors[r].hex=e.colors[r]})),t.$store.dispatch("brandPalettes/setSelected",e.brandPaletteId)}},brandPalette:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={brandPaletteId:t.selectedPalette?t.selectedPalette.id:null,colors:t.colors.map((t=>t.hex)),brandColorApplied:t.brandColorApplied},{palette:r}=e;t.$store.dispatch("brandPalettes/setSelected",r.id);var l=Object($.b)(t.colors.map((t=>t.originalHex)),r.colors);return t.colors.forEach(((e,o)=>{t["fill".concat(e.element,"Color")](t.colors[o].originalHex,l[o]),t.colors[o].hex=l[o]})),t.brandColorApplied=!0,o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.$store.dispatch("brandPalettes/setSelected",e.brandPaletteId),t.colors.forEach(((o,r)=>{t["fill".concat(o.element,"Color")](t.colors[r].originalHex,e.colors[r]),t.colors[r].hex=e.colors[r]})),t.brandColorApplied=e.brandColorApplied}},resetBrandPalette:{execute(t){var e={brandPaletteId:t.selectedPalette?t.selectedPalette.id:null,brandColorApplied:t.brandColorApplied},o=O()(t.history,(t=>"brandPalette"===t.command));if(o){var r=o.prevState.colors;t.colors.forEach(((e,o)=>{t["fill".concat(e.element,"Color")](t.colors[o].originalHex,r[o]),t.colors[o].hex=r[o]})),t.$store.dispatch("brandPalettes/setSelected",null),t.brandColorApplied=!1}return e},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.$store.state.brandPalettes.palettes.find((t=>t.id===e.brandPaletteId));o&&t.execute({command:"brandPalette",state:{palette:o},options:{skipHistory:!0}})}},fillColor:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{color:o,index:r}=e,l={tab:t.tab,color:t.colors[r].hex,index:r,brandPaletteId:t.selectedPalette?t.selectedPalette.id:null};return t.tab="re-color",t["fill".concat(t.colors[r].element,"Color")](t.colors[r].originalHex,o.hex),t.colors[r].hex=o.hex,t.colors[r].lastHex=o.hex,t.$store.dispatch("brandPalettes/setSelected",null),l},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.tab=e.tab,t["fill".concat(t.colors[e.index].element,"Color")](t.colors[e.index].originalHex,e.color),t.colors[e.index].hex=e.color,t.colors[e.index].lastHex=e.color,t.$store.dispatch("brandPalettes/setSelected",e.brandPaletteId)}},tab:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={showTileTab:t.showTileTab,tab:t.tab,colors:t.colors.map((t=>t.hex)),brandPaletteId:t.brandColorApplied&&t.selectedPalette?t.selectedPalette.id:null},{tab:r}=e;if(t.showTileTab=!1,t.tab===r)t.tab=null;else switch(t.tab=r,r){case"re-color":if(o.brandPaletteId){var l=t.$store.state.brandPalettes.palettes.find((p=>p.id===o.brandPaletteId));l&&t.execute({command:"brandPalette",state:{palette:l},options:{skipHistory:!0}}),t.$store.dispatch("brandPalettes/setSelected",o.brandPaletteId)}else t.execute({command:"reColor",state:{colors:t.colors.map((t=>t.lastHex))},options:{skipHistory:!0}});break;case"monochrome":t.execute({command:"monochrome",state:{hue:t.monochromeHue,showCustomSaturation:t.showCustomSaturation,saturation:t.monochromeSaturation},options:{skipHistory:!0}});break;case"grayTone":t.execute({command:"grayTone",state:{hue:t.grayToneHue,saturation:t.grayToneSaturation},options:{skipHistory:!0}})}return o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.showTileTab=e.showTileTab,t.tab=e.tab,t.tab){case"re-color":if(e.brandPaletteId){var o=t.$store.state.brandPalettes.palettes.find((p=>p.id===e.brandPaletteId));o&&t.execute({command:"brandPalette",state:{palette:o},options:{skipHistory:!0}}),t.$store.dispatch("brandPalettes/setSelected",e.brandPaletteId)}else t.execute({command:"reColor",state:{colors:e.colors},options:{skipHistory:!0}});break;case"monochrome":t.execute({command:"monochrome",state:{hue:t.monochromeHue,showCustomSaturation:t.showCustomSaturation,saturation:t.monochromeSaturation},options:{skipHistory:!0}});break;case"grayTone":t.execute({command:"grayTone",state:{hue:t.grayToneHue,saturation:t.grayToneSaturation},options:{skipHistory:!0}});break;case null:t.colors.forEach(((o,r)=>{t["fill".concat(o.element,"Color")](t.colors[r].originalHex,e.colors[r]),t.colors[r].hex=e.colors[r]}))}}},tileTab:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={tab:t.tab,showTileTab:t.showTileTab,tileType:t.tileType},{tab:r,showTileTab:l}=e;return t.tab=r,t.showTileTab=l,l&&"none"===t.tileType.name&&t.execute({command:"tileType",state:{tile:t.tile,tileType:t.tiles[1],tileBorderRadius:t.tileBorderRadius,iconSize:t.iconSize,tileSize:t.tileSize},options:{skipHistory:!0}}),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.tab=e.tab,t.showTileTab=e.showTileTab,t.execute({command:"tileType",state:{tile:t.tile,tileType:e.tileType,tileBorderRadius:t.tileBorderRadius,iconSize:t.iconSize,tileSize:t.tileSize},options:{skipHistory:!0}})}},reColor:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.colors.forEach(((o,r)=>{t["fill".concat(o.element,"Color")](t.colors[r].originalHex,e.colors[r]),t.colors[r].hex=e.colors[r],t.colors[r].lastHex=e.colors[r]})),t.selectedPalette&&t.$store.dispatch("brandPalettes/setSelected",t.selectedPalette.id)},undo(){}},monochrome:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{hue:o,showCustomSaturation:r,saturation:l}=e,n={brandPaletteId:t.selectedPalette?t.selectedPalette.id:null,colors:t.colors.map((t=>t.hex)),hue:t.monochromeHue,saturation:t.monochromeSaturation,showCustomSaturation:r};t.monochromeHue=o,t.showCustomSaturation=r,r&&(t.monochromeSaturation=l);var c=Object($.a)(t.colors.map((t=>t.lastHex)),o,r?l:null);return t.colors.forEach(((e,o)=>{t["fill".concat(e.element,"Color")](t.colors[o].originalHex,c[o]),t.colors[o].hex=c[o]})),n},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.monochromeHue=e.hue,t.showCustomSaturation=e.showCustomSaturation,e.showCustomSaturation&&(t.monochromeSaturation=e.saturation),t.colors.forEach(((o,r)=>{t["fill".concat(o.element,"Color")](t.colors[r].originalHex,e.colors[r]),t.colors[r].hex=e.colors[r]})),t.$store.dispatch("brandPalettes/setSelected",e.brandPaletteId)}},toggleMonochromeSaturation:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={showCustomSaturation:t.showCustomSaturation},{showCustomSaturation:r}=e;return t.showCustomSaturation=!r,t.execute({command:"monochrome",state:{hue:t.monochromeHue,showCustomSaturation:t.showCustomSaturation,saturation:t.showCustomSaturation?t.monochromeSaturation:null},options:{skipHistory:!0}}),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.showCustomSaturation=e.showCustomSaturation,t.execute({command:"monochrome",state:{hue:t.monochromeHue,showCustomSaturation:t.showCustomSaturation,saturation:t.showCustomSaturation?t.monochromeSaturation:null},options:{skipHistory:!0}})}},grayTone:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={brandPaletteId:t.selectedPalette?t.selectedPalette.id:null,colors:t.colors.map((t=>t.hex)),hue:t.grayToneHue,saturation:t.grayToneSaturation},{hue:r,saturation:l}=e;t.grayToneHue=r,t.grayToneSaturation=l;var n=Object($.a)(t.colors.map((t=>t.lastHex)),t.grayToneHue,t.grayToneSaturation);return t.colors.forEach(((e,o)=>{t["fill".concat(e.element,"Color")](t.colors[o].originalHex,n[o]),t.colors[o].hex=n[o]})),t.$store.dispatch("brandPalettes/setSelected",null),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.grayToneHue=e.hue,t.grayToneSaturation=e.saturation,t.colors.forEach(((o,r)=>{t["fill".concat(o.element,"Color")](t.colors[r].originalHex,e.colors[r]),t.colors[r].hex=e.colors[r]})),t.$store.dispatch("brandPalettes/setSelected",e.brandPaletteId)}},tileType:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={tile:t.tile,tileType:t.tileType,iconSize:t.iconSize,tileSize:t.tileSize,tileBorderRadius:t.tileBorderRadius},{tileType:r}=e;return I(t,e),t.execute({command:"iconSize",state:{scale:"none"===r.name?1:r.icon},options:{skipHistory:!0}}),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.tile&&t.tile.remove(),I(t,e),t.execute({command:"iconSize",state:{scale:"none"===e.tileType.name?1:e.iconSize},options:{skipHistory:!0}})}},iconSize:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={scale:t.iconSize},{scale:r}=e;return t.iconSize=Number(r),t.icon&&t.icon.transform({scale:r}),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.iconSize=e.scale,t.icon&&t.icon.transform({scale:e.scale})}},tileSize:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={scale:t.tileSize},{scale:r}=e;return t.tileSize=Number(r),t.tile&&t.tile.transform({scale:r}),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.tileSize=e.scale,t.tile&&t.tile.transform({scale:e.scale})}},tileBorderRadius:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={radius:t.tileBorderRadius},{radius:r}=e;return t.tileBorderRadius=r,B(t,{radius:r}),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.tileBorderRadius=e.radius,B(t,{radius:e.radius})}},tileColor:{execute(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={color:t.tileColor},{color:r}=e;return t.tileColor=r,t.tile&&t.tile.fill(r),o},undo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.tileColor=e.color,t.tile&&t.tile.fill(e.color)}}},I=(t,e)=>{var{tileType:o,tileSize:r}=e;switch(t.tile&&t.tile.remove(),t.tileType=o,o.name){case"none":t.tile=null;break;case"square":t.tile=t.draw.rect(t.canvasWidth,t.canvasHeight).radius(t.tileBorderRadius);break;case"squircle":var l=t.canvasWidth,n=l/2,c=l-5;t.tile=t.draw.path("M ".concat(n,",0 C ").concat(5,",0 0,").concat(5," 0,").concat(n," 0,").concat(c," ").concat(5,",").concat(l," ").concat(n,",").concat(l," ").concat(c,",").concat(l," ").concat(l,",").concat(c," ").concat(l,",").concat(n," ").concat(l,",").concat(5," ").concat(c,",0 ").concat(n,",0 Z"));break;case"circle":t.tile=t.draw.circle(t.canvasWidth,t.canvasHeight);break;case"beacon":t.tile=t.draw.group(),t.tile.circle(t.canvasWidth,t.canvasHeight),t.tile.rect(t.canvasWidth/2+t.tileBorderRadius,t.canvasHeight/2+t.tileBorderRadius).move(t.canvasWidth/2-t.tileBorderRadius,t.canvasHeight/2-t.tileBorderRadius).radius(t.tileBorderRadius)}t.tile&&t.tile.back(),t.execute({command:"tileSize",state:{scale:r},options:{skipHistory:!0}}),t.tile&&t.tile.back().fill(t.tileColor).transform({scale:t.tileSize})},B=(t,e)=>{var{radius:o}=e;if(t.tileType)if("square"===t.tileType.name)t.tile.radius(o);else if("beacon"===t.tileType.name){t.tile.select("rect").members[0].size(t.canvasWidth/2+o,t.canvasHeight/2+o).move(t.canvasWidth/2-o,t.canvasHeight/2-o).radius(o)}};function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function R(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N,D,A,W={data:()=>({history:[],position:-1,holdState:null,disableTimeTravel:!1}),mounted(){window.addEventListener("keydown",this.keyEventHandler)},destroyed(){window.removeEventListener("keydown",this.keyEventHandler)},computed:{unDoable(){return!!(!this.disableTimeTravel&&this.history.length&&this.position>=0)},reDoable(){return!!(!this.disableTimeTravel&&this.history.length&&this.position<this.history.length-1)}},methods:{keyEventHandler(t){(t.ctrlKey||t.metaKey)&&"KeyZ"===t.code&&(t.preventDefault(),t.shiftKey?(this.reDoable&&this.$analytics.track("editor",{action:"redo",via:"keyboard"}),this.redo()):(this.unDoable&&this.$analytics.track("editor",{action:"undo",via:"keyboard"}),this.undo()))},set(t){this.position<this.history.length-1&&(this.history=this.history.slice(0,this.position+1)),this.history.push(t),this.history.length>40&&this.history.splice(1,1),this.position=this.history.length-1},setLazy:(N=function(t){this.position<this.history.length-1&&(this.history=this.history.slice(0,this.position+1));var e=this.holdState;return this.history.push(R(R({},t),{},{prevState:e})),this.history.length>40&&this.history.splice(1,1),this.position=this.history.length-1,this.holdState=null,Promise.resolve(e)},D=400,A=Object(k.debounce)(function(){var t=Object(r.a)((function*(t,e,o,r){try{t(yield N.bind(o)(...r))}catch(t){e(t)}}));return function(e,o,r,l){return t.apply(this,arguments)}}(),D),function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return new Promise(((t,o)=>{A(t,o,this,e)}))}),undo(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.position>=0){var e=this.history[this.position];j[e.command].undo(this,e.prevState),t.silent||(this.position-=1)}},redo(){if(this.position<this.history.length-1){this.position+=1;var t=this.history[this.position];j[t.command].execute(this,t.state)}},execute(t){var e=this;return Object(r.a)((function*(){var{command:r,state:l={},options:n={}}=t;if(e.disableEditing){if(e.handleAuth())e.$modal.currentModal&&"modalEditorSubscribe"===e.$modal.currentModal.id||e.$modal.open({id:"modalEditorSubscribe",component:Promise.all([o.e(0),o.e(325)]).then(o.bind(null,4206)),options:{modalOnModal:!0}});else{var c=yield e.getSharableUrl();e.$router.replace({query:{redirect:c},params:{IS_ROUTE_REPLACING:!0}})}return!1}return new Promise((t=>{var o=j[r].execute(e,l);n.skipHistory||(n.lazy?(e.holdState||(e.holdState=o),e.setLazy({command:r,state:l}).then((e=>{t({state:l,prevState:e})}))):(e.set({command:r,state:l,prevState:o}),t({state:l,prevState:o})))}))}))()},reset(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.position=-1,this.history=[],this.resetData(),this.$store.dispatch("brandPalettes/setSelected",null),this.$nextTick((()=>{t?this.initEditor(t):this.initSVG()}))}}};function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M=["g","path","polyline","polygon","circle","rect","circle","ellipse"],U="fill",_="fill",K="data-name",V=["line","g","path","polygon","circle","rect","circle","ellipse"],F=["stop"],J="stroke",Z="svgShape",Q={monochromeHue:200,monochromeSaturation:100,showCustomSaturation:!1,grayToneHue:200,grayToneSaturation:10,tileColor:"#87ddfd",tileBorderRadius:20,tileSize:.7916,iconSize:.4652,tab:null,showTileTab:!1};e.a={mixins:[H.a,W],data:()=>L({draw:null,colors:[],icon:null,tile:null,tileType:{name:"none"},original:null,originalContent:null,originalWidth:null,originalHeight:null,selectedColorIndex:null,showUploadOption:!0,tiles:[{name:"none",icon:1,shape:null},{name:"square",icon:.4652,shape:.7916},{name:"squircle",icon:.4652,shape:.7916},{name:"circle",icon:.4652,shape:.9167},{name:"beacon",icon:.4652,shape:.9167}]},Q),computed:{color:{get(){return null!==this.selectedColorIndex?this.colors[this.selectedColorIndex].hex:"#FFF"},set(t){this.execute({command:"fillColor",state:{color:t,index:this.selectedColorIndex},options:{lazy:!0}}).then((t=>{t&&this.$analytics.track("editor",{location:"item-colors",action:"edit-color",prevColor:t.prevState.color,editedColor:t.state.color.hex})}))}},selectedPalette(){return this.$store.getters["brandPalettes/selectedPalette"]},disableEditing(){return this.urlState&&this.urlState.isPremium&&!this.hasPremiumSubscription&&!this.isLoading}},methods:{init(t){var e=this;return Object(r.a)((function*(){e.showUploadOption=!1,e.isLoading="initNew";var o=null;try{o=yield c()(t,{withCredentials:!1})}catch(t){e.$analytics.track("error-log",{place:"editor",url:window.location.href,itemId:e.item?e.item.id:null});var title="This file is having issue. Please report us.";throw e.$root.$bvToast.toast(title,{title:title,variant:"danger",toaster:"b-toaster-bottom-center",solid:!1,noAutoHide:!1,bodyClass:"d-none"}),new Error(title)}e.originalContent=o.data,e.original=yield Object(f.a)(e.originalContent),e.initSVG()}))()},initEditor(content){var t=this;return Object(r.a)((function*(){t.originalContent=content,t.isLoading="initNew",t.tab=null,t.showTileTab=!1,t.showUploadOption=!1,t.original=yield Object(f.a)(content),t.initSVG()}))()},initSVG(){var t=this;this.draw&&this.draw.remove(),this.draw=w()(this.id),this.draw.size(this.canvasWidth,this.canvasHeight),this.icon=this.draw.group();var e=this.icon.svg(this.original);if(this.originalWidth=e.get(0).attr("width"),this.originalHeight=e.get(0).attr("height"),this.icon.select("svg").size(this.canvasWidth,this.canvasHeight),this.tileType=this.tiles[0],this.draw.each((function(){if(e!==this){var data=this.attr(K);data&&this.attr(K,y()(data))}}),!0),t.colors=[],this.draw.select(M).each((function(){if(e!==this){var o=null;if(this.attr(_)&&"#000000"!==this.attr(_).trim()?o=this.attr(_):this.style(U)?o=this.style(U):this.attr(J)&&"#000000"!==this.attr(J).trim()||(o="#000"),d()(o)){this.style(U,null),this.attr(_,o);var r=t.generateClassName(o);this.addClass(r),this.addClass(Z),-1===v()(t.colors,{originalHex:o})&&t.colors.push({hex:o,lastHex:o,originalHex:o,className:r,element:"Shape"}),this.click((function(){t.selectColor(o)}))}}}),!0),this.draw.select(V).each((function(){if(e!==this){var o=null;if(this.attr(J)&&"#000000"!==this.attr(J).trim()&&(o=this.attr(J)),d()(o)){var r=t.generateStrokeClassName(o);this.addClass(r),this.addClass("svgStroke"),-1===v()(t.colors,{originalHex:o,element:"Stroke"})&&t.colors.push({hex:o,lastHex:o,originalHex:o,className:r,element:"Stroke"})}}})),this.draw.select(F).each((function(){if(e!==this){var o;if(o=this.attr("stop-color"),d()(o)){this.style(U,null),this.attr("stop-color",o);var r=t.generateGradientClassName(o);this.addClass(r),this.addClass(Z),-1===v()(t.colors,{originalHex:o,element:"StopColor"})&&t.colors.push({hex:o,lastHex:o,originalHex:o,className:r,element:"StopColor"})}}})),!this.colors.length)throw this.resetData(),this.showUploadOption=!0,new Error("This file is not supported.");v()(this.colors,{element:"StopColor"})>-1&&this.$analytics.track("editor",{type:"gradient",url:window.location.href,itemId:this.item?this.item.id:null}),this.initWithBrandColor&&this.selectedPalette&&!this.selectedPalette.is_default&&this.onApplyBrandPalette(this.selectedPalette),this.selectedColorIndex=0,this.tab="re-color",this.urlState&&(this.execute({command:"reColor",state:{colors:this.urlState.colors},options:{skipHistory:!0}}),this.monochromeHue=this.urlState.monochromeHue,this.monochromeSaturation=this.urlState.monochromeSaturation,this.showCustomSaturation=this.urlState.showCustomSaturation,this.grayToneHue=this.urlState.grayToneHue,this.grayToneSaturation=this.urlState.grayToneSaturation,this.tileColor=this.urlState.tileColor,this.tileBorderRadius=this.urlState.tileBorderRadius,this.tileSize=this.urlState.tileSize,this.iconSize=this.urlState.iconSize,this.tileType=this.urlState.tileType,this.urlState.tab&&this.execute({command:"tab",state:{tab:this.urlState.tab},options:{skipHistory:!0}}),this.tab=this.urlState.tab,this.showTileTab=this.urlState.showTileTab,this.execute({command:"tileType",state:{tile:this.tile,tileType:L(L({},this.urlState.tileType),{},{icon:this.urlState.iconSize}),tileBorderRadius:this.tileBorderRadius,iconSize:this.iconSize,tileSize:this.tileSize},options:{skipHistory:!0}}),this.urlState.downloadItem&&this.onDownload({format:this.urlState.downloadItem[0],size:this.urlState.downloadItem[1]})),this.isLoading=null},generateClassName:t=>"color"+t.replace(/[\W+]/g,""),generateStrokeClassName:t=>"colorStroke"+t.replace(/[\W+]/g,""),generateGradientClassName:t=>"stopColor"+t.replace(/[\W+]/g,""),fillShapeColor(t,e){this.draw.select("."+this.generateClassName(t)).fill(e)},fillStrokeColor(t,e){this.draw.select("."+this.generateStrokeClassName(t)).stroke(e)},fillStopColorColor(t,e){this.draw.select("."+this.generateGradientClassName(t)).attr({"stop-color":e})},selectColor(t){this.selectedColorIndex=v()(this.colors,{originalHex:t})},resetData(){C()(Q,((t,e)=>{this[e]=Q[e]}))},onChangeTab(t){this.execute({command:"tab",state:{tab:t}})},onToggleTileTab(){this.execute({command:"tileTab",state:{tab:null,showTileTab:!this.showTileTab}})},onChangeTileType(t){this.execute({command:"tileType",state:{tile:this.tile,tileType:t,tileBorderRadius:this.tileBorderRadius,iconSize:this.iconSize,tileSize:this.tileSize}})},onChangeTileSize(t){this.execute({command:"tileSize",state:{scale:Number(t)},options:{lazy:!0}}).then((t=>{t&&this.$analytics.track("editor",{location:"add-tile",action:"edit-tile-size",scale:t.state.scale})}))},onChangeTileBorderRadius(t){this.execute({command:"tileBorderRadius",state:{radius:Number(t)},options:{lazy:!0}}).then((t=>{t&&this.$analytics.track("editor",{location:"add-tile",action:"edit-border-radius",radius:t.state.radius})}))},onChangeTileColor(t){this.execute({command:"tileColor",state:{color:t.color},options:{lazy:!0}}).then((e=>{e&&this.$analytics.track("editor",{location:"add-tile",action:"edit-tile-color",color:e.state.color,via:t.via})}))},onChangeIconSize(t){this.execute({command:"iconSize",state:{scale:Number(t)},options:{lazy:!0}}).then((t=>{t&&this.$analytics.track("editor",{location:"add-tile",action:"edit-icon-size",scale:t.state.scale})}))},onChangeMonochromeHue(t){this.execute({command:"monochrome",state:{hue:Number(t.hue),showCustomSaturation:this.showCustomSaturation,saturation:this.monochromeSaturation},options:{lazy:!0}}).then((e=>{e&&this.$analytics.track("editor",{location:"monochrome",action:"edit-hue",hue:e.state.hue,via:t.via})}))},onToggleCustomSaturation(){this.execute({command:"toggleMonochromeSaturation",state:{showCustomSaturation:this.showCustomSaturation}})},onChangeMonochromeSaturation(t){this.execute({command:"monochrome",state:{hue:this.monochromeHue,showCustomSaturation:this.showCustomSaturation,saturation:Number(t)},options:{lazy:!0}}).then((t=>{t&&this.$analytics.track("editor",{location:"monochrome",action:"edit-saturation",saturation:t.state.saturation})}))},onChangeGrayToneHue(t){this.execute({command:"grayTone",state:{hue:Number(t.hue),saturation:this.grayToneSaturation},options:{lazy:!0}}).then((e=>{e&&this.$analytics.track("editor",{location:"grayTone",action:"edit-hue",hue:e.state.hue,via:t.via})}))},onChangeGrayToneSaturation(t){this.execute({command:"grayTone",state:{hue:this.grayToneHue,saturation:Number(t)},options:{lazy:!0}}).then((t=>{t&&this.$analytics.track("editor",{location:"grayTone",action:"edit-saturation",saturation:t.state.saturation})}))},onApplyBrandPalette(t){this.execute({command:"brandPalette",state:{palette:t}})},onResetBrandColors(){this.execute({command:"resetBrandPalette"})},onApplyColorsinspo(t){this.history.length&&"colorsinspo"===this.history[this.history.length-1].command&&this.history[this.history.length-1].state.palette.id===t.id||this.execute({command:"colorsinspo",state:{palette:t}})},download(t,e,o){var l=arguments,n=this;return Object(r.a)((function*(){var r=l.length>3&&void 0!==l[3]?l[3]:0,h=l.length>4&&void 0!==l[4]?l[4]:null,d=l.length>5&&void 0!==l[5]?l[5]:"icon",m=l.length>6&&void 0!==l[6]&&l[6];try{var y=Object(P.b)("/api/v2/icon-editor"),S=yield c.a.post(y,{xml:t,name:e,format:o,width:r,height:r,item_id:h,asset:d,source:"web"});if(n.item&&Object(T.a)(L({uuid:n.item.uuid,format:o,licenseId:n.item.license_id,size:r},n.$store.getters["brandPalettes/selectedPalette"]&&{brandPaletteId:n.$store.getters["brandPalettes/selectedPalette"].id})),m)return S.data.response.url;window.location.href=S.data.response.download_url}catch(t){console.log(t)}}))()}}}}}]);
//# sourceMappingURL=1cea520.modern.js.map