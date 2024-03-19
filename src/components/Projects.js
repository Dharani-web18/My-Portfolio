import websiteImg1 from '../assets/todolist.png';
import websiteImg2 from '../assets/ecom.png';
import websiteImg3 from '../assets/portfolio.png';

export default function Projects(){
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'To-Do-list app using html, css, javascript, react js, api and json',
                link: 'https://github.com/Dharani-web18/To-Do-list'
                
            },
            {
                image: websiteImg2,
                description: 'Mini Ecommerce Website using html, css, javascript, react js,node js and mongo db',
                link: 'https://github.com/Dharani-web18/Ecommerce'
            },
            {
                image: websiteImg3,
                description: 'Portfolio website using html,tailwind css, javascript and react js',
                link: ''
            }
        ]
    }    

    return <section className="flex flex-col h-[500px] py-5 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full ">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4 border-[#49fd52] mb-5 w-[140px] font-bold'>Projects</h1>
                <p>These are some of my best projects, have built these with REACT JS, HTML, CSS, JAVASCRIPT and MERN</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={project.image}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='blank' href={project.link}>View Project Code</a>
                        </div>
                    </div>    
                </div>
            
                ))}
        
            </div>
        </div>
    </section>
}