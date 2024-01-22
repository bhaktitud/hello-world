"use client"

import Image from "next/image";
import ProfileImage from '../public/profile.png'
import Github from '../public/git.svg'
import Email from '../public/email.svg'
import Instagram from '../public/instagram.svg'
import ManIcon from '../public/man-icon.svg'

import Typical from 'react-typical'

export default function Home() {
  return (
    <main className="border border-gray-200">
        <div className="flex flex-col px-96 py-24 rounded-xl self-center">
          <div className="flex flex-row divide-y divide-y-reverse">
            <div className="flex-initial">
              <div className="bg-blue-500 w-64 h-64 rounded-full">
                <Image src={ProfileImage} alt="Picture of the author" className="rounded-full shadow-2xl" />
              </div>
            </div>
            <div className="flex-initial ml-6">
            <Typical
              steps={['Hello', 1000, 'Hello world!', 1000, `I'm Bhakti from Panorama ID`, 2000]}
              loop={1}
              wrapper="p"
              className="font-mono text-2xl"
            />
              <div className="flex flex-row space-x-2 items-center">
                <Image priority src={ManIcon} alt="man icon source" width={18} height={18} />
                <p className="font-mono text-lg capitalize">tech enthusiast</p>
              </div>
              <div className="flex flex-row space-x-2 mt-4">
                <Image priority src={Github} alt="git source" width={16} height={16} />
                <Image priority src={Email} alt="email source" width={16} height={16} />
                <Image priority src={Instagram} alt="ig source" width={16} height={16} />
              </div>
              <div className="mt-4">
                <p className="font-mono text-sm italic">
                  {'"I am an organised, efficient and hard working person, and am willing to discover and accept new ideas which can be put into practice effectively. I am a good listener and learner, able to communicate well with a group and on an individual level. I am able to motivate and direct my talents and skills to meet objectives."'}
                </p>
              </div>
              <div className="mt-4">
                <p className="font-mono text-sm">
                  {'- copyright 2024'}
                </p>
              </div>
            </div>
          </div>
          <div className="my-32 flex flex-row lg:text-left divide-y divide-y-reverse">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="flex-auto group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
              Academics{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50 font-mono`}>
              A roadmap of my academic background, start from the ground to the end of my academic level.
            </p>
          </a>



          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="flex-auto group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
              Showcase{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50 font-mono`}>
              Explore my successfully projects, from zero to hero...
            </p>
          </a>
          </div>

          <div className="px-5">
            <h2 className={`mb-4 text-2xl font-semibold capitalize font-mono`}>testimonials</h2>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-start-2 row-span-2 bg-slate-100 shadow-2xl rounded-3xl px-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <figure className="mt-10">
                <blockquote className="text-center text-sm  leading-8 text-gray-500 font-mono">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Judith Black</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 text-sm">CEO of Workcation</div>
                  </div>
                </figcaption>
              </figure>
              </div>
              <div className="row-end-3 row-span-2 bg-slate-100 shadow-2xl rounded-3xl px-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <figure className="mt-10">
                <blockquote className="text-center text-sm  leading-8 text-gray-500 font-mono">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Arnold Theodore</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 text-sm">UI/UX Designer at Microsoft</div>
                  </div>
                </figcaption>
              </figure>
              </div>
              <div className="row-start-1 row-end-4 bg-slate-100 shadow-2xl rounded-3xl px-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <figure className="mt-10">
                <blockquote className="text-center text-sm leading-8 text-gray-500 font-mono">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Atta Halilintar</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 text-sm">Public Figure</div>
                  </div>
                </figcaption>
              </figure>
              </div>

            </div>

            <div className="gap-y-8 mt-4 grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-start-2 row-span-2 bg-slate-100 shadow-2xl rounded-3xl px-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <figure className="mt-10">
                <blockquote className="text-center text-sm  leading-8 text-gray-500 font-mono">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Arif Widagdo</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 text-sm">Backend Dev. of Panorama Aplikasi Nusantara</div>
                  </div>
                </figcaption>
              </figure>
              </div>

              <div className="row-end-3 row-span-2 bg-slate-100 shadow-2xl rounded-3xl px-8 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <figure className="mt-10">
                <blockquote className="text-center text-sm  leading-8 text-gray-500 font-mono">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Fadhilah Choirul</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 text-sm">Kepala Cabang at CIMB Niaga</div>
                  </div>
                </figcaption>
              </figure>
              </div>


            </div>
          </div>
        </div>
    </main>
  );
}
