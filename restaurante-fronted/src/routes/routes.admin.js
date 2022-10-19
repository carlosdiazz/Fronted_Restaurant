import {AdminLayout} from "../layouts"
import {
    OrdersAdmin,
    UsersAdmin,
    CategoriaAdmin,
    PaymentsHistory,
    MesasAdmin,
    ProductosAdmin,
    TableDetailsAdmin,
    InventoryAdmin,
    InventoryHistory
    } from '../pages/admin'

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: OrdersAdmin,
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
        component: PaymentsHistory,
        exact: true
    },
    {
        path: "/admin/inventory",
        layout: AdminLayout,
        component: InventoryAdmin,
        exact: true
    },
    {
        path: "/admin/inventory-history",
        layout: AdminLayout,
        component: InventoryHistory,
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
    },
    {
        path: "/admin/table/:id",
        layout: AdminLayout,
        component: TableDetailsAdmin,
        exact: true
    }

]


export default routesAdmin;