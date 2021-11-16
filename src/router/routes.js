import Dashboard from '@/views/Dashboard'
import Login from '@/views/Auth/Login'
import Register from '@/views/Auth/Register'

export default [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/contacts',
        name: 'contacts.list',
        component: () => import('@/views/ContactList'), // Lazy loading
    },
    {
        path: '/auth/login',
        name: 'auth.login',
        component: Login
    },
    {
        path: '/auth/register',
        name: 'auth.register',
        component: Register,
    }
]
