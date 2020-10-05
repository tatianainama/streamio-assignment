import Dashboard from 'containers/Dashboard';
import Profiles from 'containers/Profiles';
import Organization from 'containers/Organization';
import Department from 'containers/Department';
import Settings from 'containers/Settings';
import Chat from 'containers/Chat';

const routes = [
  { icon: 'dashboard', label: 'dashboard', href: '/dashboard', component: Dashboard },
  { icon: 'hospital-sign', label: 'dr. profiles', href: '/dr-profiles', component: Profiles },
  { icon: 'secure-shield', label: 'organization', href: '/organization', component: Organization },
  { icon: 'shield', label: 'department', href: '/department', component: Department },
  { icon: 'doctor', label: 'chat', href: '/chat', component: Chat },
  { icon: 'apple', label: 'settings', href: '/settings', component: Settings }
];

export default routes;