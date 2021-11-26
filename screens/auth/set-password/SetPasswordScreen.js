import React from "react";

import AMInput from "../../../components/Form/AMInput"
import ScrollableFormView from "../../../components/Form/ScrollableFormView"
import AMButton from "../../../components/Button/AMButton"
import PlainText from "../../../components/Text/PlainText"
import { Colors } from "../../../constants/Colors"
import { StyleSheet, View } from "react-native"

const SetPasswordScreen = (props) => {
    const inputChangeHandler = () => { };
    return (
        <ScrollableFormView style={styles.screen}>

            <View style={styles.formField}>
            <PlainText style={styles.inputLabel}>Password</PlainText>
                <AMInput
                 id="password"
                    containerStyle={styles.input}
                    // placeholder="Enter first name"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="input"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>

                </AMInput>
            </View>
            <View style={styles.formField}>
            <PlainText style={styles.inputLabel}>Confirm Password</PlainText>
                <AMInput
                 id="password"
                    containerStyle={styles.input}
                    // placeholder="Enter first name"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="input"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>

                </AMInput>
            </View>
            <AMButton type="primary" style={styles.button} onButtonTap={() => props.navigation.navigate('Welcome')}>Set Password</AMButton>
        </ScrollableFormView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        paddingVertical: 30,
        backgroundColor: Colors.white
    },
    header: {
        height: 240,
        paddingHorizontal: 25,
        justifyContent: 'center'
    },
    headerText: {
        color: Colors.white,
        fontSize: 30,
        lineHeight: 30
    },

    inputLabel: {
        marginTop: 10,
        color: '#3F1D05',
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 10
    },
    input: {},
    formField: {
        marginBottom: 10,
        marginLeft: 40,
        width: '80%'
    },
    button: {
        // marginBottom: 10,
        marginTop: 20,
        marginLeft: 40,
        width: '80%'
    }
});

export default SetPasswordScreen