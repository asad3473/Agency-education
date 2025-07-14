import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAuth } from '../contextApi/contextApi'; // adjust path if needed

export default function RenderHeader({ title, subtitle, img }) {
    const { language } = useAuth();
    const isArabic = language === 'ar';

    const getTranslatedTitle = (text) => {
        switch (text) {
            case 'Cyprus International University':
                return 'جامعة قبرص الدولية';
            case 'Final International University':
                return 'جامعة فاينال الدولية';
            case 'University of Kyrenia':
                return 'جامعة كيرينيا';
            case 'Eastern Mediterranean University':
                return 'جامعة شرق البحر الأبيض المتوسط';
            case 'Bahcesehir Cyprus University':
                return 'جامعة بهتشه شهير قبرص';
            case 'NEAR EAST University':
                return 'جامعة الشرق الأدنى';
            default:
                return text;
        }
    };

    // ✅ Translations for subtitles
    const getTranslatedSubtitle = (text) => {
        switch (text) {
            case 'CIU':
                return 'سي آي يو';
            case 'FIU':
                return 'إف آي يو';
            case 'UOK':
                return 'يو أو كيه';
            case 'EMU':
                return 'إي إم يو';
            case 'BCU':
                return 'بي سي يو';
            case 'NEU':
                return 'إن إي يو';
            default:
                return text;
        }
    };

    return (
        <div className="relative h-96 w-full overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90"></div>
            </div>

            {/* Content */}
            <div className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-4 ${isArabic ? 'rtl' : 'ltr'}`}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {isArabic ? getTranslatedTitle(title) : title}
                </h1>
                <div className={`flex items-baseline justify-center gap-1 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <Link to='/' className="text-xl text-white font-medium">
                        {isArabic ? 'الصفحة الرئيسية' : 'Home'}
                    </Link>
                    <span><BiRightArrowAlt className={`${isArabic ? 'rotate-180' : ''}`} /></span>
                    <span className="text-black font-semibold text-xl max-w-2xl drop-shadow-md">
                        {isArabic ? getTranslatedSubtitle(subtitle) : subtitle}
                    </span>
                </div>
            </div>
        </div>
    );
}
