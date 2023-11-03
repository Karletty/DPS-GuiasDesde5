import QRCode from "react-native-qrcode-svg";
import { Text, StyleSheet, View } from "react-native";

const Colector = ({ title, description, value }) => {
     return (
          <>
               <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={{marginBottom: 10}}>{description}</Text>
                    <View style={{alignItems: "center"}}>
                         <QRCode
                              size={200}
                              value={value}
                         />
                    </View>
               </View>
          </>
     );
}

const styles = StyleSheet.create({
     container: {
          alignSelf: "center",
          backgroundColor: "#dfdfdf",
          paddingVertical: 20,
          paddingHorizontal: 20,
          width: "90%",
          borderRadius: 20,
          marginTop: 20,
     },
     title: {
          fontSize: 30,
          fontWeight: "bold"
     }
});


export { Colector }