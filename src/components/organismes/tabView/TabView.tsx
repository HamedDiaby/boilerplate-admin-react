import React from "react";
import './styles.css';
import { ITabView } from "./interface";
import { TabView as TabViewComponent, TabPanel } from 'primereact/tabview';

export const TabView:React.FC<ITabView> = ({
    tabViewContent
})=> {

    return (
        <TabViewComponent>
            {
                tabViewContent.map((item, i)=> {
                    return (
                        <TabPanel 
                            key={i}
                            header={item.headerTxt} 
                            rightIcon={item.headerIcon}
                        >
                            {item.content}
                        </TabPanel>
                    )
                })
            }
        </TabViewComponent>
    )
} 