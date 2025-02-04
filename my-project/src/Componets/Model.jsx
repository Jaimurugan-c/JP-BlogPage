import React from 'react'

const Model = ({isOpen, onClose}) => {
 
  

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className='model-container'>
        <div className='bg-indigo-700 text-center p-5 h-96 w-[500px] rounded shadow-md'>
            {/*Model Content */}
            <p className='text-xl font-semibold mb-4 mt-6  uppercase'>Please Login Here </p>
            <form className='px-4 '>
                {/*email */}
                <div className='mb-5'>
                <input type='email' name='email' id='email' placeholder='BLOG@gamil.com'
                className=' w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base
                font-medium text-[#6B7280] outline-none focus:border-[#6a64f1 focus:shadow-md] '/>
                </div>
                <div className='mb-5'>
                <input type='password' name='password' id='passwprd' placeholder='Enter the Password'
                className=' w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base
                font-medium text-[#6B7280] outline-none focus:border-[#6a64f1 focus:shadow-md] '/>
                </div>
                <div>
                    <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-500 py-3
                    px-8 text-base font-semibold text-white outline-none'>Login</button>
                </div>
            </form>
            {/*model close btn */}
            <button onClick={onClose} c className='hover:shadow-md rounded-md mt-3 bg-[#6a64f1] hover:bg-orange-500 py-3
                    px-8 text-base font-semibold text-white outline-none'>
                Close</button>
        </div>
      </div>
    </div>
  )
}

export default Model