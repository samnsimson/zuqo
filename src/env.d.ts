/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AUDIO_FILE_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
