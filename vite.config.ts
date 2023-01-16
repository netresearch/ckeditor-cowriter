import {defineConfig} from 'vite'

export default defineConfig({
    "build": {
        "rollupOptions": {
            "input": "src/plugin.ts",
            "output": {
                "format": "esm",
                "dir": "dist",
                "sourcemap": true,
                "entryFileNames": "[name].js",
                "chunkFileNames": "[name].js",
                "assetFileNames": "[name].[ext]"
            }
        }
    }
})
