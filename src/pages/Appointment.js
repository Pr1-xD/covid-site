import React from 'react';
import Nav from '../components/Nav'

function Appointment(props) {
    return (
        <div>   
            <Nav/>
            

                 <section class="text-gray-700 body-font">
                    <div class="container flex flex-col px-5 py-20 mx-auto lg:items-center">
                        <div class="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                            <h1 class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font">
                                A medium length headline.
                            </h1>
                            <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">Whatever cardigan
                                tote bag tumblr hexagon brooklyn
                                asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of
                                them man
                                bun deep.</p>
                        </div>
                        <div class="flex flex-col w-full px-0 mx-auto lg:w-2/3 sm:flex-row md:px-8">
                            <input
                                class="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform bg-gray-200 rounded-lg focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                                placeholder="Your Name" type="text"/>
                            <input
                                class="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform bg-gray-200 rounded-lg focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                                placeholder="Your Email" type="email"/>
                            <button
                                class="w-1/2 px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Sign
                                Up</button>
                        </div>
                        <p class="w-full mt-12 mb-8 text-sm text-gray-500 lg:text-center">Neutra shabby chic ramps, viral
                            fixie. <a href="#"
                                class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                                Learn More
                                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                                    height="20" fill="currentColor">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                </svg>
                            </a></p>
                            </div>
                </section>
                
        </div>
    );
}

export default Appointment;