# Image Viewer

This project was bootstrapped with [React Native](https://reactnative.dev/).

## Development

### Pre requirements

##### General

- `node.js`: `18.*`
- `yarn`: `1.22.*`
- `xcode`: `>=15.*`
- `ios simulator`
- `watchman`: `*`
- `cocoapods`: `1.15.2`

### Installation

Need install

1.  [node](https://nodejs.org/en/download)
2.  [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3.  Install other dependencies as [instructed](https://reactnative.dev/docs/environment-setup) (see **React Native CLI Quickstart**).

### Launching

---

1. pull fresh code changes from the repository

2. run `yarn install` on repository root

3. run `cd ios && pod install && cd ../`

4. yarn run watch:ios

# Available Scripts

In the project directory, you can run:

### `yarn run start:clear`

Clears the react-native cache and starts the react-native console.

### `yarn run watch:ios`

Deploys the developer's environment and launches the project in the iOS Simulator.

### `yarn run clean:ios`

Clears cache on the ios simulator and react-native cache. Important! Before run turn off the simulator.

### `yarn run prettier`

Run prettier.\
See the [documentation](https://prettier.io/docs/en/cli.html) for the `prettier` package for details.

### `yarn run lint`

Run eslint.

### `yarn run test`

Run unit tests.

### `yarn run typecheck`

Run TypeScript typecheck.
