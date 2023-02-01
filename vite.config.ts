import { defineConfig } from 'vite'

export default defineConfig({
    "base": "./",
    "build": {
        "rollupOptions": {
            "input": {
                "index": "index.html",
                "plugin": "src/plugin.ts"
            },
            "output": {
                "format": "esm",
                "dir": "dist",
                "sourcemap": true,
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
