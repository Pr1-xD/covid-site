import React, { useState } from 'react';
import Nav from '../components/Nav'
import axios from 'axios'


function Home() {
        const[evid,setEvid]=useState()
        var gapi = window.gapi
        let id;
        /* 
          Update with your own Client Id and Api key 
        */
        var CLIENT_ID = "795034839651-mtpdd4f1lk2e6tdaj736o4rbn2r6cl8a.apps.googleusercontent.com"
        var API_KEY = "AIzaSyCv6i6tz0cyUsb9fJhIhmHsSuuz4U3Zw_Y"
        var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
        var SCOPES = "https://www.googleapis.com/auth/calendar.events"
      
        const handleClick = () => {
            console.log('Clicked')
          gapi.load('client:auth2', () => {
            console.log('loaded client')
      
            gapi.client.init({
              apiKey: API_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: DISCOVERY_DOCS,
              scope: SCOPES,
            })
      
            gapi.client.load('calendar', 'v3', () => console.log('bam!'))
      
            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
              
              var event = {
                'summary': 'Awesome Event!',
                'location': '800 Howard St., San Francisco, CA 94103',
                'description': 'Really great refreshments',
                'start': {
                  'dateTime': '2021-06-28T09:00:00-07:00',
                  'timeZone': 'America/Los_Angeles'
                },
                'end': {
                  'dateTime': '2021-06-28T17:00:00-07:30',
                  'timeZone': 'America/Los_Angeles'
                },
                'recurrence': [
                  'RRULE:FREQ=DAILY;COUNT=2'
                ],
                'attendees': [
                  {'email': 'abhinav20016@gmail.com'},
                  {'email': 'sbrin@example.com'}
                ],
                'reminders': {
                  'useDefault': false,
                  'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10}
                  ]
                },
                "conferenceData": {
                    "createRequest": {
                      "conferenceSolutionKey": {
                        "type": "hangoutsMeet"
                      },
                      "requestId": "test"
                    }
                  }
              }
      
              var request = gapi.client.calendar.events.insert({
                "calendarId": "primary",
                "conferenceDataVersion": 1,
                "resource": {
                  "end": {
                    "date": "2021-6-25"
                  },
                  "start": {
                    "date": "2021-6-24"
                  },
                  "conferenceData": {
                    "createRequest": {
                      "conferenceSolutionKey": {
                        "type": "hangoutsMeet"
                      },
                      "requestId": "some-random-string"
                    }
                  },
                  "summary": "titles are cool"
                }
              })
      
              request.execute(event => {
                console.log(event)
                setEvid(event.id)
              })

              

              /*
                  Uncomment the following block to get events
              */
              /*
              // get events
              gapi.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime'
              }).then(response => {
                const events = response.result.items
                console.log('EVENTS: ', events)
              })
              */
          
      
            })
          })
        }
        function createMeet(){
          var eventPatch = {
            conferenceData: {
              createRequest: {requestId: "7qxalsvy0e"}
            }
          };
          
          gapi.client.calendar.events.patch({
            calendarId: "primary",
            eventId: "lmql17sbub62t47rvs2js4gf98",
            resource: eventPatch,
            sendNotifications: true,
            conferenceDataVersion: 1
          }).execute(function(event) {
            console.log(event.result.hangoutLink);

          });
          // gapi.client.calendar.events.list({
          //   'calendarId': 'primary',
          //   'timeMin': (new Date()).toISOString(),
          //   'showDeleted': false,
          //   'singleEvents': true,
          //   'maxResults': 10,
          //   'orderBy': 'startTime'
          // }).then(response => {
          //   const events = response.result.items
          //   console.log('EVENTS: ', events)
          // })
             
          // axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events/'+evid)
          // .then(response => {
          //   console.log(response);
          // });
           
        }
    return (
        <div>
           <Nav/>
           <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-bold tracking-tighter">One Stop COVID-19 Support</h1>
                <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                <div class="flex w-full md:justify-start justify-center items-end">
                    <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                    <label for="hero-field" class="leading-7 text-sm text-gray-600">Search for Resources</label>
                    <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
                </div>
                <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Example: Oxygen in Pune</p>
                <div class="flex lg:flex-row md:flex-col">
                    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span class="ml-4 flex items-start flex-col leading-none">
                        <span class="text-xs text-gray-600 mb-1">TRY OUR</span>
                        <span class="title-font font-medium">COVID Bot</span>
                    </span>
                    </button>
                    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <span class="ml-4 flex items-start flex-col leading-none">
                        <span class="text-xs text-gray-600 mb-1">BOOK AN</span>
                        <span class="title-font font-medium">E-Appointment</span>
                    </span>
                    </button>
                </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x900"/>
                </div>
            </div>
            </section>
            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>Start Event</button>
            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={createMeet}>Start Meet</button>
        </div>
    );
}

export default Home;