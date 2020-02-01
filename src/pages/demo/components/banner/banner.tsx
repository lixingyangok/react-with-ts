import React from 'react';
import cpnt from './style/banner.js';
const MyContext = React.createContext({name:'Tom'});

function JustOneBox(props:any){
    return <div>
        { props.children }
    </div>
}

function Banner01(){
    return <cpnt.H1>
        welcome：
        <MyContext.Consumer>
            { myVal =>  myVal.name }
        </MyContext.Consumer>
    </cpnt.H1>
}

function Banner02(){
    return <cpnt.H1>
        welcome：
        <MyContext.Consumer>
            { myVal =>  myVal.name }
        </MyContext.Consumer>
    </cpnt.H1>
}




export default function(){
    let name = 'Jack';
    return <div>
        <MyContext.Provider value={{name}}>
            <JustOneBox>
                <Banner01></Banner01>
                <Banner02></Banner02>
            </JustOneBox>  
        </MyContext.Provider>
    </div>
}

