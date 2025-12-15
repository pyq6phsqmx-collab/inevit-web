"use client";

import { motion } from "framer-motion";
import { User, Lightbulb } from "lucide-react";

export default function FounderStory() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Founder Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-white/10">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold">The Founder</h2>
                        </div>
                        <div className="space-y-6 text-gray-400 leading-relaxed">
                            <p>
                                I am a 23-year-old first-generation college graduate with a Bachelor's degree in Psychology, a member of the International Honor Society of Psychology, and the founder of InEvit.
                            </p>
                            <p>
                                I have professional experience as a mental health counselor working with individuals with chronic mental illness and substance use disorders, over a year as a behavioral assistant working with children, and clinical experience as a patient care technician in the leukemia unit at the #1 hospital in the NJ/NY metro area.
                            </p>
                            <blockquote className="border-l-4 border-sky-blue pl-6 py-2 text-white text-lg font-medium">
                                "Being face-to-face with life, death, and financial stress at its most extreme shaped how and why I built this company."
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* The Insight */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-yellow-500/10">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h2 className="text-3xl font-bold">The Insight</h2>
                        </div>
                        <div className="space-y-6 text-gray-400 leading-relaxed">
                            <p>
                                Facebook wasn't the first social network. Google wasn't the first search engine. Tesla wasn't the first electric car company. Most breakthroughs aren't about being first—they're about seeing the full picture and executing a better vision.
                            </p>
                            <p>
                                I am not the first company to show accounts in one dashboard. I am not the first to include finance-impacting news. I am not the first to use AI in finance.
                            </p>
                            <p className="text-white font-semibold">
                                But I am the first to unify all of it into a true financial operating system, built around an intelligent, customizable AI that understands a user's entire financial life.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
