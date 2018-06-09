import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'


export default class NavControl extends Component {
    render() {
        let {history, showTabBar} = this.props
        const icon = this.props.needLeftItem ? <Icon type="left"/> : null
        let onLeftClick = icon ? (() => {
            showTabBar()
            history.goBack()
        }) : null
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={icon}
                    onLeftClick={onLeftClick}
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >{this.props.children}</NavBar>

            </div>
        )
    }
}