import Image from 'next/image';

const IICRoadmap = () => (
    <Image
        src="/IIC-Roadmap.png"
        unoptimized={true}
        alt="IIC Roadmap"
        width={1100}
        height={300}
        style={{ width: '100%', height: 'auto' }}
    />
);

export default IICRoadmap;