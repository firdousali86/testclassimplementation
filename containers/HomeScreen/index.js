import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
// import UserDetails from '../../controls/UserDetails';
import UserDetailsFunct from '../../controls/UserDetailsFunct';
import _ from 'lodash';

const HomeScreen = props => {
  const [user, setUser] = useState({
    firstName: 'Firdous',
    lastName: 'Ali',
    gender: 'Male',
    age: '30',
    dob: '1/1/80',
    contactNumber: '+44444444',
    homePhone: '+55555555',
    education: 'MS',
    degree: 'CIS',
  });
  const [sampleTextinput, setSampleTextinput] = useState('');
  const [celciusVal, setCelciusVal] = useState(30);

  const onSubmitBtnPress = useCallback(() => {
    // setUser({
    //   firstName: 'Firdous2',
    //   lastName: 'Ali2',
    //   gender: 'Male2',
    //   age: '302',
    //   dob: '1/1/802',
    //   contactNumber: '+444444442',
    //   homePhone: '+555555552',
    //   education: 'MS2',
    //   degree: 'CIS2',
    // });
    setCelciusVal(90);

    // set data in async storage here
  }, [user, celciusVal]);

  // const onSubmitBtnPress = () => {
  //   setUser({
  //     firstName: 'Firdous2',
  //     lastName: 'Ali2',
  //     gender: 'Male2',
  //     age: '302',
  //     dob: '1/1/802',
  //     contactNumber: '+444444442',
  //     homePhone: '+555555552',
  //     education: 'MS2',
  //     degree: 'CIS2',
  //   });
  //   setCelciusVal(90);
  // };

  console.log('HomeScreen > render');

  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <ScrollView>
        <UserDetailsFunct
          user={user}
          celcius={celciusVal}
          onSubmitBtnPress={onSubmitBtnPress}
        />

        <TextInput
          style={{
            margin: 20,
            backgroundColor: 'white',
            height: 40,
          }}
          onChangeText={changedText => {
            setSampleTextinput(changedText);
          }}
          value={sampleTextinput}
          placeholder="Some textinput on homescreen"
        />
      </ScrollView>
    </View>
  );
};

// class HomeScreen extends React.Component {
//   constructor(props) {
//     console.log('homescreen > constructor');

//     super(props);

//     this.state = {
//       user: {
//         firstName: 'Firdous',
//         lastName: 'Ali',
//         gender: 'Male',
//         age: '30',
//         dob: '1/1/80',
//         contactNumber: '+44444444',
//         homePhone: '+55555555',
//         education: 'MS',
//         degree: 'CIS',
//       },
//       sampleTextinput: '',
//     };
//   }

//   // componentDidMount() {
//   //   console.log('homescreen > componentdidmount');
//   // }

//   render() {
//     console.log('homescreen > render');

//     const {user} = this.state;

//     return (
//       <View style={{flex: 1, backgroundColor: 'yellow'}}>
//         <ScrollView>
//           <UserDetailsFunct user={user} />

//           <TouchableOpacity
//             style={{
//               backgroundColor: 'red',
//               height: 44,

//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               this.setState({
//                 user: {
//                   firstName: 'Firdous2',
//                   lastName: 'Ali2',
//                   gender: 'Male2',
//                   age: '302',
//                   dob: '1/1/802',
//                   contactNumber: '+444444442',
//                   homePhone: '+555555552',
//                   education: 'MS2',
//                   degree: 'CIS2',
//                 },
//               });
//             }}>
//             <Text>Change text</Text>
//           </TouchableOpacity>

//           <TextInput
//             style={{
//               margin: 20,
//               backgroundColor: 'white',
//               height: 40,
//             }}
//             onChangeText={changedText => {
//               this.setState({sampleTextinput: changedText});
//             }}
//             value={this.state.sampleTextinput}
//             placeholder="Some textinput on homescreen"
//           />
//         </ScrollView>
//       </View>
//     );
//   }
// }

export default HomeScreen;
