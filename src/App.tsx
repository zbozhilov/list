import React from 'react';
import './App.css';
import List from './List/List';
import { useState } from 'react';
import { SectionItemProps } from './List/ListProps';

function App() {
    
    const [items, setItems] = useState<SectionItemProps[]>([
        {
            value: 'usa',
            label: 'USA',
            checked: false,
            options: [
                {
                    value: 'nyc',
                    label: 'New York City',
                    checked: false,
                },
                {
                    value: 'la',
                    label: 'Los Angeles',
                    checked: false,
                },
            ],
        },
        {
            value: 'canada',
            label: 'Canada',
            checked: false,
            options: [
                {
                    value: 'toronto',
                    label: 'Toronto',
                    checked: false,
                },
                {
                    value: 'vancouver',
                    label: 'Vancouver',
                    checked: false,
                },
            ],
        },
        {
            value: 'mexico',
            label: 'Mexico',
            checked: false,
            options: [
                {
                    value: 'mexico-city',
                    label: 'Mexico City',
                    checked: false,
                },
                {
                    value: 'cancun',
                    label: 'Cancun',
                    checked: false,
                },
            ],
        },
        {
            value: 'uk',
            label: 'UK',
            checked: false,
            options: [
                {
                    value: 'london',
                    label: 'London',
                    checked: false,
                },
                {
                    value: 'manchester',
                    label: 'Manchester',
                    checked: false,
                },
            ],
        },
    ]);

    return (
        <div className='App'>
            <List
                items={items}
                enableSearch={true}
                enableScrollbar={true}
                onChange={(items) => {
                    setItems(items);
                }}
            />
        </div>
    );
}

export default App;
