import {AdminLayout} from "../layouts"
import {HomeAdmin} from '../pages/admin'

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },
    
]

export default routesAdmin;