import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CountryDropdown from '../components/Countries'
import TimezoneDropdown from '../components/Timezone'

const AccountsScreen = () => {
  return (
    <div >
      <div className='flex justify-between mx-5 mt-10'>
        <div>
        <h1 className='font-bold'>Personal Info</h1> 
        <p className='text-gray-700 mt-2'>Update your photo and personal details here.</p>
        </div>
        <div className='space-x-3'>
          <Button variant='outline' className='border border-gray-300'>Cancel</Button>
          <Button className='bg-[#693EFE]'>Save</Button>
        </div>
      </div>
      <div className="border-t border-gray-300 opacity-30 mt-5"></div>
    
    <div className='flex gap-56 mx-5 mt-5'>
        <div className='flex gap-2 col-span-1'>
            <h1>Name</h1><h1 className='text-[#693EFE]'>*</h1>
        </div>
        <div className='flex '>
            <Input className='w-1/2' placeholder='Olivia' />
            <Input className='w-1/2' placeholder='Rhyne'/>
        </div>
    </div>
    <div className="border-t border-gray-300 opacity-30 mt-5"></div>

    <div className='flex gap-40  mx-5 mt-5'>
        <div className='flex gap-2'>
            <h1 className=''>Email Address</h1><h1 className='text-[#693EFE]'>*</h1>
        </div>
        <div className=''>
            <Input className='w-[512px]' placeholder='olivia@untitledui.com' />
        </div>
    </div>
    <div className="border-t border-gray-300 opacity-30 mt-5"></div>
    <div className='flex mx-5 gap-12 mt-5'>
      <div>
        <h1 className='text-sm text-gray-700'>Your photo</h1>
        <h1 className='text-sm text-gray-700'>This will be displayed on your profile</h1>
      </div>
      <div>
        <div  className='flex gap-5'>
        <div className='mt-4'>
          <Image
          src='/Oli.svg'
          height={60}
          width={60}
          alt='Oli'
          />
        </div>
      <div
        className="border-2 rounded-lg px-6 py-4 w-[428px] border-[#693EFE] relative mt-2.5"
        // {...getRootProps()}
      >
        <input
          type="file"
          className="absolute opacity-0 h-full w-full"
          // {...getInputProps()}
        />
        <div className="flex items-center flex-col">
          <div className="border rounded-lg flex items-center justify-center p-2.5 shadow-sm shrink-0">
            <UploadCloud size={16.5} color="#475467" />
          </div>
          <div className="mt-3">
            <h2 className="text-[#693EFE] font-semibold text-sm text-center">
              Click to upload{" "}
              <span className="text-secondary font-normal ">
                or drag and drop
              </span>
            </h2>
            <p className="text-[#693EFE] text-xs font-normal mt-1 text-center">
              Supported files: Word, PDF, CSV or Excel
            </p>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="border-t border-gray-300 opacity-30 mt-5"></div>


  {/*Country Dropdown */}
    <div>
      <div className='flex gap-52 mx-5 mt-5'>
        <h1>Country</h1>
        <CountryDropdown />
      </div>
    </div>
    <div className="border-t border-gray-300 opacity-30 mt-5"></div>

    <div>
      <div className='flex gap-48 mx-5 mt-5'>
        <h1>Timezone</h1>
        <TimezoneDropdown/>
      </div>
    </div>
    <div className='space-x-3 flex mt-5 justify-end'>
          <Button variant='outline' className='border border-gray-300'>Cancel</Button>
          <Button className='bg-[#693EFE]'>Save</Button>
        </div>
    </div>
  )
}

export default AccountsScreen
