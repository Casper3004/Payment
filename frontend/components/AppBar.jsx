
export function AppBar(){

    return <div className = "h-14 shadow-md flex justify-between items-center">
       <div>
            <div className=" h-full pl-11 font-semibold text-2xl">
                Payment App
            </div>
       </div>

        <div className = "flex gap-2 pr-11 ">
            <div className = "mt-3">
                Hello, User
            </div>

            <div className = "rounded-full w-12 h-12 text-xl bg-slate-200 flex justify-center">
                <div className="font-semibold flex flex-col cursor-pointer justify-center">
                    U
                </div>
            </div>
        </div>
    </div>

}