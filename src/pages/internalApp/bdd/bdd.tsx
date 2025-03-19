import { FC } from "react";
import { useControllers } from "./useControllers";
import { DocumentTable, FileUploader } from "./components";

export const Bdd:FC = ()=> {

    useControllers();

    return (
        <div>
            <FileUploader onFileUpload={(file, title)=> console.log({file, title})} />

            <DocumentTable />
        </div>
    )
}
