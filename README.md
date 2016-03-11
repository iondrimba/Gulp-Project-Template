#Gulp Project Template /  Backbone + RequireJs 

[![Travis build status](https://travis-ci.org/iondrimba/Gulp-Project-Template.svg?branch=master)](https://travis-ci.org/iondrimba/Gulp-Project-Template)

#### Requires:

* NodeJs
* Gulp

## Installation

```sh
 git clone https://github.com/iondrimba/Gulp-Project-Template.git 
 cd Gulp-Project-Template
 npm install
 gulp
```

###[Live demo]

#### Includes:

* BrowserSync
* Backbone
* Underscore
* RequireJs
* Sass
* Uglify
* Watch
* Copy files
* Concat Vendors css/js files
* Css-Min

#### Gulp Tasks:

* gulp (default)
* gulp prod (production)

#### Structure:

````bash

public/

    css/
    scripts/
    index.html

src/
    scripts/
		app/
		vendors/
		require.js
    scss/
		vendors/
		views/
		app.scss
tasks/

.gitignore
.travis.yml
gulpfile.js
index.html
LICENSE
package.json
r.js
README.md
````

[Live demo]:<http://iondrimba.github.io/Gulp-Project-Template/>