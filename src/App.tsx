import { useState } from "react"

function App() {
  return (
   <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
     <CrousolComponent/>
   </div>
  )
}

export default App

function CrousolComponent(){

  const [select , setSelect] = useState<any>({
    Commit:"black",
    Analytics:"white",
    Upgrade:"white"
  })

  const [txt,setTxt] = useState<any>({
      Commit:"white",
      Analytics:"black",
      Upgrade:"black"
  })

  function handleCommit(){

    setSelect({
      Commit:"black",
      Analytics:"white",
      Upgrade:"white"
    })
    setTxt({
      Commit:"white",
      Analytics:"black",
      Upgrade:"black"
    })

  }
  function handleAnalytics(){

    setSelect({
      Commit:"white",
      Analytics:"black",
      Upgrade:"white"
    })
    setTxt({
      Commit:"black",
      Analytics:"white",
      Upgrade:"black"
    })


    

  }
  function handleUpgrade(){

    setSelect({
      Commit:"white",
      Analytics:"white",
      Upgrade:"black"
    })

     setTxt({
      Commit:"black",
      Analytics:"black",
      Upgrade:"white"
    })


  }


  return(
  <div className="bg-slate-50 rounded-xl h-[70%] w-[35%]  flex flex-col">



     {/* Upper Part */}
     <div className="h-[75%] w-full relative flex justify-center">

        <div className="w-full h-fit  absolute bottom-16 rounded-xl flex justify-center items-center">
          
          <div className="w-[50%] carousel carousel-center px-2 mx-1 rounded-lg">

            <div id="item1" className="carousel-item w-full  flex justify-around items-center bg-white rounded-lg px-2 py-2 shadow-md " >
              <p className="text-gray-400 ">2e813de</p>
              <div className="bg-red-300 text-white px-2 py-1 rounded-lg">Failed</div>
            </div>
            <div id="item2" className="carousel-item w-full  flex justify-around items-center bg-white rounded-lg px-2 py-2 shadow-md transition  delay-100">
              <p className="text-gray-500 ">32 Online Now</p>
              <div className="bg-blue-600 text-white px-2 py-1 rounded-lg ">Analytics</div>
            </div>
            <div id="item3" className=" carousel-item w-full  flex justify-around items-center bg-white rounded-lg px-2 py-2 shadow-md transition  delay-100 ">
              <p className="text-gray-500 ">2 Days left in your trial</p>
              <div className="bg-green-500 text-white px-1 py-1  rounded-lg ">Billing</div>
            </div>

          </div>

        </div>
        
     </div>

     {/* Content Div */}
     <div className="h-[25%] w-full ">

       <div className=" flex font-sans w-auto font-medium justify-center items-center">
         <a   href="#item1" className={`mx-4 py-1 px-2 rounded-xl  bg-${select.Commit}    text-${txt.Commit} `}   onClick={handleCommit}>Commit</a>
         <a   href="#item2"  className={`mx-4 py-1 px-2 rounded-xl  bg-${select.Analytics} text-${txt.Analytics}`} onClick={handleAnalytics}>Analytics</a>
         <a   href="#item3" className={`mx-4 py-1 px-2 rounded-xl  bg-${select.Upgrade}   text-${txt.Upgrade}`}   onClick={handleUpgrade}>Upgrade</a>
       </div>
     </div>



  </div>
  )

}
