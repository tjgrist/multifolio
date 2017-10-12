## Prepare

Install Dependencies:

1. NodeJS( ~> 6.2.2 )

   `$ brew update && brew install node`

2. yarn

    `$ npm install -g yarn`

3. rnpm

    `npm install -g rnpm`

On iOS platform, `Xcode` is needed.

On Android platfrom, `Android studio` or `Genymotion` is needed.

After finish install dependencies, we can launch the template easily.

## Install

> Replace `xxx` to your real project name.

1. `$ npm install -g react-native-cli`
2. `$ react-native init xxx --template mobx`
3. `$ cd xxx`
3. `$ yarn add babel-plugin-transform-decorators-legacy --dev`
4. `$ cat gitignore >> .gitignore; rm gitignore`

At last, launch it to check.

iOS:

```bash
react-native run-ios
```

Android:

```bash
react-native run-android
```

Done.

You need start an iOS simulator or android simulator before running your app, see more: https://facebook.github.io/react-native/docs/getting-started.html

## Mobx advantage

[Mobx](https://github.com/mobxjs/mobx) is a new architecture to manage your store data. Unlike redux or flux, there's just a fewer concepts to understand and it's very simple to use.

Question: **How to debug app**

ReactNative use chrome debugger by default. You need install chrome browser before debug your app.

iOS Simulator:

1. Open your app
2. Input `ctrl + command + z `( if not, try `command + d` )
3. Choose `Open debugger` from the new modal. Now chrome will open a new page: `http://localhost:8081/debugger-ui`
4. Select `pause on exception` in chrome debugger( optional )
5. Refresh your app page( command + R )

Android:

1. Open your app
2. Input `command + m`
3. Choose `Open debugger` from the new modal. Now chrome will open a new page: `http://localhost:8081/debugger-ui`
4. Select `pause on exception` in chrome debugger( optional )
5. Refresh your app page( double click R )

see more: https://facebook.github.io/react-native/docs/debugging.html

Question: **How to rename my project**

1. Update the name of `package.json`
2. Update the name of `index.ios.js` & `index.android.js`
3. `rm -rf ios; rm -rf android;`
4. `react-native upgrade`
5. `rnpm install`

## Other useful resources

1. [react layouts](https://facebook.github.io/react-native/docs/layout-props.html)
2. [mobx best practices in react-native](http://mobxjs.github.io/mobx/best/pitfalls.html)
3. [Running on android device](http://reactnative.cn/docs/0.28/running-on-device-android.html#content)
4. [Singed apk on android device](http://reactnative.cn/docs/0.28/signed-apk-android.html#content)

## Code style recommend

1. Use ES7
