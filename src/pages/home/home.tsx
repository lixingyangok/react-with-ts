import React from 'react';
import { connect } from 'react-redux';
import { IStore } from 'store/reducer';
import {TO_CHANGE_HOMEPAGE_TEXT} from 'store/actionsMaker';

interface IProps{
    someText: string,
}
// ▼ 这此声明要从store里调用哪些值
const thingsFromStore = (store:IStore):IProps=>{
    return {
        someText: store.homePageText,
    };
}

const changeFns = ( dispatch:Function )=>{
    return {
        inputChange(){
            dispatch(
                TO_CHANGE_HOMEPAGE_TEXT()
            );
        },
    };
}



const HomePage: React.FC = (props:any) => {
    // props: {history, location, match, staticContext, someText, dispatch}
    console.log();
    return <div>
        <h1 onClick={props.inputChange} 
            style={{ 'whiteSpace': 'pre-line' }}
        >
            { props.someText }
        </h1>
    </div>;
}


// 工程中的任意组件都可通过这个connect得到store里面的值
export default connect(
    thingsFromStore,
    changeFns,
)(
    HomePage,
);