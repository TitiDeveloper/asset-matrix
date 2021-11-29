import React from "react";
import { StyleSheet, View } from "react-native";
import PlainText from "../../../components/Text/PlainText";

const VerifyAccountScreen = () => {
    return (
        <View>
            <PlainText style={styles.title}>Verify Account</PlainText>
            <PlainText style={styles.subtitle}>An OTP has been sent to your email & phone</PlainText>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#3F1D05',
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 20,
    },
    subtitle: {
        fontFamily: 'Avenir',
        fontSize: 13,
        color: '#3F1D05',
        marginLeft: 40,
        marginBottom: 10,

    },
})

export default VerifyAccountScreen