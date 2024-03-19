import AboutImg from '../assets/abo.jpg';

export default function About() {
    const config = {
        line1: 'I have completed Master of Science in Computer Science from Kanchi Mamunivar Center for Postgraduate Studies and Reasearch with CGPA of 7.89',
        line2: 'As an enthusiastic and evolving Front-end Developer, I am actively seeking opportunities to contribute my skills and creativity to a collaborative development team. I am particularly intrested in joining a team where i can leverage my current project experience to craft intuitive and visually appealing user interfaces, while continuesly expanding  my skill set in the field of Front-end development with a strong foundation in REACT and JAVASCRIPT',
        line3: 'In terms of my skills, I am strong in HTML, CSS, JAVASCRIPT, REACT JS, API, JSON SERVER, GIT, DSA and OOPS'
    }
    return <section className='flex flex-col md:flex-row bg-secondary' id='about'>
        <div className='py-5 px-5 md:w-[600px] '>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-[800px] flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-[#49fd52] mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}