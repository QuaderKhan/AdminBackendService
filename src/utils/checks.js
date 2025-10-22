/**
 * Universal check utilities for Node.js and React.
 * Safe, simple, and portable between CommonJS and ES Modules.
 */

const isNull = (value) => value === null;

const isUndefined = (value) => typeof value === "undefined";

const isNullOrUndefined = (value) => value == null; // true for null or undefined

const isEmptyString = (value) =>
  typeof value === "string" && value.trim().length === 0;

const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;

const isArray = (value) => Array.isArray(value);

const isEmptyArray = (value) =>
  Array.isArray(value) && value.length === 0;

const isNonEmptyArray = (value) =>
  Array.isArray(value) && value.length > 0;

const isObject = (value) =>
  typeof value === "object" && !Array.isArray(value) && value !== null;

const isEmptyObject = (obj) =>
  isObject(obj) && Object.keys(obj).length === 0;

const isNonEmptyObject = (obj) =>
  isObject(obj) && Object.keys(obj).length > 0;

const isFalsy = (value) => !value;

const isTruthy = (value) => !!value;

const hasValue = (value) =>
  !isNullOrUndefined(value) &&
  !isEmptyString(value) &&
  !(Array.isArray(value) && value.length === 0) &&
  !(isObject(value) && Object.keys(value).length === 0);

const withDefault = (value, fallback) =>
  value == null ? fallback : value;

// Export as named exports
const utils = {
  isNull,
  isUndefined,
  isNullOrUndefined,
  isEmptyString,
  isNonEmptyString,
  isArray,
  isEmptyArray,
  isNonEmptyArray,
  isObject,
  isEmptyObject,
  isNonEmptyObject,
  isFalsy,
  isTruthy,
  hasValue,
  withDefault,
};

// ✅ CommonJS (Node.js)
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = utils;
}

// ✅ ESM (when using import/export)
export default utils;
export {
  isNull,
  isUndefined,
  isNullOrUndefined,
  isEmptyString,
  isNonEmptyString,
  isArray,
  isEmptyArray,
  isNonEmptyArray,
  isObject,
  isEmptyObject,
  isNonEmptyObject,
  isFalsy,
  isTruthy,
  hasValue,
  withDefault,
};
