
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-wayne-black text-white pt-20 pb-10 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Column 1 */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 border-b border-wayne-border pb-4 inline-block text-wayne-teal">Know Wayne</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-wayne-teal transition-colors">About Us</Link></li>
                            <li><Link to="/story" className="hover:text-wayne-teal transition-colors">About Wayne Watch Store</Link></li>
                            <li><Link to="/corporate" className="hover:text-wayne-teal transition-colors">Bulk Purchase & Corporate Gifts</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 border-b border-wayne-border pb-4 inline-block text-wayne-teal">Terms & Conditions</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/policies" className="hover:text-wayne-teal transition-colors">Shipping & Return Policies</Link></li>
                            <li><Link to="/privacy" className="hover:text-wayne-teal transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/faq" className="hover:text-wayne-teal transition-colors">FAQ's</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 border-b border-wayne-border pb-4 inline-block text-wayne-teal">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <span className="text-gray-500">For Sale:</span>
                                <a href="mailto:Waynewatch@co.in" className="ml-2 hover:text-wayne-teal">Waynewatch@co.in</a>
                            </li>
                            <li>
                                <span className="text-gray-500">Call:</span>
                                <a href="tel:+919876543210" className="ml-2 hover:text-wayne-teal">+91 9876543210</a>
                            </li>
                            <li>
                                <span className="text-gray-500">For Complaints:</span>
                                <a href="tel:18002022022" className="ml-2 hover:text-wayne-teal">1800 202 2022</a>
                            </li>
                            <li className="text-xs text-wayne-teal leading-relaxed mt-4">
                                Chat Time: Our Team is Available From Monday to Saturday from 9:00AM to 8:00PM
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 border-b border-wayne-border pb-4 inline-block text-wayne-teal">Follow Us</h4>
                        <div className="flex space-x-6 text-wayne-teal">
                            <a href="#" className="hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-wayne-border text-center">
                    <p className="text-[10px] uppercase tracking-widest text-wayne-teal">
                        2026 @ Wayne-WatchStore. Designed By MuthuRaman
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
