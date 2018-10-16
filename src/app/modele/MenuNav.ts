import { subMenu } from './subMenu'

export interface Menu {
    id: number;
    name: string;
    title: string;
    icon: string;
    subList: subMenu []
}
