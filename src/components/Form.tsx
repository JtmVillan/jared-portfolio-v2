"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Form = () => {
    const [state, handleSubmit] = useForm("mpzggoay");
        if (state.succeeded) {
            return <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Message sent!</span>
          </div>;
        }

    return (
        <form onSubmit={handleSubmit} className="my-4" action="https://formspree.io/f/mpzggoay" method="POST">
            <div className="mb-4">
                <input id="name" type="text" name="name" 
                className="form-text-input" required minLength={2} maxLength={200} placeholder='Name'/>
            </div>
            <div className="mb-4">
                <input id="email" type="email" name="email" 
                className="form-text-input" required minLength={2} maxLength={200} placeholder='Email'/>
            </div>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <div className="mb-4">
                <textarea name="message" id="message" className="form-text-area"
                required minLength={10} maxLength={1000} placeholder='Message'/>
            </div>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} 
                className="btn 
                btn-secondary
                hover:-translate-y-0.5 
                ease-in-out duration-500 
                hover:shadow-lg 
                hover:shadow-neutral-500/30"> Send Message </button>
        </form>
    )
};
