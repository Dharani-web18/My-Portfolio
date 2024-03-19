import ResumeImg from '../assets/resume4.jpg';

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1pw4MeXIY4296SzcgwLNiaVtYcxdrv1pW/view?usp=drivesdk'
    }

    return <section className='flex flex-col md:flex-row bg-secondary' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='h-[300px] w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-[#49fd52] mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
                
            </div>
        </div>
    </section>
}