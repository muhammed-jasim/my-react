import React, {useState} from 'react';
function Contact(){

    const [formData,setFormData] = useState({
        name :'',
        email :'',
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name] : value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const actionUrl = 'https://formsubmit.co/jasimmuhammed705@gmail.com';

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = actionUrl;

        for (const key in formData) {  //key ennulath formData yil ulla key ann 
            if (formData.hasOwnProperty(key)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                
                input.name = key;
                input.value = formData[key];
                form.appendChild(input);
            }
         }

        const captcha = document.createElement('input');
        captcha.type = 'hidden';
        captcha.name = '_captcha';
        captcha.value = 'false';
        form.appendChild(captcha);

          
        document.body.appendChild(form);
        form.submit();
        };

    return(
        <div className='contact'>
            <h1>Contact Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input type='text' id='name' name='name' value={formData.name} onChange={handleChange}></input>
                    <label>Email :</label>
                    <input type='email' id='email' name='email' value={formData.email} onChange={handleChange}></input>
                </div>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

;export default Contact;