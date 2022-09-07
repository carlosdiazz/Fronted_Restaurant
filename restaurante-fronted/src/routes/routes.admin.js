import {AdminLayout} from "../layouts"
import {LoginAdmin} from '../pages/admin'

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: LoginAdmin,
    },
    
]

export default routesAdmin;