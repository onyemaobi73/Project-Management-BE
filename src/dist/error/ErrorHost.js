"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHost = void 0;
const ErrorNotifier_1 = require("./ErrorNotifier");
const errorField = (err, res) => {
    return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({
        errorName: err.errorName,
        errorMessage: err.errorMessage,
        errorStatus: err.errorStatus,
        success: err.success,
        stack: err.stack,
        err,
    });
};
const errorHost = (err, req, res, next) => {
    errorField(err, res);
};
exports.errorHost = errorHost;
