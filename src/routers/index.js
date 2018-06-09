import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'


import About from '../components/view/About'
import Index from '../components/view/Index'
import Item from '../components/view/Item'
import Main from '../components/container/MainContainer'
import Detail from '../components/view/Detail'


export default class AnimationRoute extends Component {
    render() {
        return (
            <Route render={({location, history}) => (
                <Main location={location} history={history}>
                    <Route exact path='/' render={() => (<Redirect to='/index'/>)}/>
                    <TransitionGroup>
                        <CSSTransition
                            key={location.pathname}
                            timeout={{enter: 300, exit: 300}}
                            classNames="fade">
                            <div key={location.keys}>
                                <Route path='/index' component={Index}/>
                                <Route path='/item' component={Item}/>
                                <Route path='/about' component={About}/>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                    <Route path="/news/:id" component={Detail}/>
                </Main>

            )}/>
        )
    }
}