# xplat sample for ionic + web

## Setup

```
npm i
npm run prepare.ionic.myapp.ios
// or...
npm run prepare.ionic.myapp.android
```

## Run

* web: `npm start`
* ionic (live reload browser dev): `npm run start.ionic.myapp`

See other [ionic runtime options here](https://nstudio.io/xplat/generators/#appionic).


### Commands used to setup this workspace

```
create-nx-workspace xplat-sample-ionic-web
cd xplat-sample-ionic-web
npm i @nstudio/schematics -D
ng g xplat --prefix=abc --platforms=ionic,web
ng g app myapp
ng g app.ionic myapp
```