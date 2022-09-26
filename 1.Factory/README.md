
# Factory Pattern

## Installations

```npm init -y```

```npm install --save-dev typescript```

## create tsconfig.json:
```
past:
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

## Compile
```
 npx tsc
```

## Run
```
node dist/app.js
```
