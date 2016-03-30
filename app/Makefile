build:
	npm install
	typings install
	mkdir -p app
	rm -rf app/*
	tsc -p tsconfig.json --outDir app
	mkdir -p app/js
	mkdir -p app/css
	mkdir -p app/fonts
	mkdir -p app/bmp
	cp -r css/* app/css
	cp -r js/* app/js
	cp -r fonts/* app/fonts
	cp -r node_modules app
	cp -r bmp app/bmp
	cp base.html index.html
	sass -I app/node_modules/bootstrap/scss --style compressed sass/*.scss app/css/application.css

clean:
	rm -rf node_modules
	rm -rf typings
	rm -rf app
	rm -rf index.html
