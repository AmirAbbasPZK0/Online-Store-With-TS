import { useState } from "react";
import { UserAuth, UserData } from "../interfaces/types";
import { MAIN_URL } from "../libs/constants";
import { ProductsProvider  , ProductType} from "../interfaces/types";

const useAsync = (innerUrl : string , method : string) => {
    
    const [detailData , setDetailData] = useState<ProductType>({
        id: 0,
        title : "",
        description : "",
        price : 0,
        images : [],
        category : 0,
        rating : 0,
        quantity : 0,
    })

    const [data , setData] = useState<undefined | ProductsProvider>(undefined)
    const [loading , setLoading] = useState<boolean>(true)
    
    const run = (innerData : (UserAuth | undefined) = undefined) => {
        switch(method){
            case "POST":
                return new Promise<UserData>((resolve , reject)=>{
                    fetch(MAIN_URL + innerUrl , {
                        method : method,
                        headers : {
                            "Content-Type" : "application/json"
                        },
                        body : JSON.stringify(innerData)
                    }).then(res => {
                        return res.json()
                    }).then(data => {
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                })
            case "GET":
                return fetch(MAIN_URL + innerUrl)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                    setDetailData(data)
                })
                .catch(()=>{
                    setLoading(false)
                })
        }
    }

    return {data , loading , run , detailData}

}
 
export default useAsync;