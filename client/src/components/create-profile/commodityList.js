<html>
  <body>
    <script src="selectFilter.min.js"></script>
    <select
      class="form-control commodity selectFilter"
      data-target="variety"
      name="commodity"
      required=""
    >
      <option selected="" value="-1">
        Commodity
      </option>
      <option data-ref="ap">Apple(सेब)</option>
      <option data-ref="apb">Apple Ber(सेब का बेर)</option>
      <option data-ref="avo">Avocado(एवोकाडो)</option>
      <option data-ref="ban">Banana(केला)</option>
      <option data-ref="ben">Bean(सेम)</option>
      <option data-ref="bit">Bitter Gourd(करेला)</option>
      <option data-ref="bot">Bottle Gourd(लौकी)</option>
      <option data-ref="bri">Brinjal(बैंगन)</option>
      <option data-ref="bro">Broccoli(ब्रोकोली)</option>
      <option data-ref="cab">Cabbage(पत्ता गोभी)</option>
      <option data-ref="cap">Capsicum(शिमला मिर्च)</option>
      <option data-ref="car">Carrot(गाजर)</option>
      <option data-ref="cau">Cauliflower(गोभी)</option>
      <option data-ref="cer">Cereals(अनाज)</option>
      <option data-ref="cher">Cherry(चेरी)</option>
      <option data-ref="cor">Coriander(धनिया)</option>
      <option data-ref="cuc">Cucumber(खीरा)</option>
      <option data-ref="dru">Drumstick(ढोल का छड़ी)</option>
      <option data-ref="dry">Dry Fruits(मेवे)</option>
      <option data-ref="gar">Garlic(लहसुन)</option>
      <option data-ref="gin">Ginger(अदरक)</option>
      <option data-ref="gra">Grapes(अंगूर)</option>
      <option data-ref="grc">Green Chilli(हरी मिर्च)</option>
      <option data-ref="grp">Green Peas(हरी मटर)</option>
      <option data-ref="gua">Guava(अमरूद)</option>
      <option data-ref="kin">Kinnow</option>
      <option data-ref="kiw">Kiwi Imported(कीवी)</option>
      <option data-ref="lad">Lady Finger(भिन्डी)</option>
      <option data-ref="mai">Maize(मक्का)</option>
      <option data-ref="man">Mango(आम)</option>
      <option data-ref="met">Methi(मेथी)</option>
      <option data-ref="mil">Millets(बाजरा)</option>
      <option data-ref="musk">Muskmelon Muskan(खरबूजा)</option>
      <option data-ref="orka">Okra(लंबी भिंडी)</option>
      <option data-ref="oni">Onion(प्याज)</option>
      <option data-ref="ora">Orange(संतरा)</option>
      <option data-ref="pad">Paddy(धान)</option>
      <option data-ref="pap">Papaya(पपीता)</option>
      <option data-ref="pear">Pear(नाशपाती)</option>
      <option data-ref="pearI">Pear Imported(नाशपाती)</option>
      <option data-ref="pom">Pomegranate(अनार)</option>
      <option data-ref="pot">Potato(आलू)</option>
      <option data-ref="pul">Pulses(दलहन)</option>
      <option data-ref="pum">Pumpkin(कद्दू)</option>
      <option data-ref="rad">Radish(मूली)</option>
      <option data-ref="rid">Ridge Gourd(तुरई)</option>
      <option data-ref="spi">Spices(मसाले)</option>
      <option data-ref="spo">Sponge Gourd(स्पंज लौकी)</option>
      <option data-ref="spro">Spring Onion(प्याज पत्ता)</option>
      <option data-ref="str">Strawberry(स्ट्रॉबेरी)</option>
      <option data-ref="swt">Sweet Lime(मीठा नींबू) </option>
      <option data-ref="tom">Tomato(टमाटर)</option>
      <option data-ref="tur">Turnip(शलजम)</option>
      <option data-ref="wat">Watermelon(तरबूज)</option>
      <option data-ref="whet">Wheat(गेहूँ)</option>
    </select>

    <APPLE>
      <select
        class="form-control variety selectFilter "
        name="variety"
        required=""
      >
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="ap" value="Red Chief">
          Red Chief
        </option>
        <option data-belong="ap" value="Red Spur">
          Red Spur
        </option>
        <option data-belong="ap" value="Red Delicious">
          Red Delicious
        </option>
        <option data-belong="ap" value="Tydeman's Early">
          Tydeman's Early
        </option>
        <option data-belong="ap" value="Starking Delicious">
          Starking Delicious
        </option>
        <option data-belong="ap" value="Golden Spur">
          Golden Spur
        </option>
        <option data-belong="ap" value="Granny Smith">
          Granny Smith
        </option>
        <option data-belong="ap" value="Fuji">
          Fuji
        </option>
        <option data-belong="ap" value="Royal Gala">
          Royal Gala
        </option>
        <option data-belong="ap" value="Royal Delicious">
          Royal Delicious
        </option>
        <option data-belong="ap" value="American">
          American
        </option>
        <option data-belong="ap" value="Golden">
          Golden
        </option>
        <option data-belong="ap" value="Richred">
          Richred
        </option>
        <option data-belong="ap" value="Amri">
          Amri
        </option>
      </select>
    </APPLE>

    <AppleBER>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="apb" value="Puspita Indian">
          Puspita Indian
        </option>
      </select>
    </AppleBER>

    <Avocado>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="avo" value="Bacon">
          Bacon
        </option>
      </select>
    </Avocado>

    <Banana>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="ban" value="Cavendish">
          Cavendish
        </option>
        <option data-belong="ban" value="Ripening">
          Ripening
        </option>
        <option data-belong="ban" value="Singapuri">
          Singapuri
        </option>
        <option data-belong="ban" value="Robusta">
          Robusta
        </option>
        <option data-belong="ban" value="Yelakki">
          Yelakki
        </option>
      </select>
    </Banana>

    <Bean>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="ben" value="Common Bean">
          Common Bean
        </option>
        <option data-belong="ben" value="Lima Bean">
          Lima Bean
        </option>
        <option data-belong="ben" value="Ankur 183">
          Ankur 183
        </option>
      </select>
    </Bean>

    <BitterGourd>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="bit" value="Kohinoor">
          Kohinoor
        </option>
        <option data-belong="bit" value="US 6214">
          US 6214
        </option>
        <option data-belong="bit" value="Chua">
          Chua
        </option>
      </select>
    </BitterGourd>

    <BottleGourd>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="bot" value="VNR Haruna">
          VNR Haruna
        </option>
        <option data-belong="bot" value="Micro">
          Micro
        </option>
        <option data-belong="bot" value="Nirmal 48 (Vikram)">
          Nirmal 48 (Vikram)
        </option>
        <option data-belong="bot" value="Mahyco Warad">
          Mahyco Warad
        </option>
      </select>
    </BottleGourd>

    <Brinjal>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="bri" value="Pusa Purple Cluster">
          Pusa Purple Cluster
        </option>
        <option data-belong="bri" value="Pusa Hybrid-5">
          Pusa Hybrid-5
        </option>
        <option data-belong="bri" value="Pusa Purple Round">
          Pusa Purple Round
        </option>
        <option data-belong="bri" value="Nagpure Chu Chu">
          Nagpure Chu Chu
        </option>
        <option data-belong="bri" value="Galan 907">
          Galan 907
        </option>
        <option data-belong="bri" value="Panchganga">
          Panchganga
        </option>
      </select>
    </Brinjal>

    <Broccoli>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="bro" value="Green Magic">
          Green Magic
        </option>
      </select>
    </Broccoli>

    <Cabbage>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="cab" value="Dr. 65">
          Dr. 65
        </option>
      </select>
    </Cabbage>

    <Capsicum>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="cap" value="Paladin">
          Paladin
        </option>
        <option data-belong="cap" value="Asha F1">
          Asha F1
        </option>
      </select>
    </Capsicum>

    <Carrot>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="car" value="Surbhi">
          Surbhi
        </option>
      </select>
    </Carrot>

    <Cauliflower>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="cau" value="Syngenta 6099">
          Syngenta 6099
        </option>
        <option data-belong="cau" value="Syngenta 1522">
          Syngenta 1522
        </option>
        <option data-belong="cau" value="Doctor Summer White">
          Doctor Summer White
        </option>
      </select>
    </Cauliflower>

    <Cereals>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="cer" value="Wheat">
          Wheat
        </option>
        <option data-belong="cer" value="Maize">
          Maize
        </option>
      </select>
    </Cereals>

    <Cherry>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="cher" value="neuro-deuro">
          neuro-deuro
        </option>
        <option data-belong="cher" value="stella">
          stella
        </option>
        <option data-belong="cher" value="black heart">
          black heart
        </option>
        <option data-belong="cher" value="red heart">
          red heart
        </option>
        <option data-belong="cher" value="napoleon white">
          napoleon white
        </option>
        <option data-belong="cher" value="merchant">
          merchant
        </option>
        <option data-belong="cher" value="pink early">
          pink early
        </option>
        <option data-belong="cher" value="lambert">
          lambert
        </option>
      </select>
    </Cherry>

    <Coriander>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="cor" value="Sadhna(CS4)">
          Sadhna(CS4)
        </option>
      </select>
    </Coriander>

    <Cucumber>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="cuc" value="East West Sayra">
          East West Sayra
        </option>
        <option data-belong="cuc" value="Malini">
          Malini
        </option>
        <option data-belong="cuc" value="Fadia">
          Fadia
        </option>
        <option data-belong="cuc" value="Hybrid">
          Hybrid
        </option>
        <option data-belong="cuc" value="Arya- Pranita">
          Arya- Pranita
        </option>
      </select>
    </Cucumber>

    <Drumstick>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="dru" value="ODC">
          ODC
        </option>
      </select>
    </Drumstick>

    <DRYFruits>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="dry" value="Almond">
          Almond
        </option>
        <option data-belong="dry" value="Cashew nut">
          Cashew nut
        </option>
        <option data-belong="dry" value="Raisins (Kishmish)">
          Raisins (Kishmish)
        </option>
        <option data-belong="dry" value="Walnut">
          Walnut
        </option>
      </select>
    </DRYFruits>

    <Garlic>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="gar" value="Yamuna Safed-3 (G-282)">
          Yamuna Safed-3 (G-282)
        </option>
        <option data-belong="gar" value="Yamuna Safed-4 (G-323)">
          Yamuna Safed-4 (G-323)
        </option>
      </select>
    </Garlic>

    <Ginger>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="gin" value="Suprava">
          Suprava
        </option>
      </select>
    </Ginger>

    <Grapes>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="gra" value="Pusa Seedless">
          Pusa Seedless
        </option>
        <option data-belong="gra" value="Red Globe">
          Red Globe
        </option>
        <option data-belong="gra" value="Thompson">
          Thompson
        </option>
        <option data-belong="gra" value="Sonaka">
          Sonaka
        </option>
        <option data-belong="gra" value="Sharad Seedless">
          Sharad Seedless
        </option>
      </select>
    </Grapes>

    <GREENChilli>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="grc" value="Sierra">
          Sierra
        </option>
        <option data-belong="grc" value="Picador US 730">
          Picador US 730
        </option>
        <option data-belong="grc" value="Hakone">
          Hakone
        </option>
        <option data-belong="grc" value="Navtej Mahyco">
          Navtej Mahyco
        </option>
        <option data-belong="grc" value="Nandita F1">
          Nandita F1
        </option>
        <option data-belong="grc" value="Omega">
          Omega
        </option>
      </select>
    </GREENChilli>

    <GreenPeas>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="grp" value="Pencil">
          Pencil
        </option>
        <option data-belong="grp" value="Snow Peas">
          Snow Peas
        </option>
      </select>
    </GreenPeas>

    <Guava>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="gua" value="Lukhnow">
          Lukhnow
        </option>
      </select>
    </Guava>

    <Kinnow>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="kin" value="Hybrid">
          Hybrid
        </option>
      </select>
    </Kinnow>

    <KiwiImported>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="kiw" value="zespri">
          zespri
        </option>
        <option data-belong="kiw" value="italy">
          italy
        </option>
        <option data-belong="kiw" value="irani">
          irani
        </option>
        <option data-belong="kiw" value="chilli">
          chilli
        </option>
      </select>
    </KiwiImported>

    <LadyFinger>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="lad" value="Hybrid F1 Supreme">
          Hybrid F1 Supreme
        </option>
        <option data-belong="lad" value="Taj">
          Taj
        </option>
      </select>
    </LadyFinger>

    <Maize>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
      </select>
    </Maize>

    <Mango>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="man" value="Langda">
          Langda
        </option>
        <option data-belong="man" value="Bumbaiya">
          Bumbaiya
        </option>
        <option data-belong="man" value="Bidu">
          Bidu
        </option>
        <option data-belong="man" value="Alphanso">
          Alphanso
        </option>
        <option data-belong="man" value="Dussehri">
          Dussehri
        </option>
        <option data-belong="man" value="Totapuri">
          Totapuri
        </option>
        <option data-belong="man" value="Safeda">
          Safeda
        </option>
        <option data-belong="man" value="Sindoori">
          Sindoori
        </option>
        <option data-belong="man" value="Kesar">
          Kesar
        </option>
        <option data-belong="man" value="Pairi">
          Pairi
        </option>
        <option data-belong="man" value="Chausa">
          Chausa
        </option>
        <option data-belong="man" value="Banganapalli">
          Banganapalli
        </option>
        <option data-belong="man" value="Amrapali">
          Amrapali
        </option>
      </select>
    </Mango>

    <Methi>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="met" value="Mango">
          Mango
        </option>
        <option data-belong="met" value="Sikka">
          Sikka
        </option>
      </select>
    </Methi>

    <Millets>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="mil" value="Bajra">
          Bajra
        </option>
        <option data-belong="mil" value="Jowar">
          Jowar
        </option>
      </select>
    </Millets>

    <MuskmelonMuskan>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="musk" value="Muskan">
          Muskan
        </option>
        <option data-belong="musk" value="Gayatri">
          Gayatri
        </option>
      </select>
    </MuskmelonMuskan>

    <Okra>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="okra" value="Vinus Plus (Vigro)">
          Vinus Plus (Vigro)
        </option>
      </select>
    </Okra>

    <Onion>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="oni" value="Vinus Plus (Vigro)">
          Vinus Plus (Vigro)
        </option>
      </select>
    </Onion>

    <Orange>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="ora" value="Nagpur- orange">
          Nagpur- orange
        </option>
        <option data-belong="ora" value="Rajasthan- orange">
          Rajasthan- orange
        </option>
      </select>
    </Orange>
    <Paddy>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Ananda
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Annapurna
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Narendra Usar-3
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Kaveri
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Mahalakshmi
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Pusa-834
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Sudha
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Parijat
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Bansmoti
        </option>
        <option data-belong="pad" value="Puspita Indian">
          Kataribhog
        </option>
      </select>
    </Paddy>
    <Papaya>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pap" value="Nagpur- orange">
          Nagpur- orange
        </option>
        <option data-belong="pap" value="Rajasthan- orange">
          Rajasthan- orange
        </option>
      </select>
    </Papaya>
    <Pear>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pear" value="Indian Nashpati">
          Indian Nashpati
        </option>
      </select>
    </Pear>
    <PearImported>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pearI" value="South Africa">
          South Africa
        </option>
        <option data-belong="pearI" value="USA">
          USA
        </option>
        <option data-belong="pearI" value="China">
          China
        </option>
      </select>
    </PearImported>
    <Pomegranate>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pom" value="Sinduri">
          Sinduri
        </option>
        <option data-belong="pom" value="Bhagwa">
          Bhagwa
        </option>
        <option data-belong="pom" value="Kandhari">
          Kandhari
        </option>
      </select>
    </Pomegranate>

    <Potato>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pot" value="Pink Gypsy">
          Pink Gypsy
        </option>
        <option data-belong="pot" value="Ambo">
          Ambo
        </option>
        <option data-belong="pot" value="Apache">
          Apache
        </option>
        <option data-belong="pot" value="Kufri Jyoti">
          Kufri Jyoti
        </option>
        <option data-belong="pot" value="Kufii Sindhuri">
          Kufii Sindhuri
        </option>
        <option data-belong="pot" value="3797">
          3797
        </option>
        <option data-belong="pot" value="sadabahar">
          sadabahar
        </option>
        <option data-belong="pot" value="Pukhraaj">
          Pukhraaj
        </option>
        <option data-belong="pot" value="Lady Rose (LR)">
          Lady Rose (LR)
        </option>
        <option data-belong="pot" value="Pahari">
          Pahari
        </option>
        <option data-belong="pot" value="Low Sugar (LS)">
          Low Sugar (LS)
        </option>
        <option data-belong="pot" value="T7">
          T7
        </option>
        <option data-belong="pot" value="Chipsona">
          Chipsona
        </option>
        <option data-belong="pot" value="Sugar Free">
          Sugar Free
        </option>
        <option data-belong="pot" value="Kufri Khyati">
          Kufri Khyati
        </option>
        <option data-belong="pot" value="Chipsona 1">
          Chipsona 1
        </option>
        <option data-belong="pot" value="Chipsona 3">
          Chipsona 3
        </option>
        <option data-belong="pot" value="302">
          302
        </option>
        <option data-belong="pot" value="Surya">
          Surya
        </option>
      </select>
    </Potato>

    <Pulses>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pul" value="Soya Seeds">
          Soya Seeds
        </option>
        <option data-belong="pul" value="Black Chana">
          Black Chana
        </option>
        <option data-belong="pul" value="Green Gram">
          Green Gram
        </option>
        <option data-belong="pul" value="Black Gram">
          Black Gram
        </option>
        <option data-belong="pul" value="White Pea">
          White Pea
        </option>
        <option data-belong="pul" value="Green Pea">
          Green Pea
        </option>
      </select>
    </Pulses>

    <Pumpkin>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="pum" value="VNR-14">
          VNR-14
        </option>
      </select>
    </Pumpkin>

    <Radish>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="rad" value="Hilcon">
          Hilcon
        </option>
      </select>
    </Radish>

    <RidgeGourd>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="rid" value="Mahyco Surekha">
          Mahyco Surekha
        </option>
        <option data-belong="rid" value="Naga F1">
          Naga F1
        </option>
      </select>
    </RidgeGourd>

    <Spices>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="spi" value="Black Pepper">
          Black Pepper
        </option>
        <option data-belong="spi" value="Mustard Seeds">
          Mustard Seeds
        </option>
        <option data-belong="spi" value="Cumin">
          Cumin
        </option>
        <option data-belong="spi" value="Ajwain">
          Ajwain
        </option>
        <option data-belong="spi" value="Coriander">
          Coriander
        </option>
        <option data-belong="spi" value="Green Cardamom">
          Green Cardamom
        </option>
      </select>
    </Spices>

    <SpongeGourd>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="spo" value="F1 Hybrid">
          F1 Hybrid
        </option>
        <option data-belong="spo" value="Nirmal 341">
          Nirmal 341
        </option>
      </select>
    </SpongeGourd>

    <SpringOnion>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="spro" value="S2">
          S2
        </option>
      </select>
    </SpringOnion>

    <Strawberry>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="str" value="camarosa">
          camarosa
        </option>
      </select>
    </Strawberry>

    <SweetLime>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="swt" value="Ratnapuri">
          Ratnapuri
        </option>
      </select>
    </SweetLime>

    <Tomato>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="tom" value="HS-101">
          HS-101
        </option>
        <option data-belong="tom" value="Sweet-72">
          Sweet-72
        </option>
        <option data-belong="tom" value="Pusa Hybrid-2">
          Pusa Hybrid-2
        </option>
        <option data-belong="tom" value="Punjab Kesri">
          Punjab Kesri
        </option>
        <option data-belong="tom" value="Alankar">
          Alankar
        </option>
        <option data-belong="tom" value="Himsona">
          Himsona
        </option>
        <option data-belong="tom" value="Himsikhar">
          Himsikhar
        </option>
        <option data-belong="tom" value="Rishika 225">
          Rishika 225
        </option>
        <option data-belong="tom" value="Meghdoot 2048">
          Meghdoot 2048
        </option>
      </select>
    </Tomato>

    <Turnip>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="tur" value="Lalpari">
          Lalpari
        </option>
      </select>
    </Turnip>

    <Watermelon>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="wat" value="K2">
          K2
        </option>
        <option data-belong="wat" value="Kiran King">
          Kiran King
        </option>
        <option data-belong="wat" value="Max">
          Max
        </option>
        <option data-belong="wat" value="Striped">
          Striped
        </option>
        <option data-belong="wat" value="Bahubali">
          Bahubali
        </option>
      </select>
    </Watermelon>
    <Wheat>
      <select class="form-control " name="variety" required="">
        <option selected="" value="">
          Variety
        </option>
        <option data-belong="whet" value="Common or Bread">
          Common or Bread
        </option>
        <option data-belong="whet" value="Spelt">
          Spelt
        </option>
        <option data-belong="whet" value="Durum">
          Durum
        </option>
        <option data-belong="whet" value="Emmer">
          Emmer
        </option>
        <option data-belong="whet" value="Einkorn">
          Einkorn
        </option>
        <option data-belong="whet" value="Lokwan">
          Lokwan
        </option>
        <option data-belong="whet" value="1482">
          1482
        </option>
      </select>
    </Wheat>
  </body>
</html>;
