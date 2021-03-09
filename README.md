# Boilerplate for NodeJS/Typescript/Express/HBS/SASS

As the title goes, this is a simple boilerplate for an Express/NodeJS server with Typescript compiling, SASS compiling and other stuff required for simple projects.

It's meant to be simple and basic, so that additional functionalities can be further implemented without the need to study this boilerplate. It is meant to be "plug and play" (or as close as possible to that).

## Observations:

I used webpack-cli@3.3.12 because further versions required node version "`>=10.17.0`", and my current work version is "`10.16.0`" (due to company restrictions, I was not able to update this version). If anyone would use this and doesn't have this kind of restriction, I suggest you update `webpack-cli`, `webpack` and `copy-webpack-plugin` to the latest version (`yarn add -D webpack-cli webpack copy-webpack-plugin` should do the trick).