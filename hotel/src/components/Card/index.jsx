import styles from "./styles";
import { Text, View, Image } from 'react-native';

const Card = ({ title, imgSrc }) => {
     return (<>
          <View style={styles.card}>
               <Text style={styles.cardSubtitle}>{title}</Text>
               <View style={{ flexDirection: "row" }}>
                    <Image source={imgSrc} style={styles.cardImg} />
               </View>
          </View>
     </>);
}



export { Card };