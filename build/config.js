// config.js
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel').default;
const alias = require('@rollup/plugin-alias');
const path = require('path');

const extensions = [ '.ts', '.js', '.vue' ];

module.exports = exports = [
    {
        input: './src/index.ts',
        output: {
            file: './dist/image-renderer.esm.js',
            format: 'esm',
        },
        // 将部分依赖作为外置内容
        external: [ 'core-js' ],
        plugins: [
            alias({
                entries: [
                    { find: '@', replacement: path.join(__dirname, '../src') }
                ],
            }),
            nodeResolve({
                extensions,
            }),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },

    {
        input: './src/index.ts',
        output: {
            file: './dist/image-renderer.cjs.js',
            format: 'cjs',
        },
        external: [ 'core-js' ],
        plugins: [
            nodeResolve({
                extensions,
            }),
            alias({
                entries: [
                    { find: '@', replacement: path.join(__dirname, '../src') }
                ],
            }),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
    {
        input: './src/index.ts',
        output: {
            file: './dist/image-renderer.umd.js',
            name: 'FormRenderer',
            format: 'umd',
        },
        external: [ 'core-js' ],
        plugins: [
            nodeResolve({
                extensions,
            }),
            alias({
                entries: [
                    { find: '@', replacement: path.join(__dirname, '../src') }
                ],
            }),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
];