import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push[styles.containerDisabled]
  }

  return (
    <View style={styles.container}>
       <TouchableHighlight
         style={styles.buttonContainer}
         onPress={onPress}
         underlayColor={underlayColor}
       >
         <Text style={styles.buttonText}>{buttonText}</Text>
       </TouchableHighlight>
       <View style={styles.separator} />
       <TextInput style={styles.input} {...props} underlineColorAndroid='transparent'/>
     </View>
  );
};

InputWithButton.PropTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton;
