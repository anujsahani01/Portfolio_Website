import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  MessageSquare, 
  Bot, 
  Eye, 
  TrendingUp, 
  BarChart3, 
  Cloud, 
  Container 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Model Development",
      description: "Custom LLMs, Transformers, Tabular, and Time Series models tailored to your specific business needs.",
      features: ["Custom model architecture", "Transfer learning", "Model optimization", "Performance tuning"],
      color: "text-purple-400"
    },
    {
      icon: MessageSquare,
      title: "LLM & NLP Solutions",
      description: "Fine-tuning, Prompt Engineering, Translation, Tokenization & Custom Embeddings using HuggingFace and PEFT.",
      features: ["Model fine-tuning", "Prompt optimization", "Custom embeddings", "Multi-language support"],
      color: "text-blue-400"
    },
    {
      icon: Bot,
      title: "Agentic & RAG Workflows",
      description: "Hybrid RAG systems, Tool-augmented ReAct Agents, Query Decomposition using LlamaIndex.",
      features: ["Multi-tier RAG", "Intelligent agents", "Query optimization", "Context-aware retrieval"],
      color: "text-green-400"
    },
    {
      icon: Eye,
      title: "Computer Vision Applications",
      description: "Pose Detection, Image Classification, Object Tracking, Diffusion models, and GANs.",
      features: ["Real-time detection", "Image generation", "Object tracking", "Custom vision models"],
      color: "text-pink-400"
    },
    {
      icon: TrendingUp,
      title: "Optimization & Decision Intelligence",
      description: "Linear Programming, Mixed-Integer Programming, AI-driven planning & forecasting solutions.",
      features: ["Operations research", "Resource optimization", "Predictive analytics", "Decision automation"],
      color: "text-orange-400"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Power BI dashboards, Dataflows, Excel pipelines, and actionable business insights.",
      features: ["Interactive dashboards", "Automated reporting", "Data pipelines", "Business intelligence"],
      color: "text-cyan-400"
    },
    {
      icon: Cloud,
      title: "Cloud & Scalable Deployments",
      description: "AWS, Azure, REST APIs, Docker, CI/CD, and Serverless architecture implementations.",
      features: ["Cloud deployment", "API development", "Scalable architecture", "DevOps integration"],
      color: "text-indigo-400"
    },
    {
      icon: Container,
      title: "Containerized Solutions",
      description: "API-based AI workflows, Virtualization with Docker, lightweight and cost-optimized deployments.",
      features: ["Microservices", "Container orchestration", "Cost optimization", "Performance monitoring"],
      color: "text-yellow-400"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-gradient-to-b from-background to-secondary/20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            From early PoCs to production deployments—I deliver end-to-end AI that works.
          </p>
          
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What I Bring to the Table</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-muted-foreground">✓ Proven success across Data Science, NLP, Data Analytics, Generative AI, Computer Vision, AI Engineering</p>
                <p className="text-muted-foreground">✓ Research-backed methods with business-first thinking</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">✓ Full-stack AI/ML development — research → deployment</p>
                <p className="text-muted-foreground">✓ Strong communication & stakeholder alignment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-accent/20 bg-gradient-to-r from-accent/5 to-hero-accent/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Data into Impact?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Let's discuss how I can help you build AI solutions that drive real business results.
              </p>
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-hero-accent text-accent-foreground font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                See How I Can Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;