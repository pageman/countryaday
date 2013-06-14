countries.filter('expandLanguages', function() {
  // Thanks to Phil Teare for lang codes
  // http://stackoverflow.com/questions/3217492/list-of-language-codes-in-yaml-or-json
  var langCodes = {"ab":"Abkhaz","aa":"Afar","af":"Afrikaans","ak":"Akan","sq":"Albanian","am":"Amharic","ar":"Arabic","an":"Aragonese","hy":"Armenian","as":"Assamese","av":"Avaric","ae":"Avestan","ay":"Aymara","az":"Azerbaijani","bm":"Bambara","ba":"Bashkir","eu":"Basque","be":"Belarusian","bn":"Bengali","bh":"Bihari","bi":"Bislama","bs":"Bosnian","br":"Breton","bg":"Bulgarian","my":"Burmese","ca":"Catalan; Valencian","ch":"Chamorro","ce":"Chechen","ny":"Chichewa; Chewa; Nyanja","zh":"Chinese","cv":"Chuvash","kw":"Cornish","co":"Corsican","cr":"Cree","hr":"Croatian","cs":"Czech","da":"Danish","dv":"Divehi; Dhivehi; Maldivian;","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","ee":"Ewe","fo":"Faroese","fj":"Fijian","fi":"Finnish","fr":"French","ff":"Fula; Fulah; Pulaar; Pular","gl":"Galician","ka":"Georgian","de":"German","el":"Greek, Modern","gn":"Guaraní","gu":"Gujarati","ht":"Haitian; Haitian Creole","ha":"Hausa","he":"Hebrew (modern)","hz":"Herero","hi":"Hindi","ho":"Hiri Motu","hu":"Hungarian","ia":"Interlingua","id":"Indonesian","ie":"Interlingue","ga":"Irish","ig":"Igbo","ik":"Inupiaq","io":"Ido","is":"Icelandic","it":"Italian","iu":"Inuktitut","ja":"Japanese","jv":"Javanese","kl":"Kalaallisut, Greenlandic","kn":"Kannada","kr":"Kanuri","ks":"Kashmiri","kk":"Kazakh","km":"Khmer","ki":"Kikuyu, Gikuyu","rw":"Kinyarwanda","ky":"Kirghiz, Kyrgyz","kv":"Komi","kg":"Kongo","ko":"Korean","ku":"Kurdish","kj":"Kwanyama, Kuanyama","la":"Latin","lb":"Luxembourgish, Letzeburgesch","lg":"Luganda","li":"Limburgish, Limburgan, Limburger","ln":"Lingala","lo":"Lao","lt":"Lithuanian","lu":"Luba-Katanga","lv":"Latvian","gv":"Manx","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Māori","mr":"Marathi (Marāṭhī)","mh":"Marshallese","mn":"Mongolian","na":"Nauru","nv":"Navajo, Navaho","nb":"Norwegian Bokmål","nd":"North Ndebele","ne":"Nepali","ng":"Ndonga","nn":"Norwegian Nynorsk","no":"Norwegian","ii":"Nuosu","nr":"South Ndebele","oc":"Occitan","oj":"Ojibwe, Ojibwa","cu":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","om":"Oromo","or":"Oriya","os":"Ossetian, Ossetic","pa":"Panjabi, Punjabi","pi":"Pāli","fa":"Persian","pl":"Polish","ps":"Pashto, Pushto","pt":"Portuguese","qu":"Quechua","rm":"Romansh","rn":"Kirundi","ro":"Romanian, Moldavian, Moldovan","ru":"Russian","sa":"Sanskrit (Saṁskṛta)","sc":"Sardinian","sd":"Sindhi","se":"Northern Sami","sm":"Samoan","sg":"Sango","sr":"Serbian","gd":"Scottish Gaelic; Gaelic","sn":"Shona","si":"Sinhala, Sinhalese","sk":"Slovak","sl":"Slovene","so":"Somali","st":"Southern Sotho","es":"Spanish","su":"Sundanese","sw":"Swahili","ss":"Swati","sv":"Swedish","ta":"Tamil","te":"Telugu","tg":"Tajik","th":"Thai","ti":"Tigrinya","bo":"Tibetan Standard, Tibetan, Central","tk":"Turkmen","tl":"Tagalog","tn":"Tswana","to":"Tonga (Tonga Islands)","tr":"Turkish","ts":"Tsonga","tt":"Tatar","tw":"Twi","ty":"Tahitian","ug":"Uighur, Uyghur","uk":"Ukrainian","ur":"Urdu","uz":"Uzbek","ve":"Venda","vi":"Vietnamese","vo":"Volapük","wa":"Walloon","cy":"Welsh","wo":"Wolof","fy":"Western Frisian","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","za":"Zhuang, Chuang"};

  return function(text) {
    if (text === undefined) { return ''; }
    var input = text.split(',');
    var out = [];
    for (var i = 0; i < input.length; i++) {
      var code = input[i];
      if (code.indexOf('-') !== -1) {
        var codes = code.split('-');
        out.push(langCodes[codes[0]] + '(' + codes[1] + ')');
      } else {
        if (langCodes.hasOwnProperty(code)) {
          out.push(langCodes[code]);
        } else {
          out.push(code.toUpperCase());
        }
      }
    }
    return out.join(', ');
  };
});
