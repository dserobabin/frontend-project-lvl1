install:
	make -C frontend lint

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
