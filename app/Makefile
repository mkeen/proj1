build:
	npm install
	typings install
	mkdir -p app
	rm -rf app/*
	tsc -p tsconfig.json --outDir app
	mv node_modules app
	cp base.html index.html

clean:
	rm -rf node_modules
	rm -rf typings
	rm -rf app
