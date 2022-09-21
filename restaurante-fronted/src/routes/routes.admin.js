import {AdminLayout} from "../layouts"
import {HomeAdmin, UsersAdmin, CategoriaAdmin} from '../pages/admin'

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
    },

    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin,
        exact: true
    },

    {
        path: "/admin/categories",
        layout: AdminLayout,
        component: CategoriaAdmin,
        exact: true
    }

]

export default routesAdmin;