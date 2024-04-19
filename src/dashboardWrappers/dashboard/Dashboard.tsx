import React, { useCallback, useEffect, useMemo, useState } from "react";
import './styles.css';
import { IDashboard } from "./interfaces";

import { Sidebar } from 'primereact/sidebar';

import { useNavigation, useScreenSize, useSigninSelectors } from "@utilities/hooks";
import { Icon, Paragraph, Title } from "@components";
import { EnumIconName, NavigationPathsEnum } from "@utilities/enums";

import ReactLogo from '@assets/reactLogo.svg';
import { Account, Chats } from "./components";

export const Dashboard:React.FC<IDashboard> = ({
    activePagePath,
    children,
})=> {

    const {userData} = useSigninSelectors();
    const {navigateTo} = useNavigation();
    const {isMobile} = useScreenSize();

    const [displayLeftMenu, setDisplayLeftMenu] = useState<boolean>(!isMobile);
    const [displayUserProfil, setDisplayUserProfil] = useState<boolean>(false);
    const [displayUserChats, setDisplayUserChats] = useState<boolean>(false);

    const leftTabNavItems = useMemo(()=> {
        return [
            {
                label: 'Dashboard',
                icon: EnumIconName.home,
                path: NavigationPathsEnum.HOME,
            },
            {
                label: 'Collaborateurs',
                icon: EnumIconName.users,
                path: NavigationPathsEnum.COLLABORATORS,
            },
            {
                label: 'Page introuvable',
                icon: EnumIconName.noAccess,
                path: NavigationPathsEnum.NOT_FOUND,
            },
        ];
    }, []);

    useEffect(()=> {
        if(!userData){
            navigateTo(NavigationPathsEnum.SIGNIN);
        }
    }, [userData, navigateTo]);

    const toggleDisplayUserProfile = useCallback(()=> {
        setDisplayUserProfil(!displayUserProfil)
    }, [displayUserProfil]);

    const toggleDisplayLeftMenu = useCallback(()=> {
        setDisplayLeftMenu(!displayLeftMenu);
    }, [displayLeftMenu]);

    const toggleDisplayUserChats = useCallback(()=> {
        setDisplayUserChats(!displayUserChats)
    }, [displayUserChats]);

    const renderLeftTabNav = useCallback(()=> {
        if(!displayLeftMenu) return;

        return (
            <div className={`${!isMobile && 'ad_dashboard_leftTabNav_container'}`}>
                <div className="ad_dashboard_leftTabNav_subContainer">
                    <img src={ReactLogo} alt="logo" />

                    <ul className="ad_dashboard_leftTabNav_items_list">
                        {
                            leftTabNavItems.map((tabNavItem, i)=> {
                                const isActive = tabNavItem.path === activePagePath;
                                return (
                                    <li
                                        key={i}
                                        onClick={()=> navigateTo(tabNavItem.path)}
                                        className={`ad_dashboard_leftTabNav_item ${isActive && 'ad_dashboard_leftTabNav_item_active'}`}
                                    >
                                        <Icon 
                                            iconName={tabNavItem.icon}
                                            size={16}
                                            colors={isActive ? "#ec4dbc" : "#fff"}
                                        />
                                        <Paragraph 
                                            label={tabNavItem.label}
                                            className={`ad_dashboard_leftTabNav_item_txt ${isActive && 'ad_dashboard_leftTabNav_item_txt_active'}`}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }, [isMobile, displayLeftMenu, leftTabNavItems, activePagePath, navigateTo]);

    const renderChildrenContent = useCallback(()=> {
        return (
            <div className="ad_dashboard_children_container">
                <div className="ad_dashboard_children_header_container">
                    <div className="ad_dashboard_children_header_subContainer">
                        <Icon 
                            iconName={EnumIconName.menu}
                            size={isMobile ? 16 : 22}
                            colors="#fff"
                            onIconPress={toggleDisplayLeftMenu}
                        />
                        <Title 
                            label="Dashbord item"
                            variant={'h_sm'}
                            weight='light'
                            className="ad_dashboard_children_header_Title"
                        />
                    </div>

                    <div className="ad_dashboard_children_header_subContainer ad_dashboard_align_flex_end">
                        <div className="ad_dashboard_align_flex_end_chats_icon">
                            <Icon 
                                iconName={EnumIconName.chats}
                                colors="#c8ccd8"
                                size={20}
                                onIconPress={toggleDisplayUserChats}
                            />
                        </div>

                        <Icon 
                            iconName={EnumIconName.user}
                            colors="#c8ccd8"
                            size={20}
                            onIconPress={toggleDisplayUserProfile}
                        />
                    </div>
                </div>

                <div className="ad_dashboard_children_body_container">
                    {children}
                </div>
            </div>
        )
    }, [
        children, isMobile, 
        toggleDisplayUserChats,
        toggleDisplayLeftMenu, 
        toggleDisplayUserProfile,
    ]);

    return (
        <div className="ad_dashboard_container">
            {renderLeftTabNav()}
            {renderChildrenContent()}

            {
                isMobile && (
                    <Sidebar 
                        visible={displayLeftMenu} 
                        onHide={toggleDisplayLeftMenu}
                        className="ad_dashboard_mobile_left_sidebar"
                    >
                        {renderLeftTabNav()}
                    </Sidebar>
                )
            }

            <Sidebar
                position='right'
                visible={displayUserProfil}
                onHide={toggleDisplayUserProfile}
                className="ad_dashboard_mobile_right_sidebar"
            >
                <Account />
            </Sidebar>

            <Sidebar
                position='right'
                visible={displayUserChats}
                onHide={toggleDisplayUserChats}
                className="ad_dashboard_mobile_right_sidebar ad_dashboard_mobile_right_sidebar_wLarge"
            >
                <Chats />
            </Sidebar>
        </div>
    )
}