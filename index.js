'use strict';

const { randomInt } = require('node:crypto');

const BUCHSTABEN_ZIFFERN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const SONDERZEICHEN = '!@#$%^&*()-_=+[]{};:,.<>?/|~';
const MAX_LENGTH = 1000;

function generatePassword(length = 10, sonderzeichen = false) {
    if (!Number.isInteger(length) || length < 1 || length > MAX_LENGTH) {
        throw new RangeError(`length muss eine ganze Zahl zwischen 1 und ${MAX_LENGTH} sein`);
    }
    if (typeof sonderzeichen !== 'boolean') {
        throw new TypeError('sonderzeichen muss true oder false sein');
    }

    const chars = sonderzeichen ? BUCHSTABEN_ZIFFERN + SONDERZEICHEN : BUCHSTABEN_ZIFFERN;

    let pass = '';
    for (let index = 0; index < length; index++) {
        pass += chars[randomInt(chars.length)];
    }
    return pass;
}

module.exports = generatePassword;
