import styles from "./styles";
import { Text, View, Image } from 'react-native';

const ListItem = ({ title, details, imgSrc }) => {
     return (<>
          <View style={styles.listContainer}>
               <Text style={styles.listTitle}>{title}</Text>
               <View style={{ flexDirection: "row" }}>
                    <Image source={imgSrc} style={styles.listImage} />
               </View>
               <Text style={styles.listDetail}>{details}</Text>
          </View>
     </>)
}

export { ListItem };