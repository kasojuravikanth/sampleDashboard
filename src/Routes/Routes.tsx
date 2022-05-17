import ApplicationViewController from "../views/ApplicationViewController";
import Dashboard from "../views/Dashboard";
import { StatsPage } from "../views/StatsPage";

export const RoutesUrlsComp = [
    {path: '/dashboard', component: Dashboard, crumb: "Dashboard"},
    {path: '/application', component: ApplicationViewController, crumb: "Application"},
    {path: '/details', component: StatsPage, crumb: "Details"},


]