import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Image
            src={"/images/menu-01.svg"}
            width={30}
            height={30}
            alt={"menu"}
          />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader></SheetHeader>
        <div className="grid gap-4 py-4">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How it works</Link>
          {/* <Link href="/login">About Us</Link> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Link
              href="/Waitlist"
              type="submit"
              className="bg-primary rounded-full px-4 py-2 border-primary text-white text-center"
            >
              Join Waitlist
            </Link>
          </SheetClose>
          {/* <SheetClose asChild>
						<Button className="border border-primary rounded-full px-4 py-2 text-primary bg-transparent mb-5">Login</Button>
					</SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

// export function SheetDemo() {
// 	return (
// 		<Sheet>
// 			<SheetTrigger asChild>
// 				<Button variant="outline">Open</Button>
// 			</SheetTrigger>
// 			<SheetContent>
// 				<SheetHeader>
// 					<SheetTitle>Edit profile</SheetTitle>
// 					<SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
// 				</SheetHeader>
// 				<div className="grid gap-4 py-4">
// 					<div className="grid grid-cols-4 items-center gap-4">
// 						<Label
// 							htmlFor="name"
// 							className="text-right">
// 							Name
// 						</Label>
// 						<Input
// 							id="name"
// 							value="Pedro Duarte"
// 							className="col-span-3"
// 						/>
// 					</div>
// 					<div className="grid grid-cols-4 items-center gap-4">
// 						<Label
// 							htmlFor="username"
// 							className="text-right">
// 							Username
// 						</Label>
// 						<Input
// 							id="username"
// 							value="@peduarte"
// 							className="col-span-3"
// 						/>
// 					</div>
// 				</div>
// 				<SheetFooter>
// 					<SheetClose asChild>
// 						<Button type="submit">Save changes</Button>
// 					</SheetClose>
// 				</SheetFooter>
// 			</SheetContent>
// 		</Sheet>
// 	);
// }
