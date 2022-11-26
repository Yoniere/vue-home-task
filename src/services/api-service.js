import axios from "axios";

export const apiService = {
    getEnergyUse
}

async function getEnergyUse() {
    try {
        const res = await axios('https://datasource.kapsarc.org/api/records/1.0/search/?dataset=emissions_agriculture_energy_e_all_data_norm')
        return res.data
    } catch (err) {
        console.log(err)
    }
}