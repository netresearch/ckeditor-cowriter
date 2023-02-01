import { defineConfig } from 'vite'

export default defineConfig({
    "base": "./",
    "build": {
        "target": "es6",
        "minify": false,
        "rollupOptions": {
            "input": {
                "index": "index.html",
                "plugin": "src/plugin.js"
            },
            "output": {
                "dir": "dist",
                "sourcemap": false,
                "entryFileNames": "[name].js",
                "chunkFileNames": "[name].js",
                "assetFileNames": "[name].[ext]",
                "manualChunks": {
                    "index": ["index.html"]
                }

            }
        }
    }
})
