import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"

const SkillsComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='mb-10'>
                    {/* Design Tools */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Design Tools</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='flex h-20 items-center justify-between'>
                            {/* Figma */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/db639beaeee1c24ed7979a95becbfb0e8067e8e0526d7ce3a74dcb488e6d41fc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6669676d612d69636f6e2e737667" alt="" />
                            {/* Canva */}
                            <img className='h-10 cursor-pointer ' src="https://logos-world.net/wp-content/uploads/2020/02/Canva-Logo.png" alt="" />
                            {/* Wordpress */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/4629b90b2cfb38cc37a512b6b1fb6a8cb51d303cde9aebb07f91dc5e6c276033/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f776f726470726573732e706e67" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                        </div>
                    </div>
                    {/* Frontend */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Frontend Technologies</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='h-40'>
                            {/* 1st Row */}
                            <div className='flex h-20 items-center justify-between'>
                                {/* HTML */}
                                <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/bfa71fe5e1eb3ca57a7e4ef9c6b2ca21414c4fdab27ac6861e211e7cfe8f7d9f/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f68746d6c352d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                                {/* CSS */}
                                <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/1f14c9c472b21cf8790a4fb6914be3a3181e957ecc2b397775f06a989d20cb37/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f637373332d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                                {/* Bootstrap */}
                                <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/3523bd4e344ec5909336e3891b7511da62905e8953381f6fa69c11983e8fd9f6/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f626f6f7473747261702d706c61696e2e737667" alt="" />
                                {/* Tailwind */}
                                <img className='h-10 cursor-pointer ' src="https://camo.githubusercontent.com/b8b2313d935df145f0f41f6f7169748c37cf6a2a993c40e4a1e7f2f31fbc73df/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f7461696c77696e646373732e737667" alt="" />
                                {/* SaaS */}
                                <img className='h-10 cursor-pointer ' src="https://camo.githubusercontent.com/34be724565315ff2235ad3237bb21f3db805f559e94b878ce7cd722e4e358cac/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f736173732d6f726967696e616c2e737667" alt="" />
                            </div>
                            {/* 2nd Row */}
                            <div className='flex h-20 items-center justify-between'>
                                {/* Javascript */}
                                <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
                                {/* Typescript */}
                                <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/94890eb1b8c3ce19ea73189dade730fa967a8fe08899f25cab17b57a5d4339dc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667" alt="" />
                                {/* ReactJS */}
                                <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/518977ed5e52020624daf41cf644046368af610f19a7b1220dd1d58377d08288/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656163742d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                                {/* React Router */}
                                <img className='h-10 cursor-pointer' src="https://www.svgrepo.com/show/354262/react-router.svg" alt="" />
                                {/* React Redux */}
                                <img className='h-10 cursor-pointer' src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Backend */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Backend Technologies</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='flex h-20 items-center justify-between'>
                            {/* NodeJS */}
                            <img className='h-10 cursor-pointer' src="https://nodejs.org/static/images/logo.svg" alt="" />
                            {/* ExpressJS */}
                            <img className='h-10 cursor-pointer' src="https://miro.medium.com/v2/resize:fit:930/1*6BK-wTevNsEN_kuUTvoACw.png" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                        </div>
                    </div>
                    {/* API */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>API Architecture</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='flex h-20 items-center justify-between'>
                            {/* REST */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/ffc5ecac62bf3664dca72414ef3c5f7622ac3f9bbddae262fe06b87d04e216d8/68747470733a2f2f692e696d6775722e636f6d2f6c64736c5043372e706e67" alt="" />
                            {/* GraphQL */}
                            <img className='h-10 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                        </div>
                    </div>
                    {/* Database */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Database</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='flex items-center h-20 justify-between'>
                            {/* MongoDB */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/e643754982a9dba595811285c08c4667f1062a17d9e7eca8dd16b43995bf372b/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6d6f6e676f64622d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                            {/* Mongoose */}
                            <img className='h-10 cursor-pointer' src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" alt="" />
                            {/* MySQL */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/ef8a5aaa11f861e3692439d030c83a18d6d5ebc387d6e74ca4bba728aaeac7ad/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6d7973716c2d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                            {/* PostGresSQL */}
                            <img className='h-10 cursor-pointer' src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                        </div>
                    </div>
                    {/* Version Control */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Version Control</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='flex items-center h-20 justify-between'>
                            {/* GitHub */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/b7ea09b0c030ae14623cfc3a52ab3ee0d07e0259a1b230139e65ba00454327c9/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6769742d73636d2d69636f6e2e737667" alt="" />
                            {/* Gitlab */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/6386100a1c3ba57e20dbfb04e59cb057d4210332eeafd510a5f77f4af1c604cb/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6769746c61622e737667" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                        </div>
                    </div>
                    {/* Deployment */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Deployment</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='flex items-center h-20 justify-between'>
                            {/* Vercel */}
                            <img className='h-10 cursor-pointer' src="https://pbs.twimg.com/media/F3BW7x3bwAATNkj.png:large" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                        </div>
                    </div>
                    {/* Cloud */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Cloud Technologies</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='h-20 flex items-center'>
                            {/* Google Cloud */}
                            <img className='h-10 cursor-pointer' src="https://camo.githubusercontent.com/61a6e2ce2c5ab3fc01c5e5bf5a6bba48ca5b573b3795cdb70330c5d42697ec68/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f676f6f676c655f636c6f75642d69636f6e2e737667" alt="" />
                        </div>
                    </div>
                    {/* Development Tools */}
                    <div className='h-auto mb-5'>
                        {/* Heading */}
                        <div className='flex items-center cursor-pointer'>
                            <span className='mr-3 text-base text-slate-400 tracking-wide'>Development Tools</span>
                            <span className='p-3'><AiOutlineArrowRight/></span>
                        </div>
                        {/* Skills */}
                        <div className='flex items-center h-20 justify-between'>
                            {/* Postman */}
                            <img className='h-10 cursor-pointer' src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="" />
                            {/* VS Code */}
                            <img className='h-10 cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADZklEQVR4AWKgCWjYL8DdcWq/8LTr99W2fJmvAeClrIHbiKIoevvKfZGssXZfua/SN06XxCAws9fM1IbkMJqZRmnMsGaX21eifl7u/KyVWcE3+84cSYv3/PdnNBEy8FhhuYHGNRt1q4LyRcmbiSlyKWJQ5HHKG9YEtSsC/4LkTSuBRxCpC+ajftUmoqhZpsC8EkhF7nQs6Ba5e3kIdSsSp5oCPgpMxdKSOxGzcNewuNApdVO9RIE5yZ2Mabnjyle9qF2WlFQtCryzwlVqQTxDVgYxcN3ULDUTSYcS8MxcU2DkohDDZyEi/N2Mq1LF8moWuFhyH1csCAVCueMs0gAMnnsxxGI3Vrpp8OUBtbqrKJ+34ZswcsZiooMCp5KaMxt9JwVwwpdloHIhiKoFcVFJks7ND6v7mZzfUdEB9J+OYoCFaaBIM7gS+GYtroovT8XCJSFUzPsQjyPwS+GUuo/BUOJkmCKSlrYdgWdW4J0WlPG7Yo7Mu6lUI89HQlSRBlyG4zaJpKXrgAIsKpkS+ClRPheHAqPOyJOS/TMqOuBKDyV6Waaj5o+gaEJNA/4Zls/6oEn2DxZpQFJ6jnzoORYtTRsCz7RNkXxckezvLNKApBRPFaJ8WdB5KOg+1mGjyzKuLfDtOgK+mWZ4pjjicUEJx9tBia5jhyOHYzedJ83QJIvFOhCPh+XcV4Ujofa6dY8lR1ooEoBpZaQU+BoRHWDA0iF4p8SFZ1LwapxQou0ghA6nLP7thudsShhJAl9YpIHlk0OqLBWlpGjMVHvdfmipLWknzndKOi1fksDn1CgBloSIJEIBGyUTBbgMR8yCINpY4sYtoI6Phi63JJNFOigw8ZxFkkAQLycMpEqbNYpW6395awJtDuaB2pLMTyzSADAsfIbiiRCKx1k+Noyr0mKZSiIdLaT5QFC9G8r8yCINiIcr1vyxJMekBIuSMB2alIBkfohowZ1i7psctaSkYV9QuSsGS+KMqm8XuHPMvefguJOo36PAjirVgXuJuZPPkYeIKBpJPSdQQYFAWIeNe4tpGWjat9HI4gZSxwmUb4vxPpwSlgeNQMgAc68SFLCVQO2uoMwReOcqDxpvQgV4sFRToo4SNf8EnrKcyJN3kcD9Fusn8XcCzNXnF/B33L0vN+f9BIXpuIMaAMJ1njN1ef7EAAAAAElFTkSuQmCC" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                            {/* Space */}
                            <img className='h-10 cursor-pointer' src="#" alt="" />
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default SkillsComponent
