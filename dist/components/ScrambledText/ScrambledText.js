"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _server = require("react-dom/server");

var _Scrambler = _interopRequireDefault(require("./Scrambler.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ScrambledText = props => {
  const scramblerRef = (0, _react.useRef)(new _Scrambler.default());
  const wrapper = (0, _react.useRef)();
  const {
    children,
    onComplete = () => null
  } = props;
  const [scrambledText, setScrambledText] = (0, _react.useState)((0, _server.renderToStaticMarkup)(children));
  (0, _react.useEffect)(() => {
    scramblerRef.current.scramble(scrambledText, setScrambledText, props.delay, onComplete);
  }, [null]);
  return /*#__PURE__*/_react.default.createElement("span", {
    ref: wrapper,
    dangerouslySetInnerHTML: {
      __html: scrambledText
    }
  });
};

var _default = ScrambledText;
exports.default = _default;