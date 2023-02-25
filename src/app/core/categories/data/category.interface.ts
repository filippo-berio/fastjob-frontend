export interface CategoryInterface {
    id: number;
    title: string;
    remote: boolean;
    icon: string;
    children: CategoryInterface[];
}
