import { useEffect, useState } from "react";

const TrafficLight = ({config, startColor, layout}) => {

    const [color, setColor] = useState(startColor);
    const [lights, setLights] = useState(config);

    useEffect(() => {
        const duration = config[color].duration;

        let timeOutId = setTimeout(() => {
            const nextColor = config[color].next;
            let currentLight = {[color]: {...lights[color], on: false}};
            let nextLight = {[nextColor] : {...lights[nextColor], on: true}};

            setLights((lights) => ({...lights, ...currentLight, ...nextLight}));
            setColor(nextColor);
    
        }, duration);

        return () => {
            clearTimeout(timeOutId);
        };

    }, [color]);


    return (
        <>
            <div className={ layout=='vertical'? "content-container" : "content-container-horizontal" }>
                {Object.values(lights).map(light => (
                    <span className="circle" style={{backgroundColor: light.on ? light.color : '#bbb'}}></span>
                ))}
            </div>  
        </>
    )
}

export default TrafficLight