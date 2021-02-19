// src/Cars.jsx

// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';
import MyContext from './MyContext';

class Cars extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
          {
            ({ redCar, yellowCar, blueCar, moveCar }) => (
              <div>
                <div>
                  <img
                    className={redCar ? 'car-right' : 'car-left'}
                    src={carRed}
                    alt="red car"
                  />
                  <button
                    onClick={() => moveCar('red', !redCar)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
                <div>
                  <img
                    className={blueCar ? 'car-right' : 'car-left'}
                    src={carBlue}
                    alt="blue car"
                  />
                  <button
                    onClick={() => moveCar('blue', !blueCar)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
                <div>
                  <img
                    className={yellowCar ? 'car-right' : 'car-left'}
                    src={carYellow}
                    alt="yellow car"
                  />
                  <button
                    onClick={() => moveCar('yellow', !yellowCar)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
              </div>
            )
          }
        </MyContext.Consumer>
    );
  }
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);

export default Cars;
