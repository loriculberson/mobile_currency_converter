import React, { Component } from 'react';
import { View, Image, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
  
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardDidShowListener = Keyboard.addListener(showListener, this.keyboardWillShow);
    this.keyboardDidHideListener = Keyboard.addListener(hideListener, this.keyboardWillHide);
  }

  componentWillUnmount(){
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),      
    ]).start();
  };

  keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),      
    ]).start();
  }

  render() {
      const containerImageStyle = [
        styles.containerImage,
        { width: this.containerImageWidth, height: this.containerImageWidth },
      ];

      const imageStyle = [
        styles.logo, 
        { width: this.imageWidth },
      ];

    return(

      <View style={styles.container}>
        <Animated.Image 
          resizeMode="contain"
          style={containerImageStyle} 
          source={require('./images/background.png')}
        >
          <Animated.Image 
            resizeMode="contain" 
            style={imageStyle} 
            source={require('./images/logo.png')}
          />
        </Animated.Image>
        <Text style={styles.text}> Currency Converter</Text>
      </View>
    )
  }

}

export default Logo;