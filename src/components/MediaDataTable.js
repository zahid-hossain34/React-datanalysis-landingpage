import React from 'react'
import Buttons from './Buttons'
import CustomeTableData from './CustomeTableData'

const facebook = require('../assets/facebook.png')
const shopify = require('../assets/shopify.png')
const drive = require('../assets/drive.png')

const primaryButton= {
  backgroundColor: '#58BF73',
  borderRadius: '10px',
  color: '#fff',
  width: '219px',
  height: '75px',
  
};


const MediaDataTable = () => {
  return (
    <section className='mt-[200px]'>
        <div className='container'>
                <div className='flex justify-center items-center flex-col space-y-4'>
                    <p className="w-[1113px] text-center text-zinc-900 text-[51px] font-medium leading-[64.77px]">Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci sagittis eu volutpat odio</p>
                    <p className=" w-[815px] opacity-70 text-center text-zinc-900 text-2xl font-normal leading-[37.92px] tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>

                <div className='flex justify-center items-center space-x-8 mt-[60px]'>
                     <div className=" w-[194.41px] h-[194.41px] bg-white rounded-[20px] shadow-custome border border-white border-opacity-20 flex justify-center items-center" >
                        <img className='w-[54px] h-[110px]' src={facebook} alt="" />
                    </div>
                    <div className='flex flex-col space-y-8'>
                      <div className=" w-[194.41px] h-[194.41px] bg-white rounded-[20px] shadow-custome border border-white border-opacity-20 flex justify-center items-center" >
                          <img className='w-[92px] h-[92px]' src={drive} alt="" />
                       </div>
                       <div className=" w-[194.41px] h-[194.41px] bg-white rounded-[20px] shadow-custome border border-white border-opacity-20 flex justify-center items-center" >
                        <img className='w-[92px] h-[92px]' src={shopify} alt="" />
                       </div>
                    </div>
                </div>

                <CustomeTableData />

                <div className='flex justify-center items-center mt-[150px] space-x-[270px] ' >
                   <div className='flex flex-col space-y-4'>
                      <p className="w-[706px] text-zinc-900 text-[51px] font-semibold leading-[64.77px]">Ullamcorper morbi tincidunt ornare massa eget</p>
                      <p className="w-[815px] opacity-70 text-zinc-900 text-2xl font-normal leading-[37.92px] tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                    <Buttons text='Apply' style={primaryButton} />
                </div>
               
        </div>
    </section>
  )
}

export default MediaDataTable
