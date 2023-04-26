import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const UserDetails = props => {
  const {month, year} = props;

  return (
    <View>
      <Text>test functional comp</Text>
      <Text>Month: {month}</Text>
      <Text>Year: {year}</Text>
    </View>
  );
};

// UserDetails.propTypes = {
//   month: PropTypes.string,
//   year: PropTypes.string,
// };

// UserDetails.defaultProps = {
//   month: '12',
//   year: '2023',
// };

export default UserDetails;
