---
sidebar_position: 1
---

## HTTP/0.9 -- 单行协议

最初版本的 `HTTP` 协议并没有版本号，后来它的版本号被定位在 `0.9` 以区分后来的版本。`HTTP/0.9` 极其简单：请求由单行指令构成，以唯一可用方法 GET 开头，其后跟目标资源的路径（一旦连接到服务器，协议、服务器、端口号这些都不是必须的）。

```txt
GET /mypage.html
```

响应也极其简单的：只包含响应文档本身。

```html
<html>
  这是一个非常简单的 HTML 页面
</html>
```

跟后来的版本不同，`HTTP/0.9` 的响应内容并不包含 `HTTP 头`，这意味着只有 `HTML` 文件可以传送，无法传输其他类型的文件；也没有状态码或错误代码：一旦出现问题，一个特殊的包含问题描述信息的 `HTML` 文件将被发回，供人们查看。

## HTTP/1.0 – 构建可扩展性

- 议版本信息现在会随着每个请求发送（`HTTP/1.0`被追加到了`GET`行）。
- 状态码会在响应开始时发送，使浏览器能了解请求执行成功或失败，并相应调整行为。
- 引入了 `HTTP` 头的概念，无论是对于请求还是响应，允许传输元数据，使协议变得非常灵活，更具扩展性。
- 在新 `HTTP` 头的帮助下，具备了传输除纯文本 `HTML` 文件以外其他类型文档的能力（凭借`Content-Type`头）。

一个典型的请求看起来就像这样：

```text
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
一个包含图片的页面
  <IMG SRC="/myimage.gif">
</HTML>
```

接下来是第二个连接，请求获取图片：

```text
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(这里是图片内容)
```

## HTTP/1.1 – 标准化的协议

- 连接可以复用，节省了多次打开 `TCP` 连接加载网页文档资源的时间。
- 增加管线化技术，允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟。
- 支持响应分块。
- 引入额外的缓存控制机制。
- 凭借 `Host` 头，能够使不同域名配置在同一个 `IP` 地址的服务器上。

```text
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)


GET /static/img/header-background.png HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

(image content of 3077 bytes)
```

## HTTP/2

- 对 `Alt-Svc` 的支持允许了给定资源的位置和资源鉴定，允许了更智能的 `CDN` 缓冲机制。
- `Client-Hints` 的引入允许浏览器或者客户端来主动交流它的需求，或者是硬件约束的信息给服务端。
- 在 `Cookie` 头中引入安全相关的的前缀，现在帮助保证一个安全的 `cookie` 没被更改过。
- 封装成帧
