export APP_PATH := $(PWD)

install-all: install-nodejs install-modules

install-nodejs:
	source $$(brew --prefix nvm)/nvm.sh; nvm install 10.16.3 && nvm use 10.16.3
	
# lerna bootstrap: install all dependencies of 3 packages
# npm run build: compile all ts file -> js file
install-modules:
	cd $(APP_PATH) && npm install
	cd $(APP_PATH) && npx lerna bootstrap
	cd $(APP_PATH) && npm run build