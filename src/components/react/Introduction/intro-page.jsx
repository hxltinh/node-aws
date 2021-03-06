import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContentTitle } from "../ContentTitle";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
      fontSize: 20,
    },
    img: {
        width: '100%',
    }
  }));

export const IntroPage = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <ContentTitle>About Us</ContentTitle>
            <div><p>we offer the best quality product with fair price</p></div>
            <div>
                <img className={styles.img} src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/rice-factory.jpg" />
            </div>

            <ContentTitle>Export Map</ContentTitle>
            <div>
                <img className={styles.img} src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/world_export.png" />
            </div>

            <ContentTitle>Our Certifications</ContentTitle>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/cer_CCI.png"></img>
                </Grid>
                <Grid item xs={4}>
                    <img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/cer_FDA.png"></img>
                </Grid>
                <Grid item xs={4}>
                    <img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/cer_HALAL.png"></img>
                </Grid>
                <Grid item xs={4}>
                    <img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/cer_SGS.png"></img>
                </Grid>
                <Grid item xs={4}>
                    <img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/cer_VFA.png"></img>
                </Grid>
                <Grid item xs={4}>
                    <img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/cer_ISO.png"></img>
                </Grid>
            </Grid>
        </div>
    );
}