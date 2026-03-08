
 const characters = [
  // --- MONDSTADT ---
  {
    character: "Venti",
    element: "Anemo",
    region: "Mondstadt",
    about: "A tone-deaf bard who wanders Mondstadt, secretly hiding his identity as Barbatos, the Anemo Archon.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Venti_P.webp",
    pfp: "/assets/Genshin/pfp/Venti.webp"
  },
  {
    character: "Jean",
    element: "Anemo",
    region: "Mondstadt",
    about: "The tireless Acting Grand Master of the Knights of Favonius, known as the Dandelion Knight.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Jean_P.webp",
    pfp: "/assets/Genshin/pfp/Jean.webp"
  },
  {
    character: "Diluc",
    element: "Pyro",
    region: "Mondstadt",
    about: "The wealthy owner of the Dawn Winery who secretly protects Mondstadt as the Darknight Hero.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Diluc_P.webp",
    pfp: "/assets/Genshin/pfp/Diluc.webp"
  },
  {
    character: "Albedo",
    element: "Geo",
    region: "Mondstadt",
    about: "The mysterious Chief Alchemist of the Knights of Favonius, created by the ancient alchemist Rhinedottir.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Albedo_P.webp",
    pfp: "/assets/Genshin/pfp/Albedo.webp"
  },
  {
    character: "Klee",
    element: "Pyro",
    region: "Mondstadt",
    about: "An energetic and chaotic little girl who loves fish blasting and is an official Knight of Favonius.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Klee_P.webp",
    pfp: "/assets/Genshin/pfp/Klee.webp"
  },
  {
    character: "Mona",
    element: "Hydro",
    region: "Mondstadt",
    about: "A brilliant but perpetually broke astrologist who reads the truth of the world in the stars.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Mona_P.webp",
    pfp: "/assets/Genshin/pfp/Mona.webp"
  },

  // --- LIYUE ---
  {
    character: "Zhongli",
    element: "Geo",
    region: "Liyue",
    about: "A calm consultant for the Wangsheng Funeral Parlor, secretly holding the identity of the Geo Archon, Morax.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Zhongli_P.webp",
    pfp: "/assets/Genshin/pfp/Zhongli.webp"
  },
  {
    character: "Xiao",
    element: "Anemo",
    region: "Liyue",
    about: "The sole surviving Yaksha, an Adeptus who endlessly battles the demonic remnants of defeated gods.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Xiao_P.webp",
    pfp: "/assets/Genshin/pfp/Xiao.webp"
  },
  {
    character: "Ganyu",
    element: "Cryo",
    region: "Liyue",
    about: "A half-qilin Adeptus who serves as the chronically overworked general secretary of the Liyue Qixing.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Ganyu_P.webp",
    pfp: "/assets/Genshin/pfp/Ganyu.webp"
  },
  {
    character: "Hu Tao",
    element: "Pyro",
    region: "Liyue",
    about: "The eccentric 77th Director of the Wangsheng Funeral Parlor who writes poetry and guides souls to the afterlife.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_HuTao_P.webp",
    pfp: "/assets/Genshin/pfp/HuTao.webp"
  },
  {
    character: "Keqing",
    element: "Electro",
    region: "Liyue",
    about: "The Yuheng of the Liyue Qixing, a pragmatic leader who believes humanity should forge its own path without the gods.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Keqing_P.webp",
    pfp: "/assets/Genshin/pfp/Keqing.webp"
  },
  {
    character: "Yelan",
    element: "Hydro",
    region: "Liyue",
    about: "A mysterious intelligence agent allegedly working for the Ministry of Civil Affairs, operating from the Yanshang Teahouse.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Yelan_P.webp",
    pfp: "/assets/Genshin/pfp/Yelan.webp"
  },

  // --- INAZUMA ---
  {
    character: "Raiden Shogun",
    element: "Electro",
    region: "Inazuma",
    about: "The vessel of Beelzebul, the Electro Archon, seeking an unchanging 'Eternity' for her nation.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Shougun_P.webp",
    pfp: "/assets/Genshin/pfp/Shougun.webp"
  },
  {
    character: "Yae Miko",
    element: "Electro",
    region: "Inazuma",
    about: "The Guuji of the Grand Narukami Shrine and publisher of light novels. She is a cunning and mischievous kitsune.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Yae_P.webp",
    pfp: "/assets/Genshin/pfp/Yae.webp"
  },
  {
    character: "Kamisato Ayaka",
    element: "Cryo",
    region: "Inazuma",
    about: "The elegant and dignified eldest daughter of the Yashiro Commission's Kamisato Clan.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Ayaka_P.webp",
    pfp: "/assets/Genshin/pfp/Ayaka.webp"
  },
  {
    character: "Kaedehara Kazuha",
    element: "Anemo",
    region: "Inazuma",
    about: "A wandering samurai from a fallen clan who travels the world with Beidou's Crux Fleet.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Kazuha_P.webp",
    pfp: "/assets/Genshin/pfp/Kazuha.webp"
  },
  {
    character: "Kokomi",
    element: "Hydro",
    region: "Inazuma",
    about: "The Divine Priestess of Watatsumi Island and a brilliant military strategist hiding her low energy levels.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Kokomi_P.webp",
    pfp: "/assets/Genshin/pfp/Kokomi.webp"
  },

  // --- SUMERU ---
  {
    character: "Nahida",
    element: "Dendro",
    region: "Sumeru",
    about: "The vessel of Lesser Lord Kusanali, the Dendro Archon, deeply connected to the Irminsul tree.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Nahida_P.webp",
    pfp: "/assets/Genshin/pfp/Nahida.webp"
  },
  {
    character: "Wanderer",
    element: "Anemo",
    region: "Sumeru",
    about: "Formerly Scaramouche of the Fatui Harbingers, he erased his past from the world tree and wanders Teyvat anew.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Wanderer_P.webp",
    pfp: "/assets/Genshin/pfp/Wanderer.webp"
  },
  {
    character: "Alhaitham",
    element: "Dendro",
    region: "Sumeru",
    about: "The acting Grand Sage of the Akademiya, driven entirely by logic and a desire for a peaceful, unbothered life.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Alhatham_P.webp",
    pfp: "/assets/Genshin/pfp/Alhatham.webp"
  },
  {
    character: "Cyno",
    element: "Electro",
    region: "Sumeru",
    about: "The fearsome General Mahamatra of the Akademiya who loves telling terrible, over-explained jokes.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Cyno_P.webp",
    pfp: "/assets/Genshin/pfp/Cyno.webp"
  },

  // --- FONTAINE ---
  {
    character: "Furina",
    element: "Hydro",
    region: "Fontaine",
    about: "The dramatic former Hydro Archon who played a 500-year role to save her people from drowning.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Furina_P.webp",
    pfp: "/assets/Genshin/pfp/Furina.webp"
  },
  {
    character: "Neuvillette",
    element: "Hydro",
    region: "Fontaine",
    about: "The Iudex of Fontaine and the Hydro Dragon Sovereign, an impartial judge who harbors a deep love for humanity.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Neuvillette_P.webp",
    pfp: "/assets/Genshin/pfp/Neuvillette.webp"
  },
  {
    character: "Navia",
    element: "Geo",
    region: "Fontaine",
    about: "The optimistic president of the Spina di Rosula, solving mysteries with a gun-brella and macarons.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Navia_P.webp",
    pfp: "/assets/Genshin/pfp/Navia.webp"
  },
  {
    character: "Arlecchino",
    element: "Pyro",
    region: "Fontaine",
    about: "The Fourth of the Fatui Harbingers, known as The Knave, fiercely protecting the children of the House of the Hearth.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Arlecchino_P.webp",
    pfp: "/assets/Genshin/pfp/Arlecchino.webp"
  },

  // --- NATLAN ---
  {
    character: "Mavuika",
    element: "Pyro",
    region: "Natlan",
    about: "The Pyro Archon of Natlan, leading the warriors of the six tribes against the encroaching Abyss.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Mavuika_P.webp",
    pfp: "/assets/Genshin/pfp/Mavuika.webp"
  },
  {
    character: "Mualani",
    element: "Hydro",
    region: "Natlan",
    about: "A cheerful and outgoing guide from the People of the Springs, riding her Sharky Surfboard everywhere.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Mualani_P.webp",
    pfp: "/assets/Genshin/pfp/Mualani.webp"
  },
  {
    character: "Kinich",
    element: "Dendro",
    region: "Natlan",
    about: "A highly pragmatic Saurian Hunter from the Scions of the Canopy, accompanied by the pixelated dragon Ajaw.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Kinich_P.webp",
    pfp: "/assets/Genshin/pfp/Kinich.webp"
  },

  // --- SNEZHNAYA / OTHER ---
  {
    character: "Tartaglia",
    element: "Hydro",
    region: "Snezhnaya",
    about: "The Eleventh of the Fatui Harbingers, also known as Childe. A battle-hungry warrior seeking constant improvement.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Tartaglia_P.webp",
    pfp: "/assets/Genshin/pfp/Tartaglia.webp"
  },
  // --- MONDSTADT (Part 2) ---
  {
    character: "Amber",
    element: "Pyro",
    region: "Mondstadt",
    about: "The only remaining Outrider of the Knights of Favonius, always ready to help with a bright smile.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Amber_P.webp",
    pfp: "/assets/Genshin/pfp/Amber.webp"
  },
  {
    character: "Kaeya",
    element: "Cryo",
    region: "Mondstadt",
    about: "The charming Cavalry Captain of the Knights of Favonius, hiding a dark secret from the fallen nation of Khaenri'ah.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Kaeya_P.webp",
    pfp: "/assets/Genshin/pfp/Kaeya.webp"
  },
  {
    character: "Lisa",
    element: "Electro",
    region: "Mondstadt",
    about: "The languid but incredibly powerful Librarian of the Knights of Favonius, formerly a top scholar at the Akademiya.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Lisa_P.webp",
    pfp: "/assets/Genshin/pfp/Lisa.webp"
  },
  {
    character: "Barbara",
    element: "Hydro",
    region: "Mondstadt",
    about: "The Deaconess of the Church of Favonius and Mondstadt's beloved shining idol.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Barbara_P.webp",
    pfp: "/assets/Genshin/pfp/Barbara.webp"
  },
  {
    character: "Bennett",
    element: "Pyro",
    region: "Mondstadt",
    about: "A good-natured adventurer from Mondstadt who is notoriously plagued by the worst luck imaginable.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Bennett_P.webp",
    pfp: "/assets/Genshin/pfp/Bennett.webp"
  },
  {
    character: "Fischl",
    element: "Electro",
    region: "Mondstadt",
    about: "The self-proclaimed Prinzessin der Verurteilung, accompanied by her night raven familiar, Oz.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Fischl_P.webp",
    pfp: "/assets/Genshin/pfp/Fischl.webp"
  },
  {
    character: "Eula",
    element: "Cryo",
    region: "Mondstadt",
    about: "The Spindrift Knight and a descendant of the tyrannical Lawrence Clan, constantly seeking 'vengeance'.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Eula_P.webp",
    pfp: "/assets/Genshin/pfp/Eula.webp"
  },

  // --- LIYUE (Part 2) ---
  {
    character: "Xiangling",
    element: "Pyro",
    region: "Liyue",
    about: "The Head Chef at the Wanmin Restaurant, traveling the world to discover bizarre and delicious new ingredients.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Xiangling_P.webp",
    pfp: "/assets/Genshin/pfp/Xiangling.webp"
  },
  {
    character: "Xingqiu",
    element: "Hydro",
    region: "Liyue",
    about: "The second son of the Feiyun Commerce Guild, a bookworm who practices the Guhua Clan's martial arts.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Xingqiu_P.webp",
    pfp: "/assets/Genshin/pfp/Xingqiu.webp"
  },
  {
    character: "Ningguang",
    element: "Geo",
    region: "Liyue",
    about: "The Tianquan of the Liyue Qixing, a brilliant businesswoman who built the floating Jade Chamber.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Ningguang_P.webp",
    pfp: "/assets/Genshin/pfp/Ningguang.webp"
  },
  {
    character: "Beidou",
    element: "Electro",
    region: "Liyue",
    about: "The legendary Captain of the Crux Fleet, known for slaying the sea monster Haishan without a Vision.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Beidou_P.webp",
    pfp: "/assets/Genshin/pfp/Beidou.webp"
  },
  {
    character: "Shenhe",
    element: "Cryo",
    region: "Liyue",
    about: "A human raised by the Adepti in the mountains, struggling to understand human emotions and society.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Shenhe_P.webp",
    pfp: "/assets/Genshin/pfp/Shenhe.webp"
  },
  {
    character: "Baizhu",
    element: "Dendro",
    region: "Liyue",
    about: "The owner of Bubu Pharmacy, accompanied by his talking snake, Changsheng, as he searches for the secret to immortality.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Baizhu_P.webp",
    pfp: "/assets/Genshin/pfp/Baizhu.webp"
  },
  {
    character: "Xianyun",
    element: "Anemo",
    region: "Liyue",
    about: "The human alias of the Adeptus Cloud Retainer, living amongst mortals to invent gadgets and watch over her disciples.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Xianyun_P.webp",
    pfp: "/assets/Genshin/pfp/Xianyun.webp"
  },

  // --- INAZUMA (Part 2) ---
  {
    character: "Kamisato Ayato",
    element: "Hydro",
    region: "Inazuma",
    about: "The head of the Kamisato Clan and the Yashiro Commissioner, a master of politics who prefers working behind the scenes.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Ayato_P.webp",
    pfp: "/assets/Genshin/pfp/Ayato.webp"
  },
  {
    character: "Arataki Itto",
    element: "Geo",
    region: "Inazuma",
    about: "The loud, proud, and completely broke oni leader of the Arataki Gang, obsessed with bug fighting and Trading Card Games.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Itto_P.webp",
    pfp: "/assets/Genshin/pfp/Itto.webp"
  },
  {
    character: "Yoimiya",
    element: "Pyro",
    region: "Inazuma",
    about: "The owner of Naganohara Fireworks, known as the 'Queen of the Summer Festival'.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Yoimiya_P.webp",
    pfp: "/assets/Genshin/pfp/Yoimiya.webp"
  },
  {
    character: "Kuki Shinobu",
    element: "Electro",
    region: "Inazuma",
    about: "The highly capable and educated deputy leader of the Arataki Gang, constantly bailing Itto out of jail.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Shinobu_P.webp",
    pfp: "/assets/Genshin/pfp/Shinobu.webp"
  },
  {
    character: "Kujou Sara",
    element: "Electro",
    region: "Inazuma",
    about: "A tengu warrior and the fiercely loyal general of the Tenryou Commission, devoted to the Raiden Shogun.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Sara_P.webp",
    pfp: "/assets/Genshin/pfp/Sara.webp"
  },

  // --- SUMERU (Part 2) ---
  {
    character: "Tighnari",
    element: "Dendro",
    region: "Sumeru",
    about: "The Lead Forest Watcher of the Avidya Forest and a brilliant botanist who rejected life in the Akademiya.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Tighnari_P.webp",
    pfp: "/assets/Genshin/pfp/Tighnari.webp"
  },
  {
    character: "Dehya",
    element: "Pyro",
    region: "Sumeru",
    about: "A legendary Eremite mercenary known as the 'Flame-Mane', fierce in battle but soft-hearted.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Dehya_P.webp",
    pfp: "/assets/Genshin/pfp/Dehya.webp"
  },
  {
    character: "Nilou",
    element: "Hydro",
    region: "Sumeru",
    about: "The star dancer of the Zubayr Theater, whose elegance brings joy to the people of the Grand Bazaar.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Nilou_P.webp",
    pfp: "/assets/Genshin/pfp/Nilou.webp"
  },
  {
    character: "Collei",
    element: "Dendro",
    region: "Sumeru",
    about: "A trainee forest ranger under Tighnari, fighting past her dark history with the Fatui to help others.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Collei_P.webp",
    pfp: "/assets/Genshin/pfp/Collei.webp"
  },
  {
    character: "Kaveh",
    element: "Dendro",
    region: "Sumeru",
    about: "A brilliant but heavily in-debt architect who designed the Palace of Alcazarzaray, currently rooming with Alhaitham.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Kaveh_P.webp",
    pfp: "/assets/Genshin/pfp/Kaveh.webp"
  },

  // --- FONTAINE (Part 2) ---
  {
    character: "Wriothesley",
    element: "Cryo",
    region: "Fontaine",
    about: "The Duke of the Fortress of Meropide, maintaining order in the underwater prison with his fists.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Wriothesley_P.webp",
    pfp: "/assets/Genshin/pfp/Wriothesley.webp"
  },
  {
    character: "Lyney",
    element: "Pyro",
    region: "Fontaine",
    about: "Fontaine's greatest illusionist and a Fatui operative who values his family above all else.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Lyney_P.webp",
    pfp: "/assets/Genshin/pfp/Lyney.webp"
  },
  {
    character: "Clorinde",
    element: "Electro",
    region: "Fontaine",
    about: "The Champion Duelist of Fontaine, wielding a sword and pistol to execute the judgements of the court.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Clorinde_P.webp",
    pfp: "/assets/Genshin/pfp/Clorinde.webp"
  },
  {
    character: "Charlotte",
    element: "Cryo",
    region: "Fontaine",
    about: "A relentless reporter for the Steambird newspaper, always hunting for the next big scoop.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Charlotte_P.webp",
    pfp: "/assets/Genshin/pfp/Charlotte.webp"
  },

  // --- NATLAN (Part 2) ---
  {
    character: "Kachina",
    element: "Geo",
    region: "Natlan",
    about: "A determined young warrior from the Children of Echoes who rides a drilling Turbo Twirly into battle.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Kachina_P.webp",
    pfp: "/assets/Genshin/pfp/Kachina.webp"
  },
  {
    character: "Xilonen",
    element: "Geo",
    region: "Natlan",
    about: "A legendary Name Forger from the Children of Echoes who creates powerful artifacts while rollerblading.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Xilonen_P.webp",
    pfp: "/assets/Genshin/pfp/Xilonen.webp"
  },
  {
    character: "Chasca",
    element: "Anemo",
    region: "Natlan",
    about: "A fiercely independent warrior from the Flower-Feather Clan, flying into battle to resolve conflicts.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Chasca_P.webp",
    pfp: "/assets/Genshin/pfp/Chasca.webp"
  },
  // --- MONDSTADT (Part 3) ---
  {
    character: "Diona",
    element: "Cryo",
    region: "Mondstadt",
    about: "The popular bartender of the Cat's Tail tavern who despises alcohol and tries (but fails) to make terrible drinks.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Diona_P.webp",
    pfp: "/assets/Genshin/pfp/Diona.webp"
  },
  {
    character: "Rosaria",
    element: "Cryo",
    region: "Mondstadt",
    about: "An unconventional sister of the Church of Favonius who prefers working in the shadows to attending choir practice.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Rosaria_P.webp",
    pfp: "/assets/Genshin/pfp/Rosaria.webp"
  },
  {
    character: "Mika",
    element: "Cryo",
    region: "Mondstadt",
    about: "The timid but highly capable Front-Line Land Surveyor for the Knights of Favonius Reconnaissance Company.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Mika_P.webp",
    pfp: "/assets/Genshin/pfp/Mika.webp"
  },
  {
    character: "Noelle",
    element: "Geo",
    region: "Mondstadt",
    about: "A dutiful maid of the Knights of Favonius who dreams of one day becoming a full-fledged Knight herself.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Noelle_P.webp",
    pfp: "/assets/Genshin/pfp/Noelle.webp"
  },
  {
    character: "Sucrose",
    element: "Anemo",
    region: "Mondstadt",
    about: "An anxious but brilliant alchemist who assists Albedo with a deep fascination for bio-alchemy.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Sucrose_P.webp",
    pfp: "/assets/Genshin/pfp/Sucrose.webp"
  },
  {
    character: "Razor",
    element: "Electro",
    region: "Mondstadt",
    about: "A boy raised by wolves in Wolvendom who fights fiercely to protect his 'lupical'.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Razor_P.webp",
    pfp: "/assets/Genshin/pfp/Razor.webp"
  },

  // --- LIYUE (Part 3) ---
  {
    character: "Qiqi",
    element: "Cryo",
    region: "Liyue",
    about: "A zombie who gathers herbs for Bubu Pharmacy, keeping her fading memories written in a notebook.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Qiqi_P.webp",
    pfp: "/assets/Genshin/pfp/Qiqi.webp"
  },
  {
    character: "Chongyun",
    element: "Cryo",
    region: "Liyue",
    about: "A young exorcist born with excessive 'yang' energy, forcing him to avoid heat and spicy foods.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Chongyun_P.webp",
    pfp: "/assets/Genshin/pfp/Chongyun.webp"
  },
  {
    character: "Yanfei",
    element: "Pyro",
    region: "Liyue",
    about: "A half-illuminated beast and Liyue's premier legal adviser, knowing every loophole in the law.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Yanfei_P.webp",
    pfp: "/assets/Genshin/pfp/Yanfei.webp"
  },
  {
    character: "Yun Jin",
    element: "Geo",
    region: "Liyue",
    about: "The director of the Yun-Han Opera Troupe, a renowned playwright and singer in Liyue Harbor.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_YunJin_P.webp",
    pfp: "/assets/Genshin/pfp/YunJin.webp"
  },
  {
    character: "Xinyan",
    element: "Pyro",
    region: "Liyue",
    about: "Liyue's sole rock 'n' roll musician, fighting prejudice to bring her fiery performances to the harbor.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Xinyan_P.webp",
    pfp: "/assets/Genshin/pfp/Xinyan.webp"
  },
  {
    character: "Yaoyao",
    element: "Dendro",
    region: "Liyue",
    about: "Madame Ping's youngest disciple, a caring child who looks after everyone, including her seniors.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Yaoyao_P.webp",
    pfp: "/assets/Genshin/pfp/Yaoyao.webp"
  },
  {
    character: "Gaming",
    element: "Pyro",
    region: "Liyue",
    about: "A transport guard for the Sword and Strongbox Secure Transport Agency who loves performing the Wushou Dance.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Gaming_P.webp",
    pfp: "/assets/Genshin/pfp/Gaming.webp"
  },

  // --- INAZUMA (Part 3) ---
  {
    character: "Thoma",
    element: "Pyro",
    region: "Inazuma",
    about: "The friendly 'fixer' of Inazuma and the fiercely loyal housekeeper for the Kamisato Clan.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Thoma_P.webp",
    pfp: "/assets/Genshin/pfp/Thoma.webp"
  },
  {
    character: "Gorou",
    element: "Geo",
    region: "Inazuma",
    about: "The courageous and highly dependable canine general of the Watatsumi Island resistance forces.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Gorou_P.webp",
    pfp: "/assets/Genshin/pfp/Gorou.webp"
  },
  {
    character: "Shikanoin Heizou",
    element: "Anemo",
    region: "Inazuma",
    about: "A brilliant but rebellious detective for the Tenryou Commission who fights exclusively with martial arts.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Heizou_P.webp",
    pfp: "/assets/Genshin/pfp/Heizou.webp"
  },
  {
    character: "Sayu",
    element: "Anemo",
    region: "Inazuma",
    about: "A pint-sized ninja associated with the Shuumatsuban who uses her Anemo powers to sleep on the job.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Sayu_P.webp",
    pfp: "/assets/Genshin/pfp/Sayu.webp"
  },
  {
    character: "Kirara",
    element: "Dendro",
    region: "Inazuma",
    about: "A cheerful nekomata yokai working as a highly rated courier for the Komaniya Express.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Kirara_P.webp",
    pfp: "/assets/Genshin/pfp/Kirara.webp"
  },
  {
    character: "Chiori",
    element: "Geo",
    region: "Inazuma",
    about: "An outspoken Inazuman fashion designer operating the Chioriya Boutique in Fontaine.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Chiori_P.webp",
    pfp: "/assets/Genshin/pfp/Chiori.webp"
  },

  // --- SUMERU (Part 3) ---
  {
    character: "Faruzan",
    element: "Anemo",
    region: "Sumeru",
    about: "A renowned Akademiya scholar from a century ago, recently freed from a puzzle-filled ruin.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Faruzan_P.webp",
    pfp: "/assets/Genshin/pfp/Faruzan.webp"
  },
  {
    character: "Layla",
    element: "Cryo",
    region: "Sumeru",
    about: "A chronically sleep-deprived Rtawahist student who miraculously finishes her star charts while sleepwalking.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Layla_P.webp",
    pfp: "/assets/Genshin/pfp/Layla.webp"
  },
  {
    character: "Candace",
    element: "Hydro",
    region: "Sumeru",
    about: "The protective guardian of Aaru Village, possessing a golden left eye and a shield that repels desert storms.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Candace_P.webp",
    pfp: "/assets/Genshin/pfp/Candace.webp"
  },
  {
    character: "Dori",
    element: "Electro",
    region: "Sumeru",
    about: "A Mora-obsessed merchant who can procure absolutely anything in Sumeru—for the right price.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Dori_P.webp",
    pfp: "/assets/Genshin/pfp/Dori.webp"
  },
  {
    character: "Sethos",
    element: "Electro",
    region: "Sumeru",
    about: "An envoy from the Temple of Silence in the desert, wielding Electro and tied closely to Cyno's past.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Sethos_P.webp",
    pfp: "/assets/Genshin/pfp/Sethos.webp"
  },

  // --- FONTAINE (Part 3) ---
  {
    character: "Sigewinne",
    element: "Hydro",
    region: "Fontaine",
    about: "The head nurse of the Fortress of Meropide, a Melusine who deeply cares for the prisoners' health.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Sigewinne_P.webp",
    pfp: "/assets/Genshin/pfp/Sigewinne.webp"
  },
  {
    character: "Emilie",
    element: "Dendro",
    region: "Fontaine",
    about: "A renowned perfumer in Fontaine who secretly works as a forensic cleaner for complex crime scenes.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Emilie_P.webp",
    pfp: "/assets/Genshin/pfp/Emilie.webp"
  },
  {
    character: "Lynette",
    element: "Anemo",
    region: "Fontaine",
    about: "Lyney's quiet and observant magic assistant, operating as his 'eyes and ears' from the shadows.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Lynette_P.webp",
    pfp: "/assets/Genshin/pfp/Lynette.webp"
  },
  {
    character: "Freminet",
    element: "Cryo",
    region: "Fontaine",
    about: "A shy diver and younger brother to Lyney and Lynette, preferring the quiet company of clockwork penguins.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Freminet_P.webp",
    pfp: "/assets/Genshin/pfp/Freminet.webp"
  },
  {
    character: "Chevreuse",
    element: "Pyro",
    region: "Fontaine",
    about: "The strict Captain of the Special Security and Surveillance Patrol, wielding a musket to uphold justice.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Chevreuse_P.webp",
    pfp: "/assets/Genshin/pfp/Chevreuse.webp"
  },

  // --- NATLAN (Part 3) ---
  {
    character: "Ororon",
    element: "Electro",
    region: "Natlan",
    about: "A mysterious youth from the Masters of the Night-Wind, capable of traversing heights with an enigmatic presence.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Ororon_P.webp",
    pfp: "/assets/Genshin/pfp/Ororon.webp"
  },
  {
    character: "Citlali",
    element: "Cryo",
    region: "Natlan",
    about: "A powerful shaman from the Masters of the Night-Wind, known for her complex personality and starry powers.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Citlali_P.webp",
    pfp: "/assets/Genshin/pfp/Citlali.webp"
  },

  // --- OTHER ---
  {
    character: "Aloy",
    element: "Cryo",
    region: "Other",
    about: "An outcast hunter from another world who fights machine-beasts with her trusty bow.",
    background: "/assets/Genshin/namecard/UI_NameCardPic_Aloy_P.webp",
    pfp: "/assets/Genshin/pfp/Aloy.webp"
  }



];




export default characters
