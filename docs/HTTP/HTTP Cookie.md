---
sidebar_position: 6
---

`HTTP Cookie`（也叫 `Web Cookie` 或浏览器 `Cookie`）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 `cookie` 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。`Cookie` 使基于无状态的 `HTTP` 协议记录稳定的状态信息成为了可能。

Cookie 主要用于以下三个方面：

- 会话状态管理

  - 如用户登录状态、购物车、游戏分数或其它需要记录的信息

- 个性化设置

  - 如用户自定义设置、主题和其他设置

- 浏览器行为跟踪
  - 如跟踪分析用户行为等

## 创建 Cookie

### Set-Cookie 和 Cookie 标头

服务器使用 `Set-Cookie` 响应头部向用户代理（一般是浏览器）发送 `Cookie` 信息。一个简单的 `Cookie` 可能像这样：

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

### document.cookie

```js
document.cookie = "...";
```

## 定义 Cookie 的生命周期

`Cookie` 的生命周期可以通过两种方式定义：

- 会话期 `Cookie` 会在当前的会话结束之后删除。浏览器定义了“当前会话”结束的时间，一些浏览器重启时会使用会话恢复。这可能导致会话 `cookie` 无限延长。(不设置`expires`默认为会话期)
- 持久性 `Cookie` 在过期时间（`Expires`）指定的日期或有效期（`Max-Age`）指定的一段时间后被删除。

## 限制访问 Cookie

有两种方法可以确保 `Cookie` 被安全发送，并且不会被意外的参与者或脚本访问：`Secure` 属性和 `HttpOnly` 属性。

标记为 `Secure` 的 `Cookie` 只应通过被 `HTTPS` 协议加密过的请求发送给服务端。

`JavaScript` `Document.cookie` API 无法访问带有 `HttpOnly` 属性的 `cookie`, 此类 Cookie 仅作用于服务器。例如，持久化服务器端会话的 Cookie 不需要对 JavaScript 可用，而应具有 HttpOnly 属性。此预防措施有助于缓解**跨站点脚本（XSS）** 攻击。

## 定义 Cookie 发送的位置

`Domain` 和 `Path` 标识定义了 `Cookie` 的作用域：即允许 `Cookie` 应该发送给哪些 `URL`。

### `Domain` 属性

`Domain` 指定了哪些主机可以接受 `Cookie`。如果不指定，该属性默认为同一 `host` 设置 `cookie`，不包含子域名。如果指定了 `Domain`，则一般包含子域名。因此，指定 `Domain` 比省略它的限制要少。但是，当子域需要共享有关用户的信息时，这可能会有所帮助。

### `Path` 属性

`Path` 属性指定了一个 `URL` 路径，该 `URL` 路径必须存在于请求的 `URL` 中，以便发送 `Cookie` 标头。以字符 %x2F (“/”) 作为路径分隔符，并且子路径也会被匹配。

### `SameSite` 属性

`SameSite` 属性允许服务器指定是否/何时通过跨站点请求发送。这提供了一些针对**跨站点请求伪造攻击CSRF**的保护。它采用三个可能的值：Strict、Lax 和 None。

使用 Strict，cookie 仅发送到它来源的站点。Lax 与 Strict 相似，只是在用户导航到 cookie 的源站点时发送 cookie。例如，通过跟踪来自外部站点的链接。None 指定浏览器会在同站请求和跨站请求下继续发送 cookie，但仅在安全的上下文中（即，如果 SameSite=None，且还必须设置 Secure 属性）。如果没有设置 SameSite 属性，则将 cookie 视为 Lax。

```http
Set-Cookie: mykey=myvalue; SameSite=Strict
```

## 安全

缓解涉及 Cookie 的攻击的方法：

- 使用 `HttpOnly` 属性可防止通过 `JavaScript` 访问 `cookie` 值。
- 用于敏感信息（例如指示身份验证）的 `Cookie` 的生存期应较短，并且 `SameSite` 属性设置为 `Strict` 或 `Lax`。（请参见上方的 SameSite Cookie。）在支持 `SameSite` 的浏览器中，这样做的作用是确保不与跨域请求一起发送身份验证 `cookie`。因此，这种请求实际上不会向应用服务器进行身份验证。