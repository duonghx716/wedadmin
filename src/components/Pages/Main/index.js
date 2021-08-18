import React, { useState, useEffect } from "react";
import Select from "../Select";
import Chart from "./Chart";
import { useSelector, useDispatch } from "react-redux";
import {
    getYearRequest,
    getStatisticalRequest,
} from "../../../containers/Statistical/action";
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

const Main = () => {
    const dispatch = useDispatch();
    const [Value, setValue] = useState("2021");
    const [data, setData] = useState(initialData);
    const dataYear = useSelector((state) => state.Statistical.dataYear);
    const data1 = useSelector((state) => state.Statistical.data);
    useEffect(() => {
        dispatch(getYearRequest());
    }, []);
    const totalYear = function () {
        let sum = 0;
        data1?.map((item) => {
            sum += Number(item.total);
        });
        return sum;
    };
    useEffect(() => {
        setData(() => {
            const newData = data.map((element) => {
                let total = 0;
                data1?.map((item) => {
                    if (Number(item.Month) === Number(element.Month)) {
                        return (total = item.total);
                    }
                });
                return { ...element, Month: element.Month, total };
            });
            return newData;
        });
    }, [data1]);
    useEffect(() => {
        dispatch(getStatisticalRequest(Value));
    }, [Value]);

    return (
        <div>
            <Chart
                data={data}
                title={"Tổng doanh thu của tất cả cửa hàng"}
                dataKey={"total"}
                totalYear={totalYear()}
                Chidden={
                    <Select
                        title={"Chọn năm"}
                        Value={Value}
                        setValue={setValue}
                        dataSelect={dataYear}
                    />
                }
            ></Chart>
            <Chart
                data={data1}
                totalYear={totalYear()}
                dataKey={"total"}
                title={"Tổng doanh thu của 1 cửa hàng"}
            />
        </div>
    );
};
export default Main;
