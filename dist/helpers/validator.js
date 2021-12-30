"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (schema, toValidate) => {
    const { error } = schema.validate(toValidate);
    if (error) {
        throw new apollo_server_1.UserInputError('VALIDATION ERROR', { validationErros: error.details });
    }
};
