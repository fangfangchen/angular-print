# angular-print
## 依赖库
1.jquery

2.jquery.jqprint.js
[http://www.jq22.com/jquery-info347](http://www.jq22.com/jquery-info347, '')

3.jquery-migrate.min.js
**请注意!很多朋友遇到 Cannot read property 'opera' of undefined错误问题是juqery版本兼容问题
解决方法：加入迁移辅助插件jquery-migrate-1.0.0.js可解决版本问题

在打印jqprint插件基础上，把打印的操作自定义为指令，方便使用。

	在需要的地方直接引入：
	<print-directive printscope="mainPage" options="printOptions"></print-directive>
	
	<div id="mainPage">
		// something need to print
	</div>
