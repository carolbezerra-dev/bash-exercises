// src/context/Provider.js

// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  const moveCar = (car, side) => {
    if (car === 'redCar') {
      return setRed(side);
    } else if (car === 'blueCar') {
      return setBlue(side);
    } else if (car === 'yellowCar') {
      return setYellow(side);
    }
  }

  const contextValue = {
    redCar: red,
    blueCar: blue,
    yellowCar: yellow,
    moveCar,
  }

  return (
    <CarsContext.Provider value={contextValue}>
        {children}
    </CarsContext.Provider>
  );
}

export default Provider;

// class Provider extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cars: {
  //       red: false,
  //       blue: false,
  //       yellow: false,
  //     },
  //   }
  //   this.moveCar = this.moveCar.bind(this);
  // }

  // moveCar(car, side) {
  //   this.setState({
  //     cars: {
  //       ...this.state.cars,
  //       [car]: side,
  //     },
  //   });
  // };

//   render() {
//     const context = {
//       ...this.state,
//       moveCar: this.moveCar,
//     };

//     const { children } = this.props;

//     return (
//       <CarsContext.Provider value={context}>
//         {children}
//       </CarsContext.Provider>
//     );
//   }
// };

// Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Provider;
