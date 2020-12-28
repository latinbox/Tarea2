import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdc3c7',
    borderRadius: 12,
    marginBottom: 10,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  counterBox: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#e67e22'
  }
});


export default class DishCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  static getDerivedStateFromProps = (props, state) => {
    const {counter}= state;
    
    console.log('getDerivedStateFromProps: ', state);

      if (counter <= 0) {
        return {
          message: 'Menor a cero!',
          counter: 0,
        };
      }
      return {
        message: 'Mayor a cero!',
        counter,
      };
    
    };
    shouldComponentUpdate = (_, nextState) => {
      const {counter} = this.state;
  
      if (counter <= 0) {
        return false;
      }
  
      return true;
    };
    agregarProducto = () =>
    this.setState((states) => {
      return {
        counter: states.counter + 1,
      };
    });
  render() {
    const {counter} = this.state;

    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.counterBox]}>
        <Text style={styles.textDefault}>Total Carrito</Text>
        <Text style={styles.textDefault}>{counter}</Text>
        </View>
      </View>

      
    );
  }
}
