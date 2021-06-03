import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import Photo from "./photo.png";
import MuliExtraLight from "./fonts/Muli-ExtraLight.ttf"; // 200
import MuliLight from "./fonts/Muli-Light.ttf"; // 300
import MuliRegular from "./fonts/Muli-Regular.ttf"; // 400
import MuliMedium from "./fonts/Muli-Medium.ttf"; // 500
import MuliSemiBold from "./fonts/Muli-SemiBold.ttf"; // 600
import MuliBold from "./fonts/Muli-Bold.ttf"; // 700
import MuliExtraBold from "./fonts/Muli-ExtraBold.ttf"; // 800
import MuliBlack from "./fonts/Muli-Black.ttf"; // 900

Font.register({
  family: "Muli",
  fonts: [
    { src: MuliExtraLight, fontStyle: "normal", fontWeight: 200 },
    { src: MuliLight, fontStyle: "normal", fontWeight: 300 },
    { src: MuliRegular, fontStyle: "normal", fontWeight: 400 },
    { src: MuliMedium, fontStyle: "normal", fontWeight: 500 },
    { src: MuliSemiBold, fontStyle: "normal", fontWeight: 600 },
    { src: MuliBold, fontStyle: "normal", fontWeight: 700 },
    { src: MuliExtraBold, fontStyle: "normal", fontWeight: 800 },
    { src: MuliBlack, fontStyle: "normal", fontWeight: 900 },
  ],
});

const styles = StyleSheet.create({
  mainView: {
    margin: "30px",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Muli",
  },
  imageContainer: {
    width: "100%",
    height: 140,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 135,
    borderRadius: "50%",
  },
  sidebar: {
    width: 200,
    height: 780,
    paddingRight: 20,
  },
  sidebarDivider: {
    width: 1,
    height: 780,
    opacity: 0.2,
    borderRight: "1px solid black",
  },
  heading: {
    marginTop: "20px",
    paddingBottom: "5px",
    borderBottom: "1px solid #0fc4a2",
  },
  headingText: {
    fontSize: 13,
    color: "#0fc4a2",
    fontWeight: 600,
  },

  detailsText: {
    fontSize: 11,
    marginTop: 10,
    fontWeight: "medium",
  },

  content: {
    paddingLeft: 15,
    width: 370,
  },

  name: {
    fontSize: 30,
  },

  secondaryHeadingFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  secondaryHeading: {
    fontSize: 13,
  },

  date: {
    fontSize: 10,
    opacity: 0.6,
  },

  positionText: {
    fontSize: 12,
    marginTop: 5,
    opacity: 0.7,
  },

  projectContainer: {
    marginTop: 15,
  },

  projectHeading: {
    fontSize: 13,
  },

  projectDetails: {
    fontSize: 11,
    marginLeft: 20,
    marginTop: 5,
    opacity: 0.8,
  },

  collegeDate: {
    fontSize: 10,
    opacity: 0.6,
    marginTop: 5,
  },

  degree: {
    fontSize: 10,
    opacity: 0.8,
    marginTop: 5,
  },

  links: {
    color: "blue",
    fontSize: 12,
    marginTop: 7,
  },
});

function PDF() {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.mainView}>
          <View style={styles.sidebar}>
            <View style={styles.imageContainer}>
              <Image src={Photo} style={styles.image} />
            </View>

            <View style={styles.heading}>
              <Text style={styles.headingText}>CONTACT</Text>
            </View>

            <Text style={styles.detailsText}>madhu051196@gmail.com</Text>
            <Text style={styles.detailsText}>+91-9789393032</Text>

            <View style={styles.heading}>
              <Text style={styles.headingText}>SKILLS</Text>
            </View>

            <View>
              <Text style={styles.detailsText}>HTML 5</Text>
              <Text style={styles.detailsText}>CSS 3</Text>
              <Text style={styles.detailsText}>Javascript</Text>
              <Text style={styles.detailsText}>ReactJs</Text>
              <Text style={styles.detailsText}>NodeJs</Text>
              <Text style={styles.detailsText}>ExpressJs</Text>
              <Text style={styles.detailsText}>MongoDB</Text>
            </View>
          </View>
          <View style={styles.sidebarDivider}></View>
          <View style={styles.content}>
            <Text style={styles.name}>Madhukanth T</Text>

            <View style={styles.heading}>
              <Text style={styles.headingText}>EXPERIENCE</Text>
            </View>

            <View style={styles.secondaryHeadingFlex}>
              <Text style={styles.secondaryHeading}>Suspect Technologies</Text>
              <Text style={styles.date}>May 2018 - Present</Text>
            </View>

            <Text style={styles.positionText}>Software Developer</Text>

            <View style={styles.projectContainer}>
              <Text style={styles.projectHeading}>
                Onpremise Redaction Desktop (2018)
              </Text>

              <Text style={styles.projectDetails}>
                Developed Video player UI and implemented backend server for API
                integration.
              </Text>

              <Text style={styles.projectDetails}>
                Currently used by Bradley County Police Department (U.S. State
                of Tennessee)
              </Text>

              <Text style={styles.projectDetails}>
                Helps in face detection and face redaction
              </Text>
            </View>

            <View style={styles.projectContainer}>
              <Text style={styles.projectHeading}>
                Onpremise Redaction Web (2019)
              </Text>

              <Text style={styles.projectDetails}>
                Developed Video player UI and implemented backend server for API
                integration.
              </Text>

              <Text style={styles.projectDetails}>
                Helps in face detection and face redaction
              </Text>
            </View>

            <View style={styles.projectContainer}>
              <Text style={styles.projectHeading}>
                Face Detection API (2020)
              </Text>

              <Text style={styles.projectDetails}>
                Developed API endpoints for detecting faces in videos.
              </Text>

              <Text style={styles.projectDetails}>
                Currently used by companies GETAC and FORAY.
              </Text>

              <Text style={styles.projectDetails}>
                Helps in face detection and face redaction
              </Text>
            </View>

            <View style={styles.projectContainer}>
              <Text style={styles.projectHeading}>
                Data Structures and Algorithms
              </Text>

              <Text style={styles.projectDetails}>
                Solved 200+ problems in LeetCode.
              </Text>

              <Text style={styles.projectDetails}>
                Topics including Array, Sorting, Dynamic Programming, DFS, BFS,
                Priority Queues, Matrices, Two Pointers, Greedy and
                Backtracking.(Javascript)
              </Text>
            </View>

            <View style={styles.heading}>
              <Text style={styles.headingText}>EDUCATION</Text>
            </View>

            <View style={styles.projectContainer}>
              <Text style={styles.secondaryHeading}>
                KIT - Kalaignar Karunanidhi Institute of Technology
              </Text>
              <Text style={styles.degree}>
                B.E. Computer Science and Engineering
              </Text>
              <Text style={styles.collegeDate}>Jun 2015 - May 2019</Text>
            </View>

            <View style={styles.heading}>
              <Text style={styles.headingText}>SOCIAL NETWORKS</Text>
            </View>

            <Text style={styles.links}>
              https://www.linkedin.com/in/madhukanth/
            </Text>
            <Text style={styles.links}>https://github.com/Madhukanth</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
