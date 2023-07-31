import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function Pagination() {

  const {totalPages,page,pageChangeHandeler} = useContext(AppContext);

  
  return (
    <div className='flex justify-center w-full sticky bottom-0 bg-[#fff] py-[.7rem] border pr-[5px]'>
      <footer className=' flex w-[100%] sm:w-[90%] md:w-[80%] lg:w-[43%] justify-between items-center' >
        <div>
          {page > 1 &&
            (<button className='border-2 border-[#b8b8b8] px-[.7rem] py-[.3rem] rounded bg-gray-100 mr-2' onClick={() =>{pageChangeHandeler(page-1)}}>Previous</button>)
          }

          {page < totalPages &&
            (<button className='border-2 border-[#b8b8b8] px-[.7rem] py-[.3rem] rounded bg-gray-100' onClick={()=>{pageChangeHandeler(page+1)}}>Next</button>)
          }
        </div>

        <span className='font-bold'>Page {page} of {totalPages}</span>
      </footer>
    </div>
  )
}
