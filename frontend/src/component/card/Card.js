import React,{useEffect,useState} from "react"
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import "./Card.css"
import {Link} from "react-router-dom"
import Logo from "../../component/header/Pv.png"

const Cards=({school})=>{
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])
    return <>
    {
        isLoading?<div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link to={`school/${school._id}`} style={{textDecoration:"none",color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={Logo} alt="logo"/>
                <div className="cards__overlay">
                    <div className="cards__title">
                        {
                            school?school.name:""
                        }
                    </div>
                    <div className="cards__runtime">
                    {
                            school?school.boardOfEduction:""
                        }
                        <span className="card__rating">
                            {
                                school?school.fee:""
                            }
                        </span>
                    </div>
                    <div className="cards__description">
                          {
                            school?school.address:""
                          }  
                    </div>

                </div>
            </div>
        </Link>
    }
    </>
}
export default Cards