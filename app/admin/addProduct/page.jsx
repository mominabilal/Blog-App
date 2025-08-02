'use client'
import { assets } from '@/assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [image, setImage]= useState(false)
  const [data, setData]= useState({
    title:"",
    description:"",
    category:"Technology",
    author:"Alex Bennet",
    author_img:"/author.png",
  })

  const onChangeHandler=(e)=>{
    const name= e.target.name;
    const value= e.target.value;
    setData((prev)=>({...prev,[name]:value}));
  }
  const onSubmitHandler= async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);
    formData.append("image", image);
    const response= await axios.post('/api/blog', formData);
    if(response.data.success){
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title:"",
        description:"",
        category:"Technology",
        author:"Alex Bennet",
        author_img:"/author.png",
      })
    }
    else{
      toast.error("error while adding blog");
    }
  }
  return (
    <div>
      <form className='p1-5 px-5 sm:pt-12 sm:pl-16' onSubmit={onSubmitHandler}>
            <p className='text-xl ml-4'>Upload thumbnail</p>
            <label htmlFor="image">
               <Image className='mt-4'src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
            <p className='text-xl ml-4 mt-2'>Blog title</p>
            <input name="title" onChange={onChangeHandler} value={data.title} className='w-full sm:[500px] mt-4 px-4 py-3 border border-gray-300 active:border-black' type="text" placeholder='Type here' required />
            <p className='text-xl ml-4 mt-2'>Blog description</p>
            <textarea name="description" onChange={onChangeHandler} value={data.description} className='w-full sm:[500px] mt-4 px-4 py-3 border border-gray-300 active:border-black' rows={6} placeholder='Type here' required />
            <p className='text-xl ml-4 mt-2'>Blog Category </p>
            <select name="category" onChange={onChangeHandler} value={data.category} className='w-48 mt-4 px-4 py-3 border  border-gray-300 active:border-black text-gray-500'>
              <option value="Technology">Technology</option>
              <option value="Startup">Startup</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
            <br/>
            <button type="submit" className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </div>
  )
}

export default page