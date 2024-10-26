
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LocalHotelIcon from '@mui/icons-material/LocalHotel';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BusinessIcon from '@mui/icons-material/Business';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import FlagIcon from '@mui/icons-material/Flag';
import healthcare from '../assets/images/techhome/health-insurance.png'
import egov from '../assets/images/techhome/corporate-governance.png'
import ecommerce from '../assets/images/techhome/online-shopping.png'
import img2 from '../assets/images/rechome/Img3.png'

// import healthcare from '../assets/images/TechHome/health-insurance.png'

export const TechHomeData1 = [
    {
        title: 'Banking,Financial Services & Insurance',
        icon: AssuredWorkloadIcon,
        img: img2,
        content: [
            "  Expertise in secure and efficient software for the BFSI sector.",
            "  Financial transactions management solutions.",
            "  Risk assessment systems for informed decision-making.",
            "  Customer relationship management (CRM) solutions.",
            "  Regulatory compliance solutions to meet industry standards.",
        ],
    },
    {
        title: 'e-Governance',
        icon: FlagIcon,
        img: egov,
        content: [
            "  BitByBit Solutions is at the forefront of enabling digital transformation in governance through innovative e-governance solutions.",
            "  E-governance aims to improve transparency, accessibility, and efficiency in public administration, creating a more inclusive and participatory system of governance.",
            "  Our team collaborates with government agencies to create secure, scalable digital platforms for seamless interactions among citizens, businesses, and government.",
            "  By leveraging advanced technologies, we help streamline government operations and foster a culture of accountability.",
        ]
    },
    {
        // title: 'Work Order Management',
        // icon: BusinessIcon,
        // content: [
        //     '  Integrated property management systems (PMS).',
        //     '  Guest service management software solutions.',
        //     '  Custom applications for reservations and bookings.',
        //     '  Scalable platforms for hospitality operations.',
        //     '  Scalable platforms for hospitality operations.',
        // ], 
        title: 'Healthcare',
        icon: BusinessIcon,
        img: healthcare,
        content: [
            // "  Wide range of healthcare IT solutions.",
            // "  Electronic Health Records (EHR) systems for efficient patient data management.",
            // "  Appointment scheduling software for streamlined bookings.",
            // "  Telemedicine platforms for remote patient care.",
            // "  Healthcare data analytics to improve patient care and operations.",



            "  We offer a wide range of healthcare IT solutions designed to meet the diverse needs of modern healthcare providers.",
            "  Our Electronic Health Records (EHR) systems ensure efficient patient data management, helping healthcare providers improve the overall quality of care.",
            "  Appointment scheduling software allows for smooth and efficient management of patient appointments, reducing administrative burden.",
            "  Our telemedicine platforms enable healthcare providers to deliver remote patient care, ensuring patients can access services from the comfort of their homes.",
            // "  We utilize healthcare data analytics to help providers make informed decisions."


        ],

    },
    {
        title: 'e-Commerce',
        icon: ShoppingCartIcon,
        img: ecommerce,
        content: [
            "  We specialize in providing cutting-edge technology solutions for the rapidly evolving e-commerce sector.",
            "  We offer custom solutions to help online businesses grow, streamline operations, and boost user engagement.",
            "  We provide tailored solutions that drive growth, boost efficiency, and enhance engagement, helping businesses stay competitive in a fast-changing digital market.",
            "  We deliver end-to-end e-commerce solutions, from planning to execution, helping clients navigate the ever-changing market successfully."

            // "  Wide range of healthcare IT solutions.",
            // "  Electronic Health Records (EHR) systems for efficient patient data management.",
            // "  Appointment scheduling software for streamlined bookings.",
            // "  Telemedicine platforms for remote patient care.",
            // "  Healthcare data analytics to improve patient care and operations.",
        ],
    },
];


