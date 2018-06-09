import Config from './config'
import fetch from 'cross-fetch'


export default emptyData = () => ({
    type: 'EMPTYDATA'
})

/*异步请求数据*/

export default fetchPost = (time) => {

    return dispatch => {

        return fetch(Config.YAHOO + Config.API + time + Config.YAHOO_SUFFIX)
            .then(
                response => response.json(),
                // 不要使用 catch，因为会捕获
                // 在 dispatch 和渲染中出现的任何错误，
                // 导致 'Unexpected batch number' 错误。
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state。

                dispatch({type: 'GETSUCCESS', data: {...json.query.results.json}})
            )
    }
}

