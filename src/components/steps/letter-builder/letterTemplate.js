export const getLetter = (renterInfo, landlordInfo) => {
    const {firstName, lastName, address, unit, city, state, zip} = renterInfo;
    const personalInfoBlock = `${firstName} ${lastName}
    ${address} ${unit}
    ${city}, ${state} ${zip}`;
    return `
     ${new Date().toDateString()}

     ${personalInfoBlock}

     ${landlordInfo.fullName}
     Dear ${landlordInfo.fullName}:
     I am writing you to express my right to not be evicted through December 31, 2020 because I am unable to pay my rent due to the COVID-19 pandemic. I have this right under the Centers for Disease Control and Prevention's ("CDC") Order effective September 4, 20201. The CDC issued this Order as an emergency action authorized by Section 361 of the Public Health Act and 42 CFR 70.2 to prevent the spread of COVID-19 throughout the United States, including Nebraska.

     The CDC Order states that “a landlord, owner of residential property, or other person with a legal right to pursue eviction or possessory action, shall not evict any covered person from any residential property in any jurisdiction to which this Order applies.” I am a “covered person” pursuant to this Order and request that you or your agent stop any action to remove or cause the removal of myself or my family from the leased property. This Order and its prohibitions apply to any stage of the eviction process, including but not limited to: you sending a notice to vacate, making an initial court filing, or pursuing execution of a post-judgment possessory action.

     Please note that pursuant to 18 U.S.C. 3559, 3571; 42 U.SC. 271; and 42 CFR 70.18, a person violating this Order may be subject to a fine of up to $250,000, a year and jail, or both depending on the circumstances. The U.S. Department of Justice may initiate court proceedings as appropriate seeking imposition of these criminal penalties. For further information you may contact the CDC directly at 404-639-7000 or  cdcregulations@cdc.gov.

      Regards,
      _______________________
      ${personalInfoBlock}

      _______________________
      _______________________
      1 Center for Disease Control and Prevention's Order dated September 1, 2020. See:  https://www.cdc.gov/coronavirus/2019-ncov/covid-eviction-declaration.html;  see also https://www.federalregister.gov/documents/2020/09/04/2020-19654/temporary-halt-in-residential-evictions-to-prevent-the-further-spread-of-covid-19`;
}
