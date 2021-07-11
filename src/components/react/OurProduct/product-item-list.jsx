import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
    Grid,
    Modal,
    Card,
    CardContent,
    Typography,
    CardMedia,
    CardActionArea,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({

    modalWrapper: {
        width: "70%",
        height: "70%",
        position: "fixed",
        top: "15%",
        left: "15%",
        backgroundColor: "#ffffff",
        display: "flex",
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
    },
    modalClose: {
        position: 'absolute',
        top: -20,
        right: -20,
        width: 40,
        height: 40,
        backgroundColor: 'rgb(51, 153, 255)',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    modalNavigation: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: 48,  
        display: 'flex',
        alignItems: 'center',
    },
    modalPrev: {
        left: 0,
    },
    modalNext: {
        right: 0,
    },
    modalButton: {
        height: 50,
    },
    mainImage: {
        flex: 1,
        '& > img': {
            width: '100%',
        }
    },
    modalTitle: {
        height: 60,
        padding: '20px 10px',
        textAlign: 'center',
        fontSize: 24,
        color: 'rgb(51, 153, 255)',
        textTransform: 'capitalize',
    }
}));

export const ProductItemList = ({ productList }) => {
    const style = useStyles();

    const [selectedItem, setSelectedItem] = useState(undefined);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (productList.length > 0) {
            setSelectedItem({
                imageUrl: productList[0].imageUrl,
                content: productList[0].content,
            });
        }
    }, []);

    if (!selectedItem) {
        return <></>;
    }

    const imageClick = (item) => {
        setSelectedItem(item);
        setOpenModal(true);
    };

    const handleCloseModal = () => setOpenModal(false);

    const goNext = () => {
        const itemIndex = productList.findIndex(i => i.imageUrl === selectedItem.imageUrl);

        if (itemIndex >= productList.length - 1) {
            setSelectedItem(productList[0]);
            return;
        }

        setSelectedItem(productList[itemIndex + 1]);
    }

    const goNPrev = () => {
        const itemIndex = productList.findIndex(i => i.imageUrl === selectedItem.imageUrl);

        if (itemIndex === 0) {
            setSelectedItem(productList[productList.length - 1]);
            return;
        }

        setSelectedItem(productList[itemIndex - 1]);
    }

    return (
        <div className="gb-padding">
            <Grid container spacing={3}>
                {productList &&
                    productList.map((i) => (
                        <Item item={i} imageClick={imageClick} />
                    ))}
            </Grid>
            <Modal open={openModal} onClose={handleCloseModal}>
                <div className={style.modalWrapper}>
                    <div className={style.modalTitle}>{selectedItem.content}</div>
                    <div className={style.mainImage}>
                        <img src={selectedItem.imageUrl} />
                    </div>
                    <div onClick={handleCloseModal} className={style.modalClose}><CloseIcon style={{ fontSize: 40, color: '#ffffff' }} /></div>
                    <div className={`${style.modalNavigation} ${style.modalPrev}`}>
                        <IconButton onClick={goNPrev} className={style.modalButton}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </div>
                    <div className={`${style.modalNavigation} ${style.modalNext}`}>
                        <IconButton onClick={goNext} className={style.modalButton}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

const Item = ({ item, imageClick }) => (
    <Grid item xs={3}>
        <Card>
            <CardContent>
                <Typography variant="body2">{item.title}</Typography>
            </CardContent>
            <CardMedia image={item.imageUrl} title={item.title} />
            <CardActionArea onClick={() => imageClick(item)}>
                <img src={item.imageUrl} />
            </CardActionArea>
        </Card>
    </Grid>
);