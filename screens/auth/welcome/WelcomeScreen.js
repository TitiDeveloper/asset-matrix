import React from "react";

import AMButton from "../../../components/Button/AMButton";
import UploadButton from "../../../components/Button/UploadButton";
import AMInput from "../../../components/Form/AMInput";
import PlainText from "../../../components/Text/PlainText";
import { Colors } from "../../../constants/Colors"
import { StyleSheet, View } from "react-native"
import ScrollableFormView from "../../../components/Form/ScrollableFormView.ios";

const WelcomeScreen = (props) => {
    const inputChangeHandler = () => { }
    return (
        <ScrollableFormView containerStyle={styles.screen}>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>Date of Birth</PlainText>
                <AMInput
                    id="dob"
                    containerStyle={styles.input}
                    placeholder="DD/MM/YYYY"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>Gender</PlainText>
                <AMInput
                    id="gender"
                    containerStyle={styles.input}
                    placeholder="Select your gender"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>Country of Residence</PlainText>
                <AMInput
                    id="country"
                    containerStyle={styles.input}
                    placeholder="Select your country of residence"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>State</PlainText>
                <AMInput
                    id="state"
                    containerStyle={styles.input}
                    placeholder="State"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>Street</PlainText>
                <AMInput
                    id="street"
                    containerStyle={styles.input}
                    placeholder="Enter street address"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>City</PlainText>
                <AMInput
                    id="country"
                    containerStyle={styles.input}
                    placeholder="Enter your city name"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <View style={styles.uploadButtonContainer}>
                <UploadButton type="primary">Upload means of ID</UploadButton>
                <UploadButton type="primary" style={{marginTop: 20}}>Upload Proof of address</UploadButton>
            </View>
            <AMButton type="primary" style={styles.button} onButtonTap={() => props.navigation.navigate('Success')}>Complete Setup</AMButton>
            <PlainText style={styles.inputLabel1}>Skip for later</PlainText>

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
    inputLabel1: {
        marginTop: 10,
        color: '#3F1D05',
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 150
    },
    input: {},
    formField: {
        marginBottom: 10,
        marginLeft: 40,
        width: '80%'
    },
    button: {
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 40,
        width: '80%'
    },
    uploadButtonContainer: {
        // marginBottom: 10,
        marginTop: 20,
        // marginLeft: 40,
        width: '100%',
        alignItems:'center'
    },
});

export default WelcomeScreen
