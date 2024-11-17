"use client";
import React from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const WalletItem = () => {
	return (
		<div className="py-4 flex w-full justify-between border-b">
			<div className="flex space-x-3">
				<Image
					src="/images/wallet.svg"
					alt="wallet"
					width={48}
					height={48}
				/>
				<div>
					<h3 className="font-semibold">Wallet Name</h3>
					<p className="text-[#535862] text-sm">Wallet description</p>
				</div>
			</div>

			<div className="flex items-center space-x-2">
				<Label htmlFor="learn-more">Learn More</Label>
				<Switch id="learn-more" />
			</div>
		</div>
	);
};

export default WalletItem;
