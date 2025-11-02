import { Clock, MapPin, User } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ScheduleCardProps {
  day: string;
  classes: Array<{
    time: string;
    subject: string;
    room: string;
    teacher: string;
  }>;
}

export const ScheduleCard = ({ day, classes }: ScheduleCardProps) => {
  return (
    <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/80 animate-bounce-in hover:scale-105 group">
      <h3 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-border/50 group-hover:animate-shimmer bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text">{day}</h3>
      <div className="space-y-3">
        {classes.map((classInfo, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/30 hover:border-primary/30 transition-all hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-primary animate-spin-slow" />
              <span className="text-sm font-medium text-foreground">{classInfo.time}</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">{classInfo.subject}</h4>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{classInfo.room}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{classInfo.teacher}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
