---
sidebar_position: 5
---

## 内容安全策略 ( `CSP` )

内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。

`CSP` 的主要目标是减少和报告 `XSS` 攻击，`XSS` 攻击利用了浏览器对于从服务器所获取的内容的信任。恶意脚本在受害者的浏览器中得以运行，因为浏览器信任其内容来源，即使有的时候这些脚本并非来自于它本该来的地方。

`CSP` 通过指定**有效域**——即浏览器认可的可执行脚本的有效来源——使服务器管理者有能力减少或消除 `XSS` 攻击所依赖的载体。一个 `CSP` 兼容的浏览器将会仅执行从白名单域获取到的脚本文件，忽略所有的其他脚本 (包括内联脚本和 HTML 的事件处理属性)。

## HTTP Strict Transport Security

`HTTP-Strict-Transport-Security`（通常简称为 `HSTS`）响应标头用来通知浏览器应该只通过 `HTTPS` 访问该站点，并且以后使用 `HTTP` 访问该站点的所有尝试都应自动转换为 `HTTPS`。

## X-Content-Type-Options

`X-Content-Type-Options` HTTP 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 `Content-Type` 首部中对 `MIME` 类型 的设定，而不能对其进行修改。这就禁用了客户端的 `MIME` 类型嗅探行为，换句话说，也就是意味着网站管理员确定自己的设置没有问题。

## X-Frame-Options

X-Frame-Options HTTP 响应头是用来给浏览器指示允许一个页面可否在 `<frame>`、`<iframe>`、`<embed>` 或者 `<object>` 中展现的标记。站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免点击劫持 (en-US)攻击。

## Cookie Security

见 HTTP Cookie这章。