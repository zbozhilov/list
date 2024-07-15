# Nested Check List with Search Bar
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Properties

- **items**: `SectionItemProps[]`
  - An array of items to be displayed in the list.
- **enableSearch**: `boolean`
  - A flag to enable or disable the search functionality within the list.
- **enableScrollbar**: `boolean`
  - A flag to enable or disable the scrollbar for the list.
- **maxHeight?**: `number`
  - An optional property to set the maximum height of the list.
- **onChange**: `(items: SectionItemProps[]) => void`
  - A callback function that is triggered when the items in the list are changed.

# Example

```javascript

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


```

