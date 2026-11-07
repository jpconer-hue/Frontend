import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Communication Skills",
  "Basic computer skills",
  "Continuous learning & adaptability",
  "SQL / Databases",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skills.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
           I am an Information Technology student who believes in the importance of continuous learning and personal growth. Honestly, my preferred field was closer to Liberal Arts, but I chose Information Technology because I wanted to improve my computer skills, expand my knowledge, and keep up with the fast-paced changes in the modern world. Although I do not have a strong technical background, I see this course as an opportunity to explore new things, challenge myself, and continuously improve my digital literacy.

          </p>

          <p>
            Aside from my studies, I consider communication skills as one of my strengths. I enjoy expressing my thoughts, sharing ideas, and connecting with other people. I also enjoy watching movies and series, listening to music, playing video games, and playing basketball. My long-term goal is to become a Cybersecurity Analyst. I know that I still have a lot to learn, but I am willing to face challenges, gain new knowledge, and develop the skills necessary to achieve my goal.

          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}