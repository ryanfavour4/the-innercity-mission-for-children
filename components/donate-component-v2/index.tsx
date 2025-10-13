'use client'
import React, { useState } from 'react'
import Input from '../input'
import { abbreviateNumber, unformatNumber } from '@/utils/format-number'

export default function DonateSectionV2({
  givingItemDescription = 'Donation & Support for the InnerCity Mission',
}: {
  givingItemDescription?: string
}) {
  const amountList = ['1000', '20000', '50000', '100000']
  const paymentTypeList = ['Local', 'International', 'Bank Transfer']
  const [amount, setAmount] = useState({ value: '' })
  const [paymentType, setPaymentType] = useState({ value: 'Local' })
  const [fullname, setFullname] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })
  const [country, setCountry] = useState('NG')
  const [sponsoring, setSponsoring] = useState('7 Billion Meal Campaign')
  const [submitting, setSubmitting] = useState(false)

  return (
    <>
      <section id="donate-section" className="relative md:px-0">
        {submitting && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-dark/25 text-center text-lg font-semibold text-dark backdrop-blur">
            Submitting... please wait
          </div>
        )}

        <form
          method="post"
          onSubmit={() => setSubmitting(true)}
          action="https://gateway.theinnercitymission.ngo/pay"
          className="flex w-full flex-col items-start overflow-hidden rounded-md border border-textcolor/25 px-3 pb-4 pt-1"
        >
          <div className="flex w-full flex-wrap items-center justify-between gap-1 border-b border-textcolor/25 pt-1.5 lg:gap-3">
            {paymentTypeList.map((item) => (
              <button
                type="button"
                onClick={() => setPaymentType({ value: item })}
                key={item}
                className={`w-fit px-3 py-1.5 text-base lg:px-4 ${paymentType.value === item ? 'border-b-2 border-primary font-medium text-primary' : 'bg-transparent text-textcolor/75'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-4 grid w-full grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="name">
                Name
              </label>
              <Input
                placeholder="Enter your name"
                type="text"
                required
                state={fullname}
                setState={setFullname}
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <Input
                placeholder="Email"
                type="email"
                state={email}
                setState={setEmail}
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="country">
                Country
              </label>
              <select
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                className="input-field"
                id="country"
                name="country"
              >
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas (the)</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia (Plurinational State of)</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory (the)</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="CV">Cabo Verde</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="KY">Cayman Islands (the)</option>
                <option value="CF">Central African Republic (the)</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands (the)</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros (the)</option>
                <option value="CD">Congo (the Democratic Republic of the)</option>
                <option value="CG">Congo (the)</option>
                <option value="CK">Cook Islands (the)</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czechia</option>
                <option value="CI">Côte d&apos;Ivoire</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic (the)</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="SZ">Eswatini</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (the) [Malvinas]</option>
                <option value="FO">Faroe Islands (the)</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories (the)</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia (the)</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (the)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran (Islamic Republic of)</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea (the Democratic People&apos;s Republic of)</option>
                <option value="KR">Korea (the Republic of)</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People&apos;s Democratic Republic (the)</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands (the)</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia (Federated States of)</option>
                <option value="MD">Moldova (the Republic of)</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands (the)</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger (the)</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands (the)</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestine, State of</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines (the)</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="MK">Republic of North Macedonia</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation (the)</option>
                <option value="RW">Rwanda</option>
                <option value="RE">Réunion</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan (the)</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan (Province of China)</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands (the)</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates (the)</option>
                <option value="GB">
                  United Kingdom of Great Britain and Northern Ireland (the)
                </option>
                <option value="UM">United States Minor Outlying Islands (the)</option>
                <option value="US">United States of America (the)</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela (Bolivarian Republic of)</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands (British)</option>
                <option value="VI">Virgin Islands (U.S.)</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
                <option value="AX">Åland Islands</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="item">
                Sponsoring
              </label>
              <select
                onChange={(e) => setSponsoring(e.target.value)}
                value={sponsoring}
                className="input-field"
                id="item"
                name="item"
              >
                <option value="7 Billion Meal Campaign">7 Billion Meals Campaign</option>
                <option value="Colouring Dreams Conference">
                  Colouring Dreams Conference 2025{' '}
                </option>
                <option value="Sponsor A Child's Education S.P.A.C.E">
                  Sponsor A Child&apos;s Education S.P.A.C.E
                </option>
                <option value="Back to School">Back to School</option>
                <option value="Send Portions">Send Portions</option>
                <option value="School Building Projects">School Building Projects</option>
                <option value="Food Parcel For The Needy Family">
                  Food Parcel For The Needy Family
                </option>
                <option value="HAM Campaign">Hunger Action Month</option>
                <option value="#EndChildPovertyNow Campaign: ACTION AGAINST HUNGER">
                  #EndChildPovertyNow
                </option>
                <option value="Feed A Child">Feed A Child</option>
                <option value="Support A Family">Support A Family</option>
                {/* <option  value="Books on Wheels Initiative">Books on Wheels Initiative</option> */}
                {/* <option  value="Send Portions in July">Send Portions in July</option> */}
                {/* <option  value="The $1 Challenge">The $1 Challenge</option> */}
              </select>
            </div>

            <div className="col-span-2">
              <label className="text-sm font-semibold" htmlFor="amount">
                Amount
              </label>
              <div className="flex h-fit w-full gap-1">
                <div className="flex aspect-1 max-h-12 items-center justify-center rounded-md border border-textcolor/50 px-3 text-sm text-textcolor/75 md:max-h-11">
                  ₦
                </div>
                <Input
                  placeholder="Enter other amount..."
                  type="number"
                  state={amount}
                  required
                  className="w-full"
                  setState={setAmount}
                  name="amount"
                />
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-4 gap-x-5 gap-y-2">
              {amountList.map((item) => (
                <div
                  key={item}
                  onClick={() => setAmount({ value: item })}
                  className={`flex cursor-pointer items-center justify-center rounded-md border border-primary px-2 py-2 hover:ring-2 ${unformatNumber(amount.value) === item ? 'bg-primary !text-white' : 'bg-white text-textcolor/75'}`}
                >
                  <p className="text-sm font-medium">₦{abbreviateNumber(Number(item))}</p>
                </div>
              ))}
            </div>
            <small className="text-xs">Help as much as you want</small>

            {/* INVISIBLE TAGS FOR TRACKING DONATIONS  */}
            <div className="invisible">
              <Input
                type="hidden"
                state={{ value: 'NGN' }}
                setState={() => {
                  return { value: '' }
                }}
                name="currency"
              />
              <Input
                type="hidden"
                state={{ value: givingItemDescription }}
                setState={() => {
                  return { value: '' }
                }}
                name="item"
              />
              <Input
                type="hidden"
                state={{ value: givingItemDescription }}
                setState={() => {
                  return { value: '' }
                }}
                name="given-description"
              />
              <Input
                type="hidden"
                state={{ value: 'https://theinnercitymission.ngo/donate/?action=step-2' }}
                setState={() => {
                  return { value: '' }
                }}
                name="domain"
              />
              <Input
                type="hidden"
                state={{ value: 'icm4c' }}
                setState={() => {
                  return { value: '' }
                }}
                name="txn_prefix"
              />
              <Input
                type="hidden"
                state={{ value: 'icm4c' }}
                setState={() => {
                  return { value: '' }
                }}
                name="dept"
              />
              <Input
                type="hidden"
                state={paymentType}
                setState={() => {
                  return { value: '' }
                }}
                name="paymentType"
              />
            </div>

            <button type="submit" className="btn-primary col-span-2">
              Donate
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
