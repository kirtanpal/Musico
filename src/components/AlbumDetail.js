import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
     const {
          title,
          artist,
          thumbnail_image,
          url,
          image
     } = album;

     const {
          thumbnailStyle,
          imageStyle,
          textContainerStyle,
          textStyle
     } = styles;

     return (
          <Card>
               <CardSection>
                    <View>
                         <Image
                         style={thumbnailStyle}
                         source={{ uri: thumbnail_image }}
                         />
                    </View>
                    <View style={textContainerStyle}>
                         <Text style={textStyle}>{title}</Text>
                         <Text>{artist}</Text>
                    </View>
               </CardSection>
               <CardSection>
                    <Image
                         style={imageStyle}
                         source={{ uri: image }}
                    />
               </CardSection>
               <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                         Buy Now
                    </Button>
               </CardSection>
          </Card>
     );
};

const styles = {
     thumbnailStyle: {
          width: 50,
          height: 50,
          marginLeft: 5,
          marginRight: 10
     },
     imageStyle: {
          flex: 1,
          width: null,
          height: 300
     },
     textContainerStyle: {
          justifyContent: 'space-around'
     },
     textStyle: {
          fontWeight: 'bold'
     }
};

export default AlbumDetail;
