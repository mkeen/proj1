build:
	npm install
	typings install
	mkdir -p app
	rm -rf app/*
	tsc -p tsconfig.json --outDir app
	mkdir -p app/js
	cp -r js/* app/js
	cp -r node_modules app
	cp base.html index.html
	mkdir app/css
	sass -I app/node_modules/bootstrap/scss --style compressed sass/*.scss app/css/application.css

clean:
	rm -rf node_modules
	rm -rf typings
	rm -rf app
	rm -rf index.html
