import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    liveUrl?: string;
    githubUrl?: string;
    role: string;
    stack: string[];
    slug?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.role}</p>
        </div>

        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechStackBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <Button asChild size="sm" variant="outline">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild size="sm" variant="ghost">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          )}
          {project.slug && (
            <Button asChild size="sm">
              <Link href={`/projects/${project.slug}`}>
                Case Study
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}