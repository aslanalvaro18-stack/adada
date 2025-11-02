import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { HomeworkCard } from "@/components/HomeworkCard";
import { ScheduleCard } from "@/components/ScheduleCard";
import { ResourceCard } from "@/components/ResourceCard";
import { BiodataSection } from "@/components/BiodataSection";
import { GraduationCap } from "lucide-react";

import announcementsData from "@/data/announcements.json";
import homeworkData from "@/data/homework.json";
import scheduleData from "@/data/schedule.json";
import biodataData from "@/data/biodata.json";
import resourcesData from "@/data/resources.json";

const Index = () => {
  const [activeTab, setActiveTab] = useState("biodata");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse-slow" />
        <div className="container mx-auto px-4 py-12 relative">
          <div className="flex items-center justify-center gap-4 mb-6 animate-float">
            <div className="p-4 rounded-2xl bg-gradient-primary shadow-glow animate-glow hover:animate-spin-slow">
              <GraduationCap className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 animate-bounce-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(0,150,200,0.5)]" style={{ WebkitTextStroke: '1px rgba(0,150,200,0.3)' }}>
              7 Cah Juara
            </span>
          </h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
            Semangat, Berjuang , SUKSES!!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-card/50 backdrop-blur-sm p-2 shadow-card mb-8 h-auto">
            <TabsTrigger 
              value="biodata" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Info Kelas
            </TabsTrigger>
            <TabsTrigger 
              value="announcements"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Pengumuman
            </TabsTrigger>
            <TabsTrigger 
              value="homework"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Tugas Rumah
            </TabsTrigger>
            <TabsTrigger 
              value="schedule"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Jadwal
            </TabsTrigger>
            <TabsTrigger 
              value="resources"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="biodata" className="animate-slide-in">
            <BiodataSection data={biodataData} />
          </TabsContent>

          <TabsContent value="announcements" className="space-y-4 animate-slide-in">
            {announcementsData.map((announcement, idx) => (
              <div key={announcement.id} style={{ animationDelay: `${idx * 0.1}s` }}>
                <AnnouncementCard 
                  {...announcement as any}
                />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="homework" className="grid gap-4 md:grid-cols-2 animate-slide-in">
            {homeworkData.map((homework, idx) => (
              <div key={homework.id} style={{ animationDelay: `${idx * 0.1}s` }}>
                <HomeworkCard 
                  {...homework as any}
                />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="schedule" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-slide-in">
            {scheduleData.map((schedule, idx) => (
              <div key={schedule.day} style={{ animationDelay: `${idx * 0.15}s` }}>
                <ScheduleCard {...schedule} />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="grid gap-4 md:grid-cols-2 animate-slide-in">
            {resourcesData.map((resource, idx) => (
              <div key={resource.id} style={{ animationDelay: `${idx * 0.1}s` }}>
                <ResourceCard {...resource} />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border/50 backdrop-blur-sm animate-fade-in">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="hover:animate-wiggle inline-block">© 7CahJuara 2025.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
