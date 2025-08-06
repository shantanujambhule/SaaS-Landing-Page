export function calcPrice({ baseTierPrice, adSpend, seats }: { baseTierPrice:number, adSpend:number, seats:number }){
  const adFee = Math.round(adSpend * 0.02) // 2% processing / reporting fee
  const seatFee = seats * 12
  return baseTierPrice + adFee + seatFee
}
