import React from 'react';
import { SectionItemOptionProps } from './ListProps';
import Checkbox from './Checkbox';

const SectionItemOption = ({
    option,
    onOptionSelect,
}: {
    option: SectionItemOptionProps;
    onOptionSelect: (value: string) => void;
}) => {
    const { value, label, checked } = option;

    return (
        <div className='zb-list-section-options-option'>
            <Checkbox checked={checked} onClick={() => {
                onOptionSelect(value);
            }}/>
            <div className='zb-list-section-options-option-title'>{label}</div>
        </div>
    );
};

export default SectionItemOption;
