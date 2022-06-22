/* eslint-disable no-console */
import esbuild from 'esbuild'
import copyStaticFiles from 'esbuild-copy-static-files'

const buildDirectory = 'dist'
const production = process.env.NODE_ENV === 'production'

// Config entrypoint files
const entryPoints = ['src/index.ts']

/**
 * Default Settings
 * @type {esbuild.BuildOptions}
 */
const defaultSettings = {
  bundle: true,
  outdir: buildDirectory,
  minify: production,
  sourcemap: !production,
  target: production ? 'es6' : 'esnext',
  entryPoints,
  plugins: [
    copyStaticFiles({
      src: './static',
      dest: './dist/public',
    }),
  ],
}

// Files building
if (production) {
  esbuild.build(defaultSettings)
}

// Files serving
else {
  esbuild
    .serve(
      {
        servedir: buildDirectory,
        port: 3000,
      },
      defaultSettings
    )
    .then((server) => {
      console.log(`Serving at http://localhost:${server.port}`)
    })
}
