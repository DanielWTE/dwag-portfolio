import {FaTwitter} from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
    return (
        <footer>
        <div className="bg-gray-900 p-3 bottom-0 inset-x-0 absolute">
            <div className="p-5">
                <ul className="text-center">
                    <p className="text-slate-200 font-bold text-3x1 pb-2">
                        by <span className="text-blue-400">dwag</span>
                    </p>
                    <div className="text-indigo-200 font-bold text-xs">
                        <Link href="/imprint">
                            <a>Imprint</a>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
        </footer>
    );
};

export default Footer;