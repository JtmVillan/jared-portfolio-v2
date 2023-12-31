// 'use client'
// import gsap from "gsap";
// import { useEffect, useRef } from "react";
// export const Cursor = () => {
//     useEffect(() => {
//         const cursor = document.getElementById('custom-cursor');
//         const links = document.querySelectorAll('a');
//         const buttons = document.querySelectorAll('button');
//         const cursorText = document.querySelector('.cursor-text');
    
//         const onMouseMove = (event: any) => {
//             const {clientX, clientY} = event;
//             gsap.set(cursor, {x:clientX, y:clientY})
//         }

//         const onMouseEnterLink = (event: any) => {
//             const link = event.target
//             if(link.classList.contains('view')){
//                 gsap.set(cursor,{scale:4})
//                 cursorText.style.display = "block"
//             }else {
//                 gsap.set(cursor,{scale:4})
//             }
//         }
//         const onMouseLeaveLink = () => {
//             gsap.set(cursor,{scale:1})
//             cursorText.style.display="none"
//         }

//         const onMouseEnterBtn = (event: any) => {
//             const buttons = event.target
//             if(buttons.classList.contains('view')){
//                 gsap.set(cursor,{scale:4})
//                 cursorText.style.display = "block"
//             }else {
//                 gsap.set(cursor,{scale:4})
//             }
//         }
//         const onMouseLeaveBtn = () => {
//             gsap.set(cursor,{scale:1})
//             cursorText.style.display="none"
//         }
    
//         document.addEventListener('mousemove', onMouseMove)
//         links.forEach((link) => {
//             link.addEventListener('mouseenter', onMouseEnterLink);
//             link.addEventListener('mouseleave', onMouseLeaveLink);
//         }) 
//         buttons.forEach((button) => {
//             button.addEventListener('mouseenter', onMouseEnterBtn);
//             button.addEventListener('mouseleave', onMouseLeaveBtn);
//         }) 
//     })
   
//     return (
//         <div id="custom-cursor" className="custom-cursor">
//             <span className="cursor-text">View</span>                        
//         </div>
        
//     )
// }