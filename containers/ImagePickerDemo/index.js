import {useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImagePickerDemo = () => {
  const [imageArray, setImageArray] = useState([]);

  const imageItem = imageData => {
    return (
      <View
        style={{
          margin: 5,
          borderRadius: 10,
          backgroundColor: 'red',
          overflow: 'hidden',
          height: 80,
        }}>
        <Image width={80} height={80} source={{uri: imageData.path}} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal>
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((value, index) => {
            return imageItem(value);
          })}
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              width: 80,
              height: 80,
              cropping: true,
            }).then(image => {
              setImageArray([...imageArray, image]);
            });
          }}
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#A5A3A3',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 25}}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ImagePickerDemo;
