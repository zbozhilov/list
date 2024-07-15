import React from 'react';
import { SectionItemProps } from './ListProps';
import Checkbox from './Checkbox';
import SectionItemOption from './SectionItemOption';

const SectionItem = ({
    item,
    search,
    onSectionSelect,
    onOptionSelect,
}: {
    item: SectionItemProps;
    search: string;
    onSectionSelect: (section: string) => void;
    onOptionSelect: (section: string, option: string) => void;
}) => {
    const { value, label, checked, options } = item;

    return (
        <div className='zb-list-section'>
            <div className='zb-list-section-header'>
                <Checkbox
                    checked={checked}
                    onClick={() => {
                        onSectionSelect(value);
                    }}
                />
                <div className='zb-list-section-header-title'>{label}</div>
            </div>

            <div className='zb-list-section-options'>
                {options
                    .filter((test) => {
                        if (search.trim() === '') {
                            return true;
                        }

                        const optionTitle = test.label.toLowerCase();

                        return (
                            value.includes(search.toLowerCase()) ||
                            optionTitle.includes(search.toLowerCase())
                        );
                    })
                    .map((option) => (
                        <SectionItemOption
                            key={option.value}
                            option={option}
                            onOptionSelect={() => {
                                onOptionSelect(value, option.value);
                            }}
                        />
                    ))}
            </div>
        </div>
    );
};

export default SectionItem;
