import { FC, useCallback, useState } from "react";
import { Button, CardWithTitle } from "@components";

import EyeIcon  from '@heroicons/react/24/outline/EyeIcon';
import CheckIcon  from '@heroicons/react/24/outline/CheckIcon';
import TrashIcon  from '@heroicons/react/24/outline/TrashIcon';
import PencilSquareIcon  from '@heroicons/react/24/outline/PencilSquareIcon';

interface Document {
    _id: string;
    title: string;
    docFileUrl: string;
}

export const DocumentTable: FC = () => {

    const [documents, setDocuments] = useState<Document[]>([
        { _id: '1', title: "Document 1", docFileUrl: '' },
        { _id: '2', title: "Document 2", docFileUrl: '' },
        { _id: '3', title: "Document 3", docFileUrl: '' }
    ]);

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editedTitle, setEditedTitle] = useState<string>("");

    const handleEdit = useCallback((id: string, title: string) => {
        setEditingId(id);
        setEditedTitle(title);
    }, []);

    const handleSaveTitle = useCallback((id: string) => {
        setDocuments((prevDocs) =>
            prevDocs.map((doc) => (doc._id === id ? { ...doc, title: editedTitle } : doc))
        );
        setEditingId(null);
    }, [editedTitle]);

    const handleDelete = useCallback((id: string) => {
        setDocuments((prevDocs) => prevDocs.filter((doc) => doc._id !== id));
    }, []);

    const handleViewDocument = useCallback((fileURL: string) => {
        window.open(fileURL, "_blank");
    }, []);

    return (
        <CardWithTitle
            title="Liste des documents"
        >
            <table className="table w-full">
                <thead>
                    <tr className="text-center">
                        <th></th>
                        <th className="normal-case text-left">Titre</th>
                        <th className="normal-case">Document</th>
                        <th className="normal-case">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={doc._id} className="hover:bg-gray-100">
                            {/* Titre avec champ input en mode édition */}
                            <td className="text-center">{index + 1}</td>
                            <td>
                                {editingId === doc._id ? (
                                    <input
                                        type="text"
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    doc.title
                                )}
                            </td>

                            {/* Voir le document */}
                            <td className="text-center">
                                <Button
                                    className="btn-info text-white"
                                    onClick={() => handleViewDocument(doc.docFileUrl)}
                                >
                                    Voir <EyeIcon className="w-6 h-6" />
                                </Button>
                            </td>

                            {/* Icônes d'actions */}
                            <td className="text-center flex justify-center gap-4">
                                {editingId === doc._id ? (
                                    <Button
                                        className="btn-success text-white"
                                        onClick={() => handleSaveTitle(doc._id)}
                                    >
                                        <CheckIcon 
                                            className="w-6 h-6"
                                        />
                                    </Button>
                                ) : (
                                    <Button
                                        className="btn-warning text-white"
                                        onClick={() => handleEdit(doc._id, doc.title)}
                                    >
                                        <PencilSquareIcon 
                                            className="w-6 h-6"
                                        />
                                    </Button>
                                )}

                                <Button
                                    className="btn-error text-white"
                                    onClick={() => handleDelete(doc._id)}
                                >
                                    <TrashIcon 
                                        className="w-6 h-6"
                                    />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </CardWithTitle>
    );
};
