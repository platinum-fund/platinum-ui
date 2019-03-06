const content = [
  {
    name: 'Anton Dzyatkovskiy',
    role: 'Co-founder, COO',
    contacts: {
      telegram: 'https://telegram.me/antondz',
      skype: 'skype:antond.merlion',
      linkedIn:
        'https://www.linkedin.com/in/anton-dziatkovskii-47012a95/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3B4wiA%2FaXeTaWoH1T%2BF86I%2Bg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_people-search_srp_result&lici=1KA08%2BOUSkOlrmoj97J9eQ%3D%3D'
    },
    country: 'Thailand',
    photo: require('./photos/anton-dzyatkovskiy.jpg')
  },
  {
    name: 'Pavel Bogush',
    role: 'Deputy of COO',
    contacts: {
      telegram: 'https://telegram.me/NewHappyDay',
      skype: 'skype:pepel_2',
      linkedIn: 'https://www.linkedin.com/in/pavel-bogush/'
    },
    country: 'Thailand',
    photo: require('./photos/pavel-bogush.jpg')
  },
  {
    name: 'Dan Khomenko',
    role: 'Сo-founder',
    contacts: {
      telegram: 'https://telegram.me/dankom',
      skype: 'skype:bodestar1991',
      linkedIn: ''
    },
    country: 'Australia',
    photo: require('./photos/dan-khomenko.jpg')
  },
  {
    name: 'Natalia Klemenova',
    role: 'Head of Finance department',
    contacts: {
      telegram: 'https://telegram.me/nataklemenova',
      skype: 'skype:tusya-natunec',
      linkedIn: 'https://www.linkedin.com/in/nata-k-02a79a164/'
    },
    country: 'Russia',
    photo: require('./photos/natalia-klemenova.png')
  },
  {
    name: 'Helena Kondricheva',
    role: 'Finance assistant',
    contacts: {
      telegram: 'https://telegram.me/KoHelena',
      skype: 'skype:marlusha_z',
      linkedIn: ''
    },
    country: 'Russia',
    photo: require('./photos/helen-kondracheva.jpg')
  },
  {
    name: 'Vladimir Grinevskiy',
    role: 'Chief Editor',
    contacts: {
      telegram: 'https://telegram.me/vsvoboden',
      skype: 'skype:vsvoboden',
      linkedIn: ''
    },
    country: 'Belarus',
    photo: require('./photos/vladimir-hovanskiy.jpg')
  },
  {
    name: 'Olga Novitskaya',
    role: 'Project manager on Post-ICO marketing projects',
    contacts: {
      telegram: 'https://telegram.me/ONovitskaya',
      skype: 'skype:onovitskayabel',
      linkedIn: 'https://www.linkedin.com/in/onovitskaya/'
    },
    country: 'Belarus'
    // photo: require('./photos/')
  },
  {
    name: 'Alena Pilchanka',
    role: 'SMM manager',
    contacts: {
      telegram: 'https://telegram.me/HPilch',
      skype: 'skype:h.pilchenko@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/helen-pilchanka-335434119/'
    },
    country: 'Belarus',
    photo: require('./photos/alena-pichanka-belarus-minsk.png')
  },
  {
    name: 'Julia Savitskaya',
    role: 'SMM manager',
    contacts: {
      telegram: 'https://telegram.me/YulikoS',
      skype: 'skype:sweeeeet_darling',
      linkedIn: ''
    },
    country: 'Ukraine',
    photo: require('./photos/julia-savitskaya.jpg')
  },
  {
    name: 'Vladimir Hovansky (Galicin)',
    role: 'Google Adwords manager/Analytics',
    contacts: {
      telegram: 'https://telegram.me/Vlad_Hovanskiy',
      skype: 'skype:atasarmat1980',
      linkedIn: 'https://www.linkedin.com/in/владимир-хованский-7a1066163/'
    },
    country: 'Ukraine',
    photo: require('./photos/vladimir-hovanskiy.jpg')
  },
  {
    name: 'Dmitrii Skripkin',
    role: 'Team lead',
    contacts: {
      telegram: 'https://telegram.me/d_skripkin',
      skype: 'skype:skripkin.ru',
      linkedIn: ''
    },
    country: 'Thailand',
    photo: require('./photos/dmitrii-skripkin.jpg')
  },
  {
    name: 'Anton Vasiliev ',
    role: ' E-mail marketing ',
    contacts: {
      telegram: 'https://telegram.me/carmelovas',
      skype: 'skype:carmelovas',
      linkedIn: 'fb may be found by email'
    },
    country: 'Russia',
    photo: require('./photos/anton-vasiliev.jpg')
  },
  {
    name: 'Artem Finko',
    role: 'Bounty manager',
    contacts: {
      telegram: 'https://telegram.me/obscuredust88',
      skype: 'skype:https://join.skype.com/invite/kUKhmHkK7byQ',
      linkedIn: 'https://www.linkedin.com/in/artem-finko-425046156/'
    },
    country: 'Russia',
    photo: require('./photos/artem-finko.jpg')
  },
  {
    name: 'Evgenii Mayboroda',
    role: 'traffic manager ',
    contacts: {
      telegram: 'https://telegram.me/john_craft',
      skype: 'skype:maiboroda.ed',
      linkedIn: ''
    },
    country: 'Russia'
    // photo: require('./photos/')
  },
  {
    name: 'Daniil Kapran',
    role: 'Sales manager',
    contacts: {
      telegram: 'https://telegram.me/Daniel_Kapran',
      skype: 'skype:dkapran54321',
      linkedIn: 'https://www.linkedin.com/in/daniel-kapran-592066150'
    },
    country: 'Thailand',
    photo: require('./photos/daniel-kapran-bangkok.jpg')
  },
  {
    name: 'Dmitry Brykin ',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/KorhSupport',
      skype: 'skype:live:dezor204',
      linkedIn: 'https://www.linkedin.com/in/dmitry-brykin-7a7a60164/'
    },
    country: 'Russia',
    photo: require('./photos/dmitry-brykin-russia-omsk.png')
  },
  {
    name: 'Haleel Risthisen',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/gummysx',
      skype: 'skype:nooni.renei',
      linkedIn: 'http://linkedin.com/in/haleel-risthisen-ba3230166'
    },
    country: 'Thailand',
    photo: require('./photos/haleel-risthisen-thailand-bangkok.png')
  },
  {
    name: 'Ilona Smirnova',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/ilonasm',
      skype: 'skype:ilona2001_7',
      linkedIn: 'http://linkedin.com/in/ilona-smirnova-51122b166'
    },
    country: 'Thailand'
    // photo: require('./photos/')
  },
  {
    name: 'Eric Risthisen',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/colddogz',
      skype: 'skype:amristhisen',
      linkedIn: 'http://linkedin.com/in/eric-risthisen-759231166'
    },
    country: 'Thailand',
    photo: require('./photos/eric-risthisen-thailand-bangkok.png')
  },
  {
    name: 'Teethat Rinchai',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/Talonpro',
      skype: 'skype:tanakahorror',
      linkedIn: 'http://www.linkedin.com/in/teethat-rinchai-b98250166'
    },
    country: 'Thailand',
    photo: require('./photos/teethat-richai-thailand.jpg')
  },
  {
    name: 'Alexander Edelstein',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/eyisback',
      skype: 'skype:dikiy_maloy',
      linkedIn: 'https://www.linkedin.com/in/alexander-eydelshtein-308846164/'
    },
    country: 'Russia',
    photo: require('./photos/alexander-edelstein-saint-petersburg.jpg')
  },
  {
    name: 'Alexander Ikaev',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/itakella',
      skype: 'skype:aykaev1',
      linkedIn: 'https://www.linkedin.com/in/alexandr-aykaev-993880164/'
    },
    country: 'Russia',
    photo: require('./photos/alexander-ikaev-saint-petersburg.jpg')
  },
  {
    name: 'Mariya Danilova',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/Mashysh',
      skype: 'skype:live:2274b2042dd457dc',
      linkedIn:
        'https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%B4%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0-a75845164'
    },
    country: 'Russia',
    photo: require('./photos/mariya-danilova-saint-petersburg.jpg')
  },
  {
    name: 'Artyom Sabura',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/artyomque',
      skype: 'skype:furuderikach',
      linkedIn:
        'http://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%91%D0%BC-%D1%81%D0%B0%D0%B1%D1%83%D1%80%D0%B0-a62923165'
    },
    country: 'Russia',
    photo: require('./photos/artyom-sabura-saint-petersburg.jpg')
  },
  {
    name: 'Denis Simonov',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/den591',
      skype: 'skype:vce_dlia_meia',
      linkedIn: 'https://www.linkedin.com/in/denis-simonov-66023b164/'
    },
    country: 'Thailand',
    photo: require('./photos/denis-simonov---bangkok.jpg')
  },
  {
    name: 'Theresa Huang',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/Walkman531',
      skype: 'skype:chientze.huang',
      linkedIn: ''
    },
    country: 'Taiwan'
    // photo: require('./photos/')
  },
  {
    name: 'Eunchae Jang',
    role: 'Sales/support',
    contacts: {
      telegram: 'https://telegram.me/Eunchae4',
      skype: 'skype:eae716@naver.com',
      linkedIn: 'http://www.linkedin.com/in/eunchae-jang-653576163'
    },
    country: 'Korea',
    photo: require('./photos/eunchae-jang-seul.jpg')
  },
  {
    name: 'Anzhelika Erhan',
    role: 'Head of Designers',
    contacts: {
      telegram: 'https://telegram.me/angelika_erhan',
      skype: 'skype:live:floopy_nyc',
      linkedIn: 'https://www.linkedin.com/in/angelika-erhan-29a184164/'
    },
    country: 'USA',
    photo: require('./photos/anzhelika-erhan.jpg')
  },
  {
    name: 'Viktoria Mikhalkina',
    role: 'Designer',
    contacts: {
      telegram: 'https://telegram.me/robbeen',
      skype: 'skype:vika_robert',
      linkedIn: 'https://www.linkedin.com/in/vika-robert-7479b5159/'
    },
    country: 'Russia',
    photo: require('./photos/viktoria-robert-saratov.jpg')
  },
  {
    name: 'Daria Volkova ',
    role: 'Assistant',
    contacts: {
      telegram: 'https://telegram.me/DariaVolkova7',
      skype: 'skype:Dashyk-Karandashyk',
      linkedIn:
        'https://www.linkedin.com/in/%D0%B4%D0%B0%D1%80%D1%8C%D1%8F-%D0%B2%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D0%B0-53875b76/'
    },
    country: 'Ukraine',
    photo: require('./photos/daria-volkova--zaporizhzhya.jpg')
  },
  {
    name: 'Ivan Nosha',
    role: 'Sales Director',
    contacts: {
      telegram: 'https://telegram.me/noshman',
      skype: 'skype:ivan.nosha',
      linkedIn: 'https://www.linkedin.com/in/ivan-nosha/'
    },
    country: 'Thailand',
    photo: require('./photos/ivan-nosha.jpg')
  },
  {
    name: 'Andrei Ratov',
    role: 'Sales manager ',
    contacts: {
      telegram: 'https://telegram.me/AndreyRatov',
      skype: 'skype:Kraman35',
      linkedIn: 'https://www.linkedin.com/in/andreyratov/'
    },
    country: 'Japan'
    // photo: require('./photos/')
  },
  {
    name: 'Anton Znamenschikov',
    role: 'Sales Manager / Deputy',
    contacts: {
      telegram: 'https://telegram.me/Antonzna',
      skype: 'skype:luidgy_131',
      linkedIn: 'https://www.linkedin.com/in/anton-grey-287587163/'
    },
    country: 'New-Zealand',
    photo: require('./photos/anton-znamenschikov---auckland.jpg')
  },
  {
    name: 'Inna Halahuz',
    role: 'Sales manager ',
    contacts: {
      telegram: 'https://telegram.me/innaponomarenko',
      skype: 'skype:380964001271',
      linkedIn:
        'https://www.linkedin.com/in/%D1%96%D0%BD%D0%BD%D0%B0-%D0%B3%D0%B0%D0%BB%D0%B0%D0%B3%D1%83%D0%B7-a36157b9/'
    },
    country: 'Ukraine',
    photo: require('./photos/inna-halahuz---lviv.jpg')
  },
  {
    name: 'Mike Filipenko',
    role: 'Sale Executive / Lead gen1 Trainee',
    contacts: {
      telegram: 'https://telegram.me/mikefez',
      skype: 'skype:filipenco.michael',
      linkedIn: 'https://www.linkedin.com/in/mike-filipenko-252a5878/'
    },
    country: 'Moldova'
    // photo: require('./photos/')
  },
  {
    name: 'Alexey Merzlikin',
    role: 'Sales manager ',
    contacts: {
      telegram: 'https://telegram.me/nikilzrem',
      skype: 'skype:am@platinum.fund',
      linkedIn: 'https://www.linkedin.com/in/alex-merz-447543174/'
    },
    country: 'Russia',
    photo: require('./photos/alex-merzlikin.jpg')
  },
  {
    name: 'Vlad Akelev',
    role: 'Sales manager ',
    contacts: {
      telegram: 'https://telegram.me/VAkelyev',
      skype: 'skype:Akelyev',
      linkedIn: ''
    },
    country: 'Russia',
    photo: require('./photos/akelev-vladislav-moscow.jpg')
  },
  {
    name: 'Kristina Semenova',
    role: 'Head of IR department',
    contacts: {
      telegram: 'https://telegram.me/iamkristinasem',
      skype: 'skype:gmu2010',
      linkedIn: 'https://www.linkedin.com/in/kristina-semenova-b0b999164/'
    },
    country: 'Russia',
    photo: require('./photos/kristina-semenova---dmitrov.jpg')
  },
  {
    name: 'Daria Barkova',
    role: 'Head of HR department',
    contacts: {
      telegram: 'https://telegram.me/Daria_DV',
      skype: 'skype:ya_dariyka',
      linkedIn:
        'https://www.linkedin.com/in/%D0%B4%D0%B0%D1%80%D1%8C%D1%8F-%D0%B1%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B0-b6376812b/'
    },

    country: 'Russia',
    photo: require('./photos/daria-barkova---krasnoyarsk.jpg')
  },
  {
    name: 'Vyacheslav Mikhalkin',
    role: 'Designer, PM (Also Designer on Wallet)',
    contacts: {
      telegram: 'https://telegram.me/lumenio',
      skype: 'skype:lumhtc@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/vyacheslav-mikhalkin-577635163'
    },
    country: 'Russia',
    photo: require('./photos/vyacheslav-mikhalkin----saratov.jpg')
  },
  {
    name: 'Nikolay Kroshennikov',
    role: 'Back-End developer',
    contacts: {
      telegram: 'https://telegram.me/nikolkrash',
      skype: 'skype:nikol053',
      linkedIn: 'https://www.linkedin.com/in/nikolay-krasheninnikov-64a892109/'
    },
    country: 'Russia',
    photo: require('./photos/nikolay-kroshennikov-saratov.jpg')
  },
  {
    name: 'Svyatoslav Zeltov',
    role: 'Front-End developer',
    contacts: {
      telegram: 'https://telegram.me/zheltov_slava',
      skype: 'skype:zs-just4fun',
      linkedIn: 'https://www.linkedin.com/in/slava-zheltov-b9b59b70/'
    },
    country: 'Russia'
    // photo: require('./photos/')
  },
  {
    name: 'Andrey Smirnov',
    role: 'Back-end developer',
    contacts: {
      telegram: 'https://telegram.me/batiscaff',
      skype: 'skype:btiscaff',
      linkedIn: 'https://www.linkedin.com/in/андрей-смирнов-a5035885/'
    },
    country: 'Russia',
    photo: require('./photos/andrey-smirnov-moscow.jpg')
  },
  {
    name: 'Denis Udot',
    role: 'Back-end developer, support',
    contacts: {
      telegram: 'https://telegram.me/No148',
      skype: 'skype:pronto-school',
      linkedIn: 'https://www.linkedin.com/in/denis-udot-635160169/'
    },
    country: 'Russia',
    photo: require('./photos/denis-udot.jpg')
  },
  {
    name: 'Alexey Adylshin',
    role: 'Back-end developer, support',
    contacts: {
      telegram: 'https://telegram.me/alex_adylshin',
      skype: 'skype:lesha80',
      linkedIn: 'https://www.linkedin.com/in/alexey-adylshin-a560a215/'
    },
    country: 'Uzbekistan',
    photo: require('./photos/alexey-adilshin.jpg')
  },
  {
    name: 'Andrei Amialkovich',
    role: 'Senior Project manager',
    contacts: {
      telegram: 'https://telegram.me/a_amialkovich',
      skype: 'skype:andrey_melkiy',
      linkedIn: 'https://www.linkedin.com/in/andreiamialkovich/'
    },
    country: 'Belarus',
    photo: require('./photos/andrei-amialkovich-minsk.jpg')
  },
  {
    name: 'Ekaterina Ezerskaya',
    role: 'BackEnd developer ',
    contacts: {
      telegram: 'https://telegram.me/ezerskayakatja',
      skype: 'skype:ezersk',
      linkedIn: 'https://www.linkedin.com/in/ekaterina-ezerskaya-a0537b97'
    },
    country: 'Russia',
    photo: require('./photos/katerina-ezerskaya.jpg')
  },
  {
    name: 'Kirill Sosnin',
    role: 'Front End Developer',
    contacts: {
      telegram: 'https://telegram.me/Kirill_Sosnin',
      skype: 'skype:Kirill.sosnin',
      linkedIn: 'https://www.linkedin.com/in/kirill-sosnin-8a1a0520/'
    },
    country: 'Russia'
    // photo: require('./photos/')
  },
  {
    name: 'Rinat Rezakov',
    role: 'FrontEnd developer',
    contacts: {
      telegram: 'https://telegram.me/evoltic',
      skype: 'skype:rezakov_r',
      linkedIn: 'https://www.linkedin.com/in/rinat-rezakov-477747160/'
    },
    country: 'Russia',
    photo: require('./photos/rinat-rezakov-perm.jpg')
  },
  {
    name: 'Nikita Morozov',
    role: 'FrontEnd developer',
    contacts: {
      telegram: 'https://telegram.me/DartSaben',
      skype: 'skype:saben_nm',
      linkedIn: 'https://www.linkedin.com/in/nikita-morozov-98892a176/'
    },
    country: 'Russia',
    photo: require('./photos/nikita-morozov.jpg')
  },
  {
    name: 'Anna Leshova',
    role: 'Translator',
    contacts: {
      telegram: 'https://telegram.me/melamory_chan',
      skype: 'skype:melamory-chan',
      linkedIn: 'https://www.linkedin.com/in/anna-leschova/'
    },
    country: 'Russia'
    // photo: require('./photos/')
  },
  {
    name: 'Mihail Kudryashev',
    role: 'Frontend engineer',
    contacts: {
      telegram: 'https://telegram.me/uamedwed',
      skype: 'skype:uamedwed',
      linkedIn: 'https://www.linkedin.com/in/kudryashev-mihail/'
    },
    country: 'Russia',
    photo: require('./photos/mihail-kudryashev---simferopol.jpg')
  },
  {
    name: 'Ruslan Inozemtcev ',
    role: 'Senior IT Developer',
    contacts: {
      telegram: 'https://telegram.me/rusinozemtsev',
      skype: 'skype:rusinozemtsev',
      linkedIn: 'https://www.linkedin.com/in/ruslan-inozemtsev-b13b5450/'
    },
    country: 'Russia',
    photo: require('./photos/ruslan-inozemtsev---saint-petersburg.jpg')
  },
  {
    name: 'Nikita Pisarskii',
    role: 'Project manager',
    contacts: {
      telegram: 'https://telegram.me/pisarskiy',
      skype: 'skype:niklops',
      linkedIn: 'http://www.linkedin.com/in/pisarskiy'
    },
    country: 'Russia'
    // photo: require('./photos/')
  }
]

export default content
