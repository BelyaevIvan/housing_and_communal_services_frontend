

export interface BreadCrumbItem {
    name: string,
    link : string
}

export interface Breadcrumbs {
    middleItems?: BreadCrumbItem[];
    endItem?: string

}
