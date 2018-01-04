import {StyleSheet} from 'react-native';
import windows from '../../Themes/Windows.js';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
    header: {
        flexDirection: 'row',
        margin: 7
    },
    image: {
        //this is the true size of image that return from fetching
        width: 100,
        height: 150
    },
    text_more_and_less:{
        color: 'white', 
        fontSize: 13, 
        fontWeight: 'bold', 
        margin: 5,
        //width: 40,
        //borderRadius: 5,
        //backgroundColor: 'red'
    },
    text_category: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gold'
    },
    text_info: {
        fontSize: 13,
        fontStyle: 'italic',
        color: 'white'
    },
    text_title_biography: {
        fontSize: 17,
        alignSelf: 'center',
        color: 'gold',
        fontWeight: 'bold'
    },
    text_info_biography: {
        fontSize: 15,
        color: 'grey',
        fontStyle: 'italic'
    },
    item_movie_container: {
        width: windows.width / 3
    },
    item_title: {
        textAlign: 'center',
        marginTop: 3,
        fontSize: 13,
        color: 'white',
    },
    titleCategory: {
        color: 'palegoldenrod',
        fontSize: 17,
        fontWeight: 'bold'
    },
})