function CurrentDate() {
    return (
        <div class="w-[20%] border-2 flex flex-wrap justify-center items-center p-3 cursor-default" id="CurrentDate-container">
            <p class="h-[60%] flex justify-center items-center text-[#333333] font-bold text-[60px] bg-linear-to-t from-[#797979] to-[#cfcfcf] rounded-[10px] aspect-square">{new Date().getDate()}</p>
            <p class="w-full flex justify-center text-white font-semibold text-[40px]">{String(new Date().getMonth() + 1).padStart(2, "0")}/{String(new Date().getFullYear() % 100).padStart(2, "0")}</p>
        </div>
    );
}

export default CurrentDate;