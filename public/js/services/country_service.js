app.factory('Country', function() {
  var countriesToCodes = {"bangladesh":"BD","belgium":"BE","burkina_faso":"BF","bulgaria":"BG","bosnia_and_herzegovina":"BA","brunei":"BN","bolivia":"BO","japan":"JP","burundi":"BI","benin":"BJ","bhutan":"BT","jamaica":"JM","botswana":"BW","brazil":"BR","the_bahamas":"BS","belarus":"BY","belize":"BZ","russia":"RU","rwanda":"RW","republic_of_serbia":"RS","lithuania":"LT","luxembourg":"LU","liberia":"LR","romania":"RO","guinea_bissau":"GW","guatemala":"GT","greece":"GR","equatorial_guinea":"GQ","guyana":"GY","georgia":"GE","united_kingdom":"GB","gabon":"GA","guinea":"GN","gambia":"GM","greenland":"GL","kuwait":"KW","ghana":"GH","oman":"OM","somaliland":"_3","western_sahara":"_2","kosovo":"_1","northern_cyprus":"_0","jordan":"JO","croatia":"HR","haiti":"HT","hungary":"HU","honduras":"HN","puerto_rico":"PR","west_bank":"PS","portugal":"PT","paraguay":"PY","panama":"PA","papua_new_guinea":"PG","peru":"PE","pakistan":"PK","philippines":"PH","poland":"PL","zambia":"ZM","estonia":"EE","egypt":"EG","south_africa":"ZA","ecuador":"EC","albania":"AL","angola":"AO","kazakhstan":"KZ","ethiopia":"ET","zimbabwe":"ZW","spain":"ES","eritrea":"ER","montenegro":"ME","moldova":"MD","madagascar":"MG","morocco":"MA","uzbekistan":"UZ","myanmar":"MM","mali":"ML","mongolia":"MN","macedonia":"MK","malawi":"MW","mauritania":"MR","uganda":"UG","malaysia":"MY","mexico":"MX","vanuatu":"VU","france":"FR","finland":"FI","fiji":"FJ","falkland_islands":"FK","nicaragua":"NI","netherlands":"NL","norway":"NO","namibia":"NA","new_caledonia":"NC","niger":"NE","nigeria":"NG","new_zealand":"NZ","nepal":"NP","ivory_coast":"CI","switzerland":"CH","colombia":"CO","china":"CN","cameroon":"CM","chile":"CL","canada":"CA","republic_of_the_congo":"CG","central_african_republic":"CF","democratic_republic_of_the_congo":"CD","czech_republic":"CZ","cyprus":"CY","costa_rica":"CR","cuba":"CU","swaziland":"SZ","syria":"SY","kyrgyzstan":"KG","kenya":"KE","south_sudan":"SS","suriname":"SR","cambodia":"KH","el_salvador":"SV","slovakia":"SK","south_korea":"KR","slovenia":"SI","north_korea":"KP","somalia":"SO","senegal":"SN","sierra_leone":"SL","solomon_islands":"SB","saudi_arabia":"SA","sweden":"SE","sudan":"SD","dominican_republic":"DO","djibouti":"DJ","denmark":"DK","germany":"DE","yemen":"YE","austria":"AT","algeria":"DZ","united_states":"US","latvia":"LV","uruguay":"UY","lebanon":"LB","laos":"LA","taiwan":"TW","trinidad_and_tobago":"TT","turkey":"TR","sri_lanka":"LK","tunisia":"TN","east_timor":"TL","turkmenistan":"TM","tajikistan":"TJ","lesotho":"LS","thailand":"TH","french_southern_and_antarctic_lands":"TF","togo":"TG","chad":"TD","libya":"LY","united_arab_emirates":"AE","venezuela":"VE","afghanistan":"AF","iraq":"IQ","iceland":"IS","iran":"IR","armenia":"AM","italy":"IT","vietnam":"VN","argentina":"AR","australia":"AU","israel":"IL","india":"IN","tanzania":"TZ","azerbaijan":"AZ","ireland":"IE","indonesia":"ID","ukraine":"UA","qatar":"QA","mozambique":"MZ"};
  var codesToCountries = {};

  for (var key in countriesToCodes) {
    codesToCountries[countriesToCodes[key]] = key;
  }

  return {
    totalCountries: function() {
      return Object.keys(countriesToCodes).length;
    },

    fromCode: function(code) {
      var name = codesToCountries[code];
      return (name === undefined) ? null : { name: name, code: code };
    },

    fromName: function(name) {
      var code = countriesToCodes[name];
      return (code === undefined) ? null : { name: name, code: code };
    },

    randomCountry: function() {
      var keys = Object.keys(countriesToCodes);
      var code = countriesToCodes[ keys[ Math.floor(keys.length * Math.random()) ] ];
      return { name: codesToCountries[code], code: code };
    }
  }
});
