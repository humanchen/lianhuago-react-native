import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var itemss=[];
export default class SwipeCell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img1: '0',
            img2: '0',
            img3: '0',
            img4: '0',
            items:[]
        };
    }

    componentDidMount() {
        let formData = new FormData();
        formData.append("device_id", "C4BBE917-20FF-44E6-844A-0628EC6C096B");
        formData.append("access_token", "a99d5c1c-c893-49e8-bb8b-de2dd4016466");
        formData.append("outlet_no", "096");
        fetch('https://lotusgo.cplotus-gz.com/api-1.8/home/advertise', {
            method: 'POST',

            body: formData
        }).then((response) => {
            if (response.ok) {
                return (response.json());

            }
        }).then((json) => {
            // alert(json.message);
            // alert(JSON.stringify(json));
            let data1 = json.data;
            // alert(data1)

            this.setState({
                img1: data1.focus_list[0].image_url,
                img2: data1.focus_list[1].image_url,
                img3: data1.focus_list[1].image_url,
                img4: data1.focus_list[1].image_url,
                items:data1.focus_list
            });

            this.c();
            // this.refs.toast.show(this.state.dataList[0].select_icon, DURATION.LENGTH_LONG);
            // this.refs.img1.setNativeProps({
            //    source:require('../Image/star123.png')
            // });

        }).catch((error) => {
            console.error(error);
        });
    }

    c(){
        for (var i = 0; i < this.state.items.length; i++) {
            itemss.push (
                <View key={i} style={styles.slide1}>
                    <TouchableOpacity onPress={this.click.bind(this,i)} activeOpacity={1}>
                    <Image source={{
                        uri: this.state.items[i].image_url
                    }} style={styles.tabIcon}/>
                </TouchableOpacity>
                </View>

            )
        }

    }

    click(i){
        let data=this.state.items[i];
        let url=data.link_url;
        if(url!=null){
            // alert(url);
            this.props.callBack(url);
        }


    }


    render() {
        return (
            <Swiper style={styles.wrapper} height={180} loop={true} autoplay={true}
                    paginationStyle={{
                bottom: 5
              }}
                    activeDot={< View style = {{backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}}/>}>
                {itemss}
                {/*{this.state.items.map((item, key) => {*/}
                    {/*return (*/}
                        {/*<View key={key} style={styles.slide1}>*/}
                            {/*<Image source={{*/}
                        {/*uri: item.image_url*/}
                    {/*}} style={styles.tabIcon}/>*/}
                        {/*</View>*/}
                    {/*)*/}
                {/*})}*/}

                {/*<View style={styles.slide1}>*/}

                    {/*<Image source={{*/}
                        {/*uri: this.state.img1*/}
                    {/*}} style={styles.tabIcon}/>*/}
                {/*</View>*/}
                {/*<View style={styles.slide2}>*/}

                    {/*<Image source={{*/}
                        {/*uri: this.state.img2*/}
                    {/*}} style={styles.tabIcon}/>*/}
                {/*</View>*/}
                {/*<View style={styles.slide3}>*/}

                    {/*<Image source={{*/}
                        {/*uri: this.state.img3*/}
                    {/*}} style={styles.tabIcon}/>*/}
                {/*</View>*/}
                {/*<View style={styles.slide3}>*/}

                    {/*<Image source={{*/}
                        {/*uri: this.state.img4*/}
                    {/*}} style={styles.tabIcon}/>*/}
                {/*</View>*/}
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    tabIcon: {
        width: ScreenWidth,
        height: 180,
        resizeMode: 'stretch',
        //  marginTop: 12.5
    }
});
