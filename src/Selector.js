import React from 'react';
import Options from './Options';

const currency = {
    "AED": 3.991487,
    "AFN": 92.018249,
    "ALL": 105.273663,
    "AMD": 422.490414,
    "ANG": 1.967226,
    "AOA": 900.339949,
    "ARS": 380.327743,
    "AUD": 1.702377,
    "AWG": 1.956075,
    "AZN": 1.846464,
    "BAM": 1.955311,
    "BBD": 2.203928,
    "BDT": 119.470111,
    "BGN": 1.955645,
    "BHD": 0.409626,
    "BIF": 3094.239779,
    "BMD": 1.086708,
    "BND": 1.482184,
    "BOB": 7.543043,
    "BRL": 5.421039,
    "BSD": 1.091527,
    "BTC": 0.000037978338,
    "BTN": 90.825442,
    "BWP": 14.851285,
    "BYN": 2.755685,
    "BYR": 21299.479312,
    "BZD": 2.20025,
    "CAD": 1.470691,
    "CDF": 2708.076826,
    "CHF": 0.956608,
    "CLF": 0.034277,
    "CLP": 945.794671,
    "CNY": 7.905688,
    "COP": 4481.855998,
    "CRC": 584.769846,
    "CUC": 1.086708,
    "CUP": 28.797765,
    "CVE": 110.236407,
    "CZK": 24.116442,
    "DJF": 194.351377,
    "DKK": 7.451308,
    "DOP": 61.836237,
    "DZD": 147.781483,
    "EGP": 33.577652,
    "ERN": 16.300622,
    "ETB": 60.224142,
    "EUR": 1,
    "FJD": 2.472098,
    "FKP": 0.852479,
    "GBP": 0.854517,
    "GEL": 2.841765,
    "GGP": 0.852479,
    "GHS": 12.317748,
    "GIP": 0.852479,
    "GMD": 65.799745,
    "GNF": 9377.187095,
    "GTQ": 8.573776,
    "GYD": 228.372866,
    "HKD": 8.510962,
    "HNL": 26.854776,
    "HRK": 7.479595,
    "HTG": 148.458323,
    "HUF": 386.987875,
    "IDR": 16704.768675,
    "ILS": 4.076916,
    "IMP": 0.852479,
    "INR": 90.199382,
    "IQD": 1429.642333,
    "IRR": 45913.418289,
    "ISK": 144.107892,
    "JEP": 0.852479,
    "JMD": 169.186116,
    "JOD": 0.769169,
    "JPY": 159.080482,
    "KES": 155.790082,
    "KGS": 95.923846,
    "KHR": 4516.015636,
    "KMF": 490.651777,
    "KPW": 977.994893,
    "KRW": 1457.585304,
    "KWD": 0.334543,
    "KYD": 0.909672,
    "KZT": 502.124379,
    "LAK": 21270.189314,
    "LBP": 16384.050283,
    "LKR": 350.387504,
    "LRD": 202.33476,
    "LSL": 20.712445,
    "LTL": 3.208767,
    "LVL": 0.657339,
    "LYD": 5.254685,
    "MAD": 10.770106,
    "MDL": 19.277,
    "MGA": 4935.765174,
    "MKD": 61.594024,
    "MMK": 2292.226532,
    "MNT": 3774.40366,
    "MOP": 8.802898,
    "MRO": 387.954615,
    "MUR": 49.776011,
    "MVR": 16.724065,
    "MWK": 1183.914704,
    "MXN": 18.634543,
    "MYR": 5.049384,
    "MZN": 68.734011,
    "NAD": 20.712702,
    "NGN": 854.033121,
    "NIO": 39.931847,
    "NOK": 11.561727,
    "NPR": 145.324986,
    "NZD": 1.837009,
    "OMR": 0.418396,
    "PAB": 1.091517,
    "PEN": 4.042052,
    "PGK": 3.966081,
    "PHP": 61.578344,
    "PKR": 323.372299,
    "PLN": 4.469831,
    "PYG": 7919.945714,
    "QAR": 3.956433,
    "RON": 4.930066,
    "RSD": 117.278688,
    "RUB": 105.791169,
    "RWF": 1305.18548,
    "SAR": 4.07548,
    "SBD": 9.109812,
    "SCR": 14.588391,
    "SDG": 653.072387,
    "SEK": 11.885338,
    "SGD": 1.47983,
    "SHP": 1.322252,
    "SLE": 24.219248,
    "SLL": 21462.485514,
    "SOS": 617.802149,
    "SSP": 653.111338,
    "SRD": 41.514409,
    "STD": 22492.664198,
    "SYP": 14235.618852,
    "SZL": 20.850784,
    "THB": 38.660709,
    "TJS": 11.963297,
    "TMT": 3.814346,
    "TND": 3.360133,
    "TOP": 2.591583,
    "TRY": 29.427729,
    "TTD": 7.397013,
    "TWD": 34.739914,
    "TZS": 2711.336979,
    "UAH": 40.315985,
    "UGX": 4070.925347,
    "USD": 1.086708,
    "UYU": 42.04948,
    "UZS": 13180.581203,
    "VEF": 3419855.347695,
    "VES": 34.199183,
    "VND": 26016.335942,
    "VUV": 131.795399,
    "WST": 3.017799,
    "XAF": 655.792934,
    "XAG": 0.048393,
    "XAU": 0.000574,
    "XCD": 2.936883,
    "XDR": 0.818395,
    "XOF": 655.792934,
    "XPF": 119.200741,
    "YER": 271.996795,
    "ZAR": 20.848516,
    "ZMK": 9781.699629,
    "ZMW": 21.356461,
    "ZWL": 349.919574
}

function SelectCurrency(){
    return(
        <>
            <select name="originCurrency" id="originCurrency">
                <Options/>
            </select> 
        </>
    )
}

export default SelectCurrency;