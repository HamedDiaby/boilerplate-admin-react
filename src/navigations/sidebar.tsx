import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import ClipboardIcon from '@heroicons/react/24/outline/ClipboardIcon';
import DatabaseIcon from '@heroicons/react/24/outline/CircleStackIcon';
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon';
import PowerIcon from '@heroicons/react/24/outline/PowerIcon';
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon';
import ChatBubbleLeftRightIcon from '@heroicons/react/24/outline/ChatBubbleLeftRightIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';

import { SidebarRoutesPath } from '@utilities/enums';

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

export const sidebarRoutes = [
    {
        path: SidebarRoutesPath.dashboard,
        icon: <Squares2X2Icon className={iconClasses}/>, 
        name: 'Tableau de bord',
    },
    {
        path: SidebarRoutesPath.collabs,
        icon: <UsersIcon className={iconClasses}/>, 
        name: 'Collaborateurs',
    },
    {
        path: SidebarRoutesPath.chats,
        icon: <ChatBubbleLeftRightIcon className={iconClasses}/>, 
        name: 'Boite de réception',
    },

    {
        path: SidebarRoutesPath.instructions,
        icon: <ClipboardIcon className={iconClasses}/>, 
        name: 'Instructions',
    },
    {
        path: SidebarRoutesPath.bdd,
        icon: <DatabaseIcon className={iconClasses}/>, 
        name: 'base de donnée',
    },
    {
        path: SidebarRoutesPath.news,
        icon: <TableCellsIcon className={iconClasses}/>, 
        name: 'Actualités',
    },

    {
        path: SidebarRoutesPath.settings,
        icon: <Cog6ToothIcon className={iconClasses}/>, 
        name: 'Paramètres',
    },
    {
        path: SidebarRoutesPath.logout,
        icon: <PowerIcon className={iconClasses}/>, 
        name: 'Se Déconnecter',
    },
]
