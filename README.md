# jQuery
##jquery利用window.$作为一个函数，在我们使用$()其实就是在执行jQuery,同时在constructor里面，将selector放到里面，利用Array.prototype.clice.call(selector)
##将它转化为一个数组，同时循环dom数组，将每一个dom绑定到this之上，同时this.length=dom.length返回数组长度,this.selector=selector返回所传入值
