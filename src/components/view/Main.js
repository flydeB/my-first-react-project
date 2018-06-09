import React, {Component} from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'


export default class Main extends Component {
    render() {
        const {location, history, showTabBar} = this.props
        let navBar = ''
        let showLeft = false
        switch (location.pathname) {
            case '/index':
                navBar = '主页'
                break
            case '/item':
                navBar='文章'
                break
            case '/about':
                navBar='关于'
                break
            default :
                navBar='详情'
        }

        return (
         <div>
         <Header history={history} showTabBar={showTabBar}>{navBar} needLeftItem={showLeft}</Header>
             {this.props.children}
         <Footer pathname={location.pathname} hidden={this.props.hidden} history={history}/>
         </div>
        )

    }
}