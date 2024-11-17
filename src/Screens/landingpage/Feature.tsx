"use client";

import Image from "next/image";

function Feature({ title, icon, description }: any) {
	return (
		<div className="flex flex-col items-start gap-4">
			<div className="h-10 w-10 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-guardText">
				<Image
					src={icon}
					height={30}
					width={30}
					alt="blockchain"
				/>
			</div>
			<h5 className="font-meedium text-guardText">{title}</h5>

			<p className="text-base text-guardText">{description}</p>
		</div>
	);
}

export default Feature;
