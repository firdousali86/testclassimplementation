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
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImagePickerDemo = () => {
  const [imageArray, setImageArray] = useState([]);

  const imageItem = (imageData, index) => {
    return (
      <View style={styles.imageItem}>
        <Image
          style={{borderRadius: 10}}
          width={80}
          height={80}
          source={{uri: imageData.path}}
        />
        <TouchableOpacity
          style={styles.crossBtn}
          onPress={() => {
            const copyImageArray = [...imageArray];
            copyImageArray.splice(index, 1);

            setImageArray(copyImageArray);
          }}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal>
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((value, index) => {
            return imageItem(value, index);
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
          style={styles.addButtonStyle}>
          <Text style={{fontSize: 25}}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ImagePickerDemo;
