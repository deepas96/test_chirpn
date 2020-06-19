import React, { Component } from 'react';
import { Dimensions, Animated, View, FlatList, Text, StyleSheet, Image, ScrollView, SafeAreaView, Platform, TouchableOpacity, RefreshControl, SectionList, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovies } from '../action/fetchMovies';



const { width, height } = Dimensions.get('screen')


class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // list: [1, 2, 3, 4,5 ],
            data: [
                // { type: 'Horror', data: ['13B', 'Darna jaroori hai', 'Pihu', 'Bhoot', 'Bhool Bhulaiya'] },
                // { type: 'Action', data: ['Krissh', 'Race', 'Kick', 'Krissh3'] },
                // { type: 'Comedy', data: ['Phir Hera Pheri', 'Welcome', 'Golmaal', 'Golmaal Returns', 'Malamaal Weekly', 'Hulchul'] },
                // { type: 'Romance', data: ['Aashiqui', 'Dil', 'Ishq', 'Sky is Pink', 'The Lovebirds', 'Love Aajkal'] },
                // { type: 'Crime', data: ['The Godfather', 'Drishyam', 'Talaash', 'ANimal Kingdom', 'Good time', 'Lawless'] },
                // { type: 'Horror', data: ['13B', 'Darna jaroori hai', 'Pihu', 'Bhoot', 'Bhool Bhulaiya'] },
                // { type: 'Action', data: ['Krissh', 'Race', 'Kick', 'Krissh3'] },
                // { type: 'Comedy', data: ['Phir Hera Pheri', 'Welcome', 'Golmaal', 'Golmaal Returns', 'Malamaal Weekly', 'Hulchul'] },
            ]

        }
    }

    componentDidMount() {
        this.props.fetchMovies()
            console.log("data", this.props.movies)
            var data = []
            var it = {}

            var genres = this.props.movies
            genres.map((item) => {
                it = {"type": item.name, "data": ['Aashiqui', 'Dil', 'Ishq', 'Sky is Pink', 'The Lovebirds', 'Love Aajkal']}

                fetch('https://api.themoviedb.org/3/genre/'+ item.id + '/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41')
                .then(res => res.json())
                .then(json => {
                  let data = json.results
                  console.log("response genre", data)

                })
                .catch(err => {          
                  console.log("response", err)
                })

                data.push(it)
            })

            this.setState({data: data})

    }

    renderFooter = () => {
        return (
            //    <ActivityIndicator
            //      style={{ color: '#000' }}
            //    />
            <View></View>
        );
    };

    handleLoadMore = () => {
        // if (!this.state.loading) {
        //   this.page = this.page + 1; // increase page by 1
        //   this.loadMore(this.page); // method for API call 
        // }
        this.forceUpdate()
    };

    renderMainItem = ({ item }) => {
        return (
            <View style={styles.list} >
                <Text style={{ marginHorizontal: 5 }}>{item.type}</Text>
                <FlatList
                    extraData={this.state}
                    data={item.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderHorizontalItem}
                    horizontal={true}
                />
            </View>
        );
    }

    keyExtractor = (item, index) => {
        return index.toString();
    }

    renderHorizontalItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.horizontalItem} onPress={() => this.props.navigation.navigate('MovieDetail')}>
                <Text style={{ padding: 5 }}>{item}</Text>
            </TouchableOpacity>
        );
    }



    render() {
        const { list } = this.state
        const { movies, isFetching } = this.props

        // if (isFetching) {
        //     return(
        //         <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        //             <ActivityIndicator size={'large'} /> 
        //         </View>
        //     )
        // } else {
        //     return(
        //         <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        //             <Text>{movies}</Text>
        //         </View>
        //     )
        // }


        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ margin: 20, textAlign: 'center', fontSize: 18, }}>Movie List</Text>
                    <FlatList
                        extraData={this.state}
                        data={this.state.data}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderMainItem}
                    />
                </View>
            </SafeAreaView>
        )
    }

}

function mapStateToProps(state) {
    return {
        movies: state.moviesReducer.movies,
        isFetching: state.moviesReducer.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchMovies }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)


const styles = StyleSheet.create({
    button: {
        width: width - 40, height: 50, margin: 10, backgroundColor: "#abc", justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
    },
    horizontalItem: {
        // width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: 'pink',
        padding: 10
    },
    list: {
        height: 80,
        margin: 5,
    }
})
