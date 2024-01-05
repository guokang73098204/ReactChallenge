import { useState } from "react"

const Tabs = ({items}) => {
    const [value, setValue] = useState(items[0].value);

    const handleClick = (itemValue) => {
        setValue(itemValue);
    }

    return (
        <div className="tabs">
            <div className="tab-list">
                {items.map(({label, value: itemValue}) => {
                    const isActiveValue = itemValue === value;

                    return (
                        <button
                            key={itemValue}
                            type="button"
                            onClick={()=>{setValue(itemValue)}}
                            className={[
                                'tabs-list-item',
                                isActiveValue && 'tabs-list-item--active',
                            ]
                            .join(' ')}
                        >
                        {label}
                        </button>
                    )
                })}
            </div>

            <div>
                { items.map(({panel, value: itemValue}) => (
                    <div key={itemValue} hidden={itemValue!== value}>
                        {panel}
                    </div>    
                ))}
            </div>

        </div>
    )
}

export default Tabs;