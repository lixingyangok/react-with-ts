import React from 'react';
import cpnt from './style/about-form';

export default function(){
    const [form, setForm] = React.useState({
        name: 'Tom',
        sex: 0,
        hobbies: '',
    });
    const toChangeVal = function(ev:any ){
        setForm({
            ...form,
            [ev.target.name]: ev.target.value,
        });
    }
    const toChangeCheckBox = function (ev:any) {
        const {target} = ev;
        console.log(target.checked);

    }
    return <div >
        <cpnt.Form>
            <div>
                name：
                <input value={form.name} type="text" onChange={toChangeVal} />
            </div>
            <div>
                gender：
                <label>
                    male <input value={0} defaultChecked={form.sex==0} name="sex" type="radio"  onChange={toChangeVal} />
                </label>
                <label>
                    female <input value={1} defaultChecked={form.sex==1} name="sex" type="radio"  onChange={toChangeVal} />
                </label>
            </div>
            <div>
                hobbies:
                <label>
                    reading <input value={11} defaultChecked={form.sex==11} name="hobbies" type="checkbox"  onChange={toChangeCheckBox} />
                </label>
                <label>
                    exercising <input value={22} defaultChecked={form.sex==22} name="hobbies" type="checkbox"  onChange={toChangeCheckBox} />
                </label>
            </div>

        </cpnt.Form>
    </div>
}