import { useEffect } from "react"


const Process = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/success"
        }, 2000)
    }, [])
  return (
   <div className="h-screen  rounded-xl flex items-center " >
     <div className="bg-[#fdf3f9]  flex flex-col  items-center w-full justify-center h-full">
        <img src="/loading.png" alt="loaging" width={20} className="animate-spin" />
        <h1 className="font-semibold text-lg"> Payment is processing...</h1>
        <p className="text-sm text-zinc-700">Please wait, do not close this screen</p>
    </div>
   </div>
  )
}

export default Process