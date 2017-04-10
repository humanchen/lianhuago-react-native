import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import FirstPage from '../FirstPage/FirstPage'
import TopNavigator from '../Common/TopNavigator'
import My from '../My/My'
import Car from '../Car/Car'
import Toast, {DURATION} from 'react-native-easy-toast'


var datalist;
export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: '首页',
            mainTitle:'金沙洲店',
            dataList:null,
            item1normal:'0',
            item1select:'0',
            item2normal:'0',
            item2select:'0',
            item3normal:'0',
            item3select:'0',
            item4normal:'0',
            item4select:'0',
        };
    }

    componentDidMount(){
        this.refs.toast.show(this.props.name, DURATION.LENGTH_LONG);

      let formData = new FormData();
      formData.append("device_id","C4BBE917-20FF-44E6-844A-0628EC6C096B");
      formData.append("access_token","a99d5c1c-c893-49e8-bb8b-de2dd4016466");
      formData.append("outlet_no","096");
      fetch('https://lotusgo.cplotus-gz.com/api-1.8/app/style' , {
          method: 'POST',

          body: formData
      }).then((response) => {
          if (response.ok) {
              return(response.json());

          }
      }).then((json) => {
          // alert(json.message);
          // alert(JSON.stringify(json));
          let data1 = json.data;
          datalist = data1.icon_list;

          let item=datalist[0];


          this.setState({dataList:datalist,
            item1normal:datalist[0].normal_icon,
            item1select:datalist[0].select_icon,
            item2normal:datalist[1].normal_icon,
            item2select:datalist[1].select_icon,
            item3normal:datalist[2].normal_icon,
            item3select:datalist[2].select_icon,
            item4normal:datalist[3].normal_icon,
            item4select:datalist[3].select_icon,
          });
          // this.refs.toast.show(this.state.dataList[0].select_icon, DURATION.LENGTH_LONG);
          // this.refs.img1.setNativeProps({
          //    source:require('../Image/star123.png')
          // });

      }).catch((error) => {
          console.error(error);
      });
    }


    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title={this.state.selectedTab}
                    // rightItemTitle='注册'
                    // rightTextColor='red'
                    />
                <TabNavigator>
                    <TabNavigator.Item

                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image  source={{uri:this.state.item1normal}} style={styles.tabIcon}/>}
                         renderSelectedIcon={() => <Image  source={{uri:this.state.item1select}} style={styles.tabIcon}/>}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <FirstPage navigator={this.props.navigator}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === '扫码购'}
                        title="扫码购"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image  source={{uri:this.state.item2normal}} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image  source={{uri:this.state.item2select}} style={styles.tabIcon}/>}

                        onPress={() => this.setState({ selectedTab: '扫码购' })}>
                        <FirstPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '购物车'}
                        title="购物车"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image  source={{uri:this.state.item3normal}} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image  source={{uri:this.state.item3select}} style={styles.tabIcon}/>}

                        onPress={() => this.setState({ selectedTab: '购物车' })}>
                        <Car navigator={this.props.navigator}/>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}

                        renderIcon={() => <Image  source={{uri:this.state.item4normal}} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image  source={{uri:this.state.item4select}} style={styles.tabIcon}/>}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <My navigator={this.props.navigator}/>
                    </TabNavigator.Item>

                </TabNavigator>
                <Toast ref="toast"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    tabText: {
        color: "gray",
        fontSize: 11
    },
    selectedTabText: {
        color: "red",
        fontSize: 11
    },
    tabIcon: {
       width: 25,
       height: 25,
       resizeMode: 'stretch',
      //  marginTop: 12.5
   }

});
