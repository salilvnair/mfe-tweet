# mfe-tweet

-------------------------------------------------------------------------------------------------------------------------
### ANGULAR MFE
-------------------------------------------------------------------------------------------------------------------------
1. ng new mfe-ng-tweet-builder --createApplication=false
	- this will be the root for the mfe which will be used to build the mfe-ng-tweet mfe

2. ng g lib mfe-ng-tweet

	- this is the library where we will be writing our angular app logic in the demo we will be imitating the tweet chat app.



3. ng g application mfe-ng-tweet-app

	- this is the application which will be used to wrap the angular custom element and generate using ng build



4. ng add @angular/elements --project=mfe-ng-tweet-app

		- add below object in the script property of the mfe-ng-tweet-app in the angular.json   
          "node_modules/document-register-element/build/document-register-element.js"
			  
5. npm install jscat --save-dev	
	
> NOTE: angular app uses webpack by default so if we have multiple mfe built using webpack 
  then there is a known bug to avoid it install angular custom webpack.
  
  Multiple Angular Elements from different scripts, The feature to have multiple angular micro apps on the same page is currently not supported.
  which in turn gives exception below:
  
  ```
  DOMException: Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry
at CustomElementRegistry.define (http://172.27.147.64:8080/node_modules/document-register-element/build/document-register-element.js:2:18538)
at new AppModule (http://172.27.147.64:8080/dist/weather-widget/main.js:115:24)
```


step 1: 
	npm install @angular-builders/custom-webpack --save-dev

step 2:
	 change the build config of mfe-ng-tweet-app
	 
	"builder": "@angular-builders/custom-webpack:browser",
	 
	add customWebpackConfig under option.
	 
    "customWebpackConfig": {
        "path": "projects/mfe-ng-tweet-app/custom-webpack.config.js",
        "mergeStrategies": { "externals": "replace" }
      },

6. npm run build and then use jscat to convert to single js.	

-------------------------------------------------------------------------------------------------------------------------
### REACT MFE
-------------------------------------------------------------------------------------------------------------------------	

1. npx create-react-app mfe-react-tweet

2. add .babelrc config, webcomponent, webpack.config.js copy it from the repository

3. npm run package
	
	
