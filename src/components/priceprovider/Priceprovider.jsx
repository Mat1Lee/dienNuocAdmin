import { GIA_DIEN_1,GIA_DIEN_2,GIA_DIEN_3, GIA_DIEN_4, GIA_DIEN_5, GIA_DIEN_6, GIA_NUOC4 } from "../../context/redux/types/AdminTypes";
import { GIA_NUOC1,GIA_NUOC2,GIA_NUOC3 } from "../../context/redux/types/AdminTypes";
export  const giaSoNuoc = (data) => {
  let thanhTien = 0;
  if (0 < data && data <= 10) { return thanhTien = data * GIA_NUOC1 }
  else if (10 < data && data <= 20) {
    return thanhTien = ((data - 20) * GIA_NUOC2 + (10) * GIA_NUOC1)
  } else if (20 < data && data <= 30) {
    return thanhTien = 10 * GIA_NUOC1 + 10 * GIA_NUOC2 + (data - 20) * GIA_NUOC3
  }
  else {
   return thanhTien = 10 * GIA_NUOC1 + 10 * GIA_NUOC2 + 10* GIA_NUOC3 + (data-30)*GIA_NUOC4
  }
}
export  const giaSoDien = (data) => {
  let thanhTien = 0;
  if (0 < data && data <= 50) { return thanhTien = data * GIA_DIEN_1 }
  else if (50 < data && data <= 100) {
    return thanhTien = ((data - 50) * GIA_DIEN_2 + (50) * GIA_DIEN_1)
  } else if (100 < data && data <= 200) {
    return thanhTien = 50 * GIA_DIEN_1 + 100 * GIA_DIEN_2 + (data - 100) * GIA_DIEN_3
  }
   else if (200 < data && data <= 300) {
    return thanhTien = 50 * GIA_DIEN_1 + 100 * GIA_DIEN_2 +  100 * GIA_DIEN_3 +(data-200)*GIA_DIEN_4
  }
   else if (300 < data && data <= 400) {
    return thanhTien = 50 * GIA_DIEN_1 + 100 * GIA_DIEN_2 +  100 * GIA_DIEN_3 +100*GIA_DIEN_4 +(data-300)*GIA_DIEN_5
  }
  else {
   return thanhTien = 50 * GIA_DIEN_1 + 100 * GIA_DIEN_2 +  100 * GIA_DIEN_3 +100*GIA_DIEN_4 +100*GIA_DIEN_5 + (data-400)*GIA_DIEN_6
  }
}
