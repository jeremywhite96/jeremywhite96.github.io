import Image from '@/components/Image'

const  BubPersonas= () => {
    return ( 
        <div className='sm:col-span-12 grid sm:grid-cols-12 grid-cols-6 xl:flex-col flex auto-rows-auto flex-row gap-4'>
                <div className='col-span-3 relative'>
                    <div className='h-fit w-fit pb-2'>
                        <Image src='/static/images/bubble/userrequirements/Rosie.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
                        </div>
                    <div>
                    <span className='font-bold'>Rosie Birch</span><br />
                    Recent Graduate <br />
                    Amblyopia</div>
                </div>
                <div className='col-span-3 relative'>
                    <div className='h-fit w-fit pb-2'>
                        <Image src='/static/images/bubble/userrequirements/Samia.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
                        </div>
                    <div>
                    <span className='font-bold'>Samia Ahmed</span><br />
                    Interrnational Student <br />
                    Homesick</div>
                </div>
                <div className='col-span-3 relative'>
                    <div className='h-fit w-fit pb-2'>
                        <Image src='/static/images/bubble/userrequirements/Matthew.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
                        </div>
                    <p>
                    <span className='font-bold'>Matthew Randall</span><br />
                    Undergraduate Student<br />
                    Social Anxiety</p>
                </div>
                <div className='col-span-3 relative'>
                    <div className='h-fit w-fit pb-2'>
                        <Image src='/static/images/bubble/userrequirements/Connor.png' className="object-contain object-left h-full w-full" width="750" height="1000" />
                        </div>
                    <div>
                    <span className='font-bold'>Connor Wyatt</span><br />
                    Undergraduate Student<br />
                    Busy Schedule (FOMO)</div>
                </div>
            </div>
     );
}
 
export default BubPersonas;