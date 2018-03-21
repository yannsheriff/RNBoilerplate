import { AppRegistry } from 'react-native';
import App from './src/App';
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Router from './src/Router'

class App extends Component {
    constructor() {
        super()
        console.disableYellowBox = true
    }

    render() {
            return  (
                <Provider store={Store}>
                    <Router/>
                </Provider>
            )
        
    }
}


AppRegistry.registerComponent('boilerplate', () => App);
