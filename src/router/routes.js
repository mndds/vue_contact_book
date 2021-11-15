import Dashboard from '@/views/Dashboard'
import ContactList from '@/views/ContactList'
import Login from '@/views/Auth/Login'

export default [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/contacts',
        name: 'contacts.list',
        component: ContactList,
    },
    {
        path: '/auth/login',
        name: 'auth.login',
        component: Login
    }
]
