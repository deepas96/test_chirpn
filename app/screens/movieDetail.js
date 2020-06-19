
import React, { Component } from 'react';
import { Dimensions, View, FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovies } from '../action/fetchMovies';



const { width, height } = Dimensions.get('screen')


class MovieDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Movie Details",
            headerTintColor: AppColors.white,

        };
    };


    constructor(props) {
        super(props)

        this.state = {
            title: '13 B',
            desc: '13 B, a horror movie'
        }
    }

    componentDidMount() {

    }


    render(){
        const { title, desc } = this.state
        return(
            <SafeAreaView style = {{flex:1}}>
                <View style = {{justifyContent:'center', padding: 20}}>
                </View>
            </SafeAreaView>
        )
    }
    
}

function mapStateToProps(state) {
      return {
        movies : state.movies,
      }
  }

  function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchMovies }, dispatch)
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(MovieDetail)


const styles = StyleSheet.create({
    input:{
        alignSelf:'center', alignItems:'center', padding:10, width: width-20, height:50, margin:10,
        borderWidth:1, borderRadius:5, borderColor:'#ccc'
    },
    button:{
        width: width-40, height: 50, margin:10, backgroundColor: "#abc", justifyContent:'center', alignItems:'center', alignSelf:'center'
    }
})
