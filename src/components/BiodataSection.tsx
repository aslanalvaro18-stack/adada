import { Users, Award, TrendingUp, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BiodataSectionProps {
  data: {
    className: string;
    academicYear: string;
    classTeacher: string;
    totalStudents: number;
    description: string;
    achievements: string[];
    stats: {
      averageGrade: string;
      attendanceRate: string;
      activeProjects: number;
    };
  };
}

export const BiodataSection = ({ data }: BiodataSectionProps) => {
  return (
    <div className="space-y-6">
      <Card className="p-8 shadow-card border-border/50 backdrop-blur-sm bg-gradient-to-br from-card/90 to-primary/5 animate-fade-in-scale">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 animate-shimmer bg-[length:200%_auto]">
              {data.className}
            </h1>
            <p className="text-muted-foreground">{data.academicYear}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 animate-slide-in hover:scale-110 transition-transform group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:animate-pulse-slow">
                  <Users className="w-5 h-5 text-primary group-hover:animate-wiggle" />
                </div>
                <span className="text-sm text-muted-foreground">Jumlah Siswa</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{data.totalStudents}</p>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 animate-slide-in-up hover:scale-110 transition-transform group" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-secondary/20 group-hover:animate-bounce-in">
                  <TrendingUp className="w-5 h-5 text-secondary group-hover:animate-float" />
                </div>
                <span className="text-sm text-muted-foreground">Rata - Rata Nilai</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{data.stats.averageGrade}</p>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 animate-slide-in-down hover:scale-110 transition-transform group" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/20 group-hover:animate-flip">
                  <Calendar className="w-5 h-5 text-accent group-hover:animate-spin-slow" />
                </div>
                <span className="text-sm text-muted-foreground">Persen Kehadiran</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{data.stats.attendanceRate}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-muted-foreground">Wali Kelas: <span className="font-semibold text-foreground">{data.classTeacher}</span></p>
            <p className="text-muted-foreground leading-relaxed">{data.description}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 shadow-card border-border/50 backdrop-blur-sm bg-card/80 animate-bounce-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-accent animate-glow">
            <Award className="w-5 h-5 text-primary-foreground animate-spin-slow" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Kejuaraan Kelas</h2>
        </div>
        <ul className="space-y-3">
          {data.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5 border border-border/30 animate-slide-in hover:scale-105 transition-transform" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse-slow" />
              <span className="text-foreground">{achievement}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
