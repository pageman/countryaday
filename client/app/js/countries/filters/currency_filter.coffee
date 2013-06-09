countries.filter 'expandCurrency', () ->
  currencyCodes = {"USD":"US Dollar","CAD":"Canadian Dollar","EUR":"Euro","AED":"United Arab Emirates Dirham","AFN":"Afghan Afghani","ALL":"Albanian Lek","AMD":"Armenian Dram","ARS":"Argentine Peso","AUD":"Australian Dollar","AZN":"Azerbaijani Manat","BAM":"Bosnia-Herzegovina Convertible Mark","BDT":"Bangladeshi Taka","BGN":"Bulgarian Lev","BHD":"Bahraini Dinar","BIF":"Burundian Franc","BND":"Brunei Dollar","BOB":"Bolivian Boliviano","BRL":"Brazilian Real","BWP":"Botswanan Pula","BYR":"Belarusian Ruble","BZD":"Belize Dollar","CDF":"Congolese Franc","CHF":"Swiss Franc","CLP":"Chilean Peso","CNY":"Chinese Yuan","COP":"Colombian Peso","CRC":"Costa Rican Colón","CVE":"Cape Verdean Escudo","CZK":"Czech Republic Koruna","DJF":"Djiboutian Franc","DKK":"Danish Krone","DOP":"Dominican Peso","DZD":"Algerian Dinar","EEK":"Estonian Kroon","EGP":"Egyptian Pound","ERN":"Eritrean Nakfa","ETB":"Ethiopian Birr","GBP":"British Pound Sterling","GEL":"Georgian Lari","GHS":"Ghanaian Cedi","GNF":"Guinean Franc","GTQ":"Guatemalan Quetzal","HKD":"Hong Kong Dollar","HNL":"Honduran Lempira","HRK":"Croatian Kuna","HUF":"Hungarian Forint","IDR":"Indonesian Rupiah","ILS":"Israeli New Sheqel","INR":"Indian Rupee","IQD":"Iraqi Dinar","IRR":"Iranian Rial","ISK":"Icelandic Króna","JMD":"Jamaican Dollar","JOD":"Jordanian Dinar","JPY":"Japanese Yen","KES":"Kenyan Shilling","KHR":"Cambodian Riel","KMF":"Comorian Franc","KRW":"South Korean Won","KWD":"Kuwaiti Dinar","KZT":"Kazakhstani Tenge","LBP":"Lebanese Pound","LKR":"Sri Lankan Rupee","LTL":"Lithuanian Litas","LVL":"Latvian Lats","LYD":"Libyan Dinar","MAD":"Moroccan Dirham","MDL":"Moldovan Leu","MGA":"Malagasy Ariary","MKD":"Macedonian Denar","MMK":"Myanma Kyat","MOP":"Macanese Pataca","MUR":"Mauritian Rupee","MXN":"Mexican Peso","MYR":"Malaysian Ringgit","MZN":"Mozambican Metical","NAD":"Namibian Dollar","NGN":"Nigerian Naira","NIO":"Nicaraguan Córdoba","NOK":"Norwegian Krone","NPR":"Nepalese Rupee","NZD":"New Zealand Dollar","OMR":"Omani Rial","PAB":"Panamanian Balboa","PEN":"Peruvian Nuevo Sol","PHP":"Philippine Peso","PKR":"Pakistani Rupee","PLN":"Polish Zloty","PYG":"Paraguayan Guarani","QAR":"Qatari Rial","RON":"Romanian Leu","RSD":"Serbian Dinar","RUB":"Russian Ruble","RWF":"Rwandan Franc","SAR":"Saudi Riyal","SDG":"Sudanese Pound","SEK":"Swedish Krona","SGD":"Singapore Dollar","SOS":"Somali Shilling","SYP":"Syrian Pound","THB":"Thai Baht","TND":"Tunisian Dinar","TOP":"Tongan Paʻanga","TRY":"Turkish Lira","TTD":"Trinidad and Tobago Dollar","TWD":"New Taiwan Dollar","TZS":"Tanzanian Shilling","UAH":"Ukrainian Hryvnia","UGX":"Ugandan Shilling","UYU":"Uruguayan Peso","UZS":"Uzbekistan Som","VEF":"Venezuelan Bolívar","VND":"Vietnamese Dong","XAF":"CFA Franc BEAC","XOF":"CFA Franc BCEAO","YER":"Yemeni Rial","ZAR":"South African Rand","ZMK":"Zambian Kwacha"}

  (code) ->
    if currencyCodes.hasOwnProperty(code)
      currencyCodes[code]
    else
      code

