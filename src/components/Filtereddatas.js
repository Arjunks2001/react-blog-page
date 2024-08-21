import React from 'react'
import { totaldata } from './Totaldata';
import { useParams } from 'react-router-dom';
import Blog_list from './Blog_list';

const Filtereddatas = () => {
   const {title}=useParams()
   const splitdata=totaldata.filter((item)=>item.title===title)
   const data=splitdata[0]
    
   console.log(data);
  return (
    <div>
        <Blog_list listdata={data.blog_data} blog_section={data.title}/>

    </div>
  )
}

export default Filtereddatas