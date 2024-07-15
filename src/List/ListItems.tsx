import React from 'react';
import { SectionItemProps } from './ListProps';
import SectionItem from './SectionItem';
import './style/List.scss';

const ListItems = ({
    items,
    search,
    onChange
}: {
    items: SectionItemProps[];
    search: string;
    onChange: (items: SectionItemProps[]) => void;
}) => {

    const handleSelection = (section: string, option?: string) => {

        if (!option) {
            const newItems = items.map((item) => {
                if (item.value === section) {
                    return {
                        ...item,
                        checked: !item.checked,
                        options: item.options.map((option) => {
                            return {
                                ...option,
                                checked: !item.checked,
                            };
                        }),
                    };
                }
                return item;
            });

            onChange(newItems);

            return;
        }

        const newItems = items.map((item) => {
            if (item.value === section) {
                const newOptions = item.options.map((opt) => {
                    if (opt.value === option) {
                        return {
                            ...opt,
                            checked: !opt.checked,
                        };
                    }
                    return opt;
                });

                return {
                    ...item,
                    checked: newOptions.every((opt) => opt.checked),
                    options: newOptions,
                };
            }
            return item;
        });

        onChange(newItems);
    };

    return (
        <>
            {items
                .filter((test) => {
                    if (search.trim() === '') {
                        return true;
                    }

                    const sectionTitle = test.label.toLowerCase();

                    if (sectionTitle.includes(search.toLowerCase())) {
                        return true;
                    }

                    const options = test.options.filter((option) => {
                        const optionTitle = option.label.toLowerCase();
                        return optionTitle.includes(search.toLowerCase());
                    });

                    return options.length > 0;
                })
                .map((item) => (
                    <SectionItem
                        key={item.value}
                        item={item}
                        onSectionSelect={(section) => {
                            handleSelection(section);
                        }}
                        onOptionSelect={(section, option) => {
                            handleSelection(section, option);
                        }}
                        search={search}
                    />
                ))}
        </>
    );
};

export default ListItems;
