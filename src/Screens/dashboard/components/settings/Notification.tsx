import { Label } from "@/src/components/ui/label";
import { Switch } from "@/src/components/ui/switch";
import React from "react";

const SettingsNotification = () => {
  return (
    <div>
      <div className="mt-16 pb-5 border-b">
        <h3 className="font-semibold text-2xl">Notification</h3>
        <p className="text-sm text-gray-500">
          Select when and how you’ll be notified.
        </p>
      </div>
      <div className="">
        <SectionComponent
          name="Comments"
          sub={`These are notifications for comments on your posts and replies to your comments.`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Push</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">SMS</Label>
            </div>
          </div>
        </SectionComponent>
        <SectionComponent
          name="Tags"
          sub={`These are notifications for when someone tags you in a comment, post or story.`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Push</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">SMS</Label>
            </div>
          </div>
        </SectionComponent>
        <SectionComponent
          name="Reminders"
          sub={`These are notifications to remind you of updates you might have missed.`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Push</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">SMS</Label>
            </div>
          </div>
        </SectionComponent>
        <SectionComponent
          name="More activity about you"
          sub={`These are notifications for posts on your profile, likes and other reactions to your posts, and more.`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Push</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" />
              <Label htmlFor="push">SMS</Label>
            </div>
          </div>
        </SectionComponent>
      </div>
    </div>
  );
};

export default SettingsNotification;

function SectionComponent({
  name,
  sub,
  children,
}: {
  name: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 border-b ml-3 py-5  gap-5">
      <div className="md:col-span-3">
        <div className="lg:max-w-[280px]">
          <div className="flex gap-2 col-span-1 ">
            <h1>{name}</h1>
          </div>
          {sub && <span className="text-sm text-[#535862]">{sub}</span>}
        </div>
      </div>
      <div className="md:col-span-4 ">
        <div className={`grid grid-cols-2 gap-6 `}>{children}</div>
      </div>
    </div>
  );
}
