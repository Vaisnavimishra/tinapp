import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Download, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BasicDetails {
  fullName: string;
  email: string;
  country: string;
  visaType: string;
  language: string;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const questionBank: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of your visit to our country?",
    options: ["Tourism", "Business", "Study", "Medical treatment"],
    correctAnswer: "Study",
    explanation: "Choose the option that matches your visa application purpose."
  },
  {
    id: 2,
    question: "How long do you plan to stay?",
    options: ["Less than 1 month", "1-3 months", "3-6 months", "More than 6 months"],
    correctAnswer: "3-6 months",
    explanation: "Provide a realistic timeframe based on your visa type and purpose."
  },
  {
    id: 3,
    question: "What documents should you bring to a visa interview?",
    options: ["Passport only", "Passport and photos", "All required documents as per checklist", "Just the application form"],
    correctAnswer: "All required documents as per checklist",
    explanation: "Always bring complete documentation as specified in the visa checklist."
  },
  {
    id: 4,
    question: "How should you dress for the visa interview?",
    options: ["Casual clothes", "Formal business attire", "Traditional clothing", "Designer clothes"],
    correctAnswer: "Formal business attire",
    explanation: "Professional attire shows respect and seriousness about your application."
  },
  {
    id: 5,
    question: "What should you do if you don't understand a question?",
    options: ["Guess the answer", "Stay silent", "Ask for clarification politely", "Change the subject"],
    correctAnswer: "Ask for clarification politely",
    explanation: "It's better to ask for clarification than to provide an incorrect answer."
  },
  {
    id: 6,
    question: "What is the best way to answer questions about your financial status?",
    options: ["Provide vague answers", "Be honest and provide documentation", "Exaggerate your income", "Avoid the topic"],
    correctAnswer: "Be honest and provide documentation",
    explanation: "Honesty with proper documentation builds trust and credibility."
  },
  {
    id: 7,
    question: "How early should you arrive for your visa interview?",
    options: ["Right on time", "15-30 minutes early", "1 hour early", "5 minutes late"],
    correctAnswer: "15-30 minutes early",
    explanation: "Arriving early shows punctuality but too early may inconvenience the office."
  },
  {
    id: 8,
    question: "What should you do if you've been refused a visa before?",
    options: ["Hide the information", "Be honest about previous refusals", "Apply under a different name", "Wait 10 years"],
    correctAnswer: "Be honest about previous refusals",
    explanation: "Transparency about past refusals is crucial as records are maintained."
  },
  {
    id: 9,
    question: "How should you handle questions about your ties to your home country?",
    options: ["Avoid answering", "Show strong ties like family, job, property", "Say you want to immigrate", "Be vague"],
    correctAnswer: "Show strong ties like family, job, property",
    explanation: "Strong home country ties demonstrate your intention to return after your visit."
  },
  {
    id: 10,
    question: "What is the appropriate way to address the visa officer?",
    options: ["By their first name", "Sir/Madam or Officer", "Hey", "Buddy"],
    correctAnswer: "Sir/Madam or Officer",
    explanation: "Formal address shows respect and maintains professional interaction."
  },
  {
    id: 11,
    question: "What should you bring as proof of accommodation?",
    options: ["Nothing", "Hotel bookings or invitation letter", "Just your passport", "Travel insurance only"],
    correctAnswer: "Hotel bookings or invitation letter",
    explanation: "Proof of accommodation demonstrates planning and genuine travel intent."
  },
  {
    id: 12,
    question: "How should you respond if you don't know an answer?",
    options: ["Make something up", "Say 'I don't know' honestly", "Change the subject", "Stay silent"],
    correctAnswer: "Say 'I don't know' honestly",
    explanation: "Honesty is always better than providing false information."
  },
  {
    id: 13,
    question: "What is the most important thing during a visa interview?",
    options: ["Speaking loudly", "Being honest and confident", "Talking a lot", "Arguing with the officer"],
    correctAnswer: "Being honest and confident",
    explanation: "Honesty and confidence create a positive impression and build trust."
  },
  {
    id: 14,
    question: "What should you do with your phone during the interview?",
    options: ["Keep it on loud", "Turn it off or silent", "Answer calls if it rings", "Use it to show photos"],
    correctAnswer: "Turn it off or silent",
    explanation: "Eliminating distractions shows focus and respect for the interview process."
  },
  {
    id: 15,
    question: "How should you prepare for country-specific questions?",
    options: ["Don't prepare", "Research the country's culture and current events", "Memorize Wikipedia", "Ask friends"],
    correctAnswer: "Research the country's culture and current events",
    explanation: "Knowledge about your destination shows genuine interest and preparation."
  },
  {
    id: 16,
    question: "What should you do if the officer seems unfriendly?",
    options: ["Get defensive", "Remain calm and polite", "Ask to speak to someone else", "Leave immediately"],
    correctAnswer: "Remain calm and polite",
    explanation: "Maintaining composure regardless of the officer's demeanor is professional."
  },
  {
    id: 17,
    question: "How should you answer questions about your employment?",
    options: ["Exaggerate your position", "Be accurate about your job and salary", "Avoid mentioning salary", "Say you're unemployed"],
    correctAnswer: "Be accurate about your job and salary",
    explanation: "Accurate employment information can be verified and builds credibility."
  },
  {
    id: 18,
    question: "What is the best approach for family-related questions?",
    options: ["Keep answers brief", "Provide detailed, honest information", "Avoid mentioning family", "Only mention successful family members"],
    correctAnswer: "Provide detailed, honest information",
    explanation: "Comprehensive family information helps officers understand your background and ties."
  }
];

const visaTypesByCountry = {
  "United States": [
    "F-1 Student Visa", "M-1 Student Visa", "J-1 Exchange Visitor", "H-1B Specialty Occupation", 
    "H-2A Agricultural Worker", "H-2B Temporary Worker", "L-1 Intracompany Transfer", 
    "O-1 Extraordinary Ability", "P-1 Athlete/Entertainer", "B-1/B-2 Business/Tourism", 
    "E-1 Treaty Trader", "E-2 Treaty Investor", "K-1 Fiancé(e)", "CR-1/IR-1 Spouse of US Citizen",
    "F-2A/F-2B Child of LPR", "EB-1 Priority Worker", "EB-2 Advanced Degree", "EB-3 Skilled Worker"
  ],
  "Canada": [
    "Study Permit", "Work Permit (LMIA)", "Work Permit (LMIA-exempt)", "Post-Graduation Work Permit",
    "International Mobility Program", "Visitor Visa (TRV)", "Super Visa", "Express Entry (Federal Skilled Worker)",
    "Express Entry (Canadian Experience Class)", "Express Entry (Federal Skilled Trades)", 
    "Provincial Nominee Program", "Quebec Skilled Worker", "Start-up Visa", "Self-employed Persons",
    "Caregiver Program", "Spouse/Partner Visa", "Dependent Child Visa", "Parent and Grandparent Program"
  ],
  "United Kingdom": [
    "Student Visa", "Graduate Visa", "Skilled Worker Visa", "Health and Care Worker Visa", 
    "Intra-company Transfer Visa", "Minister of Religion Visa", "International Sportsperson Visa",
    "Representative of an Overseas Business Visa", "Visitor Visa", "Marriage Visitor Visa",
    "Family Visa (Spouse)", "Family Visa (Child)", "Family Visa (Parent)", "Ancestry Visa",
    "Youth Mobility Scheme", "Innovator Founder Visa", "Global Talent Visa", "High Potential Individual Visa"
  ],
  "Australia": [
    "Student Visa (500)", "Temporary Graduate Visa (485)", "Skilled Independent Visa (189)", 
    "Skilled Nominated Visa (190)", "Skilled Work Regional Visa (491)", "Employer Nomination Scheme (186)",
    "Temporary Skill Shortage Visa (482)", "Working Holiday Visa (417)", "Work and Holiday Visa (462)",
    "Visitor Visa (600)", "Electronic Travel Authority (601)", "eVisitor (651)", 
    "Partner Visa (820/801)", "Parent Visa (103)", "Child Visa (101)", "Business Innovation and Investment (188)"
  ],
  "Germany": [
    "National Visa (Type D)", "Schengen Visa (Type C)", "Student Visa", "Research Visa", 
    "Job Seeker Visa", "EU Blue Card", "Work Visa (Employment)", "Self-Employment Visa",
    "Family Reunion Visa", "Spouse/Partner Visa", "Tourist/Visitor Visa", "Business Visa",
    "Transit Visa", "Medical Treatment Visa", "Cultural/Sports Event Visa", "Au Pair Visa"
  ],
  "France": [
    "Long-stay Visa (VLS-TS)", "Student Visa", "Work Visa", "Talent Passport", 
    "EU Blue Card", "Seasonal Worker Visa", "Family Visa", "Spouse of French Citizen Visa",
    "Visitor Visa", "Business Visa", "Tourist Visa", "Transit Visa", "Au Pair Visa",
    "Intern Visa", "Researcher Visa", "Artist/Cultural Visa", "Medical Treatment Visa"
  ],
  "Other": [
    "Student Visa", "Work Visa", "Tourist Visa", "Business Visa", "Transit Visa", 
    "Family Reunion Visa", "Spouse Visa", "Investment Visa", "Retirement Visa",
    "Medical Treatment Visa", "Religious Visa", "Diplomatic Visa", "Official Visa"
  ]
};

const countries = Object.keys(visaTypesByCountry);
const languages = ["English", "French", "German", "Spanish", "Other"];

export default function VisaReady() {
  const [currentStep, setCurrentStep] = useState(1);
  const [basicDetails, setBasicDetails] = useState<BasicDetails>({
    fullName: "",
    email: "",
    country: "",
    visaType: "",
    language: ""
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const { toast } = useToast();

  const getRandomQuestions = () => {
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 12);
  };

  const handleBasicDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!basicDetails.fullName || !basicDetails.email || !basicDetails.country || !basicDetails.visaType || !basicDetails.language) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to continue.",
        variant: "destructive"
      });
      return;
    }
    const questions = getRandomQuestions();
    setSelectedQuestions(questions);
    setCurrentStep(2);
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    if (Object.keys(answers).length < selectedQuestions.length) {
      toast({
        title: "Please answer all questions",
        description: "Complete all questions before submitting.",
        variant: "destructive"
      });
      return;
    }
    setCurrentStep(3);
  };

  const handleRetakeTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    const questions = getRandomQuestions();
    setSelectedQuestions(questions);
    setCurrentStep(2);
  };

  const handleMockInterview = () => {
    toast({
      title: "Mock Interview",
      description: "Mock interview feature coming soon!",
    });
  };

  const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;
  const correctAnswers = selectedQuestions.reduce((count, question) => {
    return answers[question.id] === question.correctAnswer ? count + 1 : count;
  }, 0);
  const score = selectedQuestions.length > 0 ? Math.round((correctAnswers / selectedQuestions.length) * 100) : 0;
  const incorrectAnswers = selectedQuestions.filter(question => 
    answers[question.id] && answers[question.id] !== question.correctAnswer
  );

  // Step 1: Basic Details Form
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md glassmorphism">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Visa Interview Preparation Quiz
            </CardTitle>
            <p className="text-lg text-muted-foreground">Practice Today, Succeed Tomorrow</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBasicDetailsSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={basicDetails.fullName}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, fullName: e.target.value }))}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={basicDetails.email}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, email: e.target.value }))}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label>Country Applying Visa For</Label>
                <Select value={basicDetails.country} onValueChange={(value) => setBasicDetails(prev => ({ ...prev, country: value, visaType: "" }))}>
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Visa Type</Label>
                <Select 
                  value={basicDetails.visaType} 
                  onValueChange={(value) => setBasicDetails(prev => ({ ...prev, visaType: value }))}
                  disabled={!basicDetails.country}
                >
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder={basicDetails.country ? "Select visa type" : "Select country first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {basicDetails.country && visaTypesByCountry[basicDetails.country as keyof typeof visaTypesByCountry]?.map((visaType) => (
                      <SelectItem key={visaType} value={visaType}>{visaType}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Preferred Interview Language</Label>
                <Select value={basicDetails.language} onValueChange={(value) => setBasicDetails(prev => ({ ...prev, language: value }))}>
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>{language}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-6">
                Start Test
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Step 2: MCQ Test
  if (currentStep === 2) {
    const currentQ = selectedQuestions[currentQuestion];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <Card className="glassmorphism">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Visa Interview Practice Test
              </CardTitle>
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {selectedQuestions.length}
                </p>
              </div>
            </CardHeader>
          </Card>

          {/* Question */}
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-lg">
                Q{currentQuestion + 1}. {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup 
                value={answers[currentQ.id] || ""} 
                onValueChange={(value) => handleAnswerChange(currentQ.id, value)}
                className="space-y-3"
              >
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Card className="glassmorphism">
            <CardContent className="flex justify-between items-center p-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              <span className="text-sm text-muted-foreground">
                {Object.keys(answers).length} / {selectedQuestions.length} answered
              </span>

              {currentQuestion === selectedQuestions.length - 1 ? (
                <Button
                  onClick={handleSubmitTest}
                  className="bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2"
                >
                  Submit Test
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Step 3: Feedback Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Thank You Message */}
        <Card className="glassmorphism text-center">
          <CardHeader>
            <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thank You, {basicDetails.fullName}!
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              You have successfully completed the visa interview practice test.
            </p>
          </CardHeader>
        </Card>

        {/* Feedback Summary */}
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle className="text-xl">Your Performance Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
              <span className="font-medium">Your Score:</span>
              <span className="text-2xl font-bold text-primary">{score}%</span>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-primary">Overall Assessment:</h3>
              {score >= 80 ? (
                <p className="text-green-600 font-medium">
                 Excellent! You scored {correctAnswers} out of {selectedQuestions.length} correct. You are well-prepared for your visa interview!
                </p>
              ) : score >= 60 ? (
                <p className="text-yellow-600 font-medium">
                   Good job! You scored {correctAnswers} out of {selectedQuestions.length} correct. You have a solid foundation, but there are some areas you can improve.
                </p>
              ) : (
                <p className="text-orange-600 font-medium">
                   You scored {correctAnswers} out of {selectedQuestions.length} correct. Keep practicing! Here are some areas you can focus on to improve your chances.
                </p>
              )}
            </div>

            {incorrectAnswers.length > 0 && (
              <div className="space-y-3 mt-6">
                <h3 className="font-semibold text-lg text-red-600">Questions You Got Wrong:</h3>
                <div className="space-y-4">
                  {incorrectAnswers.map((question, index) => (
                    <div key={question.id} className="p-4 border border-red-200 rounded-lg bg-red-50">
                      <p className="font-medium text-red-800 mb-2">
                        Q{selectedQuestions.findIndex(q => q.id === question.id) + 1}: {question.question}
                      </p>
                      <p className="text-sm text-red-600 mb-1">
                        <strong>Your answer:</strong> {answers[question.id]}
                      </p>
                      <p className="text-sm text-green-600 mb-2">
                        <strong>Correct answer:</strong> {question.correctAnswer}
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Personalized Tips */}
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle className="text-xl">Personalized Tips for {basicDetails.visaType}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Practice common questions related to {basicDetails.visaType} applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Prepare all required documents for {basicDetails.country}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Practice your answers in {basicDetails.language} to sound confident</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Research the culture and current affairs of {basicDetails.country}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Stay calm, be honest, and maintain eye contact during the interview</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Card className="glassmorphism">
          <CardContent className="flex flex-col sm:flex-row gap-4 p-6">
            <Button
              onClick={handleRetakeTest}
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Retake Test
            </Button>
            <Button
              onClick={handleMockInterview}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center gap-2"
            >
              Try Mock Visa Interview
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}