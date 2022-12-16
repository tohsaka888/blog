当 webpack 打包源代码时，可能会很难追踪到 `error`(错误) 和 `warning`(警告) 在源代码中的原始位置。`JavaScript` 提供了 `source maps` 功能，可以将编译后的代码映射回原始源代码。如果一个错误来自于 `b.js`，`source map` 就会明确的告诉你。
