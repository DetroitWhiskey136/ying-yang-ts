module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: ['./src/'],
        out: './docs',
        tsconfig: './tsconfig.json',
      },
    ],
  ],
};
