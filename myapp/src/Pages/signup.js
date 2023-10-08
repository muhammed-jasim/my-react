import { useState, useEffect} from 'react';


function Signup(){
    const [inputFields,setInputFields] = useState({
        username :'',
        password :'',
        age : null
    });
    const [errors,setErrors] = useState({})
    const [submitting,setSubmitting] = useState(false)

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.username.length < 4){
            errors.username = 'username is too short';
        }
        if (inputValues.password.length < 8){
            errors.password = 'password is too short';
        }
        if (!inputValues.age || inputValues.age < 18){
            errors.age = 'minimum age is 18';
        }
        return errors;
    }
    const handleChange = (e) => { 
        setInputFields({...inputFields,[e.target.name]: e.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();        // ith kodukkunath page reload avukayilla
        setErrors(validateValues(inputFields))
        setSubmitting(true);
    }
    const finishSubmit = () => {
        console.log(inputFields);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting){
            finishSubmit();
            
        }
    },[errors])


    return(
        <div id='main'>
            <div id='signup'>
                <div className="heading">
                    <h2>SIGN UP</h2>
                </div>
                
                <form className="signupform" onSubmit={handleSubmit} action="https://formsubmit.co/muhammedjasim1000@gmail.com" method="POST">

                    <label>Username</label>
                    <input type="username" name="username" value={inputFields.username} onChange={handleChange}></input>
                    {errors.username ? ( <p className='error'>username should be atleast 4 characters</p>):null}    

                    <label>Password</label>
                    <input type="password" name="password" value={inputFields.password} onChange={handleChange}></input>
                    {errors.password ? ( <p className='error'>password should be atleast 8 characters</p>):null}

                    <label>Age</label>
                    <input type="number" name="age" value={inputFields.age} onChange={handleChange}></input>
                    {errors.age ?(<p className='error'>minimum age is 18</p>):null}

                    {Object.keys(errors).length === 0 && submitting ?(
                        <span className='success'>Successfully Submited!</span>
                    ):null}

                    <button className="btn" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}   

export default Signup;


