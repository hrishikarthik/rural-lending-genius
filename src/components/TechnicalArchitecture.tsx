import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Smartphone, Shield, Database, Wifi, WifiOff } from "lucide-react";

export const TechnicalArchitecture = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">System Architecture</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            AI-Enabled Underwriting Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable, secure system designed for low-bandwidth environments
          </p>
        </div>

        {/* Architecture Diagram */}
        <Card className="mb-16 overflow-hidden">
          <CardHeader className="bg-gradient-primary text-white">
            <CardTitle className="text-2xl text-center">High-Level System Architecture</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Mobile Layer */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Mobile Application Layer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">React Native App</h4>
                      <p className="text-xs text-muted-foreground">Cross-platform mobile client</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <WifiOff className="h-6 w-6 text-accent" />
                      </div>
                      <h4 className="font-medium mb-1">Offline Storage</h4>
                      <p className="text-xs text-muted-foreground">SQLite + AsyncStorage</p>
                    </CardContent>
                  </Card>
                  <Card className="border-success/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-success/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="h-6 w-6 text-success" />
                      </div>
                      <h4 className="font-medium mb-1">Edge AI Engine</h4>
                      <p className="text-xs text-muted-foreground">On-device ML processing</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* API Layer */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Server className="h-5 w-5 text-accent" />
                  API Gateway & Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-accent/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Server className="h-6 w-6 text-accent" />
                      </div>
                      <h4 className="font-medium mb-1">API Gateway</h4>
                      <p className="text-xs text-muted-foreground">Rate limiting, authentication, routing</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">AI Underwriting API</h4>
                      <p className="text-xs text-muted-foreground">ML models for risk assessment</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Data Layer */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-success" />
                  Data & ML Infrastructure
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="border-success/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-success/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Database className="h-6 w-6 text-success" />
                      </div>
                      <h4 className="font-medium mb-1">User Database</h4>
                      <p className="text-xs text-muted-foreground">PostgreSQL cluster</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">ML Pipeline</h4>
                      <p className="text-xs text-muted-foreground">TensorFlow Serving</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Database className="h-6 w-6 text-accent" />
                      </div>
                      <h4 className="font-medium mb-1">Data Lake</h4>
                      <p className="text-xs text-muted-foreground">S3 + Apache Spark</p>
                    </CardContent>
                  </Card>
                  <Card className="border-destructive/20">
                    <CardContent className="p-4 text-center">
                      <div className="bg-destructive/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="h-6 w-6 text-destructive" />
                      </div>
                      <h4 className="font-medium mb-1">Encryption</h4>
                      <p className="text-xs text-muted-foreground">AES-256 at rest</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Low Bandwidth Optimizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <WifiOff className="h-5 w-5 text-accent" />
                Low Bandwidth Handling
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Retry & Resume Logic</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    Exponential backoff with jitter for API calls
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    Local form state persistence across network failures
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    Queue-based sync when connection restored
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    Chunked file uploads with progress resumption
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Data Compression</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                    GZIP compression for all API responses
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                    WebP image format with aggressive compression
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                    Minimal JSON payloads with abbreviated keys
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                AI Model Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Edge Computing</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2"></div>
                    Quantized TensorFlow Lite models (&lt;5MB)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2"></div>
                    On-device behavioral pattern analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2"></div>
                    Federated learning for model updates
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2"></div>
                    Privacy-preserving local inference
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Cloud ML Pipeline</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    Real-time feature engineering with Apache Kafka
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    Ensemble models for improved accuracy
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    A/B testing framework for model experiments
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Performance Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">&lt;500ms</div>
                <div className="text-sm text-muted-foreground">API Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">2G+</div>
                <div className="text-sm text-muted-foreground">Network Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">&lt;50MB</div>
                <div className="text-sm text-muted-foreground">App Size</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};