import { ExpertiseEnum } from "@/enums/expertise.enum";
import { DoctorType } from "@/types/doctor.type";
import { GenderEnum } from "@/enums/gender.enum";

export const doctors: DoctorType[] = [
  {
    id: 1,
    gender: GenderEnum.WOMAN,
    name: "پوراندخت جعفری",
    image:
      "/getImage/p24/search-men/155442212a4f2d04e5514bf6f61fd686.jpg?size=150",
    isVerified: false,
    averageRating: 4.99,
    address:
      "خرم آباد,خرم آباد، بین چهارراه بانک و میدان شهدا،ساختمان پزشکان مانا طبقه چهارم",
    firstAvailableAppointment: "کمتر از یک ساعت دیگر",
    expertise: ExpertiseEnum.BONES_AND_JOINTS,
  },
  {
    id: 2,
    gender: GenderEnum.MAN,
    name: "مجتبی قدسی",
    image:
      "/getImage/p24/search-men/75fb4a009a8ab4af3a5c4f819f1846c7.jpg?size=150",
    isVerified: true,
    averageRating: 4.92,
    address:
      "اردبیل,اردبیل، اول خیابان والی، خیابان شهیدان نوعی اقدم، نرسیده به بیمارستان امام خمینی، جنب داروخانه دکترنصیرپور",
    firstAvailableAppointment: "16 دی 11 صبح",
    expertise: ExpertiseEnum.GASTROENTEROLOGY,
  },
  {
    id: 3,
    gender: GenderEnum.MAN,
    name: "امیرحسین پورداود",
    image:
      "/getImage/p24/search-men/98c386aa9c77f7792a4b777137b9fc55.jpg?size=150",
    isVerified: true,
    averageRating: 5,
    address: "جهرم,خیابان ۲۲ بهمن ،جنب بانک مسکن ،ساختمان حکیم ،طبقه سوم",
    firstAvailableAppointment: "15 دی 4 عصر",
    expertise: ExpertiseEnum.BONES_AND_JOINTS,
  },
  {
    id: 4,
    gender: GenderEnum.UNKNOWN,
    name: "اعظم قهساره اردستانی",
    image: "/getImage/p24/search-women/noimage.png?size=150",
    isVerified: true,
    averageRating: 4.95,
    address:
      "اصفهان,شهرک ولی عصر .بیمارستان فوق تخصصی میلاد کلینیک  اطفال ونوزادان",
    firstAvailableAppointment: "13 اسفند 5 عصر",
    expertise: ExpertiseEnum.WOMEN_AND_CHILD_BIRTH,
  },
  {
    id: 5,
    gender: GenderEnum.MAN,
    name: "رضا پورعلی",
    image:
      "/getImage/p24/search-men/d7ec05f5b918e11df6a65e65616140a6.jpg?size=150",
    isVerified: true,
    averageRating: 4.8259,
    address:
      "کلینیک خیام بیمارستان تخصصی و فوق تخصصی حکیم|نیشابور,میدان بسیج، ابتدای جاده باغرود، مرکز اموزشی پژوهشی و درمانی حکیم (درمانگاه طب سنتی ; آدرس: کلینیک امام علی : بلوار جمهوری - بین جمهوری 6و 8)",
    firstAvailableAppointment: "16 دی 8 صبح",
    expertise: ExpertiseEnum.OPHTHALMOLOGY,
  },
  {
    id: 6,
    gender: GenderEnum.UNKNOWN,
    name: "نادیا پرور",
    image: "/getImage/p24/search-women/noimage.png?size=150",
    isVerified: false,
    averageRating: 4.4884,
    address: "کلینیک تخصصی و فوق تخصصی کودکان بندرعباس|بندرعباس,گلشهر شمالی",
    firstAvailableAppointment: "20 دی 9 صبح",
    expertise: ExpertiseEnum.GASTROENTEROLOGY,
  },
  {
    id: 7,
    gender: GenderEnum.MAN,
    name: "محمدرضا ادراکی",
    image:
      "/getImage/p24/search-men/01fffb3a5571c71c0d23baa1703af593.jpg?size=150",
    isVerified: true,
    averageRating: 4.95,
    address: "شیراز,خیابان زند، روبرو هتل پارس، ساختمان صدر زاده، طبقه دوم",
    firstAvailableAppointment: "15 دی 1 عصر",
    expertise: ExpertiseEnum.OPHTHALMOLOGY,
  },
  {
    id: 8,
    gender: GenderEnum.MAN,
    name: "محسن رضائی مقدم",
    image:
      "/getImage/p24/search-men/c5fbfe5e84dff93b4ea9e1d899ddf22a.jpeg?size=150",
    isVerified: true,
    averageRating: 4.93,
    address:
      "قائن,قائن، خیابان دکتر امین زاده، تقاطع جانبازان، ساختمان پزشکان امام جواد",
    firstAvailableAppointment: "19 دی 7 عصر",
    expertise: ExpertiseEnum.WOMEN_AND_CHILD_BIRTH,
  },
  {
    id: 9,
    gender: GenderEnum.MAN,
    name: "پیمان شاه حسینی",
    image:
      "/getImage/p24/search-men/12ff70d98e027620cce5d82906076724.jpg?size=150",
    isVerified: false,
    averageRating: 4.93,
    address: "تهران,تهران، خ شهرارا،خیابان بیستم،پلاک۸",
    firstAvailableAppointment: "16 دی 4 عصر",
    expertise: ExpertiseEnum.OPHTHALMOLOGY,
  },
  {
    id: 10,
    gender: GenderEnum.MAN,
    name: "رضا افتخار",
    image:
      "/getImage/p24/search-men/a6676efea5cc45be71de3391f126696d.jpg?size=150",
    isVerified: false,
    averageRating: 4.95679012345679,
    address:
      "مشهد,حد فاصل بین چهارراه دکتری و میدان امام رضا(ع)، ابن سینا 3،ساختمان اویدنس، طبقه 2، واحد 8",
    firstAvailableAppointment: "فردا 9 صبح",
    expertise: ExpertiseEnum.OPHTHALMOLOGY,
  },
  {
    id: 11,
    gender: GenderEnum.UNKNOWN,
    name: "سیدرامین مدنی",
    image:
      "/getImage/p24/search-men/24148401234ae124eb8346f40c370eb4.jpg?size=150",
    isVerified: true,
    averageRating: 4.86,
    address:
      "بیمارستان شهید بهشتی کاشان|کاشان,بلوار قطب راوندی-مجتمع بیمارستانی شهید بهشتی-کد پستی 87159/81151",
    firstAvailableAppointment: "17 دی 5 عصر",
    expertise: ExpertiseEnum.WOMEN_AND_CHILD_BIRTH,
  },
  {
    id: 12,
    gender: GenderEnum.MAN,
    name: "پژمان روحانی",
    image:
      "/getImage/p24/search-men/5b4488a3f56e3fe53e2f8b8cc2800801.jpg?size=150",
    isVerified: true,
    averageRating: 4.93,
    address:
      "تهران,تهران، خیابان دکتر قریب، بعد نصرت سر کوچه سوسن ساختمان شباهنگ واحد۳۴",
    firstAvailableAppointment: "کمتر از پنج ساعت دیگر",
    expertise: ExpertiseEnum.GASTROENTEROLOGY,
  },
  {
    id: 13,
    gender: GenderEnum.MAN,
    name: "عباس ریحانی",
    image:
      "/getImage/p24/search-men/c8a56ac6d693ee7de3ee638f3cf96642.jpeg?size=150",
    isVerified: false,
    averageRating: 4.86,
    address: "همدان,همدان، بلوار زینبیه، سبدبافان، کلینیک امید",
    firstAvailableAppointment: "کمتر از پنج ساعت دیگر",
    expertise: ExpertiseEnum.BONES_AND_JOINTS,
  },
  {
    id: 14,
    gender: GenderEnum.WOMAN,
    name: "نرگس رخش بهار",
    image:
      "/getImage/p24/search-men/5f2b15855a7d9b9bb648dabd501b4c67.jpg?size=150",
    isVerified: true,
    averageRating: 4.99,
    address:
      "مشهد,مشهد، رازی غربی، میدان امام رضا ساختمان پزشکان رازی طبقه ۴. واحد ۴۰۲ صبحها بججز سه شنبه ها و مطب شماره ۲ خیابان کوهسنگی .بین کوهسنگی ۵ و ۷ . جنب فروشگاه سون. پلاک ۱۶۳ عصره بجز پنجشنبه ها",
    firstAvailableAppointment: "کمتر از یک ساعت دیگر",
    expertise: ExpertiseEnum.WOMEN_AND_CHILD_BIRTH,
  },
  {
    id: 15,
    gender: GenderEnum.UNKNOWN,
    name: "مهران شکری",
    image:
      "/getImage/p24/search-men/9c13b879760e5474ea6b64f1485b148f.jpg?size=150",
    isVerified: true,
    averageRating: 4.5214,
    address:
      "کلینیک تخصصی و فوق تخصصی امید(صبح ،ایت اله روحانی)|بابل,خیابان گنج افروز ضلع غربی بیمارستان روحانی، کلینیک تخصصی و فوق تخصصی امید",
    firstAvailableAppointment: "کمتر از پنج ساعت دیگر",
    expertise: ExpertiseEnum.KIDNEY_AND_URINARY_TRACT,
  },
  {
    id: 16,
    gender: GenderEnum.MAN,
    name: "نوید دانائی",
    image:
      "/getImage/p24/search-men/ae791c7376eb36c7e10ab35a47f4d163.jpeg?size=150",
    isVerified: true,
    averageRating: 4.88,
    address:
      "سمنان,سمنان، ولیعصر، تقاطع شریعتی، رو به روی بستنی شاد ساختمان باران طبقه 6 زنگ 13",
    firstAvailableAppointment: "15 دی 4 عصر",
    expertise: ExpertiseEnum.KIDNEY_AND_URINARY_TRACT,
  },
  {
    id: 17,
    gender: GenderEnum.MAN,
    name: "یوسف رحمانی",
    image:
      "/getImage/p24/search-men/58e7f297268f59d93f310057aa747dcd.jpg?size=150",
    isVerified: true,
    averageRating: 4.87,
    address:
      "کلینیک تخصصی وفوق تخصصی شهید فتاحی|کرمانشاه,کرمانشاه.بلوار شهید بهشتی رو بروی ساختمان شماره 1 دانشگاه علوم پزشکی. ابتدای ورودی بلوار سی متری دوم",
    firstAvailableAppointment: "16 دی 4 عصر",
    expertise: ExpertiseEnum.WOMEN_AND_CHILD_BIRTH,
  },
  {
    id: 18,
    gender: GenderEnum.UNKNOWN,
    name: "منصور مظفری",
    image:
      "/getImage/p24/search-men/92b9b61a759f116fe5712f80d1749cb4.jpg?size=150",
    isVerified: true,
    averageRating: 4.75,
    address:
      "بیمارستان فوق تخصصی چشم پزشکی نگاه|تهران,تقاطع خیابان شریعتی و بزرگراه همت، خیابان کتابی",
    firstAvailableAppointment: "9 فروردین 5 عصر",
    expertise: ExpertiseEnum.KIDNEY_AND_URINARY_TRACT,
  },
  {
    id: 19,
    gender: GenderEnum.UNKNOWN,
    name: "مهراد فخرالدینی",
    image:
      "/getImage/p24/search-men/b847b2a26f6f0151d22b7ea396044550.jpg?size=150",
    isVerified: false,
    averageRating: 4.7128,
    address:
      "کلینیک بیمارستان نیکان|تهران,اقدسیه، ابتدای بلوار ارتش، ورودی اراج، خیابان 22 بهمن، شماره 6",
    firstAvailableAppointment: "18 دی 6 عصر",
    expertise: ExpertiseEnum.GASTROENTEROLOGY,
  },
  {
    id: 20,
    gender: GenderEnum.UNKNOWN,
    name: "جلال امینی",
    image: "/getImage/p24/search-men/noimage.png?size=150",
    isVerified: false,
    averageRating: 4.8442,
    address:
      "بیمارستان شهید هاشمی نژاد تهران|تهران,خیابان ولی عصر (عج)، بالاتر از میدان ونک، کوچه شهید والی نژاد",
    firstAvailableAppointment: "14 اردیبهشت 12 عصر",
    expertise: ExpertiseEnum.OPHTHALMOLOGY,
  },
];
