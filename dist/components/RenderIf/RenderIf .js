"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RenderIf = _ref => {
  let {
    isTrue,
    children
  } = _ref;
  return isTrue ? children : null;
};

var _default = RenderIf;
exports.default = _default;