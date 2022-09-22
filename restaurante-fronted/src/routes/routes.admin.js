import {AdminLayout} from "../layouts"
import {HomeAdmin, UsersAdmin, CategoriaAdmin, HistorialPagosAdmin, MesasAdmin, ProductosAdmin } from '../pages/admin'

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
    },

    {
        path: "/admin/payments-history",
        layout: AdminLayout,
        component: HistorialPagosAdmin,
        exact: true
    },

    {
        path: "/admin/tables",
        layout: AdminLayout,
        component: MesasAdmin,
        exact: true
    },

    {
        path: "/admin/products",
        layout: AdminLayout,
        component: ProductosAdmin,
        exact: true
    }

]


export default routesAdmin;