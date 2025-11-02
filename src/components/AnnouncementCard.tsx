import { Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnnouncementCardProps {
  title: string;
  content: string;
  date: string;
  priority: "high" | "medium" | "low";
  author: string;
}

const priorityColors = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-secondary text-secondary-foreground",
  low: "bg-muted text-muted-foreground",
};

export const AnnouncementCard = ({ title, content, date, priority, author }: AnnouncementCardProps) => {
  return (
    <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/80 hover:scale-[1.02] animate-fade-in-scale group">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-primary animate-pulse-slow group-hover:animate-wiggle">
          <Bell className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
            <Badge className={priorityColors[priority]} variant="secondary">
              {priority}
            </Badge>
          </div>
          <p className="text-muted-foreground leading-relaxed">{content}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
            <span>{author}</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
