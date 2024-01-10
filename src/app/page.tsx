import Header from '@/components/header'
import { Button } from 'antd'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
        <Header/>
        <section className=''>
            <div>
              <div className='p-20 '>
                <h1 className='font-semibold '>Discover, collect, <br></br>& sell NFTs</h1>
                <p className='text-big font-light mt-10'>Discover the Most Premium, <br></br> Unique and Exclusive NFT Collections</p>
                <div className='flex-ic mt-8'>
                  <Button className='mr-4' size='large' style={{width: 170, height: 56}} type='primary'>Explore</Button>
                  <Button className='mr-4' size='large' style={{width: 170, height: 56}} type='primary'>Create</Button>
                </div>
              </div>
              <div>

              </div>
            </div>
        </section>
    </main>
  )
}
