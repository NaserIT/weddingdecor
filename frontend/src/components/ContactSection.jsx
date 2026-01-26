import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const companyInfo = {
  phone: "+49 123 456 7890",
  email: "info@perfectweddingdeko.de",
  address: {
    street: "Musterstraße 123",
    city: "12345 Musterstadt",
    country: "Deutschland"
  },
  socialMedia: {
    instagram: "https://instagram.com/perfectweddingdeko",
    facebook: "https://facebook.com/perfectweddingdeko"
  }
};

const ContactSection = () => {
  const { currentLang, isRTL } = useLanguage();
  const t = translations[currentLang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    products: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, products: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t.errorRequired);
      return;
    }

    if (!acceptTerms) {
      toast.error(t.errorPrivacy);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (Mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t.success);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      products: '',
      message: ''
    });
    setAcceptTerms(false);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t.phone,
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone}`
    },
    {
      icon: Mail,
      label: t.email,
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`
    },
    {
      icon: MapPin,
      label: t.address,
      value: `${companyInfo.address.street}, ${companyInfo.address.city}`,
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-stone-50 to-stone-100" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
            {t.title}
            <span className="text-amber-600"> {t.titleHighlight}</span> {t.titleEnd}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <a href={info.href} className={`flex items-center gap-4 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <info.icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className={isRTL ? 'text-right' : ''}>
                      <p className="text-sm text-stone-500">{info.label}</p>
                      <p className="font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className={`text-sm text-stone-500 mb-4 ${isRTL ? 'text-right' : ''}`}>{t.followUs}</p>
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <a
                    href={companyInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={companyInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name - Required */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className={`text-emerald-900 ${isRTL ? 'block text-right' : ''}`}>
                      {t.form.name} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.form.namePlaceholder}
                      required
                      className={`border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 ${isRTL ? 'text-right' : ''}`}
                    />
                  </div>

                  {/* Email - Required */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className={`text-emerald-900 ${isRTL ? 'block text-right' : ''}`}>
                      {t.form.emailLabel} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.form.emailPlaceholder}
                      required
                      className={`border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 ${isRTL ? 'text-right' : ''}`}
                    />
                  </div>

                  {/* Phone - Optional */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={`text-emerald-900 ${isRTL ? 'block text-right' : ''}`}>
                      {t.phone} <span className="text-stone-400 text-sm">({t.form.optional})</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.form.phonePlaceholder}
                      className={`border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 ${isRTL ? 'text-right' : ''}`}
                    />
                  </div>

                  {/* Event Date - Optional */}
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className={`text-emerald-900 ${isRTL ? 'block text-right' : ''}`}>
                      {t.form.eventDate} <span className="text-stone-400 text-sm">({t.form.optional})</span>
                    </Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="border-stone-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Products - Optional */}
                <div className="space-y-2">
                  <Label htmlFor="products" className={`text-emerald-900 ${isRTL ? 'block text-right' : ''}`}>
                    {t.form.products} <span className="text-stone-400 text-sm">({t.form.optional})</span>
                  </Label>
                  <Select value={formData.products} onValueChange={handleSelectChange}>
                    <SelectTrigger className={`border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 ${isRTL ? 'text-right' : ''}`}>
                      <SelectValue placeholder={t.form.productsPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message - Required */}
                <div className="space-y-2">
                  <Label htmlFor="message" className={`text-emerald-900 ${isRTL ? 'block text-right' : ''}`}>
                    {t.form.message} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.form.messagePlaceholder}
                    rows={5}
                    required
                    className={`border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none ${isRTL ? 'text-right' : ''}`}
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={setAcceptTerms}
                    className="mt-1 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <Label htmlFor="terms" className={`text-sm text-stone-600 cursor-pointer ${isRTL ? 'text-right' : ''}`}>
                    {t.form.privacy} <span className="text-red-500">*</span>
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <span className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.form.sending}
                    </span>
                  ) : (
                    <span className={`flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Send className="w-5 h-5" />
                      {t.form.submit}
                    </span>
                  )}
                </Button>

                <p className="text-center text-sm text-stone-500">
                  <span className="text-red-500">*</span> {t.form.required}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
