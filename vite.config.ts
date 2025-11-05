```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { Plugin } from 'vite'

// Plugin to handle figma:asset/* imports
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-plugin',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const hash = id.replace('figma:asset/', '')
        return '\0figma-asset:' + hash
      }
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        return 'export default "' + placeholder + '"'
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), figmaAssetPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['sonner']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 8080
  }
})
```
