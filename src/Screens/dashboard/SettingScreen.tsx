"use react";
import Image from "next/image";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import Account from "./components/settings/Account";
// import WalletIntegration from "./components/settings/WalletIntegration";
import SettingsNotification from "./components/settings/Notification";

const SettingScreen = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-11 block">
        <TabComp />
      </div>
    </div>
  );
};

export default SettingScreen;

function TabComp() {
  return (
    <Tabs defaultValue="walletIntegration" className="w-[90vw] md:w-full">
      <TabsList className="flex md:grid grid-cols-5 overflow-x-scroll pl-10 md:pl-5 ">
        <TabsTrigger className="text-xs md:text-sm" value="account">
          Account
        </TabsTrigger>
        <TabsTrigger className="text-xs md:text-sm" value="security">
          Security
        </TabsTrigger>
        <TabsTrigger className="text-xs md:text-sm" value="notification">
          Notification
        </TabsTrigger>
        <TabsTrigger className="text-xs md:text-sm" value="walletIntegration">
          Wallet integration
        </TabsTrigger>
        <TabsTrigger className="text-xs md:text-sm" value="apiAccess">
          API Access
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Account />
      </TabsContent>
      <TabsContent value="security">
        {/* <DataSharing /> */} Security
      </TabsContent>
      <TabsContent value="notification">
        <SettingsNotification />
      </TabsContent>
      <TabsContent value="walletIntegration">
        {/* <DataSharing /> */} Wallet Integration
      </TabsContent>
      <TabsContent value="apiAccess">
        {/* <DataSharing /> */} API Access
      </TabsContent>
    </Tabs>
  );
}
