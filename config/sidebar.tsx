import {
    Users,
    BarChart3,
    Home
} from 'lucide-react';

export interface SidebarModule {
    id: string;
    title: string;
    href: string;
    icon: any;
    description: string;
    subItems?: string[];
}

export const sidebarModules: SidebarModule[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        href: '/admin',
        icon: Home,
        description: 'List of partnered schools'
    },
    {
        id: 'students',
        title: 'Student List',
        href: '/admin/students',
        icon: Users,
        description: 'List of registered students',
        subItems: [
            'Fee Structure',
            'Collect Fees',
            'Outstanding Balances',
            'Receipts',
            'Discounts & Scholarships'
        ]
    },
    // {
    //     id: 'reports',
    //     title: 'Reports & Analytics',
    //     href: '/admin',
    //     icon: BarChart3,
    //     description: 'Financial insights',
    //     subItems: [
    //         'Financial Reports',
    //         'Custom Reports',
    //         'Analytics Dashboard',
    //         'Audit Trails',
    //         'Export Data'
    //     ]
    // },
];