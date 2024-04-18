import React from "react";
import './styles.css';
import { INotFound } from "./interfaces";
import { useTranslation } from "@utilities/hooks";
import { Dashboard } from "@dashboardWrappers";
import { Section, Title } from "@components";
import { NavigationPathsEnum } from "@utilities/enums";

export const NotFoundComponent:React.FC<INotFound> = ({

})=> {

    const translate = useTranslation();

    return (
        <Dashboard activePagePath={NavigationPathsEnum.NOT_FOUND}>
            <div>
                <Section>
                    <Title 
                        label={translate('notFoundPageText')}
                        className="ad_notfoundtxt"
                        variant='h_sm'
                        weight='light'
                    />
                </Section>
            </div>
        </Dashboard>
    )
}
