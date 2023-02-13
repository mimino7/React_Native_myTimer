module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			['nativewind/babel'],
			[
				'babel-plugin-root-import',
				{ rootPathSuffix: 'app', rootPathPrefix: '@/' }
			]
		]
	}
}
