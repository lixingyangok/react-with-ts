import React from 'react';
import cpnt from './style/about-form';

interface IForm {
    name: string,
    sex: number,
    hobbies: Array<any>,
    marriage: number,
}

export default function(){
    const [form, setForm] = React.useState({
        name: 'Tom',
        sex: 0,
        hobbies: [],
        marriage: 1,
    });
    const toChangeVal = function(ev:any ){
        setForm({
            ...form,
            [ev.target.name]: ev.target.value,
        });
    }
    const toChangeCheckBox = function (ev:any) {
        const { target:{ checked, value } } = ev;
        let hobbies:Array<number> = form.hobbies;
        console.log(value);
        if(checked){
            hobbies.find(cur=>cur==value) || hobbies.push(value);
        }else{
            hobbies = hobbies.filter(cur=>cur!=value);
        }
        // setForm({ ...form, hobbies });
        // 无法进行，暂时搁置
    }
    const showForm = function(){
        console.log( 1 );
    }
    return <div >
        <cpnt.Form>
            <div>
                name：
                <input value={form.name} type="text" name="name" onChange={toChangeVal} />
            </div>
            <div>
                gender：
                <label>
                    male <input value={0} defaultChecked={form.sex===0} name="sex" type="radio" onChange={toChangeVal} />
                </label>
                <label>
                    female <input value={1} defaultChecked={form.sex===1} name="sex" type="radio" onChange={toChangeVal} />
                </label>
            </div>
            <div>
                marriage:
                <select name="marriage" onChange={toChangeVal}>
                    <option value={1} defaultChecked={form.marriage===1}>marriaged</option>
                    <option value={0} defaultChecked={form.marriage===0}>single</option>
                </select>
            </div>
            <div>
                hobbies:
                <label>
                    reading
                    <input value={11} defaultChecked={form.sex===11} name="hobbies" type="checkbox" onChange={toChangeCheckBox} />
                </label>
                <label>
                    exercising
                    <input value={22} defaultChecked={form.sex===22} name="hobbies" type="checkbox" onChange={toChangeCheckBox} />
                </label>
            </div>
            <div>
                <button type="button" onClick={showForm} >打印表单</button>
            </div>
        </cpnt.Form>
    </div>
}