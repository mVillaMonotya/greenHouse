import { StyleSheet } from "react-native";
import ColorsPalete from '../../shared/styles/ColorsPalete'

const RegistrerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsPalete.background,
    },
    header: {
        flex: 1,
        backgroundColor: ColorsPalete.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flex: 2,
        padding: 40
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    subtitle: {
        color: ColorsPalete.quaternary,
        fontSize: 20
    },
    logo: {
        width: 100,
        height: 100
    },
    input: {
        backgroundColor: ColorsPalete.secondary,
        height: 40,
        paddingLeft: 20,
        marginTop: 30,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        elevation: 10,
        color: "white"
    },
    textButton: {
        color: "white",
        fontSize: 20,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    registrer: {
        color: ColorsPalete.primary
    }


})

export default RegistrerStyles;