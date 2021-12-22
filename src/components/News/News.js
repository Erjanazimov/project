import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {news} from "../../redux/actions";
import Footer from "../Footer/Footer";


function News(){
    const newsState = useSelector(state => {
        return state.NewsReducer
    })
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(news())
    },[])

    return(
        <div className="fons_Trainer">
            <div className="containerM mt pb-5">
                <div className="pt-4">
                    <p className="newsText text-center">Новости о нашей Академии</p>
                    <div className="NewsFlex pt-3">
                    {newsState.news.map(item => {
                        return <div className="newsfons m-2" key={item.id}>
                            <h3>{item.name}</h3>
                            <hr className="hr"/>
                            <div className="newsPost">
                            <p>{item.information}</p>
                            </div>
                        </div>
                    })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default News;