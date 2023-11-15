module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./fonte"],
					alias: {
						"@esp": "./fonte/espolios",
						"@comp": "./fonte/componentes",
						"@rota": "./fonte/rotas",
						"@tela": "./fonte/telas",
						"@arm": "./fonte/armazenamento",
						"@util": "./fonte/utilitarios",
					},
				},
			],
		],
	};
};
