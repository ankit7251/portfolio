import React from 'react'
import Image from 'next/image'
import ecomHome from '@/Assets/images/ecomHome.png'
import ecomProduct from '@/Assets/images/ecomProduct.png'
import ecomCart from '@/Assets/images/ecomCart.png'

const Project: React.FC = () => {

    const projectData = [
        {
            title: "Technologies Used",
            content: {
                list: [
                    {
                        name: "React.js",
                        title: "For building dynamic and responsive user interfaces."
                    },
                    {
                        name: "Redux",
                        title: "For state management and ensuring a smooth user experience."
                    },
                    {
                        name: "RESTful API",
                        title: "For fetching product data and managing cart operations."
                    },
                    {
                        name: " CSS/SCSS",
                        title: "For styling and ensuring responsiveness."
                    },
                ]
            }
        },
        {
            title: "Features",
            content: {
                list: [
                    {
                        name: "User Interface",
                        title: "Modern, responsive design with detailed product pages and user-friendly navigation."
                    },
                    {
                        name: "Cart Management",
                        title: "Add, remove, and update items in the cart with real-time updates and persistent state."
                    },
                    {
                        name: "API Integration",
                        title: "Add, remove, and update items in the cart with real-time updates and persistent state.."
                    },
                    {
                        name: "Product Management",
                        title: "Product categories and sorting options for enhanced user experience."
                    },
                ]
            }
        },
        {
            title: "Challenges Faced",
            content: {
                list: [
                    {
                        name: "State Management",
                        title: " Implementing Redux for global state management was a complex task."
                    },
                    {
                        name: "API Integration",
                        title: " Integrating with a RESTful API for fetching product data and managing cart operations was a challenge."
                    },
                    {
                        name: "Responsive Design",
                        title: " Ensuring a responsive design for various screen sizes was a challenge."
                    },
                    {
                        name: "Performance Optimization",
                        title: "Optimizing load times and performance was crucial for a smooth user experience."
                    },
                ]
            }
        },
        {
            title: "Learning Outcomes",
            content: {
                list: [
                    {
                        name: "Advanced React.js Skills",
                        title: " Gained proficiency in building complex components and managing state."
                    },
                    {
                        name: "API Integration",
                        title: " Developed hands-on experience with RESTful APIs."
                    },
                    {
                        name: "Responsive Design",
                        title: " Enhanced understanding of responsive web design principles."
                    },
                    {
                        name: "Performance Optimization",
                        title: "Learned techniques for improving front-end performance."
                    },
                ]
            }
        },

        {
            title: "Future Enhancements",
            content: {
                list: [
                    {
                        name: "Enhanced Features",
                        title: "User authentication, personalized shopping, and advanced product recommendations."
                    },
                    {
                        name: "UI/UX Improvements",
                        title: " Interactive elements and refinements based on user feedback."
                    },
                    {
                        name: "Performance and Scalability",
                        title: "Improvements to handle increased traffic and data loads."
                    },
                    {
                        name: "Additional Functionality",
                        title: "Integration of additional payment options and product reviews."
                    },
                ]
            }
        },

    ]
    return (
        <div className='py-8 px-4 md:px-14 ' id='project'>
            <h1 className='md:text-4xl font-bold  text-baseColor mb-8'><u>E-Commerce Website</u></h1>

            <section className='mb-12'>
                <h2 className='md:text-3xl font-semibold text-baseColor mb-4'>Project Overview</h2>
                <p className='md:text-lg text-baseWhite'>
                    This e-commerce website is a robust front-end application developed using React.js. It offers users a seamless shopping experience with features like product browsing, cart management, and real-time data updates through API integration.
                </p>
            </section>
            {
                projectData.map((item, index) => (
                    <section key={index} className='mb-12'>
                        <h2 className='text-3xl font-semibold text-baseColor mb-4'>{item.title}</h2>
                        <ul className=' list-inside text-lg text-baseWhite list-none'>
                            {item.content.list.map((subitem, subindex) => (
                                <li key={subindex} className='md:text-[1.3vw] text-baseGray'>
                                    <strong className='text-baseWhite'>{subitem.name}</strong>: {subitem.title}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))
            }
            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-baseColor mb-4'>Images</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='relative h-64'>
                        <Image src={ecomHome} alt="E-commerce Home Page" layout='fill' objectFit='cover' className='rounded-lg' />
                    </div>
                    <div className='relative h-64'>
                        <Image src={ecomProduct} alt="E-commerce Product Page" layout='fill' objectFit='cover' className='rounded-lg' />
                    </div>
                    <div className='relative h-64'>
                        <Image src={ecomCart} alt="E-commerce Cart Page" layout='fill' objectFit='cover' className='rounded-lg' />
                    </div>
                </div>
            </section>
            <section className='text-center'>
                <p className='text-lg text-baseWhite mb-4'>
                    Currently, this is the only project listed. Stay tuned for more exciting projects coming soon!
                </p>
                <div className='flex justify-center space-x-4'>
                    <a href="https://ankit7251.github.io/Ecommers/" className='text-blue-500 hover:underline'>Live Demo</a>
                </div>
            </section>
        </div>
    )
}

export default Project
