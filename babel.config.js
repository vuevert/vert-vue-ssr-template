module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": [
          "last 1 Chrome major versions",
          "last 2 Firefox major versions",
          "last 2 Safari major versions",
          "last 2 Edge major versions",
          "last 3 Android major versions",
          "last 3 ChromeAndroid major versions",
          "last 2 iOS major versions"
        ]
      },
      "modules": "auto",
      "useBuiltIns": "entry",
      "corejs": {
        "version": "3.11.0",
        "proposals": true
      }
    }]
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import"
  ]
}
