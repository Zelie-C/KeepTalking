import { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const basicModules = ["Boutons", "Fils", "Clavier", "Simon", "Jeux de mots", "Memory", "Code Morse", "Fils Compliqués", "Séquences de fils", "Labyrinthe", "Mots de passe"]
export const advancedModules = ["Évacuation du gaz", "Condensateur", "Molette", "Identification des indicateurs", "Identification des piles", "Identification des ports"]

const Home = ( { navigation } ) => {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Modules</Text>
          {basicModules.map(
            (module, index) => (
              <TouchableOpacity key={index} style={styles.listElement} onPress={() => navigation.navigate(`${module}`)}>
                <Text style={styles.listElementText}>{module}</Text>
              </TouchableOpacity>
            )
          )}
          <Text style={styles.title}>Modules demandants</Text>
          {advancedModules.map(
            (advancedModule, index) => (
              <TouchableOpacity key={index*10} style={styles.listElement} onPress={() => navigation.navigate(`${advancedModule}`)}>
                <Text style={styles.listElementText}>{advancedModule}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#252525',
    justifyContent: 'flex-start',
    color: '#fff',
  },
  scroll: {
    flex: 1,
    marginHorizontal: 10,
  },
  title : {
    color: 'red',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 20
  },
  listElement : {
    justifyContent: 'center',
    flex: 1,
    padding: 7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    marginBottom: 3,
  },
  listElementText : {
    color: "#fff",
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase'
  }
})

export default Home;
