const SveltePreprocess  = require('svelte-preprocess')

module.exports = {
    preprocess: SveltePreprocess({
        typescript: true,
        sass      : true,
        scss      : true
    })
}
