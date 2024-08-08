const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/clzl1zyoe01kk07utwibux1uh/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async() =>{
    const query = gql`

    `

    const result = await requestAnimationFrame(MASTER_URL,query);
}

export default{
    getAllCourseList
}