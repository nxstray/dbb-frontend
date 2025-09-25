import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Menu.vue";
import AdminPage from "@/pages/AdminLayout.vue";
import Dashboard from "@/pages/Admin.vue";
import Login from "@/pages/Login.vue";
import AdminLayout from "@/pages/AdminLayout.vue";
import Register from "@/pages/Register.vue";
import ManajemenStok from "@/pages/ManajemenStok.vue";

const routes = [
    {
        path: "/admin",
        component: AdminLayout,
        children: [
            {
                path: "",
                component: Dashboard,
            },
            {
                path: "/manajemen-stok",
                component: ManajemenStok,
            },


        ],
    },
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },

    { path: "/admin", component: AdminPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
