import GlobalApi from '@/app/_utils/GlobalApi'
import React ,{useEffect , useState} from 'react'
import { gql} from 'graphql-request'

export default function CoursesList() {

    const {courseList,setCourseList} = useState({});
    useEffect(()=>{
        getAllCourses();
    },[])

    const getAllCourses = () =>{
        GlobalApi.getAllCourseList().then(resp=>{
            console.log(resp);
            setCourseList(resp?.courseLists)
        }) 
    }
  return (
    <div className='p-5 bg-white rounded-lg'>
      <div>
        <h1 className='text-[20px] font-bold text-primary'>All Courses</h1>
      </div>
    </div>
  )
}
