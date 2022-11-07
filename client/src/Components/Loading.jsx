import React from "react";
import { useParams } from "react-router-dom";
import load from "../Images/Loading.gif";
import s from './Loading.module.css'

export default function LoadingAll (){
    const params = useParams();
    return (
        <img key={params.id} src={load} alt="loading" className={s.loading}/>
    )
}