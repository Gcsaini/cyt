import React from "react";
import { postData } from "../../../utils/actions";
import { UpdatePaymentStatusUrl } from "../../../utils/url";
import { toast } from "react-toastify";

const styles = {
    selectStyle: {
        lineHeight: "20px",
        height: "45x",
        width:"250px"
    },
};
export default function PaymentStatus({ item, statusList }) {
    const [paymentStatus, setPaymentStatus] = React.useState(item.transaction.status._id);
    const [loading, setLoading] = React.useState(false); // 👈 new state


    const handleStatusChange = async (e) => {
        const value = e.target.value;
        setPaymentStatus(value);
        await callAPi(value);
    };

    const callAPi = async (value) => {
        try {
            setLoading(true);
            const data = {
                statusId: value,
                transactionId: item.transaction._id
            }

            const res = await postData(UpdatePaymentStatusUrl, data);
            if (res.status) {
                toast.success(res.message);
            } else {
                toast.error(res.message);
            }
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }

    };


    return <div className="col-md-6 col-12 mb--20">
        <span style={{fontSize:"13px"}}>{item.transaction._id}</span>
        <select
            style={styles.selectStyle}
            value={paymentStatus}
            onChange={handleStatusChange}
            disabled={loading}
        >
            {statusList && statusList.map((status) => {
                return (
                    <option value={status._id} key={status._id}>
                        {status.name}
                    </option>
                );
            })}
        </select>
    </div>
}