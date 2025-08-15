import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Play, 
  FileText,
  Bot,
  Database,
  Code,
  Activity,
  Eye
} from "lucide-react";

const Portfolio = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Agentic Mesh: AI-Powered Intelligent Query & Decision System",
      hook: "Multi-agent AI system that retrieves, reasons, and responds to business queries autonomously",
      problem: "Organizations sit on vast datasets but lack a streamlined way to extract actionable insights. Complex queries require multiple tools and manual steps, delaying decisions.",
      solution: "Built Agentic Mesh, a multi-agent AI system that retrieves, reasons, and responds to business queries autonomously. Used LlamaIndex for context-aware retrieval, MLflow for reproducible experiment tracking, Ngrok for secure remote collaboration, plus custom prompt templates and multi-step reasoning.",
      impact: "Reduced data query resolution time by ~60%, improved decision accuracy & consistency, enabled collaborative remote analysis.",
      techStack: ["Python", "LlamaIndex", "Hugging Face", "MLflow", "Ngrok", "Poetry", "Pandas", "NumPy", "Asyncio", "Gradio"],
      icon: Bot,
      color: "text-purple-400",
      links: [
        { type: "case-study", label: "View case study" },
        { type: "blog", label: "Read blog" },
        { type: "demo", label: "Watch demo" }
      ]
    },
    {
      id: 2,
      title: "Self-Hosted AI Pipeline for Structured Data Extraction",
      hook: "Azure-powered pipeline that cut manual data processing workload by 90%",
      problem: "Millions of unstructured product descriptions required manual processing—slow, inconsistent, and costly—blocking real-time BI.",
      solution: "Built a self-hosted pipeline with Azure OpenAI (GPT-4 Mini) for token-efficient JSON extraction; multithreading + de-dup to cut LLM calls; Dockerized deployment with Azure Function triggers on blob upload; connected to Power BI Dataflows for historical + monthly dashboards.",
      impact: "Cut manual workload by ~90%; delivered live, accurate BI; reduced costs through token optimization.",
      techStack: ["Python", "Azure OpenAI", "Docker", "Power BI", "Azure Functions", "Blob Storage", "JSON", "Multithreading"],
      icon: Database,
      color: "text-blue-400",
      links: [
        { type: "video", label: "Watch implementation video" }
      ]
    },
    {
      id: 3,
      title: "PyLoomer: Natural Language → Python Code",
      hook: "Fine-tuned AI model that converts natural language specs into Python code",
      problem: "Teams waste time converting natural-language specs into boilerplate Python.",
      solution: "Created PyLoomer, fine-tuning CodeGen, StarCoderBase, CodeParrot with PEFT for text-to-code. Encoder-decoder with attention for intent + syntax; custom dataset pipeline.",
      impact: "Automated up to 70% of repetitive coding tasks; improved ROUGE vs. baselines; accelerated prototyping.",
      techStack: ["Python", "Hugging Face", "Transformers", "PEFT", "NumPy", "Pandas"],
      icon: Code,
      color: "text-green-400",
      links: [
        { type: "results", label: "See results" }
      ]
    },
    {
      id: 4,
      title: "HeartNet: AI-Driven ECG Signal Analysis",
      hook: "Deep learning model achieving 99.91% accuracy in ECG pattern recognition",
      problem: "Manual ECG interpretation is slow and can miss subtle patterns.",
      solution: "Encoder-decoder architecture with LSTM; converted 1D ECG to 2D for richer features; precise classification pipeline.",
      impact: "~99.91% training accuracy; 97.87% validation accuracy.",
      techStack: ["Python", "TensorFlow/Keras", "LSTM", "NumPy", "Pandas", "Signal Processing"],
      icon: Activity,
      color: "text-red-400",
      links: [
        { type: "metrics", label: "View metrics" }
      ]
    },
    {
      id: 5,
      title: "Live Yoga Pose Detector",
      hook: "Real-time pose detection system with 98% accuracy for virtual fitness",
      problem: "Remote yoga lacks real-time posture correction, risking form & safety.",
      solution: "TensorFlow MoveNet Thunder for skeleton tracking + custom DL classifier; computed joint-angle features from augmented dataset for robust recognition.",
      impact: "~98% classification accuracy across 5 poses; enables real-time feedback for virtual fitness.",
      techStack: ["Python", "TensorFlow", "MoveNet", "OpenCV", "Pandas", "NumPy", "Image Augmentation"],
      icon: Eye,
      color: "text-pink-400",
      links: [
        { type: "demo", label: "Try live demo" }
      ]
    }
  ];

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'demo':
        return <Play className="w-4 h-4" />;
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'blog':
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="portfolio" className="bg-gradient-to-b from-secondary/20 to-background">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="hero-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interactive case studies showcasing end-to-end AI solutions that solve real business problems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="cursor-pointer" onClick={() => toggleCard(project.id)}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.hook}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">
                    {expandedCard === project.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              {expandedCard === project.id && (
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-accent">Problem</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-accent">Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-accent">Impact</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-accent">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs px-2 py-1 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.links.map((link) => (
                        <Button 
                          key={link.type}
                          variant="outline" 
                          size="sm"
                          className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        >
                          {getLinkIcon(link.type)}
                          <span className="ml-2">{link.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Experience Callout */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-gradient-to-r from-accent/5 to-hero-accent/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="hero-gradient">Current Work: Multi-Tier RAG Agent</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Building advanced RAG systems with Global Source + Team/Local RAGs; Tree-sitter chunking with imports/context preserved; 
                metadata enrichment (framework, repo, version, branch); FAISS (FlatIVF2) with metadata filtering; 
                GraphQL for authenticated repo metadata; Popen-based cross-platform indexers; event-driven re-indexing on save/commit.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Multi-tier RAG", "Tree-sitter", "FAISS", "GraphQL", "Event-driven indexing"].map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-xs px-2 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;