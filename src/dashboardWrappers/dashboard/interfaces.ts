import { NavigationPathsEnum } from "@utilities/enums";
import { ReactNode } from "react";

export interface IDashboard {
    activePagePath: NavigationPathsEnum
    children: ReactNode
}