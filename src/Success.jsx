import { useEffect } from "react"


const Success = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/"
        }, 2500)
    }, [])
  return (
    <div className="h-screen  rounded-xl flex items-center " >
    <div className="bg-[#fdf3f9]  flex flex-col  items-center w-full justify-center h-full">
       <img src="/check-mark.png" alt="loaging" width={30}  />
       <h1 className="font-[550] text-lg"> Payment received!</h1>
       <p className="text-sm text-zinc-500 font-medium">Your order is now on the way. Please 
       <br />
        check your email for the receipt.
       </p>
   </div>
  </div>
  )
}

export default Success