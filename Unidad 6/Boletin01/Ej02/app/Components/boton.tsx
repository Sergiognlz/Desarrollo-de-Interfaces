// Components/RoundedButton.tsx
import React from 'react';
import { Pressable, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type RoundedButtonProps = {
  title: string;
  onPress?: (event?: GestureResponderEvent) => void;
  disabled?: boolean;
  backgroundColor?: string; // opcional para cambiar color
  textColor?: string;       // opcional para cambiar color del texto
};

const RoundedButton: React.FC<RoundedButtonProps> = ({
  title,
  onPress,
  disabled = false,
  backgroundColor = '#ffb429ff',
  textColor = '#FFFFFF'
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed ? styles.buttonPressed : null,
        disabled ? styles.buttonDisabled : null
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoundedButton;
