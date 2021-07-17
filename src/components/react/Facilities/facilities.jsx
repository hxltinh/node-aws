import React from "react";
import Grid from "@material-ui/core/Grid";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ContentTitle } from "../ContentTitle";

const useStyles = makeStyles((theme) => ({
    img: {
        width: "100%",
    },
    facilityProcessingWrapper: {
      marginTop: 30,
      display: 'flex',
      flexDirection: 'column',
    },
    facilityProcessingTitle: {
      color: "rgb(51, 153, 255)",
      fontSize: 22, 
      padding: '0 30px',
      borderBottom: '1px dotted rgb(51, 153, 255)',
      width: 400,
    }
}));

export const Facilities = () => {
  const styles = useStyles();
    return (
        <div className="gb-padding">
            
            <Grid container spacing={3}>
                {items.map((item) => (
                    <Grid item xs={4}>
                        <Item key={item.title} item={item} />
                    </Grid>
                ))}
            </Grid>

            <ContentTitle>Processing</ContentTitle>

            <div className={styles.facilityProcessingWrapper}>
                <div className={styles.facilityProcessingTitle}>Milling Process</div>
                <div>
                    <img className={styles.img} src="https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_processing_1.jpg" />
                </div>
                <div className={styles.facilityProcessingTitle}>Refining</div>
                <div>
                    <img src="https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_processing_2.jpg" />
                </div>
                <div className={styles.facilityProcessingTitle}>Packing</div>
                <div>
                    <img src="https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_processing_3.jpg" />
                </div>
            </div>
        </div>
    );
};

function Item({ item }) {
    const style = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={item.imageUrl}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                </Typography>
                {item.contents.map((content) => {
                    return (
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {content}
                        </Typography>
                    );
                })}
            </CardContent>
        </Card>
    );
}

const items = [
    {
        title: "Line 01",
        contents: [
            "Paddy Husker x 7",
            "Paddy Separator x 5",
            " Paddy Dryer x 5",
        ],
        imageUrl:
            "https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_1.jpg",
    },
    {
        title: "Line 03",
        contents: [
            "Paddy Husker x 3",
            "Paddy Separator x 2",
            " Paddy Dryer x 2",
        ],
        imageUrl:
            "https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_2.jpg",
    },
    {
        title: "Line 03",
        contents: [
            "Paddy Husker x 6",
            "Paddy Separator x 6",
            " Paddy Dryer x 6",
        ],
        imageUrl:
            "https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_3.jpg",
    },
];
