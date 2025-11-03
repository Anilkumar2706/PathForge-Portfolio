import pathforgeLogo from "@/assets/pathforge-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={pathforgeLogo} 
            alt="PathForge Logo" 
            className="h-16 w-auto opacity-80"
          />
          
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} PathForge. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Innovate. Automate. Create.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
