export function TaskCard({ task }) {
  return (
    <div className="flex p-[15px] gap-5 items-center bg-linear-to-r from-[#f67c7c] to-[#f63937] rounded-[30px] w-full">
            <p className="text-[50px] text-[#333] font-bold px-[10px]">{task.time}</p>
        <div className="flex bg-[#333] rounded-[30px] grid grid-cols-[5fr_1fr]">
            <h3 className="flex items-center text-[50px] text-white font-bold truncate my-[15px] ml-[15px]">{task.title}</h3>
            <button className="flex justify-center items-center my-[15px] mr-[15px] cursor-pointer">
                <p className="text-[40px] text-center text-[#333] font-bold bg-linear-to-l from-[#797979] to-[#cfcfcf] p-[3px] rounded-[10px] aspect-square h-full">+</p>
            </button>
        </div>
    </div>
  )
}