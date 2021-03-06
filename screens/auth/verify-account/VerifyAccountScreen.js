import React, {useCallback, useRef } from 'react';
import { StyleSheet, View } from "react-native";
import PlainText from "../../../components/Text/PlainText";
import CodeInput from "../../../components/Form/CodeInput"
import AMButton from '../../../components/Button/AMButton';

const VerifyAccountScreen = (props) => {
    const errorMsg = useRef();
    const inputChangeHandler = useCallback(
        () => {
            errorMsg.current = null;
        },
    );
    return (
        <View style={styles.screen}>
            <PlainText style={styles.title}>Verify Account</PlainText>
            <PlainText style={styles.subtitle}>An OTP has been sent to your email & phone</PlainText>

            <View>
                <CodeInput
                    id="confirmationCode"
                    onCodeChange={inputChangeHandler}
                    errorTip={errorMsg.current}
                />
            </View>

            <AMButton type="primary" style={styles.button} onButtonTap={() => props.navigation.navigate('SetPassword')}>Continue</AMButton>
        </View>
    )
}

const styles = StyleSheet.create({

    screen:{
        flex: 1, 
        backgroundColor: '#ffffff'
    },


    title: {
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20,
        color: '#3F1D05',
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 20
    },
    subtitle: {
        fontFamily: 'Avenir',
        fontSize: 16,
        lineHeight: 20,
        color: '#3F1D05',
        marginLeft: 40,
        marginBottom: 20,

    },
    button: {
        // marginBottom: 10,
        marginTop: 40,
        marginLeft: 40,
        width: '80%'
    }
})

export default VerifyAccountScreen