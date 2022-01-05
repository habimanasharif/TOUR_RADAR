"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/prefer-default-export */
exports.default = (file) => {
    const ext = file.split('.').pop();
    return ext;
};
