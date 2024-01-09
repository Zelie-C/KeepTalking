import { useCallback, useEffect, useState, useMemo } from 'react';
import { Button, StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  const [step, setStep] = useState(0);
  const [noCount, setNoCount] = useState(0)
  const [disabledButtons, setDisabledButtons] = useState([false, false, false])

  

  const showFirstForm = useMemo(() => step === 0 && noCount < 3, [step, noCount])
  const showSecondForm = useMemo(() => step === 1, [step])
  const showThirdForm = useMemo(() => noCount >= 3, [noCount])
  

  const onYesPress = useCallback(
    () => {
      setStep(1)
    }, []
  )

  const onNoPress = useCallback(
    (index) => {
      const disabled = [...disabledButtons]
      disabled[index] = true
      setDisabledButtons(disabled)
      setNoCount(noCount + 1)
    }, [disabledButtons, noCount]
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbarContainer}>
        <AntDesign name="left" size={32} color="white" />
        <Text style={styles.title}>Gérer le bouton</Text>
      </View>
      <View style={styles.contentContainer}>
        {showFirstForm &&
          <View style={styles.formContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>Le bouton est-il rouge et affiche-t-il "Maintenir" ?</Text>
              <Button onPress={onYesPress} title="Oui" color="#fff" />
              <Button onPress={() => onNoPress(0)} title="Non" color="#fff" disabled={disabledButtons[0]}/>
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>La bombe a-t-elle plus d'une pile et le bouton affiche-t-il "Exploser" ?</Text>
              <Button onPress={onYesPress} title="Oui" color="#fff" />
              <Button onPress={() => onNoPress(1)} title="Non" color="#fff" disabled={disabledButtons[1]}/>
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>La bombe a-t-elle plus d'une pile et le bouton affiche-t-il "Exploser" ?</Text>
              <Button onPress={onYesPress} title="Oui" color="#fff" />
              <Button onPress={() => onNoPress(2)} title="Non" color="#fff" disabled={disabledButtons[2]}/>
            </View>
          </View>
        }
        {showSecondForm &&
          <View>
            <Text style={styles.solutionText}>Appuyer et relâcher le bouton immédiatement</Text>
          </View>
        }
        {showThirdForm &&
          <View style={styles.colorsContainer}>
            <Text style={styles.text}>Selon la couleur de la bande, appuyer et maintenir le bouton sans le relacher jusqu'à ce que le compteur affiche</Text>
            <Text style={styles.blueColorBlock}>4</Text>
            <Text style={styles.yellowColorBlock}>5</Text>
            <Text style={styles.text}>1 si autre couleur</Text>
          </View>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#252525',
    justifyContent: 'flex-start',
    color: '#fff',
  },
  navbarContainer : {
    height: '20%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: '#fff',
    paddingRight: 30,
  },
  contentContainer : {
    height: '80%',
    alignItems: 'center',
    paddingTop: 20,
  },
  formContainer : {
    padding: 7,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  questionContainer : {
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
  },
  text : {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  solutionText: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#00FF00'
  },
  colorsContainer : {
    justifyContent: 'space-between'
  },
  blueColorBlock : {
    backgroundColor: "#B0E0E6",
    textAlign: "center",
    
  },
  yellowColorBlock : {
    backgroundColor: "#FFD700",
    textAlign: "center"
  }
});
