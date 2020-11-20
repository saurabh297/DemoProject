import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const heightRatio = screenHeight / 740;
const widthRatio = screenWidth / 360;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lighter,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16 * widthRatio,
    },
    listContainer: {
        height: 150 * heightRatio,
        width: 106 * widthRatio,
        borderRadius: 5,
        marginLeft: 10 * widthRatio,
        marginBottom: 10 * heightRatio,
    }
});




export default function UserList() {
    const [imagesData, setImagesData] = useState([]);
    const { navigate } = useNavigation();

    useEffect(() => {
        fetch('https://itunes.apple.com/search?term=jack+johnson')
            .then(response => response.json())
            .then(data => setImagesData(data.results));
    }, []);


    const renderItemsList = (rowData) => {
        const { item } = rowData;
        return (
            <TouchableOpacity style={styles.listContainer} onPress={() => navigate('UserDetails', { userDetails: item })}>
                <Image style={{
                    height: 150 * heightRatio,
                    width: 106 * widthRatio,
                }} source={{ uri: item.artworkUrl100 }} />
            </TouchableOpacity>)
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={{ marginTop: 15 * heightRatio, }}
                    numColumns={3}
                    data={imagesData}
                    renderItem={renderItemsList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.trackId}
                />
            </SafeAreaView>
        </>
    )
}