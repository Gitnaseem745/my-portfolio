export async function register() {
  // Node.js 25+ exposes a broken `localStorage` global (an empty object {})
  // when no `--localstorage-file` flag is provided. This causes libraries like
  // `next-themes` to crash with "localStorage.getItem is not a function".
  // Remove the broken global so these libraries fall through to their
  // server-side guards (typeof window === "undefined") correctly.
  if (
    typeof globalThis.localStorage !== "undefined" &&
    typeof globalThis.localStorage.getItem !== "function"
  ) {
    delete (globalThis as Record<string, unknown>).localStorage;
  }
}
