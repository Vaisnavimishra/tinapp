import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { FileDown, Mail, Save, Clock, MapPin, Plane, CheckCircle2, Circle, FileText, Smartphone, Heart, CreditCard, Home, Gift, Sparkles, Users, Calendar, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  timeline: "1-month" | "1-week" | "departure";
}

interface ChecklistCategory {
  name: string;
  items: ChecklistItem[];
  icon: React.ReactNode;
}

interface UserInputs {
  name: string;
  email: string;
  phone: string;
  countryOfOrigin: string;
  countryOfDestination: string;
  destinationCity: string;
  reasonForMove: string;
  durationOfStay: string;
}

const MovingChecklist = () => {
  const [userInputs, setUserInputs] = useState<UserInputs>({
    name: "",
    email: "",
    phone: "",
    countryOfOrigin: "",
    countryOfDestination: "",
    destinationCity: "",
    reasonForMove: "",
    durationOfStay: ""
  });
  
  const [checklist, setChecklist] = useState<ChecklistCategory[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState<string>("all");
  
  const { toast } = useToast();

  const generateChecklist = async () => {
    if (!userInputs.countryOfOrigin || !userInputs.countryOfDestination || !userInputs.destinationCity || !userInputs.reasonForMove) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including destination city.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const generatedChecklist = generateAIChecklist(userInputs);
    setChecklist(generatedChecklist);
    setIsGenerating(false);
    setShowChoices(true);
  };

  const proceedWithChecklist = () => {
    setShowChoices(false);
    setShowChecklist(true);
    toast({
      title: "Checklist Generated!",
      description: "Your personalized moving checklist is ready.",
    });
  };

  const accessTrackableChecklist = () => {
    window.open('/download', '_blank');
  };

  const generateAIChecklist = (inputs: UserInputs): ChecklistCategory[] => {
    const baseCategories: ChecklistCategory[] = [
      {
        name: "Documents",
        icon: <FileText className="h-5 w-5" />,
        items: [
          { id: "doc1", text: "Valid passport (check expiration date)", completed: false, priority: "high", timeline: "1-month" },
          { id: "doc2", text: "Visa application and approval", completed: false, priority: "high", timeline: "1-month" },
          { id: "doc3", text: "Flight tickets (confirm booking)", completed: false, priority: "high", timeline: "1-week" },
          { id: "doc4", text: "Travel insurance documents", completed: false, priority: "high", timeline: "1-week" },
          { id: "doc5", text: "Medical records and prescriptions", completed: false, priority: "medium", timeline: "1-week" },
          { id: "doc6", text: "Birth certificate (certified copy)", completed: false, priority: "medium", timeline: "1-month" },
          { id: "doc7", text: "Marriage certificate (if applicable)", completed: false, priority: "medium", timeline: "1-month" },
          { id: "doc8", text: "Educational transcripts and diplomas", completed: false, priority: "high", timeline: "1-month" }
        ]
      },
      {
        name: "Clothing and Accessories",
        icon: <Users className="h-5 w-5" />,
        items: [
          { id: "cloth1", text: "Formal wear for interviews/meetings", completed: false, priority: "high", timeline: "1-week" },
          { id: "cloth2", text: "Casual everyday clothing", completed: false, priority: "medium", timeline: "1-week" },
          { id: "cloth3", text: "Comfortable walking shoes", completed: false, priority: "medium", timeline: "1-week" },
          { id: "cloth4", text: "Traditional/cultural wear", completed: false, priority: "low", timeline: "1-week" },
          { id: "cloth5", text: "Undergarments and socks", completed: false, priority: "medium", timeline: "1-week" }
        ]
      },
      {
        name: "Devices and Technology",
        icon: <Smartphone className="h-5 w-5" />,
        items: [
          { id: "tech1", text: "Laptop and charger", completed: false, priority: "high", timeline: "departure" },
          { id: "tech2", text: "Smartphone and charger", completed: false, priority: "high", timeline: "departure" },
          { id: "tech3", text: "Universal power adapter", completed: false, priority: "high", timeline: "1-week" },
          { id: "tech4", text: "Portable power bank", completed: false, priority: "medium", timeline: "departure" },
          { id: "tech5", text: "Headphones/earbuds", completed: false, priority: "medium", timeline: "departure" },
          { id: "tech6", text: "USB cables and storage devices", completed: false, priority: "medium", timeline: "departure" }
        ]
      },
      {
        name: "Health and Medical",
        icon: <Heart className="h-5 w-5" />,
        items: [
          { id: "health1", text: "Prescription medications (3-month supply)", completed: false, priority: "high", timeline: "1-week" },
          { id: "health2", text: "Vaccination records", completed: false, priority: "high", timeline: "1-month" },
          { id: "health3", text: "Medical insurance cards", completed: false, priority: "high", timeline: "1-week" },
          { id: "health4", text: "Emergency contact information", completed: false, priority: "high", timeline: "departure" },
          { id: "health5", text: "First aid kit basics", completed: false, priority: "medium", timeline: "1-week" },
          { id: "health6", text: "Eye glasses/contact lenses (extra pair)", completed: false, priority: "medium", timeline: "1-week" }
        ]
      },
      {
        name: "Finance and Banking",
        icon: <CreditCard className="h-5 w-5" />,
        items: [
          { id: "finance1", text: "International debit/credit cards", completed: false, priority: "high", timeline: "1-month" },
          { id: "finance2", text: "Foreign currency exchange", completed: false, priority: "high", timeline: "1-week" },
          { id: "finance3", text: "Bank statements (last 6 months)", completed: false, priority: "high", timeline: "1-week" },
          { id: "finance4", text: "Tax clearance certificate", completed: false, priority: "medium", timeline: "1-month" },
          { id: "finance5", text: "Financial sponsorship documents", completed: false, priority: "high", timeline: "1-month" },
          { id: "finance6", text: "Emergency cash backup", completed: false, priority: "medium", timeline: "departure" }
        ]
      },
      {
        name: "Home Essentials",
        icon: <Home className="h-5 w-5" />,
        items: [
          { id: "home1", text: "Bedding and pillows", completed: false, priority: "medium", timeline: "1-week" },
          { id: "home2", text: "Basic toiletries and hygiene products", completed: false, priority: "high", timeline: "1-week" },
          { id: "home3", text: "Kitchen utensils (if cooking)", completed: false, priority: "low", timeline: "1-week" },
          { id: "home4", text: "Cleaning supplies", completed: false, priority: "low", timeline: "1-week" },
          { id: "home5", text: "Towels and washcloths", completed: false, priority: "medium", timeline: "1-week" }
        ]
      },
      {
        name: "Cultural and Personal Items",
        icon: <Gift className="h-5 w-5" />,
        items: [
          { id: "cultural1", text: "Comfort food and snacks from home", completed: false, priority: "low", timeline: "departure" },
          { id: "cultural2", text: "Family photos and mementos", completed: false, priority: "low", timeline: "departure" },
          { id: "cultural3", text: "Religious or spiritual items", completed: false, priority: "low", timeline: "departure" },
          { id: "cultural4", text: "Gifts for new colleagues/friends", completed: false, priority: "low", timeline: "1-week" },
          { id: "cultural5", text: "Traditional spices and condiments", completed: false, priority: "low", timeline: "departure" }
        ]
      }
    ];

    // Add climate-specific items based on destination
    const destinationLower = inputs.countryOfDestination.toLowerCase();
    const cityLower = inputs.destinationCity.toLowerCase();
    
    // Cold climate destinations
    if (destinationLower.includes("canada") || destinationLower.includes("norway") || destinationLower.includes("sweden") || 
        destinationLower.includes("finland") || destinationLower.includes("iceland") || destinationLower.includes("russia") ||
        cityLower.includes("moscow") || cityLower.includes("toronto") || cityLower.includes("montreal") || 
        cityLower.includes("oslo") || cityLower.includes("stockholm") || cityLower.includes("helsinki")) {
      baseCategories[1].items.push(
        { id: "cloth_cold1", text: "Winter coat and warm layers", completed: false, priority: "high", timeline: "1-week" },
        { id: "cloth_cold2", text: "Boots suitable for snow/rain", completed: false, priority: "high", timeline: "1-week" },
        { id: "cloth_cold3", text: "Gloves, scarves, and hats", completed: false, priority: "medium", timeline: "1-week" }
      );
    }
    
    // Hot climate destinations
    if (destinationLower.includes("uae") || destinationLower.includes("saudi") || destinationLower.includes("qatar") ||
        destinationLower.includes("india") || destinationLower.includes("thailand") || destinationLower.includes("singapore") ||
        cityLower.includes("dubai") || cityLower.includes("mumbai") || cityLower.includes("bangkok") || 
        cityLower.includes("singapore") || cityLower.includes("delhi") || cityLower.includes("miami")) {
      baseCategories[1].items.push(
        { id: "cloth_hot1", text: "Lightweight, breathable clothing", completed: false, priority: "high", timeline: "1-week" },
        { id: "cloth_hot2", text: "Sun hat and sunglasses", completed: false, priority: "medium", timeline: "1-week" },
        { id: "cloth_hot3", text: "Sunscreen and insect repellent", completed: false, priority: "medium", timeline: "1-week" }
      );
    }

    // Add country-specific items
    if (inputs.countryOfDestination.toLowerCase().includes("usa") || inputs.countryOfDestination.toLowerCase().includes("america")) {
      baseCategories.push({
        name: "USA-Specific Items",
        icon: <MapPin className="h-5 w-5" />,
        items: [
          { id: "usa1", text: "Social Security Number application", completed: false, priority: "high", timeline: "1-week" },
          { id: "usa2", text: "Driver's license application documents", completed: false, priority: "medium", timeline: "1-week" },
          { id: "usa3", text: "Bank account opening requirements", completed: false, priority: "high", timeline: "1-week" },
          { id: "usa4", text: "Health insurance enrollment", completed: false, priority: "high", timeline: "1-week" }
        ]
      });
    }

    // Add reason-specific items
    if (inputs.reasonForMove === "study") {
      baseCategories[0].items.push(
        { id: "study1", text: "University acceptance letter", completed: false, priority: "high", timeline: "1-month" },
        { id: "study2", text: "Student visa documents", completed: false, priority: "high", timeline: "1-month" },
        { id: "study3", text: "Academic transcripts", completed: false, priority: "high", timeline: "1-month" },
        { id: "study4", text: "Financial aid documentation", completed: false, priority: "medium", timeline: "1-month" }
      );
    } else if (inputs.reasonForMove === "work") {
      baseCategories[0].items.push(
        { id: "work1", text: "Job offer letter", completed: false, priority: "high", timeline: "1-month" },
        { id: "work2", text: "Work visa/permit", completed: false, priority: "high", timeline: "1-month" },
        { id: "work3", text: "Professional certifications", completed: false, priority: "medium", timeline: "1-month" },
        { id: "work4", text: "Reference letters from employers", completed: false, priority: "medium", timeline: "1-month" }
      );
    }

    return baseCategories;
  };

  const toggleItemCompletion = (categoryIndex: number, itemId: string) => {
    const updatedChecklist = [...checklist];
    const category = updatedChecklist[categoryIndex];
    const item = category.items.find(item => item.id === itemId);
    if (item) {
      item.completed = !item.completed;
      setChecklist(updatedChecklist);
    }
  };

  const getFilteredItems = (category: ChecklistCategory) => {
    if (activeTimeline === "all") return category.items;
    return category.items.filter(item => item.timeline === activeTimeline);
  };

  const getCompletionStats = () => {
    const totalItems = checklist.reduce((sum, category) => sum + category.items.length, 0);
    const completedItems = checklist.reduce((sum, category) => 
      sum + category.items.filter(item => item.completed).length, 0);
    return { total: totalItems, completed: completedItems };
  };

  const downloadChecklist = () => {
    toast({
      title: "Download Started",
      description: "Your checklist is being prepared for download.",
    });
  };

  const saveToWorkspace = () => {
    toast({
      title: "Saved to Workspace",
      description: "Your checklist has been saved to your TIN workspace.",
    });
  };

  const emailChecklist = () => {
    toast({
      title: "Email Sent",
      description: "Your checklist has been sent to your email address.",
    });
  };

  if (showChoices) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 p-4 lg:p-8 flex items-center justify-center">
        <Card className="glass-card border-0 shadow-xl max-w-md w-full">
          <CardHeader className="text-center pb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl">Checklist Generated!</CardTitle>
            <CardDescription className="text-base">
              Your personalized moving checklist is ready. How would you like to proceed?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={accessTrackableChecklist}
              className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium"
            >
              <Download className="h-4 w-4 mr-2" />
              Access Trackable Checklist in TINApp
            </Button>
            <Button 
              onClick={proceedWithChecklist}
              variant="outline" 
              className="w-full h-12 rounded-xl border-border/50 hover:bg-accent/5"
            >
              Do This Later
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!showChecklist) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                <Plane className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Moving Checklist
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Create your personalized moving checklist with smart recommendations tailored to your destination and needs
            </p>
          </div>

          <Card className="glass-card hover-lift border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-xl">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                Tell us about your move
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                We'll generate a comprehensive checklist based on your specific moving situation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <Input
                    id="name"
                    value={userInputs.name}
                    onChange={(e) => setUserInputs({...userInputs, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="h-12 rounded-xl border-border/50 focus:border-accent"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInputs.email}
                    onChange={(e) => setUserInputs({...userInputs, email: e.target.value})}
                    placeholder="Enter your email"
                    className="h-12 rounded-xl border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  value={userInputs.phone}
                  onChange={(e) => setUserInputs({...userInputs, phone: e.target.value})}
                  placeholder="Enter your phone number"
                  className="h-12 rounded-xl border-border/50 focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="origin" className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Country of Origin
                  </Label>
                  <Input
                    id="origin"
                    value={userInputs.countryOfOrigin}
                    onChange={(e) => setUserInputs({...userInputs, countryOfOrigin: e.target.value})}
                    placeholder="e.g., India"
                    className="h-12 rounded-xl border-border/50 focus:border-accent"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="destination" className="text-sm font-medium flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    Country of Destination
                  </Label>
                  <Input
                    id="destination"
                    value={userInputs.countryOfDestination}
                    onChange={(e) => setUserInputs({...userInputs, countryOfDestination: e.target.value})}
                    placeholder="e.g., United States"
                    className="h-12 rounded-xl border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="city" className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Destination City
                </Label>
                <Input
                  id="city"
                  value={userInputs.destinationCity}
                  onChange={(e) => setUserInputs({...userInputs, destinationCity: e.target.value})}
                  placeholder="e.g., New York, London, Toronto"
                  className="h-12 rounded-xl border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium">Reason for Move</Label>
                <Select value={userInputs.reasonForMove} onValueChange={(value) => setUserInputs({...userInputs, reasonForMove: value})}>
                  <SelectTrigger className="h-12 rounded-xl border-border/50 focus:border-accent">
                    <SelectValue placeholder="Select reason for moving" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="study">Education/Study</SelectItem>
                    <SelectItem value="work">Work/Employment</SelectItem>
                    <SelectItem value="family">Family Reasons</SelectItem>
                    <SelectItem value="permanent">Permanent Relocation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Duration of Stay</Label>
                  <Select value={userInputs.durationOfStay} onValueChange={(value) => setUserInputs({...userInputs, durationOfStay: value})}>
                    <SelectTrigger className="h-12 rounded-xl border-border/50 focus:border-accent">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short-term">Short-term (less than 1 year)</SelectItem>
                      <SelectItem value="long-term">Long-term (1+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="my-8" />
              
              <Button 
                onClick={generateChecklist} 
                className="w-full h-14 text-lg rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300" 
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Generating Your Checklist...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5" />
                    Generate My Moving Checklist
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const stats = getCompletionStats();
  const progressPercentage = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {userInputs.name ? `${userInputs.name}'s` : "Your"} Moving Checklist
              </h1>
              <p className="text-muted-foreground text-lg">
                Moving from <span className="font-medium text-foreground">{userInputs.countryOfOrigin}</span> to <span className="font-medium text-foreground">{userInputs.countryOfDestination}</span> for {userInputs.reasonForMove}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={downloadChecklist} className="hover-lift rounded-xl">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" onClick={emailChecklist} className="hover-lift rounded-xl">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button variant="outline" onClick={saveToWorkspace} className="hover-lift rounded-xl">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Progress Card */}
          <Card className="glass-card border-0 shadow-lg mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-lg font-semibold">Overall Progress</span>
                    <p className="text-sm text-muted-foreground">
                      {stats.completed} of {stats.total} items completed
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-accent">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-3 rounded-full" />
            </CardContent>
          </Card>
        </div>

        {/* Timeline Tabs */}
        <Tabs value={activeTimeline} onValueChange={setActiveTimeline} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 h-14 rounded-xl bg-muted/50 p-1">
            <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              All Items
            </TabsTrigger>
            <TabsTrigger value="1-month" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Calendar className="h-4 w-4 mr-2" />
              1 Month Before
            </TabsTrigger>
            <TabsTrigger value="1-week" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Clock className="h-4 w-4 mr-2" />
              1 Week Before
            </TabsTrigger>
            <TabsTrigger value="departure" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Plane className="h-4 w-4 mr-2" />
              Departure Day
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTimeline} className="mt-8">
            {/* Access Trackable Format Button - Top */}
            <div className="flex justify-center mb-6">
              <Button 
                onClick={accessTrackableChecklist}
                className="bg-accent hover:bg-accent/90 text-white rounded-xl px-6 py-3"
              >
                <Download className="h-4 w-4 mr-2" />
                Access in Trackable Format
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {checklist.map((category, categoryIndex) => {
                const filteredItems = getFilteredItems(category);
                if (filteredItems.length === 0 && activeTimeline !== "all") return null;
                
                const completedItems = filteredItems.filter(item => item.completed).length;
                const categoryProgress = filteredItems.length > 0 ? (completedItems / filteredItems.length) * 100 : 0;
                
                return (
                  <Card key={category.name} className="glass-card hover-lift border-0 shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center justify-between text-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                            {category.icon}
                          </div>
                          {category.name}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {completedItems}/{filteredItems.length}
                        </Badge>
                      </CardTitle>
                      <Progress value={categoryProgress} className="h-2" />
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-72">
                        <div className="space-y-3 pr-3">
                          {filteredItems.map((item) => (
                            <div 
                              key={item.id} 
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/5 transition-all duration-200 group/item"
                            >
                              <Checkbox
                                checked={item.completed}
                                onCheckedChange={() => toggleItemCompletion(categoryIndex, item.id)}
                                className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                              />
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm leading-relaxed ${
                                  item.completed 
                                    ? 'line-through text-muted-foreground' 
                                    : 'text-foreground group-hover/item:text-accent transition-colors'
                                }`}>
                                  {item.text}
                                </p>
                                <div className="flex gap-2 mt-2">
                                  <Badge 
                                    variant={
                                      item.priority === "high" ? "destructive" : 
                                      item.priority === "medium" ? "default" : 
                                      "secondary"
                                    } 
                                    className="text-xs"
                                  >
                                    {item.priority}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {item.timeline.replace("-", " ")}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Access Trackable Format Button - Bottom */}
        <div className="flex justify-center my-8">
          <Button 
            onClick={accessTrackableChecklist}
            className="bg-accent hover:bg-accent/90 text-white rounded-xl px-6 py-3"
          >
            <Download className="h-4 w-4 mr-2" />
            Access in Trackable Format
          </Button>
        </div>

        {/* Tips & Timeline Card */}
        <Card className="glass-card border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-xl">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              Moving Tips & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                    <Calendar className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">1 Month Before</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Scan all important documents and create digital backups
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Research destination country laws and cultural norms
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Start visa application process with all required documents
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Book flights and secure temporary accommodation
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                    <Clock className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">1 Week Before</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Check airline baggage allowance and restrictions
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Notify bank and credit card companies of travel plans
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Pack essential items in carry-on luggage
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Confirm all bookings and check-in requirements
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                    <Plane className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">Departure Day</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Arrive at airport 3 hours early for international flights
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Keep important documents easily accessible
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Have local currency and emergency contacts ready
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Double-check travel requirements and restrictions
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MovingChecklist;