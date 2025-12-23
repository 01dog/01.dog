const autoprefixer = require('autoprefixer');

const config = {
	plugins: {
		"@tailwindcss/postcss": {},
		//But others, like autoprefixer, need to run after,
		autoprefixer
	}
};

module.exports = config;
