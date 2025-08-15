import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-background to-secondary/20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="hero-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming data into actionable insights and building AI solutions that drive real business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I'm Anuj Sahani, a data scientist with over a year of hands-on experience turning proof-of-concept ideas into real-world, production-ready solutions. I help businesses harness the power of data science, machine learning, and advanced analytics to uncover hidden patterns, optimize operations, and solve complex challenges.
              </p>
              
              <p className="text-accent font-medium">
                If you're looking for someone who can not only understand your data but transform it into actionable strategies that drive measurable results—you've found your guy.
              </p>
              
              <p>
                My journey began in a fast-paced startup environment, where I managed end-to-end projects and transformed experimental concepts into impactful implementations. Later, in a product-based company, I built intelligent agents from scratch—delivering high accuracy and low latency at scale for thousands of users.
              </p>
              
              <p>
                I'm passionate about exploring underutilized areas where data can create real impact. Whether it's developing predictive models, automating workflows, or integrating cutting-edge AI, I thrive on unlocking the untapped potential within data and turning it into insights that power growth.
              </p>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">
            {/* Education */}
            <Card className="card-hover border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <div className="space-y-2">
                      <p className="font-medium">B.Tech, Mechanical Engineering</p>
                      <p className="text-muted-foreground">Manipal University Jaipur, Rajasthan, India</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2020 – 2024</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Mechanical Engineering → AI/Data Science
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="card-hover border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
                    
                    <div className="space-y-6">
                      {/* Current Role */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">Data Scientist</h4>
                          <Badge className="bg-accent text-accent-foreground">Current</Badge>
                        </div>
                        <p className="text-muted-foreground">Product-Based Company (2024–Present)</p>
                        <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                          <li>• Built intelligent agents at scale with high accuracy & low latency</li>
                          <li>• Serving thousands of users with multi-tier RAG systems</li>
                          <li>• Event-driven indexing and real-time processing</li>
                        </ul>
                      </div>

                      {/* Previous Role */}
                      <div className="space-y-2">
                        <h4 className="font-semibold">Data Scientist</h4>
                        <p className="text-muted-foreground">Startup (2023–2024)</p>
                        <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                          <li>• End-to-end ownership from PoC to production</li>
                          <li>• Stakeholder alignment and project management</li>
                          <li>• Automation and advanced analytics implementation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;