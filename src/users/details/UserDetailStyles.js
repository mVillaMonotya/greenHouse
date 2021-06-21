import { StyleSheet } from "react-native";
import ColorsPalete from '../../shared/styles/ColorsPalete'

const UserDetailStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10
    },inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    buttonUpdate: {
        color: "blue"
    },
    buttonDelete: {
        color: "red"
    }

})


export default UserDetailStyles;