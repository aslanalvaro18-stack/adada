import { FileText, Video, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  category: string;
  title: string;
  description: string;
  type: string;
  link: string;
}

export const ResourceCard = ({ category, title, description, type, link }: ResourceCardProps) => {
  const Icon = type === "Video" ? Video : FileText;
  
  return (
    <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/80 hover:scale-[1.02] animate-zoom-in group">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-accent group-hover:animate-bounce-in">
          <Icon className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <Badge variant="secondary" className="mb-2 bg-muted text-muted-foreground">
              {category}
            </Badge>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <Button 
            size="sm" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => window.open(link, '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </Card>
  );
};
