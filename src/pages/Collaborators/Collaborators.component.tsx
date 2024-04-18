import React, { useCallback, useMemo, useState } from "react";
import './styles.css';
import { ICollaborators } from "./interfaces";
import { useTranslation } from "@utilities/hooks";
import { Dashboard } from "@dashboardWrappers";
import { Button, Input, Modal, Section, Select, Title } from "@components";
import { EnumUserRole, NavigationPathsEnum } from "@utilities/enums";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { enumToStringArray } from "@utilities/functions";

export const CollaboratorsComponent:React.FC<ICollaborators> = ({
    onAddNewCollab
})=> {

    const translate = useTranslation();
    const [search, setSearch] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [displayAddCollabModal, setDisplayAddCollabModal] = useState<boolean>(false);

    const collaboratorsList = [
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
        {
            name: 'John Doe',
            joinDate: '11/03/2024',
            role: 'administrateur',
        },
    ];

    const rolesList = useMemo(()=> {
        return enumToStringArray(EnumUserRole);
    }, []);

    const toggleDisplayAddCollabModal = useCallback(()=> {
        setDisplayAddCollabModal(!displayAddCollabModal);
    }, [displayAddCollabModal]);

    const handleAddCollaborator = useCallback(()=> {
        if(lastname && firstname && email && role){
            onAddNewCollab({
                lastname,
                firstname,
                email,
                role,
            });

            toggleDisplayAddCollabModal();
            setLastname('');
            setFirstname('');
            setEmail('');
            setRole('');
        }
    }, [
        firstname, lastname, email, role, 
        onAddNewCollab, toggleDisplayAddCollabModal,
    ]);

    const renderHeader = useCallback(()=> {
        return (
            <div className="ad_collaborators_list_table_header_container">
                <Input 
                    placeholder="recherche..."
                    width={400}
                    value={search}
                    onChange={setSearch}
                />

                <Button 
                    label="+ ajouter un collaborateur"
                    onButtonPress={toggleDisplayAddCollabModal}
                />
            </div>
        )
    }, [search, toggleDisplayAddCollabModal]);

    return (
        <Dashboard activePagePath={NavigationPathsEnum.COLLABORATORS}>
            <div>
                <Section>
                    <DataTable 
                        value={collaboratorsList} 
                        size='small' 
                        paginator rows={5} 
                        tableStyle={{ minWidth: '50rem' }}
                        header={renderHeader}
                    >
                        <Column field="name" header="Collaborateur" />
                        <Column field="joinDate" header="Depuis" />
                        <Column field="role" header="Role" />
                    </DataTable>
                </Section>

                <Modal
                    isVisible={displayAddCollabModal}
                    onClose={toggleDisplayAddCollabModal}
                >
                    <div className="td_collaborators_modal_container">
                        <Title 
                            label="Ajouter un collaborateur"
                            variant='h_sm'
                            weight='light'
                            className="td_collaborators_modal_title"
                        />

                        <Input 
                            placeholder="Nom"
                            value={lastname}
                            onChange={setLastname}
                        />
                        <Input 
                            placeholder="Prenom"
                            value={firstname}
                            onChange={setFirstname}
                        />
                        <Input 
                            placeholder="Mail"
                            value={email}
                            onChange={setEmail}
                        />
                        <Select 
                            placeholder="Role"
                            value={role}
                            onChange={setRole}
                            options={rolesList}
                        />

                        <Button 
                            buttonColor='ad_success'
                            label="ajouter"
                            customClassname="ad_collaborator_modal_button"
                            onButtonPress={handleAddCollaborator}
                        />
                    </div>
                </Modal>
            </div>
        </Dashboard>
    )
}
