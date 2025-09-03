import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Frimat Connect & Innovate
          </h1>
          <p className="text-xl text-muted-foreground">
            Your trusted IT solutions partner
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">IT Support</h2>
            <p className="text-muted-foreground mb-4">
              Professional IT support services for your business needs.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Network Security</h2>
            <p className="text-muted-foreground mb-4">
              Protect your business with our advanced security solutions.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Digital Marketing</h2>
            <p className="text-muted-foreground mb-4">
              Grow your online presence with our marketing expertise.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;