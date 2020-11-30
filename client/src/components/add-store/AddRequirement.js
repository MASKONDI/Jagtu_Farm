import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { addRequirement } from "../../actions/profileAction";

class AddRequirement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commodityName: "",
      registrationType: "",
      variety: "",
      quantity: "",
      expectedPrice: "",
      fromDate: "",
      toDate: "",
      remark: "",
      measure:"",
      basis:"",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const curData = {
      commodityName: this.state.commodityName,
      registrationType: this.state.registrationType,
      variety: this.state.variety,
      quantity: this.state.quantity,
      expectedPrice: this.state.expectedPrice,
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
      measure: this.state.measure,
      basis: this.state.basis,
      remark: this.state.remark,
    };
    this.props.addRequirement(curData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
    
        <div className="addRequirement">
          
          <div className="conatiner">
         
            <div className="row">
            
              <div className="col-md-8 m-auto">
              < div className="card p-4">
                  <div className="card-body">
                <Link to="/dashboard" className="btn btn-light">
                  Go Back
                </Link>
                <br />
                <h2 className="display-5 text-center">
                  Add Current/Future Requirement
                </h2>
                <p className="lead text-center">
                  Create a store(What commodity you have or you need???)
                </p>
                <small className="d-block pb-3">* = required fields</small>
                <form onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <select
                        id="commodityName"
                        className={classnames("form-control commodityName ", {
                          "is-invalid": errors.commodityName,
                        })}
                        name="commodityName"
                        value={this.state.commodityName}
                        onChange={this.onChange}
                        data-target="variety"
                      >
                        {errors.commodityName && (
                          <div className="invalid-feedback">
                            {errors.commodityName}
                          </div>
                        )}
                        <option value="0">* Commodity</option>
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
                        <option data-ref="musk">
                          Muskmelon Muskan(खरबूजा)
                        </option>
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
                        <option data-ref="spro">
                          Spring Onion(प्याज पत्ता)
                        </option>
                        <option data-ref="str">Strawberry(स्ट्रॉबेरी)</option>
                        <option data-ref="swt">Sweet Lime(मीठा नींबू) </option>
                        <option data-ref="tom">Tomato(टमाटर)</option>
                        <option data-ref="tur">Turnip(शलजम)</option>
                        <option data-ref="wat">Watermelon(तरबूज)</option>
                        <option data-ref="whet">Wheat(गेहूँ)</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      {/* <select
                        id="variety"
                        className={classnames("form-control variety", {
                          "is-invalid": errors.variety,
                        })}
                        name="variety"
                        value={this.state.variety}
                        onChange={this.onChange}
                      >
                        {errors.variety && (
                          <div className="invalid-feedback">
                            {errors.variety}
                          </div>
                        )}
                        <option value="0">* variety</option>
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
                        <option data-belong="apb" value="Puspita Indian">
                          Puspita Indian
                        </option>
                        <option data-belong="avo" value="Bacon">
                          Bacon
                        </option>{" "}
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
                        <option data-belong="ben" value="Common Bean">
                          Common Bean
                        </option>
                        <option data-belong="ben" value="Lima Bean">
                          Lima Bean
                        </option>
                        <option data-belong="ben" value="Ankur 183">
                          Ankur 183
                        </option>
                        <option data-belong="bit" value="Kohinoor">
                          Kohinoor
                        </option>
                        <option data-belong="bit" value="US 6214">
                          US 6214
                        </option>
                        <option data-belong="bit" value="Chua">
                          Chua
                        </option>{" "}
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
                        </option>{" "}
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
                        </option>{" "}
                        <option data-belong="bro" value="Green Magic">
                          Green Magic
                        </option>
                        <option data-belong="cab" value="Dr. 65">
                          Dr. 65
                        </option>{" "}
                        <option data-belong="cap" value="Paladin">
                          Paladin
                        </option>
                        <option data-belong="cap" value="Asha F1">
                          Asha F1
                        </option>
                        <option data-belong="car" value="Surbhi">
                          Surbhi
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
                        <option data-belong="cer" value="Wheat">
                          Wheat
                        </option>
                        <option data-belong="cer" value="Maize">
                          Maize
                        </option>{" "}
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
                        </option>{" "}
                        <option data-belong="cor" value="Sadhna(CS4)">
                          Sadhna(CS4)
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
                        <option data-belong="dru" value="ODC">
                          ODC
                        </option>{" "}
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
                        </option>{" "}
                        <option
                          data-belong="gar"
                          value="Yamuna Safed-3 (G-282)"
                        >
                          Yamuna Safed-3 (G-282)
                        </option>
                        <option
                          data-belong="gar"
                          value="Yamuna Safed-4 (G-323)"
                        >
                          Yamuna Safed-4 (G-323)
                        </option>
                        <option data-belong="gin" value="Suprava">
                          Suprava
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
                        </option>{" "}
                        <option data-belong="grp" value="Pencil">
                          Pencil
                        </option>
                        <option data-belong="grp" value="Snow Peas">
                          Snow Peas
                        </option>
                        <option data-belong="gua" value="Lukhnow">
                          Lukhnow
                        </option>{" "}
                        <option data-belong="kin" value="Hybrid">
                          Hybrid
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
                        <option data-belong="lad" value="Hybrid F1 Supreme">
                          Hybrid F1 Supreme
                        </option>
                        <option data-belong="lad" value="Taj">
                          Taj
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
                        </option>{" "}
                        <option data-belong="met" value="Mango">
                          Mango
                        </option>
                        <option data-belong="met" value="Sikka">
                          Sikka
                        </option>{" "}
                        <option data-belong="mil" value="Bajra">
                          Bajra
                        </option>
                        <option data-belong="mil" value="Jowar">
                          Jowar
                        </option>
                        <option data-belong="musk" value="Muskan">
                          Muskan
                        </option>
                        <option data-belong="musk" value="Gayatri">
                          Gayatri
                        </option>{" "}
                        <option data-belong="okra" value="Vinus Plus (Vigro)">
                          Vinus Plus (Vigro)
                        </option>
                        <option data-belong="oni" value="Vinus Plus (Vigro)">
                          Vinus Plus (Vigro)
                        </option>{" "}
                        <option data-belong="ora" value="Nagpur- orange">
                          Nagpur- orange
                        </option>
                        <option data-belong="ora" value="Rajasthan- orange">
                          Rajasthan- orange
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
                        <option data-belong="pap" value="Nagpur- orange">
                          Nagpur- orange
                        </option>
                        <option data-belong="pap" value="Rajasthan- orange">
                          Rajasthan- orange
                        </option>
                        <option data-belong="pear" value="Indian Nashpati">
                          Indian Nashpati
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
                        <option data-belong="pom" value="Sinduri">
                          Sinduri
                        </option>
                        <option data-belong="pom" value="Bhagwa">
                          Bhagwa
                        </option>
                        <option data-belong="pom" value="Kandhari">
                          Kandhari
                        </option>{" "}
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
                        </option>{" "}
                        <option data-belong="pum" value="VNR-14">
                          VNR-14
                        </option>{" "}
                        <option data-belong="rad" value="Hilcon">
                          Hilcon
                        </option>
                        <option data-belong="rid" value="Mahyco Surekha">
                          Mahyco Surekha
                        </option>
                        <option data-belong="rid" value="Naga F1">
                          Naga F1
                        </option>{" "}
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
                        <option data-belong="spo" value="F1 Hybrid">
                          F1 Hybrid
                        </option>
                        <option data-belong="spo" value="Nirmal 341">
                          Nirmal 341
                        </option>
                        <option data-belong="spro" value="S2">
                          S2
                        </option>
                        <option data-belong="str" value="camarosa">
                          camarosa
                        </option>
                        <option data-belong="swt" value="Ratnapuri">
                          Ratnapuri
                        </option>{" "}
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
                        </option>{" "}
                        <option data-belong="tur" value="Lalpari">
                          Lalpari
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
                      </select> */}
                      <TextFieldGroup
                        placeholder="* Variety"
                        name="variety"
                        value={this.state.variety}
                        onChange={this.onChange}
                        error={errors.variety}
                       
                      />
                    </div>
                  </div>
                  <select
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.registrationType,
                    })}
                    name="registrationType"
                    value={this.state.registrationType}
                    onChange={this.onChange}
                  >
                    {errors.registrationType && (
                      <div className="invalid-feedback">
                        {errors.registrationType}
                      </div>
                    )}
                    <option value="0">* Status</option>
                    <option value="sell">sell</option>
                    <option value="Buy"> Buy</option>
                  </select>
                  <br />
                  <div className="form-row">
                    <div className="form-group col-md-3">
                      <TextFieldGroup
                        placeholder="* Quantity"
                        type="number"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.onChange}
                        error={errors.quantity}
                        
                      />
                    </div>
                    <div className="form-group col-sm-3">
                    <select
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.measure,
                    })}
                    name="measure"
                    value={this.state.measure}
                    onChange={this.onChange}
                  >
                    {errors.measure && (
                      <div className="invalid-feedback">
                        {errors.measure}
                      </div>
                    )}
                    <option value="0">* Measure</option>
                    <option value="kg">Kilogram</option>
                    <option value="quin"> Quintal</option>
                    <option value="ton"> Ton</option>
                  </select>
                  </div>
                    <div className="form-group col-md-3">
                      <TextFieldGroup
                        placeholder="Expected Price"
                        name="expectedPrice"
                        value={this.state.expectedPrice}
                        onChange={this.onChange}
                        error={errors.expectedPrice}
                        type="number"
                       
                      />
                    </div>
                    <div className="form-group col-sm-3">
                    <select
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.basis,
                    })}
                    name="basis"
                    value={this.state.basis}
                    onChange={this.onChange}
                  >
                    {errors.basis && (
                      <div className="invalid-feedback">
                        {errors.basis}
                      </div>
                    )}
                    <option value="0">* Basis</option>
                    <option value="/kg">per/kg</option>
                    <option value="/quin">per/Quintal</option>
                    <option value="/ton">per/ton</option>
                  </select>
                  </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <h6>From Date</h6>
                      <TextFieldGroup
                        name="fromDate"
                        type="date"
                        value={this.state.fromDate}
                        onChange={this.onChange}
                        error={errors.fromDate}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <h6>To Date</h6>
                      <TextFieldGroup
                        name="toDate"
                        type="date"
                        value={this.state.toDate}
                        onChange={this.onChange}
                        error={errors.toDate}
                      />
                    </div>
                  </div>
                  <TextAreaFieldGroup
                    placeholder="About Commodtiy"
                    name="remark"
                    value={this.state.remark}
                    onChange={this.onChange}
                    error={errors.remark}
                    info="Tell us  about  commodity and it's variety"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
           
          </div>
        </div>
        
      </div>
      </div>
      
    );
  }
}

AddRequirement.propTypes = {
  addRequirement: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addRequirement })(
  withRouter(AddRequirement)
);
