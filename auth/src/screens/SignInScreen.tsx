import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../storage';
import {updateAuth} from '../storage/auth';

const SignInScreen: React.FC<{}> = props => {
  const {} = props;
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onSignIn = () => {
    dispatch(updateAuth({token: 'token'}));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {backgroundColor: theme.colors.primary},
        ]}
        onPress={onSignIn}>
        <Text style={styles.buttonText}>{'Sign In'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default SignInScreen;
