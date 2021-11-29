import React from "react"

import AMInput from "../../../components/Form/AMInput"
import ScrollableFormView from "../../../components/Form/ScrollableFormView"
import AMButton from "../../../components/Button/AMButton"
import PlainText from "../../../components/Text/PlainText"
import { Colors } from "../../../constants/Colors"
import { StyleSheet, View } from "react-native"


const CreateAccountScreen = (props) => {
    const inputChangeHandler = () => { };
    return (
        <ScrollableFormView containerStyle={styles.screen}>
            <PlainText style={styles.title}>Create Account</PlainText>
            <PlainText style={styles.subtitle}>Let’s setup your account right away !</PlainText>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>First Name</PlainText>
                <AMInput
                    id="firstName"
                    containerStyle={styles.input}
                    placeholder="Enter first name"
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
                <PlainText style={styles.inputLabel}>Last Name</PlainText>
                <AMInput
                    id="lastName"
                    containerStyle={styles.input}
                    placeholder="Enter last name"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
                <PlainText style={styles.inputLabel}>Ensure name is the same on BVN</PlainText>
            </View>

            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>BVN</PlainText>
                <AMInput
                    id="bvn"
                    containerStyle={styles.input}
                    placeholder="Enter BVN"
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
                <PlainText style={styles.inputLabel}>Email</PlainText>
                <AMInput
                    id="email"
                    containerStyle={styles.input}
                    placeholder="Enter email"
                    initialValue={''}
                    initiallyValid={false}
                    keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <View style={styles.formField}>
                <PlainText style={styles.inputLabel}>Phone Number</PlainText>
                <AMInput
                    id="phoneNumber"
                    containerStyle={styles.input}
                    placeholder="Phone Number"
                    initialValue={''}
                    initiallyValid={false}
                    // keyboardType="email-address"
                    onInputChange={inputChangeHandler}
                    // errorTip="Please enter a valid email address"
                    required
                    email>
                </AMInput>
            </View>
            <AMButton type="primary" style={styles.button} onButtonTap={() => props.navigation.navigate('VerifyAccount')}>Create account</AMButton>
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

    title: {
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize:  15,
        color: '#3F1D05',
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 20,
    },
    subtitle: {
        fontFamily: 'Avenir',
        fontSize:  13,
        color: '#3F1D05',
        marginLeft: 40,
        marginBottom: 10,
        
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

export default CreateAccountScreen