import Image from 'next/image';

const Footer = () => (
    <footer className="bg-[#050300] border-t-[3px] border-[#DFE00D] gap-[25px] py-8 text-center">
        <h2 className="text-[30px]/[29.4px] text-[#fff] font-semibold mb-6 font-stylistic-alternates">
            Contact Us
        </h2>
        <div className="flex justify-center gap-[50px]">
            <div className="flex items-center gap-2">
                <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
                <span className="text-[18px]/[17.64px] font-semibold text-[#FFF]">
                    Instagram
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/linkedin.svg" alt="LinkedIn" width={18} height={18} />
                <span className="text-[18px]/[17.64px] font-semibold text-[#FFF]">
                    Linkedin
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/tiktok.svg" alt="TikTok" width={18} height={18} />
                <span className="text-[18px]/[17.64px] font-semibold text-[#FFF]">
                    TikTok
                </span>
            </div>
        </div>
        <div className="text-[#FFF] font-semibold w-[190px] h-[16px] text-[12px]/[11.76px] text-center mt-[25px] mx-auto">
            Copyright ©2025 MnMs’ Week
        </div>
    </footer>
);

export default Footer;