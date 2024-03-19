

export default function Contact() {
    const config = {
        email : 'dharanivelmurugan18@gmail.com',
        phone : '+919361918140'
    }
    return <section className='flex flex-col  text-white bg-secondary px-5 py-32' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 border-[#49fd52] mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='pb-5'><span className='text-2xl font-bold'>Email : </span>{config.email}</p>
            <p className='pb-5'><span className='text-2xl font-bold'>Phone : </span>{config.phone}</p>
       
        </div>
    </section>
}