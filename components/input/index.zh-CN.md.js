webpackJsonp([166,210],{

/***/ 1508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "通过鼠标或键盘输入内容，是最基础的表单域的包装。"], ["h2", "何时使用"], ["ul", ["li", ["p", "需要用户输入表单域内容时。"]], ["li", ["p", "提供组合型输入框，带搜索的输入框，还可以进行大小选择。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "输入框",
	    "type": "Data Entry",
	    "title": "Input",
	    "filename": "components/input/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Input"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "type"], ["td", "声明 input 类型，同原生 input 标签的 type 属性。另外提供 ", ["code", "type=\"textarea\""], "。"], ["td", "string"], ["td", ["code", "text"]]], ["tr", ["td", "id"], ["td", "输入框的 id"], ["td", "string"], ["td"]], ["tr", ["td", "value"], ["td", "输入框内容"], ["td", "string"], ["td"]], ["tr", ["td", "defaultValue"], ["td", "输入框默认内容"], ["td", "string"], ["td"]], ["tr", ["td", "size"], ["td", "控件大小。注：标准表单内的输入框大小限制为 ", ["code", "large"], "。可选 ", ["code", "large"], " ", ["code", "default"], " ", ["code", "small"]], ["td", "string"], ["td", ["code", "default"]]], ["tr", ["td", "disabled"], ["td", "是否禁用状态，默认为 false"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "addonBefore"], ["td", "带标签的 input，设置前置标签"], ["td", "React.Node"], ["td"]], ["tr", ["td", "addonAfter"], ["td", "带标签的 input，设置后置标签"], ["td", "React.Node"], ["td"]], ["tr", ["td", "prefix"], ["td", "带有前缀图标的 input"], ["td", "React.Node"], ["td"]], ["tr", ["td", "suffix"], ["td", "带有后缀图标的 input"], ["td", "React.Node"], ["td"]], ["tr", ["td", "onPressEnter"], ["td", "按下回车的回调"], ["td", "function(e)"], ["td"]], ["tr", ["td", "autosize"], ["td", "自适应内容高度，只对 ", ["code", "type=\"textarea\""], " 有效，可设置为 ", ["code", "true|false"], " 或对象：", ["code", "{ minRows: 2, maxRows: 6 }"]], ["td", "boolean or object"], ["td", "false"]]]], ["blockquote", ["p", "如果 ", ["code", "Input"], " 在 ", ["code", "Form.Item"], " 内，并且 ", ["code", "Form.Item"], " 设置了 ", ["code", "id"], " 和 ", ["code", "options"], " 属性，则 ", ["code", "value"], " ", ["code", "defaultValue"], " 和 ", ["code", "id"], " 属性会被自动设置。"]], ["p", "Input 的其他属性和 React 自带的 ", ["a", {
	    "title": null,
	    "href": "https://facebook.github.io/react/docs/events.html#supported-events"
	  }, "input"], " 一致。"], ["h4", "Input.Search"], ["p", ["code", "Added in 2.5.0"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "onSearch"], ["td", "点击搜索或按下回车键时的回调"], ["td", "function(value)"], ["td"]]]], ["p", "其余属性和 Input 一致。"], ["h4", "Input.Group"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "size"], ["td", ["code", "Input.Group"], " 中所有的 ", ["code", "Input"], " 的大小，可选 ", ["code", "large"], " ", ["code", "default"], " ", ["code", "small"]], ["td", "string"], ["td", ["code", "default"]]], ["tr", ["td", "compact"], ["td", "是否用紧凑模式"], ["td", "boolean"], ["td", "false"]]]], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input.Group</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Input.Group</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Input.Group>\n  <Input />\n  <Input />\n</Input.Group>"]]]
	};

/***/ }

});