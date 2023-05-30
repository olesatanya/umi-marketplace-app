
declare interface ServerResponse {
	result?: any
	error?: number
}

declare interface LoginReqeustType {
	username: string
	password: string
}

declare interface ResultType {
    err: string,
    result: string
}

interface StoreTypes {
	lang: string
    L: {[lang:string]:any}
	updated:number
	loading?:boolean
    currentPage: string
}
interface UseStoreTypes extends StoreTypes {
    T(key:string, args?:{[key:string]:string|number}|string|number):string
    update(payload:{[key:string]:any})
    call(url:string, params?:any):Promise<ServerResponse|null> 
}

declare module '@env' {
    export const REACT_APP_PROXY: string
}