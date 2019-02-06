define("ace/mode/applescript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,i){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,n=function(){var e="about|above|after|against|and|around|as|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|contain|contains|continue|copy|div|does|eighth|else|end|equal|equals|error|every|exit|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|into|is|it|its|last|local|me|middle|mod|my|ninth|not|of|on|onto|or|over|prop|property|put|ref|reference|repeat|returning|script|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|try|until|where|while|whose|with|without",t="AppleScript|false|linefeed|return|pi|quote|result|space|tab|true",i="activate|beep|count|delay|launch|log|offset|read|round|run|say|summarize|write",r="alias|application|boolean|class|constant|date|file|integer|list|number|real|record|string|text|character|characters|contents|day|frontmost|id|item|length|month|name|paragraph|paragraphs|rest|reverse|running|time|version|weekday|word|words|year",o=this.createKeywordMapper({"support.function":i,"constant.language":t,"support.type":r,keyword:e},"identifier");this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",regex:"\\(\\*",next:"comment"},{token:"string",regex:'".*?"'},{token:"support.type",regex:"\\b(POSIX file|POSIX path|(date|time) string|quoted form)\\b"},{token:"support.function",regex:"\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"},{token:"constant.language",regex:"\\b(text item delimiters|current application|missing value)\\b"},{token:"keyword",regex:"\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"},{token:o,regex:"[a-zA-Z][a-zA-Z0-9_]*\\b"}],comment:[{token:"comment",regex:"\\*\\)",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()};r.inherits(n,o),t.AppleScriptHighlightRules=n}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,i){"use strict";var r=e("../../lib/oop"),o=e("../../range").Range,n=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(a,n),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var r=e.getLine(i);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,t,i);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,t,i,r){var o=e.getLine(i);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,i);var n=o.match(this.foldingStartMarker);if(n){var a=n.index;if(n[1])return this.openingBracketBlock(e,n[1],i,a);var s=e.getCommentFoldRange(i,a+n[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,i):"all"!=t&&(s=null)),s}if("markbegin"!==t){var n=o.match(this.foldingStopMarker);if(n){var a=n.index+n[0].length;return n[1]?this.closingBracketBlock(e,n[1],i,a):e.getCommentFoldRange(i,a,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),r=i.search(/\S/),n=t,a=i.length;t+=1;for(var s=t,l=e.getLength();++t<l;){i=e.getLine(t);var g=i.search(/\S/);if(-1!==g){if(r>g)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=n)break;if(c.isMultiLine())t=c.end.row;else if(r==g)break}s=t}}return new o(n,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,i){for(var r=t.search(/\s*$/),n=e.getLength(),a=i,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++i<n;){t=e.getLine(i);var g=s.exec(t);if(g&&(g[1]?l--:l++,!l))break}var c=i;return c>a?new o(a,r,c,t.length):void 0}}.call(a.prototype)}),define("ace/mode/applescript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/applescript_highlight_rules","ace/mode/folding/cstyle"],function(e,t,i){"use strict";var r=e("../lib/oop"),o=e("./text").Mode,n=e("./applescript_highlight_rules").AppleScriptHighlightRules,a=e("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=n,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};r.inherits(s,o),function(){this.lineCommentStart="--",this.blockComment={start:"(*",end:"*)"},this.$id="ace/mode/applescript"}.call(s.prototype),t.Mode=s});