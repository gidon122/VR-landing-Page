import { features } from "../Constants";

const FeatureSection = () => {
    return ( 
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-rose-500 rounded-full h-6 text-sm font-medium px-2 py-1 upppercase">
                    Feature
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Ealily Build
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                        {" "}VR Apps
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div className="w-full sm:1/2 lg:w-1/3" key={index}>
                        <div className="flex flex-col items-center p-6">
                            <div className="bg-neutral-900 rounded-full p-4 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-neutral-100 text-center">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection;