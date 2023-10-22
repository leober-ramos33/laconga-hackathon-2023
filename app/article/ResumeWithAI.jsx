"use client";

import React, { useEffect, useState } from "react";

export default function ResumeWithAI({ pdf }) {
    // Build a resume of the PDF wih AI.
    const [resume, setResume] = useState(null);
    const [resumeIsLoading, setResumeIsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/resume-with-ai?pdf=" + pdf)
            .then((res) => res.json())
            .then((data) => {
                setResume(data);
                setResumeIsLoading(false);
            });
    }, []);

    return (
        <div className="pt-8 border-t border-gray-300 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <h2 className="text-xl font-bold tracking-wider text-center font-poppins lg:text-left">
                Resumen con IA ✨
            </h2>

            {resumeIsLoading && (
                <div className="mt-8 animate-pulse">
                    <div className="h-2 rounded bg-slate-200"></div>
                    <div className="h-2 mt-2 rounded bg-slate-200"></div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <div className="h-2 rounded bg-slate-200"></div>
                        <div className="h-2 rounded bg-slate-200"></div>
                    </div>
                    <div className="h-2 mt-2 rounded bg-slate-200"></div>
                    <div className="h-2 mt-2 rounded bg-slate-200"></div>
                </div>
            )}

            {!resumeIsLoading && (
                <p className="mt-8 text-xs text-gray-600 sm:text-sm">
                    {resume.text}
                </p>
            )}
        </div>
    );
}
