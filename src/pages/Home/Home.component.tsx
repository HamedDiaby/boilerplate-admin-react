import React from "react";
import './styles.css';
import { IHome } from "./interfaces";
import { useTranslation } from "@utilities/hooks";
import { Dashboard } from "@dashboardWrappers";
import { Section } from "@components";
import { NavigationPathsEnum } from "@utilities/enums";

export const HomeComponent:React.FC<IHome> = ({

})=> {

    const translate = useTranslation();

    return (
        <Dashboard activePagePath={NavigationPathsEnum.HOME}>
            <div>
                <Section>
                    Home
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt praesentium vero enim saepe dolor cumque ut quam harum, dicta accusantium facilis temporibus totam quis excepturi possimus! Quam, distinctio quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab ipsum, cum eos facilis minus vitae rem provident maiores nemo praesentium quasi quos rerum aliquam mollitia deleniti perspiciatis, impedit suscipit.lore
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, doloremque sapiente officiis facere consequatur dolor asperiores a at porro ducimus! Consequuntur veniam quidem laborum mollitia, hic maiores eligendi. Libero, explicabo.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iusto quod libero explicabo facilis commodi autem delectus vero? Ipsa laboriosam assumenda voluptatum natus aliquam? Voluptate, voluptas nihil! Officia, esse unde.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum tenetur dolor asperiores fugit libero eligendi labore, id ut. At eos officia quasi sed libero quis modi obcaecati optio quo. Modi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod dolores, debitis libero, beatae velit quia laboriosam quidem consectetur, impedit eaque natus qui rem. Debitis illo consectetur eum consequatur neque?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, ipsa odit pariatur numquam soluta minima quasi! Maiores deleniti ratione quasi, vero explicabo, aliquam earum, debitis repellat laborum tenetur labore quas!
                    
                </Section>
            </div>
        </Dashboard>
    )
}
