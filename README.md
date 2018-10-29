#饿了吗

##饿了您就点个外卖呗

###不好吃不要钱哦

####哈哈哈哈

##导入MUI中的tap-top-webview-main样式，发现导航栏将app组件的Header部分给占了。解决方案：将slider区域的类名为mui-fullscreen这个类去掉

###想要滚动tap-top-webview-main中的导航栏，还得mui('.mui-scroll-wrapper').scroll({deceleration:0.0005})这个方法,但是这个方法不能再严格模式下使用，安装babel-plugin-transform-remove-strict-mode这个插件，并在.babelrc中配置plugins:["transform-remove-strict-mode]
    
####在引入导航栏后发现app组件中的nav栏点击无法正常切换，需要将nav栏中的mui-table-item类名进行修改

#####引入'mui-numbox'这个样式后，当点击其他路由后在返回发现'mui-numbox'中的数字不能正常显示，增加和删除按钮也同时失效，查阅资料后发现numbox 的自动初化是在 mui.ready 时完成的，需要添加  mui('.mui-numbox').numbox() 这行代码进行手动初始化

######在v-for循环的数据中新增属性，并修改该属性的属性值，在控制台发现属性及其属性值修改了，但没有渲染到页面上，上网查阅资料发现原因是：受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。可以通过使用this.$set(this.data,”key”,value)来进行属性的增加及数据的修改