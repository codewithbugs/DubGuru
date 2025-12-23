/**
 * Settings Page
 * 
 * User configuration and account settings.
 * Features:
 * - Profile management
 * - Notification preferences
 * - API Key management (mock)
 * - Billing overview
 */

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, Key, CreditCard, Save } from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading mb-1">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and subscriptions.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-white/5 border border-white/10 p-1">
          <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            <User className="w-4 h-4 mr-2" /> Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            <Bell className="w-4 h-4 mr-2" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="api" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            <Key className="w-4 h-4 mr-2" /> API Keys
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            <CreditCard className="w-4 h-4 mr-2" /> Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="p-6 glass-card border-white/10 max-w-2xl">
            <h3 className="text-xl font-bold mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="Alex" className="bg-black/20" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Rivera" className="bg-black/20" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input defaultValue="alex@DubGuru.ai" className="bg-black/20" />
              </div>
              <div className="pt-4">
                <Button className="bg-primary text-white"><Save className="w-4 h-4 mr-2" /> Save Changes</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6 glass-card border-white/10 max-w-2xl">
            <h3 className="text-xl font-bold mb-6">Notification Preferences</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about your projects via email.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Dubbing Completed</Label>
                  <p className="text-sm text-muted-foreground">Notify me when a dubbing job is finished.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Marketing Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive news about new features and offers.</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card className="p-6 glass-card border-white/10 max-w-2xl">
            <h3 className="text-xl font-bold mb-6">API Access</h3>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-500 text-sm mb-4">
                Your API keys grant full access to your account. Keep them secure.
              </div>
              <div className="space-y-2">
                <Label>Secret Key</Label>
                <div className="flex gap-2">
                  <Input value="sk_live_51Mz...Xy9z" readOnly className="bg-black/20 font-mono" />
                  <Button variant="outline">Copy</Button>
                </div>
              </div>
              <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10">Roll Key</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="p-6 glass-card border-white/10 max-w-2xl">
            <h3 className="text-xl font-bold mb-6">Subscription & Billing</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div>
                  <h4 className="font-bold text-primary">Pro Studio Plan</h4>
                  <p className="text-sm text-muted-foreground">Renews on Jan 14, 2026</p>
                </div>
                <Button variant="secondary">Manage Subscription</Button>
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="flex items-center gap-4 p-4 border border-white/10 rounded-lg bg-black/20">
                   <CreditCard className="w-6 h-6 text-muted-foreground" />
                   <div className="flex-1">
                     <p className="font-medium">Visa ending in 4242</p>
                     <p className="text-xs text-muted-foreground">Expiry 12/28</p>
                   </div>
                   <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
