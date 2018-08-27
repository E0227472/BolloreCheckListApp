"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TruncateTextPipe = /** @class */ (function () {
    function TruncateTextPipe() {
    }
    TruncateTextPipe.prototype.transform = function (value, length) {
        //https://en.wikipedia.org/wiki/Longest_word_in_English
        var biggestWord = 50;
        var elipses = "...";
        if (typeof value === "undefined")
            return value;
        if (value.length <= length)
            return value;
        //.. truncate to about correct lenght
        var truncatedText = value.slice(0, length + biggestWord);
        //.. now nibble ends till correct length
        while (truncatedText.length > length - elipses.length) {
            var lastSpace = truncatedText.lastIndexOf(" ");
            if (lastSpace === -1)
                break;
            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');
        }
        ;
        console.log((truncatedText + elipses).length);
        return truncatedText + elipses;
    };
    TruncateTextPipe = __decorate([
        core_1.Pipe({
            name: 'truncateText'
        }),
        core_1.Injectable()
    ], TruncateTextPipe);
    return TruncateTextPipe;
}());
exports.TruncateTextPipe = TruncateTextPipe;
//# sourceMappingURL=truncate-text.pipe.js.map