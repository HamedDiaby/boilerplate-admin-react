import { NavigationPathsEnum } from "@utilities/enums";
import { FC, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { SuspenseContent } from "./SuspenseContent";

const Dashboard = lazy(
    () => import("@pages/internalApp/dashboard")
    .then(module => ({ default: module.Dashboard }))
);

const Instructions = lazy(
    () => import("@pages/internalApp/instructions")
    .then(module => ({ default: module.Instructions }))
);

const Bdd = lazy(
    () => import("@pages/internalApp/bdd")
    .then(module => ({ default: module.Bdd }))
);

const NotFound = lazy(
    () => import("@pages/internalApp/NotFound")
    .then(module => ({ default: module.NotFound }))
);

export const InternalPageNavigation:FC = ()=> {

    return useRoutes([
        {
            path: NavigationPathsEnum.dashboard,
            element: (
                <Suspense fallback={<SuspenseContent />}>
                    <Dashboard />
                </Suspense>
            ),
        },
        {
            path: NavigationPathsEnum.instructions,
            element: (
                <Suspense fallback={<SuspenseContent />}>
                    <Instructions />
                </Suspense>
            ),
        },
        {
            path: NavigationPathsEnum.bdd,
            element: (
                <Suspense fallback={<SuspenseContent />}>
                    <Bdd />
                </Suspense>
            ),
        },
        {
            path: NavigationPathsEnum.notFound,
            element: (
                <Suspense fallback={<SuspenseContent />}>
                    <NotFound />
                </Suspense>
            ),
        },
    ]);
}
