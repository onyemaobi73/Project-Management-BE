"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNotifier = exports.STATUSCODE = void 0;
var STATUSCODE;
(function (STATUSCODE) {
    STATUSCODE[STATUSCODE["OK"] = 200] = "OK";
    STATUSCODE[STATUSCODE["CREATE"] = 201] = "CREATE";
    STATUSCODE[STATUSCODE["BAD"] = 404] = "BAD";
})(STATUSCODE = exports.STATUSCODE || (exports.STATUSCODE = {}));
class ErrorNotifier extends Error {
    constructor(args) {
        super(args.errorMessage);
        this.success = false;
        Object.setPrototypeOf(this, new.target.prototype);
        this.errorName = args.errorName;
        this.errorMessage = args.errorMessage;
        this.errorStatus = args.errorStatus;
        if (this.success !== undefined) {
            this.success = args.success;
        }
        Error.captureStackTrace(this);
    }
}
exports.ErrorNotifier = ErrorNotifier;
