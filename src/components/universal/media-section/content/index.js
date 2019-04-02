const articles = [
  {
    date: 'December 31, 2018',
    image: require('./images/medium.png'),
    title: '미국의 보안 토큰 : SEC 법률에 따른 규정 및 면제\n',
    text:
      '미국과 스위스는 토큰의 합법화를 시작한 최초의 국가들이 되었습니다. 법률로 이러한 개념을 정의하지 않았지만 각 관할지에는 보안 토큰 발급에 대한 자체 규칙이 이미 존재합니다',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/2215c0857e2f'
  },
  {
    date: 'December 30, 2018',
    image: require('./images/medium.png'),
    title:
      '스위스 STO의 법적 측면 : 크립토 밸리에서 보안 토큰을 발급하는 방법\n',
    text:
      '젊은 스타들이 할리우드로 가고 IT 기업들이 캘리포니아 실리콘 밸리로 몰려드는 동안 블록체인 스타트업들은 스위스를 거점으로 삼았습니다 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/2d97595eba0f'
  },
  {
    date: 'December 30, 2018',
    image: require('./images/medium.png'),
    title: '2018년 암호화폐의 롤러코스터 상승 — 전문가들의 설명\n',
    text:
      '2018년의 끝이 다가오고 있습니다. 암호화폐 시장에게 2018년은 1년 내내 롤러 코스터를 타는것과 같았습니다 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/7a255e25ded3'
  },
  {
    date: 'December 30, 2018',
    image: require('./images/medium.png'),
    title: 'ジェットコースターの2018年仮想通貨相場-専門家の分析-\n',
    text:
      '2018年もまもなく終わろうとしています。仮想通貨市場にとってはジェットコースターの様な一年でした。...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage: 'https://medium.com/@PlatinumFundJapan/fcbc0dff8de2'
  },
  {
    date: 'December 30, 2018',
    image: require('./images/medium.png'),
    title:
      'スイスにおけるSTOの法的側面：Crypto Valleyにてのセキュリティトークン発行\n',
    text:
      'ハリウッドの若手のスターIT企業はカリフォルニアのシリコンバレーに多く集ま ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/%E3%82%B9%E3%82%A4%E3%82%B9%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8Bsto%E3%81%AE%E6%B3%95%E7%9A%84%E5%81%B4%E9%9D%A2-crypto-valley%E3%81%AB%E3%81%A6%E3%81%AE%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E7%99%BA%E8%A1%8C-bec2bde29b5a'
  },
  {
    date: 'December 30, 2018',
    image: require('./images/medium.png'),
    title: '米国におけるセキュリティトークン：SEC規制および免除\n',
    text:
      'アメリカとスイスは、トークンの合法化した最初の国となりました。その概念を定義する法律がまだ存在していないにもかかわらず、 ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/%E7%B1%B3%E5%9B%BD%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3-sec%E8%A6%8F%E5%88%B6%E3%81%8A%E3%82%88%E3%81%B3%E5%85%8D%E9%99%A4-1c5a23db8f4b'
  },
  {
    date: 'December 30, 2018',
    image: require('./images/medium.png'),
    title: 'STO가 암호화폐의 미래를 지배할 5가지 이유\n',
    text:
      '보안 토큰은 요즘 암호화폐 공간에서 커다란 관심을 받고 있습니다. 그리고 그 관심의 이유는 합당합니다. 보안 토큰은 지난 3년간 270억 달러 이상을 모은 ICO에 의해 시작된 프로세스 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/6fae288ecf60'
  },
  {
    date: 'December 28, 2018',
    image: require('./images/medium.png'),
    title: 'STOは未来の資金調達方法である５つの理由',
    text:
      '近頃アセット・バックト(資産担保型)トークン、すなわちセキュリティトークン、トレンドとなってきています。そして正当な理由がないわけではありません ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage: 'https://medium.com/@PlatinumFundJapan/e2f6aa5db1bb'
  },
  {
    date: 'December 28, 2018',
    image: require('./images/medium.png'),
    title: 'STOとは？サポートが必要になる理由\n',
    text:
      '現在仮想通貨世界で大騒ぎになっていることば、STO。単純化された性質と世界的な魅力によって資金調達に革命を起こしたICOの後、 ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/sto%E3%81%A8%E3%81%AF-%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AB%E3%81%AA%E3%82%8B%E7%90%86%E7%94%B1-1817412d41ee'
  },
  {
    date: 'December 28, 2018',
    image: require('./images/medium.png'),
    title:
      '당신의 프로젝트에 STO가 적합한 선택인지 어떻게 판단할수 있을까요?\n',
    text:
      'STO, ICO, IPO — 이 회사 기금 모금 방법 중 어떤 것을 택해야할까요? 연초부터 미국 증권 거래위원회(SEC)는 암호화폐 프로젝트와 헤지펀드에 대한 조치를 취하기 시작했어요 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/954d337deec6'
  },
  {
    date: 'December 28, 2018',
    image: require('./images/medium.png'),
    title: 'STO란 무엇이며 당신이 도움이 필요한 이유\n',
    text:
      'STO, 혹은 보안 토큰 오퍼링(Security Token Offering)은 요즘 마치 복음처럼 경건한 말로 사용되어지는 용어입니다. 단순한 성격과 세계적인 호소력을 지녔던 ICO의 혁명적인 자금 조달 혁명 이후 곧 적용될 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/b564a51ed9fd'
  },
  {
    date: 'December 28, 2018',
    image: require('./images/medium.png'),
    title: 'STOを選ぶのは良い？\n',
    text:
      'STO, ICO, IPOのどれを選ぶのか。今年の初めから、米国証券取引委員会（SEC）は暗号通貨プロジェクトやヘッジファンドさえに対する措置を講じ始めました ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/sto%E3%82%92%E9%81%B8%E3%81%B6%E3%81%AE%E3%81%AF%E8%89%AF%E3%81%84-916fe2d3ebc7'
  },
  {
    date: 'December 27, 2018',
    image: require('./images/coin-gape.png'),
    title: 'Will 2019 be the year of STOs, the Blockchain based Securities?\n',
    text:
      'Recently as reported by coingape media Dr. Craig S Wright, an Australian computer scientist, and businessman who also identifies himself as Satoshi Nakamoto took to Twitter, stating that ...',
    source: 'https://coingape.com',
    sourcePage:
      'https://coingape.com/will-2019-year-stos-blockchain-based-securities/'
  },
  {
    date: 'December 26, 2018',
    image: require('./images/medium.png'),
    title: 'STOを選ぶ理由\n',
    text:
      '暗号通貨の規制は、米国や中国をはじめ、世界中に話題になっています。米国のSECを含むほとんどの監督当局は、ユーティリティトークンは実際に有価証券であるかどうかの調査を開始しました ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/sto%E3%82%92%E9%81%B8%E3%81%B6%E7%90%86%E7%94%B1-457f5bcc9379'
  },
  {
    date: 'December 26, 2018',
    image: require('./images/bitcoin-news.png'),
    title: 'Are STOs the Step in the Right Direction for Crypto?',
    text:
      'The ICO boom, together with Bitcoin and other altcoins’ price explosion in 2017 rode the success of Ethereum, the go-to platform for a majority of blockchain projects. However, the regulatory...',
    source: 'https://www.livebitcoinnews.com',
    sourcePage:
      'https://www.livebitcoinnews.com/are-stos-the-step-in-the-right-direction-for-crypto/'
  },
  {
    date: 'December 26, 2018',
    image: require('./images/blockhain-today.png'),
    title:
      '2019 as the Year of Crypto Regulation: Will STOs Become a New Trend?',
    text:
      'By definition, cryptocurrency is intended to provide freedom from central authorities, anonymity and borderless transactions...',
    source: 'http://blockchaintoday.co.kr/',
    sourcePage:
      'http://blockchaintoday.co.kr/news/viewpage.php?wr_id=1651//blockchaintoday.co.kr/news/viewpage.php?wr_id=1651'
  },
  {
    date: 'December 26, 2018',
    image: require('./images/medium.png'),
    title: 'STO를 런칭해야 하는 이유는 무엇일까요?\n',
    text:
      '현재 암호화폐 규제는 미국이나 중국뿐만 아니라 세계적으로 SEC를 비롯한 대부분의 감독 당국이 유틸리티 토큰을 조사하여 이들 중 어느 것이 실제로 유가 증권인지 확인하기 시작했습니다 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/5f5f0d9bbb42'
  },
  {
    date: 'December 26, 2018',
    image: require('./images/tokendesk.png'),
    title: 'What is an STO and why your company needs help?',
    text:
      'TOKIO, JAPAN, December 22, 2018 /EINPresswire.com/ -- STO, or Security Token Offering, is a term that has been spoken these days like the gospel – with reverence...',
    source: 'https://www.tokendesk.io',
    sourcePage:
      'https://www.tokendesk.io/the-roller-coaster-rise-of-cryptocurrencies-in-2018-experts-explain/'
  },
  {
    date: 'December 26, 2018',
    image: require('./images/coinspeaker.png'),
    title:
      '2019 as the Year of Crypto Regulation: Will STOs Become a New Trend?',
    text:
      'By definition, cryptocurrency is intended to provide freedom from central authorities, anonymity and borderless transactions...',
    source: 'https://www.coinspeaker.com',
    sourcePage: 'https://www.coinspeaker.com/2019-crypto-regulation-stos/'
  },
  {
    date: 'December 25, 2018',
    image: require('./images/the-daily-hodl.png'),
    title:
      'Legal Aspects of STO in Switzerland: How to Issue Security Tokens in Crypto Valley',
    text:
      'While all young stars-to-be move to Hollywood, and IT companies rush to California’s Silicon Valley, blockchain startups have their own...',
    source: 'https://dailyhodl.com',
    sourcePage:
      'https://dailyhodl.com/2018/12/25/legal-aspects-of-sto-in-switzerland-how-to-issue-security-tokens-in-crypto-valley/'
  },
  {
    date: 'December 25, 2018',
    image: require('./images/quora.png'),
    title:
      'Security tokens in the US: regulations and exemptions under the SEC laws',
    text:
      'The USA and Switzerland became the first countries to initiate the legitimization of tokens. It is up to them that today we know the difference...',
    source: 'https://www.quora.com',
    sourcePage:
      'https://hellyellie.quora.com/Security-tokens-in-the-US-regulations-and-exemptions-under-the-SEC-laws'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/alpha.png'),
    title:
      'The Roller Coaster Rise Of Cryptocurrencies In 2018 - Experts Explain',
    text:
      '2018 is coming to an end. For the cryptocurrency market, it has been a roller-coaster ride through the year...',
    source: 'https://seekingalpha.com',
    sourcePage:
      'https://seekingalpha.com/instablog/49582419-alena-kalionova/5251739-roller-coaster-rise-cryptocurrencies-2018-experts-explain'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/medium.png'),
    title: 'PlatinumはSTOサービス提供開始\n',
    text:
      '常に市場傾向に合わせて変化していくPlatinum社。トレンドを見つけ、その専門知識を提供するという弊社の理念を徹底して、Security Token ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/platinum%E3%81%AFsto%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%8F%90%E4%BE%9B%E9%96%8B%E5%A7%8B-997e9c28562c'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/medium.png'),
    title: 'STO：暗号通貨世界の新たな時代\n',
    text:
      'ICO（Initial Coin Offerings）が導入されたとき、ブロックチェーンプロジェクトに資金調達できる革新的で大衆的な方法として歓迎されました ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/sto-%E6%9A%97%E5%8F%B7%E9%80%9A%E8%B2%A8%E4%B8%96%E7%95%8C%E3%81%AE%E6%96%B0%E3%81%9F%E3%81%AA%E6%99%82%E4%BB%A3-9638ded373bf'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/medium.png'),
    title: '왜 STO에 대해 알아야할까요?\n',
    text:
      'ICO(Initial Coin Offerings)가 소개되었을때 ICO는 블록체인 기반 프로젝트들이 자금을 모으기위한 혁신적이고 민주적인 방법으로 환영 받았습니다. 그러나 암호화폐 시장의 규제 환경 변화하고 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/d99b64f71619'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/medium.png'),
    title: '플레티넘이 이제 STO 서비스를 제공합니다\n',
    text:
      '플래티넘은 항상 시장 유행과 발맞춰 나아가고 있습니다. 트렌드를 파악하고 전문 지식을 제공한다는 저희의 철학에 따라 보안 토큰 오퍼링(STO) 포괄 서비스를 제공하게 된것을 발표하게 되어 기쁩니다 ...',
    source: 'https://medium.com/@PlatinumFundKorea',
    sourcePage: 'https://medium.com/@PlatinumFundKorea/2b70fc19a4e7'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/medium.png'),
    title:
      'Security tokens in the US: regulations and exemptions under the SEC laws',
    text:
      'The USA and Switzerland became the first countries to initiate the legitimization of tokens. It is up to them that today we know the difference...',
    source: 'https://hackernoon.com',
    sourcePage:
      'https://hackernoon.com/security-tokens-in-the-us-regulations-and-exemptions-under-the-sec-laws-4640b5570948'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/medium.png'),
    title:
      'STOはICOの変わりになる？ コンプライアンス対応するICOとは？STOです。\n',
    text:
      'ICO（Initial Coin Offering/新規仮想通貨公開）は、仮想通貨が使ったクラウドファンディングの手段である。 ...',
    source: 'https://medium.com/@PlatinumFundJapan',
    sourcePage:
      'https://medium.com/@PlatinumFundJapan/sto%E3%81%AFico%E3%81%AE%E5%A4%89%E3%82%8F%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B-%E3%82%B3%E3%83%B3%E3%83%97%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%82%B9%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8Bico%E3%81%A8%E3%81%AF-sto%E3%81%A7%E3%81%99-dcc477abdb95'
  },
  {
    date: 'December 24, 2018',
    image: require('./images/medium.png'),
    title: 'STO가 궁극적으로 ICO를 대체하게 될까요?\n',
    text:
      'ICO는 고가의 주식 모금이나 주식 공개를 제공 할수없는 소규모 벤처 기업을 위해 수백만 달러를 모으는 훌륭한 크라우드 펀딩의 모델로 소개되었습니다. 그러나 규제 환경의 변화와 암호화폐 시장의 성숙도가 높아지면서 ICO ...',
    source: 'https://medium.com/@PlatinumFundKorea/',
    sourcePage:
      'https://medium.com/@PlatinumFundKorea/sto%EA%B0%80-%EA%B6%81%EA%B7%B9%EC%A0%81%EC%9C%BC%EB%A1%9C-ico%EB%A5%BC-%EB%8C%80%EC%B2%B4%ED%95%98%EA%B2%8C-%EB%90%A0%EA%B9%8C%EC%9A%94-84bc12e1fab'
  },
  {
    date: 'December 21, 2018',
    image: require('./images/financial.png'),
    title: 'What is an STO and why your company needs help?',
    text:
      'TOKIO, JAPAN, December 22, 2018 /EINPresswire.com/ -- STO, or Security Token Offering, is a term that has been spoken these days like the gospel – with reverence...',
    source: 'http://markets.financialcontent.com',
    sourcePage:
      'http://markets.financialcontent.com/townhall/news/read/37494272'
  },
  {
    date: 'December 15, 2018',
    image: require('./images/medium.png'),
    title: 'Why should you know about STOs?',
    text:
      'When ICOs, or Initial Coin Offerings, were introduced, they were hailed as a revolutionary and truly democratic way of raising funds for blockchain based projects...',
    source: 'https://medium.com/platinum-fund/',
    sourcePage:
      'https://medium.com/platinum-fund/why-should-you-know-about-stos-46a1c12cbff5'
  }
]

export default articles
