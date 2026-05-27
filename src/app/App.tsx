import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  Globe,
  Award,
  BookOpen,
  Cpu,
  Code,
  Database,
  Server,
  Cloud,
  Wrench,
  Sparkles,
  FlaskConical,
  Calendar,
  MapPin,
  FileText,
  Languages,
  Send,
  CheckCircle2,
  Trash2,
  Moon,
  Sun,
  Play,
  RefreshCw,
  Sliders,
  MessageSquare,
  Droplet,
  Flame,
  Zap,
  TrendingUp,
  Bookmark,
  Users,
  Briefcase,
  User,
  ArrowLeft,
  GraduationCap
} from "lucide-react";
// @ts-ignore
import profileImage from "../imports/ChatGPT_Image_May_25__2026__12_46_07_PM.png";
const letiImage = "/Saint-Petersburg-Electrotechnical-University.jpg";
const hatemImage = "/hatemalicollege.jpg";

// Interfaces
interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(false);
  
  // Education detail subpage view
  const [educationDetail, setEducationDetail] = useState<'leti' | 'hatem' | null>(null);
  
  // Navigation active section
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Project Interactive states
  const [penguPreviewDark, setPenguPreviewDark] = useState<boolean>(true);
  const [atsBullet, setAtsBullet] = useState<string>("");
  const [atsScore, setAtsScore] = useState<number>(0);
  const [atsFeedback, setAtsFeedback] = useState<string>("");

  // Research Simulator states
  const [awgRh, setAwgRh] = useState<number>(65);
  const [awgTemp, setAwgTemp] = useState<number>(28);
  const [awgLiters, setAwgLiters] = useState<number>(0);
  const [plasticInput, setPlasticInput] = useState<number>(10);
  const [fuelOutput, setFuelOutput] = useState<number>(0);
  const [epochNum, setEpochNum] = useState<number>(0);
  const [epochLoss, setEpochLoss] = useState<number>(1.24);
  const [epochAcc, setEpochAcc] = useState<number>(0.32);
  const [isRunningEpochs, setIsRunningEpochs] = useState<boolean>(false);

  // Tech Stack state
  const [selectedTechCat, setSelectedTechCat] = useState<string>("all");

  // Contact Form states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msgText, setMsgText] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const [savedMessages, setSavedMessages] = useState<Message[]>([]);
  const [showMessagesPanel, setShowMessagesPanel] = useState<boolean>(false);

  // Stats Counters (Simulate counting up)
  const [stats, setStats] = useState({
    productionSystems: 0,
    intlOrganizations: 0,
    scienceFair: 0,
    olympiad: 0,
    globalResearch: 0
  });

  // Admission Bondhu AI Recommendation sandbox
  const [userIntention, setUserIntention] = useState<string>("");
  const [bondhuRecommendation, setBondhuRecommendation] = useState<{
    subject: string;
    probability: string;
    pathway: string;
    scholarship: string;
  } | null>(null);

  // Core Inspector Console States
  const [showCoreInspector, setShowCoreInspector] = useState<boolean>(false);
  const [inspectorLogLines, setInspectorLogLines] = useState<string[]>([
    "🤖 MD Sami Production Core Inspector v1.0 initialized.",
    "🔒 Vercel Edge Network production environment active.",
    "💡 Type 'help' or click 'Run Diagnostics' to begin.",
  ]);
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState<boolean>(false);

  const triggerDiagnostics = () => {
    if (isDiagnosticRunning) return;
    setIsDiagnosticRunning(true);
    setInspectorLogLines(prev => [
      ...prev,
      "⚡ Initializing core systems diagnostic run...",
    ]);

    setTimeout(() => {
      setInspectorLogLines(prev => [...prev, "🧬 MD Sami Core Status: Fully Healthy & Operations Ready."]);
    }, 600);

    setTimeout(() => {
      setInspectorLogLines(prev => [...prev, "🛠️ Verifying Vercel Edge Cache integrity... Done."]);
    }, 1200);

    setTimeout(() => {
      setInspectorLogLines(prev => [...prev, "📊 Allocating secure memory profiles... 100% correct."]);
    }, 1800);

    setTimeout(() => {
      setInspectorLogLines(prev => [
        ...prev,
        "✅ Diagnostics complete. All systems executing with perfect stability.",
        "🚀 Live deployment verified. Digital core ready for global scale."
      ]);
      setIsDiagnosticRunning(false);
    }, 2400);
  };

  const runTerminalCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    
    // Add command to log lines
    setInspectorLogLines(prev => [...prev, `sami-core@antigravity:~$ ${cmd}`]);
    setTerminalInput("");

    if (trimmed === 'help') {
      setInspectorLogLines(prev => [
        ...prev,
        "System Commands:",
        "  help      - Show this reference menu",
        "  diagnose  - Execute comprehensive core health check",
        "  neofetch  - Display active developer profile stats",
        "  about     - View digital core background logs",
        "  clear     - Wipe inspector screen history",
        "  exit      - Deactivate the core inspector console"
      ]);
    } else if (trimmed === 'clear') {
      setInspectorLogLines([]);
    } else if (trimmed === 'exit') {
      setShowCoreInspector(false);
    } else if (trimmed === 'neofetch') {
      setInspectorLogLines(prev => [
        ...prev,
        "               .---.                 Sami-Core@antigravity",
        "              /     \\                ---------------------",
        "              \\     /                OS: Antigravity OS v6.3.5",
        "               `---'                 Host: Vercel Edge Network",
        "       .---.          .---.          Kernel: React 18.3.1 (LTS)",
        "      /     \\        /     \\         Uptime: 100% stable integration",
        "      \\     /        \\     /         Shell: zsh / sami-core-agent",
        "       `---'          `---'          Resolution: 4K Ultra Fluid",
        "                                     CPU: Neural Net Pyrolysis Predictor",
        "                                     GPU: Tailwind CSS GPU Acceleration",
        "                                     Memory: 100% Correct / Healthy",
        ""
      ]);
    } else if (trimmed === 'about') {
      setInspectorLogLines(prev => [
        ...prev,
        "ℹ️ CORE ARCHITECTURE INFO:",
        "Designed by MD Sami to synthesize green physical chemistry and high-grade software systems.",
        "Equipped with active service-worker override protocols to guarantee cache neutralization.",
        "Built using React, TailwindCSS, and Lucide vector icons."
      ]);
    } else if (trimmed === 'diagnose') {
      triggerDiagnostics();
    } else {
      setInspectorLogLines(prev => [...prev, `bash: command not found: ${cmd}. Type 'help' for options.`]);
    }
  };

  // Initialize and load saved messages
  useEffect(() => {
    // Read local storage theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Lock body scroll when academic subpage is active
  useEffect(() => {
    if (educationDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [educationDetail]);

  // Read stored messages & trigger stats counters
  useEffect(() => {
    // Read stored messages
    const msgs = localStorage.getItem("sami_messages");
    if (msgs) {
      setSavedMessages(JSON.parse(msgs));
    }

    // Counter animation trigger
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        productionSystems: Math.min(Math.round((10 / steps) * step), 10),
        intlOrganizations: Math.min(Math.round((3 / steps) * step), 3),
        scienceFair: Math.min(Math.round((1 / steps) * step), 1),
        olympiad: Math.min(Math.round((1 / steps) * step), 1),
        globalResearch: Math.min(Math.round((5 / steps) * step), 5)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Sync theme changes
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Admission Bondhu simulator submit
  const getBondhuGuidance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userIntention.trim()) return;
    
    const term = userIntention.toLowerCase();
    let recommendation = {
      subject: "AI & Neural Systems Engineering",
      probability: "94%",
      pathway: "Saint Petersburg LETI Research Track",
      scholarship: "State Scholarship Scheme (100% tuition)"
    };

    if (term.includes("sustain") || term.includes("water") || term.includes("green") || term.includes("environ")) {
      recommendation = {
        subject: "Renewable Energy & Climate Systems Technology",
        probability: "89%",
        pathway: "SME Green-Tech Acceleration Track",
        scholarship: "Global Green Impact Grant"
      };
    } else if (term.includes("web") || term.includes("software") || term.includes("saas") || term.includes("code")) {
      recommendation = {
        subject: "Advanced Full-Stack Engineering & SaaS Architecture",
        probability: "97%",
        pathway: "RizQara Elite Developer Fast-track",
        scholarship: "EU Industry Collaboration Fellowship"
      };
    }

    setBondhuRecommendation(recommendation);
  };

  // ATS Resume check simulator
  const checkAtsScore = () => {
    if (!atsBullet.trim()) {
      setAtsScore(0);
      setAtsFeedback("Please write or paste a description or achievement bullet.");
      return;
    }

    let score = 30;
    let feedback = "Needs more quantitative impact. Add metrics (%, $ or count).";
    
    const countMetrics = (atsBullet.match(/\d+/g) || []).length;
    const actionWords = ["developed", "architected", "optimized", "built", "engineered", "designed", "deployed", "scaled", "researched", "managed"];
    const keywords = ["ai", "react", "typescript", "cloud", "saas", "api", "database", "analytics", "dashboard", "neural network", "sustainability"];

    let hasAction = false;
    actionWords.forEach(word => {
      if (atsBullet.toLowerCase().includes(word)) hasAction = true;
    });

    let foundKeywords = 0;
    keywords.forEach(word => {
      if (atsBullet.toLowerCase().includes(word)) foundKeywords++;
    });

    if (hasAction) score += 25;
    score += countMetrics * 15;
    score += foundKeywords * 8;

    score = Math.min(score, 100);

    if (score >= 85) {
      feedback = "Outstanding! High action impact, quantitative metric validation, and great keyword density.";
    } else if (score >= 60) {
      feedback = "Good draft! Consider adding more specific framework keywords and concrete numeric statistics.";
    }

    setAtsScore(score);
    setAtsFeedback(feedback);
  };

  // AWG water generation simulator
  useEffect(() => {
    const yieldLiters = (awgRh / 100) * (awgTemp * 0.95);
    setAwgLiters(parseFloat(yieldLiters.toFixed(2)));
  }, [awgRh, awgTemp]);

  // Plastic to Fuel simulator
  useEffect(() => {
    const yieldFuel = plasticInput * 0.82; // 82% conversion rate
    setFuelOutput(parseFloat(yieldFuel.toFixed(2)));
  }, [plasticInput]);

  // AI Training Simulator Epoch loop
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isRunningEpochs && epochNum < 10) {
      timer = setTimeout(() => {
        setEpochNum(prev => prev + 1);
        setEpochLoss(prev => parseFloat((prev * 0.65 - 0.02 * Math.random()).toFixed(3)));
        setEpochAcc(prev => parseFloat((prev + (1 - prev) * 0.35 + 0.01 * Math.random()).toFixed(3)));
      }, 900);
    } else if (epochNum >= 10) {
      setIsRunningEpochs(false);
    }
    return () => clearTimeout(timer);
  }, [isRunningEpochs, epochNum]);

  const runModelTraining = () => {
    setEpochNum(0);
    setEpochLoss(1.35);
    setEpochAcc(0.24);
    setIsRunningEpochs(true);
  };

  // Contact Form Submission Handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim()) {
      setFormError("Name field is required.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!msgText.trim()) {
      setFormError("Message cannot be empty.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/absami602@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: msgText.trim(),
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      const newMessage: Message = {
        id: Math.random().toString(36).substring(2, 9),
        name: name.trim(),
        email: email.trim(),
        message: msgText.trim(),
        date: new Date().toLocaleString()
      };

      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      localStorage.setItem("sami_messages", JSON.stringify(updated));

      setFormSubmitted(true);
      setName("");
      setEmail("");
      setMsgText("");

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      setFormError("There was an error sending your message. Please try again or use direct email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete message from internal log
  const deleteMessage = (id: string) => {
    const filtered = savedMessages.filter(m => m.id !== id);
    setSavedMessages(filtered);
    localStorage.setItem("sami_messages", JSON.stringify(filtered));
  };

  // Filter skills stack
  const techCategories = [
    { id: "all", label: "All Stack" },
    { id: "frontend", label: "Frontend & Design" },
    { id: "backend", label: "Backend & Systems" },
    { id: "ai", label: "AI & Data Science" },
    { id: "marketing", label: "SEO & Growth" },
    { id: "research", label: "Scientific Research" }
  ];

  const skillItems = [
    // Frontend & Design
    { name: "React / Next.js", level: "Expert", category: "frontend", glow: "rgba(108,59,255,0.4)" },
    { name: "TypeScript / ES6", level: "Expert", category: "frontend", glow: "rgba(108,59,255,0.4)" },
    { name: "JavaScript / Web Apps", level: "Expert", category: "frontend", glow: "rgba(108,59,255,0.4)" },
    { name: "Tailwind CSS v4 / HTML", level: "Expert", category: "frontend", glow: "rgba(108,59,255,0.3)" },
    { name: "UX/UI Design & Wireframing", level: "Advanced", category: "frontend", glow: "rgba(108,59,255,0.3)" },
    { name: "Typography & Interface", level: "Advanced", category: "frontend", glow: "rgba(108,59,255,0.3)" },

    // Backend & Systems
    { name: "Node.js / Express", level: "Expert", category: "backend", glow: "rgba(186,167,255,0.4)" },
    { name: "ASP.NET Core", level: "Advanced", category: "backend", glow: "rgba(186,167,255,0.3)" },
    { name: "Databases (SQL/PostgreSQL)", level: "Advanced", category: "backend", glow: "rgba(186,167,255,0.3)" },
    { name: "Web Services & APIs", level: "Expert", category: "backend", glow: "rgba(186,167,255,0.4)" },
    { name: "Rust (Systems Lang)", level: "Intermediate", category: "backend", glow: "rgba(186,167,255,0.3)" },

    // AI & Data Science
    { name: "Python / Data Science", level: "Expert", category: "ai", glow: "rgba(255,178,107,0.4)" },
    { name: "NVIDIA Jetson AI", level: "Advanced", category: "ai", glow: "rgba(255,178,107,0.4)" },
    { name: "Edge Neural Networks", level: "Advanced", category: "ai", glow: "rgba(255,178,107,0.4)" },
    { name: "Pandas & NumPy", level: "Expert", category: "ai", glow: "rgba(255,178,107,0.3)" },
    { name: "Scientific Computing", level: "Advanced", category: "ai", glow: "rgba(255,178,107,0.3)" },
    { name: "Workflow Automation", level: "Expert", category: "ai", glow: "rgba(255,178,107,0.4)" },

    // SEO & Growth
    { name: "Search Engine Optimization (SEO)", level: "Expert", category: "marketing", glow: "rgba(108,59,255,0.3)" },
    { name: "E-commerce & On-Page SEO", level: "Expert", category: "marketing", glow: "rgba(108,59,255,0.3)" },
    { name: "Digital Campaigns & ROI", level: "Expert", category: "marketing", glow: "rgba(108,59,255,0.3)" },
    { name: "Meta Ads & GA4 Analytics", level: "Expert", category: "marketing", glow: "rgba(108,59,255,0.3)" },
    { name: "Graphic Design & Identity", level: "Expert", category: "marketing", glow: "rgba(108,59,255,0.3)" },

    // Scientific Research
    { name: "WEFE Nexus Analysis", level: "Research Specialist", category: "research", glow: "rgba(108,59,255,0.5)" },
    { name: "Resource Planning & Eco", level: "Research Specialist", category: "research", glow: "rgba(108,59,255,0.5)" },
    { name: "Biotechnology Industry", level: "Research Specialist", category: "research", glow: "rgba(108,59,255,0.5)" },
    { name: "Fluid Thermodynamics", level: "Research Specialist", category: "research", glow: "rgba(108,59,255,0.5)" },
    { name: "Pyrolysis Engineering", level: "Research Specialist", category: "research", glow: "rgba(108,59,255,0.5)" }
  ];

  const filteredSkills = selectedTechCat === "all"
    ? skillItems
    : skillItems.filter(s => s.category === selectedTechCat);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans selection:bg-primary/20 flex flex-col lg:flex-row relative overflow-x-hidden">
      
      {/* Editorial Blueprint Grid Background */}
      <div className="absolute inset-0 editorial-grid pointer-events-none z-0"></div>
      
      {/* 📱 MOBILE FLOATING TOP CONTROLS */}
      <div className="lg:hidden fixed top-4 right-4 z-50 flex items-center gap-2.5">
        {savedMessages.length > 0 && (
          <button
            onClick={() => setShowMessagesPanel(true)}
            className="relative p-2.5 rounded-2xl border border-border bg-background/85 backdrop-blur-md text-primary transition-all shadow-xl"
            title="Messages Console"
          >
            <MessageSquare className="w-4.5 h-4.5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
              {savedMessages.length}
            </span>
          </button>
        )}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-2xl border border-border bg-background/85 backdrop-blur-md text-foreground transition-all shadow-xl cursor-pointer"
          aria-label="Toggle Theme Mode"
        >
          {isDark ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-primary" />}
        </button>
      </div>

      {/* 🧭 AESTHETIC VERTICAL SIDE DOCK (DESKTOP ONLY) */}
      <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 h-[80vh] w-20 rounded-3xl bg-background/50 backdrop-blur-2xl border border-border flex-col items-center justify-between py-8 px-0 shadow-2xl z-50 transition-all duration-300">
        
        {/* Monogram Top Brand */}
        <div className="flex flex-col items-center gap-3">
          <a href="#hero" className="relative group flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-[1px] transition-all hover:scale-105">
            <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center transition-all group-hover:bg-transparent">
              <span className="font-heading text-sm font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:text-primary-foreground">
                MS
              </span>
            </div>
          </a>
        </div>

        {/* Vertical Icon Anchors */}
        <nav className="flex flex-col items-center gap-5">
          {/* About / Identity */}
          <a href="#about" className="relative group p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all">
            <User className="w-5 h-5" />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-100 dark:text-slate-200 text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-250 pointer-events-none shadow-xl border border-slate-800 dark:border-primary/30">
              01 / Identity About
            </span>
          </a>

          {/* Experience */}
          <a href="#experience" className="relative group p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all">
            <Briefcase className="w-5 h-5" />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-100 dark:text-slate-200 text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-250 pointer-events-none shadow-xl border border-slate-800 dark:border-primary/30">
              02 / Track Record
            </span>
          </a>

          {/* Projects */}
          <a href="#projects" className="relative group p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all">
            <Code className="w-5 h-5" />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-100 dark:text-slate-200 text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-250 pointer-events-none shadow-xl border border-slate-800 dark:border-primary/30">
              03 / Active Systems
            </span>
          </a>

          {/* Research */}
          <a href="#research" className="relative group p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all">
            <FlaskConical className="w-5 h-5" />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-100 dark:text-slate-200 text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-250 pointer-events-none shadow-xl border border-slate-800 dark:border-primary/30">
              04 / Labs Research
            </span>
          </a>

          {/* Skills */}
          <a href="#tech" className="relative group p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all">
            <Sliders className="w-5 h-5" />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-100 dark:text-slate-200 text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-250 pointer-events-none shadow-xl border border-slate-800 dark:border-primary/30">
              05 / Skills Stack
            </span>
          </a>

          {/* Contact */}
          <a href="#contact" className="relative group p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all">
            <Mail className="w-5 h-5" />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-100 dark:text-slate-200 text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-250 pointer-events-none shadow-xl border border-slate-800 dark:border-primary/30">
              06 / Collaborate
            </span>
          </a>
        </nav>

        {/* Bottom Controls / Badges */}
        <div className="flex flex-col items-center gap-3">
          {/* Local message center badge */}
          {savedMessages.length > 0 && (
            <button
              onClick={() => setShowMessagesPanel(true)}
              className="relative p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-primary transition-all"
              title="Sent Messages Console"
            >
              <MessageSquare className="w-4.5 h-4.5" />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                {savedMessages.length}
              </span>
            </button>
          )}

          {/* Theme switch */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-border bg-card/60 hover:bg-muted text-foreground transition-all cursor-pointer"
            aria-label="Toggle Theme Mode"
          >
            {isDark ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-primary" />}
          </button>
        </div>
      </aside>

      {/* 📖 ASYMMETRICAL EDITORIAL LAYOUT WRAPPER */}
      <main className="flex-1 lg:pl-28 w-full transition-all duration-300">


      {/* 1. CINEMATIC HERO SECTION */}
      <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        {/* Abstract Floating Orbs Background */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[160px] pointer-events-none"></div>

        {/* 👤 Premium Blurred Low-Opacity Profile Backdrop */}
        <div className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-full lg:w-[50%] h-[60%] lg:h-[75%] opacity-20 dark:opacity-[0.10] blur-[70px] lg:blur-[110px] pointer-events-none z-0 transition-opacity duration-500">
          <img 
            src={profileImage} 
            alt="Sami Ambient Backdrop" 
            className="w-full h-full object-cover object-center rounded-full scale-105"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-accent text-primary border border-primary/10 text-xs font-semibold w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International Engineering Standard</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight font-heading leading-[1.1]">
                MD <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SAMI</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-foreground/80 leading-relaxed font-heading max-w-2xl">
                Building AI-powered systems, scalable web platforms & research-driven technology for the future.
              </p>
              <p className="text-muted-foreground text-base max-w-xl">
                Full Stack Web Developer · Research Innovator · Product Engineer. Specialist in custom AI integrations, thermodynamical models, and Stripe-like high-performance digital environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 h-14 bg-primary text-primary-foreground font-semibold rounded-2xl flex items-center justify-center gap-2.5 shadow-xl shadow-primary/25 hover:opacity-95 hover:-translate-y-0.5 transition-all group"
              >
                View Elite Projects 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Download CV (Local Storage Mock trigger) */}
              <button
                onClick={() => {
                  alert("Initiating secure CV download process for MD Sami. Technical Dossier bundle packaged successfully.");
                  const link = document.createElement("a");
                  link.href = "#";
                  link.setAttribute("download", "MD_Sami_Technical_CV.pdf");
                  // Trigger mock download
                }}
                className="px-8 h-14 bg-card hover:bg-muted border border-border text-foreground font-semibold rounded-2xl flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-primary" />
                Download CV
              </button>

              <a
                href="#contact"
                className="px-8 h-14 bg-accent/40 border border-primary/10 text-primary font-semibold rounded-2xl flex items-center justify-center hover:bg-accent/80 transition-all hover:-translate-y-0.5"
              >
                Let’s Collaborate
              </a>
            </div>
          </div>

          {/* Hero Visual Right Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Spinning Tech Stack Sphere Card */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-primary/20 via-transparent to-secondary/30 border border-border p-8 backdrop-blur-2xl flex flex-col justify-between shadow-2xl hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                
                {/* Visual Spherical Hologram mockup */}
                <div className="w-full flex justify-center py-6 relative">
                  <div className="w-48 h-48 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center animate-spin" style={{ animationDuration: '30s' }}>
                    <div className="w-36 h-36 rounded-full border border-dashed border-secondary/30 flex items-center justify-center animate-spin" style={{ animationDuration: '15s' }}>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/20 flex items-center justify-center">
                        <Cpu className="w-10 h-10 text-primary animate-pulse" />
                      </div>
                    </div>
                  </div>
                  {/* Floating Badges */}
                  <span className="absolute top-4 left-6 px-3 py-1 bg-background/90 rounded-lg text-xs font-bold border border-border shadow-lg flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500 animate-bounce" /> PyTorch
                  </span>
                  <span className="absolute bottom-6 right-2 px-3 py-1 bg-background/90 rounded-lg text-xs font-bold border border-border shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" /> React
                  </span>
                  <span className="absolute top-24 right-4 px-3 py-1 bg-background/90 rounded-lg text-xs font-bold border border-border shadow-lg flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-secondary" /> SQL
                  </span>
                </div>

                {/* Floating Live Stats Component */}
                <div className="p-4 bg-background/80 rounded-2xl border border-border flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Active Systems</div>
                    <div className="text-xl font-bold font-heading flex items-center gap-1.5 text-primary">
                      {stats.productionSystems}+ Live <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Client Satisfaction</div>
                    <div className="text-xl font-bold font-heading text-secondary">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLL TRUST BAR */}
      <div className="py-6 border-y border-border bg-card/30 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Continuous ticker animation container */}
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-fit">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-12 text-sm font-semibold tracking-wider text-foreground/80">
              <span className="flex items-center gap-3">
                <span className="text-primary font-bold">●</span> Worked with EU & International Clients
              </span>
              <span className="flex items-center gap-3">
                <span className="text-secondary font-bold">●</span> 1st Place National Science Fair Winner
              </span>
              <span className="flex items-center gap-3">
                <span className="text-primary font-bold">●</span> Advanced AI Product Architect
              </span>
              <span className="flex items-center gap-3">
                <span className="text-secondary font-bold">●</span> Remote Engineering Team Lead
              </span>
              <span className="flex items-center gap-3">
                <span className="text-primary font-bold">●</span> Scalable SaaS Strategist
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary shrink-0 animate-pulse" /> Germany · Poland · Bangladesh · Russia
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ABOUT BENTO GRID SECTION */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            01 / Identity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
            Sami's Architecture & Scope
          </h2>
          <p className="text-muted-foreground text-base">
            Not a normal biography. A structural layout of capacities, science foundations, and active systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Who is MD Sami */}
          <div className="md:col-span-2 rounded-[32px] border border-border bg-card/45 p-8 flex flex-col md:flex-row gap-8 items-center justify-between hover:border-primary/30 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold font-heading">Who You Collaborate With</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I am MD Sami, a systems architect and scientific researcher pursuing advanced studies at <strong className="text-foreground">Saint Petersburg Electrotechnical University LETI</strong> (Russia), building upon a rigorous academic foundation from <strong className="text-foreground">Govt. Syed Hatem Ali College</strong> (Bangladesh).
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                My expertise lies at the intersection of high-performance software engineering, artificial neural networks, and sustainable green technology. I specialize in designing highly resilient backend systems and deploying scalable mathematical algorithms that bridge the gap between digital innovation and physical chemistry.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-primary pt-2">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-secondary shrink-0" /> St. Petersburg, RU</span>
                <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-secondary shrink-0" /> Saint Petersburg Electrotechnical University LETI</span>
              </div>
            </div>
            
            {/* Avatar block with border styling */}
            <div className="relative w-36 h-36 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-primary to-secondary p-[1px] shadow-lg">
                <img
                  src={profileImage}
                  alt="MD Sami"
                  className="w-full h-full object-cover rounded-[27px] bg-background grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Countries worked with */}
          <div className="rounded-[32px] border border-border bg-card/45 p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
            <div className="space-y-4 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" /> Global Relations
                </h3>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Proven developer executing production modules for stakeholders across EU and international networks.
                </p>
              </div>

              {/* Graphic Flag Indicators */}
              <div className="space-y-2.5 pt-4">
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-background/60 border border-border text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-black border border-emerald-500/25 flex items-center justify-center shrink-0">BD</span>
                    <span>Bangladesh (Native)</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Base</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-background/60 border border-border text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 text-[9px] font-black border border-blue-500/25 flex items-center justify-center shrink-0">RU</span>
                    <span>Russia (University LETI)</span>
                  </div>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Study</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-background/60 border border-border text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 text-[9px] font-black border border-amber-500/25 flex items-center justify-center shrink-0">EU</span>
                    <span>Germany / Poland / EU</span>
                  </div>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-widest">Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Scientific Research Focus */}
          <div className="rounded-[32px] border border-border bg-card/45 p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="space-y-4 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading">Chemical & Green Energy Systems</h3>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Designing hardware prototypes that solve existential planetary challenges. Focused on clean water synthesis and pyrolysis conversion pathways.
                </p>
              </div>
              
              <div className="flex items-center gap-2 pt-4">
                <span className="px-2.5 py-1 rounded-lg bg-background border border-border text-[10px] font-bold">Atmospheric Synthesis</span>
                <span className="px-2.5 py-1 rounded-lg bg-background border border-border text-[10px] font-bold">Eco Pyrolysis</span>
              </div>
            </div>
          </div>

          {/* Card 4: Current Mission */}
          <div className="rounded-[32px] border border-border bg-card/45 p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="space-y-4 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading">Neural Networks in EdTech</h3>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Integrating machine learning architecture to adapt syllabus modules dynamically according to a student's biological speed of assimilation.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <span className="px-2.5 py-1 rounded-lg bg-background border border-border text-[10px] font-bold text-primary">PyTorch Models</span>
                <span className="px-2.5 py-1 rounded-lg bg-background border border-border text-[10px] font-bold text-secondary">Adaptive ML</span>
              </div>
            </div>
          </div>

          {/* Card 5: Core Mastered Tech */}
          <div className="rounded-[32px] border border-border bg-card/45 p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="space-y-4 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary mb-4 border border-primary/10">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading">Mastered Platforms</h3>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Full Stack React frameworks combined with asynchronous Node API services and highly efficient database clusters.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 pt-4">
                {["Next.js", "TypeScript", "NodeJS", "Prisma", "Postgres"].map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-background border border-border text-[10px] font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE */}
      <section id="experience" className="py-24 bg-card/15 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              02 / Track Record
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
              Engineering Experience
            </h2>
            <p className="text-muted-foreground text-base">
              Executing clean interfaces and robust systems architectures for international firms.
            </p>
          </div>

          <div className="relative border-l-2 border-border pl-6 ml-4 space-y-12 max-w-3xl">
            {/* Experience item 0: RizQara Science and Innovation Club */}
            <div className="relative group animate-fade-in">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform"></div>
              
              <div className="space-y-3 bg-card/45 p-6 rounded-2xl border border-border hover:border-primary/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-heading">RizQara Science and Innovation Club</h3>
                    <p className="text-sm font-semibold text-primary">Mentor - Tech, AI & Code</p>
                  </div>
                  <span className="px-3.5 py-1 bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">
                    2026 - Present
                  </span>
                </div>
                
                <div className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                  <span>Remote / Global</span>
                </div>
                
                <ul className="text-muted-foreground text-xs space-y-1.5 list-disc pl-4 mt-2 leading-relaxed">
                  <li><strong>Mentorship:</strong> Guiding aspiring students and members in core concepts of software development, artificial intelligence, and scientific innovation.</li>
                  <li><strong>Technical Workshops:</strong> Conducting code-alongs and technical seminars focusing on modern AI tools and systems architecture.</li>
                  <li><strong>Project Leadership:</strong> Overseeing cross-disciplinary technical projects, ensuring robust code quality and practical real-world applications.</li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Artificial Intelligence", "Mentorship", "Software Engineering", "Tech Leadership", "Code Optimization"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-background text-[10px] font-bold border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience item 1: RizQara Tech - Marketing Specialist */}
            <div className="relative group animate-fade-in">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform"></div>
              
              <div className="space-y-3 bg-card/45 p-6 rounded-2xl border border-border hover:border-primary/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-heading">RizQara Tech</h3>
                    <p className="text-sm font-semibold text-primary">Marketing Specialist (Part-time · Hybrid)</p>
                  </div>
                  <span className="px-3.5 py-1 bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">
                    Feb 2025 - Present · 1 yr 4 mos
                  </span>
                </div>
                
                <div className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                  <span>Bangladesh</span>
                </div>
                
                <ul className="text-muted-foreground text-xs space-y-1.5 list-disc pl-4 mt-2 leading-relaxed">
                  <li><strong>Campaigns:</strong> Planned and executed multi-channel digital marketing campaigns (Social Media, Email, SEO) to drive brand growth and lead generation.</li>
                  <li><strong>Analytics:</strong> Analyzed campaign performance using Google Analytics and Meta Ads Manager to optimize ad spend and improve ROI.</li>
                  <li><strong>Content:</strong> Created engaging content and high-converting copy for landing pages and target audiences.</li>
                  <li><strong>Collaboration:</strong> Partnered with sales and design teams to align marketing efforts with business revenue goals.</li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Digital Marketing", "SEO", "Google Analytics", "Meta Ads", "Content Marketing", "Branding"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-background text-[10px] font-bold border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience item 2: RizQara Tech - Web Developer */}
            <div className="relative group animate-fade-in">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-secondary group-hover:scale-125 transition-transform"></div>
              
              <div className="space-y-3 bg-card/45 p-6 rounded-2xl border border-border hover:border-secondary/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-heading">RizQara Tech</h3>
                    <p className="text-sm font-semibold text-secondary">Web Developer (Remote)</p>
                  </div>
                  <span className="px-3.5 py-1 bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">
                    Jan 2024 - Present · 2 yrs 5 mos
                  </span>
                </div>
                
                <div className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                  <span>Dhaka, Bangladesh</span>
                </div>
                
                <ul className="text-muted-foreground text-xs space-y-1.5 list-disc pl-4 mt-2 leading-relaxed">
                  <li>Built responsive websites, landing pages, and custom web solutions using modern frontend tools.</li>
                  <li>Improved page speed, mobile usability, and conversion-focused UX.</li>
                  <li>Developed e-commerce and business websites for clients.</li>
                  <li>Worked remotely with international stakeholders and delivered on deadlines.</li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Web Development", "React.js", "Frontend", "Page Speed Optimization", "Mobile UX", "E-commerce"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-background text-[10px] font-bold border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience item 3: THAUMATEC TECH GROUP */}
            <div className="relative group animate-fade-in">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform"></div>
              
              <div className="space-y-3 bg-card/45 p-6 rounded-2xl border border-border hover:border-primary/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-heading">THAUMATEC TECH GROUP</h3>
                    <p className="text-sm font-semibold text-primary">Web Developer (Contract)</p>
                  </div>
                  <span className="px-3.5 py-1 bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">
                    Apr 2024 - Dec 2024 · 9 mos
                  </span>
                </div>
                
                <div className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                  <span>Wrocław, Dolnośląskie, Poland · Remote</span>
                </div>
                
                <ul className="text-muted-foreground text-xs space-y-1.5 list-disc pl-4 mt-2 leading-relaxed">
                  <li>Developed and maintained full-stack web applications for SME clients across Poland and the EU market.</li>
                  <li>Built admin dashboards, CRM platforms, and reporting systems using React.js and Node.js.</li>
                  <li>Collaborated with distributed teams in Agile sprints using Jira and async communication across time zones.</li>
                  <li>Delivered 3 production-ready platforms on schedule while maintaining strong code quality and performance standards.</li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["React.js", "Node.js", "Full-Stack Dev", "Dashboards & CRM", "Agile Sprints", "Jira"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-background text-[10px] font-bold border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience item 4: Capgemini */}
            <div className="relative group animate-fade-in">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-secondary group-hover:scale-125 transition-transform"></div>
              
              <div className="space-y-3 bg-card/45 p-6 rounded-2xl border border-border hover:border-secondary/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-heading">Capgemini</h3>
                    <p className="text-sm font-semibold text-secondary">Web Developer (Part-time)</p>
                  </div>
                  <span className="px-3.5 py-1 bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">
                    Feb 2024 - Nov 2024 · 10 mos
                  </span>
                </div>
                
                <div className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                  <span>France · Remote</span>
                </div>
                
                <ul className="text-muted-foreground text-xs space-y-1.5 list-disc pl-4 mt-2 leading-relaxed">
                  <li>Developed and maintained full-stack web applications for SME clients across Germany and the EU market.</li>
                  <li>Built custom admin dashboard systems, CRM modules, and automated reporting tools using React and Node.js.</li>
                  <li>Collaborated directly with a European product team using Agile sprints, Jira, and daily stand-ups across time zones.</li>
                  <li>Delivered 3 production-ready platforms on schedule, receiving commendations for code quality and communication.</li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Full-Stack Dev", "React.js", "Node.js", "CRM Modules", "Distributed Teams", "EU Stakeholders"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-background text-[10px] font-bold border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION (MOST IMPORTANT) */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            03 / Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
            Elite Project Architectures
          </h2>
          <p className="text-muted-foreground text-base">
            Detailed, fully featured components showing systems depth and interactive demonstration panels.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Project 1: Admission Bondhu */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase rounded-lg border border-primary/20">
                  National Champion
                </span>
                <span className="text-xs font-semibold text-muted-foreground">Education AI System</span>
              </div>
              
              <h3 className="text-3xl font-bold font-heading">Admission Bondhu</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                An advanced AI recommendation system that matches students with perfect university pathways, scholarship tracks, and personalized curriculum models based on academic analytics and interest profiles.
              </p>

              {/* Metric Highlight Box */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-card border border-border">
                <div>
                  <div className="text-2xl font-black font-heading text-primary">1st Prize</div>
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">National Science Fair</div>
                </div>
                <div>
                  <div className="text-2xl font-black font-heading text-secondary">99.4%</div>
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">Syllabus Match Rate</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["AI recommendation", "adaptive learning", "scholarship mapping"].map(f => (
                  <span key={f} className="px-2.5 py-1 bg-accent/40 text-primary rounded-lg text-xs font-semibold border border-primary/5">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Recommendation Sandbox */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-[32px] border border-border bg-card/65 backdrop-blur-xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <h4 className="text-lg font-bold font-heading mb-4 flex items-center gap-2 text-primary">
                  <Sliders className="w-5 h-5" /> Try Admission Bondhu Sandbox
                </h4>
                <p className="text-xs text-muted-foreground mb-6">
                  Enter your core academic dream or interests below (e.g. "sustainable energy" or "software development") to trigger Sami's AI recommendation engine.
                </p>

                <form onSubmit={getBondhuGuidance} className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userIntention}
                      onChange={(e) => setUserIntention(e.target.value)}
                      placeholder="e.g. software developer, environment science"
                      className="flex-1 px-4 h-12 bg-background border border-border rounded-xl text-xs font-semibold text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                    <button
                      type="submit"
                      className="px-6 h-12 bg-primary text-primary-foreground text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
                    >
                      Search AI Guidance
                    </button>
                  </div>
                </form>

                {bondhuRecommendation && (
                  <div className="mt-6 p-5 bg-background border border-primary/20 rounded-2xl animate-fade-in space-y-3.5">
                    <div className="flex justify-between items-center border-b border-border pb-2.5">
                      <span className="text-[10px] text-muted-foreground uppercase font-black tracking-wider">AI Analysis Result</span>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded text-[10px] font-bold">
                        Fit Probability: {bondhuRecommendation.probability}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Recommended Major</div>
                        <div className="text-xs font-bold text-foreground mt-0.5">{bondhuRecommendation.subject}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Optimized Pathway</div>
                        <div className="text-xs font-bold text-primary mt-0.5">{bondhuRecommendation.pathway}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Funding Match</div>
                        <div className="text-xs font-bold text-secondary mt-0.5">{bondhuRecommendation.scholarship}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project 2: Pengu */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sandbox Side (Toggle demo) */}
            <div className="lg:col-span-6 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 bg-secondary/10 text-secondary text-[10px] font-extrabold uppercase rounded-lg border border-secondary/20">
                    Product Architecture
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">Tutor matching SaaS platform</span>
                </div>
                
                <h3 className="text-3xl font-bold font-heading">Pengu EdTech</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A high-fidelity tutor matching ecosystem and reward gateway featuring a customizable light/dark preview system, dedicated tutor performance boards, and a neural matching engine.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["SaaS Ecosystem", "Dual Mode UI Theme", "Interactive tutor matching"].map(f => (
                    <span key={f} className="px-2.5 py-1 bg-accent/40 text-primary rounded-lg text-xs font-semibold border border-primary/5">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Live UI Preview */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="p-8 rounded-[32px] border border-border bg-card/65 backdrop-blur-xl relative shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  </div>
                  
                  {/* Preview UI theme switcher inside the card */}
                  <div className="flex items-center gap-2 p-1 bg-background border border-border rounded-xl">
                    <button
                      onClick={() => setPenguPreviewDark(false)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${!penguPreviewDark ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted'}`}
                    >
                      Light View
                    </button>
                    <button
                      onClick={() => setPenguPreviewDark(true)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${penguPreviewDark ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted'}`}
                    >
                      Dark View
                    </button>
                  </div>
                </div>

                {/* Simulated interface */}
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${penguPreviewDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                  <div className="flex justify-between items-center border-b pb-3 mb-4 border-slate-700/30">
                    <span className="font-heading font-black text-sm text-primary tracking-wide">PENGU.IO</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[9px] rounded font-bold">120 tutors online</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-primary">AS</div>
                        <div>
                          <div className="text-[10px] font-bold">Alex Schmidt</div>
                          <div className="text-[8px] text-muted-foreground">Physics Specialist (Saint Petersburg)</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-primary">$45/hr</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-xs text-secondary">MS</div>
                        <div>
                          <div className="text-[10px] font-bold">MD Sami (Lead)</div>
                          <div className="text-[8px] text-muted-foreground">Thermodynamics Lab Expert</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-secondary">Matched ⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: ElevateCV */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase rounded-lg border border-primary/20">
                  Career Intelligence
                </span>
                <span className="text-xs font-semibold text-muted-foreground">ATS Optimization Platform</span>
              </div>
              
              <h3 className="text-3xl font-bold font-heading">ElevateCV</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                A premium builder that leverages neural NLP processors to optimize curriculum achievements. It helps developers pass ATS filters by evaluating language impact, vocabulary depth, and framework keyword weight.
              </p>

              <div className="flex flex-wrap gap-2">
                {["ATS Evaluation", "NLP Semantic Scoring", "Resume Engineering"].map(f => (
                  <span key={f} className="px-2.5 py-1 bg-accent/40 text-primary rounded-lg text-xs font-semibold border border-primary/5">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* ATS Live Score Optimizer Sandbox */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-[32px] border border-border bg-card/65 backdrop-blur-xl relative overflow-hidden shadow-xl space-y-4">
                <h4 className="text-lg font-bold font-heading flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" /> Test ElevateCV ATS Engine
                </h4>
                <p className="text-xs text-muted-foreground">
                  Paste or draft an engineering resume bullet below to simulate real-time ATS optimization scoring.
                </p>

                <div className="space-y-4">
                  <textarea
                    value={atsBullet}
                    onChange={(e) => setAtsBullet(e.target.value)}
                    placeholder="e.g. Developed software code. (Try adding numbers: Optimized API query speed by 45% using Postgres Prisma indexes.)"
                    rows={3}
                    className="w-full p-4 bg-background border border-border rounded-xl text-xs font-semibold text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  ></textarea>

                  <button
                    onClick={checkAtsScore}
                    className="w-full h-12 bg-primary text-primary-foreground text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
                  >
                    Analyze ATS Impact Score
                  </button>

                  {atsScore > 0 && (
                    <div className="p-5 bg-background border border-border rounded-2xl space-y-3.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">ATS Score</span>
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-black ${atsScore >= 80 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                          {atsScore} / 100
                        </span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${atsScore >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                          style={{ width: `${atsScore}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Feedback:</strong> {atsFeedback}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. RESEARCH & INNOVATION SECTION */}
      <section id="research" className="py-24 bg-card/25 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              04 / Lab & Thesis
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
              Scientific Innovation Labs
            </h2>
            <p className="text-muted-foreground text-base">
              Explore custom simulators for Sami's active ecological and neural computing research prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1: Atmospheric Water Generator */}
            <div className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/30 transition-all shadow-md group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-blue-500 uppercase font-extrabold tracking-widest bg-blue-500/5 px-2.5 py-1 rounded-lg">Eco System</span>
                </div>
                <h3 className="text-xl font-bold font-heading">Atmospheric Water Generator</h3>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Design prototype that synthesizes mineralized drinking water from atmospheric moisture particles using dynamic dewpoint temperature condensation.
                </p>

                {/* Simulator controls */}
                <div className="mt-6 p-4 rounded-xl bg-card border border-border space-y-3.5">
                  <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground">
                    <span>Humidity (RH%)</span>
                    <span className="text-foreground">{awgRh}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={awgRh}
                    onChange={(e) => setAwgRh(parseInt(e.target.value))}
                    className="w-full accent-primary h-1 rounded-lg bg-muted appearance-none cursor-pointer"
                  />

                  <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground">
                    <span>Air Temp</span>
                    <span className="text-foreground">{awgTemp}°C</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="45"
                    value={awgTemp}
                    onChange={(e) => setAwgTemp(parseInt(e.target.value))}
                    className="w-full accent-primary h-1 rounded-lg bg-muted appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 mt-6 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Estimated Water Yield:</span>
                <span className="text-base font-black text-primary">{awgLiters} Liters/day</span>
              </div>
            </div>

            {/* Box 2: Plastic Waste to Fuel */}
            <div className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/30 transition-all shadow-md group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Flame className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-emerald-500 uppercase font-extrabold tracking-widest bg-emerald-500/5 px-2.5 py-1 rounded-lg font-heading">Pyrolysis Research</span>
                </div>
                <h3 className="text-xl font-bold font-heading">Plastic Pyrolysis Yield</h3>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Ecological research translating high-density polyethylene waste into premium fuel oil distillates via controlled thermal cracking and condensing.
                </p>

                {/* Calculator widget */}
                <div className="mt-6 p-4 rounded-xl bg-card border border-border space-y-3.5">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Input Plastic Weight (KG)</div>
                  <input
                    type="number"
                    value={plasticInput}
                    onChange={(e) => setPlasticInput(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 h-10 bg-background border border-border rounded-lg text-xs font-semibold text-foreground focus:outline-none"
                  />
                  <div className="text-[9px] text-muted-foreground leading-normal">
                    * HDPE conversion averages an 82% volumetric efficiency yield under anaerobic standard conditions.
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 mt-6 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Fuel Distillate:</span>
                <span className="text-base font-black text-emerald-500">{fuelOutput} Liters</span>
              </div>
            </div>

            {/* Box 3: AI Education Systems */}
            <div className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/30 transition-all shadow-md group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-purple-500 uppercase font-extrabold tracking-widest bg-purple-500/5 px-2.5 py-1 rounded-lg">Neural Computation</span>
                </div>
                <h3 className="text-xl font-bold font-heading">AI Adaptive Model Training</h3>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Building deep learning model architectures optimized to adjust individual educational speeds, matching curriculum nodes to user cognitive scores.
                </p>

                {/* Model training widget */}
                <div className="mt-6 p-4 rounded-xl bg-card border border-border space-y-3.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-muted-foreground text-[10px]">Training Epoch:</span>
                    <span className="font-bold text-foreground">{epochNum} / 10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-muted-foreground text-[10px]">Model Loss:</span>
                    <span className="font-bold text-red-500">{epochLoss}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-muted-foreground text-[10px]">Prediction Acc:</span>
                    <span className="font-bold text-emerald-500">{(epochAcc * 100).toFixed(1)}%</span>
                  </div>

                  <button
                    onClick={runModelTraining}
                    disabled={isRunningEpochs}
                    className="w-full h-9 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRunningEpochs ? 'animate-spin' : ''}`} />
                    {isRunningEpochs ? "Fitting Weights..." : "Run Epoch Simulations"}
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 mt-6 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Model Status:</span>
                <span className={`text-xs font-bold ${epochAcc >= 0.85 ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {epochAcc >= 0.85 ? "Optimal Weights Locked" : "Underfitting - Train More"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TECH STACK SECTION */}
      <section id="tech" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            05 / Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
            Technologies & Frameworks
          </h2>
          <p className="text-muted-foreground text-base">
            Click categories below to filter Sami's specialized skills stack with precise diagnostic ratings.
          </p>
        </div>

        {/* Categories Tab selectors */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {techCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedTechCat(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${selectedTechCat === cat.id ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25' : 'bg-card border-border hover:bg-muted text-muted-foreground'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cluster items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map(skill => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl border border-border bg-card/30 flex flex-col justify-between group hover:border-primary/20 transition-all hover:-translate-y-0.5 relative overflow-hidden"
              style={{
                boxShadow: `0 0 15px rgba(0, 0, 0, 0.01)`
              }}
            >
              {/* Subtle hover background glow */}
              <div
                className="absolute -inset-full bg-gradient-to-tr from-transparent via-transparent to-primary/5 transition-all group-hover:inset-0"
                style={{ transitionDuration: '0.6s' }}
              ></div>

              <div className="space-y-1.5 relative z-10">
                <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{skill.category}</span>
                <h4 className="font-heading font-bold text-sm text-foreground">{skill.name}</h4>
              </div>

              <div className="mt-4 pt-3.5 border-t border-border/50 flex justify-between items-center relative z-10">
                <span className="text-[9px] text-muted-foreground uppercase font-black tracking-wider">Proficiency</span>
                <span className="text-[10px] font-extrabold text-primary">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CERTIFICATIONS */}
      <section className="py-24 bg-card/15 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              06 / Validation
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
              Holographic Certificates
            </h2>
            <p className="text-muted-foreground text-base">
              Verified global credentials in Artificial Intelligence, Full-Stack Engineering, Data Analytics, and Sustainable Systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                provider: "NVIDIA",
                title: "Getting Started with AI on Jetson Nano",
                date: "Issued Apr 2026",
                code: "_SMMCkJuTvGTGRZ4HPswog",
                desc: "Edge AI hardware integration, deep learning models training, and ResNet-18 deployment.",
                skills: ["NVIDIA AI", "Artificial Intelligence (AI)", "Edge AI", "Neural Networks"],
                glow: "rgba(118,185,0,0.25)" // NVIDIA Green
              },
              {
                provider: "Microsoft",
                title: "Microsoft Full-Stack Developer",
                date: "Issued Jan 2026",
                code: "Verified",
                desc: "Full-Stack Development, frontend JavaScript/HTML frameworks, custom database architectures, and ASP.NET backends.",
                skills: ["HTML", "JavaScript", "ASP.NET", "Full-Stack Dev", "Databases"],
                glow: "rgba(0,164,239,0.25)" // Microsoft Blue
              },
              {
                provider: "Google",
                title: "Google Data Analysis with Python",
                date: "Issued Apr 2025",
                code: "Verified",
                desc: "Scientific computing, dataset manipulation, and deep programmatic analysis with Python.",
                skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Business Analysis"],
                glow: "rgba(66,133,244,0.25)" // Google Blue
              },
              {
                provider: "Semrush",
                title: "Content-Led SEO with Brian Dean",
                date: "Issued Apr 2026 · Expires Apr 2027",
                code: "750068",
                desc: "High-authority content mapping, on-page optimization, and organic SEO architecture to drive site conversion.",
                skills: ["SEO", "E-commerce SEO", "On-Page Optimization", "Organic Search"],
                glow: "rgba(255,102,0,0.25)" // Semrush Orange
              },
              {
                provider: "FAO (United Nations)",
                title: "WEFE Nexus in Agriculture",
                date: "Issued Apr 2026",
                code: "0683390617MS",
                desc: "Comprehensive study of the Water-Energy-Food-Ecosystem (WEFE) nexus for sustainable resource planning in agriculture.",
                skills: ["WEFE Nexus", "Resource Planning", "Ecosystem Sustainability", "Agriculture"],
                glow: "rgba(0,150,214,0.25)" // UN Blue
              },
              {
                provider: "Saylor University",
                title: "CS250: Python for Data Science",
                date: "Issued Mar 2026",
                code: "3522050965MS",
                desc: "Intensive 67-hour scientific computing program, completed with 92.47% distinction grade.",
                skills: ["Python", "Pandas", "Data Manipulation", "Scientific Computing"],
                glow: "rgba(91,37,133,0.25)" // Saylor Purple
              },
              {
                provider: "FutureLearn",
                title: "Advanced Remote Sensing Archaeology",
                date: "Issued Apr 2026",
                code: "Durham / Oxford Modules",
                desc: "Archaeometry, landscape conservation, and satellite remote sensing archaeology across Oxford and Durham modules.",
                skills: ["Remote Sensing", "Archaeometry", "Landscape Conservation", "Heritage"],
                glow: "rgba(230,0,126,0.20)" // FutureLearn Pink
              },
              {
                provider: "FutureLearn",
                title: "Blue Biotechnology Entrepreneurship",
                date: "Issued Apr 2026",
                code: "Verified",
                desc: "Biotechnology industry development, blue bio-economy concepts, and scientific translation to product impact.",
                skills: ["Biotechnology", "Biotech Industry", "Entrepreneurship", "Innovation"],
                glow: "rgba(0,180,216,0.20)" // Ocean Sky
              },
              {
                provider: "Siemens",
                title: "Basics of Robotics",
                date: "Issued May 2026",
                code: "Verified",
                desc: "Fundamental concepts of industrial robotics, kinematics, robotic actuators, and automation architectures.",
                skills: ["Robotics", "Automation", "Siemens Systems", "Industrial Engineering"],
                glow: "rgba(0,153,153,0.25)" // Siemens Teal
              },
              {
                provider: "Google",
                title: "Google Digital Marketing & E-commerce",
                date: "Issued Feb 2025",
                code: "Verified",
                desc: "Multi-channel marketing automation, search engine optimization, email campaigns, customer journeys, and e-commerce analytics.",
                skills: ["Digital Marketing", "E-commerce", "SEO", "Customer Journeys", "Google Ads"],
                glow: "rgba(244,180,0,0.25)" // Google Yellow
              },
              {
                provider: "University of London",
                title: "Understanding Research Methods",
                date: "Issued Apr 2026",
                code: "Verified",
                desc: "Scientific research design, logic frameworks, quantitative methods, data analysis validation, and academic writing.",
                skills: ["Research Methods", "Scientific Method", "Data Validation", "Quantitative Research"],
                glow: "rgba(0,43,91,0.25)" // Navy Blue
              },
              {
                provider: "University of Tasmania",
                title: "Climate Change",
                date: "Issued Mar 2026",
                code: "Verified",
                desc: "Atmospheric mechanics, global climate modeling, sustainable energy transition, and ecological preservation strategies.",
                skills: ["Climate Change", "Environmental Science", "Sustainability", "Ecological Modeling"],
                glow: "rgba(224,0,52,0.20)" // UTAS Red
              }
            ].map((cert, index) => (
              <div
                key={cert.title + index}
                className="p-6 rounded-[24px] border border-border bg-card/45 relative overflow-hidden group hover:border-primary/20 transition-all flex flex-col justify-between min-h-[220px] shadow-sm hover:scale-[1.01] hover:-translate-y-0.5 duration-300"
                style={{
                  boxShadow: `0 0 20px rgba(0, 0, 0, 0.02)`
                }}
              >
                {/* Holographic Glowing Hover effect using custom colors */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 20%, ${cert.glow}, transparent 65%)`
                  }}
                ></div>

                <div className="space-y-3.5 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[9px] text-primary font-black uppercase tracking-widest">{cert.provider}</span>
                      <h3 className="font-heading font-bold text-sm text-foreground leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  </div>

                  {cert.desc && (
                    <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2">
                      {cert.desc}
                    </p>
                  )}

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-background border border-border/60 text-[9px] text-foreground font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 border-t border-border/40 pt-3 relative z-10">
                  <span className="text-[9px] text-muted-foreground font-semibold">{cert.date}</span>
                  <span className="font-mono text-[9px] bg-muted px-2 py-0.5 rounded text-foreground font-semibold">
                    ID: {cert.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ACHIEVEMENTS SECTION (WITH ANIMATED COUNTERS) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2 p-6 rounded-2xl bg-card/30 border border-border">
            <div className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {stats.productionSystems}+
            </div>
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              Production Systems Active
            </div>
          </div>
          <div className="text-center space-y-2 p-6 rounded-2xl bg-card/30 border border-border">
            <div className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {stats.intlOrganizations}+
            </div>
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              International Clients Served
            </div>
          </div>
          <div className="text-center space-y-2 p-6 rounded-2xl bg-card/30 border border-border">
            <div className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {stats.scienceFair}st
            </div>
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              Place National Science Fair
            </div>
          </div>
          <div className="text-center space-y-2 p-6 rounded-2xl bg-card/30 border border-border">
            <div className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {stats.globalResearch}+
            </div>
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              Global Ecological Projects
            </div>
          </div>
        </div>
      </section>

      {/* 10. EDUCATION SECTION */}
      <section className="py-24 bg-card/15 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              07 / Academic
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
              Education & Research Institutions
            </h2>
            <p className="text-muted-foreground text-base">
              Academic foundations in biotechnical systems, physical sciences, and computer systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* University 1: Saint Petersburg LETI */}
            <div 
              onClick={() => setEducationDetail('leti')}
              className="p-0 rounded-[32px] border border-border bg-background relative overflow-hidden group hover:border-primary/30 transition-all flex flex-col justify-between min-h-[380px] shadow-sm cursor-pointer hover:scale-[1.01] hover:-translate-y-1 hover:shadow-md duration-350"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={letiImage} 
                    alt="Saint Petersburg Electrotechnical University LETI" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30"></div>
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-md text-[9px] text-white uppercase font-black tracking-widest rounded-lg border border-white/10">
                    St. Petersburg, Russia
                  </span>
                </div>
                
                <div className="p-6.5 space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-heading font-bold text-lg text-foreground leading-tight">
                      Saint Petersburg Electrotechnical University LETI
                    </h3>
                    <BookOpen className="w-5.5 h-5.5 text-primary shrink-0 mt-0.5" />
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Focusing on Biotechnical Systems and Technologies, combining sensory electronics, biological systems simulation, and neural computation algorithms.
                  </p>
                </div>
              </div>

              <div className="p-6.5 pt-0 flex justify-between items-center border-t border-border/40 mt-4">
                <span className="text-[9px] text-primary font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all group-hover:underline">
                  Academic Subpage <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-extrabold text-foreground bg-muted px-2.5 py-1 rounded-lg">State Research Fellow</span>
              </div>
            </div>

            {/* University 2: Govt. Syed Hatem Ali College */}
            <div 
              onClick={() => setEducationDetail('hatem')}
              className="p-0 rounded-[32px] border border-border bg-background relative overflow-hidden group hover:border-secondary/30 transition-all flex flex-col justify-between min-h-[380px] shadow-sm cursor-pointer hover:scale-[1.01] hover:-translate-y-1 hover:shadow-md duration-350"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hatemImage} 
                    alt="Govt. Syed Hatem Ali College" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30"></div>
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-md text-[9px] text-white uppercase font-black tracking-widest rounded-lg border border-white/10">
                    Barisal, Bangladesh
                  </span>
                </div>
                
                <div className="p-6.5 space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-heading font-bold text-lg text-foreground leading-tight">
                      Govt. Syed Hatem Ali College
                    </h3>
                    <Award className="w-5.5 h-5.5 text-secondary shrink-0 mt-0.5" />
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Science Division academic foundations. Completed Higher Secondary education with honors, with a key focus on mathematics, chemistry, and algorithmic reasoning.
                  </p>
                </div>
              </div>

              <div className="p-6.5 pt-0 flex justify-between items-center border-t border-border/40 mt-4">
                <span className="text-[9px] text-secondary font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all group-hover:underline">
                  Academic Subpage <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-extrabold text-foreground bg-muted px-2.5 py-1 rounded-lg">High Excellence Distinction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. GLOBAL LANGUAGES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            08 / Linguistics
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading">
            Multilingual Proficiency
          </h2>
          <p className="text-muted-foreground text-base">
            Sami's verbal architecture across regional and academic coordinates.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { lang: "Bengali", level: "Native Proficiency", score: 100, code: "BN", color: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-500/25", textColor: "text-emerald-500" },
            { lang: "English", level: "Professional C1", score: 95, code: "EN", color: "from-blue-500/10 to-indigo-500/10", border: "border-blue-500/25", textColor: "text-blue-500" },
            { lang: "German", level: "Intermediate A2", score: 45, code: "DE", color: "from-amber-500/10 to-yellow-500/10", border: "border-amber-500/25", textColor: "text-amber-500" },
            { lang: "Russian", level: "Advanced B2", score: 80, code: "RU", color: "from-red-500/10 to-rose-500/10", border: "border-red-500/25", textColor: "text-red-500" },
            { lang: "French", level: "Elementary A1", score: 30, code: "FR", color: "from-purple-500/10 to-fuchsia-500/10", border: "border-purple-500/25", textColor: "text-purple-500" }
          ].map(language => (
            <div key={language.lang} className="p-6 rounded-[24px] border border-border bg-card/30 text-center space-y-4 hover:border-primary/20 hover:scale-[1.02] transition-all flex flex-col justify-between duration-300">
              <div className="flex justify-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${language.color} ${language.border} flex items-center justify-center border font-heading font-black text-xs ${language.textColor} shadow-inner`}>
                  {language.code}
                </div>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base text-foreground">{language.lang}</h3>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-semibold">{language.level}</p>
              </div>

              {/* Progress Bar indicator */}
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${language.score}%` }}></div>
                </div>
                <div className="text-[9px] text-muted-foreground text-right">{language.score}% Fluency</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. LUXURY CONTACT SECTION (WITH LOCALSTORAGE BACKED MESSAGE INBOX) */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left panel: Info & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.25 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                09 / Collaborate
              </div>
              <h2 className="text-4xl sm:text-5xl font-black font-heading leading-tight">
                Let's Code the Future.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Have a complex enterprise systems deployment, a research paper proposal, or need a robust SaaS application architected? Send a diagnostic request using the active client console.
              </p>
            </div>

            {/* Quick Contact cards */}
            <div className="space-y-3.5 max-w-md">
              <a
                href="mailto:absami602@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:bg-muted transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[9px] text-muted-foreground uppercase font-bold">Secure Mail</div>
                  <div className="text-xs font-bold text-foreground">absami602@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/8801577180519"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:bg-muted transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[9px] text-muted-foreground uppercase font-bold">WhatsApp Direct</div>
                  <div className="text-xs font-bold text-foreground">01577180519 ( Bangladesh )</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/mdsamidev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdsami-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/aurangzeb.sami/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8801577180519"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted border border-border rounded-xl hover:bg-emerald-500 hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right panel: Active Client Form console */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-[32px] border border-border bg-card/45 backdrop-blur-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-primary" /> Active Contact Console
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-muted-foreground uppercase font-bold">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Arthur Schmidt"
                      className="w-full px-4 h-12 bg-background border border-border rounded-xl text-xs font-semibold text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-muted-foreground uppercase font-bold">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. arthur@thaumatec.com"
                      className="w-full px-4 h-12 bg-background border border-border rounded-xl text-xs font-semibold text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-muted-foreground uppercase font-bold">System Proposal / Message</label>
                  <textarea
                    value={msgText}
                    onChange={(e) => setMsgText(e.target.value)}
                    placeholder="Describe your technical architecture proposal or contract details..."
                    rows={4}
                    className="w-full p-4 bg-background border border-border rounded-xl text-xs font-semibold text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                {formError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-lg animate-shake">
                    ⚠️ {formError}
                  </div>
                )}

                {formSubmitted && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Message sent successfully! Sami will respond to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-14 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-95 hover:-translate-y-0.5 cursor-pointer'}`}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Processing Proposal...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Encrypted Proposal
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* LUXURY ACTIVE MESSAGES CENTER (MODAL DRAWER) */}
      {showMessagesPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-background/60 backdrop-blur-md">
          {/* Backdrop click close */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setShowMessagesPanel(false)}></div>
          
          <div className="relative w-full max-w-md h-full bg-background border-l border-border shadow-2xl p-6 flex flex-col justify-between animate-slide-in z-10">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <div>
                  <h3 className="font-heading font-black text-lg text-primary">Sami's Local Messages Center</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Your submitted contract proposals stored in this browser session</p>
                </div>
                <button
                  onClick={() => setShowMessagesPanel(false)}
                  className="px-3 py-1.5 border border-border bg-card hover:bg-muted text-[10px] font-bold rounded-lg transition-all cursor-pointer"
                >
                  Close Console
                </button>
              </div>

              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {savedMessages.map(msg => (
                  <div key={msg.id} className="p-4 rounded-xl border border-border bg-card/60 relative space-y-2">
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="absolute top-3 right-3 text-muted-foreground hover:text-red-500 transition-colors cursor-pointer"
                      title="Delete message from memory"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div>
                      <div className="text-[10px] text-muted-foreground font-semibold uppercase">{msg.date}</div>
                      <div className="text-xs font-bold text-foreground mt-0.5">{msg.name}</div>
                      <div className="text-[10px] text-primary font-bold">{msg.email}</div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-2">
                      "{msg.message}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-auto">
              <button
                onClick={() => {
                  if (confirm("Confirm erasing all stored messages from browser?")) {
                    setSavedMessages([]);
                    localStorage.removeItem("sami_messages");
                    setShowMessagesPanel(false);
                  }
                }}
                className="w-full h-10 border border-red-500/20 text-red-500 bg-red-500/5 text-xs font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              >
                Clear all browser messages history
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 13. PREMIUM FOOTER */}
      <footer className="relative bg-card/30 border-t border-border py-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-border pb-12">
            
            {/* Logo, Quote & Monogram */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-primary-foreground font-heading font-black">
                  MS
                </div>
                <span className="font-heading font-black tracking-wide text-foreground">MD SAMI</span>
              </div>
              
              <blockquote className="text-sm font-medium text-foreground/80 italic max-w-md">
                “Engineering systems that merge intelligence, sustainability, and human impact.”
              </blockquote>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-4 md:justify-end text-xs font-semibold text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#research" className="hover:text-primary transition-colors">Research Labs</a>
              <a href="#tech" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Collaborate</a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-muted-foreground">
            <div>
              &copy; 2026 MD SAMI. All Rights Reserved.
            </div>
            
            {/* Developer Mode Interactive Toggle */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Vercel Production Mode Active
              </span>
              
              <button
                onClick={() => {
                  setShowCoreInspector(true);
                  triggerDiagnostics();
                }}
                className="px-2.5 py-1 bg-muted hover:bg-primary/10 hover:text-primary border border-border rounded text-[9px] font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Sliders className="w-3 h-3 text-primary animate-pulse" /> Inspect Core
              </button>
            </div>
          </div>
        </div>
      </footer>
      </main>

      {/* 🎓 DETAILED EDUCATION SUBPAGE VIEWER (FULLSCREEN OVERLAY) */}
      {educationDetail && (
        <div className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl overflow-y-auto animate-fade-in flex flex-col min-h-screen">
          {/* Subtle editorial grid pattern background */}
          <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40 z-0"></div>

          {/* Sticky Header Nav */}
          <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border py-4 px-6 md:px-12 flex justify-between items-center">
            <button 
              onClick={() => setEducationDetail(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:bg-muted text-foreground transition-all text-xs font-bold uppercase tracking-wider cursor-pointer group shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Portfolio
            </button>
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border/40">
              {educationDetail === 'leti' ? "Institution Profile / LETI University" : "Institution Profile / Hatem Ali College"}
            </div>
          </header>

          {/* Subpage Container */}
          <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 py-12 relative z-10 space-y-12">
            
            {/* cover banner image block */}
            <div className="relative rounded-3xl border border-border/80 overflow-hidden shadow-2xl group max-h-[480px]">
              <img 
                src={educationDetail === 'leti' ? letiImage : hatemImage} 
                alt={educationDetail === 'leti' ? "LETI University Campus" : "Hatem Ali College Courtyard"} 
                className="w-full h-[320px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"></div>
              
              {/* Overlay floating tags */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/30">
                  {educationDetail === 'leti' ? "State Research Institution" : "Science Division Honors"}
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight drop-shadow-md">
                  {educationDetail === 'leti' 
                    ? "Saint Petersburg Electrotechnical University LETI" 
                    : "Govt. Syed Hatem Ali College"
                  }
                </h1>
                <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2">
                  <span>{educationDetail === 'leti' ? "St. Petersburg, Russia" : "Barisal, Bangladesh"}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                  <span>{educationDetail === 'leti' ? "Enrollment: 2023 - Present" : "Graduated: 2021"}</span>
                </p>
              </div>
            </div>

            {/* Content Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
              
              {/* Sidebar Metrics (Col 4) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Academic Highlights */}
                <div className="p-6 rounded-2xl border border-border bg-card/50 space-y-5">
                  <h3 className="font-heading font-bold text-sm text-foreground border-b border-border/80 pb-3 flex items-center gap-2">
                    <Award className="w-4.5 h-4.5 text-primary" />
                    Academic Highlights
                  </h3>
                  
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-muted-foreground uppercase font-semibold text-[9px] block">Degree Track</span>
                      <span className="text-foreground font-black text-sm block mt-0.5">
                        {educationDetail === 'leti' 
                          ? "B.Sc. in Biotechnical Systems and Technologies" 
                          : "HSC Science Division Honors"
                        }
                      </span>
                    </div>

                    <div>
                      <span className="text-muted-foreground uppercase font-semibold text-[9px] block">Specialization Focus</span>
                      <span className="text-foreground font-bold block mt-0.5">
                        {educationDetail === 'leti' 
                          ? "Neural Systems, Bio-medical Modeling & Sensory Electronics" 
                          : "Vector Calculus, Organic Chemistry & Algorithmic Principles"
                        }
                      </span>
                    </div>

                    <div>
                      <span className="text-muted-foreground uppercase font-semibold text-[9px] block">Graduation Merit</span>
                      <span className="text-primary font-extrabold block mt-0.5">
                        {educationDetail === 'leti' 
                          ? "Russian State Fellow (Top Honor)" 
                          : "High Excellence Distinction"
                        }
                      </span>
                    </div>

                    <div>
                      <span className="text-muted-foreground uppercase font-semibold text-[9px] block">Language Medium</span>
                      <span className="text-foreground font-bold block mt-0.5">
                        {educationDetail === 'leti' ? "Russian / Scientific English" : "Bengali / English"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Achievements Badges */}
                <div className="p-6 rounded-2xl border border-border bg-card/50 space-y-4">
                  <h3 className="font-heading font-bold text-sm text-foreground border-b border-border/80 pb-3 flex items-center gap-2">
                    <Zap className="w-4.5 h-4.5 text-secondary" />
                    Distinctions & Fellowships
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {educationDetail === 'leti' ? (
                      <>
                        <span className="text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-lg">State Research Fellow</span>
                        <span className="text-[10px] font-bold bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-1 rounded-lg">AWG Condenser Author</span>
                        <span className="text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2.5 py-1 rounded-lg">Neural Tech Intern</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] font-bold bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-1 rounded-lg">Board Merit List</span>
                        <span className="text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-lg">Science Olympiad Honors</span>
                        <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2.5 py-1 rounded-lg">HSC GPA 5.00/5.00</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* In-depth Academic Profile & Core Curriculum (Col 8) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Academic Overview */}
                <div className="space-y-4">
                  <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground">
                    Academic Overview & Vision
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {educationDetail === 'leti' ? (
                      "At Saint Petersburg Electrotechnical University (LETI), my curriculum and research bridges the complex design of Biotechnical Systems and Technologies with modern neural computing models. By harnessing data-driven automation, biological feedback loops, and advanced sensor integrations, deep learning systems are applied to physiological signal processing and diagnostic instrumentation. My studies combine traditional laboratory physics with high-performance digital simulations."
                    ) : (
                      "Govt. Syed Hatem Ali College laid my core analytical foundations in mathematical modeling and physics. Completing the Higher Secondary Certificate (HSC) in the Science Division with perfect distinction, I focused intensely on vector calculus, chemical thermodynamics, and kinetic molecular structures. These core models now drive my advanced engineering architectures."
                    )}
                  </p>
                </div>

                {/* Key Coursework & Scientific Metrics */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Key Core Curriculum
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {educationDetail === 'leti' ? (
                      <>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Biotechnical Systems</span>
                          <span className="text-foreground font-black text-sm block mt-1">Sensory & Signal Processing</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Designing and simulating electronic sensors for physiological signal acquisition.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Neural Processing</span>
                          <span className="text-foreground font-black text-sm block mt-1">AI in Biomedical Engineering</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Developing deep learning algorithms to predict and model complex biological systems.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Medical Devices</span>
                          <span className="text-foreground font-black text-sm block mt-1">Diagnostics & Safety</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Studying the design, engineering, and thermodynamic safety of advanced clinical equipment.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Mathematical Biology</span>
                          <span className="text-foreground font-black text-sm block mt-1">Bio-Mathematical Modeling</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Formulating multi-variable calculus models to track non-linear biological kinetics.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Advanced Calculus</span>
                          <span className="text-foreground font-black text-sm block mt-1">Multi-variable Integration</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Applying integrals and differential equations to track movement & vector forces.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Organic Chemistry</span>
                          <span className="text-foreground font-black text-sm block mt-1">Hydrocarbon Kinetics</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Studying covalent molecular bonding mechanisms and polymer configurations.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Newtonian Mechanics</span>
                          <span className="text-foreground font-black text-sm block mt-1">Thermodynamics & Kinetic Energy</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Studying heat transfer, gas expansion rates, and dynamic particle systems.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/80 bg-background/50">
                          <span className="text-[9px] text-muted-foreground uppercase block font-semibold">Classical Logic</span>
                          <span className="text-foreground font-black text-sm block mt-1">Analytical Reasoning</span>
                          <p className="text-muted-foreground text-[11px] mt-1">Structuring proof systems, chemical compound balancing, and logical analysis grids.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Practical Research & Lab Experiments */}
                <div className="p-6 rounded-2xl border border-border bg-card/30 space-y-4">
                  <h3 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-secondary" />
                    Practical Scientific Research
                  </h3>
                  
                  {educationDetail === 'leti' ? (
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div className="border-l-2 border-primary pl-4 py-1 space-y-1">
                        <span className="font-bold text-foreground text-xs uppercase tracking-wider block">Project I: AWG Climate-Yield Prediction Engine</span>
                        <p className="text-muted-foreground text-xs">
                          Designed a predictive neural network framework trained on localized Barisal humidity curves. The system predicts optimal dew-point timing thresholds, optimizing thermodynamic condensations and atmospheric water yield outputs.
                        </p>
                      </div>
                      <div className="border-l-2 border-secondary pl-4 py-1 space-y-1">
                        <span className="font-bold text-foreground text-xs uppercase tracking-wider block">Project II: Pyrolysis Fractional Distillation Optimization</span>
                        <p className="text-muted-foreground text-xs">
                          Created numerical processing solvers using computational physics modeling to predict paraffin, olefin, and gas output distributions from continuous plastic feedstocks in pyrolysis reactors.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div className="border-l-2 border-secondary pl-4 py-1 space-y-1">
                        <span className="font-bold text-foreground text-xs uppercase tracking-wider block">Project I: Analytical Compound Analysis Labs</span>
                        <p className="text-muted-foreground text-xs">
                          Coordinated team-based chemical compound analysis labs. Successfully isolated and mapped precipitate densities under standard temperature and pressure variations.
                        </p>
                      </div>
                      <div className="border-l-2 border-primary pl-4 py-1 space-y-1">
                        <span className="font-bold text-foreground text-xs uppercase tracking-wider block">Project II: Regional Science & Math Olympiad Contender</span>
                        <p className="text-muted-foreground text-xs">
                          Represented the institution in regional analytical science divisions, winning distinction honors in theoretical calculus applications and physics logical deductions.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </main>

          {/* Simple footer inside subpage */}
          <footer className="py-8 border-t border-border text-center text-[10px] text-muted-foreground relative z-10 bg-background/50 mt-auto">
            MD SAMI &copy; {new Date().getFullYear()} &bull; Academic Detail Console Profile &bull; {educationDetail === 'leti' ? "Saint Petersburg, Russia" : "Barisal, Bangladesh"}
          </footer>
        </div>
      )}

      {/* 💻 ADVANCED CORE INSPECTOR TERMINAL OVERLAY */}
      {showCoreInspector && (
        <div className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl bg-card border border-primary/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]">
            {/* Terminal Header */}
            <div className="bg-muted px-4 py-3 flex items-center justify-between border-b border-border/80">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-[10px] font-mono font-bold text-muted-foreground ml-2">antigravity-core-inspector: ~ (zsh)</span>
              </div>
              <button 
                onClick={() => setShowCoreInspector(false)}
                className="text-muted-foreground hover:text-foreground font-mono text-xs font-bold transition-colors cursor-pointer"
              >
                [ESC] Close
              </button>
            </div>

            {/* Terminal Output Screen */}
            <div className="flex-1 p-5 bg-black/95 font-mono text-[11px] text-emerald-400 overflow-y-auto space-y-2 h-[350px] min-h-[250px] select-text scrollbar-thin">
              {inspectorLogLines.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {line}
                </div>
              ))}
              {isDiagnosticRunning && (
                <div className="text-primary animate-pulse flex items-center gap-2">
                  <span className="animate-spin inline-block">⏳</span> Analyzing system matrices...
                </div>
              )}
            </div>

            {/* Command Input Area */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                runTerminalCommand(terminalInput);
              }}
              className="bg-black/95 border-t border-border/40 p-4 flex items-center gap-2 font-mono text-[11px]"
            >
              <span className="text-secondary font-bold shrink-0">sami-core@antigravity:~$</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help' for options..."
                className="flex-1 bg-transparent border-none outline-none text-emerald-300 placeholder-emerald-500/40"
                disabled={isDiagnosticRunning}
                autoFocus
              />
            </form>

            {/* Bottom Actions Bar */}
            <div className="p-4 bg-muted border-t border-border/80 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={triggerDiagnostics}
                  disabled={isDiagnosticRunning}
                  className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 border border-primary/20 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Run Full Diagnostics
                </button>
                <button
                  onClick={() => setInspectorLogLines([])}
                  className="px-3 py-1.5 bg-card text-muted-foreground hover:text-foreground border border-border rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Clear Screen
                </button>
              </div>
              <button
                onClick={() => setShowCoreInspector(false)}
                className="px-4 py-1.5 bg-card hover:bg-muted border border-border text-foreground rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Deactivate Console
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}