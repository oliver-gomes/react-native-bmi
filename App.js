import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  state = {
    height: 0,
    mass: 0,
    resultNumber: 0,
    resultText: ""
  };

  handleCalculate = () => {
    let imc = (this.state.mass * 703) / this.state.height ** 2;
    this.setState({
      resultNumber: imc.toFixed(4)
    });

    if (imc < 18.5) {
      this.setState({ resultText: "Underweight" });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultText: "Normal Weight" });
    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultText: "Overweight" });
    } else {
      this.setState({ resultText: "Obesity" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.intro}>
          <TextInput
            placeholder="Height"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={height => {
              this.setState({ height });
            }}
          />
          <TextInput
            placeholder="Mass"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={mass => {
              this.setState({ mass });
            }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleCalculate}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{this.state.resultNumber}</Text>
        <Text style={[styles.result, { fontSize: 35 }]}>
          {this.state.resultText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff"
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24
  },
  button: {
    backgroundColor: "#89ffa5"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15
  }
});
