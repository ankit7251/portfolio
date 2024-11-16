import React from 'react'
import Image from 'next/image'
import ecomHome from '@/Assets/images/ecomHome.png'
import ecomProduct from '@/Assets/images/ecomProduct.png'
import ecomCart from '@/Assets/images/ecomCart.png'

const Project: React.FC = () => {
    return (
        <div className='py-8 px-4 md:px-14 ' id='project'>
            <h1 className='md:text-4xl font-bold  text-baseColor mb-8'><u>E-Commerce Website</u></h1>

            <section className='mb-12'>
                <h2 className='md:text-3xl font-semibold text-baseColor mb-4'>Project Overview</h2>
                <p className='md:text-lg text-baseWhite'>
                    This e-commerce website is a robust front-end application developed using React.js. It offers users a seamless shopping experience with features like product browsing, cart management, and real-time data updates through API integration.
                </p>
            </section>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-baseColor mb-4'>Technologies Used</h2>
                <ul className=' list-inside text-lg text-baseWhite list-none'>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>React.js</strong>: For building dynamic and responsive user interfaces.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Redux</strong>: For state management and ensuring a smooth user experience.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>RESTful API</strong>: For fetching product data and managing cart operations.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>CSS/SCSS</strong>: For styling and ensuring responsiveness.</li>
                </ul>
            </section>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-baseColor mb-4'>Features</h2>
                <ul className=' list-inside text-lg text-baseWhite list-none'>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>User Interface</strong>: Modern, responsive design with detailed product pages and user-friendly navigation.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Cart Management</strong>: Add, remove, and update items in the cart with real-time updates and persistent state.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>API Integration</strong>: Dynamic data fetching from RESTful API and real-time synchronization of product data.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Product Management</strong>: Product categories and sorting options for enhanced user experience.</li>
                </ul>
            </section>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-baseColor mb-4'>Challenges Faced</h2>
                <ul className=' list-inside text-lg text-baseWhite list-none'>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>State Management</strong>: Implementing Redux for global state management was a complex task.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>API Integration</strong>: Handling asynchronous data fetching and error management required careful implementation.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Responsive Design</strong>: Ensuring consistency across various devices involved extensive testing.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Performance Optimization</strong>: Optimizing load times and performance was crucial for a smooth user experience.</li>
                </ul>
            </section>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-baseColor mb-4'>Learning Outcomes</h2>
                <ul className=' list-inside text-lg text-baseWhite list-none'>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Advanced React.js Skills</strong>: Gained proficiency in building complex components and managing state.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>API Integration</strong>: Developed hands-on experience with RESTful APIs.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Responsive Design</strong>: Enhanced understanding of responsive web design principles.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Performance Optimization</strong>: Learned techniques for improving front-end performance.</li>
                </ul>
            </section>

            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-baseColor mb-4'>Future Enhancements</h2>
                <ul className=' list-inside text-lg text-baseWhite list-none'>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Enhanced Features</strong>: User authentication, personalized shopping, and advanced product recommendations.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>UI/UX Improvements</strong>: Interactive elements and refinements based on user feedback.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Performance and Scalability</strong>: Improvements to handle increased traffic and data loads.</li>
                    <li className='md:text-[1.3vw] text-baseGray'><strong className='text-baseWhite'>Additional Functionality</strong>: Integration of additional payment options and product reviews.</li>
                </ul>
            </section>

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
