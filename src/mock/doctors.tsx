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
    expertise: ExpertiseEnum.SPEECH_THERAPY,
    medicalSystemNumber: 2086,
    isVerified: false,
    activity: {
      month: 4,
      year: 2,
    },
    averageRating: 5,
    firstAvailableAppointment: "کمتر از یک ساعت دیگر",
    totalPeopleRate: 295,
    aboutMe:
      "⮜ بیوگرافی\nبا دوازده _12 سال سابقه کار بالینی و گفتاردرمانی کودکان در زمینه های\nدرمان تخصصی اتیسم\nدرمان تخصصی لکنت زبان\nدرمان تخصصی تاخیر کلامی\nدرمان تخصصی مشکلات کلامی در کم شنوایی\nدرمان تخصصی بیش فعالی\nدرمان تخصصی مشکلات کلامی در سکته مغزی\nدرمان تخصصی اختلال بلع\nدرمان تخصصی اختلالات یادگیری\nدرمان تخصصی اختلال صوت\nدرمان تخصصی اختلال خواندن و نوشتن",
    addresses: [
      {
        id: 1,
        title: "مطب پوراندخت جعفری",
        location:
          "خرم آباد - خرم آباد، بین چهارراه بانک و میدان شهدا،ساختمان پزشکان مانا طبقه چهارم",
        phones: ["09013152894", "066-33330037"],
      },
    ],
  },
  {
    id: 2,
    gender: GenderEnum.MAN,
    name: "مجتبی قدسی",
    image:
      "/getImage/p24/search-men/75fb4a009a8ab4af3a5c4f819f1846c7.jpg?size=150",
    expertise: ExpertiseEnum.CHILDREN_DISEASES,
    medicalSystemNumber: 71473,
    isVerified: true,
    activity: {
      month: 3,
    },
    averageRating: 4.92,
    firstAvailableAppointment: "8 بهمن 11 صبح",
    totalPeopleRate: 1505,
    onlineVisitPrice: 140000,
    addresses: [
      {
        id: 1,
        title: "مطب مجتبی قدسی",
        location:
          "اردبیل - اردبیل، اول خیابان والی، خیابان شهیدان نوعی اقدم، نرسیده به بیمارستان امام خمینی، جنب داروخانه دکترنصیرپور",
        phones: ["045-33261148"],
      },
    ],
  },
  {
    id: 3,
    gender: GenderEnum.MAN,
    name: "امیرحسین پورداود",
    image:
      "/getImage/p24/search-men/98c386aa9c77f7792a4b777137b9fc55.jpg?size=150",
    expertise: ExpertiseEnum.PUBLIC_AUCTION,
    medicalSystemNumber: 117769,
    isVerified: false,
    activity: {
      month: 2,
      year: 2,
    },
    averageRating: 5,
    firstAvailableAppointment: "فردا 4 عصر",
    totalPeopleRate: 190,
    aboutMe:
      "ادرس مطب شیراز: شیراز ،میدان مطهری ،ابتدای قدوسی شرقی ،کلینیک پوست و مو و جراحی زیبایی پارسه\nInstagram : dr.pourdavood\nلینک اینستاگرام دکتر :\nhttps://www.instagram.com/dr.pourdavood?igsh=OXFzOGN4Z3MwNG43",
    addresses: [
      {
        id: 1,
        title: "مطب دکتر امیرحسین پورداود",
        location:
          "جهرم - خیابان ۲۲ بهمن ،جنب بانک مسکن ،ساختمان حکیم ،طبقه سوم",
        phones: ["09917633008"],
      },
    ],
  },
  {
    id: 4,
    gender: GenderEnum.WOMAN,
    name: "اعظم قهساره اردستانی",
    image: "/getImage/p24/search-women/noimage.png?size=150",
    expertise: ExpertiseEnum.NEONATAL_MEDICINE,
    medicalSystemNumber: 107027,
    isVerified: false,
    activity: {
      month: 5,
      year: 2,
    },
    averageRating: 4.95,
    firstAvailableAppointment: "13 اسفند 5 عصر",
    totalPeopleRate: 765,
    addresses: [
      {
        id: 1,
        title: "مطب اعظم قهساره اردستانی",
        location:
          "اصفهان - شهرک ولی عصر .بیمارستان فوق تخصصی میلاد کلینیک اطفال ونوزادان",
        phones: ["031-35132301"],
      },
    ],
  },
  {
    id: 5,
    gender: GenderEnum.MAN,
    name: "رضا پورعلی",
    image:
      "/getImage/p24/search-men/d7ec05f5b918e11df6a65e65616140a6.jpg?size=150",
    expertise: ExpertiseEnum.ORTHOPEDIC_SPECIALIST,
    medicalSystemNumber: 162687,
    isVerified: true,
    activity: {
      month: 9,
      year: 2,
    },
    averageRating: 4.8259,
    firstAvailableAppointment: "14 بهمن 8 صبح",
    totalPeopleRate: 347,
    aboutMe:
      "جراح و متخصص استخوان و مفاصل (ارتوپدی)\nفارغ التحصیل از دانشگاه علوم پزشکی مشهد",
    onlineVisitPrice: 20000,
    activeConsultNumber: 3,
    addresses: [
      {
        id: 1,
        title: "درمانگاه عمومی دولتی تخصصی عطار - دانشگاه علوم پزشکی نیشابور",
        location:
          "نیشابور - درمانگاه تخصصی وفوق تخصصی عطارانتهای خیابان ارگ جنوبی(درمانگاه گوارش-ریه- شیمی درمانی و ارولوژی- درب جنوبی بیمارستان22بهمن)",
        phones: ["051-42255280"],
      },
      {
        id: 2,
        title: "کلینیک خیام بیمارستان تخصصی و فوق تخصصی حکیم",
        location:
          "نیشابور - میدان بسیج، ابتدای جاده باغرود، مرکز اموزشی پژوهشی و درمانی حکیم (درمانگاه طب سنتی ; آدرس: کلینیک امام علی : بلوار جمهوری - بین جمهوری 6و 8)",
        phones: ["051-41412020"],
      },
      {
        id: 3,
        title: "مطب رضا پورعلی",
        location: "نیشابور - بیمارستان حکیم",
        phones: ["02156727042"],
      },
    ],
  },
  {
    id: 6,
    gender: GenderEnum.WOMAN,
    name: "نادیا پرور",
    image: "/getImage/p24/search-women/noimage.png?size=150",
    expertise: ExpertiseEnum.CHILDREN_DISEASES,
    medicalSystemNumber: 121670,
    isVerified: false,
    activity: {
      month: 11,
      year: 3,
    },
    averageRating: 4.4884,
    firstAvailableAppointment: "20 دی 9 صبح",
    totalPeopleRate: 139,
    addresses: [
      {
        id: 1,
        title: "مطب نادیا پرور",
        location: "بندرعباس - بندرعباس، بلوار جمهوری ‌بیمارستان کودکان",
        phones: ["09177634332"],
      },
      {
        id: 2,
        title: "کلینیک تخصصی و فوق تخصصی کودکان بندرعباس",
        location: "بندرعباس - گلشهر شمالی",
        phones: [],
      },
    ],
  },
  {
    id: 7,
    gender: GenderEnum.MAN,
    name: "محمدرضا ادراکی",
    image:
      "/getImage/p24/search-men/01fffb3a5571c71c0d23baa1703af593.jpg?size=150",
    expertise: ExpertiseEnum.CHILDREN_DISEASES,
    medicalSystemNumber: 53195,
    isVerified: true,
    activity: {
      month: 3,
    },
    averageRating: 4.95,
    firstAvailableAppointment: "فردا 1 عصر",
    totalPeopleRate: 426,
    aboutMe:
      "عضو هیات علمی دانشگاه علوم پزشکی شیراز\nفوق تخصص قلب کودکان و نوجوانان و جنین\nفلوشیپ آنژیوگرافی نوجوانان، کودکان و جنین\nعضو تیم آنژیوگرافی جنین دانشگاه علوم پزشکی شیراز\nدوره تکمیلی آنژیوگرافی قلبی از کشور آلمان\n\nفعالیت های پزشکی:   \nاکوکاردیوگرافی قلبی نوجوانان و کودکان\nاکوکاردیوگرافی قلب جنین\nآنژیوگرافی نوجوانان، کودکان و جنین\nدرمان بی نظمی قلبی\nدرمان دردهای قفسه سینه\nدرمان طپش قلب\nانجام تست ورزش\nهولتر فشار خون 24 ساعته\nهولتر نوار قلب 24 ساعته\nنوار قلب",
    addresses: [
      {
        id: 1,
        title: "مطب محمدرضا ادراکی",
        location:
          "شیراز - خیابان زند، روبرو هتل پارس، ساختمان صدر زاده، طبقه دوم",
        phones: ["09379328809"],
      },
      {
        id: 2,
        title: "درمانگاه امام رضا دانشگاه علوم پزشکی فارس",
        location: "شیراز - فارس",
        phones: ["071-32127000"],
      },
    ],
  },
  {
    id: 8,
    gender: GenderEnum.MAN,
    name: "محسن رضائی مقدم",
    image:
      "/getImage/p24/search-men/c5fbfe5e84dff93b4ea9e1d899ddf22a.jpeg?size=150",
    expertise: ExpertiseEnum.OPHTHALMOLOGY,
    medicalSystemNumber: 124416,
    isVerified: true,
    activity: {
      month: 3,
      year: 5,
    },
    averageRating: 4.93,
    firstAvailableAppointment: "19 دی 7 عصر",
    totalPeopleRate: 394,
    aboutMe:
      "دانش آموخته دبیرستان نمونه ملک ثابت یزد-۱۳۷۹\nفارغ التحصیل دوره پزشکی عمومی از دانشگاه علوم پزشکی تهران-۱۳۸۷\nفارغ التحصیل دوره تخصصی چشم پزشکی از دانشگاه علوم پزشکی شهید بهشتی-۱۳۹۶ \nدارای بورد تخصصی چشم پزشکی\nجراحی آب مروارید، ناخنک، انسداد مجاری اشکی، جراحی زیبایی پلک، حذف عینک (PRK، لیزیک و ..)\nتشخیص و درمان بیماریهای چشمی\nچشم پزشک",
    onlineVisitPrice: 250000,
    addresses: [
      {
        id: 1,
        title: "مطب محسن رضائی مقدم",
        location:
          "قائن - قائن، خیابان دکتر امین زاده، تقاطع جانبازان، ساختمان پزشکان امام جواد",
        phones: ["056-32530047", "056-32524731"],
      },
    ],
  },
  {
    id: 9,
    gender: GenderEnum.MAN,
    name: "پیمان شاه حسینی",
    image:
      "/getImage/p24/search-men/12ff70d98e027620cce5d82906076724.jpg?size=150",
    expertise: ExpertiseEnum.CHILDREN_DISEASES,
    medicalSystemNumber: 74141,
    isVerified: true,
    activity: {},
    averageRating: 4.93,
    firstAvailableAppointment: "16 دی 4 عصر",
    totalPeopleRate: 346,
    addresses: [
      {
        id: 1,
        title: "مطب پیمان شاه حسینی",
        location: "تهران - تهران، خ شهرارا،خیابان بیستم،پلاک8",
        phones: ["021-88289510"],
      },
      {
        id: 2,
        title: "بیمارستان فرهیختگان",
        location:
          "تهران - تهران انتهای بلوار ستاری میدان دانشگاه خ شهدای حصارک.",
        phones: ["021-44867252"],
      },
    ],
  },
  {
    id: 10,
    gender: GenderEnum.MAN,
    name: "رضا افتخار",
    image:
      "/getImage/p24/search-men/a6676efea5cc45be71de3391f126696d.jpg?size=150",
    expertise: ExpertiseEnum.GASTROENTEROLOGY,
    medicalSystemNumber: 6515,
    isVerified: false,
    activity: {
      month: 9,
      year: 2,
    },
    averageRating: 4.95679012345679,
    firstAvailableAppointment: "فردا 9 صبح",
    totalPeopleRate: 332,
    addresses: [
      {
        id: 1,
        title: "مطب رضا افتخار",
        location:
          "مشهد - حد فاصل بین چهارراه دکتری و میدان امام رضا(ع)، ابن سینا 3،ساختمان اویدنس، طبقه 2، واحد 8",
        phones: ["09924800998", "051-38549405"],
      },
    ],
  },
  {
    id: 11,
    gender: GenderEnum.MAN,
    name: "سیدرامین مدنی",
    image:
      "/getImage/p24/search-men/24148401234ae124eb8346f40c370eb4.jpg?size=150",
    expertise: ExpertiseEnum.CHILDREN_DISEASES,
    medicalSystemNumber: 108479,
    isVerified: true,
    activity: {
      month: 9,
      year: 5,
    },
    averageRating: 4.86,
    firstAvailableAppointment: "17 دی 5 عصر",
    totalPeopleRate: 1414,
    addresses: [
      {
        id: 1,
        title: "بیمارستان شهید بهشتی کاشان",
        location:
          "کاشان - بلوار قطب راوندی-مجتمع بیمارستانی شهید بهشتی-کد پستی 87159/81151",
        phones: ["031-55540026"],
      },
      {
        id: 2,
        title: "پلی کلینیک تخصصی و فوق تخصصی بوعلی سینا آران و بیدگل",
        location: "آران و بیدگل - میدان 15 خرداد",
        phones: ["031-54732929"],
      },
      {
        id: 3,
        title: "کلینیک ویژه اخوان",
        location: "کاشان - میدان 15 خرداد جنب ستاد مرکزی دانشگاه علوم پزشکی",
        phones: ["031-55770000"],
      },
    ],
  },
  {
    id: 12,
    gender: GenderEnum.MAN,
    name: "پژمان روحانی",
    image:
      "/getImage/p24/search-men/5b4488a3f56e3fe53e2f8b8cc2800801.jpg?size=150",
    expertise: ExpertiseEnum.CHILDREN_DISEASES,
    medicalSystemNumber: 78825,
    isVerified: true,
    activity: {
      month: 1,
    },
    averageRating: 4.93,
    firstAvailableAppointment: "کمتر از پنج ساعت دیگر",
    totalPeopleRate: 1239,
    aboutMe:
      "فوق تخصص گوارش کبد و تغذیه کودکان\nعضو هیات علمی دانشگاه علوم پزشکی تهران\nدانشیار دانشگاه علوم پزشکی تهران\nفارغ التحصیل دانشگاه علوم پزشکی تهران رتبه اول ورودی و بورد فوق تخصص گوارش کودکان\nدارای فلوشیپ اندوسونوگرافی و ERCPبررسی مجاری صفراوی و بیماری های مجرای پانکراس و کبد کودکان\nدارای فلوشیپ  بیماری التهابی روده (کرون وکولیت اولسروز)  کودکان از اروپا\nعضو انجمن گوارش و کبد و تغذیه کودکان اروپا\nلطفا جهت پذیرش تا قبل ساعت18:30مطب باشید حتی اگر وقت شما بین  ساعت 18:30تا 20 میباشد",
    onlineVisitPrice: 210000,
    activeConsultNumber: 10,
    addresses: [
      {
        id: 1,
        title: "مطب پژمان روحانی",
        location:
          "تهران - تهران، خیابان دکتر قریب، بعد نصرت سر کوچه سوسن ساختمان شباهنگ واحد۳۴",
        phones: ["021-66906612"],
      },
      {
        id: 2,
        title: "مطب پژمان روحانی",
        location:
          "تهران - خیابان شریعتی، بالاتر از حسینیه ارشاد، نرسیده به میرداماد، بیمارستان کودکان مفید",
        phones: ["021-22227021"],
      },
      {
        id: 3,
        title: "بیمارستان فوق تخصصی مرکز طبی کودکان",
        location:
          "تهران - انتهای بلوار کشاورز - خیابان دکتر محمد قریب - پلاک 62",
        phones: ["021-67395454"],
      },
    ],
  },
  {
    id: 13,
    gender: GenderEnum.MAN,
    name: "عباس ریحانی",
    image:
      "/getImage/p24/search-men/c8a56ac6d693ee7de3ee638f3cf96642.jpeg?size=150",
    expertise: ExpertiseEnum.CARDIOVASCULAR_DISEASES,
    medicalSystemNumber: 136736,
    isVerified: false,
    activity: {
      month: 2,
    },
    averageRating: 4.86,
    firstAvailableAppointment: "کمتر از پنج ساعت دیگر",
    totalPeopleRate: 1066,
    aboutMe:
      "بابت لطف و محبت ها و انتقاداتی که به بنده داشتید  بسیار سپاسگزارم ، آرزوی سلامتی برای همه ی همشهریان بزرگوار را خواستارم.",
    addresses: [
      {
        id: 1,
        title: "کلینیک مرکز قلب فرشچیان",
        location:
          "همدان - همدان، بلوار شهید فهمیده، مرکز آموزشی درمانی فوق تخصصی قلب و عروق فرشچیان",
        phones: ["081-31111600"],
      },
      {
        id: 2,
        title: "کلینیک مهدیه همدان",
        location:
          "همدان - همدان-خیابان خضریان-کلینیک تخصصی و فوق تخصصی مهدیه شماره 4",
        phones: ["081-32646702"],
      },
      {
        id: 3,
        title: "کلینیک امید همدان",
        location:
          "همدان - همدان- خیابان سبد بافان - کلینیک تخصصی و فوق تخصصی امید همدان",
        phones: [],
      },
      {
        id: 4,
        title: "مطب عباس ریحانی",
        location: "همدان - همدان، بلوار زینبیه، سبدبافان، کلینیک امید",
        phones: ["081-34244731"],
      },
    ],
  },
  {
    id: 14,
    gender: GenderEnum.WOMAN,
    name: "نرگس رخش بهار",
    image:
      "/getImage/p24/search-men/5f2b15855a7d9b9bb648dabd501b4c67.jpg?size=150",
    expertise: ExpertiseEnum.WOMEN_AND_CHILD_BIRTH,
    medicalSystemNumber: 122158,
    isVerified: false,
    activity: {
      month: 3,
    },
    averageRating: 4.99,
    firstAvailableAppointment: "کمتر از یک ساعت دیگر",
    totalPeopleRate: 120,
    addresses: [
      {
        id: 1,
        title: "مطب نرگس رخش بهار",
        location:
          "مشهد - مشهد، رازی غربی، میدان امام رضا ساختمان پزشکان رازی طبقه 4. واحد 402 صبحها بججز سه شنبه ها و مطب شماره 2 خیابان کوهسنگی .بین کوهسنگی 5 و 7 . جنب فروشگاه سون. پلاک 163 عصره بجز پنجشنبه ها",
        phones: ["051-38553427"],
      },
    ],
  },
  {
    id: 15,
    gender: GenderEnum.MAN,
    name: "مهران شکری",
    image:
      "/getImage/p24/search-men/9c13b879760e5474ea6b64f1485b148f.jpg?size=150",
    expertise: ExpertiseEnum.KIDNEY_AND_URINARY_TRACT,
    medicalSystemNumber: 123682,
    isVerified: true,
    activity: {
      month: 1,
      year: 6,
    },
    averageRating: 4.5214,
    firstAvailableAppointment: "کمتر از پنج ساعت دیگر",
    totalPeopleRate: 357,
    aboutMe:
      "⮜ بیوگرافی\nآدرس مطب شخصی دکتر مهران شکری:\nمازندران - بابل - خیابان مدرس - ساختمان گلستان - طبقه سوم",
    addresses: [
      {
        id: 1,
        title: "کلینیک تخصصی و فوق تخصصی امید",
        location:
          "بابل - خیابان گنج افروز - ضلع غربی بیمارستان روحانی - کلینیک تخصصی و فوق تخصصی امید",
        phones: [],
      },
    ],
  },
  {
    id: 16,
    gender: GenderEnum.MAN,
    name: "نوید دانائی",
    image:
      "/getImage/p24/search-men/ae791c7376eb36c7e10ab35a47f4d163.jpeg?size=150",
    expertise: ExpertiseEnum.CHILDREN_DISEASES,
    medicalSystemNumber: 85697,
    isVerified: true,
    activity: {
      month: 2,
      year: 2,
    },
    averageRating: 4.88,
    firstAvailableAppointment: "15 دی 4 عصر",
    totalPeopleRate: 951,
    addresses: [
      {
        id: 1,
        title: "مطب نوید دانائی",
        location:
          "سمنان - سمنان، ولیعصر، تقاطع شریعتی، رو به روی بستنی شاد ساختمان باران طبقه 6 زنگ 13",
        phones: ["023-33321670"],
      },
      {
        id: 2,
        title: "بیمارستان امیرالمومنین سمنان",
        location:
          "سمنان - بلوار مصطفی خمینی (ره) -روبروی چهارصد دستگاه- مرکزآموزشی درمانی امیرالمومنین",
        phones: ["023-33460066"],
      },
    ],
  },
  {
    id: 17,
    gender: GenderEnum.MAN,
    name: "یوسف رحمانی",
    image:
      "/getImage/p24/search-men/58e7f297268f59d93f310057aa747dcd.jpg?size=150",
    expertise: ExpertiseEnum.CARDIOVASCULAR_DISEASES,
    medicalSystemNumber: 118774,
    isVerified: true,
    activity: {
      month: 5,
    },
    averageRating: 4.87,
    firstAvailableAppointment: "16 دی 4 عصر",
    totalPeopleRate: 959,
    aboutMe: "متخصص قلب و عروق  از دانشگاه تهران",
    activeConsultNumber: 50,
    onlineVisitPrice: 31000,
    addresses: [
      {
        id: 1,
        title: "کلینیک تخصصی وفوق تخصصی شهید فتاحی",
        location:
          "کرمانشاه - کرمانشاه.بلوار شهید بهشتی رو بروی ساختمان شماره 1 دانشگاه علوم پزشکی. ابتدای ورودی بلوار سی متری دوم",
        phones: ["083-38378098"],
      },
      {
        id: 2,
        title: "مطب یوسف رحمانی",
        location:
          "کرمانشاه - کرمانشاه,بیمارستان فوق تخصصی قلب و عروق، کلینیک ویژه",
        phones: [],
      },
      {
        id: 3,
        title: "بیمارستان امام علی (ع) کرمانشاه- درمانگاه قلب و عروق",
        location:
          "کرمانشاه - کرمانشاه بلوار شهیدبهشتی جنب ساختمان شماره 1 دانشگاه علوم پزشکی",
        phones: [],
      },
    ],
  },
  {
    id: 18,
    gender: GenderEnum.MAN,
    name: "منصور مظفری",
    image:
      "/getImage/p24/search-men/92b9b61a759f116fe5712f80d1749cb4.jpg?size=150",
    expertise: ExpertiseEnum.OPHTHALMOLOGY,
    medicalSystemNumber: 25618,
    isVerified: true,
    activity: {
      month: 1,
      year: 7,
    },
    averageRating: 4.75,
    firstAvailableAppointment: "9 فروردین 5 عصر",
    totalPeopleRate: 183,
    addresses: [
      {
        id: 1,
        title: "بیمارستان فوق تخصصی چشم پزشکی نگاه",
        location: "تهران - تقاطع خیابان شریعتی و بزرگراه همت، خیابان کتابی",
        phones: ["021-23555"],
      },
      {
        id: 2,
        title: "مطب منصور مظفری",
        location:
          "تهران - محل کار: خ شریعتی خ یخچال بیمارستان هدایت | مطب: پارک قیطریه میدان چیذر مقابل داروخانه کامیار ساختمان پزشکان رز ط 5 واحد 12",
        phones: ["021-22544173-5", "021-22211913"],
      },
      {
        id: 3,
        title: "مرکز فوق تخصصی چشم پزشکی رازی تهران",
        location:
          "تهران - ونک- گاندی جنوبی- نبش خیابان هفتم(شهید پالیزوانی) پلاک 24",
        phones: ["02181034"],
      },
    ],
  },
  {
    id: 19,
    gender: GenderEnum.MAN,
    name: "مهراد فخرالدینی",
    image:
      "/getImage/p24/search-men/b847b2a26f6f0151d22b7ea396044550.jpg?size=150",
    expertise: ExpertiseEnum.CARDIOVASCULAR_DISEASES,
    medicalSystemNumber: 57398,
    isVerified: false,
    activity: {
      month: 4,
      year: 7,
    },
    averageRating: 4.7128,
    firstAvailableAppointment: "18 دی 6 عصر",
    totalPeopleRate: 159,
    addresses: [
      {
        id: 1,
        title: "کلینیک بیمارستان نیکان",
        location:
          "تهران - اقدسیه، ابتدای بلوار ارتش، ورودی اراج، خیابان 22 بهمن، شماره 6",
        phones: ["021-29120000"],
      },
      {
        id: 2,
        title: "مطب مهراد فخرالدینی",
        location:
          "تهران - تهران، خیابان شریعتی، روبرو استگاه مترو قلهک، ساختمان نوبهار، پلاک4، واحد8",
        phones: ["021-22923067"],
      },
      {
        id: 3,
        title: "مطب مهراد فخرالدینی",
        location:
          "تهران - خیابان شریعتی ، روبروی درب اصلی مترو قلهک ، کوچه کدوئی ، ساختمان نوبهار ، پلاک 4 واحد8,خیابان شریعتی - قلهک - جنب ایستگاه مترو قلهک - اول خیابان کدویی - پلاک - واحد 8,استان تهران، شهر تهران، منطقه 3، شریعتی، بالاتر از خیابان یخچال، قلهک، خ. کدویی، پ. 4، مجتمع نوبهار، واحد 8",
        phones: ["021-22923067", "021-22923067"],
      },
      {
        id: 4,
        title: "مطب مهراد فخرالدینی",
        location:
          "تهران - مطب: خیابان شریعتی-قلهک -جنب ایستگاه مترو قلهک-اول خیابان کدویی- مجتمع نوبهار -بلاک4-واحد8 | محل کار: میدان اقدسیه بیمارستان نیکان",
        phones: ["021-22923067", "021-29121000-29122000"],
      },
    ],
  },
  {
    id: 20,
    gender: GenderEnum.MAN,
    name: "جلال امینی",
    image: "/getImage/p24/search-men/noimage.png?size=150",
    expertise: ExpertiseEnum.KIDNEY_AND_URINARY_TRACT,
    medicalSystemNumber: 136509,
    isVerified: false,
    activity: {
      month: 10,
    },
    averageRating: 4.8442,
    firstAvailableAppointment: "14 اردیبهشت 12 عصر",
    totalPeopleRate: 17,
    activeConsultNumber: 3,
    onlineVisitPrice: 5000,
    addresses: [
      {
        id: 1,
        title: "مطب جلال امینی",
        location: "تهران - مطب",
        phones: [],
      },
    ],
  },
];
