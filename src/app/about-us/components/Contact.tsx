import Image from 'next/image';

const Contact = () => (
    <div className="relative flex flex-col items-center justify-center bg-[#050300]">
        <Image
            src="/ellipse.png"
            alt="Ellipse Decoration"
            width={476}
            height={287}
            className="absolute bottom-8 right-0 z-0 pointer-events-none opacity-20"
        />
        <Image
            src="/contact.svg"
            alt="Contact"
            width={1000}
            height={300}
            style={{ width: '100%', height: 'auto' }}
        />
    </div>
);

export default Contact;