import { ListProps } from './ListProps';
import Search from './Search';
import React, { useState } from 'react';
import './style/List.scss';
import ListItems from './ListItems';

const WithMaybeScrollbar = (props: {
    maxHeight: number;
    enableScrollbar: boolean;
    children: React.ReactNode;
}) => {

    if (props.enableScrollbar) {
        return (
            <div
                className='zb-list-scroll'
                style={{
                    maxHeight: props.maxHeight,
                }}
            >
                {props.children}
            </div>
        );
    }

    return <>{props.children}</>;
};

const List = (props: ListProps) => {
    const { items } = props;

    const [search, setSearch] = useState<string>('');

    return (
        <div className='zb-list'>
            {props.enableSearch && (
                <Search
                    value={search}
                    setValue={(text) => {
                        setSearch(text);
                    }}
                />
            )}

            <WithMaybeScrollbar
                enableScrollbar={props.enableScrollbar}
                maxHeight={props.maxHeight || 320}
            >
                <ListItems
                    items={items}
                    search={search}
                    onChange={(items) => {
                        props.onChange(items);
                    }}
                />
            </WithMaybeScrollbar>
        </div>
    );
};

export default List;
