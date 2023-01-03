import { Data } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import useSWR from "swr"


const Swr = () => {

    const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

    const {data,error} = useSWR("https://api.github.com/repos/vercel/swr",fetcher)

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    return (
        <div>hello {data.name}</div>
    )
}

  

export default Swr;