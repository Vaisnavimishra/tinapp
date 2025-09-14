import { User, Settings, Bell, FileText, Star, Calendar, Award, MapPin, Save, Share2, Plus, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Education {
  degree: string;
  fieldOfStudy: string;
  grade: string;
  yearOfGraduation: string;
}

interface ProfileFormData {
  profileObjective: string;
  fullName: string;
  email: string;
  currentRole: string;
  yearsExperience: string;
  skills: string[];
  countryOrigin: string;
  destinationCountry: string;
  reasonForMove: string;
  linkedinProfile?: string;
  githubProfile?: string;
  portfolioWebsite?: string;
  careerObjective: string;
  preferredJobRoles: string[];
  languagesKnown: string[];
  education: Education[];
  certifications: string[];
  researchPapers: string[];
  industry: string;
}

const MyProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(true);
  const [shareableId, setShareableId] = useState<string>('');
  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [newCertification, setNewCertification] = useState('');
  const [newResearchPaper, setNewResearchPaper] = useState('');
  const [newEducation, setNewEducation] = useState<Education>({
    degree: '',
    fieldOfStudy: '',
    grade: '',
    yearOfGraduation: ''
  });

  const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      profileObjective: '',
      fullName: '',
      email: '',
      currentRole: '',
      yearsExperience: '',
      skills: [],
      countryOrigin: '',
      destinationCountry: '',
      reasonForMove: '',
      linkedinProfile: '',
      githubProfile: '',
      portfolioWebsite: '',
      careerObjective: '',
      preferredJobRoles: [],
      languagesKnown: [],
      education: [],
      certifications: [],
      researchPapers: [],
      industry: ''
    }
  });

  const skillsValue = watch('skills') || [];
  const languagesValue = watch('languagesKnown') || [];
  const preferredRolesValue = watch('preferredJobRoles') || [];
  const certificationsValue = watch('certifications') || [];
  const researchPapersValue = watch('researchPapers') || [];
  const educationValue = watch('education') || [];

  // Load saved profile data on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    const savedShareableId = localStorage.getItem('profileShareableId');
    
    if (savedProfile) {
      const profileData = JSON.parse(savedProfile);
      Object.keys(profileData).forEach(key => {
        setValue(key as keyof ProfileFormData, profileData[key]);
      });
      setIsEditing(false);
    }
    
    if (savedShareableId) {
      setShareableId(savedShareableId);
    }
  }, [setValue]);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
    'New Zealand', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Switzerland',
    'India', 'China', 'Japan', 'South Korea', 'Singapore', 'Brazil', 'Mexico',
    'Other'
  ];

  const jobRoles = [
    'Software Engineer', 'Data Scientist', 'Product Manager', 'Designer', 
    'Marketing Manager', 'Sales Representative', 'Consultant', 'Researcher',
    'Teacher', 'Healthcare Professional', 'Engineer', 'Finance Professional',
    'Other'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Mandarin', 'Hindi', 'Arabic',
    'Portuguese', 'Russian', 'Japanese', 'Korean', 'Italian', 'Dutch', 'Other'
  ];

  const educationLevels = [
    'High School', 'Associate Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 
    'PhD/Doctorate', 'Professional Certification', 'Other'
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 
    'Retail', 'Consulting', 'Government', 'Non-profit', 'Research', 'Other'
  ];

  const workAuthStatuses = [
    'Citizen', 'Permanent Resident', 'Work Visa (H1B, L1, etc.)', 
    'Student Visa (F1/OPT)', 'Seeking Sponsorship', 'Other'
  ];

  const addSkill = () => {
    if (newSkill.trim() && !skillsValue.includes(newSkill.trim())) {
      setValue('skills', [...skillsValue, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setValue('skills', skillsValue.filter(skill => skill !== skillToRemove));
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !languagesValue.includes(newLanguage.trim())) {
      setValue('languagesKnown', [...languagesValue, newLanguage.trim()]);
      setNewLanguage('');
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    setValue('languagesKnown', languagesValue.filter(lang => lang !== languageToRemove));
  };

  const addCertification = () => {
    if (newCertification.trim() && !certificationsValue.includes(newCertification.trim())) {
      setValue('certifications', [...certificationsValue, newCertification.trim()]);
      setNewCertification('');
    }
  };

  const removeCertification = (certToRemove: string) => {
    setValue('certifications', certificationsValue.filter(cert => cert !== certToRemove));
  };

  const addResearchPaper = () => {
    if (newResearchPaper.trim() && !researchPapersValue.includes(newResearchPaper.trim())) {
      setValue('researchPapers', [...researchPapersValue, newResearchPaper.trim()]);
      setNewResearchPaper('');
    }
  };

  const removeResearchPaper = (paperToRemove: string) => {
    setValue('researchPapers', researchPapersValue.filter(paper => paper !== paperToRemove));
  };

  const addEducation = () => {
    if (newEducation.degree && newEducation.fieldOfStudy) {
      setValue('education', [...educationValue, newEducation]);
      setNewEducation({
        degree: '',
        fieldOfStudy: '',
        grade: '',
        yearOfGraduation: ''
      });
    }
  };

  const removeEducation = (index: number) => {
    setValue('education', educationValue.filter((_, i) => i !== index));
  };

  const toggleJobRole = (role: string) => {
    const currentRoles = preferredRolesValue;
    if (currentRoles.includes(role)) {
      setValue('preferredJobRoles', currentRoles.filter(r => r !== role));
    } else {
      setValue('preferredJobRoles', [...currentRoles, role]);
    }
  };

  const generateShareableId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const onSubmit = (data: ProfileFormData) => {
    // Save to localStorage (in a real app, this would be saved to a database)
    localStorage.setItem('userProfile', JSON.stringify(data));
    
    // Generate shareable ID if it doesn't exist
    let currentShareableId = shareableId;
    if (!currentShareableId) {
      currentShareableId = generateShareableId();
      setShareableId(currentShareableId);
      localStorage.setItem('profileShareableId', currentShareableId);
    }
    
    setIsEditing(false);
    toast({
      title: "Profile Saved Successfully!",
      description: "Your profile has been saved and is ready to share.",
    });
  };

  const generateShareableLink = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/profile/share/${shareableId}`;
  };

  const copyShareableLink = async () => {
    const link = generateShareableLink();
    try {
      await navigator.clipboard.writeText(link);
      toast({
        title: "Link Copied!",
        description: "Your shareable profile link has been copied to clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the link manually: " + link,
        variant: "destructive",
      });
    }
  };

  if (!isEditing && shareableId) {
    // Profile View Mode
    const savedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pulse-bg"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pulse-bg delay-2000"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-accent/3 rounded-full blur-3xl pulse-bg delay-1000"></div>
        </div>
        
        <main className="relative container mx-auto px-4 pt-12 pb-20 max-w-5xl">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-10">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary-blue rounded-3xl flex items-center justify-center mx-auto shadow-lg hover-lift">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-accent/20 to-primary-blue/20 rounded-3xl blur-lg -z-10"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-foreground via-accent to-primary-blue bg-clip-text text-transparent">
                {savedProfile.fullName || 'My Profile'}
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground/80 mb-6">
                {savedProfile.currentRole || 'Professional Profile'}
              </p>
            
              {/* Enhanced Profile Objective */}
              {savedProfile.profileObjective && (
                <div className="mt-10 max-w-4xl mx-auto">
                  <Card className="glass-card border-0 bg-card-glass/60 backdrop-blur-xl hover-lift">
                    <CardContent className="pt-8 pb-8">
                      <p className="text-xl md:text-2xl text-muted-foreground/90 italic leading-relaxed font-medium">
                        "{savedProfile.profileObjective}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button 
                onClick={() => setIsEditing(true)} 
                className="bg-gradient-to-r from-accent to-primary-blue hover:from-accent/90 hover:to-primary-blue/90 text-white font-medium px-8 py-3 rounded-2xl shadow-lg hover-lift transition-all duration-300"
                size="lg"
              >
                <Settings className="h-5 w-5 mr-2" />
                Edit Profile
              </Button>
              <Button 
                variant="outline" 
                onClick={copyShareableLink} 
                className="border-2 border-accent/30 hover:border-accent/60 hover:bg-accent/10 font-medium px-8 py-3 rounded-2xl hover-lift transition-all duration-300"
                size="lg"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share Profile
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Information Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Personal Information */}
            <Card className="glass-card border-0 bg-card-glass/60 backdrop-blur-xl hover-lift transition-all duration-300 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary-blue/20 rounded-xl flex items-center justify-center">
                    <User className="h-5 w-5 text-accent" />
                  </div>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-muted-foreground">Email</Label>
                  <p className="font-medium">{savedProfile.email}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Country of Origin</Label>
                  <p className="font-medium">{savedProfile.countryOrigin}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Destination Country</Label>
                  <p className="font-medium">{savedProfile.destinationCountry}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Reason for Move</Label>
                  <p className="font-medium">{savedProfile.reasonForMove}</p>
                </div>
              </CardContent>
            </Card>

            {/* Career Information */}
            <Card className="glass-card border-0 bg-card-glass/60 backdrop-blur-xl hover-lift transition-all duration-300 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary-blue/20 rounded-xl flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary-blue" />
                  </div>
                  Career Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-muted-foreground">Current Role</Label>
                  <p className="font-medium">{savedProfile.currentRole}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Years of Experience</Label>
                  <p className="font-medium">{savedProfile.yearsExperience}</p>
                </div>
                {savedProfile.industry && (
                  <div>
                    <Label className="text-muted-foreground">Industry</Label>
                    <p className="font-medium">{savedProfile.industry}</p>
                  </div>
                )}
                {savedProfile.linkedinProfile && (
                  <div>
                    <Label className="text-muted-foreground">LinkedIn</Label>
                    <a href={savedProfile.linkedinProfile} target="_blank" rel="noopener noreferrer" 
                       className="font-medium text-accent hover:underline">
                      View LinkedIn Profile
                    </a>
                  </div>
                )}
                {savedProfile.githubProfile && (
                  <div>
                    <Label className="text-muted-foreground">GitHub</Label>
                    <a href={savedProfile.githubProfile} target="_blank" rel="noopener noreferrer" 
                       className="font-medium text-accent hover:underline">
                      View GitHub Profile
                    </a>
                  </div>
                )}
                {savedProfile.portfolioWebsite && (
                  <div>
                    <Label className="text-muted-foreground">Portfolio</Label>
                    <a href={savedProfile.portfolioWebsite} target="_blank" rel="noopener noreferrer" 
                       className="font-medium text-accent hover:underline">
                      View Portfolio
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

              {/* Education and Professional Details */}
          {(savedProfile.education?.length > 0 || savedProfile.industry) && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {savedProfile.education?.length > 0 && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Education Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {savedProfile.education.map((edu: Education, index: number) => (
                      <div key={index} className="p-3 bg-muted/30 rounded-lg">
                        <div className="space-y-2">
                          <div>
                            <Label className="text-muted-foreground">Degree</Label>
                            <p className="font-medium">{edu.degree}</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Field of Study</Label>
                            <p className="font-medium">{edu.fieldOfStudy}</p>
                          </div>
                          {edu.grade && (
                            <div>
                              <Label className="text-muted-foreground">Grade/CGPA</Label>
                              <p className="font-medium">{edu.grade}</p>
                            </div>
                          )}
                          {edu.yearOfGraduation && (
                            <div>
                              <Label className="text-muted-foreground">Year of Graduation</Label>
                              <p className="font-medium">{edu.yearOfGraduation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Professional Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {savedProfile.industry && (
                    <div>
                      <Label className="text-muted-foreground">Industry</Label>
                      <p className="font-medium">{savedProfile.industry}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Certifications and Research */}
          {(savedProfile.certifications?.length > 0 || savedProfile.researchPapers?.length > 0) && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {savedProfile.certifications?.length > 0 && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {savedProfile.certifications.map((cert: string, index: number) => (
                        <Badge key={index} variant="default">{cert}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {savedProfile.researchPapers?.length > 0 && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Research Papers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {savedProfile.researchPapers.map((paper: string, index: number) => (
                        <Badge key={index} variant="outline">{paper}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Skills and Languages */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {savedProfile.skills?.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Languages Known</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {savedProfile.languagesKnown?.map((language: string, index: number) => (
                    <Badge key={index} variant="outline">{language}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Objective and Preferred Roles */}
          {(savedProfile.careerObjective || savedProfile.preferredJobRoles?.length > 0) && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {savedProfile.careerObjective && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Career Objective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{savedProfile.careerObjective}</p>
                  </CardContent>
                </Card>
              )}

              {savedProfile.preferredJobRoles?.length > 0 && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Preferred Job Roles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {savedProfile.preferredJobRoles.map((role: string, index: number) => (
                        <Badge key={index} variant="default">{role}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Shareable Link */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Shareable Profile Link
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input 
                  value={generateShareableLink()} 
                  readOnly 
                  className="flex-1"
                />
                <Button onClick={copyShareableLink} variant="outline">
                  Copy Link
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pulse-bg"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pulse-bg delay-1000"></div>
      </div>
      
      <main className="relative container mx-auto px-4 pt-12 pb-20 max-w-5xl">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-10">
            <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary-blue rounded-3xl flex items-center justify-center mx-auto shadow-lg hover-lift">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-accent/20 to-primary-blue/20 rounded-3xl blur-lg -z-10"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary-blue bg-clip-text text-transparent">
              My Profile
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed font-medium">
            Complete your profile to showcase your career and migration journey. 
            Share your professional story with recruiters, friends, and potential connections.
          </p>
        </div>

        {/* Enhanced Profile Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          {/* Enhanced Profile Objective */}
          <Card className="glass-card border-0 bg-card-glass/60 backdrop-blur-xl hover-lift transition-all duration-300 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary-blue/20 rounded-xl flex items-center justify-center">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                Profile Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Label htmlFor="profileObjective" className="text-muted-foreground font-medium">Your Professional Objective</Label>
                <Controller
                  name="profileObjective"
                  control={control}
                  render={({ field }) => (
                    <Textarea 
                      id="profileObjective" 
                      placeholder="Describe your professional goals and what you're looking to achieve..."
                      rows={5}
                      className="border-border/50 focus:border-accent/50 bg-background/50 backdrop-blur-sm"
                      {...field} 
                    />
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Personal Information */}
          <Card className="glass-card border-0 bg-card-glass/60 backdrop-blur-xl hover-lift transition-all duration-300 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary-blue/20 rounded-xl flex items-center justify-center">
                  <User className="h-5 w-5 text-accent" />
                </div>
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-muted-foreground font-medium">Full Name *</Label>
                  <Controller
                    name="fullName"
                    control={control}
                    rules={{ required: 'Full name is required' }}
                    render={({ field }) => (
                      <Input 
                        id="fullName" 
                        placeholder="Enter your full name"
                        className="h-12 border-border/50 focus:border-accent/50 bg-background/50 backdrop-blur-sm"
                        {...field} 
                      />
                    )}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive font-medium">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-muted-foreground font-medium">Email Address *</Label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    }}
                    render={({ field }) => (
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12 border-border/50 focus:border-accent/50 bg-background/50 backdrop-blur-sm"
                        {...field} 
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="countryOrigin">Country of Origin *</Label>
                  <Controller
                    name="countryOrigin"
                    control={control}
                    rules={{ required: 'Country of origin is required' }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country of origin" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border z-50">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.countryOrigin && (
                    <p className="text-sm text-destructive">{errors.countryOrigin.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destinationCountry">Destination Country *</Label>
                  <Controller
                    name="destinationCountry"
                    control={control}
                    rules={{ required: 'Destination country is required' }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination country" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border z-50">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.destinationCountry && (
                    <p className="text-sm text-destructive">{errors.destinationCountry.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Reason for Move *</Label>
                <Controller
                  name="reasonForMove"
                  control={control}
                  rules={{ required: 'Please select a reason for move' }}
                  render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="education" id="education" />
                        <Label htmlFor="education">Education</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="economic" id="economic" />
                        <Label htmlFor="economic">Better Economic Opportunity</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="personal" id="personal" />
                        <Label htmlFor="personal">Personal/Family Reasons</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="humanitarian" id="humanitarian" />
                        <Label htmlFor="humanitarian">Humanitarian Reasons</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
                {errors.reasonForMove && (
                  <p className="text-sm text-destructive">{errors.reasonForMove.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Career Information */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Career Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currentRole">Current Role / Job Title *</Label>
                  <Controller
                    name="currentRole"
                    control={control}
                    rules={{ required: 'Current role is required' }}
                    render={({ field }) => (
                      <Input 
                        id="currentRole" 
                        placeholder="e.g., Software Engineer"
                        {...field} 
                      />
                    )}
                  />
                  {errors.currentRole && (
                    <p className="text-sm text-destructive">{errors.currentRole.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yearsExperience">Years of Experience *</Label>
                  <Controller
                    name="yearsExperience"
                    control={control}
                    rules={{ required: 'Years of experience is required' }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border z-50">
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-8">6-8 years</SelectItem>
                          <SelectItem value="9-12">9-12 years</SelectItem>
                          <SelectItem value="13+">13+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.yearsExperience && (
                    <p className="text-sm text-destructive">{errors.yearsExperience.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Skills</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                  />
                  <Button type="button" onClick={addSkill} variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsValue.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <X 
                        className="h-3 w-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeSkill(skill)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="careerObjective">Career Objective</Label>
                <Controller
                  name="careerObjective"
                  control={control}
                  render={({ field }) => (
                    <Textarea 
                      id="careerObjective" 
                      placeholder="Describe your career goals and objectives..."
                      rows={3}
                      {...field} 
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label>Preferred Job Roles</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {jobRoles.map((role) => (
                    <div key={role} className="flex items-center space-x-2">
                      <Checkbox
                        id={`role-${role}`}
                        checked={preferredRolesValue.includes(role)}
                        onCheckedChange={() => toggleJobRole(role)}
                      />
                      <Label htmlFor={`role-${role}`} className="text-sm">
                        {role}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional & Academic Details */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Professional & Academic Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               {/* Education Section - Multiple Entries */}
               <div className="space-y-4">
                 <Label className="text-lg font-medium">Education</Label>
                 
                 {/* Display existing education entries */}
                 {educationValue.map((edu, index) => (
                   <div key={index} className="p-4 bg-muted/20 rounded-lg border">
                     <div className="flex justify-between items-start mb-3">
                       <h4 className="font-medium">Education {index + 1}</h4>
                       <Button
                         type="button"
                         variant="ghost"
                         size="sm"
                         onClick={() => removeEducation(index)}
                         className="text-red-500 hover:text-red-700 hover:bg-red-50"
                       >
                         <X className="h-4 w-4" />
                       </Button>
                     </div>
                     <div className="grid md:grid-cols-2 gap-4 text-sm">
                       <div>
                         <Label className="text-muted-foreground">Degree:</Label>
                         <p className="font-medium">{edu.degree}</p>
                       </div>
                       <div>
                         <Label className="text-muted-foreground">Field of Study:</Label>
                         <p className="font-medium">{edu.fieldOfStudy}</p>
                       </div>
                       <div>
                         <Label className="text-muted-foreground">Grade/CGPA:</Label>
                         <p className="font-medium">{edu.grade || 'N/A'}</p>
                       </div>
                       <div>
                         <Label className="text-muted-foreground">Year:</Label>
                         <p className="font-medium">{edu.yearOfGraduation || 'N/A'}</p>
                       </div>
                     </div>
                   </div>
                 ))}
                 
                 {/* Add new education form */}
                 <div className="p-4 bg-muted/10 rounded-lg border-dashed border-2 border-muted-foreground/20">
                   <h4 className="font-medium mb-4 text-center text-muted-foreground">Add New Education</h4>
                   <div className="grid md:grid-cols-2 gap-4 mb-4">
                     <div className="space-y-2">
                       <Label htmlFor="new-degree">Degree *</Label>
                       <Select onValueChange={(value) => setNewEducation({...newEducation, degree: value})} value={newEducation.degree}>
                         <SelectTrigger>
                           <SelectValue placeholder="Select degree" />
                         </SelectTrigger>
                         <SelectContent className="bg-background border border-border z-50">
                           {educationLevels.map((level) => (
                             <SelectItem key={level} value={level}>
                               {level}
                             </SelectItem>
                           ))}
                         </SelectContent>
                       </Select>
                     </div>

                     <div className="space-y-2">
                       <Label htmlFor="new-fieldOfStudy">Field of Study *</Label>
                       <Input 
                         id="new-fieldOfStudy" 
                         placeholder="e.g., Computer Science"
                         value={newEducation.fieldOfStudy}
                         onChange={(e) => setNewEducation({...newEducation, fieldOfStudy: e.target.value})}
                       />
                     </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-4 mb-4">
                     <div className="space-y-2">
                       <Label htmlFor="new-grade">Grade/CGPA</Label>
                       <Input 
                         id="new-grade" 
                         placeholder="e.g., 3.8/4.0 or 85%"
                         value={newEducation.grade}
                         onChange={(e) => setNewEducation({...newEducation, grade: e.target.value})}
                       />
                     </div>

                     <div className="space-y-2">
                       <Label htmlFor="new-yearOfGraduation">Year of Graduation</Label>
                       <Input 
                         id="new-yearOfGraduation" 
                         placeholder="e.g., 2020"
                         value={newEducation.yearOfGraduation}
                         onChange={(e) => setNewEducation({...newEducation, yearOfGraduation: e.target.value})}
                       />
                     </div>
                   </div>

                   <Button
                     type="button"
                     onClick={addEducation}
                     disabled={!newEducation.degree || !newEducation.fieldOfStudy}
                     className="w-full bg-gradient-to-r from-accent to-primary-blue hover:from-accent/90 hover:to-primary-blue/90"
                   >
                     <Plus className="h-4 w-4 mr-2" />
                     Add Education
                   </Button>
                 </div>
               </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Controller
                  name="industry"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border z-50">
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label>Certifications</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Add a certification"
                    value={newCertification}
                    onChange={(e) => setNewCertification(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addCertification();
                      }
                    }}
                  />
                  <Button type="button" onClick={addCertification} variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certificationsValue.map((cert, index) => (
                    <Badge key={index} variant="default" className="flex items-center gap-1">
                      {cert}
                      <X 
                        className="h-3 w-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeCertification(cert)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Research Papers / Publications</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Add research paper or publication"
                    value={newResearchPaper}
                    onChange={(e) => setNewResearchPaper(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addResearchPaper();
                      }
                    }}
                  />
                  <Button type="button" onClick={addResearchPaper} variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {researchPapersValue.map((paper, index) => (
                    <Badge key={index} variant="outline" className="flex items-center gap-1">
                      {paper}
                      <X 
                        className="h-3 w-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeResearchPaper(paper)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Additional Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Languages Known</Label>
                <div className="flex gap-2 mb-2">
                  <Select value={newLanguage} onValueChange={setNewLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      {languages.filter(lang => !languagesValue.includes(lang)).map((language) => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button type="button" onClick={addLanguage} variant="outline" disabled={!newLanguage}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languagesValue.map((language, index) => (
                    <Badge key={index} variant="outline" className="flex items-center gap-1">
                      {language}
                      <X 
                        className="h-3 w-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeLanguage(language)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="linkedinProfile">LinkedIn Profile (optional)</Label>
                  <Controller
                    name="linkedinProfile"
                    control={control}
                    render={({ field }) => (
                      <Input 
                        id="linkedinProfile" 
                        placeholder="https://linkedin.com/in/yourprofile"
                        {...field} 
                      />
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="githubProfile">GitHub Profile (optional)</Label>
                  <Controller
                    name="githubProfile"
                    control={control}
                    render={({ field }) => (
                      <Input 
                        id="githubProfile" 
                        placeholder="https://github.com/yourusername"
                        {...field} 
                      />
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolioWebsite">Portfolio Website (optional)</Label>
                  <Controller
                    name="portfolioWebsite"
                    control={control}
                    render={({ field }) => (
                      <Input 
                        id="portfolioWebsite" 
                        placeholder="https://yourportfolio.com"
                        {...field} 
                      />
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Submit Button */}
          <div className="text-center pt-8">
            <Button 
              type="submit" 
              size="lg" 
              className="bg-gradient-to-r from-accent to-primary-blue hover:from-accent/90 hover:to-primary-blue/90 text-white font-medium px-12 py-4 rounded-2xl shadow-lg hover-lift transition-all duration-300"
            >
              <Save className="h-5 w-5 mr-3" />
              Save Profile
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MyProfile;