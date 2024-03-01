export interface ProductType {
    id: number
    title : string
    description : string
    price : number
    images : string[]
    category : number
    rating : number
    quantity : number
}

export interface CartProduct {
    cart : {
        [id : number] : ProductType
    }
}

export interface UserAuth {
    username : string
    password : string
}

export interface UserData {
    email : string
    firstName : string
    lastName : string
    gender : string
    token : string
    username : string
    image : string
}

export interface UserState{
    isLogin : boolean
    userToken ?: string
    userDetails ?: UserData
}

export interface ProductsProvider {
    products : ProductType[]
}
