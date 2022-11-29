import axios from "axios";

export const apiService = {
    getEnergyUse
}

async function getEnergyUse() {
    try {
        const res = await axios(process.env.VUE_APP_ENERGY_API)
        return res.data
    } catch (err) {
        console.log(err)
    }
}