import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plane, DollarSign, FileText, Globe, Search, Clock, Users, MapPin, Calendar, CheckCircle, Shield, Utensils, Home, Languages } from 'lucide-react';

interface TravelFormData {
  fromCountry: string;
  toCountry: string;
  purpose: string;
  travelDate: string;
  duration: string;
  budget: string;
  ageGroup: string;
  companions: string;
  preferredCity: string;
  airline: string;
  accommodation: string;
  mealPreference: string;
  languageSupport: string;
  travelInsurance: string;
  transportMode: string;
}

interface TravelInfo {
  visa: string;
  visaType: string;
  flightCost: string;
  travelTime: string;
  currency: string;
  exchangeRate: string;
  processingTime: string;
  documents: string[];
  tips: string[];
  lifestyleCost: string;
  accommodationSuggestion: string;
  foodRecommendations: string[];
  languageInfo: string;
  insuranceRecommendation: string;
  transportOptions: string[];
}

// Configuration data - easily expandable
const CONFIG = {
  countries: [
    { code: 'US', name: 'United States', currency: 'USD', languages: ['English'], exchangeRate: '1.00' },
    { code: 'CA', name: 'Canada', currency: 'CAD', languages: ['English', 'French'], exchangeRate: '1.35' },
    { code: 'IN', name: 'India', currency: 'INR', languages: ['Hindi', 'English'], exchangeRate: '83.00' },
    { code: 'UK', name: 'United Kingdom', currency: 'GBP', languages: ['English'], exchangeRate: '0.79' },
    { code: 'AU', name: 'Australia', currency: 'AUD', languages: ['English'], exchangeRate: '1.52' },
    { code: 'DE', name: 'Germany', currency: 'EUR', languages: ['German', 'English'], exchangeRate: '0.92' },
    { code: 'FR', name: 'France', currency: 'EUR', languages: ['French', 'English'], exchangeRate: '0.92' },
    { code: 'JP', name: 'Japan', currency: 'JPY', languages: ['Japanese', 'English'], exchangeRate: '149.00' },
    { code: 'SG', name: 'Singapore', currency: 'SGD', languages: ['English', 'Mandarin', 'Malay'], exchangeRate: '1.34' },
    { code: 'AE', name: 'UAE', currency: 'AED', languages: ['Arabic', 'English'], exchangeRate: '3.67' },
  ],

  cities: {
    'US': ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Las Vegas', 'Miami'],
    'CA': ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    'IN': ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'],
    'UK': ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Liverpool'],
    'AU': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    'DE': ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne'],
    'FR': ['Paris', 'Lyon', 'Marseille', 'Nice', 'Bordeaux'],
    'JP': ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Hiroshima'],
    'SG': ['Singapore City'],
    'AE': ['Dubai', 'Abu Dhabi', 'Sharjah']
  },

  travelPurposes: [
    { value: 'tourist', label: 'Tourist', description: 'Leisure and sightseeing' },
    { value: 'student', label: 'Student', description: 'Education and studies' },
    { value: 'work', label: 'Work', description: 'Employment opportunities' },
    { value: 'business', label: 'Business', description: 'Business meetings and conferences' },
    { value: 'pr', label: 'Permanent Residence', description: 'Long-term settlement' },
  ],

  budgetRanges: [
    { value: 'budget', label: 'Budget ($500-$1500)', multiplier: 0.7 },
    { value: 'moderate', label: 'Moderate ($1500-$3000)', multiplier: 1.0 },
    { value: 'premium', label: 'Premium ($3000+)', multiplier: 1.5 },
  ],

  durations: [
    { value: '1-week', label: '1 Week' },
    { value: '2-weeks', label: '2 Weeks' },
    { value: '1-month', label: '1 Month' },
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '1-year', label: '1 Year' },
    { value: 'permanent', label: 'Permanent' }
  ],

  ageGroups: [
    { value: '18-25', label: '18-25 years' },
    { value: '26-35', label: '26-35 years' },
    { value: '36-50', label: '36-50 years' },
    { value: '50+', label: '50+ years' },
  ],

  companionTypes: [
    { value: 'solo', label: 'Solo Travel' },
    { value: 'family', label: 'Family' },
    { value: 'group', label: 'Group' },
    { value: 'couple', label: 'Couple' },
  ],

  airlines: [
    { value: 'any', label: 'Any Airline' },
    { value: 'emirates', label: 'Emirates' },
    { value: 'qatar', label: 'Qatar Airways' },
    { value: 'singapore', label: 'Singapore Airlines' },
    { value: 'lufthansa', label: 'Lufthansa' },
    { value: 'british', label: 'British Airways' },
    { value: 'american', label: 'American Airlines' },
    { value: 'air-canada', label: 'Air Canada' },
    { value: 'budget', label: 'Budget Airlines' }
  ],

  accommodationTypes: [
    { value: 'hotel', label: 'Hotel' },
    { value: 'hostel', label: 'Hostel' },
    { value: 'airbnb', label: 'Airbnb' },
    { value: 'apartment', label: 'Serviced Apartment' },
    { value: 'resort', label: 'Resort' },
    { value: 'guesthouse', label: 'Guest House' },
    { value: 'homestay', label: 'Homestay' }
  ],

  mealPreferences: [
    { value: 'any', label: 'No Preference' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'non-veg', label: 'Non-Vegetarian' },
    { value: 'halal', label: 'Halal' },
    { value: 'kosher', label: 'Kosher' },
    { value: 'gluten-free', label: 'Gluten-Free' }
  ],

  languageSupport: [
    { value: 'none', label: 'Not Required' },
    { value: 'basic', label: 'Basic Translation Help' },
    { value: 'guide', label: 'Local Guide with English' },
    { value: 'interpreter', label: 'Professional Interpreter' }
  ],

  insuranceOptions: [
    { value: 'basic', label: 'Basic Travel Insurance' },
    { value: 'comprehensive', label: 'Comprehensive Coverage' },
    { value: 'medical', label: 'Medical Coverage Only' },
    { value: 'premium', label: 'Premium All-Inclusive' },
    { value: 'none', label: 'No Insurance Needed' }
  ],

  transportModes: [
    { value: 'flight', label: 'Flight' },
    { value: 'train', label: 'Train' },
    { value: 'cruise', label: 'Cruise' },
    { value: 'bus', label: 'Bus' },
    { value: 'car', label: 'Car/Road Trip' },
    { value: 'mixed', label: 'Multiple Modes' }
  ],

  // Travel route data - easily expandable
  travelRoutes: {
    'US-CA': {
      visa: 'No visa required (up to 6 months)',
      visaType: 'Visa-free entry',
      flightCost: { budget: '$200-400', moderate: '$300-600', premium: '$500-800' },
      travelTime: '1.5-6 hours',
      processingTime: 'Immediate',
      baseCost: 80
    },
    'US-UK': {
      visa: 'No visa required (up to 90 days)',
      visaType: 'Visa-free entry',
      flightCost: { budget: '$400-700', moderate: '$600-1200', premium: '$1000-2000' },
      travelTime: '7-9 hours',
      processingTime: 'Immediate',
      baseCost: 120
    },
    'US-IN': {
      visa: 'e-Visa or Tourist Visa required',
      visaType: 'Tourist/Business e-Visa',
      flightCost: { budget: '$600-1000', moderate: '$800-1500', premium: '$1200-2500' },
      travelTime: '15-20 hours',
      processingTime: '3-5 business days',
      baseCost: 40
    },
    'IN-US': {
      visa: 'B1/B2 Visa required',
      visaType: 'Tourist/Business Visa',
      flightCost: { budget: '$700-1200', moderate: '$1000-1800', premium: '$1500-3000' },
      travelTime: '15-20 hours',
      processingTime: '3-8 weeks',
      baseCost: 150
    },
    'CA-UK': {
      visa: 'No visa required (up to 90 days)',
      visaType: 'Visa-free entry',
      flightCost: { budget: '$500-800', moderate: '$700-1300', premium: '$1100-2200' },
      travelTime: '8-10 hours',
      processingTime: 'Immediate',
      baseCost: 110
    }
  }
};

// Enhanced travel info generator
const getTravelInfo = (formData: TravelFormData): TravelInfo => {
  const { fromCountry, toCountry, purpose, budget, accommodation, mealPreference, languageSupport, travelInsurance, transportMode } = formData;
  const routeKey = `${fromCountry}-${toCountry}`;
  
  const fromCountryData = CONFIG.countries.find(c => c.code === fromCountry);
  const toCountryData = CONFIG.countries.find(c => c.code === toCountry);
  const budgetData = CONFIG.budgetRanges.find(b => b.value === budget);
  
  // Get route data or default
  const routeData = CONFIG.travelRoutes[routeKey] || {
    visa: 'Visa requirements vary - Check embassy',
    visaType: 'Standard Tourist Visa',
    flightCost: { budget: '$500-1000', moderate: '$800-1500', premium: '$1200-2500' },
    travelTime: '8-20 hours',
    processingTime: '5-15 business days',
    baseCost: 80
  };

  // Calculate dynamic costs based on budget
  const budgetMultiplier = budgetData?.multiplier || 1.0;
  const dailyCost = Math.round(routeData.baseCost * budgetMultiplier);
  
  // Generate documents based on purpose
  const getDocuments = (purpose: string): string[] => {
    const common = ['Valid Passport (6+ months)', 'Passport Photos', 'Travel Insurance'];
    
    const purposeDocuments = {
      student: [...common, 'Letter of Acceptance', 'Financial Proof ($10,000+)', 'Academic Transcripts', 'Language Proficiency Test'],
      work: [...common, 'Job Offer Letter', 'Work Permit', 'Professional Qualifications', 'Labor Market Impact Assessment'],
      business: [...common, 'Business Invitation', 'Company Registration', 'Financial Statements', 'Meeting Itinerary'],
      pr: [...common, 'Police Clearance', 'Medical Examination', 'Language Test Results', 'Proof of Funds', 'Employment History'],
      tourist: [...common, 'Hotel Bookings', 'Return Tickets', 'Bank Statements', 'Travel Itinerary']
    };
    
    return purposeDocuments[purpose] || purposeDocuments.tourist;
  };

  // Generate personalized tips
  const getTips = (): string[] => {
    const tips = ['Book flights 6-8 weeks in advance for best prices', 'Check local customs and cultural norms'];
    
    // Budget-specific tips
    if (budget === 'budget') {
      tips.push('Consider hostels or shared accommodations', 'Use public transportation', 'Cook meals when possible');
    } else if (budget === 'premium') {
      tips.push('Book luxury accommodations early', 'Consider private transfers', 'Explore fine dining experiences');
    }

    // Purpose-specific tips
    if (purpose === 'student') {
      tips.push('Connect with university support services', 'Join international student groups', 'Open a student bank account');
    } else if (purpose === 'work') {
      tips.push('Research workplace culture', 'Network with local professionals', 'Understand tax obligations');
    }

    // Accommodation-specific tips
    if (accommodation === 'airbnb') {
      tips.push('Read reviews carefully', 'Communicate with hosts before arrival', 'Understand local neighborhood safety');
    }

    // Meal preference tips
    if (mealPreference === 'vegetarian' || mealPreference === 'vegan') {
      tips.push('Research vegetarian-friendly restaurants', 'Learn key dietary phrases in local language');
    } else if (mealPreference === 'halal') {
      tips.push('Locate nearby halal restaurants', 'Download halal food finder apps');
    }

    return tips;
  };

  // Generate food recommendations
  const getFoodRecommendations = (): string[] => {
    const countryFoodMap = {
      'US': ['Burgers', 'BBQ', 'Mexican cuisine', 'Italian-American dishes'],
      'CA': ['Poutine', 'Maple syrup products', 'Tim Hortons', 'Canadian bacon'],
      'IN': ['Curry dishes', 'Biryani', 'Street food', 'Regional specialties'],
      'UK': ['Fish and chips', 'Sunday roast', 'Afternoon tea', 'Pub food'],
      'AU': ['Meat pies', 'Vegemite', 'Seafood', 'Barbie (BBQ)'],
      'DE': ['Bratwurst', 'Pretzels', 'Beer', 'Schnitzel'],
      'FR': ['Croissants', 'Cheese', 'Wine', 'Fine dining'],
      'JP': ['Sushi', 'Ramen', 'Tempura', 'Bento boxes'],
      'SG': ['Hawker centers', 'Laksa', 'Hainanese chicken', 'Chili crab'],
      'AE': ['Shawarma', 'Hummus', 'Arabic coffee', 'International cuisine']
    };

    return countryFoodMap[toCountry] || ['Local cuisine', 'International options', 'Street food', 'Restaurant dining'];
  };

  // Generate accommodation suggestion
  const getAccommodationSuggestion = (): string => {
    const suggestions = {
      hotel: `Mid-range to luxury hotels ($${Math.round(dailyCost * 0.6)}-${Math.round(dailyCost * 1.2)}/night)`,
      hostel: `Budget-friendly hostels ($${Math.round(dailyCost * 0.2)}-${Math.round(dailyCost * 0.4)}/night)`,
      airbnb: `Private apartments ($${Math.round(dailyCost * 0.4)}-${Math.round(dailyCost * 0.8)}/night)`,
      apartment: `Serviced apartments ($${Math.round(dailyCost * 0.7)}-${Math.round(dailyCost * 1.1)}/night)`,
      resort: `Resort packages ($${Math.round(dailyCost * 1.2)}-${Math.round(dailyCost * 2.0)}/night)`,
      guesthouse: `Local guesthouses ($${Math.round(dailyCost * 0.3)}-${Math.round(dailyCost * 0.6)}/night)`,
      homestay: `Family homestays ($${Math.round(dailyCost * 0.3)}-${Math.round(dailyCost * 0.7)}/night)`
    };
    
    return suggestions[accommodation] || suggestions.hotel;
  };

  // Generate language info
  const getLanguageInfo = (): string => {
    const countryLanguages = toCountryData?.languages || ['English'];
    const supportLevel = CONFIG.languageSupport.find(l => l.value === languageSupport)?.label || 'Not specified';
    
    return `Primary languages: ${countryLanguages.join(', ')}. Support level: ${supportLevel}`;
  };

  // Generate insurance recommendation
  const getInsuranceRecommendation = (): string => {
    const recommendations = {
      basic: `Basic coverage ($20-40/week) - Emergency medical, trip cancellation`,
      comprehensive: `Full coverage ($40-80/week) - Medical, luggage, activities, weather`,
      medical: `Medical only ($15-30/week) - Emergency medical and evacuation`,
      premium: `Premium coverage ($60-120/week) - All-inclusive with high limits`,
      none: 'Consider at least basic medical coverage for international travel'
    };
    
    return recommendations[travelInsurance] || recommendations.basic;
  };

  // Generate transport options
  const getTransportOptions = (): string[] => {
    const baseOptions = ['Taxis and ride-sharing', 'Public transportation', 'Walking'];
    
    if (transportMode === 'flight') {
      baseOptions.unshift('Airport transfers', 'Domestic flights for long distances');
    } else if (transportMode === 'train') {
      baseOptions.unshift('Rail passes', 'High-speed trains', 'Regional trains');
    } else if (transportMode === 'car') {
      baseOptions.unshift('Car rental', 'International driving permit', 'GPS navigation');
    }
    
    return baseOptions;
  };

  return {
    visa: routeData.visa,
    visaType: routeData.visaType,
    flightCost: routeData.flightCost[budget] || routeData.flightCost.moderate,
    travelTime: routeData.travelTime,
    currency: toCountryData?.currency || 'USD',
    exchangeRate: `1 ${fromCountryData?.currency} = ${toCountryData?.exchangeRate} ${toCountryData?.currency}`,
    processingTime: routeData.processingTime,
    documents: getDocuments(purpose),
    tips: getTips(),
    lifestyleCost: `$${dailyCost}-${Math.round(dailyCost * 1.5)}/day`,
    accommodationSuggestion: getAccommodationSuggestion(),
    foodRecommendations: getFoodRecommendations(),
    languageInfo: getLanguageInfo(),
    insuranceRecommendation: getInsuranceRecommendation(),
    transportOptions: getTransportOptions()
  };
};

const NextMove = () => {
  const [formData, setFormData] = useState<TravelFormData>({
    fromCountry: '',
    toCountry: '',
    purpose: '',
    travelDate: '',
    duration: '',
    budget: '',
    ageGroup: '',
    companions: '',
    preferredCity: '',
    airline: '',
    accommodation: '',
    mealPreference: '',
    languageSupport: '',
    travelInsurance: '',
    transportMode: ''
  });
  const [travelInfo, setTravelInfo] = useState<TravelInfo | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof TravelFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    if (formData.fromCountry && formData.toCountry && formData.fromCountry !== formData.toCountry) {
      const info = getTravelInfo(formData);
      setTravelInfo(info);
      setShowResults(true);
    }
  };

  const isFormValid = formData.fromCountry && formData.toCountry && formData.purpose && formData.budget;

  // Get available cities for selected country
  const getAvailableCities = (countryCode: string) => {
    return CONFIG.cities[countryCode] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NextMove
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your international travel with comprehensive guidance. Get personalized visa requirements, costs, and expert tips.
          </p>
        </div>

        {/* Enhanced Search Form */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              Plan Your Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Route Selection */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">From Country *</Label>
                <Select onValueChange={(value) => handleInputChange('fromCountry', value)} value={formData.fromCountry}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select departure country" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">To Country *</Label>
                <Select onValueChange={(value) => handleInputChange('toCountry', value)} value={formData.toCountry}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select destination country" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Travel Details */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Purpose of Travel *</Label>
                <Select onValueChange={(value) => handleInputChange('purpose', value)} value={formData.purpose}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.travelPurposes.map((purpose) => (
                      <SelectItem key={purpose.value} value={purpose.value}>
                        {purpose.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Budget Preference *</Label>
                <Select onValueChange={(value) => handleInputChange('budget', value)} value={formData.budget}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.budgetRanges.map((budget) => (
                      <SelectItem key={budget.value} value={budget.value}>
                        {budget.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Duration of Stay</Label>
                <Select onValueChange={(value) => handleInputChange('duration', value)} value={formData.duration}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.durations.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value}>
                        {duration.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Personal Preferences */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Age Group</Label>
                <Select onValueChange={(value) => handleInputChange('ageGroup', value)} value={formData.ageGroup}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.ageGroups.map((age) => (
                      <SelectItem key={age.value} value={age.value}>
                        {age.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Travel Companions</Label>
                <Select onValueChange={(value) => handleInputChange('companions', value)} value={formData.companions}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Travel type" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.companionTypes.map((companion) => (
                      <SelectItem key={companion.value} value={companion.value}>
                        {companion.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Preferred City</Label>
                <Select onValueChange={(value) => handleInputChange('preferredCity', value)} value={formData.preferredCity}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select preferred city" />
                  </SelectTrigger>
                  <SelectContent>
                    {formData.toCountry && getAvailableCities(formData.toCountry).map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Travel Preferences */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  Preferred Airline
                </Label>
                <Select onValueChange={(value) => handleInputChange('airline', value)} value={formData.airline}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select airline preference" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.airlines.map((airline) => (
                      <SelectItem key={airline.value} value={airline.value}>
                        {airline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Accommodation Type
                </Label>
                <Select onValueChange={(value) => handleInputChange('accommodation', value)} value={formData.accommodation}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select accommodation" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.accommodationTypes.map((accommodation) => (
                      <SelectItem key={accommodation.value} value={accommodation.value}>
                        {accommodation.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Utensils className="h-4 w-4" />
                  Meal Preference
                </Label>
                <Select onValueChange={(value) => handleInputChange('mealPreference', value)} value={formData.mealPreference}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select meal preference" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.mealPreferences.map((meal) => (
                      <SelectItem key={meal.value} value={meal.value}>
                        {meal.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Services */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  Language Support
                </Label>
                <Select onValueChange={(value) => handleInputChange('languageSupport', value)} value={formData.languageSupport}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select language support" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.languageSupport.map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Travel Insurance
                </Label>
                <Select onValueChange={(value) => handleInputChange('travelInsurance', value)} value={formData.travelInsurance}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select insurance option" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.insuranceOptions.map((insurance) => (
                      <SelectItem key={insurance.value} value={insurance.value}>
                        {insurance.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Transport Mode
                </Label>
                <Select onValueChange={(value) => handleInputChange('transportMode', value)} value={formData.transportMode}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select transport mode" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONFIG.transportModes.map((transport) => (
                      <SelectItem key={transport.value} value={transport.value}>
                        {transport.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Travel Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Travel Date
              </Label>
              <input
                type="month"
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.travelDate}
                onChange={(e) => handleInputChange('travelDate', e.target.value)}
              />
            </div>

            <Button 
              onClick={handleSearch}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              disabled={!isFormValid}
            >
              <Search className="mr-2 h-4 w-4" />
              Get Personalized Travel Plan
            </Button>
          </CardContent>
        </Card>

        {/* Enhanced Results Section */}
        {showResults && travelInfo && (
          <div className="animate-fade-in space-y-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary">
              Travel Information: {CONFIG.countries.find(c => c.code === formData.fromCountry)?.name} → {CONFIG.countries.find(c => c.code === formData.toCountry)?.name}
            </h2>
            
            {/* Main Information Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Visa Requirements</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{travelInfo.visa}</p>
                  <p className="text-xs text-blue-600 mt-2">{travelInfo.visaType}</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Plane className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Flight Cost</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{travelInfo.flightCost}</p>
                  <p className="text-xs text-green-600 mt-2">{travelInfo.travelTime}</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{travelInfo.processingTime}</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Daily Living Cost</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{travelInfo.lifestyleCost}</p>
                  <p className="text-xs text-orange-600 mt-2">{travelInfo.exchangeRate}</p>
                </CardContent>
              </Card>
            </div>

            {/* Accommodation & Food Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Home className="h-5 w-5" />
                    Accommodation Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">{travelInfo.accommodationSuggestion}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Local Transport Options:</h4>
                    <div className="space-y-2">
                      {travelInfo.transportOptions.map((option, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-foreground">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Utensils className="h-5 w-5" />
                    Food & Dining
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Must-Try Local Foods:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {travelInfo.foodRecommendations.map((food, index) => (
                        <div key={index} className="bg-green-50 p-2 rounded text-center">
                          <span className="text-sm text-foreground">{food}</span>
                        </div>
                      ))}
                    </div>
                    {formData.mealPreference && formData.mealPreference !== 'any' && (
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <span className="text-sm text-orange-800">
                          ✓ {CONFIG.mealPreferences.find(m => m.value === formData.mealPreference)?.label} options available
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Language & Insurance Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Languages className="h-5 w-5" />
                    Language Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">{travelInfo.languageInfo}</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Shield className="h-5 w-5" />
                    Insurance Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">{travelInfo.insuranceRecommendation}</p>
                </CardContent>
              </Card>
            </div>

            {/* Documents Checklist */}
            <Card className="border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  Required Documents Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {travelInfo.documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personalized Tips */}
            <Card className="border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  Personalized Travel Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {travelInfo.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Get personalized guidance from our immigration experts and make your travel planning seamless with comprehensive support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Download TIN APP
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Download Travel Checklist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default NextMove;