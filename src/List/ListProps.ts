export interface SectionItemOptionProps {
    value: string;
    label: string;
    checked: boolean;
}

export interface SectionItemProps {
    value: string;
    label: string;
    checked: boolean;
    options: SectionItemOptionProps[];
}

export interface ListProps {
    items: SectionItemProps[];
    enableSearch: boolean;
    enableScrollbar: boolean;
    maxHeight?: number;
    onChange: (items: SectionItemProps[]) => void;
}