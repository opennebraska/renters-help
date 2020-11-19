import {Document, Image, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
import React from "react";

export const getLetter = (renterInfo, landlordInfo) => {
  const {firstName, lastName, address, unit, city, state, zip} = renterInfo;
  const personalInfoBlock = `${firstName} ${lastName}
    ${address} ${unit}
    ${city}, ${state} ${zip}`;

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 15
    },
    section: {
      fontSize: 12,
      margin: 6,
      padding: 6,
      flexGrow: 1
    },
    footnote: {
      fontSize: 10,
      margin: 6,
      padding: 6,
      marginTop: 0,
      paddingTop: 0,
      flexGrow: 1
    },
    footnoteSeparator: {
      fontSize: 10,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
      padding: 6,
      margin: 6,
      flexGrow: 1
    },
    image: {
      width: '100%'
    }
  });
  const {fullName, company} = landlordInfo;
  return (
      <Document>
        <Page size="Letter" style={styles.page}>
          <View style={styles.section}>
            <Text>
              {personalInfoBlock}
            </Text>
          </View>
          <View style={styles.section}>
            <Text>{fullName}</Text>
            <Text>{company}</Text>
          </View>
          <View style={styles.section}>
            <Text>Dear {fullName}:</Text>
          </View>
          <View style={styles.section}>
            <Text>
              I am writing you to express my right to not be evicted through December 31, 2020 because I am
              unable to pay my rent due to the COVID-19 pandemic. I have this right under the Centers for
              Disease Control and Prevention's ("CDC") Order effective September 4, 2020. The CDC issued this
              Order as an emergency action authorized by Section 361 of the Public Health Act and 42 CFR 70.2
              to prevent the spread of COVID-19 throughout the United States, including Nebraska.
            </Text>
          </View>
          <View style={styles.section}>
            <Text>
              The CDC Order states that “a landlord, owner of residential property, or other person with a
              legal right to pursue eviction or possessory action, shall not evict any covered person from any
              residential property in any jurisdiction to which this Order applies.” I am a “covered person”
              pursuant to this Order and request that you or your agent stop any action to remove or cause the
              removal of myself or my family from the leased property. This Order and its prohibitions apply
              to any stage of the eviction process, including but not limited to: you sending a notice to
              vacate, making an initial court filing, or pursuing execution of a post-judgment possessory
              action.
            </Text>
          </View>
          <View style={styles.section}>
            <Text>
              Please note that pursuant to 18 U.S.C. 3559, 3571; 42 U.SC. 271; and 42 CFR 70.18, a person
              violating this Order may be subject to a fine of up to $250,000, a year and jail, or both
              depending on the circumstances. The U.S. Department of Justice may initiate court proceedings as
              appropriate seeking imposition of these criminal penalties. For further information you may
              contact the CDC directly at 404-639-7000 or cdcregulations@cdc.gov.
            </Text>
          </View>
          <View style={styles.section}>
            <Text>Regards,</Text>
          </View>
          <View style={styles.section}>
            <Text>{personalInfoBlock}</Text>
          </View>
          <View style={{...styles.section, paddingBottom: 0, marginBottom: 0}}>
            <Text>_______________________</Text>
          </View>
          <View style={styles.footnote}>
            <Text>1 Center for Disease Control and Prevention's Order dated September 1, 2020. See: https://www.cdc.gov/coronavirus/2019-ncov/covid-eviction-declaration.html; see also https://www.federalregister.gov/documents/2020/09/04/2020-19654/temporary-halt-in-residential-evictions-to-prevent-the-further-spread-of-covid-19</Text>
          </View>
        </Page>
        <Page size="Letter" style={styles.page}>
          <View style={styles.image}>
            <Image src="/renters-help/declaration-form-page-1.png" />
          </View>
        </Page>
        <Page size="Letter" style={styles.page}>
          <View style={styles.image}>
            <Image src="/renters-help/declaration-form-page-2.png" />
          </View>
        </Page>
      </Document>
  );
}
