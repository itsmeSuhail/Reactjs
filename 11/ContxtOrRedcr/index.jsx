import ReactDOM from 'react-dom'
import App from "./App"
import {ShopProvider} from "./Context"
ReactDOM.render(
    <ShopProvider>
        <App name={"rihan"}/>
    </ShopProvider>
    ,document.getElementById("root")
)
