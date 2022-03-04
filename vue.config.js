const { ChakraLoaderPlugin } = require('chakra-loader');

module.exports = {
	configureWebpack: {
		plugins: [new ChakraLoaderPlugin()],
	},
	publicPath:
		process.env.NODE_ENV === 'production'
			? '/social-proof-vue-chakraui/'
			: '/',
};
