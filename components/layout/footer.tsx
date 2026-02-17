import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-industrial-blue text-slate-300 pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-14 h-14 bg-white rounded-lg p-2 shadow-lg transition-transform hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="Devki Nandan & Sons Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black leading-tight text-white tracking-tight">
                                    DEVKI NANDAN
                                </span>
                                <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                                    AND SONS
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Your trusted partner for high-quality electrical goods. Serving residential, commercial, and industrial sectors with reliability and expertise for over 20 years.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-safety-yellow transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-safety-yellow transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-safety-yellow transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="hover:text-safety-yellow transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "#about" },
                                { name: "Products", href: "#products" },
                                { name: "Industries", href: "#industries" },
                                { name: "Contact Us", href: "#contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-safety-yellow transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Products</h3>
                        <ul className="space-y-3">
                            {[
                                "Wires & Cables",
                                "Switches & Accessories",
                                "Conduits & Pipes",
                                "Lighting Solutions",
                                "Switchgears",
                                "Industrial Fittings",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#products"
                                        className="text-sm hover:text-safety-yellow transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-safety-yellow shrink-0 mt-0.5" />
                                <span className="text-sm">
                                    Main Market,
                                    <br />
                                    Rampur Bushahr,
                                    <br />
                                    Himachal Pradesh - 172001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-safety-yellow shrink-0" />
                                <span className="text-sm">+91 94180 00309</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-safety-yellow shrink-0" />
                                <span className="text-sm">puneet@devkinandanandsons.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Devki Nandan And Sons. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-slate-500 hover:text-slate-300">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-xs text-slate-500 hover:text-slate-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
