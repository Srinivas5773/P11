.PHONY: all build test start clean

all: build test

build:
	node build_full_database.js

test:
	node --test tests/*.test.js

start:
	npm start

clean:
	rm -f *.zip
