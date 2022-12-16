`Webpack` 的热更新又称热替换（`Hot Module Replacement`），缩写为 `HMR`。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 `chunk diff` (chunk 需要更新的部分)，实际上 `webpack-dev-server` 与浏览器之间维护了一个` Websocket`，当本地资源发生变化时，`webpack-dev-server` 会向浏览器推送更新，并带上构建时的 `hash`，让客户端与上一次资源进行对比。客户端对比出差异后会向 `webpack-dev-server` 发起 `Ajax` 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 `webpack-dev-server` 发起请求获取该`chunk`的增量更新。
