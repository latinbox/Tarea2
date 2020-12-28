import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DishBox from './DishBox';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {baseUri} from '../../rawData';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdc3c7',
    borderRadius: 12,
    marginBottom: 6,
    padding: 6
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  counterBox: {
    paddingHorizontal:12,
    padding: 6,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#00d084',
  },
  imageContainer: {
    height: 100,
  },
  image: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  information: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonAdd: {
    backgroundColor: '#9c27b0',
    padding: 20,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  buttonText: {
    paddingHorizontal: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    paddingVertical: 0
  },
  textDefault: {
    justifyContent: 'flex-start'
  },
  buttonReset: {
    backgroundColor: '#eb144c',
    padding: 5,
    borderRadius: 4,
  } 
});

export default class DishCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showbtn: false
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    const {counter} = state;

    console.log('getDerivedStateFromProps: ', state);

    if (counter <= 0) {
      return {
        message: 'Igual a cero',
        counter: 0,
        
      };
    }
    return {
      message: 'Mayor a ceros!',
      counter,
      showbtn: true
    };
  };

  shouldComponentUpdate = (_, nextState) => {
    const {counter} = this.state;

    if (counter < 0) {
      return false;
    }

    return true;
  };
  add = () => {
  Alert.alert('Muy bien','Agregado al carrito');
    this.setState((states) => {
      return {
        counter: states.counter + 1,
      };
    });
  }
    

// const OpenUrl = ({sourceUrl}) => (
//   <TouchableOpacity onPress={() => Linking.openURL(sourceUrl)}>
//     <Text
//       style={{padding: 10, color: '#3498db', textDecorationLine: 'underline'}}>
//       Ver Receta
//     </Text>
//   </TouchableOpacity>
// );


reset = () => this.setState({counter: 0});

  render() {
    const {counter} = this.state;
    const {title, readyInMinutes, servings, image, sourceUrl} = this.props;

    return (
      <View style={styles.container}> 
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: `${baseUri}${image}`}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.information}>
            <Text>{`Listo en ${readyInMinutes} min`}</Text>
            <Text>{`Para ${servings} personas`}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.container}
            onPress={this.add}
            style={[styles.buttonAdd]}
            >
            <Text style={styles.buttonText}>Agregar al carro</Text>
        </TouchableOpacity>
        <View style={styles.container}>
        <View style={[styles.row, styles.counterBox]}>
        <Text style={styles.textDefault}>Total Carrito: {counter}</Text>
        <TouchableOpacity
            onPress={this.reset}
            style={[styles.buttonReset]}>
            <Text style={styles.buttonCounterText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}