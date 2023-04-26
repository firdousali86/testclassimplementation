import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const ListItemDetails = props => {
  const {data} = props.route.params;

  return (
    <View style={{backgroundColor: '#F5F2F2'}}>
      <Text>{data.name}</Text>
      <Text>{data.language}</Text>
      <Text>{data.place}</Text>
    </View>
  );
};

ListItemDetails.propTypes = {};

ListItemDetails.defaultProps = {};

export default ListItemDetails;
