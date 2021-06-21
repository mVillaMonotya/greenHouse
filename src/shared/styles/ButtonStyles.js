import { StyleSheet, Dimensions } from 'react-native';
import ColorsPalete from './ColorsPalete'

const ButtonStyles = StyleSheet.create({

    small: {
        width: Dimensions.get("screen").width * 0.5,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ColorsPalete.primary,
        marginTop: 20,
        marginBottom: 20
    },
    medium: {
        width: Dimensions.get("screen").width * 0.7,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ColorsPalete.primary,
        marginTop: 20,
        marginBottom: 20
    },
    large: {
        width: "100%",
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ColorsPalete.tertiary,
        marginTop: 50,
        marginBottom: 20
    }
});

export default ButtonStyles;