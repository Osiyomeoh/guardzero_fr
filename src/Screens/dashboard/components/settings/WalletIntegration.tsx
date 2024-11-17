"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

import { Search } from "lucide-react";
import WalletItem from "./WalletItem";

const WalletIntegration = () => {
	return (
		<div>
			<div className="flex flex-col lg:flex-row lg:items-center w-full justify-between border-b py-5">
				<div className="space-y-2">
					<h3 className="font-semibold">Wallet Integration</h3>
				</div>

				<div>
					<Input
						className="mt-4 rounded-lg border-[#D5D7DA] "
						leftIcon={<Search color="#717680" />}
						placeholder="Search"
						rightIcon={
							<Button
								variant={"outline"}
								className="bg-white text-border2 text-sm border border-border px-2 py-[1px] placeholder:text-[#717680]">
								⌘ K
							</Button>
						}
					/>
				</div>
			</div>

			<WalletItem />
			<WalletItem />
			<WalletItem />
			<WalletItem />
			<WalletItem />
		</div>
	);
};

export default WalletIntegration;
