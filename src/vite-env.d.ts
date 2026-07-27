/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHECKOUT_URL?: string;
  readonly VITE_AFFILIATE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
