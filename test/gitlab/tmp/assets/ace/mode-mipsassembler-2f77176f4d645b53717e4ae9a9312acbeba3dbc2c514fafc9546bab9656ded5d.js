define("ace/mode/mipsassembler_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,i){"use strict";var r=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:"string.start",regex:'"',next:"qstring"}],qstring:[{token:"escape",regex:/\\./},{token:"string.end",regex:'"',next:"start"}]},this.normalizeRules()};s.metaData=r.inherits(s,n),t.mipsassemblerHighlightRules=s}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,i){"use strict";var r=e("../../lib/oop"),n=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var r=e.getLine(i);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var n=this._getFoldWidgetBase(e,t,i);return!n&&this.startRegionRe.test(r)?"start":n},this.getFoldWidgetRange=function(e,t,i,r){var n=e.getLine(i);if(this.startRegionRe.test(n))return this.getCommentRegionBlock(e,n,i);var s=n.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],i,o);var l=e.getCommentFoldRange(i,o+s[0].length,1);return l&&!l.isMultiLine()&&(r?l=this.getSectionRange(e,i):"all"!=t&&(l=null)),l}if("markbegin"!==t){var s=n.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],i,o):e.getCommentFoldRange(i,o,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),r=i.search(/\S/),s=t,o=i.length;t+=1;for(var l=t,a=e.getLength();++t<a;){i=e.getLine(t);var g=i.search(/\S/);if(-1!==g){if(r>g)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=s)break;if(h.isMultiLine())t=h.end.row;else if(r==g)break}l=t}}return new n(s,o,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,i){for(var r=t.search(/\s*$/),s=e.getLength(),o=i,l=/^\s*(?:\/\*|\/\/)#(end)?region\b/,a=1;++i<s;){t=e.getLine(i);var g=l.exec(t);if(g&&(g[1]?a--:a++,!a))break}var h=i;return h>o?new n(o,r,h,t.length):void 0}}.call(o.prototype)}),define("ace/mode/mipsassembler",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mipsassembler_highlight_rules","ace/mode/folding/cstyle"],function(e,t,i){"use strict";var r=e("../lib/oop"),n=e("./text").Mode,s=e("./mipsassembler_highlight_rules").HighlightRules,o=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=s,this.foldingRules=new o};r.inherits(l,n),function(){this.$id="ace/mode/mipsassembler"}.call(l.prototype),t.Mode=l});