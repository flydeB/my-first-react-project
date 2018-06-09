import { connect } from 'react-redux'
import Main from '../../components/view/Main'
import { showTabBar } from '../../store/action/index'

const mapStateToProps = (state) => {
    return {
        hidden: state.hiddenTabBar
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showTabBar: () => {
            dispatch(showTabBar())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main)