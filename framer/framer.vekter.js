(function(scope) {var statusBar = new Layer({"name":"statusBar","backgroundColor":"rgba(0, 0, 0, 0)","width":375,"height":44,"constraintValues":null,"blending":"normal","clip":false,"borderStyle":"solid"});var statusBar_time = new TextLayer({"parent":statusBar,"name":"statusBar_time","backgroundColor":null,"width":39,"x":24,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"13px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","letterSpacing":"-0.2px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFProText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", sans-serif"}}],"text":"00:00"}],"alignment":"left"},"height":16,"constraintValues":{"left":24,"height":16,"centerAnchorX":0.10533333333333333,"width":39,"top":16,"centerAnchorY":0.14457831325301204},"blending":"normal","autoSize":true,"y":16});var __layer_0__ = new SVGLayer({"parent":statusBar,"htmlIntrinsicSize":{"height":9.0722916666666684,"width":12.833333333333334},"height":9.0722916666666684,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","opacity":null,"width":12.833333333333334,"strokeWidth":1,"x":318.58333333333331,"y":18.594374999999999,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"12.833\" height=\"9.072\"><path d=\"M 0 2.656 L 1.167 3.822 C 4.066 0.923 8.768 0.923 11.667 3.822 L 12.833 2.656 C 9.293 -0.885 3.547 -0.885 0 2.656 Z M 4.667 7.322 L 6.417 9.072 L 8.167 7.322 C 7.703 6.857 7.073 6.596 6.417 6.596 C 5.76 6.596 5.13 6.857 4.667 7.322 Z M 2.333 4.989 L 3.5 6.156 C 5.111 4.546 7.722 4.546 9.333 6.156 L 10.5 4.989 C 8.248 2.737 4.591 2.737 2.333 4.989 Z\" id=\"id_GlUg3UJId\" fill=\"hsl(0, 0%, 100%)\" name=\"statusBar_wifi\"><\/path><\/svg>","rotation":null});var statusBar_wifi;if(__layer_0__.elements !== undefined){statusBar_wifi = __layer_0__.elements["id_GlUg3UJId"];
};var __layer_1__ = new SVGLayer({"parent":statusBar,"htmlIntrinsicSize":{"height":10,"width":15},"height":10,"name":".SVGLayer","fill":"hsl(0, 0%, 100%)","backgroundColor":null,"opacity":null,"width":15,"x":297,"y":18,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"15\" height=\"10\"><g id=\"id_zLcC31v3p\" name=\"statusBar_signal\"><path d=\"M 0 1 C 0 0.448 0.448 0 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3 C 3 3.552 2.552 4 2 4 L 1 4 C 0.448 4 0 3.552 0 3 Z\" transform=\"translate(0 6)\" name=\".shortest\"><\/path><path d=\"M 0 1 C 0 0.448 0.448 0 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 Z\" transform=\"translate(4 4)\" name=\".shorter\"><\/path><path d=\"M 0 1 C 0 0.448 0.448 0 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 7 C 3 7.552 2.552 8 2 8 L 1 8 C 0.448 8 0 7.552 0 7 Z\" transform=\"translate(8 2)\" name=\".taller\"><\/path><path d=\"M 0 1 C 0 0.448 0.448 0 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 9 C 3 9.552 2.552 10 2 10 L 1 10 C 0.448 10 0 9.552 0 9 Z\" transform=\"translate(12 0)\" name=\".tallest\"><\/path><\/g><\/svg>","rotation":null});var statusBar_signal;if(__layer_1__.elements !== undefined){statusBar_signal = __layer_1__.elements["id_zLcC31v3p"];
};var __layer_2__ = new SVGLayer({"parent":statusBar,"htmlIntrinsicSize":{"height":11,"width":24.5},"height":11,"name":".SVGLayer","fill":"hsl(0, 0%, 100%)","backgroundColor":null,"opacity":null,"width":24.5,"x":338,"y":18,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24.5\" height=\"11\"><g id=\"id_M6Zuok11y\" name=\"statusBar_battery\"><path d=\"M 0 1 C 0 0.448 0.448 0 1 0 L 14 0 C 14.552 0 15 0.448 15 1 L 15 6 C 15 6.552 14.552 7 14 7 L 1 7 C 0.448 7 0 6.552 0 6 Z\" transform=\"translate(2 2)\" name=\".batteryFill\"><\/path><path d=\"M 0 0 C 0 0 1.5 0 1.5 1.5 C 1.5 3 0 3 0 3 Z\" transform=\"translate(23 4)\" name=\".batteryCap\"><\/path><path d=\"M 1 3 C 1 1.895 1.895 1 3 1 L 19 1 C 20.105 1 21 1.895 21 3 L 21 8 C 21 9.105 20.105 10 19 10 L 3 10 C 1.895 10 1 9.105 1 8 Z M 0 8 C 0 9.657 1.343 11 3 11 L 19 11 C 20.657 11 22 9.657 22 8 L 22 3 C 22 1.343 20.657 0 19 0 L 3 0 C 1.343 0 0 1.343 0 3 Z\" name=\".batteryOutline\"><\/path><\/g><\/svg>","rotation":null});var statusBar_battery;if(__layer_2__.elements !== undefined){statusBar_battery = __layer_2__.elements["id_M6Zuok11y"];
};if(statusBar_signal !== undefined){statusBar_signal.__framerInstanceInfo = {"framerClass":"SVGGroup","hash":"#vekter|statusBar_signal","targetName":"statusBar_signal","vekterClass":"ShapeGroupNode"}};if(statusBar !== undefined){statusBar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|statusBar","targetName":"statusBar","vekterClass":"FrameNode"}};if(statusBar_time !== undefined){statusBar_time.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|statusBar_time","targetName":"statusBar_time","vekterClass":"TextNode","text":"00:00"}};if(statusBar_wifi !== undefined){statusBar_wifi.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|statusBar_wifi","targetName":"statusBar_wifi","vekterClass":"BooleanShapeNode"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"ShapeGroupNode","framerClass":"SVGLayer"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"ShapeGroupNode","framerClass":"SVGLayer"}};if(statusBar_battery !== undefined){statusBar_battery.__framerInstanceInfo = {"framerClass":"SVGGroup","hash":"#vekter|statusBar_battery","targetName":"statusBar_battery","vekterClass":"ShapeGroupNode"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"framerClass":"SVGLayer","hash":"#vekter|__layer_0__","vekterClass":"BooleanShapeNode","pathBooleanName":"Join"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {statusBar, statusBar_time, statusBar_wifi, statusBar_signal, statusBar_battery});scope["__vekterVariables"] = ["statusBar", "statusBar_time", "statusBar_wifi", "statusBar_signal", "statusBar_battery"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);