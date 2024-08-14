import { useEffect, useState } from "react";
import axiosPublic from "../api/axiosPublic";

const useGetLatest = () => {
    const [latestProducts, setLatestProduct] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        getData();
    }, [])

    const getData = async () => {
        const { data } = await axiosPublic.get('/latest');
        setLatestProduct(data);
        setLoader(false);
    }
    return [latestProducts, loader]
};

export default useGetLatest;