import React from 'react';

const Skills = () => (
  <div className="py-4">
    <h3 className="font-bold text-4xl text-indigo-600 border-b inline-block border-dashed border-gray-500">
      Skills
    </h3>
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="w-full bg-indigo-transparent p-5 my-2 flex flex-col mt-10 rounded shadow-lg lg:w-6/13">
        <div className="bg-indigo-500 w-16 h-16 p-4 rounded-full -mt-12 mx-auto">
          <svg
            viewBox="0 0 64 64"
            className="fill-current text-gray-100 h-8 w-8"
          >
            <path d="M39.0732994,41.3769989C39.2314987,41.7645988,39.6054993,42,40,42c0.1259995,0,0.2528992-0.0233994,0.3769989-0.0732002 l12-4.8790016C52.7509995,36.8955002,52.9960976,36.5331993,53,36.1299019 c0.0038986-0.4043007-0.2362785-0.7705002-0.607399-0.9287033l-12-5.1210995 c-0.5038795-0.2148991-1.0956993,0.0185013-1.3125,0.5273018c-0.2168007,0.5077991,0.0194969,1.0956993,0.527298,1.3125 l9.7919998,4.1786976l-9.7762985,3.9746017C39.1113014,40.2812004,38.8652,40.8652,39.0732994,41.3769989z" />
            <path d="M13.6231003,37.0477982l12,4.8790016C25.7471008,41.9766006,25.8740005,42,26,42 c0.3945007,0,0.7686005-0.2354012,0.9267998-0.6230011c0.2080002-0.5117989-0.0380783-1.0957985-0.549799-1.3037987 l-9.7763996-3.9746017l9.7919998-4.1786976c0.5077991-0.2168007,0.7441196-0.8047009,0.5272999-1.3125 c-0.217701-0.5088005-0.8095016-0.7431011-1.3125-0.5273018l-12,5.1210995 c-0.3711004,0.1582031-0.6113005,0.5244026-0.6073999,0.9287033 C13.0039005,36.5331993,13.2490005,36.8955002,13.6231003,37.0477982z" />
            <path d="M28.5937996,45.9141006C28.7255993,45.9726982,28.8633003,46,28.9990005,46 c0.3837986,0,0.7490997-0.2216988,0.9151001-0.5937996l8-18c0.2236214-0.5048008-0.0030022-1.0957012-0.5078011-1.3203011 c-0.5038986-0.2235985-1.094799,0.0049-1.3204002,0.5078011l-8,18 C27.8623009,45.0985985,28.0888996,45.6894989,28.5937996,45.9141006z" />
            <path d="M60,5h-56C1.7908008,5,0.0000008,6.7908001,0.0000008,9v5v2v39c0,2.2090988,1.7908,4,3.9999998,4h56 c2.209198,0,4-1.7909012,4-4V16v-2V9C64,6.7908001,62.209198,5,60,5z M62,55c0,1.1027985-0.8972015,2-2,2h-56 c-1.1027997,0-1.9999998-0.8972015-1.9999998-2V16h60V55z M62,14h-60V9c0-1.1027999,0.8972001-2,1.9999998-2h56 c1.1027985,0,2,0.8972001,2,2V14z" />
            <path d="M6.0000005,9c-0.9649997,0-1.75,0.7849998-1.75,1.75c0,0.9649,0.7850003,1.75,1.75,1.75s1.75-0.7851,1.75-1.75 C7.7500005,9.7849998,6.9650006,9,6.0000005,9z M6.0000005,11.5c-0.4141998,0-0.75-0.3358002-0.75-0.75s0.3358002-0.75,0.75-0.75 c0.4142003,0,0.75,0.3358002,0.75,0.75S6.4142008,11.5,6.0000005,11.5z" />
            <path d="M16,9c-0.9649992,0-1.75,0.7849998-1.75,1.75c0,0.9649,0.7850008,1.75,1.75,1.75s1.75-0.7851,1.75-1.75 C17.75,9.7849998,16.9650002,9,16,9z M16,11.5c-0.4141998,0-0.75-0.3358002-0.75-0.75S15.5858002,10,16,10 s0.75,0.3358002,0.75,0.75S16.4141998,11.5,16,11.5z" />
            <path d="M11.000001,9c-0.9650002,0-1.75,0.7849998-1.75,1.75c0,0.9649,0.7849998,1.75,1.75,1.75s1.75-0.7851,1.75-1.75 C12.750001,9.7849998,11.9650002,9,11.000001,9z M11.000001,11.5c-0.4142008,0-0.75-0.3358002-0.75-0.75s0.3357992-0.75,0.75-0.75 c0.4141998,0,0.75,0.3358002,0.75,0.75S11.4142008,11.5,11.000001,11.5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-center mt-3 mb-5 text-lg">Frontend</h3>
          <ul className="list-disc px-10 text-lg">
            <li>React/Redux</li>
            <li>GatsbyJS</li>
            <li>Javascript</li>
            <li>Webpack</li>
            <li>HTML/CSS/SASS</li>
            <li>TailwindCSS/Bootstrap</li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-indigo-transparent p-5 my-2 flex flex-col mt-10 rounded shadow-lg lg:w-6/13">
        <div className="bg-indigo-500 w-16 h-16 p-4 rounded-full -mt-12 mx-auto">
          <svg
            viewBox="0 0 46.081 46.081"
            className="fill-current text-gray-100 h-8 w-8"
          >
            <path d="M45.266,9.37c0-5.254-9.763-9.37-22.227-9.37C10.578,0,0.815,4.116,0.815,9.37v5.319c0,5.253,9.762,9.368,22.223,9.368 c12.464,0,22.227-4.115,22.227-9.368V9.37z M44.016,14.688c0,4.4-9.606,8.118-20.977,8.118c-11.368,0-20.973-3.718-20.973-8.118 V9.369c0-4.401,9.604-8.12,20.973-8.12c11.371,0,20.977,3.718,20.977,8.12V14.688z" />
            <path d="M45.266,20.03c0-0.345-0.28-0.625-0.625-0.625s-0.625,0.28-0.625,0.625c0,4.402-9.606,8.119-20.977,8.119 c-11.368,0-20.973-3.717-20.973-8.119c0-0.345-0.28-0.625-0.625-0.625s-0.625,0.28-0.625,0.625v5.32 c0,5.252,9.762,9.367,22.223,9.367c12.464,0,22.227-4.115,22.227-9.367V20.03z M44.016,25.35c0,4.399-9.606,8.117-20.977,8.117 c-11.368,0-20.973-3.718-20.973-8.117v-2.147c3.062,3.719,11.399,6.196,20.973,6.196c9.575,0,17.914-2.477,20.977-6.196V25.35z" />
            <path d="M44.016,31.395c0,4.401-9.606,8.119-20.977,8.119c-11.368,0-20.973-3.718-20.973-8.119c0-0.345-0.28-0.625-0.625-0.625 s-0.625,0.28-0.625,0.625v5.319c0,5.252,9.762,9.367,22.223,9.367c12.464,0,22.227-4.114,22.227-9.367v-5.319 c0-0.345-0.28-0.625-0.625-0.625S44.016,31.05,44.016,31.395z M44.016,36.714c0,4.399-9.606,8.117-20.977,8.117 c-11.368,0-20.973-3.718-20.973-8.117v-2.147c3.062,3.72,11.399,6.197,20.973,6.197c9.575,0,17.914-2.478,20.977-6.197V36.714z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-center mt-3 mb-5 text-lg">Backend</h3>
          <ul className="list-disc px-10 text-lg">
            <li>Ruby/Rails</li>
            <li>TDD</li>
            <li>RSpec/Capybara</li>
            <li>REST API</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
