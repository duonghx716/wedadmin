import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
const Chart = ({ data, title, Chidden, dataKey, totalYear }) => {
    const format = Number(totalYear).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div style={{ width: "100%" }}>
            <h2>{`${title} trong năm là ${format}`}</h2>
            {Chidden}
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                    width={"100%"}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Month" />
                    <YAxis domain={[0, 900000]} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey={dataKey}
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
export default React.memo(Chart);
