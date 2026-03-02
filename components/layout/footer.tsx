import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-24 pb-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Column 1: Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white shadow-lg shadow-blue-600/20 ring-1 ring-slate-700 group-hover:ring-[#0055eb] transition-all">
                                <Image
                                    src="/logo.png"
                                    alt="Devki Nandan & Sons logo"
                                    fill
                                    className="object-contain p-1.5"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
                                    Devki Nandan
                                </span>
                                <span className="text-[10px] font-bold text-[#0055eb] uppercase tracking-[0.2em]">
                                    & Sons Electrical
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Your trusted partner for premium lighting, wiring, and electrical solutions from authorized brands.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#0055eb] shrink-0" />
                                <span className="text-sm">
                                    Main Bazaar, Rampur Bushahr, Himachal Pradesh 172001
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#0055eb] shrink-0" />
                                <span className="text-sm">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[#0055eb] shrink-0" />
                                <span className="text-sm">hello@devkinandanandsons.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Products", href: "/shop" },
                                { label: "Brands", href: "/shop#brands" },
                                { label: "Offers", href: "/shop#offers" },
                                { label: "Contact", href: "#contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm hover:text-white transition-colors flex items-center group">
                                        <ChevronRight className="h-3 w-3 mr-2 text-[#0055eb] opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Customer Service */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8">Customer Service</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "My Account", href: "/account" },
                                { label: "Order History", href: "/orders" },
                                { label: "Wishlist", href: "/wishlist" },
                                { label: "Shipping Policy", href: "/policies/shipping" },
                                { label: "Terms & Conditions", href: "/policies/terms" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm hover:text-white transition-colors flex items-center group">
                                        <ChevronRight className="h-3 w-3 mr-2 text-[#0055eb] opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8">Company</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Our Legacy", href: "/#legacy" },
                                { label: "Contact & Directions", href: "#contact" },
                                { label: "Privacy Policy", href: "/policies/privacy" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm hover:text:white transition-colors flex items-center group"
                                    >
                                        <ChevronRight className="h-3 w-3 mr-2 text-[#0055eb] opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Devki Nandan & Sons. All rights reserved.
                    </p>
                    <div className="flex gap-3 md:gap-6">
                        <Link
                            href="https://facebook.com/devkinandanandsons"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 border border-slate-900 rounded-lg hover:bg-[#0055eb] hover:border-[#0055eb] hover:text-white transition-all"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://twitter.com/devkinandan_s"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 border border-slate-900 rounded-lg hover:bg-[#0055eb] hover:border-[#0055eb] hover:text-white transition-all"
                        >
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://instagram.com/devkinandanandsons"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 border border-slate-900 rounded-lg hover:bg-[#0055eb] hover:border-[#0055eb] hover:text-white transition-all"
                        >
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/company/devkinandanandsons"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 border border-slate-900 rounded-lg hover:bg-[#0055eb] hover:border-[#0055eb] hover:text-white transition-all"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
