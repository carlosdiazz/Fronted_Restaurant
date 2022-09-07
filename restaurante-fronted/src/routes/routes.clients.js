import {ClientLayout} from "../layouts"
import {Home} from "../pages/client"
import {Error404} from "../pages"

const routesCLient = [
    {
        path: "/",
        layout: ClientLayout,
        component: Home,
    },
]

export default routesCLient;