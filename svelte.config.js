const SveltePreprocess  = require('svelte-preprocess')

module.exports = {
    preprocess: SveltePreprocess({
        typescript: true,
        postcss: true,
        scss: true
    })
}
