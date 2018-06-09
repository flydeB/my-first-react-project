import React, {Component} from 'react'
import {TabBar} from 'antd-mobile'
import './Footer.css'


export default class Footer extends Component {
    constructor(props) {
        super(props)
        console.log(props.pathname)
        const pathname = props.pathname === '/' ? '/index' : 'props.pathname'
        this.state = {
            selectBar: pathname
        }
    }
    render() {
        const {history,hidden} = this.props
        return (
            <div className="footer">
                <TabBar hidden={hidden}>
                    <TabBar.Item
                        title="首页"
                        key="Index"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectBar === '/index'}
                        onPress={() => {
                            this.setState({
                                selectBar: '/index',
                            })
                            history.push('/index')
                        }}

                    >
                    </TabBar.Item>

                    <TabBar.Item
                        title="文章"
                        key="Item"
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selected={this.state.selectBar === '/item'}
                        onPress={
                            () => {
                                this.setState({
                                    selectBar: '/item'
                                })
                                history.push('/item')
                            }}
                    >
                    </TabBar.Item>

                    <TabBar.Item
                        title="关于"
                        key="About"
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selected={this.state.selectBar === '/about'}
                        onPress={
                            () => {
                                this.setState({
                                    selectBar: '/about'
                                })
                                history.push('/about')
                            }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>

        )
    }
}