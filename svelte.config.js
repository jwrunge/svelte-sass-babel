// This serves no purpose - it just tricks the VS Code language server into not pointing out Sass code as errors 

const sveltePreprocess = require('svelte-preprocess')
const path = require('path')

module.exports = {
	preprocess: sveltePreprocess({ includePaths: [path.join(__dirname, 'src/')] })
}