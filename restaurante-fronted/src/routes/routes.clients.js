import {BasicLayout, ClientLayout} from "../layouts"
import {SelectTable, Categories} from "../pages/client"
//import {Error404} from "../pages"

const routesCLient = [
    {
        path: "/",
        layout: BasicLayout,
        component: SelectTable,
        exact: true
    },
    {
        path:"/client/:tableNumber",
        layout: ClientLayout,
        component: Categories,
        exact: true
    }
]

export default routesCLient;