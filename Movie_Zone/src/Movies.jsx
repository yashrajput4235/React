import React, { useState } from "react";
import { movies } from "./data";
const Movies=()=>{
    const [movieList, setMovieList]=useState(movies);
    const filterByCategory=(category)=>{
        setMovieList(movies.filter(data)=>data.category===category))
    };
    return(
        <>
            <div className="my-3" style={{ width: "1000px", margin: "auto" }}>
                <div className="mx-auto text-center">
                    <button onClick={()=>setMovieList(movies)} 
                        type="button"
                        classNmae="btn btn-outline-primary mx-3"
                    > All  </button>
                    
                    <button onClick={()=>filterByCategory("Action")}
                        type="button"
                        classNmae="btn btn-outline-primary mx-3"
                    > Action </button>
                    
                    <button onClick={()=>filterByCategory("Animation")}
                        type="button"
                        classNmae="btn btn-outline-primary mx-3"
                    > Animation </button>
                    
                    <button onClick={()=>filterByCategory("Drama")}
                        type="button"
                        classNmae="btn btn-outline-primary mx-3"
                    > Drama </button>
                    
                    <button onClick={()=>filterByCategory("Horror")}
                        type="button"
                        classNmae="btn btn-outline-primary mx-3"
                    > Horror </button>
                    
                    <button onClick={()=>filterByCategory("Sci-Fi")}
                        type="button"
                        classNmae="btn btn-outline-primary mx-3"
                    > Sci-Fi </button>
                    
                    <button onClick={()=>filterByCategory("Thriller")}
                        type="button"
                        classNmae="btn btn-outline-primary mx-3"
                    > Thriller </button>    
                    


                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                margin: "auto",
                width:"1300px",
                marginTop: "1.5 rem",
            }}
            >
                {movieList.map((data)=>{
                    return(
                        <div key={data.id} className="card" style={{width: "18rem"}}>
                            <img src={data.poster_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.release_date}</p>
                                <p className="card-text">{data.category}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )

    
}
export default Movies;