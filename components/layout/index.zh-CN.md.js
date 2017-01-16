webpackJsonp([164,210],{

/***/ 1515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "可协助进行页面级整体布局。"], ["h2", "概述"], ["ul", ["li", ["p", ["code", "Layout"], "：布局容器，其下可嵌套 ", ["code", "Header"], " ", ["code", "Sider"], " ", ["code", "Content"], " ", ["code", "Footer"], " 或 ", ["code", "Layout"], " 本身。"]], ["li", ["p", ["code", "Header"], "：顶部布局，自带默认样式。"]], ["li", ["p", ["code", "Sider"], "：侧边栏，自带默认样式及基本功能。"]], ["li", ["p", ["code", "Content"], "：内容部分，自带默认样式。"]], ["li", ["p", ["code", "Footer"], "：底部布局，自带默认样式。"]]], ["blockquote", ["p", "注意：采用 flex 布局实现，请注意", ["a", {
	    "title": null,
	    "href": "http://caniuse.com/#search=flex"
	  }, "浏览器兼容性"], "问题。"]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "布局",
	    "type": "Layout",
	    "cols": 1,
	    "title": "Layout",
	    "filename": "components/layout/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#概述"
	  }, "概述"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span><span class=\"token punctuation\">></span></span>header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span><span class=\"token punctuation\">></span></span>left sidebar<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span><span class=\"token punctuation\">></span></span>main content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span><span class=\"token punctuation\">></span></span>right sidebar<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span><span class=\"token punctuation\">></span></span>footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Sider>left sidebar</Sider>\n    <Content>main content</Content>\n    <Sider>right sidebar</Sider>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>"]], ["h3", "Layout"], ["p", "布局容器。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "style"], ["td", "指定样式"], ["td", "Object"], ["td", "-"]], ["tr", ["td", "className"], ["td", "容器 className"], ["td", "string"], ["td", "-"]]]], ["blockquote", ["p", ["code", "Layout.Header"], " ", ["code", "Layout.Footer"], " ", ["code", "Layout.Content"], " API 与 ", ["code", "Layout"], " 相同"]], ["h3", "Layout.Sider"], ["p", "侧边栏。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "collapsible"], ["td", "是否可收起"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "defaultCollapsed"], ["td", "是否默认收起"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "collapsed"], ["td", "当前收起状态"], ["td", "Boolean"], ["td", "-"]], ["tr", ["td", "onCollapse"], ["td", "展开-收起时的回调函数，仅当 ", ["code", "collapsible:true"], " 时生效"], ["td", "(collapsed) => {}"], ["td", "-"]], ["tr", ["td", "trigger"], ["td", "自定义 trigger，设置为 null 时隐藏 trigger"], ["td", "React.ReactNode or null"], ["td", "-"]], ["tr", ["td", "width"], ["td", "宽度"], ["td", "Number or String"], ["td", "200"]], ["tr", ["td", "collapsedWidth"], ["td", "收缩宽度，仅当 ", ["code", "collapsible:true"], " 时生效"], ["td", "Number"], ["td", "64"]], ["tr", ["td", "style"], ["td", "指定样式"], ["td", "Object"], ["td", "-"]], ["tr", ["td", "className"], ["td", "容器 className"], ["td", "string"], ["td", "-"]]]]]
	};

/***/ }

});