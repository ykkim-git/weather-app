# weather-app
## weather-app with React Native

## 01/06/2021

## expo

> npm install -g expo-cli

1. expo init {project-name}
2. create git repository
3. git remote add origin [repository]
4. git pull origin main

## expo 설치 후 실행

1. expo login
2. Email & Password 입력
3. expo start
4. scan QR code or Run on iOS simulator
5. Building JS bundle in device
6. Done!

---

## markup

```html
<View></View> : like
<div></div>
<Text></Text> : all the text has to be here like <span></span>
```

### flex

flex direction default는 column

```HTML
flex 정렬
 <View style={styles.container}>
   <View style={styles.yellowView} />
   <View style={styles.blueView} />
 </View>


const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 text: {
   color: "white",
 },
 yellowView: {
   flex: 1,
   backgroundColor: "lightyellow"
 },
 blueView: {
   flex: 1,
   backgroundColor: "skyblue"
 },
 yellowView & blueView의 flex:1, 1 경우에
 1:1 비율이지만

 yellowView & blueView의 flex가 1, 3인 경우에
 1:3 비율이 된다.

});
```

---

## 현재 location 가져오기

> expo install expo-location

```js
import * as Location from "expo-location";

Location.requestPermissionsAsync(); // 접근 허용 요청
Location.getCurrentPositionAsync(); // 현재위치 가져오기
// device에서 접근 허용 후 Location Object 확인

```

___

## 07/01/2021

### 무료 날씨 API https://openweathermap.org/api

1. 회원가입 후 API KEY 발급
2. 요청 URL : http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid={API KEY}&units=metric

```js
one of expo basic icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

<MaterialCommunityIcons size={86} name="weather-lightning-rainy" />

```

> https://expo.io/@youngkwon/projects/react-navitve-weather-app
