"use client";

import React from "react";
import Image from "next/image";

const PlatformFeature = ({ icon, title, description }: any) => {
	return (
		<div className="flex flex-col item-center gap-4 text-white text-center w-full">
			<div className="self-center h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-full border-4 lg:border-8 border-guardText">
				<Image
					src={icon}
					height={30}
					width={30}
					alt="blockchain"
				/>
			</div>
			<h5 className="font-medium text-lg">{title}</h5>
			<p className="">{description}</p>
		</div>
	);
};

export default PlatformFeature;
