import React from 'react';

const Checkbox = ({
    checked,
    onClick,
}: {
    checked: boolean;
    onClick?: () => void;
}) => {

    const checkMark: JSX.Element = <span>✔</span>

    return (
        <div className='zb-list-checkbox' onClick={onClick}>
            {checked && checkMark}
        </div>
    );
};

export default Checkbox;
