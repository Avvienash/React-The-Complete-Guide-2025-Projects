import {EXAMPLES} from "../data"
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";




export default function Examples() {

    //let dynamicContent = 'Press any tab' // Doesn't work before App is only rub Once , so even through var is updated the rendered doesn't reder. Need to use States
    const [selectedTabState , setSelectedTabState] = useState();
    
    function handleClick(selectedTab){
        setSelectedTabState(selectedTab)
    }

    return (
        <Section id="examples" title="Examples">
            <menu>
            <TabButton 
                onClick={() => handleClick('components')} 
                isActive={selectedTabState == "components"}>
                Components</TabButton>
            <TabButton 
                onClick={() => handleClick('jsx')} 
                isActive={selectedTabState == "jsx"}>
                JSX</TabButton>
            <TabButton 
                onClick={() => handleClick('props')} 
                isActive={selectedTabState == "props"}>
                Props</TabButton>
            <TabButton 
                onClick={() => handleClick('state')} 
                isActive={selectedTabState == "state"}>
                State</TabButton>
            </menu>
            
            {selectedTabState ? (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTabState].title}</h3>
                <p>{EXAMPLES[selectedTabState].description}</p>
                <pre>
                <code>
                    {EXAMPLES[selectedTabState].code}
                </code>
                </pre>
            </div>
            ) : (
            <p>Please Select a tab</p>
            )}
        </Section>
    )
}


//export default Examples;
