import { StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        width: '100%',
        height: 234,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: getStatusBarHeight() + 10,
        fontSize: 32,
        fontFamily: theme.fonts.title
    },
    card: {
        width: 350,
        height: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight() + 10,
        borderRadius: 20,
        color: theme.colors.white,
        fontFamily: theme.fonts.text,
        backgroundColor: theme.colors.primary
    },
    textCard: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: theme.colors.white,
        fontSize: 24,
        fontFamily: theme.fonts.card
    },
    searchCont: {
        width: 350,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: getStatusBarHeight() + 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 20,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 200,
        height: 200,
    },


    description: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white

    },
    body: {

        width: 325,
        height: 360,
        marginTop: -20,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',

    },
    textDetailsTitle: {
        textAlign: 'center',
        color: theme.colors.primary,
        fontFamily: theme.fonts.title,
        fontSize: 32,
        overflow: 'hidden',
    },
    textDetails: {
        textAlign: 'justify',
        color: theme.colors.overlay,
        fontFamily: theme.fonts.text,
        fontSize: 24,
        overflow: 'hidden',
    }

});