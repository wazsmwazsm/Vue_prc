# 编写可复用组件

在编写组件时，最好考虑好以后是否要进行复用。
一次性组件间有紧密的耦合没关系，但是可复用组件应当定义一个清晰的公开接口，
同时也不要对其使用的外层数据作出任何假设。

Vue 组件的 API 来自三部分——prop、事件和插槽：
-  Prop 允许外部环境传递数据给组件；
-  事件允许从组件内触发外部环境的副作用；
-  插槽允许外部环境将额外的内容组合在组件中。

使用 v-bind 和 v-on 的简写语法，模板的意图会更清楚且简洁：

```HTML
<my-component
  :foo="baz"
  :bar="qux"
  @event-a="doThis"
  @event-b="doThat"
>
  <img slot="icon" src="...">
  <p slot="main-text">Hello!</p>
</my-component>
```
# 子组件引用
尽管有 prop 和事件，但是有时仍然需要在 JavaScript 中直接访问子组件。
为此可以使用 ref 为子组件指定一个引用 ID。例如：

```HTML
<div id="parent">
  <user-profile ref="profile"></user-profile>
</div>
```
```JavaScript
var parent = new Vue({ el: '#parent' })
// 访问子组件实例
var child = parent.$refs.profile
```
当 ref 和 v-for 一起使用时，获取到的引用会是一个数组，包含和循环数据源对应的子组件
$refs 只在组件渲染完成后才填充，并且它是非响应式的。
它仅仅是一个直接操作子组件的应急方案——应当避免在模板或计算属性中使用 $refs。

# 异步组件
在大型应用中，我们可能需要将应用拆分为多个小模块，按需从服务器下载.
为了进一步简化，Vue.js 允许将组件定义为一个工厂函数，异步地解析组件的定义.
Vue.js 只在组件需要渲染时触发工厂函数，并且把结果缓存起来，用于后面的再次渲染。
如果你是 Browserify 用户，可能就无法使用异步组件了，
它的作者已经表明 Browserify 将“永远不会支持异步加载”。

# 高级异步组件
见文档

# 组件命名约定
当注册组件 (或者 prop) 时，可以使用 kebab-case (短横线分隔命名)、
camelCase (驼峰式命名) 或 PascalCase (单词首字母大写命名)。
```javascript
// 在组件定义中
components: {
  // 使用 kebab-case 注册
  'kebab-cased-component': { /* ... */ },
  // 使用 camelCase 注册
  'camelCasedComponent': { /* ... */ },
  // 使用 PascalCase 注册
  'PascalCasedComponent': { /* ... */ }
}
```
在 HTML 模板中，请使用 kebab-case：
```html
<!-- 在 HTML 模板中始终使用 kebab-case -->
<kebab-cased-component></kebab-cased-component>
<camel-cased-component></camel-cased-component>
<pascal-cased-component></pascal-cased-component>
```
当使用字符串模式时，可以不受 HTML 大小写不敏感的限制。这意味实际上在模板中，你可以使用下面的方式来引用你的组件：
kebab-case
camelCase 或 kebab-case (如果组件已经被定义为 camelCase)
kebab-case、camelCase 或 PascalCase (如果组件已经被定义为 PascalCase)

这意味着 PascalCase 是最通用的声明约定而 kebab-case 是最通用的使用约定。

# 递归组件
组件在它的模板内可以递归地调用自己。不过，只有当它有 name 选项时才可以这么做：

# 组件间的循环引用
见文档

# 内联模板
如果子组件有 inline-template 特性，组件将把它的内容当作它的模板，而不是把它当作分发内容。这让模板编写起来更灵活。
```html
<my-component inline-template>
  <div>
    <p>这些将作为组件自身的模板。</p>
    <p>而非父组件透传进来的内容。</p>
  </div>
</my-component>
```
但是 inline-template 让模板的作用域难以理解。
使用 template 选项在组件内定义模板或者在 .vue 文件中使用 template 元素才是最佳实践。

# X-Template
另一种定义模板的方式是在 JavaScript 标签里使用 text/x-template 类型，并且指定一个 id
```html
<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello</p>
</script>
```
```javascript
Vue.component('hello-world', {
  template: '#hello-world-template'
})
```
这在有很多大模板的演示应用或者特别小的应用中可能有用，其它场合应该避免使用，因为这将模板和组件的其它定义分离了。

# 对低开销的静态组件使用 v-once
尽管在 Vue 中渲染 HTML 很快，不过当组件中包含大量静态内容时，可以考虑使用 v-once 将渲染结果缓存起来
```javascript
Vue.component('terms-of-service', {
  template: '\
    <div v-once>\
      <h1>Terms of Service</h1>\
      ...很多静态内容...\
    </div>\
  '
})
```
