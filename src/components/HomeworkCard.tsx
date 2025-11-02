import { BookOpen, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HomeworkCardProps {
  subject: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
  points: number;
}

const statusColors = {
  pending: "bg-muted text-muted-foreground",
  "in-progress": "bg-secondary text-secondary-foreground",
  completed: "bg-accent text-accent-foreground",
};

const statusLabels = {
  pending: "Masih Lama",
  "in-progress": "Kurang dari Seminggu",
  completed: "Hari Ini",
};

export const HomeworkCard = ({ subject, title, description, dueDate, status, points }: HomeworkCardProps) => {
  const daysUntilDue = Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const isUrgent = daysUntilDue <= 3 && status !== "completed";

  return (
    <Card className={`p-6 shadow-card hover:shadow-card-hover transition-all duration-300 backdrop-blur-sm bg-card/80 hover:scale-[1.02] animate-slide-in-up group ${
      isUrgent ? "border-destructive/50 animate-shake" : "border-border/50"
    }`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-secondary group-hover:animate-flip">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary">{subject}</p>
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
          </div>
          <Badge className={statusColors[status]} variant="secondary">
            {statusLabels[status]}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className={isUrgent ? "text-destructive font-medium" : ""}>
              Due: {new Date(dueDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-accent">
            <Award className="w-4 h-4" />
            <span>{points} poin</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
