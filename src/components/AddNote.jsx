import React from 'react';

// Import Formik and Yup
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";

const AddNote = (props) => {
 const initialValues={
  title:"",
  content:"",
 }

 const validationScheme= Yup.object({
  title:Yup.string().required("waa Qasab inaa galiso cinwaan"),
  content:Yup.string().required("waa Qasab inaa qoraal galiso"),
 }) 
 
 const handleSubmit= (values)=>{

props.createNote({
  title:values.title,
  content:values.content
})
 }

 

  // add form logic here


  return (
    <div className="bg-white rounded-b-xl rounded-t-xl w-6/12 py-10 px-14">
      { /* Add here your form and style it with Tailwind */ }
      <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={handleSubmit}
     
      >
        <Form className="flex flex-col space-y-5">
          <Field type="text" name="title" placeholder="Title"className="bg-gray-50 px-4 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <ErrorMessage name="title"></ErrorMessage>
          <Field type="text" name="content" placeholder="Body" className="bg-gray-50 px-4 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <ErrorMessage name="content"></ErrorMessage>
          <button type="submit" className="bg-yellow-400 rounded py-4 font-bold "> Add Note</button>

        </Form>
      

      </Formik >
    </div>
  );
};

export default AddNote;
