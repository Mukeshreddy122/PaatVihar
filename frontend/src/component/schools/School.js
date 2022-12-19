import React,{useEffect,useState} from "react"
import "./School.css"
import { useParams } from "react-router-dom"
import axios from "axios"

const School=()=>{
  const [currentSchoolDetails,setSchool]=useState()
  const {id} =useParams()
  useEffect(()=>{
    axios.get(`/api/school/${id}`).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    window.scrollTo(0,0) 
  })
  return(
    <h1>School Detail Page</h1>
  )
}
export default School