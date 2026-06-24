import React from "react";
import './App.css';
import {useForm} from 'react-hook-form';


function App(){
  const {register, handleSubmit, watch} = useForm();
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
          <input {...register('name')}/>
        </label>
        
        <label>
          Email:
          <input{...register('email')}/>
        </label>

        <button type = 'submit'>Submit</button> 
      </form>
    </div>

  );
}

export default App; 