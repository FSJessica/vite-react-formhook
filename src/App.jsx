import React,{useEffect} from "react";
import './App.css';
import {useForm} from 'react-hook-form';


function App(){
  const {register, handleSubmit, watch,  formState: {errors}} = useForm();
  const onSubmit =(data) => console.log();

  //console.log(watch('name'));
  const watchedName = watch('name');
  const watchedEmail = watch('email');


  useEffect(() => {
    console.log('Name', watchedName);
  }, [watchedName]);

  useEffect(() => {
    console.log('Email', watchedEmail);
  }, [watchedEmail]);

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit= {handleSubmit(onSubmit)}>
        <label>
          Name:
          {/* <input {...register('name', {required: true, minLength:2})}/> */}
          <input {...register('name',
             {required: 'Name is required',
              minLength: { value: 2,
                          message: 'Name should be atleast 2 characters'

              }})}
              />

        </label>
        {errors.name && <p>{errors.name.message}</p>}
        
        <label>
          Email:
          <input{...register('email', {required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })}/>
        </label>
        {errors.email && <p>Email is required</p>}


        <button type = 'submit'>Submit</button> 
      </form>
    </div>

  );
}

export default App; 