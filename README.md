# sotrybook

yarn build-storybook
upladed in
https://storybook-leo.netlify.app/?path=/story/ui-mylabel--basic

    "start": "start-storybook -p 6006",
    "build": "build-storybook",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "chromatic": "npx chromatic --project-token=2c73d1f0e117"

## Configurar package.json para desplegar en github actions:

"typings": "dist/index.d.ts",
"main": "dist/index.js",
"homepage": "https://leo.jaimes.estevez.dev",
"repository": {
"url": "https://github.com/leojaimes/my-storybook",
"type": "git"
},
"release" : {
"branches" : [
"main",
"ui-tutorial"
],
"files": [
"dist",
"src"
]
},

# Cambios en tsconfig.json

```
{
"compilerOptions": {
"outDir": "dist",
"target": "es5",
"lib": [
"dom",
"dom.iterable",
"esnext"
],
"declaration": true,
"allowJs": true,
"skipLibCheck": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"noFallthroughCasesInSwitch": true,
"module": "commonjs",
"moduleResolution": "node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": false,
"jsx": "react-jsx"
},
"include": [
"src"
]
}
```

# tsc

para llenar la carpeta de dist (distribution)

# Semantic release

agregar al archivo json luego de la instalación de semantic-release (yarn add -D semantic-release)
"plugins": [
"@semantic-release/commit-analyzer",
"@semantic-release/release-notes-generator",
"@semantic-release/changelog",
"@semantic-release/github",
"@semantic-release/npm",
"@semantic-release/git"
],
