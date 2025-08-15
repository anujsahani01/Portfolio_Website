import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brain, Database, Cloud, Wrench, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "AI/ML & NLP",
      icon: Brain,
      skills: [
        "TensorFlow", "PyTorch", "Transfer Learning", "Neural Networks", 
        "Attention Mechanisms", "Large Language Models"
      ],
      color: "text-purple-400"
    },
    {
      title: "Generative AI",
      icon: Brain,
      skills: [
        "Hugging Face", "PEFT", "Prompt Engineering", "LLM API Integration",
        "LlamaIndex", "LangChain", "RAG", "ReAct Agents", "Virtual LLMs"
      ],
      color: "text-pink-400"
    },
    {
      title: "Computer Vision",
      icon: Brain,
      skills: [
        "Diffusion (DDPM)", "Autoencoders", "GANs", "OpenCV", "Object Detection"
      ],
      color: "text-green-400"
    },
    {
      title: "Optimization & Math",
      icon: Wrench,
      skills: ["Linear Programming (PuLP)", "Mixed-Integer Optimization"],
      color: "text-orange-400"
    },
    {
      title: "Data & Visualization",
      icon: BarChart3,
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Power BI", "Excel", 
        "Dataflows", "Vector Stores"
      ],
      color: "text-cyan-400"
    },
    {
      title: "Infrastructure",
      icon: Database,
      skills: ["Docker"],
      color: "text-indigo-400"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        "Azure Functions", "Azure Blob", "AWS (S3, Container Registry, CodeBuild)",
        "Amazon Redshift", "Glue", "Athena"
      ],
      color: "text-yellow-400"
    },
    {
      title: "Systems & Indexing",
      icon: Database,
      skills: [
        "Tree-sitter", "FAISS (FlatIVF2)", "Metadata filtering", 
        "GraphQL (authenticated APIs)"
      ],
      color: "text-red-400"
    }
  ];

  return (
    <section id="skills" className="bg-gradient-to-b from-secondary/20 to-background">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="hero-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building end-to-end AI solutions, from research to production deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs px-2 py-1 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-gradient-to-r from-accent/5 to-hero-accent/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="hero-gradient">Full-Stack AI Development</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From research and experimentation to scalable production deployments, 
                I bring deep expertise across the entire AI development lifecycle. 
                Whether it's fine-tuning LLMs, building RAG systems, or deploying on cloud infrastructure, 
                I deliver solutions that work at scale.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;