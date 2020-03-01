import React from 'react';
import { Menu } from 'antd';

// class Abc extends React.Component {
//     state = {
//         current: 'mail',
//     };
//     handleClick = (ev:any) => {
//         console.log('click ', ev);
//         this.setState({
//             current: ev.key,
//         });
//     };
//     render () {
//         console.log(Menu.Item);
//         return <div className="center-box">
//             asdf
//             <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
//                 <Menu.Item key="mail">
//                     Navigation One
//                 </Menu.Item>
//                 {/*<Menu.Item key="alipay">
//                     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//                         Navigation Four - Link
//                     </a>
//                 </Menu.Item> */}
//             </Menu>
//         </div>
//     };
// }

export default function (){
    const [current, setCurrent] = React.useState('mail');
    const handleClick = ()=>{
        console.log('handleClick', setCurrent);
    }
    return <div className="center-box">
        asdf
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            {/* <Menu.Item key="mail">
                Navigation One
            </Menu.Item> */}
            {/*<Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            </Menu.Item> */}
        </Menu>
    </div>
}