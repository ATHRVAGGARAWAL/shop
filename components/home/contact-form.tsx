"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log("Form submitted:", formData)
        alert("Thank you for your inquiry! We'll get back to you soon.")
        setFormData({ name: "", email: "", phone: "", message: "" })
    }

    const handleWhatsApp = () => {
        const message = "Hi, I'd like to inquire about your electrical products."
        const phone = "919418000309" // Correct WhatsApp number
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
    }

    return (
        <Section id="contact" className="bg-slate-50">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-industrial-blue mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-600">
                        Have a project in mind? Request a quote or reach out to our team.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-industrial-blue mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-safety-yellow rounded-lg shrink-0">
                                        <MapPin className="h-5 w-5 text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-industrial-blue mb-1">Address</h4>
                                        <p className="text-slate-600">
                                            Main Market, Rampur Bushahr,
                                            <br />
                                            Himachal Pradesh - 172001, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-safety-yellow rounded-lg shrink-0">
                                        <Phone className="h-5 w-5 text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-industrial-blue mb-1">Phone</h4>
                                        <p className="text-slate-600">+91 94180 00309</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-safety-yellow rounded-lg shrink-0">
                                        <Mail className="h-5 w-5 text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-industrial-blue mb-1">Email</h4>
                                        <p className="text-slate-600">puneet@devkinandanandsons.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={handleWhatsApp}
                            className="w-full bg-green-600 hover:bg-green-700 text-white h-11 px-8"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Chat on WhatsApp
                        </Button>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-safety-yellow focus:border-transparent outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-safety-yellow focus:border-transparent outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-safety-yellow focus:border-transparent outline-none transition-all"
                                    placeholder="+91 94180 00309"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-safety-yellow focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us about your project requirements..."
                                />
                            </div>

                            <Button type="submit" className="w-full h-11 px-8">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
