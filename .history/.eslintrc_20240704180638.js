// https://docs.expo.dev/guides/using-eslint/
// module.exports = {
//   extends: 'expo',
// };

module.exports = {
	root: true,
	extends: ["universe/native"],
	"prettier/prettier": [
		"error",
		{
			endOfLine: "auto",
		},
	],
};

