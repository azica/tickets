import { FC } from "react";

declare global {
    type TabsItem = {
        id: number;
        title: string;
        path: string;
    }

    type ButtonGroup = FC<{
        buttons: TabsItemProps[];
        searchParam: string;
    }>

}