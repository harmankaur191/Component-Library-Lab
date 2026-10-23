import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay(props:ProductDisplayProps){

    return(<div className="w-full flex flex-col max-w-* items-center gap-x-4 rounded-xl bg-white  shadow-lg outline outline-black/10 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 font-semibold text-xl p-16">
        
        <img src={props.product.imageUrl} className="w-full rounded-xl"/>
        <div className="w-full flex-col max-w-* text-center justify-center alignitems-center gap-4 rounded-xl bg-white p-2  dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 text-xl">
        <h1>{props.product.name}</h1>
        <p className="text-blue-600">$ {props.product.price}</p>
        <p className="text-gray-700 font-normal">{props.product.description}</p>
       
        <p className="text-green-700 font-normal">{props.product.inStock? "In Stock": "Out of Stock"}</p>
        <button onClick={()=>props.onAddToCart(props.product.id)} className=" rounded-xl w-full bg-blue-500 p-6 text-xl font-bold text-white items-center">Add to Cart </button>
        <div className="text-lg text-gray-500">{props.children}</div>
        </div>
    </div>)
}