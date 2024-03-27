import { DashboardLayoutTypes, RoleTypes } from "../../contexts/AuthContext";
import { CreatorDashboardLayoutRoutes } from "./CreatorLayoutRoutes";
import { CtwaDashboardLayoutRoutes } from "./CtwaLayoutRoutes";
import { DefaultDashboardLayoutRoutes } from "./DefaultLayoutRoutes";
import { SupeHRLayoutRoutes } from "./SupeHRLayoutRoutes";

export const rolesRoutesAndNavigation: {
  [key in DashboardLayoutTypes]: {
    [key in RoleTypes]: {
      not_allowed_routes: string[];
      routes: string[];
      navigation: any[];
    };
  } } = {
  [DashboardLayoutTypes.DEFAULT]: DefaultDashboardLayoutRoutes,
  [DashboardLayoutTypes.CREATOR]: CreatorDashboardLayoutRoutes,
  [DashboardLayoutTypes.CTWA]: CtwaDashboardLayoutRoutes,
  [DashboardLayoutTypes.SUPEHR]: SupeHRLayoutRoutes,

}
