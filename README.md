# jseditor

A multi-file javascript playground build with vuejs and designed with module and asset bundling

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at 0.0.0.0:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report on 0.0.0.0:8081
npm run build --report

#build for production and run the production server on 0.0.0.0:8080
npm run distserve
```

## Folder Layout

```
jseditor
|-> build  # build scripts, dev server etc. 
|-> config # build configuration
|-> deploy # files to be copied into the build
|-> dist   # built files
|-> server # server - fucntion that takes express app as input
|-> src    # front end sorce
\-> static # static files - images etc
```

## Vuejs template

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
