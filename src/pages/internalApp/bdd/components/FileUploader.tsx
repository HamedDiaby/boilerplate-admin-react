import { Button, CardWithTitle, InputText } from "@components";
import { FC, useState, ChangeEvent } from "react";

interface FileUploaderProps {
    onFileUpload: (file: File, title: string) => void;
}

export const FileUploader: FC<FileUploaderProps> = ({ onFileUpload }) => {

    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    // Types de fichiers acceptés
    const allowedTypes = [
        "application/pdf",
        "text/plain",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            if (!allowedTypes.includes(selectedFile.type)) {
                setError("Format de fichier non supporté. Veuillez sélectionner un PDF, TXT, Excel ou Word.");
                setFile(null);
                return;
            }

            setFile(selectedFile);
            setError(null);
        }
    };

    const handleUpload = () => {
        if (file && title.trim()) {
            onFileUpload(file, title);
            setFile(null);
            setTitle("");
        } else {
            setError("Veuillez sélectionner un fichier et entrer un titre.");
        }
    };

    return (
        <div className="flex justify-center">
            <CardWithTitle title="Uploader un fichier" className="w-[60%]">
                <InputText 
                    value={title}
                    onChange={setTitle}
                    placeholder="Entrez le titre du fichier"
                    containerStyle="mb-3"
                />

                <input
                    type="file"
                    accept=".pdf,.txt,.xls,.xlsx,.doc,.docx"
                    onChange={handleFileChange}
                    className="file-input file-input-bordered w-full mb-3 bg-gray-100"
                />

                {file && (
                    <div className="p-2 bg-white rounded-md shadow-md flex items-center justify-between">
                        <span className="text-sm">{file.name}</span>
                        <button onClick={() => setFile(null)} className="btn btn-xs btn-error text-white">Supprimer</button>
                    </div>
                )}

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <Button 
                    onClick={handleUpload}
                    className="w-full mt-4 text-white"
                >
                    Enregistré
                </Button>
            </CardWithTitle>
        </div>
    );
};
