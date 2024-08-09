import GlobalApi from '@/app/_utils/GlobalApi'
import React ,{useEffect , useState} from 'react'

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
    <div>CoursesList</div>
  )
}
