# react-native-full-ratio-image

擴充 Image 組件，提供以下功能

- 自適應全屏寬度並按等比例縮放
- 屏幕縱橫比例維持
- 寬度外距屬性設置
  - pt 設置
  - 百分比設置

放置 Logo 用 Image 非常適合。以下範例圖片透過 `width: '70%'` 方式，並隨縱橫比例維持其設置的寬度：

![](https://imgur.com/4ooks7K.png)

![](https://imgur.com/bOVvHv1.png)

## What happened ?

在沒有該擴充 Image 的使用下，一般要能自適應圖片通常會使用寬高百分比，但寬高百分比將會帶來以下問題：

- 不同手機載具的螢幕解析將會有不同圖片比例效果
- Android 的 keyboard 將會在彈出鍵盤避免擋住當前的視圖，自動調整視圖的位置，導致百分比設置圖片的寬高將會是不符常規的比例呈現 (寬高被壓縮)
- 圖片寬高百分比並不會針對手機縱橫使用自動調整比例，需要 reload

  ![](https://imgur.com/gVL3Lwp.png)

  ![](https://imgur.com/JLv9jzk.png)

## Installation

```shell
$ npm install react-native-full-ratio-image
```

## Usage

```javascript
import FullRatioImage from 'react-native-full-ratio-image';
```

必須提供原始圖片寬高 props 以利該擴充 Image 組件可自動計算等比例圖片縮放。

- originWidth:number
- originHeight:number

options props：

- marginX:number|string

可設置 pt 數字或百分比，比如以下範例設置外距為 '30%'，讓該圖片以父元件寬度保持 `width: '70%'`。

```javascript
const LOGO_WIDTH = 3840;
const LOGO_HEIGHT = 906;

class SignInScreen extends Component {
  
  // ...
  
  render() {
    return (
      <View style={[globalStyles.container, globalStyles.center, {backgroundColor: primaryColor}]}>
        <StatusBar barStyle="light-content"/>
        <FullRatioImage
          originalWidth={LOGO_WIDTH}
          originalHeight={LOGO_HEIGHT}
          marginX="30%"
          source={require('../images/ALTA-logo.png')}
          resizeMode="stretch"
          style={[styles.logo]}/>
        {/* ... */}
      </View>
    );
  }
}
```

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © eden90267
