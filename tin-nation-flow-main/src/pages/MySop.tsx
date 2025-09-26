import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Lightbulb, 
  BookOpen, 
  Target, 
  Users, 
  Award, 
  Pen,
  Download,
  Save,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Brain,
  Sparkles,
  FileText,
  Clock,
  Star,
  Mail,
  Share2,
  GraduationCap,
  Code,
  Database,
  Cpu,
  Building2,
  Heart,
  Scale,
  Palette,
  Beaker,
  Calculator,
  Globe,
  Briefcase,
  UserCheck,
  Zap,
  Shield,
  Eye,
  EyeOff,
  RefreshCw,
  MessageCircle,
  User,
  MapPin,
  AlertCircle,
  PenTool
} from 'lucide-react';

const MySop = () => {
  const [currentView, setCurrentView] = useState('hero');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showCourseSelector, setShowCourseSelector] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFullScreenEditor, setIsFullScreenEditor] = useState(false);
  const [sopSections, setSopSections] = useState({
    introduction: '',
    academic: '',
    motivation: '',
    whyUniversity: '',
    goals: '',
    whyCourse: '',
    whyInstitution: '',
    additionalSkills: '',
    familyBackground: '',
    relevantCourses: '',
    whyCountry: '',
    futurePlans: '',
    contribution: '',
    uniqueSkills: ''
  });
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [sopStrength, setSopStrength] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [mentorEmail, setMentorEmail] = useState('');
  const [showMentorDialog, setShowMentorDialog] = useState(false);

  // Course options with specific icons and tips
  const courseOptions = [
    {
      id: 'computer-science',
      name: 'Computer Science',
      icon: <Code className="h-5 w-5" />,
      color: 'bg-blue-500',
      tips: ['Highlight coding projects and technical skills', 'Mention specific programming languages', 'Discuss algorithm and data structure experience']
    },
    {
      id: 'data-science',
      name: 'Data Science & Analytics',
      icon: <Database className="h-5 w-5" />,
      color: 'bg-green-500',
      tips: ['Showcase statistical analysis projects', 'Mention machine learning experience', 'Discuss data visualization skills']
    },
    {
      id: 'artificial-intelligence',
      name: 'Artificial Intelligence',
      icon: <Brain className="h-5 w-5" />,
      color: 'bg-purple-500',
      tips: ['Discuss AI/ML projects and research', 'Mention neural networks or deep learning', 'Show understanding of ethical AI']
    },
    {
      id: 'business-administration',
      name: 'Business Administration (MBA)',
      icon: <Building2 className="h-5 w-5" />,
      color: 'bg-orange-500',
      tips: ['Highlight leadership experiences', 'Discuss business strategy projects', 'Mention entrepreneurial ventures']
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: <Cpu className="h-5 w-5" />,
      color: 'bg-red-500',
      tips: ['Detail technical projects and innovations', 'Mention design and problem-solving skills', 'Discuss engineering principles applied']
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Medicine',
      icon: <Heart className="h-5 w-5" />,
      color: 'bg-pink-500',
      tips: ['Show compassion and patient care experience', 'Discuss medical research or volunteering', 'Mention healthcare improvement goals']
    },
    {
      id: 'law',
      name: 'Law',
      icon: <Scale className="h-5 w-5" />,
      color: 'bg-gray-600',
      tips: ['Highlight legal research and writing', 'Discuss justice and advocacy experience', 'Mention specific legal interests']
    },
    {
      id: 'design',
      name: 'Design & Creative Arts',
      icon: <Palette className="h-5 w-5" />,
      color: 'bg-indigo-500',
      tips: ['Showcase creative portfolio and projects', 'Discuss design thinking process', 'Mention artistic influences and goals']
    },
    {
      id: 'science',
      name: 'Sciences & Research',
      icon: <Beaker className="h-5 w-5" />,
      color: 'bg-teal-500',
      tips: ['Detail research experience and publications', 'Mention laboratory skills', 'Discuss scientific methodology']
    },
    {
      id: 'mathematics',
      name: 'Mathematics & Statistics',
      icon: <Calculator className="h-5 w-5" />,
      color: 'bg-yellow-600',
      tips: ['Highlight mathematical modeling projects', 'Discuss statistical analysis experience', 'Mention theoretical vs applied interests']
    },
    {
      id: 'international-studies',
      name: 'International Studies',
      icon: <Globe className="h-5 w-5" />,
      color: 'bg-cyan-500',
      tips: ['Discuss cultural experiences and languages', 'Mention global issues and solutions', 'Show cross-cultural communication skills']
    },
    {
      id: 'finance',
      name: 'Finance & Economics',
      icon: <Briefcase className="h-5 w-5" />,
      color: 'bg-emerald-600',
      tips: ['Highlight financial analysis projects', 'Discuss market research experience', 'Mention quantitative skills']
    }
  ];

  // Dynamic SoP sections based on course
  const sopSteps = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Sparkles className="h-5 w-5" />,
      placeholder: 'Start with a specific moment that sparked your interest in this field...',
      tips: ['Use a specific anecdote or moment', 'Avoid generic statements', 'Show passion and purpose']
    },
    {
      id: 'academic',
      title: 'Academic Background',
      icon: <BookOpen className="h-5 w-5" />,
      placeholder: 'Connect your academic experiences to your goals...',
      tips: ['Connect coursework to goals', 'Mention specific projects', 'Show academic growth']
    },
    {
      id: 'motivation',
      title: 'Motivation & Experience',
      icon: <Lightbulb className="h-5 w-5" />,
      placeholder: 'Describe experiences that reinforced your interest...',
      tips: ['Use quantifiable achievements', 'Show impact of your work', 'Connect to field of study']
    },
    {
      id: 'whyUniversity',
      title: 'Why This University',
      icon: <Target className="h-5 w-5" />,
      placeholder: 'Demonstrate specific knowledge about the program...',
      tips: ['Name specific professors', 'Mention research labs', 'Show program fit']
    },
    {
      id: 'goals',
      title: 'Future Goals',
      icon: <TrendingUp className="h-5 w-5" />,
      placeholder: 'Paint a clear picture of your future impact...',
      tips: ['Be specific about impact', 'Show long-term vision', 'Connect to societal benefit']
    }
  ];

  const quizQuestions = [
    {
      question: "Which opening line creates the strongest first impression?",
      options: [
        "My name is Sarah and I want to study Computer Science at your university.",
        "I have always been passionate about technology since I was a child.",
        "The moment I debugged my first program at age 12, I knew I had found my calling.",
        "I am writing to express my interest in your Master's program."
      ],
      correct: 2,
      explanation: "Specific, personal moments create immediate engagement and show authentic passion."
    },
    {
      question: "How should you discuss academic achievements?",
      options: [
        "List all your courses and GPA",
        "Focus only on your highest grades",
        "Connect specific projects to your career goals",
        "Mention awards and honors only"
      ],
      correct: 2,
      explanation: "Connecting academic work to goals shows purposeful learning and career vision."
    },
    {
      question: "What's the best way to address program fit?",
      options: [
        "Mention the university's ranking and reputation",
        "Discuss specific faculty research that aligns with your interests",
        "Talk about the campus location and facilities",
        "Focus on scholarship opportunities"
      ],
      correct: 1,
      explanation: "Specific faculty research shows you've done homework and found genuine connections."
    },
    {
      question: "How should you present future goals?",
      options: [
        "Keep them vague to show flexibility",
        "Focus on earning potential and career advancement",
        "Present specific, impactful goals with societal benefit",
        "Avoid mentioning goals to stay humble"
      ],
      correct: 2,
      explanation: "Specific goals with broader impact show vision, purpose, and commitment to making a difference."
    },
    {
      question: "What tone works best for SoP writing?",
      options: [
        "Extremely formal and academic",
        "Casual and conversational",
        "Professional yet personal and authentic",
        "Humorous and entertaining"
      ],
      correct: 2,
      explanation: "Balance professionalism with authenticity to create genuine connection while maintaining respect."
    }
  ];

  // Professional mentor insights
  const mentorInsights = [
    {
      mentor: "Dr. Sarah Chen, MIT Admissions",
      insight: "Focus on growth stories rather than just achievements. Show how challenges shaped you.",
      category: "storytelling"
    },
    {
      mentor: "Prof. Michael Rodriguez, Stanford",
      insight: "Research our faculty before writing. Generic statements about 'prestigious university' are red flags.",
      category: "research"
    },
    {
      mentor: "Dr. Priya Patel, Harvard Business",
      insight: "Quantify your impact wherever possible. Numbers tell compelling stories.",
      category: "impact"
    },
    {
      mentor: "Prof. James Liu, UC Berkeley",
      insight: "Show intellectual curiosity beyond grades. What questions drive your learning?",
      category: "curiosity"
    }
  ];

  const currentSectionText = sopSections[sopSteps[currentStep].id];
  const selectedCourseData = courseOptions.find(c => c.id === selectedCourse);

  // Calculate word count and strength
  const calculateWordCount = () => {
    const totalText = Object.values(sopSections).join(' ');
    const words = totalText.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
  };

  const calculateStrength = () => {
    const sections = Object.values(sopSections);
    const filledSections = sections.filter(section => section.trim().length > 50).length;
    const totalWords = calculateWordCount();
    
    let strength = 0;
    strength += (filledSections / sections.length) * 40;
    strength += Math.min((totalWords / 800) * 30, 30);
    strength += Math.random() * 30;
    
    return Math.min(Math.round(strength), 100);
  };

  useEffect(() => {
    const words = calculateWordCount();
    const strength = calculateStrength();
    setWordCount(words);
    setSopStrength(strength);
  }, [sopSections]);

  const updateSection = (text) => {
    const sectionKey = sopSteps[currentStep].id;
    setSopSections(prev => ({
      ...prev,
      [sectionKey]: text
    }));
  };

  const generateAIFeedback = () => {
    const text = currentSectionText;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    const analysis = {
      strengths: [
        wordCount > 100 ? "Good detail and depth" : null,
        text.includes("research") ? "Shows research awareness" : null,
        text.includes("experience") ? "Includes relevant experience" : null,
        /[A-Z][a-z]+ [A-Z][a-z]+/.test(text) ? "Mentions specific people/places" : null,
      ].filter(Boolean),
      weaknesses: [
        wordCount < 50 ? "Needs more detail and examples" : null,
        !text.includes("I") ? "Could be more personal" : null,
        text.split('.').length < 3 ? "Could use more varied sentence structure" : null,
        !/\d/.test(text) ? "Consider adding quantifiable achievements" : null,
      ].filter(Boolean),
      suggestions: [
        "Add specific examples from your experience",
        "Include quantifiable achievements where possible",
        "Connect this section to your overall narrative",
        "Consider the admissions committee's perspective"
      ]
    };
    
    setAiAnalysis(analysis);
  };

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuizQuestion] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const nextQuizQuestion = () => {
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      const score = quizAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quizQuestions[index].correct ? 1 : 0);
      }, 0);
      setQuizScore(score);
      setShowQuizResults(true);
    }
  };

  const saveDraft = () => {
    const draft = {
      sections: sopSections,
      course: selectedCourse,
      timestamp: new Date().toISOString(),
      wordCount: wordCount,
      strength: sopStrength
    };
    localStorage.setItem('sop-draft', JSON.stringify(draft));
    toast({ title: "Draft saved successfully!", description: "Your SOP has been saved locally." });
  };

  const downloadSoP = () => {
    const fullText = sopSteps.map(step => {
      const sectionText = sopSections[step.id];
      return sectionText ? `${step.title}:\n${sectionText}\n\n` : '';
    }).join('');
    
    const blob = new Blob([fullText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-statement-of-purpose.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareWithMentor = () => {
    const emailContent = `Subject: SoP Review Request - ${selectedCourseData?.name || 'Graduate Program'}

Hi,

I'm applying for ${selectedCourseData?.name || 'a graduate program'} and would appreciate your feedback on my Statement of Purpose.

Current Progress:
- Word Count: ${wordCount}
- Completion: ${sopStrength}%
- Sections Completed: ${sopSteps.filter(step => sopSections[step.id]?.length > 50).length}/5

SoP Content:
${sopSteps.map(step => {
  const content = sopSections[step.id];
  return content ? `${step.title}:\n${content}\n\n` : '';
}).join('')}

I would value your insights on:
1. Overall narrative flow and coherence
2. Specific examples and their effectiveness
3. Program fit demonstration
4. Areas for improvement

Thank you for your time and expertise.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:${mentorEmail}?subject=SoP Review Request&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast({ 
      title: "Email prepared!", 
      description: "Your email client should open with the SoP content ready to send." 
    });
    setShowMentorDialog(false);
  };

  // Auto-generate feedback when text changes
  useEffect(() => {
    if (currentSectionText && currentSectionText.length > 20) {
      const timer = setTimeout(generateAIFeedback, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentSectionText]);

  // Hero Section
  if (currentView === 'hero') {
    return (
      <div className="min-h-screen bg-background">
        {/* Enhanced Header */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="px-4 py-2">
                <UserCheck className="w-4 h-4 mr-2" />
                50+ Course Options
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                AI-Powered Feedback
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Professional Mentors
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Your Perfect <span className="text-primary">Statement of Purpose</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-powered writing coach with course-specific guidance, professional mentor insights, and real-time feedback for international students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => {
                  setShowCourseSelector(true);
                }}
                className="text-lg px-8 py-4"
              >
                <Pen className="mr-2 h-5 w-5" />
                Start Writing My SoP
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setCurrentView('quiz')}
                className="text-lg px-8 py-4"
              >
                <Brain className="mr-2 h-5 w-5" />
                Take Knowledge Quiz
              </Button>
            </div>

            {/* Professional Mentor Insights */}
            <div className="bg-card rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Professional Mentor Insights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {mentorInsights.slice(0, 4).map((insight, index) => (
                  <div key={index} className="bg-background/50 rounded-lg p-4">
                    <p className="text-sm italic mb-2">"{insight.insight}"</p>
                    <p className="text-xs text-muted-foreground">— {insight.mentor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Selection Dialog */}
          <Dialog open={showCourseSelector} onOpenChange={setShowCourseSelector}>
            <DialogContent className="max-w-4xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Choose Your Field of Study</DialogTitle>
                <p className="text-muted-foreground">Select your course to get personalized writing tips and guidance</p>
              </DialogHeader>
              <ScrollArea className="h-96">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {courseOptions.map((course) => (
                    <Card 
                      key={course.id}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => {
                        setSelectedCourse(course.id);
                        setShowCourseSelector(false);
                        setCurrentView('writing');
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${course.color} text-white`}>
                            {course.icon}
                          </div>
                          <h3 className="font-semibold text-sm">{course.name}</h3>
                        </div>
                        <div className="space-y-1">
                          {course.tips.slice(0, 2).map((tip, tipIndex) => (
                            <p key={tipIndex} className="text-xs text-muted-foreground">• {tip}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </section>

        {/* Course-Specific Writing Tips */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Course-Specific SoP Guidance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseOptions.slice(0, 6).map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${course.color} text-white`}>
                        {course.icon}
                      </div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {course.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose MySoP Platform</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Feedback</h3>
                  <p className="text-muted-foreground">Real-time analysis and suggestions to improve your SoP quality</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mentor Collaboration</h3>
                  <p className="text-muted-foreground">Share your SoP with professional mentors for expert guidance</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Course-Specific Tips</h3>
                  <p className="text-muted-foreground">Tailored advice based on your field of study and career goals</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Writing Interface
  if (currentView === 'writing') {
    return (
      <div className="min-h-screen bg-background">
        {/* Enhanced Header */}
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => setCurrentView('hero')}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <h1 className="text-2xl font-bold">MySoP Writing Coach</h1>
                {selectedCourseData && (
                  <Badge variant="secondary" className="flex items-center gap-2">
                    {selectedCourseData.icon}
                    {selectedCourseData.name}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-sm">
                  {wordCount}/1000 words
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  {sopStrength}% Complete
                </Badge>
                <Button variant="outline" size="sm" onClick={saveDraft}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowMentorDialog(true)}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share with Mentor
                </Button>
                <Button size="sm" onClick={downloadSoP}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Writing Progress</CardTitle>
                  <Progress value={(currentStep + 1) / sopSteps.length * 100} className="w-full" />
                </CardHeader>
                <CardContent className="space-y-2">
                  {sopSteps.map((step, index) => (
                    <Button
                      key={step.id}
                      variant={index === currentStep ? "default" : "ghost"}
                      className="w-full justify-start text-left"
                      onClick={() => setCurrentStep(index)}
                    >
                      <div className="flex items-center gap-2">
                        {step.icon}
                        <div>
                          <div className="font-medium">{step.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {sopSections[step.id]?.length > 50 ? 'Complete' : 'Draft'}
                          </div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Editor */}
            <div className="lg:col-span-2">
              <Card className="h-fit">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {sopSteps[currentStep].icon}
                      {sopSteps[currentStep].title}
                    </CardTitle>
                    <Button variant="outline" size="sm" onClick={() => setIsFullScreenEditor(true)}>
                      <Maximize2 className="h-4 w-4 mr-2" />
                      Full Screen
                    </Button>
                  </div>
                  {selectedCourseData && (
                    <div className="bg-primary/10 rounded-lg p-3 mt-2">
                      <p className="text-sm font-medium">Tips for {selectedCourseData.name}:</p>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        {selectedCourseData.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder={sopSteps[currentStep].placeholder}
                    value={currentSectionText}
                    onChange={(e) => updateSection(e.target.value)}
                    className="min-h-[400px] resize-none"
                  />
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(Math.min(sopSteps.length - 1, currentStep + 1))}
                      disabled={currentStep === sopSteps.length - 1}
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Feedback Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    AI Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tips for current section */}
                  <div>
                    <h4 className="font-medium mb-2">Section Tips:</h4>
                    <ul className="text-sm space-y-1">
                      {sopSteps[currentStep].tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Lightbulb className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Real-time analysis */}
                  {aiAnalysis && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Strengths
                        </h4>
                        <ul className="text-sm space-y-1">
                          {aiAnalysis.strengths.map((strength, index) => (
                            <li key={index} className="text-green-600">• {strength}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2">
                          <XCircle className="h-4 w-4" />
                          Improvements
                        </h4>
                        <ul className="text-sm space-y-1">
                          {aiAnalysis.weaknesses.map((weakness, index) => (
                            <li key={index} className="text-red-600">• {weakness}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          Suggestions
                        </h4>
                        <ul className="text-sm space-y-1">
                          {aiAnalysis.suggestions.map((suggestion, index) => (
                            <li key={index} className="text-blue-600">• {suggestion}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {!aiAnalysis && currentSectionText && currentSectionText.length < 20 && (
                    <p className="text-sm text-muted-foreground italic">
                      Start writing to get real-time AI feedback...
                    </p>
                  )}

                  {/* Professional Mentor Quote */}
                  <Separator />
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm italic mb-2">
                      "{mentorInsights[Math.floor(Math.random() * mentorInsights.length)].insight}"
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Professional Mentor Insight
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mentor Sharing Dialog */}
        <Dialog open={showMentorDialog} onOpenChange={setShowMentorDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Share SoP with Mentor</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Get professional feedback from experienced mentors
              </p>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">What mentors will receive:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Your complete SoP content ({wordCount} words)</li>
                  <li>• Progress metrics ({sopStrength}% complete)</li>
                  <li>• Specific feedback areas to focus on</li>
                  <li>• Professional email template</li>
                </ul>
              </div>
              <div>
                <Label htmlFor="mentor-email">Mentor's Email Address</Label>
                <Input
                  id="mentor-email"
                  type="email"
                  placeholder="mentor@university.edu"
                  value={mentorEmail}
                  onChange={(e) => setMentorEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={shareWithMentor} disabled={!mentorEmail} className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Prepare Email
                </Button>
                <Button variant="outline" onClick={() => setShowMentorDialog(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Full Screen Editor Modal */}
        <Dialog open={isFullScreenEditor} onOpenChange={setIsFullScreenEditor}>
          <DialogContent className="max-w-6xl h-[90vh]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {sopSteps[currentStep].icon}
                {sopSteps[currentStep].title} - Full Screen Editor
              </DialogTitle>
            </DialogHeader>
            <div className="flex-1 space-y-4">
              <Textarea
                placeholder={sopSteps[currentStep].placeholder}
                value={currentSectionText}
                onChange={(e) => updateSection(e.target.value)}
                className="h-[60vh] resize-none"
              />
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {currentSectionText ? currentSectionText.trim().split(/\s+/).filter(word => word.length > 0).length : 0} words
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous Section
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(Math.min(sopSteps.length - 1, currentStep + 1))}
                    disabled={currentStep === sopSteps.length - 1}
                  >
                    Next Section
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // Quiz Interface
  if (currentView === 'quiz') {
    if (showQuizResults) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <Card className="max-w-2xl w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
              <div className="flex items-center justify-center gap-2">
                <Star className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold text-primary">
                  {Math.round((quizScore / quizQuestions.length) * 100)}%
                </span>
              </div>
              <p className="text-muted-foreground">
                You got {quizScore} out of {quizQuestions.length} questions correct!
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Strong Areas</h3>
                  <p className="text-sm text-green-600">
                    {quizScore >= 4 ? "Excellent understanding of SoP best practices" : 
                     quizScore >= 3 ? "Good grasp of key concepts" : 
                     "Basic understanding established"}
                  </p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Growth Areas</h3>
                  <p className="text-sm text-blue-600">
                    {quizScore < 3 ? "Focus on storytelling and specificity" : 
                     quizScore < 4 ? "Refine program fit and goal articulation" : 
                     "Polish advanced techniques"}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={() => {
                  setQuizAnswers([]);
                  setCurrentQuizQuestion(0);
                  setQuizScore(0);
                  setShowQuizResults(false);
                }} variant="outline">
                  Retake Quiz
                </Button>
                <Button onClick={() => setCurrentView('hero')}>
                  Start Writing MySoP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => setCurrentView('hero')}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">SoP Knowledge Quiz</CardTitle>
                <Badge variant="secondary">
                  Question {currentQuizQuestion + 1} of {quizQuestions.length}
                </Badge>
              </div>
              <Progress value={(currentQuizQuestion + 1) / quizQuestions.length * 100} className="w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {quizQuestions[currentQuizQuestion].question}
                </h3>
                
                <RadioGroup
                  value={quizAnswers[currentQuizQuestion]?.toString()}
                  onValueChange={(value) => handleQuizAnswer(parseInt(value))}
                >
                  {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-secondary/50">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {quizAnswers[currentQuizQuestion] !== undefined && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
                  <p className="text-sm text-blue-800">
                    {quizQuestions[currentQuizQuestion].explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuizQuestion(Math.max(0, currentQuizQuestion - 1))}
                  disabled={currentQuizQuestion === 0}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={nextQuizQuestion}
                  disabled={quizAnswers[currentQuizQuestion] === undefined}
                >
                  {currentQuizQuestion < quizQuestions.length - 1 ? 'Next' : 'Finish Quiz'}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default MySop;