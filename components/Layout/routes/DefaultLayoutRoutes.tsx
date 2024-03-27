import {
    BoltIcon,
    ChatBubbleLeftEllipsisIcon,
    CircleStackIcon,
    CurrencyDollarIcon,
    FolderIcon,
    FolderOpenIcon,
    InboxIcon,
    KeyIcon,
    LinkIcon,
    PhoneIcon,
    UsersIcon,
    WrenchIcon,
    WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";
import { RoleTypes } from "../../contexts/AuthContext";

export const DefaultDashboardLayoutRoutes = {
    [RoleTypes.SUPER_ADMIN]: {
        not_allowed_routes: [],
        routes: ["/app", "/app/*"],
        navigation: [
            {
                name: "Flow Editor (DEFAULT)",
                href: "/app/flow-editor/new",
                icon: BoltIcon,
            },
            {
                name: "All Agents",
                href: "/app/org-agent",
                icon: CircleStackIcon,
            },
            { name: "Team Members", href: "/app/team", icon: UsersIcon },
            { name: "Contacts", href: "/app/contacts", icon: InboxIcon },

            {
                name: "Settings",
                href: "/app/setting/general-settings",
                icon: WrenchIcon,
                submenu: [
                    {
                        name: "Billing",
                        href: "/app/setting/billing",
                        icon: CurrencyDollarIcon,
                    },
                    {
                        name: "General Settings",
                        href: "/app/setting/general-settings",
                        icon: WrenchScrewdriverIcon,
                    },
                    {
                        name: "My Comm Channels",
                        href: "/app/setting/my-communication-channels",
                        icon: PhoneIcon,
                    },
                    {
                        name: "My Message Templates",
                        href: "/app/setting/my-templates",
                        icon: ChatBubbleLeftEllipsisIcon,
                    },
                    {
                        name: "My Integrations",
                        href: "/app/setting/integrations",
                        icon: LinkIcon,
                    },
                    {
                        name: "API Keys",
                        href: "/app/setting/api-keys",
                        icon: KeyIcon,
                    },
                ],
            },
        ],
    },
    [RoleTypes.ADMIN]: {
        not_allowed_routes: [
            '/app/flow-editor'
        ],
        routes: [
            "/app",
            "/app/*"
        ],
        navigation: [
            { name: "Team Members", href: "/app/team", icon: UsersIcon },
            { name: "Contacts", href: "/app/contacts", icon: InboxIcon },

            {
                name: "Settings",
                href: "/app/setting/general-settings",
                icon: WrenchIcon,
                submenu: [
                    {
                        name: "Billing",
                        href: "/app/setting/billing",
                        icon: CurrencyDollarIcon,
                    },
                    {
                        name: "General Settings",
                        href: "/app/setting/general-settings",
                        icon: WrenchScrewdriverIcon,
                    },
                    {
                        name: "My Comm Channels",
                        href: "/app/setting/my-communication-channels",
                        icon: PhoneIcon,
                    },
                    {
                        name: "My Message Templates",
                        href: "/app/setting/my-templates",
                        icon: ChatBubbleLeftEllipsisIcon,
                    },
                    {
                        name: "My Integrations",
                        href: "/app/setting/integrations",
                        icon: LinkIcon,
                    },
                    {
                        name: "API Keys",
                        href: "/app/setting/api-keys",
                        icon: KeyIcon,
                    },
                ],
            },
        ],
    },
    [RoleTypes.TEAM_MEMBER]: {
        not_allowed_routes: [],
        routes: [
            "/app",
            "/app/dashboard",
            "/app/signout",
            "/app/contacts/*",
            "/app/contacts",
            "/app/setting/*",
            "/app/setting/general-settings",
            "/app/integrations",
            "/app/setting/integrations",
            "/app/setting/integrations/*",
            "/app/setting/my-communication-channels",
        ],
        navigation: [

            {
                name: "Contacts",
                href: "/app/contacts",
                icon: InboxIcon
            },
            {
                name: "General Settings",
                href: "/app/setting/general-settings",
                icon: WrenchIcon,
            },
            {
                name: "My Integrations",
                href: "/app/integrations",
                icon: LinkIcon,
            },
            {
                name: "My Comm Channels",
                href: "/app/setting/my-communication-channels",
                icon: PhoneIcon,
            },
        ],
    },
}