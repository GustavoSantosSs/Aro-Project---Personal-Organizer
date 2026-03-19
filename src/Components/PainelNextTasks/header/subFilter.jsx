export function SubFilter() {
    return (
        <div className="w-[30%]">
            <ul className="flex flex-wrap gap-2 flex-col items-start absolute border-[3px] border-white p-[10px] rounded-[10px] bg-[#ffffff42]">
        <li className="flex bg-gradient-to-r from-[#f77] to-[#f93636] p-2 rounded-[10px]">  
            <h1 className="text-white bg-[#333] rounded-[10px] cursor-default text-[40px] font-bold px-2 cursor-pointer">G1</h1>
        </li>
        <li className="flex bg-gradient-to-r from-[#fdd488] to-[#f99e36] p-2 rounded-[10px]">
            <h1 className="text-white bg-[#333] rounded-[10px] cursor-default text-[40px] font-bold px-2 cursor-pointer">G2</h1>
        </li>
    </ul>
        </div>
    )
}