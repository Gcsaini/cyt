"use client";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { fetchById } from "../../../utils/actions";
import { ToggleCoupanStatusUrl } from "../../../utils/url";
import { toast } from "react-toastify";
const label = { inputProps: { 'aria-label': 'Switch' } };

const CouponSwitch = ({ item }) => {
    const [isActive, setIsActive] = useState(item.is_active);
    const [loading, setLoading] = useState(false);

    const handleToggle = async (event) => {
        const checked = event.target.checked;
        // Optimistically update UI
        setIsActive(checked);
        setLoading(true);

        try {
            const res = await fetchById(`${ToggleCoupanStatusUrl}/${item._id}`);

            console.log("API response =>", res);

            if (res?.status) {
                // make sure we’re reading correct key
                setIsActive(res.data?.is_active ?? checked);
            } else {
                setIsActive(!checked);
                toast.error(res?.message || "Failed to update");
            }
        } catch (error) {
            setIsActive(!checked);
            toast.error("Error updating the status");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <Switch
                {...label}
                checked={Boolean(isActive)}
                onClick={handleToggle}
                disabled={loading}
            />
        </div>
    );
};

export default CouponSwitch;
