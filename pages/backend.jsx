import { useEffect } from "react";
import Router from 'next/router'

export default function backend() {
    useEffect(() => {
        Router.push("https://still-crag-49161.herokuapp.com/admin")
    }, []);
}
