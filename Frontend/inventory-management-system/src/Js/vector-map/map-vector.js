'use strict';
! function(maps) {
    "use strict";
    var b = function() {};
    b.prototype.init = function() {
        maps("#world-map").vectorMap({
            map: "world_mill_en",
            scaleColors: ["#2196F3", "#1B8BF9"],
            normalizeFunction: "polynomial",
            hoverOpacity: .7,
            hoverColor: !1,
            regionStyle: {
                initial: {
                    fill: "#24695c"
                }
            },
            backgroundColor: "transparent",
        }), maps("#asia").vectorMap({
            map: "asia_mill",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#ba895d"
                } 
            }
        }), maps("#india").vectorMap({
            map: "in_mill",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#222222"
                }
            }
        }), maps("#usa").vectorMap({
            map: "us_aea_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#e2c636"
                }
            }
        }), maps("#uk").vectorMap({
            map: "uk_mill_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#d22d3d"
                }
            }
        }), maps("#canada").vectorMap({
            map: "uk_mill_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#22af47"
                }
            }
        }),maps("#chicago").vectorMap({
            map: "us-il-chicago_mill_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#fb6d9d"
                }
            }
        }),maps("#australia").vectorMap({
            map: "au_mill",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#263238"
                }
            }
        })
    }, maps.VectorMap = new b, maps.VectorMap.Constructor = b
}(window.jQuery),
function(maps) {
    "use strict";
    maps.VectorMap.init()
}(window.jQuery);