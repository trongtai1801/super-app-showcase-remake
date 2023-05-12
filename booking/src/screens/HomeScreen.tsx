import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

const HomeScreen: React.FC<{}> = props => {
  const {} = props;
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {backgroundColor: theme.colors.primary},
        ]}
        onPress={() => navigation.navigate('Booking')}>
        <Text style={styles.buttonText}>{'Go to booking'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
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

export default HomeScreen;
