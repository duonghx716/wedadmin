import React, { useState, useEffect } from "react";
import Select from "../Select";
import Chart from "./Chart";
import { useSelector, useDispatch } from "react-redux";
import {
    getYearRequest,
    getStatisticalRequest,
    getStatisticalOneRequest,
} from "../../../containers/Statistical/action";
import { getStoreRequest } from "../../../containers/Store/action";
import SelectStore from "./Select";
import { makeStyles } from "@material-ui/core/styles";

const initialData = [
    {
        Month: 1,
        total: 2400,
    },
    {
        Month: 2,
        total: 2210,
    },
    {
        Month: 3,
        total: 2290,
    },
    {
        Month: 4,
        total: 2000,
    },
    {
        Month: 5,
        total: 2181,
    },
    {
        Month: 6,
        total: 2500,
    },
    {
        Month: 7,
        total: 2100,
    },
    {
        Month: 8,
        total: 2100,
    },
    {
        Month: 9,
        total: 2100,
    },
    {
        Month: 10,
        total: 2100,
    },
    {
        Month: 11,
        total: 2100,
    },
    {
        Month: 12,
        total: 2100,
    },
];
const useStyles = makeStyles(() => ({
    container: {
        // flexDirection: "row",
        // display: "flex",
        // justifyContent: "space-around",
        width: "95%",
    },
}));

const Main = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [Value1, setValue1] = useState("2021");
    const [Value2, setValue2] = useState("2021");
    const [data, setData] = useState(initialData);
    const [dataOne, setDataOne] = useState(initialData);

    const { dataYear } = useSelector((state) => state.Statistical);
    const { dataOneStore } = useSelector((state) => state.Statistical);
    const dataStore = useSelector((state) => state.store.data);
    const [Value3, setValue3] = useState("183");
    const data1 = useSelector((state) => state.Statistical.data);
    const totalYear = function (data) {
        let sum = 0;
        data?.map((item) => {
            sum += Number(item.total);
        });
        return sum;
    };
    const mapData = (data) => {
        const newData = initialData.map((element) => {
            let total = 0;
            data?.map((item) => {
                if (Number(item.Month) === Number(element.Month)) {
                    return (total = item.total);
                }
            });
            return { ...element, Month: element.Month, total };
        });
        return newData;
    };
    useEffect(() => {
        dispatch(getYearRequest());
        dispatch(getStoreRequest());
    }, []);
    useEffect(() => {
        setDataOne(mapData(dataOneStore));
    }, [dataOneStore]);
    useEffect(() => {
        setData(mapData(data1));
    }, [data1]);

    useEffect(() => {
        dispatch(getStatisticalRequest(Value1));
    }, [Value1]);
    useEffect(() => {
        dispatch(getStatisticalOneRequest(Value2, Value3));
    }, [Value2, Value3]);
    return (
        <div className={classes.container}>
            <Chart
                data={data}
                title={"Tổng doanh thu tất cả cửa hàng"}
                dataKey={"total"}
                totalYear={totalYear(data1)}
                Chidden={
                    <Select
                        title={"Chọn năm"}
                        Value={Value1}
                        setValue={setValue1}
                        dataSelect={dataYear}
                    />
                }
            />
            <Chart
                data={dataOne}
                totalYear={totalYear()}
                dataKey={"total"}
                title={"Tổng doanh thu 1 cửa hàng"}
                totalYear={totalYear(dataOneStore)}
                Chidden={
                    <>
                        <SelectStore
                            title={"Chọn của hàng"}
                            Value={Value3}
                            setValue={setValue3}
                            dataSelect={dataStore}
                        />
                        <Select
                            title={"Chọn năm"}
                            Value={Value2}
                            setValue={setValue2}
                            dataSelect={dataYear}
                        />
                    </>
                }
            />
        </div>
    );
};
export default Main;
