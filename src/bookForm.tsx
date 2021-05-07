import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  bookName: string,
}

const BookForm = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  // TOOD: can be inputs?
  function onSubmit(data:any) {
    console.log('this is when I update the BookList');
    
    console.log('data', data);
    
  }

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Book Name" {...register("bookName")} />

        <input type="submit" />
      </form>
    </div>
  )
}

export default BookForm