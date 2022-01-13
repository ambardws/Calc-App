import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";

export default function CalculatorScreen() {
    const [currentNumber, setCurrentNumber] = useState('')
    const [lastNumber, setLastNumber] = useState('')

    const buttons = [1, 2, '-', '+', 3, 4, '/','*', 5, 6, '%', '=', 7, 8, 9, 0, 'DEL','C']

    function handlePress(btn) {
        if (btn === '-' || btn === '+' || btn === '/' || btn === '*' || btn === '%') {
            setCurrentNumber(currentNumber + btn)
        }
        else if(btn === 'C') {
            setCurrentNumber('')
            setLastNumber('')
            return
        } else if(btn === 'DEL') {
            setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
            return
        } else if(btn === '=') {
            setLastNumber(currentNumber + '=')
            calc()
            return
        }
        setCurrentNumber(currentNumber + btn)
    }

    function calc() {
        let lastArr = currentNumber[currentNumber.length - 1]
        if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+') {
          setCurrentNumber(currentNumber);
        }
        else {
          let result = eval(currentNumber).toString();
          setCurrentNumber(result);
          return;
        }
    }

  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.heading}>Calculator</Text>
        <View style={styles.resultCalculate}>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
          {buttons.map((btn) => 
           btn === '-' || btn === '+' || btn === '/' || btn === '*' || btn === '%' || btn === '=' ?
           <Pressable key={btn} style={styles.buttonOperator} onPress={() => handlePress(btn)}><Text style={styles.textButtonOperator}>{btn}</Text></Pressable>
           : btn === 'DEL' || btn === 'C'?
           <Pressable key={btn} style={styles.buttonDelete} onPress={() => handlePress(btn)}><Text style={styles.textDeleteOperator}>{btn}</Text></Pressable>
           :
           <Pressable key={btn} style={styles.buttonNumber} onPress={() => handlePress(btn)}><Text style={styles.textButton}>{btn}</Text></Pressable>
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  heading: {
    color: "#F5F5F5",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: "15px",
    fontSize: "20px"
  },
  results: {
    backgroundColor: "#161853",
    height: "35%",
  },
  resultCalculate: {
    position: "absolute",
    right: "0",
    bottom: "0",
  },
  resultText: {
    color: "#F5F5F5",
    margin: 15,
    fontSize: 35,
  },
  historyText: {
    color: "#F5F5F5",
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15
  },
  buttons: {
    height: "65%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#292C6D",
    borderTopWidth: 2,
    borderTopColor: "#577BC1"
  },
  buttonOperator: {
    borderColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '25%',
    minHeight: '20%',
  },
  buttonNumber: {
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '25%',
    minHeight: '20%',



  },
  buttonDelete: {
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50%',
    minHeight: '20%',
  },
  textButton: {
    color: '#FFFCDC',
    fontSize: 28,
  },
  textButtonOperator: {
    color: '#577BC1',
    fontSize: 28,
  },
  textDeleteOperator: {
    color: '#EC255A',
    fontSize: 28,
  }
});
