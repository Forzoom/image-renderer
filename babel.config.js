module.exports = {
    presets: [
        [ "@babel/preset-env", {
            useBuiltIns: "usage",
            corejs: 3,
            exclude: [
                '@babel/plugin-transform-async-to-generator',
                '@babel/plugin-transform-regenerator'
            ],
        } ],
        "@babel/preset-typescript"
    ],
    plugins: [
        [ "@babel/plugin-proposal-class-properties" ]
    ]
}
