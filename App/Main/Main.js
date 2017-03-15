import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
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
        };
    }

    componentDidMount(){
      let formData = new FormData();
      formData.append("device_id","C4BBE917-20FF-44E6-844A-0628EC6C096B");
      formData.append("access_token","a99d5c1c-c893-49e8-bb8b-de2dd4016466");
      formData.append("outlet_no","096");
      fetch('https://lotusgo.cplotus-gz.com/api-1.8/app/style' , {
          method: 'POST',
          headers: { "Content-Type": "application/json;charset=UTF-8"},
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


          this.setState({dataList:datalist});
          this.refs.toast.show(this.state.dataList[0].select_icon, DURATION.LENGTH_LONG);

          
      }).catch((error) => {
          console.error(error);
      });
    }


    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title={this.state.selectedTab}
                    rightItemTitle='注册'
                    rightTextColor='red'
                    />
                <TabNavigator>
                    <TabNavigator.Item
                        ref='item1'
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <FirstPage/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === '扫码购'}
                        title="扫码购"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}


                        onPress={() => this.setState({ selectedTab: '扫码购' })}>
                        <FirstPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '购物车'}
                        title="购物车"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}


                        onPress={() => this.setState({ selectedTab: '购物车' })}>
                        <Car/>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}


                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <My/>
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
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "blue",
        fontSize: 13
    },
    tabIcon: {
       width: 30,
       height: 30,
       resizeMode: 'stretch',
      //  marginTop: 12.5
   }

});
