import Image from 'next/image';
import data from '../data/Features.json';

const Features = () => {
    return (
        <section className="features">
            <div className="container-features">
                <div className="content-features">
                    {data.blocks.map(feature =>
                        <div className="item" key={feature.id}>
                            <div className="left-side">
                                <Image src={feature.image} alt="Mockup" width={550} height={350} />
                            </div>
                            <div className="right-side">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <button>Learn more</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Features;