import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay(props:ProductDisplayProps){

    return(<div className="mx-auto flex-col max-w-sm items-center gap-x-4 rounded-xl bg-white  shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 font-semibold text-xl">
        
        <img src={props.product.imageUrl}/>
        <div className="w-full flex-col max-w-sm text-center justify-center alignitems-center gap-x-4 gap-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <h1>{props.product.name}</h1>
        <p className="text-blue-600">$ {props.product.price}</p>
        <p className="text-gray-700 font-normal">{props.product.description}</p>
        <p>{props.product.inStock}</p>
        <button onClick={()=>props.onAddToCart(props.product.id)} className=" w-full bg-blue-500 p-6 text-xl font-bold text-white items-center">Add to Cart </button>
        <div className="text-sm text-gray-500">{props.children}</div>
        </div>
    </div>)
}