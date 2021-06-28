import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
    CardContent,
    Typography,
    CardMedia,
    Grid,
    CircularProgress,
    Card,
    CardActionArea,
    Modal,
} from "@material-ui/core";
import { SelectMenuContext } from "../TopMenu/select-menu-context-provider";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        minHeight: 320,
    },
    mainImage: {
        height: "auto",
    },
    gridList: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
    },
    title: {
        color: "#ededed",
    },
    titleBar: {
        fontSize: 11,
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    modalWrapper: {
        width: "70%",
        height: "70%",
        position: "fixed",
        top: "15%",
        left: "15%",
        backgroundColor: "#ffffff",
        display: "flex",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    }
}));

export const ProductItem = () => {
    const { id } = useParams();

    const [productLine, setProductLine] = useState(undefined);
    const [productList, setProductList] = useState([]);

    const { setSelectedMenu } = useContext(SelectMenuContext);

    useEffect(() => {
        setSelectedMenu("products");
    }, []);

    useEffect(() => {
        fetch(`/api/productLines/${id}`)
            .then((res) => res.json())
            .then(({ productLine: { id, imageUrl, productList } }) => {
                setProductLine({
                    id,
                    imageUrl,
                });

                setProductList(productList);
            });
    }, []);

    if (!productLine || productList.length === 0) {
        return <CircularProgress />;
    }

    return (
        <ProductItemMainInfo
            productLine={productLine}
            productList={productList}
        />
    );
};

const ProductItemMainInfo = ({ productLine, productList }) => {
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
                    <div>{selectedItem.content}</div>
                    <div className={style.mainImage}>
                        <img src={selectedItem.imageUrl} />
                    </div>
                    <div onClick={handleCloseModal} className={style.modalClose}><CloseIcon style={{ fontSize: 40, color: '#ffffff' }} /></div>
                </div>
            </Modal>
        </div>
    );
};

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
