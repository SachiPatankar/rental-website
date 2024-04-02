import { Link } from "react-router-dom";

const productCategory = [
    {
        id:'',
        title:'All',
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-component">
             <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/>
             <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/>
             <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/>
             <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/>
             </svg>,
        path: '/'
    },
    {
        id:'',
        title:'Studios equipments',
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clapperboard">
             <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/>
             <path d="m6.2 5.3 3.1 3.9"/>
             <path d="m12.4 3.4 3.1 4"/>
             <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>
             </svg>,
        path: '/category/studio-eqp'
    },
    {
        id:'',
        title:'Kitchen appliances',
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cooking-pot">
             <path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/>
             <path d="m4 8 16-4"/>
             <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/>
             </svg>, 
        path: '/category/kitchen-appliances',  
    },
    {
        id:'',
        title:'Home appliances',
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lamp">
             <path d="M8 2h8l4 10H4L8 2Z"/>
             <path d="M12 12v6"/>
             <path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"/>
             </svg>,
        path: '/category/home-appliances',
    },
    {
        id:'',
        title:'Travelling',
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass">
             <circle cx="12" cy="12" r="10"/>
             <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
             </svg>,
        path: '/category/travel',
        
    },
    {
        id:'',
        title:'Other Electronics',
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable">
            <path d="M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"/>
            <path d="M3 5V3"/>
            <path d="M7 5V3"/>
            <path d="M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"/>
            <path d="M17 21v-2"/><path d="M21 21v-2"/>
            <path d="M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"/>
            </svg>,
        path: '/category/others',
        
    }
]


const Categorybar = () => {
    return (
        <>
            <div className="border border-b border-[#30d5c8]"></div>
            <div className="overflow-x-auto">
                <div className="flex font-semibold gap-3 px-4 m-2 rounded-2xl justify-center">
                    {productCategory.map((cat) => (
                        <div className="flex cursor-pointer border border-[#30c5d8] gap-2 p-2 m-2 rounded-2xl shadow-md hover:bg-[#30c5d8]/80">
                            <Link to={cat.path} className="flex gap-1">
                                {cat.icon}
                                {cat.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categorybar;
